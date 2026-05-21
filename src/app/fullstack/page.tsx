import { SectionPage } from "@/components/portfolio/SectionPage";
import { sectionDetails } from "@/data/orbitNodes";
import { projectCarousels } from "@/data/projectCarousels";

export default function FullStackPage() {
  return <SectionPage section={sectionDetails.fullstack} projects={projectCarousels.fullstack} />;
}
