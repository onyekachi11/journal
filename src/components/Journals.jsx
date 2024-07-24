/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
// import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
// import { journals } from "../constants";
import { BsArrowRightShort } from "react-icons/bs";
import { data } from "../pages/data";
import { Link } from "react-router-dom";
data;

const JournalCard = ({
  index,
  description,
  journalNamefull,
  journalNameShort,
  icon,
  // route,
}) => {
  return (
    <div className="xs:w-[320px] w-full grow3">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full p-[1px] cursor-pointer 
          shadow-lg hover:shadow-xl"
      >
        <Link to={`/journals/${journalNameShort}`}>
          <div
            options={{ max: 45, scale: 1, speed: 450 }}
            className="bg-primaryalt p-1 md:pb-10 ss:pb-10 pb-8 md:gap-5 
            ss:gap-5 gap-5 flex justify-evenly items-center flex-col
            rounded-t-[20px]"
          >
            <img
              src={icon}
              alt={journalNamefull}
              className="w-30 h-30 object-contain rounded-t-[20px]"
            />
            <h3
              className="text-main md:text-[19px] ss:text-[18px] text-[18px] 
              font-bold md:leading-[25px] ss:leading-[20px] leading-[16px] 
              text-center md:max-w-[270px]"
            >
              {journalNamefull}
            </h3>
            <h3
              className="text-textalt md:text-[14px] ss:text-[14px] 
              text-[14px] text-center md:leading-[18px] ss:leading-[18px]
              leading-[17px] md:max-w-[290px] ss:max-w-[400px]
              max-w-[300px]"
            >
              {description}
            </h3>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

const Journals = () => {
  return (
    <section
      className="md:min-h-[820px] ss:min-h-[800px] min-h-[1900px] 
    flex items-center"
    >
      <div className="items-center w-full flex flex-col">
        <motion.div
          variants={fadeIn("up", "spring", 0.3)}
          className="flex justify-between items-center w-full md:gap-12
            ss:gap-8 gap-5 md:mb-16 ss:mb-12 mb-10"
        >
          <div className="flex-grow">
            <div className="bg-secondary w-full h-[3px] rounded-full" />
          </div>

          <h1
            className="text-main md:text-[52px] ss:text-[45px] 
                text-[33px] font-bold"
          >
            Our Journals
          </h1>

          <div className="flex-grow">
            <div className="bg-secondary w-full h-[3px] rounded-full" />
          </div>
        </motion.div>

        <motion.div
          className="flex items-center flex-col relative 
            justify-center w-full"
        >
          <div className="flex flex-wrap gap-12">
            {data.map((journal, index) => (
              <JournalCard
                key={journal.journalNameShort}
                index={index}
                {...journal}
              />
            ))}
          </div>
        </motion.div>

        <a
          href="/journals"
          className="flex flex-row md:mt-16 ss:mt-10 mt-6 
              justify-center items-center gap-1 cursor-pointer 
              grow2 md:mb-0 ss:mb-5 mb-0"
        >
          <p
            className="font-medium text-primary md:text-[17px]
                ss:text-[16px] text-[14px]"
          >
            View All
          </p>
          <BsArrowRightShort
            className="text-[30px] 
                text-primary"
          />
        </a>
      </div>
    </section>
  );
};

export default SectionWrapper(Journals, "journals");
