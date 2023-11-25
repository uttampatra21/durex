import React from "react";
import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import Bestqualityservices from "../BestQualityServices/Bestqualityservices";
import LetestNews from "../Latest News/LetestNews";
import Testomonial from "../Testomonial/Testomonial";
import Team from "../Our Team/Team";

const Home = () => {
  return (
    <div>
      {/* HERO */}
      <Hero />
      {/* SERVICES */}
      <Services />
      {/* BEST QUALITY SERVICES */}
      <Bestqualityservices />
      {/* Our Latest News */}
      <LetestNews />
      {/* TESTOMONIAL */}
      <Testomonial />
      {/* OUR TEAM */}
      <Team />
    </div>
  );
};

export default Home;
