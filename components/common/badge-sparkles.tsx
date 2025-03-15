import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export default function BadgeSparkles ({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <div className="relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group">
         <Badge
            variant={"secondary"}
            className="relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-rose-100 transition-colors duration-200"
         >
            <Sparkles className="h-6 w-6 mr-2 text-rose-600 animate-pulse" />
            <p className="text-base text-rose-500">
               {children}
            </p>
         </Badge>
      </div>
   )
}