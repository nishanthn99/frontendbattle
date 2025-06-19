import ContentStats from "@/components/ContentStat";
import HeroSection from "../components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
   
      <HeroSection/>
      <div id="stats">
      <ContentStats/>
      </div>
   </>
  );
}
