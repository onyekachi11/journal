const archiveData = [
  // {
  //   id: "Vol1",
  //   name: "Volume 1 (2023)",
  //   volumeData: [
  //     {
  //       id: "Vol1Iss1",
  //       name: "Issue 1",
  //       issue: [
  //         {
  //           title: "Malaria's Silent Partner: Anemia in Children",
  //           authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
  //           abstract:
  //             "This review explores the often-overlooked but critical relationship between malaria and anemia in children. While malaria's immediate symptoms are well-documented, its silent partner, anemia, significantly impacts the health and development of affected children. The consequences of malarial anemia on child health, including fatigue, stunted growth, and cognitive impairments, are discussed.",
  //           // route: EJPHVOL2ISS101,
  //           pages: "1-7",
  //         },
  //       ],
  //     },
  //   ],
  // },
];

const lastVolume = archiveData[archiveData.length - 1];

const lastVolumeData = lastVolume?.volumeData[lastVolume.volumeData.length - 1];

//JOURNAL SIDE LINKS DATA STRUCTURE
export const LNHSSideLink = [
  {
    id: "current",
    title: "Current Issue",
    data: [
      {
        name: `${
          lastVolume && lastVolumeData
            ? lastVolume?.name + ", " + lastVolumeData?.name
            : ""
        } `,
        route: `/journals/LHS/${lastVolume?.id}/${lastVolumeData?.id}`,
      },
    ],
  },
  {
    id: "archives",
    title: "Archives",
    data: archiveData,
  },
  {
    id: "indexings",
    title: "Indexings",
    data: [
      // {
      //   name: "Google Scholar",
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
