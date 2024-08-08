/* eslint-disable react/no-unescaped-entities */
import { SectionWrapper } from "../hoc";
import { layout } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { aboutImg } from "../assets";

const About = () => {
  return (
    <section
      className="w-full md:min-h-[550px] ss:min-h-[550px] 
        min-h-[900px] flex items-center"
    >
      <div
        className="items-center w-full flex-col md:gap-5 
            ss:gap-5 gap-10"
      >
        <motion.div
          variants={fadeIn("up", "spring", 0.3)}
          className="flex flex-row items-center w-full md:mb-8 ss:mb-14 
                mb-8"
        >
          <h1
            className="text-main font-bold md:text-[52px]
                    ss:text-[45px] text-[33px] md:mr-14 ss:mr-6 mr-5
                    md:leading-[2px] ss:leading-[2px] leading-[40px]"
          >
            About Lifeline
          </h1>
          <motion.div
            variants={fadeIn("down", "spring", 0.3)}
            className="flex-1 relative items-center justify-center"
          >
            <div
              className="bg-secondary w-full h-[3px]
                        rounded-full"
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeIn("down", "spring", 0.3)}
          className="flex md:flex-row ss:flex-row flex-col md:gap-10 
                ss:gap-12 gap-12 w-full   items-center justify-center"
        >
          <motion.div
            variants={textVariant()}
            className={`${layout.sectionInfo}`}
          >
            <p
              className="text-main md:text-[17px] ss:text-[15px] 
                        text-[13px] md:max-w-[700px] ss:max-w-[400px]  
                        md:leading-[23px]"
            >
              Lifeline is a quarterly health and wellness journal dedicated to
              helping our readers live their healthiest, most vibrant lives.
              Launched in 2020, Lifeline was founded on the principle that true
              health is about more than just physical fitness - it's a holistic
              state of wellbeing that encompasses the mind, body, and spirit.
            </p>

            <p
              className="text-main md:text-[17px] ss:text-[15px] 
                        text-[13px] md:max-w-[700px] ss:max-w-[400px] 
                        md:mt-5 ss:mt-5 mt-5 md:leading-[23px]"
            >
              Lifeline is written and edited by a team of health practitioners,
              scientists, and wellness experts who are passionate about
              empowering our readers to take charge of their wellbeing. We're
              here to share the latest research, spotlight innovative approaches
              to care, and amplify diverse voices in the health space.
            </p>

            <a href="/about" className="md:mt-8 ss:mt-8 mt-6">
              <button
                className="bg-main grow md:text-[16px] 
                            ss:text-[16px] text-[14px] md:py-3 ss:py-3 py-2 
                            md:px-14 ss:px-14 px-6 text-white rounded-sm
                            font-medium border-none"
              >
                Learn More
              </button>
            </a>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "spring", 0.3)}
            className=" w-[250px] md:w-[350px] "
          >
            <img src={aboutImg} alt="about" className="rounded-lg" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
