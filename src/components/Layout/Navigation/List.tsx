"use client";
import {motion} from 'framer-motion';

const List = () => {
  return <nav className="hidden md:block">
    <ul className="flex gap-8 text-primary">
      <motion.li whileHover={{ color: "var(--accent)" }} className="cursor-pointer">Features</motion.li>
      <motion.li whileHover={{ color: "var(--accent)" }} className="cursor-pointer">Why Us</motion.li>
      <motion.li whileHover={{ color: "var(--accent)" }} className="cursor-pointer">Get Started</motion.li>
      <motion.li whileHover={{ color: "var(--accent)" }} className="cursor-pointer">Contact</motion.li>
    </ul>
  </nav>;
};

export default List;
