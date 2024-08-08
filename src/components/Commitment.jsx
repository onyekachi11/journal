/* eslint-disable react/no-unescaped-entities */
import styles from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Commitment = () => {
  return (
    <section
      className="w-full md:min-h-[350px] ss:min-h-[350px] 
    min-h-[350px] flex"
    >
      <div className="w-full flex justify-center">
        <motion.div
          variants={textVariant()}
          className={`${styles.paddingX} flex flex-col justify-center 
            items-center`}
        >
          <h1
            className="text-main font-bold md:text-[45px]
                ss:text-[35px] text-[28px]"
          >
            Our Commitment
          </h1>

          <div className="flex relative justify-center">
            <div
              className="bg-secondary md:w-[120px] ss:w-[120px]
                w-[80px] h-[3px]"
            />
          </div>

          <motion.div
            className="flex md:mt-12 ss:mt-10 mt-8 flex-col
                items-center justify-center"
          >
            <p
              className="text-main md:text-[20px] ss:text-[18px] 
                    text-[14px] max-w-[700px] text-center md:leading-[27px] 
                    ss:leading-[28px] leading-[20px]"
            >
              Whether you are a researcher, clinician, educator, or student,
              Lifeline aims to be an indispensable resource for deepening your
              understanding of the complex, ever-evolving world of health
              sciences. We welcome submissions from scholars and practitioners
              at all stages of their careers.
              <br />
              Our mission is to advance knowledge and spark interdisciplinary
              dialogue in the health sciences community. We are committed to
              publishing high-quality, impactful research that has the potential
              to improve patient outcomes and enhance clinical practice.
            </p>

            <p
              className="text-main md:text-[20px] ss:text-[18px] 
                    text-[14px] max-w-[700px] text-center md:leading-[28px] 
                    ss:leading-[28px] leading-[20px] mt-5"
            >
              Join us as we explore the frontiers of medical knowledge and work
              towards a future of better health for all.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(Commitment, "");
