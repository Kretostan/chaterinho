"use client";
import {motion} from "framer-motion";

interface PrimaryButtonProps {
  children: React.ReactNode;
}

const PrimaryButton = ({ children }: PrimaryButtonProps) => {
  return <motion.button
    whileHover={{
      y: -3,
      color: "var(--primary)",
      backgroundColor: "var(--accent)"
    }}
    className="py-3 w-20 md:w-24 bg-accent text-sm md:text-base text-white font-medium rounded-lg cursor-pointer">
    {children}
  </motion.button>;
};

export default PrimaryButton;
