/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
// import { fadeIn } from '../utils/motion';
// import { journals } from "../constants";
import { data } from "../pages/data";
import { Link } from "react-router-dom";

const JournalCard = ({
  icon,
  description,
  journalNamefull,
  journalNameShort,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const isMobile = windowWidth <= 1060;

  return (
    <div className="w-full grow3 show">
      <div
        className="w-full cursor-pointer shadow-lg hover:shadow-xl 
          rounded-lg bg-primaryalt"
      >
        {isMobile ? (
          <Link to={`/journals/${journalNameShort}`}>
            <div
              options={{ max: 45, scale: 1, speed: 450 }}
              className="p-5 md:gap-8 ss:gap-6 gap-5 flex justify-evenly 
            md:flex-row flex-col"
            >
              <img
                src={icon}
                alt={journalNamefull}
                className="md:w-[250px] ss:w-[300px] h-auto 
                    object-contain rounded-lg"
              />

              <div className="flex flex-col gap-3 justify-between">
                <h3
                  className="text-main md:text-[25px] ss:text-[23px] 
                    text-[18px] font-bold md:leading-[28px] 
                    ss:leading-[25px] leading-[22px]"
                >
                  {journalNamefull}
                </h3>

                <div className="flex">
                  <div
                    className="bg-secondary w-full h-[2px] 
                        rounded-full"
                  />
                </div>

                <h3
                  className="text-textalt md:text-[15px] ss:text-[14px] 
                    text-[14px] md:leading-[18px] ss:leading-[18px]
                    leading-[17px] text-justify"
                >
                  {description}
                </h3>

                <div className="md:block hidden">
                  <button
                    className="grow md:text-[12px] 
                        ss:text-[14px] md:py-1.5 ss:py-1.5 
                        md:px-6 ss:px-6 text-main rounded-full
                        font-medium border-textalt border-[1px] 
                        hover:text-white opacity-0 transition-opacity 
                        duration-500"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ) : (
          <div
            options={{ max: 45, scale: 1, speed: 450 }}
            className="p-5 md:gap-8 ss:gap-6 gap-5 flex justify-evenly 
                md:flex-row flex-col"
          >
            <img
              src={icon}
              alt={journalNamefull}
              className="md:w-[250px] ss:w-[300px] h-auto 
                    object-contain rounded-lg"
            />

            <div className="flex flex-col gap-3 justify-between">
              <h3
                className="text-main md:text-[25px] ss:text-[23px] 
                    text-[18px] font-bold md:leading-[28px] 
                    ss:leading-[25px] leading-[22px]"
              >
                {journalNamefull}
              </h3>

              <div className="flex">
                <div
                  className="bg-secondary w-full h-[2px] 
                        rounded-full"
                />
              </div>

              <h3
                className="text-textalt md:text-[15px] ss:text-[14px] 
                    text-[14px] md:leading-[18px] ss:leading-[18px]
                    leading-[17px] text-justify"
              >
                {description}
              </h3>

              <div className="md:block hidden">
                <Link to={`/journals/${journalNameShort}`}>
                  <button
                    className="grow md:text-[12px] 
                            ss:text-[14px] md:py-1.5 ss:py-1.5 
                            md:px-6 ss:px-6 text-main rounded-full
                            font-medium border-textalt border-[1px] 
                            hover:text-white opacity-0 transition-opacity 
                            duration-500"
                  >
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Journals = () => {
  return (
    <section
      //   className="md:min-h-[1800px] ss:min-h-[3000px] min-h-[5750px]
      // flex items-center"
      className="mt-10  flex items-center"
    >
      <div
        className="items-center w-full flex flex-col md:mt-28
      ss:mt-20 mt-20"
      >
        <motion.div
          className="flex items-center flex-col relative 
            justify-center w-full"
        >
          <div className="grid grid-cols-2 md:gap-12 ss:gap-6 gap-10">
            {data.map((journal, index) => (
              <JournalCard
                key={journal.journalNameShort}
                index={index}
                {...journal}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(Journals, "");
