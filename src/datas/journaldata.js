import { EJH } from "../assets";
import {
  LHSideLink,
  LMSideLink,
  LMSSideLink,
  LPHSideLink,
  LLMSideLink,
  LHSSideLink,
  LNHSSideLink,
  LISideLink,
  LHIVSideLink,
  LSRRSideLink,
  LBSideLink,
  LESideLink,
} from "./sideLinks";
import { LMBSideLink } from "./sideLinks/LMB";

// OVERALL DATA FROM BACKEND
export const data = [
  {
    E_ISSN: "1118-6410",
    journalNameShort: "LH",
    journalNamefull: "Lifeline Haematology",
    description:
      "Dedicated to advancing the field of haematology through the publication of cutting-edge original research, comprehensive reviews, and thought-provoking discussions. Each quarterly issue of Lifeline Haematology showcases groundbreaking discoveries surrounding blood cell biology, haemostasis, and the prevention and management of haematological disorders. Lifeline Haematology equips practitioners and scholars with the insights needed to enhance outcomes for those living with blood-related conditions.",
    journalSideLinks: LHSideLink,
    icon: EJH,
  },
  {
    E_ISSN: "1118-6410",
    journalNameShort: "LM",
    journalNamefull: "Lifeline Medicine",
    description:
      "Dedicated to publishing the most impactful medical research, reviews, and perspectives at the forefront of clinical science and practice. Grounded in rigorous peer review, each issue of Lifeline Medicine amplifies the voices of innovators who are redefining standards of 21st-century healthcare. From diagnostic breakthroughs and precision therapeutics to cutting-edge approaches in digital health and regenerative medicine, the studies and analyses featured in Lifeline Medicine illuminate new pathways for improving patient care and population health outcomes.",
    journalSideLinks: LMSideLink,
    icon: EJH,
  },
  {
    E_ISSN: "1118-6410",
    journalNameShort: "LMS",
    journalNamefull: "Lifeline Medical sciences",
    description:
      "Dedicated to publishing the latest groundbreaking research and innovations across the spectrum of medical disciplines. From cutting-edge diagnostic tools to transformative therapeutic approaches, this quarterly journal shines a light on the scientific breakthroughs poised to redefine standards of clinical care. Grounded in rigorous peer review and featuring insights from leading experts, Lifeline Medical Sciences empowers clinicians, researchers and students to stay at the forefront of progress in this dynamic field.",
    journalSideLinks: LMSSideLink,
    icon: EJH,
  },
  {
    E_ISSN: "1118-6410",
    journalNameShort: "LPH",
    journalNamefull: "Lifeline Public Health",
    description:
      "A dynamic forum for sharing the latest advancements in population-level disease prevention, health promotion and community wellbeing. Each issue delivers impactful original research, comprehensive reviews and thought-provoking perspectives exploring critical public health challenges - from emerging infectious diseases to the societal determinants of health. By bridging the gap between scientific discovery and real-world application, Lifeline Public Health equips practitioners, policymakers and scholars with the evidence-based insights needed to create sustainable positive change.",
    journalSideLinks: LPHSideLink,
    icon: EJH,
  },
  {
    E_ISSN: "1118-6410",
    journalNameShort: "LLM",
    journalNamefull: "Lifeline laboratory Medicine",
    description:
      "The forefront of diagnostic innovation, publishing groundbreaking research and best practices that are transforming the field of clinical pathology. This quarterly journal delves into the latest advancements in areas like clinical chemistry, hematology, microbiology and molecular diagnostics - providing clinical laboratory professionals, physicians and researchers with the cutting-edge knowledge needed to enhance patient care through precise, evidence-based testing. Lifeline Laboratory Medicine is driving progress towards a future of personalized, data-driven medicine",
    journalSideLinks: LLMSideLink,
    icon: EJH,
  },
  {
    E_ISSN: "1118-6410",
    journalNameShort: "LHS",
    journalNamefull: "Lifeline Health Sciences",
    description:
      "A dynamic forum for interdisciplinary dialogue on the frontiers of integrative healthcare. Exploring the interconnections between mind, body and spirit, this quarterly journal showcases pioneering research, expert insights and holistic approaches to optimizing human health and wellbeing. From the latest advances in nutritional science, exercise physiology and sleep medicine to innovative strategies for stress management and emotional wellness, Lifeline Health Sciences empowers readers to cultivate vitality, resilience and a deeper connection to themselves and the world around them.",
    journalSideLinks: LHSSideLink,
    icon: EJH,
  },
  {
    E_ISSN: "1118-6410",
    journalNameShort: "LNHS",
    journalNamefull: "Lifeline Nursing and Health Sciences",
    description:
      "Dedicated to advancing the nursing profession and its vital role within the broader healthcare ecosystem. This quarterly journal amplifies the voices of nurse practitioners, educators, researchers and other healthcare leaders, providing a platform to share groundbreaking clinical studies, evidence-based best practices and thought-provoking discourse on the future of nursing and interprofessional collaboration. Lifeline Nursing and Health Sciences is empowering the next generation of nurses to elevate the standard of compassionate, holistic patient care",
    journalSideLinks: LNHSSideLink,
    icon: EJH,
  },
  {
    E_ISSN: "1118-6410",
    journalNameShort: "LI",
    journalNamefull: "Lifeline Immunology",
    description:
      "A leading resource for the latest research and insights into the complex, dynamically evolving world of the human immune system. Each quarterly issue delves into cutting-edge discoveries surrounding the genetic, molecular and cellular mechanisms underlying immunity, as well as innovative diagnostic tools and therapeutic approaches for immune-related disorders. By fostering interdisciplinary collaboration between immunologists, clinicians and researchers across medical subspecialties, Lifeline Immunology accelerates progress towards a deeper understanding of this vital system and its critical role in health and disease",
    journalSideLinks: LISideLink,
    icon: EJH,
  },
  {
    E_ISSN: "1118-6410",
    journalNameShort: "LHIV",
    journalNamefull: "Lifeline HIV",
    description:
      "Amplifying the most impactful, evidence-based research, clinical practices and public health strategies in the global fight against HIV/AIDS. This quarterly journal shines a spotlight on groundbreaking discoveries, from novel antiretroviral therapies to pioneering approaches in epidemiology, prevention and care delivery. By fostering interdisciplinary dialogue and sharing insights that span the scientific, medical and social dimensions of the HIV epidemic, Lifeline HIV empowers researchers, clinicians and policymakers to transform outcomes and work towards an AIDS-free future.",
    journalSideLinks: LHIVSideLink,
    icon: EJH,
  },
  {
    E_ISSN: "1118-6410",
    journalNameShort: "LSRR",
    journalNamefull: "Lifeline Scientific Research and Reviews",
    description:
      "A dynamic platform for showcasing the most consequential original research and comprehensive review articles across the health sciences. Each issue features peer-reviewed studies and analyses that push the boundaries of medical knowledge, illuminating new pathways for improving patient care and enhancing population health. Whether you're a clinician seeking the latest evidence to inform your practice or a researcher eager to explore emerging frontiers, Lifeline Scientific Research and Reviews equips you with the cutting-edge insights needed to drive progress and transform lives",
    journalSideLinks: LSRRSideLink,
    icon: EJH,
  },
  {
    E_ISSN: "1118-6410",
    journalNameShort: "LMB",
    journalNamefull: "Lifeline Microbiology",
    description:
      "Dedicated to publishing high-impact research, expert commentary and innovative perspectives on the pivotal role of microorganisms in human health and disease. This quarterly journal delves into the latest discoveries surrounding the complex microbial ecosystems that inhabit the human body, as well as cutting-edge diagnostic tools, therapeutic interventions and public health strategies for managing microbial-related conditions. By fostering an evolving understanding of the microbial world and its myriad interactions with the human host, Lifeline Microbiology empowers clinicians, researchers and policymakers to harness the power of the microbiome and safeguard wellbeing.",
    journalSideLinks: LMBSideLink,
    icon: EJH,
  },
  {
    E_ISSN: "1118-6410",
    journalNameShort: "LB",
    journalNamefull: "Lifeline Biochemistry",
    description:
      "A leading forum for publishing groundbreaking research and expert analyses on the intricate chemical processes that underlie all biological phenomena. From the molecular mechanisms driving cellular function to the metabolic pathways sustaining human health, this quarterly journal illuminates the fundamental building blocks of life. By showcasing innovative approaches in areas like structural biology, enzymology and metabolomics, Lifeline Biochemistry equips researchers, clinicians and students with the cutting-edge insights needed to advance the frontiers of biochemical knowledge and drive progress towards better health for all.",
    journalSideLinks: LBSideLink,
    icon: EJH,
  },
  {
    E_ISSN: "1118-6410",
    journalNameShort: "LE",
    journalNamefull: "Lifeline Education",
    description:
      "Dedicated to supporting the continuous professional development of healthcare practitioners, researchers and educators. This quarterly journal highlights innovative teaching methodologies, evidence-based curricula and emerging trends shaping the future of medical, nursing and public health education. By amplifying diverse voices, fostering interdisciplinary collaboration and providing a platform for sharing best practices, Lifeline Education empowers the next generation of health leaders to elevate the standard of training and enhance patient outcomes through excellence in scholarship, clinical care and community engagement.",
    journalSideLinks: LESideLink,
    icon: EJH,
  },
];
