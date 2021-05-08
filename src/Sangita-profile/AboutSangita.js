import React from "react";
import home1 from "../lotties/36185-animation-about-seo-dashboard.json";
import { About, Description, Image, Hide } from "../styles";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "../components/Wave";
import LottieAnimation from "../Lottie";
import "../App.css";

function AboutSangita() {
  return (
    <About>
      <Description>
        <div className="abt">
          <div className="abtleft">
            <motion.div>
              <Hide>
                <motion.h2 variants={titleAnim}>
                  Name: <span>Sangita Toppo</span>
                </motion.h2>
              </Hide>
              <Hide>
                <motion.h2 variants={titleAnim}>
                  Roll No: <span>COMPS A 61</span>
                </motion.h2>{" "}
              </Hide>
              <Hide>
                <motion.h2 variants={titleAnim}>
                  ID: <span>TU3F1718070</span>
                </motion.h2>{" "}
              </Hide>
            </motion.div>{" "}
          </div>

          <div className="abtRight">
            <LottieAnimation
              lotti={home1}
              height={"null"}
              width={"null"}
              speed={2}
            />
          </div>
        </div>
      </Description>

      <Wave />
    </About>
  );
}

export default AboutSangita;
