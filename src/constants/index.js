import { GrMail } from "react-icons/gr";

import { BsJournals } from "react-icons/bs";
import { VscGitPullRequestNewChanges } from "react-icons/vsc";
import { TiMessages } from "react-icons/ti";
import { IoNewspaperOutline } from "react-icons/io5";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    route: "/",
  },
  {
    id: "about",
    title: "About Us",
    route: "/about",
  },
  {
    id: "journals",
    title: "Journals",
    route: "/journals",
  },
  {
    id: "",
    title: "Contact Us",
    route: "/contact",
    special: true,
  },
];

export const sideLinks = [
  {
    id: "journals",
    title: "Journals",
    route: "/admin/dashboard",
    Icon: BsJournals,
  },
  {
    id: "requests",
    title: "Submission Requests",
    route: "/admin/dashboard/requests",
    Icon: VscGitPullRequestNewChanges,
  },
  {
    id: "messages",
    title: "Messages",
    route: "/admin/dashboard/messages",
    Icon: TiMessages,
  },
  {
    id: "newsletter",
    title: "Newsletter",
    route: "/admin/dashboard/newsletter",
    Icon: IoNewspaperOutline,
  },
];

export const socialMedia = [
  {
    id: "social-media-2",
    Icon: GrMail,
    link: "mailto:contact@epjournals.com",
  },
];

export const footerLinks = [
  {
    title: "Company",
    links: [
      {
        name: "About",
        route: "/about",
      },
      {
        name: "Journals",
        route: "/journals",
      },
      {
        name: "Contact",
        route: "/contact",
      },
    ],
  },

  {
    title: "Legal",
    links: [
      {
        name: "Cookies",
        link: "",
      },
      {
        name: "Privacy Policy",
        link: "",
      },
      {
        name: "Security",
        link: "",
      },
      {
        name: "Terms of Use",
        link: "",
      },
    ],
  },
];
