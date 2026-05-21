import type { ProjectCard } from "@/data/projectCarousels";

type ProjectCarouselProps = {
  projects: readonly ProjectCard[];
  bottomMessage: boolean;
};

export function ProjectCarousel({ projects, bottomMessage }: ProjectCarouselProps ) {
  const cardClassName =
    "group relative block aspect-[16/10] w-[78vw] max-w-xl shrink-0 snap-center overflow-hidden rounded-md border border-cyan-100/10 bg-slate-950/40 transition duration-300 hover:border-cyan-100/32 focus:outline-none focus:ring-2 focus:ring-cyan-200/40 sm:w-[28rem]";

  const renderCardContent = (project: ProjectCard) => (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={project.imageUrl}
        alt={project.title}
        className="h-full w-full object-cover opacity-82 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/72 to-transparent"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="text-sm font-medium text-cyan-50 drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">{project.title}</p>
      </div>
    </>
  );

  return (
    <div className="mt-10">
      <div className="flex snap-x gap-4 overflow-x-auto pb-4 [scrollbar-color:rgba(103,232,249,0.28)_transparent]">
        {projects.map((project) =>
          project.href ? (
            <a key={project.title} href={project.href} target="_blank" rel="noreferrer" className={cardClassName}>
              {renderCardContent(project)}
            </a>
          ) : (
            <div key={project.title} className={cardClassName}>
              {renderCardContent(project)}
            </div>
          ),
        )}
      </div>
      {bottomMessage && (
        <p className="mt-2 text-sm text-slate-300/66">Clicking the images opens the related projects.</p>
      )}
    </div>
  );
}
