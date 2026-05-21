import { SectionPage } from "@/components/portfolio/SectionPage";
import { sectionDetails } from "@/data/orbitNodes";
import { projectCarousels } from "@/data/projectCarousels";

export default function MultimediaPage() {
  return <SectionPage section={sectionDetails.multimedia} projects={projectCarousels.multimedia} />;
}
