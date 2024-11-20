import React, { useState } from "react";
import { motion } from "framer-motion";


const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-container">
      <motion.button
        className="cta-button"
        onClick={toggleAccordion}
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)" }}
        whileTap={{ scale: 0.95 }}
      >
        Explore More
      </motion.button>

      <motion.div
        className="accordion-content"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <p className="romantic-message">
          "Every moment spent with you feels like a beautiful adventure, and our bond grows stronger with every laugh and memory we share. You will always have a special place in my heart 🌹💖"
        </p>
        <h1 className="title">sincerely: imslmvvv</h1>
      </motion.div>
    </div>
  );
};

export default Accordion;
