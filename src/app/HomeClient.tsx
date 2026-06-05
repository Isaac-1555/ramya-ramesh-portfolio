"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "@/components/TextReveal";
import SectionNav from "@/components/SectionNav";
import StatsBar from "@/components/StatsBar";
import {
  Briefcase,
  Chart,
  ToolCase,
  Globe,
  ExternalLink,
  User,
  Zap,
  Mail,
} from "pixelarticons/react";
import type {
  ProfileData,
  ProjectData,
  ServiceData,
} from "@/lib/contentful";

gsap.registerPlugin(ScrollTrigger);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const SERVICE_ICONS = [Briefcase, Chart, ToolCase, Globe];

export interface HomeClientProps {
  profile: ProfileData;
  projects: ProjectData[];
  services: ServiceData[];
}

export default function HomeClient({ profile, projects, services }: HomeClientProps) {
  const [scrolled, setScrolled] = useState(false);
  const [statsReady, setStatsReady] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const section = document.getElementById("services");
    if (!section) return;

    const ctx = gsap.context(() => {
      const heading = section.querySelector(".services-heading");
      const cards = section.querySelectorAll<HTMLElement>(".service-card");
      if (!heading) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        heading,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );

      if (cards.length) {
        tl.fromTo(
          cards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.3"
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12">
      <SectionNav visible={scrolled} />

      {/* HEADER / NAV */}
      <div
        className={`transition-opacity duration-500 ${
          scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <nav className="flex justify-between items-center py-8">
          <div className="font-bold tracking-tighter text-xl uppercase">
            {profile.name}
          </div>
          <div className="space-x-6 text-sm font-medium">
            <a href="#work" className="hover:text-secondary transition-colors">
              Work
            </a>
            <a href="#about" className="hover:text-secondary transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-secondary transition-colors">
              Contact
            </a>
          </div>
        </nav>
      </div>

      {/* HERO */}
      <motion.section
        id="hero"
        className="min-h-[70vh] flex flex-col justify-center gap-6 pb-24"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <TextReveal
          as="h1"
          animation="typewriter"
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] max-w-3xl"
          onComplete={() => setStatsReady(true)}
        >
          {profile.headline}
        </TextReveal>
        <p className="text-muted text-lg md:text-xl max-w-2xl">
          Project Coordinator & Data Analyst - Vancouver, BC
        </p>
        <div className="flex gap-4 pt-2">
          <a
            href="#work"
            className="bg-primary text-background px-6 py-3 rounded-full font-semibold hover:bg-secondary transition-colors text-sm"
          >
            View Projects
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-background transition-colors text-sm"
          >
            Download Resume
          </a>
        </div>
        {profile.stats && statsReady && <StatsBar stats={profile.stats} />}
      </motion.section>

      {/* MANIFESTO */}
      <section id="about" className="py-32">
        <div className="max-w-3xl">
          <h2 className="text-sm font-bold uppercase text-muted mb-6 tracking-widest">
            Manifesto
          </h2>
          <TextReveal
            as="p"
            animation="stagger-wobble"
            className="text-3xl md:text-5xl leading-tight font-medium"
          >
            {profile.manifesto}
          </TextReveal>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-32 border-t border-primary/20">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="services-heading">
            <h2 className="text-sm font-bold uppercase text-muted mb-6 tracking-widest">
              Capabilities
            </h2>
            <h3 className="text-4xl font-bold">Tools & Methodologies</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {services.map((svc: ServiceData, idx: number) => {
              const Icon = SERVICE_ICONS[idx % SERVICE_ICONS.length];
              return (
                <div key={svc.id} className="group service-card">
                  <Icon className="text-primary mb-3" width={28} height={28} />
                  <h4 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">
                    {svc.title}
                  </h4>
                  <p className="text-sm text-muted mb-3 uppercase tracking-wider">
                    {svc.category}
                  </p>
                  <p className="text-foreground/80">{svc.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WORK / PROJECTS */}
      <section id="work" className="py-32 border-t border-primary/20">
        <h2 className="text-sm font-bold uppercase text-muted mb-16 tracking-widest">
          Case Studies
        </h2>
        <div className="space-y-24">
          {projects.map((proj: ProjectData, idx: number) => (
            <div key={proj.id} className="grid md:grid-cols-12 gap-8 group">
              <div className="md:col-span-5 flex flex-col justify-center">
                <p className="text-sm text-muted font-bold tracking-widest mb-4">
                  0{idx + 1} - {proj.category}
                </p>
                <TextReveal
                  as="h3"
                  animation="clip-reveal"
                  className="text-4xl font-bold mb-4 group-hover:text-primary transition-colors"
                >
                  {proj.title}
                </TextReveal>
                <p className="text-lg text-foreground/80 mb-6">
                  {proj.summary}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {proj.tools.map((t: string) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-foreground/5 rounded-full text-sm font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 items-center">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-primary font-bold hover:text-secondary underline decoration-2 underline-offset-4"
                  >
                    <ExternalLink width={16} height={16} /> GitHub
                  </a>
                  <a
                    href={proj.dashboard}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-primary font-bold hover:text-secondary underline decoration-2 underline-offset-4"
                  >
                    <ExternalLink width={16} height={16} /> Live Dashboard
                  </a>
                </div>
              </div>
              <div className="md:col-span-7 bg-foreground/5 aspect-video rounded-xl flex items-center justify-center overflow-hidden">
                <span className="text-muted tracking-widest uppercase text-sm group-hover:scale-105 transition-transform duration-700">
                  Image Placeholder
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="py-40 flex flex-col items-center text-center border-t border-primary/20"
      >
        <TextReveal
          as="h2"
          animation="gradient-scroll"
          className="text-5xl md:text-7xl font-bold mb-12 max-w-3xl"
        >
          Let&rsquo;s build something meaningful.
        </TextReveal>
        <a
          href={`mailto:ramyapk6395@gmail.com`}
          className="inline-flex items-center gap-2 bg-primary text-background px-12 py-6 rounded-full text-xl font-bold hover:bg-secondary transition-colors shadow-xl hover:shadow-2xl"
        >
          <Mail width={24} height={24} /> Get in Touch
        </a>
        <div className="mt-16 flex gap-8 text-muted font-medium">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-primary"
          >
            <User width={18} height={18} /> LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-primary"
          >
            <Zap width={18} height={18} /> GitHub
          </a>
        </div>
      </section>
    </div>
  );
}
