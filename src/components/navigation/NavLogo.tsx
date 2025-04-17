
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NavLogo = () => (
  <motion.div 
    className="flex items-center"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Link to="/" className="flex items-center">
      <div className="flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-br from-purple-600 to-blue-500 text-white font-bold">
        H
      </div>
      <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">HelixHub</span>
    </Link>
  </motion.div>
);

export default NavLogo;
