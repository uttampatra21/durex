import React from "react";
import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import Bestqualityservices from "../BestQualityServices/Bestqualityservices";
import LetestNews from "../Latest News/LetestNews";
import Testomonial from "../Testomonial/Testomonial";
import Team from "../Our Team/Team";
import Partner from "../Stock Partner/Partner";
import Faq from "../FAQ/Faq";
import Hosting from "../Hosting/Hosting";

const Home = () => {
  return (
    <div>
      {/* HERO */}
      <Hero />
      {/* SERVICES */}
      <Services />
      {/* TRADE PARTNER */}
      <Partner />
      {/* HOSTING */}
      <Hosting />
      {/* BEST QUALITY SERVICES */}
      <Bestqualityservices />
      {/* Our Latest News */}
      {/* TESTOMONIAL */}
      <Testomonial />
      {/* OUR TEAM */}
      <Team />
      {/* NEWS LETTER */}
    </div>
  );
};

export default Home;
