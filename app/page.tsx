"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { TeamSection } from "@/components/TeamSection";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        {/* <Clients /> */}
        {/* <img id="teams" src="lead1.png" alt="" />
        <img className="pb-40 -mt-10" src="leads22.png" alt="" />
        <img src="aleads1.png" alt="" />
        <img src="aleads2.png" alt="" />
        <img src="aleads3.png" alt="" />
        <img src="aleads4.png" alt="" /> */}
        <TeamSection />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
