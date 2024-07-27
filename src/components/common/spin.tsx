import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";

const Spin = ({ className }: any) => {
  return <LoaderCircle className={cn("w-4 h-4 animate-spin", className)} />;
};


export default Spin;