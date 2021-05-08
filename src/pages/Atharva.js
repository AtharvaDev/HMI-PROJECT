import React from "react";
import FaqSection from "../components/FaqSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";
import AboutAtharva from "../Atharva-profile/AboutAtharva";
import ExpAtharva from "../Atharva-profile/ExpAtharva";

function Atharva() {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      Atharva
      <AboutAtharva />
      <ExpAtharva />
    </motion.div>
  );
}

export default Atharva;
