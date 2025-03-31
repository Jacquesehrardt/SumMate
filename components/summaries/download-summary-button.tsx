"use client";

import { Download } from "lucide-react";
import { Button } from "../ui/button";

export default function DownloadSummayButton({ 
   fileName,
   title,
   summaryText,
   createdAt,
}: { 
   fileName: string,
   title: string,
   summaryText: string,
   createdAt: string,
}){
   const handleDownload = () => {
      const summaryContent = `# ${title}
Generated Summary
Generated on: ${new Date(createdAt).toLocaleDateString('en-US', {
   year: 'numeric',
   month: 'long',
   day: 'numeric',
   })}

${summaryText}

Original File: ${fileName}
Generated by SumMate
`;

      // Create the blob and URL
      const blob = new Blob([summaryContent], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);

      // Create the link
      const link = document.createElement('a');
      link.href = url;
      link.download = `Summary-${title.replace(/[^a-z0-9]/gi, '_')}.txt`;

      // Append to the DOM, trigger click, then remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean up the object URL
      URL.revokeObjectURL(url);
   };

   return(
      <Button
         size={"sm"}
         className="h-8 px-3 bg-rose-100 text-rose-600 hover:text-rose-700 hover:bg-rose-50"
         onClick={handleDownload}
      >
         <Download />
         Download Summary
      </Button>       
   );
}