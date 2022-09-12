import { AnimatePresence, motion } from "framer-motion";
import { useReducer } from "react";

import { ChevronRightIcon } from "@heroicons/react/24/solid";

interface Props {
  title: string;
  description: string;
}

const Project = ({ title, description }: Props) => {
  const [open, toggle] = useReducer((prev) => !prev, false);

  return (
    <motion.div
      animate={{ height: open ? "auto" : "56px" }}
      className="flex flex-col overflow-hidden rounded-md border border-white/20 bg-slate-700/30 backdrop-blur-sm"
    >
      <button
        onClick={toggle}
        className="flex select-none items-center p-4 font-medium"
      >
        <div className="flex flex-1">
          <p>{title}</p>
        </div>
        <motion.div animate={{ rotate: open ? 90 : 0 }}>
          <ChevronRightIcon className="h-5 w-5" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mx-4 border-t border-white/20"
          >
            <p className="py-4 px-2 text-white/80">{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Project;
