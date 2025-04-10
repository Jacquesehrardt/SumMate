import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import BadgeSparkles from "@/components/common/badge-sparkles";
import { MotionDiv, MotionH1, MotionH2, MotionSection, MotionSpan } from "@/components/common/motion-wrapper";
import { containerVariants, itemVariants } from "@/utils/constants";

const buttonVariants = {
   scale: 1.05,
   transition: {
      type: 'spring',
      stiffness: 300,
      damping: 10,
   },
};

export default function HeroSection() {
   return (
      <MotionSection
         variants={containerVariants}
         initial="hidden"
         animate="visible"
         className="relative mx-auto flex flex-col z-0 items-center justify-center py-16 sm:py-20 lg:pb-28 transition-all animate-in lg:px-12 max-w-7xl"
      >
         <div className="">
            <BadgeSparkles>Powered by AI</BadgeSparkles>
         </div>
         <MotionH1 variants={itemVariants} className="font-bold py-6 text-center">
            Transform PDFs into{" "}
            <span className="relative inline-block">
               <MotionSpan 
                  whileHover={buttonVariants} 
                  className="relative z-10 px-2"
               >
                  concise
               </MotionSpan>
               <span
                  className="absolute inset-0 bg-rose-200/50 -rotate-2 rounded-lg transform -skew-y-1"
                  aria-hidden="true"
               ></span>
            </span>
            {" "}summaries
         </MotionH1>
         <MotionH2 variants={itemVariants} className="text-lg sm:text-xl lg:text-2xl text-center px-4 lg:px-0 lg:max-w-4xl text-gray-600">
            Get a beautiful summary reel of the document in seconds.
         </MotionH2>
         <MotionDiv variants={itemVariants} whileHover={buttonVariants}>
            <Button 
            variant={"link"}
            className="text-white mt-6 text-base sm:text-lg lg:text-xl rounded-full px-8 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-8 lg:mt-16 bg-linear-to-r from-slate-900 to-rose-500 hover:from-rose-500 hover:to-slate-900 hover:no-underline font-bold shadow-lg transition-all duration-300"
            >
               <Link 
                  href={"/#pricing"}
                  className="flex gap-2 items-center"
               >
                  <span>Try SumMate</span>
                  <ArrowRight className="animate-pulse" />
               </Link>
               
            </Button>
         </MotionDiv>
      </MotionSection>
   );
}