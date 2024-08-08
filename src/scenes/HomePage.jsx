import {
  Navbar,
  Hero,
  About,
  Journals,
  Newsletter,
  Footer,
} from "../components";

import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <div className="font-instrument-sans">
      <Helmet>
        <title>Lifeline Journals | Innovation and Novelty</title>
        <meta
          name="description"
          content="Explore the pinnacle of medical knowledge with Lifeline. Elevate your understanding of medical sciences through our meticulously crafted publications, authored by leading experts in their fields."
        />
      </Helmet>

      <Navbar />

      <div className="hero fle justify-cente items-cente">
        <Hero />
      </div>

      <div className="bg-primaryalt">
        <About />
      </div>

      <div className="journal">
        <Journals />
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

export default HomePage;
