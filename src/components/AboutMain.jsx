/* eslint-disable react/no-unescaped-entities */
import { sthetoscope } from "../assets";
import { layout } from "../styles";
import { motion } from "framer-motion";
import { slideIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const AboutMain = () => {
  return (
    <section className="w-full min-h-[600px] items-center flex flex-col">
      <div className="w-full md:mt-28 ss:mt-20 mt-24">
        <div
          className="justify-between w-full flex md:flex-row 
            ss:flex-wrap flex-col gap-5 items-center"
        >
          <motion.div
            variants={textVariant(0.3)}
            className={`${layout.sectionInfo}`}
          >
            <h1
              className="text-main font-bold md:text-[52px]
                    ss:text-[45px] text-[33px]"
            >
              Who we are
            </h1>

            <div className="flex relative">
              <div
                className="bg-secondary md:w-[120px] ss:w-[120px]
                    w-[80px] h-[3px]"
              />
            </div>

            <p
              className="md:mt-8 ss:mt-8 mt-5 text-main md:text-[19px] 
                    ss:text-[18px] text-[14px] md:max-w-[650px] ss:max-w-[700px]
                    md:leading-[27px] ss:leading-[25px] leading-[20px]"
            >
              Lifeline is a leading peer-reviewed journal covering the latest
              research and innovations across the health sciences. Published
              quarterly, Lifeline features original research, review articles,
              and topical discussions on a wide range of topics.
              <br /> In each issue, Lifeline delves into a range of topics that
              impact our overall health and wellness. From the latest
              advancements in fields like haematology, immunology, and
              microbiology, to timely discussions on public health, medical
              sciences, and nursing - our content covers the full breadth of the
              health sciences.
            </p>

            <p
              className="md:mt-8 ss:mt-8 mt-5 text-main md:text-[19px] 
                    ss:text-[18px] text-[14px] md:max-w-[650px] ss:max-w-[700px]
                    md:leading-[27px] ss:leading-[25px] leading-[20px]"
            >
              Lifeline is overseen by an esteemed editorial board of leading
              experts across medical, scientific, and academic fields. Adhering
              to the highest standards of peer review, we strive to provide our
              readers with authoritative, evidence-based insights they can
              trust.
            </p>
          </motion.div>

          <motion.div
            variants={slideIn("right", "tween", 0.2, 0.5)}
            className="md:mt-10 ss:mt-6 mt-2"
          >
            <img
              src={sthetoscope}
              alt="cloth"
              className="md:h-[500px] ss:h-[400px] h-[300px] w-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(AboutMain, "");
