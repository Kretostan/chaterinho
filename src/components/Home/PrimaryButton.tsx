"use client";
import {motion} from "framer-motion";

interface PrimaryButtonProps {
  children: React.ReactNode;
}

const PrimaryButton = ({ children }: PrimaryButtonProps) => {
  return <motion.button
    whileHover={{ y: -3 }}
    className="py-4 w-full md:w-44 bg-white text-sm md:text-lg text-accent font-medium rounded-xl cursor-pointer">
    {children}
  </motion.button>;
};

export default PrimaryButton;
