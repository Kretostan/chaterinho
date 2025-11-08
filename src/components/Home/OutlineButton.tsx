"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface OutlineButtonProps {
	children: ReactNode;
}

const OutlineButton = ({ children }: OutlineButtonProps) => {
	return (
		<motion.button
			style={{
				backgroundColor: "rgb(0,123,255)",
			}}
			whileHover={{
				backgroundColor: "rgb(30,140,255)",
			}}
			className="py-4 w-full max-w-[300px] md:max-w-[200px] text-sm md:text-lg text-white rounded-xl border-2 border-white cursor-pointer"
		>
			{children}
		</motion.button>
	);
};

export default OutlineButton;
