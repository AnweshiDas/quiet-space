import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface InteractiveButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
}

export function InteractiveButton({ 
  children, 
  className, 
  variant = "primary", 
  ...props 
}: InteractiveButtonProps) {
  const baseStyles = "relative px-8 py-3 rounded-full font-medium tracking-wide transition-all duration-300 outline-none";
  
  const variants = {
    primary: "bg-white/10 hover:bg-white/15 text-white border border-white/10 hover:border-white/20 shadow-lg hover:shadow-primary/10",
    ghost: "bg-transparent hover:bg-white/5 text-muted-foreground hover:text-white"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
