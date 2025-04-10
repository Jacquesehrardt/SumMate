import BgGradient from "@/components/common/bg-gradient";
import { MotionDiv } from "@/components/common/motion-wrapper";
import UploadForm from "@/components/upload/upload-form";
import UploadHeader from "@/components/upload/upload-header";
import { hasReachedUploadLimit } from "@/lib/user";
import { containerVariants } from "@/utils/constants";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Page() {
   const user = await currentUser();
   if(!user?.id) return null;
   const email = user?.emailAddresses?.[0]?.emailAddress;

   if(!user?.id){
      redirect("/sign-in");
   }

   const { hasReachedLimit } = await hasReachedUploadLimit(user.id, email);

   if(hasReachedLimit){
      redirect("/dashboard");
   }

   return (
      <section className="min-h-screen">
         <BgGradient />
         <MotionDiv
             variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8"
         >
            <div className="flex flex-col items-center justify-center gap-6 text-center">
               <UploadHeader />
               <UploadForm />
            </div>
         </MotionDiv>
      </section>
   )
}