import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { EJH } from "../assets";

const Haemat = () => {
  return (
    <section
      className="w-full md:min-h-[550px] ss:min-h-[300px] 
        min-h-[500px] flex flex-col"
    >
      <div
        className="flex md:flex-row ss:flex-row flex-col md:gap-10 
                ss:gap-10 gap-8 w-full aboutimage"
      >
        <motion.div variants={fadeIn("left", "spring", 0.3)}>
          <img src={EJH} alt="Haemat" className="md:h-auto w-[3000px]" />
        </motion.div>

        <motion.div variants={textVariant()}>
          <p
            className="text-main md:text-[20px] ss:text-[17px] 
                    text-[14px] md:leading-[28px] ss:leading-[24px] 
                    leading-[19px] md:text-justify ss:text-justify text-center"
          >
            Get on a journey into the intricate world of blood-related
            disorders. EJH is your guide to exploring the forefront of
            haematological research, unraveling the complexities of
            hematopoiesis, coagulation and the latest therapeutic interventions.
            Explore groundbreaking studies that pave the way for advancements in
            the understanding and treatment of conditions affecting the blood
            and related systems.
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={fadeIn("down", "spring", 0.3)}
        className="md:mt-12 ss:mt-12 mt-6"
      >
        <div
          className="bg-main w-full h-[0.5px]
          border border-black opacity-50
                rounded-full"
        />
      </motion.div>

      <motion.div
        variants={textVariant()}
        className="md:mt-8 ss:mt-8 mt-6 flex md:flex-row ss:flex-row
                flex-col md:gap-4 ss:gap-4 gap-1 md:items-center 
                ss:items-center"
      >
        <p
          className="text-main md:text-[18px] ss:text-[17px] 
                    text-[15px] font-bold"
        >
          E-ISSN: <span className="font-light">1118-6410</span>
        </p>

        <p
          className="text-main md:text-[20px] ss:text-[17px] 
                    text-[13px] md:flex ss:flex hidden"
        >
          |
        </p>

        <p
          className="text-main md:text-[18px] ss:text-[17px] 
                    text-[15px] font-bold"
        >
          EJH: <span className="font-light">Elite Journal of Haematology</span>
        </p>

        <p
          className="text-main md:text-[20px] ss:text-[15px] 
                    text-[13px] md:flex hidden"
        >
          |
        </p>

        <p
          className="text-main md:text-[18px] ss:text-[15px] 
                    text-[13px] font-light md:flex hidden"
        >
          Elite Press Journals
        </p>
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Haemat, "");
