import Link from "next/link";
import type { sectionDetails } from "@/data/orbitNodes";

type SectionKey = keyof typeof sectionDetails;

type SectionPageProps = {
  section: (typeof sectionDetails)[SectionKey];
};

export function SectionPage({ section }: SectionPageProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05060b] px-5 py-6 text-cyan-50 sm:px-8 lg:px-12">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_24%_22%,rgba(99,242,255,0.16),transparent_28rem),radial-gradient(circle_at_75%_40%,rgba(255,107,168,0.11),transparent_26rem)]" />
      <Link
        href="/"
        className="inline-flex rounded-md border border-cyan-100/12 bg-cyan-50/5 px-4 py-2 text-sm text-cyan-50/82 backdrop-blur-md transition hover:border-cyan-100/30 hover:bg-cyan-50/10 focus:outline-none focus:ring-2 focus:ring-cyan-200/40"
      >
        Back to orbit
      </Link>

      <section className="mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-6xl flex-col justify-center">
        <p className="mb-4 text-xs uppercase tracking-[0.34em] text-cyan-100/50">{section.eyebrow}</p>
        <h1 className="soft-text-glow text-5xl font-light tracking-normal sm:text-7xl">{section.title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300/78">{section.summary}</p>

        <div className="mt-10 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2">
          {section.items.map((item) => (
            <div key={item} className="rounded-md border border-cyan-100/10 bg-slate-950/30 px-5 py-4 backdrop-blur-md">
              <p className="text-sm text-cyan-50/86">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
