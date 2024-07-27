import { EJH } from "../assets";

export const normalSideLinks = [
  {
    id: "current",
    title: "Current Issue",
    data: [
      {
        name: "Volume 2, Issue 6. (2024)",
        // route: "/journals/EJHS/VOL2ISS6",
      },
    ],
  },
  {
    id: "archives",
    title: "Archives",
    data: [
      {
        id: "Vol1",
        name: "Volume 1 (2023)",
        volumeData: [
          {
            id: "Vol2Iss1",
            name: "Issue 1",
            issue: [
              {
                title: "Malaria's Silent Partner: Anemia in Children",
                authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
                abstract:
                  "This review explores the often-overlooked but critical relationship between malaria and anemia in children. While malaria's immediate symptoms are well-documented, its silent partner, anemia, significantly impacts the health and development of affected children. The consequences of malarial anemia on child health, including fatigue, stunted growth, and cognitive impairments, are discussed.",
                // route: EJPHVOL2ISS101,
                pages: "1-7",
              },
              {
                title:
                  "Unmasking the Truth: Addressing Stigma in the Fight Against HIV",
                authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
                abstract:
                  "The persistent stigma surrounding HIV remains a significant obstacle in the global efforts to combat the epidemic effectively. This review article aims to dissect the multifaceted dimensions of HIV stigma and explore strategies to unmask the truth about its detrimental impact on prevention, care, and support for those affected by the virus.",
                // route: EJPHVOL2ISS102,
                pages: "8-22",
              },
              {
                title:
                  "Unmasking the Truth: Addressing Stigma in the Fight Against HIV",
                authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
                abstract:
                  "The persistent stigma surrounding HIV remains a significant obstacle in the global efforts to combat the epidemic effectively. This review article aims to dissect the multifaceted dimensions of HIV stigma and explore strategies to unmask the truth about its detrimental impact on prevention, care, and support for those affected by the virus.",
                // route: EJPHVOL2ISS102,
                pages: "8-22",
              },
            ],
          },
        ],
      },
      {
        id: "Vol2",
        name: "Volume 2 (2024)",
        volumeData: [
          {
            id: "Vol2Iss1",
            name: "Issue 1",
            issue: [
              {
                title: "Malaria's Silent Partner: Anemia in Children",
                authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
                abstract:
                  "This review explores the often-overlooked but critical relationship between malaria and anemia in children. While malaria's immediate symptoms are well-documented, its silent partner, anemia, significantly impacts the health and development of affected children. The consequences of malarial anemia on child health, including fatigue, stunted growth, and cognitive impairments, are discussed.",
                // route: EJPHVOL2ISS101,
                pages: "1-7",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "indexings",
    title: "Indexings",
    data: [
      // {
      //   name: "Google Scholar",
      //   route: null,
      // },
      // {
      //   name: "Research Gate",
      //   route: null,
      // },
      // {
      //   name: "Academia Edu",
      //   route: null,
      // },
      // {
      //   name: "ISI Indexing",
      //   route: null,
      // },
      // {
      //   name: "Cosmo Impact Factor",
      //   route: null,
      // },
    ],
  },
  {
    id: "editors",
    title: "Editors",
    data: [
      // {
      //   name: "Prof. Muhammad Akram",
      //   school:
      //     "Department of Eastern Medicine, Government College University, Faisalabad, Pakistan.",
      //   profileLink: "https://www.researchgate.net/profile/Muhammad-Akram-88",
      //   route: null,
      // },
      // {
      //   name: "Dr. Rida Zainab",
      //   school:
      //     "Department of Eastern Medicine, Government College University, Faisalabad, Pakistan.",
      //   profileLink: "https://www.researchgate.net/profile/Rida_Zainab5",
      //   route: null,
      // },
    ],
    special: true,
  },
  {
    id: "frequency",
    title: "Frequency: 12",
    data: [
      // {
      //   name: "Each month of the year",
      //   route: null,
      // },
    ],
  },
  {
    id: "authors",
    title: "Author's Instructions",
    data: [
      {
        // name: "lorem ipsum",
        // route: null,
      },
    ],
  },
  {
    id: "article",
    title: "Article Processing Charge",
    data: [
      {
        // name: "lorem ipsum",
        // route: null,
      },
    ],
  },
  {
    id: "contact",
    title: "Contact",
    data: [
      {
        email: "mailto:ejhs@epjournals.com",
        name: "ejhs@epjournals.com",
      },
    ],
  },
];

export const data = [
  {
    E_ISSN: "1118-6410",
    journalNameShort: "EJH",
    journalNamefull: "Elite Journal of Haematology",
    description:
      "Get on a journey into the intricate world of blood-related disorders. EJH is your guide to exploring the forefront of haematological research, unraveling the complexities of hematopoiesis, coagulation and the latest therapeutic interventions. Explore groundbreaking studies that pave the way for advancements in the understanding and treatment of conditions affecting the blood and related systems.",
    normalSideLinks,
    icon: EJH,
  },
  {
    E_ISSN: "1118-6410",
    journalNameShort: "EJHIV",
    journalNamefull: "Elite Journal of HIV",
    description:
      "Get on a journey into the intricate world of blood-related disorders. EJH is your guide to exploring the forefront of haematological research, unraveling the complexities of hematopoiesis, coagulation and the latest therapeutic interventions. Explore groundbreaking studies that pave the way for advancements in the understanding and treatment of conditions affecting the blood and related systems.",
    normalSideLinks,
    icon: EJH,
  },
  {
    E_ISSN: "1118-6410",
    journalNameShort: "EJM",
    journalNamefull: "Elite Journal of Medicine",
    description:
      "Get on a journey into the intricate world of blood-related disorders. EJH is your guide to exploring the forefront of haematological research, unraveling the complexities of hematopoiesis, coagulation and the latest therapeutic interventions. Explore groundbreaking studies that pave the way for advancements in the understanding and treatment of conditions affecting the blood and related systems.",
    normalSideLinks,
    icon: EJH,
  },
];
