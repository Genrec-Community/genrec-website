import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="text-2xl font-bold mb-4">GENREC</div>
          <p className="text-gray-400 mb-6">Crafting the future, one project at a time.</p>
          <p className="text-sm text-gray-500">&copy; 2024 GENREC. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
