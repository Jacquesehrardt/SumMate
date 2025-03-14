import BgGradientLandingPage from "@/components/home/bg-gradient-landing-page";
import { BrainCircuit, FileOutput, FileText, MoveRight } from "lucide-react";
import { ReactNode } from "react";

type Step = {
   icon: ReactNode;
   label: string;
   description: string;
};

const steps: Step[] = [
   {
      icon: <FileText size={64} strokeWidth={1.5} />,
      label: "Upload PDF",
      description: "Simply drag and drop your PDF document or click to upload",
   },
   {
      icon: <BrainCircuit size={64} strokeWidth={1.5} />,
      label: "AI Analysis",
      description: "Our asvanced AI processes and analyzes your document instantly",
   },
   {
      icon: <FileOutput size={64} strokeWidth={1.5} />,
      label: "Get Summary",
      description: "Recive a clear, concise of your document",
   },
];

export default function HowItWorksSection() {
   return (
      <section className="relative overflow-hidden bg-gray-50">
          <div className="py-12 lg:py-24 mx-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
            <BgGradientLandingPage />

            <div className="text-center mb-16">
               <h2 className="font-bold text-xl uppercase mb-4 text-rose-500">How it works</h2>
               <h3 className="font-bold text-3xl max-w-2xl mx-auto">
                  Transform any PDF into an easy-to-digest summay in three simple steps
               </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
               {steps.map((step, idx) => (
                  <div className="relative flex items-stretch"> 
                     <StepItem key={idx} {...step} />
                     
                     {idx < steps.length -1 && (
                        <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                           <MoveRight size={32} strokeWidth={1} className="text-rose-400" />
                        </div>
                     )}
                  </div>
               ))}
            </div>
          </div>
      </section>
   );
}

function StepItem({ icon, label, description }: Step) {
   return (
      <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-xs border border-white/10 hover:border-rose-500/50 transition-colors group w-full">
         <div className="flex flex-col gap-4 h-full">
            <div className="flex items-center justify-center h-24 w-24 mx-auto rounded-2xl bg-linear-to-br from-rose-500/10 to-transparent group-hover:from-rose-500/20 transition-colors">
               <div className="text-rose-500">{icon}</div>
            </div>
            <div className="flex flex-col flex-1 gap-1 justify-between text-center">
               <h4 className="font-bold text-xl">{label}</h4>
               <p className="text-gray-600 text-sm">{description}</p>
            </div>
         </div>
      </div>
   )
}