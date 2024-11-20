import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Accordion from "./Accordion";

import { motion } from "framer-motion";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="herooo">
        <div className="hero-container">
          {/* Background Layers for Parallax Effect */}
          <div className="background-layer layer-1"></div>
          <div className="background-layer layer-2"></div>

          {/* Animated Butterfly */}
          <motion.div
            className="butterfly"
            animate={{
              x: [0, 300, -300, 0],
              y: [0, 100, -50, 0],
              rotate: [0, 45, -45, 0],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            🦋
          </motion.div>

          {/* Floating Flower */}
          <motion.div
            className="flower"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            🌸
          </motion.div>

          

          {/* Welcome Message */}
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            Hello, Sh! 🌷
          </motion.h1>

          {/* Subtle Animation for Subtitle */}
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1.5 }}
          >
            You inspire beauty and joy every day.
          </motion.p>

          {/* Call-to-Action Button */}
          {/* <Accordion/> */}
          <Accordion/>
        </div>
      </div>
    </>
  );
}

export default App;
