import { motion } from "framer-motion";
import collegeLogo from "@/assets/college-logo.png";

const Header = () => {
  return (
    <motion.header
      className="w-full bg-card/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-40"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* College Logo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <img
              src={collegeLogo}
              alt="K.R. Mangalam University"
              className="h-10 sm:h-12 w-auto animate-glow-intense"
            />
          </motion.div>

          {/* Center Title */}
          <motion.div
            className="flex-1 text-center px-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-lg sm:text-xl lg:text-2xl font-orbitron font-bold text-primary leading-tight">
              <span className="block sm:inline">Centre of Excellence</span>
              <span className="block sm:inline sm:ml-2">in AI - 2025</span>
            </h1>
          </motion.div>

          {/* Right spacer to balance the logo */}
          <div className="flex-shrink-0 w-10 sm:w-12" />
        </div>
      </div>
      
      {/* Animated underline */}
      <motion.div
        className="h-0.5 bg-gradient-neural"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      />
    </motion.header>
  );
};

export default Header;