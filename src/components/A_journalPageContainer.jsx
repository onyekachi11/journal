/* eslint-disable react/prop-types */
import {
  HeroEJH,
  Newsletter,
  Footer,
  // HaematologyHero,
  Sidebar,
  Sidebar2,
  NavbarPages,
  A_JournalHero,
} from "../components";

import styles from "../styles";
// eslint-disable-next-line no-unused-vars
import { ejhSideLinks, normalSideLinks } from "../constants";

import { hero3 } from "../assets";
import { Helmet } from "react-helmet";
import { data } from "../pages/data";
import { useParams } from "react-router-dom";

const A_journalPageContainer = () => {
  const { name } = useParams();
  const journalDetails = data?.find((data) => data.journalNameShort === name);

  const {
    E_ISSN,
    journalNamefull,
    journalNameShort,
    description,
    normalSideLinks,
  } = journalDetails;

  return (
    <div className="font-instrument-sans">
      <Helmet>
        <title>{`${journalNamefull} | Elite Press Journals`}</title>
        <meta
          name="description"
          content="Get on a journey into the intricate world of blood-related disorders. EJH is your guide to exploring the forefront of haematological research, unraveling the complexities of hematopoiesis, coagulation and the latest therapeutic interventions."
        />
      </Helmet>

      <NavbarPages />
      <div
        className="relative flex items-center justify-center w-full 
      md:max-h-[450px] ss:max-h-[300px] max-h-[200px] md:top-[6rem] 
      ss:top-[6rem] top-[4.8rem]"
      >
        <img
          src={hero3}
          // src={""}
          alt="hero3"
          className="w-[120rem] md:h-[300px] ss:h-[250px]
        h-[150px]"
        />
        <div className="absolute w-full md:pb-8 ss:pb-8 pb-6">
          <HeroEJH journalNamefull={journalNamefull} />
        </div>
      </div>

      <div className="journal">
        <div
          className={`${styles.padding} max-w-[82rem] mx-auto
        md:pt-28 ss:pt-28 pt-28 hidden md:flex`}
        >
          <div className="md:mr-4 mt-[30px] flex-1">
            <Sidebar sideLinks={normalSideLinks} />
          </div>

          <div className="md:ml-20">
            {/* <HaematologyHero /> */}
            <A_JournalHero
              E_ISSN={E_ISSN}
              journalNameShort={journalNameShort}
              journalNamefull={journalNamefull}
              description={description}
            />
          </div>
        </div>

        <div className=" ss:pt-28 pt-28 md:hidden flex flex-col">
          <div className="">
            <A_JournalHero
              E_ISSN={E_ISSN}
              journalNameShort={journalNameShort}
              journalNamefull={journalNamefull}
              description={description}
            />
          </div>

          <div className="">
            <Sidebar2 sideLinks={normalSideLinks} />
          </div>
        </div>
      </div>

      <div className="bg-primaryalt">
        <Newsletter />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default A_journalPageContainer;
