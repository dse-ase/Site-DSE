import { motion } from 'motion/react';

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="bg-gray-900 dark:bg-gray-950 text-white py-6"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* fundalul e închis în ambele teme, deci gray-400 (~6.9:1), nu gray-500 */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Departamentul de Statistică și Econometrie · ASE București
        </p>
      </div>
    </motion.footer>
  );
}
