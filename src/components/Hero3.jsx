import { layout } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
// import { BsArrowRightShort } from "react-icons/bs";

const Hero3 = () => {
  return (
    <section className="w-full">
      <div className=" w-full flex flex-col">
        <motion.div
          variants={textVariant()}
          className={`${layout.sectionInfo} justify-center 
              items-start`}
        >
          <h1
            className="text-secondary font-bold md:text-[90px]
                ss:text-[65px] text-[40px] tracking-tight"
          >
            Journals
          </h1>
          {/* 
          <div
            className="flex flex-row items-center md:gap-3 
                ss:gap-5 gap-2 text-white md:text-[20px] ss:text-[20px] 
                text-[14px] justify-center"
          >
            <p>Home</p>
            <BsArrowRightShort
              className="md:text-[30px] 
                  ss:text-[30px] text-[25px] text-white"
            />
            <p>Journals</p>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero3, "");
