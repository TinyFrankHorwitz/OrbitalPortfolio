import { SectionPage } from "@/components/portfolio/SectionPage";
import { sectionDetails } from "@/data/orbitNodes";
import { projectCarousels } from "@/data/projectCarousels";

export default function GameDevelopmentPage() {
  return <SectionPage section={sectionDetails.gamedev} projects={projectCarousels.gamedev} />;
}
