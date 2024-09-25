import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";

const Spin = ({ className }: any) => {
  return <LoaderCircle className={cn("h-4 w-4 animate-spin", className)} />;
};

export default Spin;
