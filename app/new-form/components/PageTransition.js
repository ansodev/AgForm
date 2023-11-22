import { motion } from "framer-motion";

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -55 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      exit={{ opacity: 0, y: 15 }}
    >
      {children}
    </motion.div>
  );
};