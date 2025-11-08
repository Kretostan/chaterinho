"use client";
import { motion } from "framer-motion";

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<div className="flex flex-col items-center gap-6 bg-[#0d0d0d] text-secondary pt-12 px-6">
			<h4 className="text-3xl text-accent font-semibold">Chaterinho</h4>
			<p className="md:text-lg">Modern communication for modern teams</p>
			<ul className="flex flex-col sm:flex-row items-center md:flex-row gap-4 mt-4 text-sm text-secondary">
				<motion.li
					whileHover={{ color: "var(--accent)" }}
					className="cursor-pointer"
				>
					Features
				</motion.li>
				<motion.li
					whileHover={{ color: "var(--accent)" }}
					className="cursor-pointer"
				>
					Pricing
				</motion.li>
				<motion.li
					whileHover={{ color: "var(--accent)" }}
					className="cursor-pointer"
				>
					About
				</motion.li>
				<motion.li
					whileHover={{ color: "var(--accent)" }}
					className="cursor-pointer"
				>
					Contact
				</motion.li>
				<motion.li
					whileHover={{ color: "var(--accent)" }}
					className="cursor-pointer"
				>
					Privacy
				</motion.li>
				<motion.li
					whileHover={{ color: "var(--accent)" }}
					className="cursor-pointer"
				>
					Terms
				</motion.li>
			</ul>
			<div className="flex flex-col items-center gap-3 mt-6 py-6 max-w-[1200px] w-full border-t-1">
				<p className="text-sm">
					&copy; {year} Chaterinho. All rights reserved.
				</p>
				<p className="text-xs">
					Build with 💖 by <span className="text-accent">Jakub Kret</span>
				</p>
			</div>
		</div>
	);
};

export default Footer;
