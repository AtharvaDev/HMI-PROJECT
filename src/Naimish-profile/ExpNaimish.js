import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import { AnimateSharedLayout } from "framer-motion";
import { fade } from "../animation";
import Toggle from "../components/Toggle";
import { useScroll } from "../components/useScroll";
import exp1a from "./Experiments/NJ HMI 1a.docx";
import exp1b from "./Experiments/NJ HMI 1b.pdf";
import exp2 from "./Experiments/NJ HMI 2.docx";
import exp3 from "./Experiments/NJ HMI 3.docx";
import exp4 from "./Experiments/NJ HMI 4.docx";
import exp5 from "./Experiments/NJ HMI 5.docx";
import exp6 from "./Experiments/NJ HMI 6.docx";
import exp7 from "./Experiments/NJ HMI 7.docx";
import exp8 from "./Experiments/NJ HMI 8.docx";
import exp9 from "./Experiments/NJ HMI 9.docx";

function ExpNaimish() {
  const [element, controls] = useScroll();
  return (
    <Faq variants={fade} ref={element} animate={controls} initial="hidden">
      <h2 style={{ display: "flex" }}>
        <span style={{ marginRight: "10px" }}>HMI </span> EXPERIMENTS
      </h2>
      <AnimateSharedLayout>
        <Toggle title="EXPERIMENT 1a">
          <div className="answer">
            <button>
              <a href={exp1a} tager="_blank">
                Download File
              </a>
            </button>
            <h1 style={{ marginTop: "20px" }}>
              Aim: Analyze and rate existing at least 3 websites and users for
              any specific Domain of your choice.
            </h1>

            <p></p>
          </div>
        </Toggle>
        <Toggle title="EXPERIMENT 1b">
          <div className="answer">
            <button>
              <a href={exp1b} tager="_blank">
                Download File
              </a>
            </button>
            <h1 style={{ marginTop: "20px" }}>
              Aim: Visualize the ratings using graphs.
            </h1>
          </div>
        </Toggle>
        <Toggle title="EXPERIMENT 2">
          <div className="answer">
            <button>
              <a href={exp2} tager="_blank">
                Download File
              </a>
            </button>
            <h1 style={{ marginTop: "20px" }}>
              Aim: Create Web based Mathematical application for kids of age of
              4 to 7 years.
            </h1>
          </div>
        </Toggle>
        <Toggle title="EXPERIMENT 3">
          <div className="answer">
            <button>
              <a href={exp3} tager="_blank">
                Download File
              </a>
            </button>
            <h1 style={{ marginTop: "20px" }}>
              Aim: Design GUI for the data entry form for any application of
              selected domain which you have analyzed.
            </h1>
          </div>
        </Toggle>
        <Toggle title="EXPERIMENT 4">
          <div className="answer">
            <button>
              <a href={exp4} tager="_blank">
                Download File
              </a>
            </button>
            <h1 style={{ marginTop: "20px" }}>
              Aim: Design GUI for the data entry form for any application of
              selected domain which you have analyzed.
            </h1>
          </div>
        </Toggle>
        <Toggle title="EXPERIMENT 5">
          <div className="answer">
            <button>
              <a href={exp5} tager="_blank">
                Download File
              </a>
            </button>
            <h1 style={{ marginTop: "20px" }}>
              Aim: Design an interface for any machine which you found
              troublesome to use and want to change its interface like automatic
              washing machine, microwave oven etc.
            </h1>
          </div>
        </Toggle>
        <Toggle title="EXPERIMENT 6">
          <div className="answer">
            <button>
              <a href={exp6} tager="_blank">
                Download File
              </a>
            </button>
            <h1 style={{ marginTop: "20px" }}>
              Aim: Design website for an application of the selected domain with
              home page and subsequent pages.
            </h1>
          </div>
        </Toggle>
        <Toggle title="EXPERIMENT 7">
          <div className="answer">
            <button>
              <a href={exp7} tager="_blank">
                Download File
              </a>
            </button>
            <h1 style={{ marginTop: "20px" }}>
              Aim: Design the logically justifiable menus for selected
              website/application.
            </h1>
          </div>
        </Toggle>
        <Toggle title="EXPERIMENT 8">
          <div className="answer">
            <button>
              <a href={exp8} tager="_blank">
                Download File
              </a>
            </button>
            <h1 style={{ marginTop: "20px" }}>
              Aim: Design a theme based Icon for the selected Application.
            </h1>
          </div>
        </Toggle>
        <Toggle title="EXPERIMENT 9">
          <div className="answer">
            <button>
              <a href={exp9} tager="_blank">
                Download File
              </a>
            </button>
            <h1 style={{ marginTop: "20px" }}>
              Aim: Prepare the Interview Questions for Subject Matter Expert
              (SME) of your selected domain to gather requirements.
            </h1>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
}

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default ExpNaimish;
