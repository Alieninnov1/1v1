
import React from "react";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import TechStack from "@/components/home/TechStack";
import CallToAction from "@/components/home/CallToAction";
import Layout from "@/components/layout/Layout";

const Landing = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <TechStack />
      <CallToAction />
    </Layout>
  );
};

export default Landing;
