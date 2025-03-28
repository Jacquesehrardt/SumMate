"use client";

import { useUploadThing } from "@/utils/uploadthing";
import UploadFormInput from "@/components/upload/upload-form-input";
import { z } from "zod";
import { toast } from "sonner"
import { generatePdfSummary, storePdfSummaryAction } from "@/actions/upload-actions";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

const schema = z.object({
   file: z
   .instanceof(File, { message: "Invalid file" })
   .refine((file) => file.size <= 20 * 1024 * 1024, "File size must be less than 20MB")
   .refine((file) => file.type.startsWith("application/pdf"), "File must be a PDF")
});

export default function UploadForm() {
   const formRef = useRef<HTMLFormElement>(null);
   const [ isLoading, setIsLoading ] = useState(false);
   const router = useRouter();

   const { startUpload, routeConfig } = useUploadThing("pdfUploader", {
      onClientUploadComplete: () => {
         console.log("uploaded successfully!");
      },
      onUploadError: (err) => {
         toast.error("Error occurred while uploading", {
               description: err.message,
            }
         );
      },
      onUploadBegin: ({ file }) => {
        console.log("upload has begun for", file);
      },
    });

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=> {
      e.preventDefault();

      try{
         setIsLoading(true);
         const formData = new FormData(e.currentTarget);
         const file = formData.get("file") as File;
   
         //Validating the fields
         const validatedFields = schema.safeParse({ file });
         console.log(validatedFields);
         
         if(!validatedFields.success) {
            toast.error("Something went wrong", {
               description:
                  validatedFields.error.flatten().fieldErrors.file?.[0] ?? "Invalid file",
               }
            );
            setIsLoading(false);
            return;
         }
   
         toast.info("Uploading PDF", {
            description: "We are uploading your PDF!",
         });
   
         //
         const resp = await startUpload([file]);
         if (!resp) {
            toast.error("Something went wrong", {
               description: "Please use a different file",
            });
            setIsLoading(false);
            return;
         }
   
         toast.info("Processing PDF", {
            description: "Hang tight! Our AI is reading through your document!",
         });
   
         //Parse the pdf using langchain
         const result = await generatePdfSummary(resp);
   
         const { data = null, message = null} = result || {};
         
         if(data){
            let storeResult: any;
            toast.info("Saving PDF", {
               description: "Hang tight! We are saving your summary!",
            });

            if(data.summary){
               storeResult = await storePdfSummaryAction({
                  summary: data.summary,
                  fileUrl: resp[0].serverData.file.url,
                  title: data.title,
                  fileName: file.name,
               });
               toast.info("Summary Generated", {
                  description: "Your PDF has been successfully summarized and saved!",
               });

               formRef.current?.reset();
               router.push(`/summaries/${storeResult.data.id}`)
            }
         };
      } catch(error){
         setIsLoading(false);
         console.error("Error occurred", error);
         formRef.current?.reset();
      } finally {
         setIsLoading(false);
      }
   };

   return (
      <div className="flex felx-col justify-center gap-8 w-full max-w-2xl mx-auto">
         <UploadFormInput isLoading={isLoading} ref={formRef} onSubmit={handleSubmit} />
      </div>
   );
}