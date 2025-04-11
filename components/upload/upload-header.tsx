import BadgeSparkles from "@/components/common/badge-sparkles";
import { MotionDiv } from "../common/motion-wrapper";
import { itemVariants } from "@/utils/constants";

export default function UploadHeader() {
   return (
      <div className="flex flex-col items-center justify-center gap-6 text-center">
         <BadgeSparkles>AI-Powered Content Creation</BadgeSparkles>
         <MotionDiv variants={itemVariants} className="capitalize text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Start Uploading{" "}
            <span className="relative inline-block">
               <span className="relative z-10 px-2">Your PDF's</span>
               <span
                  className="absolute inset-0 bg-rose-200/50 -rotate-2 rounded-lg transform -skew-y-1"
                  aria-hidden="true"
               ></span>
            </span>
         </MotionDiv>
         <MotionDiv variants={itemVariants} className="mt-2 text-lg leading-8 text-gray-600 max-w-2xl">
            <p>Upload your PDF and let out AI do the Magic!</p>
         </MotionDiv>
      </div>
   )
}