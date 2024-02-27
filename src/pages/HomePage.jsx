import React from "react";
import { FeaturedProducts, Hero, Services, Contact } from "../components";
import Card from "../components/card";
const HomePage = () => {
  return (
    <main>
      <Hero />
      <Card />
      <Services />
      <Contact />
    </main>
  );
};

export default HomePage;
