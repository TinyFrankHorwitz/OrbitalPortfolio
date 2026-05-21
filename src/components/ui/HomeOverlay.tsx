"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { type FormEvent, useEffect, useState } from "react";
import { contactDetails } from "@/data/contact";
import { orbitNodes } from "@/data/orbitNodes";
import { useSceneStore } from "@/store/sceneStore";

export function HomeOverlay() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sendState, setSendState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const transitioningNodeId = useSceneStore((state) => state.transitioningNodeId);

  useEffect(() => {
    if (!isContactOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsContactOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isContactOpen]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSendState("sending");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: senderName,
          email: senderEmail,
          message,
        }),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "Message could not be sent.");
      }

      setSendState("sent");
      setStatusMessage(result.message ?? "Message sent.");
      setSenderName("");
      setSenderEmail("");
      setMessage("");
    } catch (error) {
      setSendState("error");
      setStatusMessage(error instanceof Error ? error.message : "Message could not be sent.");
    }
  };

  return (
    <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-between px-5 py-6 sm:px-8 lg:px-12">
      <motion.header
        className="mx-auto w-full max-w-5xl text-center"
        initial={{ opacity: 0, y: 12, filter: "blur(13px)", boxShadow: "0 18px 50px rgba(22, 22, 22, 0.08)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="pointer-events-auto mb-3 flex items-center justify-center gap-3">
          <p className="text-xs uppercase tracking-[0.34em] text-cyan-100/55">Francisco Hidalgo&apos;s</p>
          <button
            type="button"
            onClick={() => {
              setStatusMessage("");
              setSendState("idle");
              setIsContactOpen(true);
            }}
            className="rounded-md border border-cyan-100/14 bg-cyan-50/7 px-3 py-1.5 text-xs font-medium text-cyan-50/86 backdrop-blur-md transition hover:border-cyan-100/32 hover:bg-cyan-50/12 focus:outline-none focus:ring-2 focus:ring-cyan-200/40"
          >
            Contact
          </button>
        </div>
        <h1 className="soft-text-glow text-4xl font-light tracking-normal text-cyan-50 sm:text-5xl lg:text-7xl">
          Developer Portfolio
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-300/78 sm:text-base">
          Showcasing full-stack systems, game development, and multimedia production.
        </p>
      </motion.header>

      <motion.nav
        className="pointer-events-auto mx-auto grid w-full max-w-4xl grid-cols-3 gap-2 pb-2 sm:gap-3"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.35, ease: "easeInOut" }}
        aria-label="Portfolio sections"
      >
        {orbitNodes.map((node) => (
          <Link
            key={node.id}
            href={node.href}
            className="group flex min-h-12 items-center justify-center rounded-md border border-cyan-100/10 bg-slate-950/24 px-2 py-3 text-center backdrop-blur-md transition duration-300 hover:border-cyan-100/28 hover:bg-cyan-100/8 focus:outline-none focus:ring-2 focus:ring-cyan-200/40 sm:min-h-16 sm:px-4"
          >
            <span className="block text-xs font-medium leading-4 text-cyan-50 sm:text-sm">{node.title}</span>
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

      {isContactOpen ? (
        <div
          className="pointer-events-auto fixed inset-0 z-30 flex items-center justify-center bg-slate-950/62 px-5 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-title"
          onClick={() => setIsContactOpen(false)}
        >
          <motion.div
            className="max-h-[88vh] w-full max-w-md overflow-y-auto rounded-md border border-cyan-100/14 p-5 text-cyan-50 shadow-aura"
            style={{ backgroundColor: "#00000075" }}
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.26em] text-cyan-100/50">{contactDetails.role}</p>
                <h2 id="contact-title" className="mt-2 text-2xl font-light">
                  Contact {contactDetails.name}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsContactOpen(false)}
                className="rounded-md border border-cyan-100/12 px-3 py-1 text-sm text-cyan-50/74 transition hover:border-cyan-100/30 hover:text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-200/40"
              >
                Close
              </button>
            </div>

            <div className="mt-5 rounded-md border border-cyan-100/10 bg-cyan-50/6 px-4 py-3">
              <span className="block text-xs uppercase tracking-[0.18em] text-cyan-100/48">Email</span>
              <span className="mt-1 block text-sm text-cyan-50">{contactDetails.email}</span>
            </div>

            <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
              <label className="block">
                <span className="mb-1 block text-xs uppercase tracking-[0.16em] text-cyan-100/48">Your name</span>
                <input
                  value={senderName}
                  onChange={(event) => setSenderName(event.target.value)}
                  className="w-full rounded-md border border-cyan-100/10 bg-slate-950/54 px-3 py-2 text-sm text-cyan-50 outline-none transition placeholder:text-slate-400/45 focus:border-cyan-100/34 focus:ring-2 focus:ring-cyan-200/20"
                  maxLength={80}
                  required
                />
              </label>

              <label className="block">
                <span className="mb-1 block text-xs uppercase tracking-[0.16em] text-cyan-100/48">Your email</span>
                <input
                  type="email"
                  value={senderEmail}
                  onChange={(event) => setSenderEmail(event.target.value)}
                  className="w-full rounded-md border border-cyan-100/10 bg-slate-950/54 px-3 py-2 text-sm text-cyan-50 outline-none transition placeholder:text-slate-400/45 focus:border-cyan-100/34 focus:ring-2 focus:ring-cyan-200/20"
                  maxLength={120}
                  required
                />
              </label>

              <label className="block">
                <span className="mb-1 block text-xs uppercase tracking-[0.16em] text-cyan-100/48">Message</span>
                <textarea
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="min-h-28 w-full resize-none rounded-md border border-cyan-100/10 bg-slate-950/54 px-3 py-2 text-sm leading-6 text-cyan-50 outline-none transition placeholder:text-slate-400/45 focus:border-cyan-100/34 focus:ring-2 focus:ring-cyan-200/20"
                  maxLength={1600}
                  required
                />
              </label>

              <button
                type="submit"
                disabled={sendState === "sending"}
                className="w-full rounded-md border border-cyan-100/14 bg-cyan-50/9 px-4 py-3 text-sm font-medium text-cyan-50 transition hover:border-cyan-100/34 hover:bg-cyan-50/14 focus:outline-none focus:ring-2 focus:ring-cyan-200/40 disabled:cursor-wait disabled:opacity-60"
              >
                {sendState === "sending" ? "Sending..." : "Send message"}
              </button>

              {statusMessage ? (
                <p className={sendState === "sent" ? "text-sm text-cyan-100/78" : "text-sm text-pink-200/82"}>
                  {statusMessage}
                </p>
              ) : null}
            </form>

            <div className="mt-3 space-y-2">
              {contactDetails.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-md border border-cyan-100/10 px-4 py-3 transition hover:border-cyan-100/28 hover:bg-cyan-50/8 focus:outline-none focus:ring-2 focus:ring-cyan-200/40"
                >
                  <span className="block text-sm font-medium">{link.label}</span>
                  <span className="mt-1 block text-xs leading-5 text-slate-300/72">{link.value}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      ) : null}
    </div>
  );
}
