const archiveData = [
  // {
  //   id: "Vol1",
  //   name: "Volume 1 (2023)",
  //   volumeData: [
  //     {
  //       id: "Vol1Iss1",
  //       name: "Issue 1",
  //       issue: [
  //         // {
  //         //   title: "",
  //         //   authors: "",
  //         //   abstract: "",
  //         //   // route: EJPHVOL2ISS101,
  //         //   pages: "",
  //         // },
  //       ],
  //     },
  //   ],
  // },
];

const lastVolume = archiveData[archiveData.length - 1];

const lastVolumeData = lastVolume?.volumeData[lastVolume.volumeData.length - 1];

//JOURNAL SIDE LINKS DATA STRUCTURE
export const LLMSideLink = [
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
        route: `/journals/LLM/${lastVolume?.id}/${lastVolumeData?.id}`,
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
