export default function Footer() {
   return (
      <footer className="bg-gray-100 text-gray-600 py-6">
         <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm mb-2 sm:mb-0">
               &copy; 2025 SumMate by Jacques Ehrardt. All rights reserved.
            </p>
            <div className="flex space-x-4">
               <a href="https://github.com/Jacquesehrardt" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-rose-600">
                  GitHub
               </a>
               <a href="https://www.linkedin.com/in/jacques-ehrardt/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-rose-600">
                  LinkedIn
               </a>
            </div>
         </div>
      </footer>
   );
}