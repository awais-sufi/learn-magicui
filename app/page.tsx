import { AnimatedBeamDemo } from "@/components/Animation";
import BentoGridSection from "@/components/BentoGrid";
import CloudIcons from "@/components/CloudIcons";
import Confe from "@/components/Confe";
import Marque from "@/components/Marque";
import Meteor from "@/components/Meteor";


export default function Home() {
  return (
    <>
  <Marque/>
  <BentoGridSection/>
  <CloudIcons/>
  <AnimatedBeamDemo/>
  <Meteor/>
  <Confe/>
  </>
  );
}
