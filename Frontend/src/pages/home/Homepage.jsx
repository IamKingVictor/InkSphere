import React from "react";
import Hero from "../conatiner/Hero";
import MainLayout from "../../components/MainLayout";
import Article from "../conatiner/Article";
import CTA from "../conatiner/CTA";

export const Homepage = () => {
  return (
    <MainLayout>
      <Hero />
      <Article />
      <CTA />
    </MainLayout>
  );
};

export default Homepage;
