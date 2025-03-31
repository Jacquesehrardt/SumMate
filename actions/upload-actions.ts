"use server";

import { fetchAndExtractPdfText } from "@/lib/langchain";
import { generateSummaryFromOpenAi } from "@/lib/openai";
import { generateSummaryFromGemini } from "@/lib/geminiai";
import { auth } from "@clerk/nextjs/server";
import { getDbConnection } from "@/lib/db";
import { formatFileNameAsTitle } from "@/utils/format-utils";
import { revalidatePath } from "next/cache";

interface PdfSummaryType {
   userId?: string;
   fileUrl: string;
   summary: string;
   title: string;
   fileName: string;
}

export async function generatePdfSummary(uploadResponse: [{
   serverData: {
      userId: string,
      file: {
         url: string,
         name: string,
      };
   },
}]) {
   if(!uploadResponse){
      return {
         success: false,
         message: "File upload failed",
         data: null,
      }
   }

   const {
      serverData: {
         userId,
         file: { url: pdfUrl, name: fileName }
      },
   } = uploadResponse[0];

   if(!pdfUrl){
      return {
         success: false,
         message: "File upload failed",
         data: null,
      };
   }

   try{
      const pdfText = await fetchAndExtractPdfText(pdfUrl);
      console.log({ pdfText })

      let summary;
      try{
         summary = await generateSummaryFromOpenAi(pdfText);
         console.log({ summary })
      } catch(error){
         console.log(error)
         //Gemini
         if(error instanceof Error && error.message === "RATE_LIMIT_EXCEEDED"){
            try{
               summary = await generateSummaryFromGemini(pdfText);
            } catch(geminiError){
               console.error("Gemini API failed after OpenAI quote exceeded", geminiError);
               throw new Error("Failed to generate summary with available AI providers");
            }
         }
      }

      if(!summary){
         return {
            success: false,
            message: "Failed to generate summary",
            data: null,
         };
      }

      const formattedFileName = formatFileNameAsTitle(fileName);

      return {
         success: true,
         message: "Summary generated successfully",
         data: {
            title: formattedFileName,
            summary,
         },
      };

   } catch(err) {
      return {
         success: false,
         message: "File upload failed",
         data: null,
      };
   }
}

async function savePdfSummary({
   userId,
   fileUrl,
   summary,
   title,
   fileName,
}: PdfSummaryType) {
   try{
      const sql = await getDbConnection();
      const [savedSummary] = await sql`
      INSERT INTO pdf_summaries (
         user_id,
         original_file_url,
         summary_text,
         title,
         file_name
      ) VALUES (
         ${userId},
         ${fileUrl},
         ${summary},
         ${title},
         ${fileName}
      ) RETURNING id, summary_text`;
      
      return savedSummary;
   } catch(error){
      console.error("Error saving PDF Summary", error);
      throw error;
   }
}

export async function storePdfSummaryAction({
   fileUrl,
   summary,
   title,
   fileName,
}: PdfSummaryType){
   let savedSummary: any;
   try{
      const { userId } = await auth();
      if(!userId){
         return {
            success: false,
            message: "User not found",
         };
      }

      savedSummary = await savePdfSummary({
         userId,
         fileUrl,
         summary,
         title,
         fileName
      });

      if(!savedSummary){
         return {
            success: false,
            message: "Failed to save PDF summary, please try again...",
         };
      }
   } catch(error){
      return {
         success: false,
         message: error instanceof Error ? error.message : "Error saving PDF summary",
      };
   }
   //Revalidate cache
   revalidatePath(`/summaries/${savedSummary.id}`);

   return {
      success: true,
      message: "PDF summary saved successfully",
      data: {
         id: savedSummary.id,
      }
   };
}