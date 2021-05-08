import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";
import AboutSangita from "../Sangita-profile/AboutSangita";
import ExpSangita from "../Sangita-profile/ExpSangita";

function Sangita() {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      Sangita
      <AboutSangita />
      <ExpSangita />
      <ScrollTop />
    </motion.div>
  );
}

export default Sangita;
