"use client";
import {ReactNode} from "react";
import {motion} from "framer-motion";

interface OutlineButtonProps {
  children: ReactNode;
}

const OutlineButton = ({ children }: OutlineButtonProps) => {
  return <motion.button
    whileHover={{ backgroundColor: "rgb(0, 123, 255)" }}
    className="py-4 w-full md:w-44 text-sm md:text-lg text-white rounded-xl border-2 border-white cursor-pointer">
    {children}
  </motion.button>;
};

export default OutlineButton;
