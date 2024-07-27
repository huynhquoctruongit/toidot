import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

const variantsHidden = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};
interface PropsAux {
  open?: any;
  toggle?: any;
  children: any;
  disableClose?: any;
  preventHideClickOverlay?: any;
}
const ModalView = ({ open, toggle = () => {}, children, disableClose, preventHideClickOverlay }: PropsAux) => {
  useEffect(() => {
    const handleClose = (event: any) => {
      const code = event.keyCode || event.which;
      if (code === 27) toggle && toggle();
    };
    document.addEventListener("keydown", handleClose);
    return () => {
      document.removeEventListener("keydown", handleClose);
    };
  }, []);

  return (
    <div>
      {createPortal(
        <AnimatePresence>
          {open && (
            <Content
              disableClose={disableClose}
              toggle={toggle}
              preventHideClickOverlay={preventHideClickOverlay}
              children={children}
              open={open}
            />
          )}
        </AnimatePresence>,
        document.body,
      )}
    </div>
  );
};
export default ModalView;

const Content = ({ disableClose, preventHideClickOverlay, toggle, open, children }: any) => {
  const onClickBackdrop = () => {
    if (disableClose === true || preventHideClickOverlay === true) {
      return;
    }
    toggle();
  };
  useEffect(() => {
    console.log(open);
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);
  return (
    <motion.div
      variants={variantsHidden}
      initial="hidden"
      exit="hidden"
      animate="visible"
      transition={{
        ease: "linear",
        duration: 0.1,
      }}
      className="fixed flex items-center lg:justify-center z-[10000] top-0 left-0 w-screen h-screen backdrop-blur-[2px] bg-black/20"
    >
      <div onClick={onClickBackdrop} className="absolute z-80 inset-0 top-0 left-0 w-screen h-screen"></div>
      <div className="relative z-50 mx-[20px] w-full md:w-fit rounded-[20px] md:mx-auto">{children}</div>
    </motion.div>
  );
};
