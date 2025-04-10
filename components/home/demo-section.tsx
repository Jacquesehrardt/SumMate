import { PizzaIcon } from "lucide-react";
import BgGradientLandingPage from "@/components/home/bg-gradient-landing-page";
import SummaryViewer from "@/components/summaries/summary-viewer";
import { MotionDiv, MotionH3 } from "@/components/common/motion-wrapper";

const DEMO_SUMMARY = `
# 🌟 Overview!       
• 🚀 Unleash the power of Java, a versatile and widely-used programming language for building enterprise applications. 🖥️
    
# Document Details
• 📑 Type: Programming Tutorial
• 👥 For: Newbies & Aspiring Developers

# Key Highlights
• 🎯 Java's "Write Once, Run Anywhere" mantra ensures platform independence through JVM.
• ⭐ Master Java's setup, from JDK installation to running your first "Hello World" program.
• 💫 Explore Java's core concepts: variables, data types, operators, and control flow.

# Why It Matters
• 💡 Java is the backbone of countless applications worldwide. Mastering Java opens doors to software development, enhancing your career prospects and technical prowess.

# Main Points
• 🎯 Understand Java's object-oriented nature to create reusable and maintainable code.
• 💪 Leverage Java's robust features: security, multithreading, and high performance.
• 🔥 Grasp the essentials of Java syntax and structure to kickstart your coding journey.

# Pro Tips
• ⭐ Always verify your Java installation using "java -version" and "javac -version".
• 💎 Use an IDE like IntelliJ IDEA for an enhanced coding experience. 
• 🌟 Regularly practice writing Java programs to solidify your understanding

# Key Terms to Know
• 📚 JVM: Java Virtual Machine that allows Java programs to run on any device.
• 🔍 IDE: Integrated Development Environment, a tool to simplify coding.

# Bottom Line
• 💫 Java is your gateway to becoming a proficient developer with skills applicable in various tech domains. Start coding today and turn your ideas into reality!`;


export default function DemoSection() {
   return (
      <section className="relative">
         <div className="py-12 lg:py-24 mx-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
            {/* Gradient */}
            <BgGradientLandingPage />
            {/* Pizza Icon and text */}
            <div className="flex flex-col items-center text-center space-y-4">
               <div className="inline-flex items-center justify-center p-2 rounded-2xl bg-gray-100/80 backdrop-blur-xs border border-gray-500/20 mb-4">
                  <PizzaIcon className="w-6 h6 text-rose-500" />
               </div>
               <div className="text-center mb-16">
                  <MotionH3 
                     initial={{y: 20, opacity: 0}}
                     whileInView={{y: 0, opacity: 1}}
                     transition={{duration: 0.5, dalay: 0.2}}
                     className="font-bold text-3xl max-w-2xl mx-auto px-4 sm:px-6"
                  >
                     Watch how SumMate transform{" "}
                     <span className="bg-linear-to-r from-rose-500 to-rose-700 bg-clip-text text-transparent">
                        this Java course PDF
                     </span>
                     {" "}into an easy-to-read summary!
                  </MotionH3>
               </div>
            </div>
            {/* Summary Viewer */}
            <div className="flex justify-center items-center px-2 sm:px-4 lg:px-6">
               <MotionDiv
                  initial={{opacity: 0}}
                  whileInView={{opacity: 1}}
                  transition={{duration: 0.5}}
                  className="relative w-full flex items-center justify-center"
               >
                  <SummaryViewer summary={DEMO_SUMMARY} />
               </MotionDiv>
            </div>
         </div>
      </section>
   );
}