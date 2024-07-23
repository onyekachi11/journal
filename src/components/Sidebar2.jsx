/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
// import { arrow, arrowright, info } from "../assets";
import { SectionWrapper } from "../hoc";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ onClose, name, school, profileLink }) => {
  const modalRef = useRef(null);

  const enableScroll = () => {
    document.body.style.overflow = "auto";
    document.body.style.top = "0";
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
        enableScroll();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 flex items-center justify-center
      bg-black bg-opacity-80 z-50"
      >
        <motion.div
          initial={{ y: 0, opacity: 0.7 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.1 }}
          ref={modalRef}
          className="bg-primaryalt p-5 rounded-md shadow-xl flex flex-col 
        justify-center w-auto h-auto items-center m-6"
        >
          <div className="flex flex-col w-full gap-2">
            <h1
              className="text-maintext ss:text-[35px] text-[20px] 
            font-bold"
            >
              {name}
            </h1>

            <div className="flex-1 relative items-center justify-center">
              <div className="bg-textalt w-full h-[1px]" />
            </div>

            <p
              className="text-maintext ss:text-[17px] text-[14px] 
            ss:leading-[24px] leading-[18px]"
            >
              {school}
            </p>

            <a
              href={profileLink}
              target="_blank"
              rel="noreferrer"
              className="w-full ss:text-[15px] text-[13px] text-main"
            >
              {profileLink}
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Sidebar2 = ({ sideLinks }) => {
  const navigate = useNavigate();
  const [expandedItem, setExpandedItem] = useState(null);

  const [modalInfo, setModalInfo] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const disableScroll = () => {
    setScrollPosition(window.pageYOffset);
    document.body.style.overflow = "hidden";
    document.body.style.top = `-${scrollPosition}px`;
  };

  const handleSideItemClick = (link) => {
    setExpandedItem(expandedItem === link.id ? null : link.id);
  };

  const handleSubItemClick = (route) => {
    navigate(route);
  };

  const handleModalOpen = (info) => {
    setModalInfo(info);
    setModalOpen(true);
    disableScroll();
  };

  const handleModalClose = () => {
    setModalInfo(null);
    setModalOpen(false);
  };

  return (
    <div className="flex items-center w-full">
      {modalOpen && (
        <Modal
          onClose={handleModalClose}
          name={modalInfo.name}
          school={modalInfo.school}
          profileLink={modalInfo.profileLink}
        />
      )}

      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col items-center w-full pb-10">
          <ul className="list-none flex flex-col gap-4 w-full">
            {sideLinks.map((link) => (
              <li
                key={link.id}
                className="text-[15px] px-5 py-2 border-textalt
                border-[0.5px] text-decoration-none text-textalt list-item 
                bg-white"
              >
                <div
                  className="flex items-center justify-between"
                  onClick={() => handleSideItemClick(link)}
                >
                  {link.title}
                  <span>
                    <img
                      //   src={arrow}
                      src={""}
                      alt={link.title}
                      className="ss:h-[5px] h-[5px] w-auto"
                    />
                  </span>
                </div>

                {expandedItem === link.id && (
                  <div className="mt-2">
                    {link.links && link.links.length > 0 && (
                      <ul>
                        {link.links.map((submenuItem, index) => (
                          <li key={index}>
                            <button
                              className="block text-main ss:py-[5px] py-[4px] 
                              font-medium"
                              onClick={() => {
                                if (
                                  submenuItem.route &&
                                  submenuItem.route.startsWith("mailto:")
                                ) {
                                  window.location.href = submenuItem.route;
                                } else if (submenuItem.route) {
                                  handleSubItemClick(submenuItem.route);
                                }
                              }}
                            >
                              <div className="flex items-center gap-2.5">
                                {submenuItem.name}

                                {link.special && (
                                  <img
                                    // src={info}
                                    src={""}
                                    alt="info"
                                    className="h-[13px] w-auto"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleModalOpen(submenuItem);
                                    }}
                                  />
                                )}
                              </div>

                              <span
                                className="block text-maintext ss:text-[14px] 
                              text-[12px] leading-[16px] font-normal 
                              text-start"
                              >
                                {submenuItem.school}
                              </span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </li>
            ))}

            <li
              className="text-[15px] px-5 py-2 border-textalt 
                border-[0.5px] text-decoration-none cursor-pointer 
                text-white list-item bg-main ss:mt-16 mt-8"
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
                className="flex gap-6 items-center w-full justify-between"
              >
                Submit Manuscript
                <img
                  //   src={arrowright}
                  src={""}
                  alt="submit"
                  className="ss:h-[10px] h-[10px] w-auto"
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Sidebar2, "");
