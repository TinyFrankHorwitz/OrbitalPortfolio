"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { orbitNodes } from "@/data/orbitNodes";
import { useSceneStore } from "@/store/sceneStore";

export function HomeOverlay() {
  const transitioningNodeId = useSceneStore((state) => state.transitioningNodeId);

  return (
    <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-between px-5 py-6 sm:px-8 lg:px-12">
      <motion.header
        className="mx-auto w-full max-w-5xl text-center"
        initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <p className="mb-3 text-xs uppercase tracking-[0.34em] text-cyan-100/55">Interactive identity system</p>
        <h1 className="soft-text-glow text-4xl font-light tracking-normal text-cyan-50 sm:text-5xl lg:text-7xl">
          Creative Technology Portfolio
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-300/78 sm:text-base">
          FullStack, game development, and multimedia production arranged as a calm cinematic orbital interface.
        </p>
      </motion.header>

      <motion.nav
        className="pointer-events-auto mx-auto grid w-full max-w-4xl grid-cols-1 gap-3 pb-2 sm:grid-cols-3"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.35, ease: "easeInOut" }}
        aria-label="Portfolio sections"
      >
        {orbitNodes.map((node) => (
          <Link
            key={node.id}
            href={node.href}
            className="group rounded-md border border-cyan-100/10 bg-slate-950/24 px-4 py-3 text-left backdrop-blur-md transition duration-300 hover:border-cyan-100/28 hover:bg-cyan-100/8 focus:outline-none focus:ring-2 focus:ring-cyan-200/40"
          >
            <span className="block text-sm font-medium text-cyan-50">{node.title}</span>
            <span className="mt-1 block text-xs leading-5 text-slate-300/70">{node.description}</span>
          </Link>
        ))}
      </motion.nav>

      <motion.div
        className="pointer-events-none fixed inset-0 z-20 bg-[#05060b]"
        initial={false}
        animate={{
          opacity: transitioningNodeId ? 0.86 : 0,
          scale: transitioningNodeId ? 1 : 1.06,
          backdropFilter: transitioningNodeId ? "blur(10px)" : "blur(0px)",
        }}
        transition={{ duration: 0.55, ease: "easeInOut" }}
      />
    </div>
  );
}
