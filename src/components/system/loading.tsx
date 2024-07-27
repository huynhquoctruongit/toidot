import { oapcityVariants } from "@/services/motion";
import { motion } from "framer-motion";
const Loading = ({ className }: any) => {
  return (
    <motion.div variants={oapcityVariants} initial="hidden" animate="visible" exit={"hidden"} className={"w-full flex items-center justify-center " + className}>
      <img className="w-16" src="/images/patato.png" alt="" />
    </motion.div>
  );
};

export default Loading;
