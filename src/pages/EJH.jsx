import { A_journalPageContainer } from "../components";

const EJH = () => {
  const E_ISSN = "1118-6410";
  const heroNameShort = "EJH";
  const heroNameFull = "Elite Journal of Haematology";
  const heroText =
    "Get on a journey into the intricate world of blood-related disorders. EJH is your guide to exploring the forefront of haematological research, unraveling the complexities of hematopoiesis, coagulation and the latest therapeutic interventions. Explore groundbreaking studies that pave the way for advancements in the understanding and treatment of conditions affecting the blood and related systems.";

  return (
    <A_journalPageContainer
      E_ISSN={E_ISSN}
      heroNameFull={heroNameFull}
      heroNameShort={heroNameShort}
      heroText={heroText}
    />
  );
};

export default EJH;
