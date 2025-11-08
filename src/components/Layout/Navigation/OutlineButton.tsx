"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface OutlineButtonProps {
	children: ReactNode;
}

const OutlineButton = ({ children }: OutlineButtonProps) => {
	return (
		<motion.button
			whileHover={{
				color: "var(--primary)",
				backgroundColor: "var(--accent)",
			}}
			className="py-3 w-18 md:w-24 text-sm md:text-base text-accent rounded-lg border-2 border-accent cursor-pointer"
		>
			{children}
		</motion.button>
	);
};

export default OutlineButton;
