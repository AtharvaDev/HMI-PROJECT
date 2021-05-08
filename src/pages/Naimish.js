import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";
import AboutNaimish from "../Naimish-profile/AboutNaimish";
import ExpNaimish from "../Naimish-profile/ExpNaimish";

function Naimish() {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      Naimish
      <AboutNaimish />
      <ExpNaimish />
      <ScrollTop />
    </motion.div>
  );
}

export default Naimish;
