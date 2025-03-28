import { GoogleGenerativeAI } from "@google/generative-ai";
import { SUMMARY_SYSTEM_PROMPT } from "@/utils/prompts";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function generateSummaryFromGemini(pdfText: string) {
   try {
      const model = genAI.getGenerativeModel({
         model: "gemini-1.5-pro-002",
         generationConfig: {
         temperature: 0.7,
         maxOutputTokens: 1500,
         },
      });

      const prompt = {
         contents: [
            {
               role: "user",
               parts: [
                  { text: SUMMARY_SYSTEM_PROMPT },
                  { text: `Transform this document into an engaging, easy-to-read summary with contextually relevant emojis and proper markdown formatting:\n\n${pdfText}` },
               ],
            },
         ],
      };

      const result = await model.generateContent(prompt);
      const text = result.response.text();

      if(!text){
         throw new Error("Empty response from Gemini API")
      }

      return text;
   } catch (error: any) {
      console.error("Gemini API Error:", error)
      throw error;
   }
}