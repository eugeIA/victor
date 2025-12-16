"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button = ({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) => {
  const variants = {
    primary: "bg-brand-blue text-white hover:bg-brand-blue-light border-transparent",
    secondary: "bg-brand-yellow text-brand-blue-dark hover:bg-brand-yellow-dark border-transparent font-semibold",
    outline: "bg-transparent border-2 border-brand-blue text-brand-blue hover:bg-brand-blue/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "rounded-full font-medium transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};

