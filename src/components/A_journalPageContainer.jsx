/* eslint-disable react/prop-types */
import {
  HeroEJH,
  Newsletter,
  Footer,
  Sidebar,
  Sidebar2,
  // NavbarPages,
  Navbar,
  A_JournalHero,
  VolumeIssues,
  IssuePubs,
} from "../components";

import styles from "../styles";

import { hero3 } from "../assets";
import { Helmet } from "react-helmet";
import { data } from "../pages/data";
import { useParams } from "react-router-dom";

const A_journalPageContainer = () => {
  const { journalName, vol, issuePubs } = useParams();
  const journalDetails = data?.find(
    (datas) => datas?.journalNameShort === journalName
  );

  console.log(
    journalDetails &&
      journalDetails?.journalSideLinks
        .map((item) => item)
        .find((value) => value.id === "archives")
        .data.find((values) => values.id === vol)
  );

  const issuesData = journalDetails?.journalSideLinks
    .map((item) => item)
    .find((value) => value.id === "archives")
    .data.find((values) => values.id === vol)
    ?.volumeData.find((data) => data.id === issuePubs);

  const {
    E_ISSN,
    journalNamefull,
    journalNameShort,
    description,
    journalSideLinks,
  } = journalDetails;

  return (
    <div className="font-instrument-sans">
      <Helmet>
        <title>{`${journalNamefull} | Lifeline Journals`}</title>
        <meta
          name="description"
          content="Get on a journey into the intricate world of blood-related disorders. Lifeline is your guide to exploring the forefront of haematological research, unraveling the complexities of hematopoiesis, coagulation and the latest therapeutic interventions."
        />
      </Helmet>

      <Navbar />
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
            <Sidebar sideLinks={journalSideLinks} />
          </div>

          <div className="md:ml-20">
            {/* <HaematologyHero /> */}
            {journalName && vol == undefined ? (
              <A_JournalHero
                E_ISSN={E_ISSN}
                journalNameShort={journalNameShort}
                journalNamefull={journalNamefull}
                description={description}
              />
            ) : journalName && vol ? (
              <VolumeIssues vol={vol} />
            ) : null}
          </div>
        </div>

        <div className=" ss:pt-28 pt-28 md:hidden flex flex-col">
          <div className="">
            {journalName && vol == undefined ? (
              <A_JournalHero
                E_ISSN={E_ISSN}
                journalNameShort={journalNameShort}
                journalNamefull={journalNamefull}
                description={description}
              />
            ) : journalName && issuePubs == undefined ? (
              <VolumeIssues journalDetails={journalDetails.journalSideLinks} />
            ) : journalName && issuePubs ? (
              <IssuePubs issueDetails={issuesData} />
            ) : null}
          </div>

          <div className="">
            <Sidebar2 sideLinks={journalSideLinks} />
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
