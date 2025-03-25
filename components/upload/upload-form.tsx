"use client";

import { useUploadThing } from "@/utils/uploadthing";
import UploadFormInput from "./upload-form-input";
import { z } from "zod";

const schema = z.object({
   file: z
   .instanceof(File, { message: "Invalid file" })
   .refine((file) => file.size <= 20 * 1024 * 1024, "File size must be less than 20MB")
   .refine((file) => file.type.startsWith("application/pdf"), "File must be a PDF")
});

export default function UploadForm() {
   const { startUpload, routeConfig } = useUploadThing("pdfUploader", {
      onClientUploadComplete: () => {
         console.log("uploaded successfully!");
      },
      onUploadError: (err) => {
         console.log("error occurred while uploading", err);
      },
      onUploadBegin: ({ file }) => {
        console.log("upload has begun for", file);
      },
    });

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=> {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const file = formData.get("file") as File;
      //Validating the fields
      const validatedFields = schema.safeParse({ file });

      if(!validatedFields.success) {
         console.log(
            validatedFields.error.flatten().fieldErrors.file?.[0] ?? "Invalid file"
         );
         return;
      }

      //
      const resp = await startUpload([file]);
      if (!resp) {
         return;
      }

      console.log("Submitted");
      console.log(validatedFields);
   };

   return (
      <div className="flex felx-col justify-center gap-8 w-full max-w-2xl mx-auto">
         <UploadFormInput onSubmit={handleSubmit} />
      </div>
   );
}