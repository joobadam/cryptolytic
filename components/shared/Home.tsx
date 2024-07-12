import React from "react";
import AboutUsSection from "./AboutUsSection";
import FeaturesSection from "./FeaturesSection";
import GraphPic from "./GraphPic";
import HeroSection from "./HeroSection";
import Testimonials from "./Testimonials";
import dynamic from "next/dynamic";
/* import LottieAnimation from "./LottieAnimation"; */

const Home = () => {
  const LottieAnimation = dynamic(() => import("./LottieAnimation"), {
    ssr: false,
  });
  return (
    <main className="flex h-fit flex-col relative">
      <div className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <LottieAnimation animationPath="/assets/animation/ani1.json" />
        <AboutUsSection />
        <GraphPic />
        <Testimonials />
      </div>
    </main>
  );
};

export default Home;
