"use client";
import { motion } from "framer-motion";

const Features = () => {
	return (
		<div className="flex flex-col items-center bg-section w-screen px-6 text-center pt-20 pb-16">
			<div>
				<h4 className="text-3xl/12 md:text-5xl/18 font-bold">
					Everything you need to stay connected
				</h4>
				<p className="mt-8 mb-20 text-secondary">
					Powerful features designed to enhance your team&apos;s productivity
					and collaboration
				</p>
			</div>
			<div className="flex flex-col md:flex-row justify-center gap-10 flex-wrap max-w-[1200px] w-full">
				<motion.div
					initial={{
						boxShadow: "none",
					}}
					whileHover={{
						y: -6,
						boxShadow: "0 0 5px 1px var(--accent)",
						transition: { type: "tween", duration: 0.3 },
						borderColor: "var(--accent)",
					}}
					className="flex flex-col gap-5 items-center text-center md:w-[45%] lg:w-[30%] bg-[#2d2d2d] rounded-2xl border-1 border-border p-8"
				>
					<motion.span
						initial={{
							boxShadow: "0 0 5px 1px var(--accent)",
						}}
						className="flex items-center justify-center bg-accent rounded-full w-20 h-20 text-4xl p-3"
					>
						💬
					</motion.span>
					<h5 className="text-2xl font-semibold">Real-time Messaging</h5>
					<p className="text-secondary">
						Instant messaging with typing indicators, read receipts, and
						seamless synchronization across all devices.
					</p>
				</motion.div>
				<motion.div
					initial={{
						boxShadow: "none",
					}}
					whileHover={{
						y: -6,
						boxShadow: "0 0 5px 1px var(--accent)",
						transition: { type: "tween", duration: 0.3 },
						borderColor: "var(--accent)",
					}}
					className="flex flex-col gap-5 items-center text-center md:w-[45%] lg:w-[30%] bg-[#2d2d2d] rounded-2xl border-1 border-border p-8"
				>
					<motion.span
						initial={{
							boxShadow: "0 0 5px 1px var(--accent)",
						}}
						className="flex items-center justify-center bg-accent rounded-full w-20 h-20 text-4xl p-3"
					>
						📁
					</motion.span>
					<h5 className="text-2xl font-semibold">File Sharing</h5>
					<p className="text-secondary">
						Share documents, images, and files effortlessly with drag-and-drop
						functionality and preview support.
					</p>
				</motion.div>
				<motion.div
					initial={{
						boxShadow: "none",
					}}
					whileHover={{
						y: -6,
						boxShadow: "0 0 5px 1px var(--accent)",
						transition: { type: "tween", duration: 0.3 },
						borderColor: "var(--accent)",
					}}
					className="flex flex-col gap-5 items-center text-center md:w-[45%] lg:w-[30%] bg-[#2d2d2d] rounded-2xl border-1 border-border p-8"
				>
					<motion.span
						initial={{
							boxShadow: "0 0 5px 1px var(--accent)",
						}}
						className="flex items-center justify-center bg-accent rounded-full w-20 h-20 text-4xl p-3"
					>
						🎥
					</motion.span>
					<h5 className="text-2xl font-semibold">Video Calls</h5>
					<p className="text-secondary">
						High-quality video conferencing with screen sharing, recording, and
						up to 100 participants.
					</p>
				</motion.div>
				<motion.div
					initial={{
						boxShadow: "none",
					}}
					whileHover={{
						y: -6,
						boxShadow: "0 0 5px 1px var(--accent)",
						transition: { type: "tween", duration: 0.3 },
						borderColor: "var(--accent)",
					}}
					className="flex flex-col gap-5 items-center text-center md:w-[45%] lg:w-[30%] bg-[#2d2d2d] rounded-2xl border-1 border-border p-8"
				>
					<motion.span
						initial={{
							boxShadow: "0 0 5px 1px var(--accent)",
						}}
						className="flex items-center justify-center bg-accent rounded-full w-20 h-20 text-4xl p-3"
					>
						🔒
					</motion.span>
					<h5 className="text-2xl font-semibold">Enterprise security</h5>
					<p className="text-secondary">
						End-to-end encryption, SSO integration, and compliance with industry
						security standards.
					</p>
				</motion.div>
				<motion.div
					initial={{
						boxShadow: "none",
					}}
					whileHover={{
						y: -6,
						boxShadow: "0 0 5px 1px var(--accent)",
						transition: { type: "tween", duration: 0.3 },
						borderColor: "var(--accent)",
					}}
					className="flex flex-col gap-5 items-center text-center md:w-[45%] lg:w-[30%] bg-[#2d2d2d] rounded-2xl border-1 border-border p-8"
				>
					<motion.span
						initial={{
							boxShadow: "0 0 5px 1px var(--accent)",
						}}
						className="flex items-center justify-center bg-accent rounded-full w-20 h-20 text-4xl p-3"
					>
						🌐
					</motion.span>
					<h5 className="text-2xl font-semibold">Cross-Platform</h5>
					<p className="text-secondary">
						Available on desktop, mobile, and web with seamless synchronization
						and offline support.
					</p>
				</motion.div>
				<motion.div
					initial={{
						boxShadow: "none",
					}}
					whileHover={{
						y: -6,
						boxShadow: "0 0 5px 1px var(--accent)",
						transition: { type: "tween", duration: 0.3 },
						borderColor: "var(--accent)",
					}}
					className="flex flex-col gap-5 items-center text-center md:w-[45%] lg:w-[30%] bg-[#2d2d2d] rounded-2xl border-1 border-border p-8"
				>
					<motion.span
						initial={{
							boxShadow: "0 0 5px 1px var(--accent)",
						}}
						className="flex items-center justify-center bg-accent rounded-full w-20 h-20 text-4xl p-3"
					>
						⚡
					</motion.span>
					<h5 className="text-2xl font-semibold">Integrations</h5>
					<p className="text-secondary">
						Connect with your favorite tools and services to streamline your
						workflow and boost productivity.
					</p>
				</motion.div>
			</div>
		</div>
	);
};

export default Features;
