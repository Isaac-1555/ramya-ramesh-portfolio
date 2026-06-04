"use client";

import { motion } from "framer-motion";

export default function HomeClient({ profile, projects, services }: any) {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12">
      {/* HEADER / NAV */}
      <nav className="flex justify-between items-center py-8">
        <div className="font-bold tracking-tighter text-xl uppercase">{profile.name}</div>
        <div className="space-x-6 text-sm font-medium">
          <a href="#work" className="hover:text-secondary transition-colors">Work</a>
          <a href="#about" className="hover:text-secondary transition-colors">About</a>
          <a href="#contact" className="hover:text-secondary transition-colors">Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <motion.section 
        className="min-h-[70vh] flex flex-col justify-center gap-6 pb-24"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] max-w-3xl">
          {profile.headline}
        </h1>
        <p className="text-muted text-lg md:text-xl max-w-2xl">
          Project Coordinator & Data Analyst - Vancouver, BC
        </p>
        <div className="flex gap-4 pt-2">
          <a href="#work" className="bg-primary text-background px-6 py-3 rounded-full font-semibold hover:bg-secondary transition-colors text-sm">
            View Projects
          </a>
          <a href={profile.resumeUrl} className="border border-primary text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-background transition-colors text-sm">
            Download Resume
          </a>
        </div>
      </motion.section>

      {/* MANIFESTO */}
      <motion.section 
        id="about"
        className="py-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
      >
        <div className="max-w-3xl">
          <h2 className="text-sm font-bold uppercase text-muted mb-6 tracking-widest">Manifesto</h2>
          <p className="text-3xl md:text-5xl leading-tight font-medium">
            {profile.manifesto}
          </p>
          <p className="mt-8 text-xl text-muted">
            Focus on <span className="text-secondary font-bold">Clarity</span>, <span className="text-secondary font-bold">Strategy</span>, <span className="text-secondary font-bold">Identity</span>, and <span className="text-secondary font-bold">Impact</span>.
          </p>
        </div>
      </motion.section>

      {/* SERVICES */}
      <motion.section 
        className="py-32 border-t border-primary/20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
      >
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold uppercase text-muted mb-6 tracking-widest">Capabilities</h2>
            <h3 className="text-4xl font-bold">Tools & Methodologies</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {services.map((svc: any) => (
              <div key={svc.id} className="group">
                <h4 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">{svc.title}</h4>
                <p className="text-sm text-muted mb-3 uppercase tracking-wider">{svc.category}</p>
                <p className="text-foreground/80">{svc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* WORK / PROJECTS */}
      <motion.section 
        id="work"
        className="py-32 border-t border-primary/20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
      >
        <h2 className="text-sm font-bold uppercase text-muted mb-16 tracking-widest">Case Studies</h2>
        <div className="space-y-24">
          {projects.map((proj: any, idx: number) => (
            <div key={proj.id} className="grid md:grid-cols-12 gap-8 group">
              <div className="md:col-span-5 flex flex-col justify-center">
                <p className="text-sm text-muted font-bold tracking-widest mb-4">0{idx + 1} - {proj.category}</p>
                <h3 className="text-4xl font-bold mb-4 group-hover:text-primary transition-colors">{proj.title}</h3>
                <p className="text-lg text-foreground/80 mb-6">{proj.summary}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {proj.tools.map((t: string) => (
                    <span key={t} className="px-3 py-1 bg-foreground/5 rounded-full text-sm font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={proj.github} className="text-primary font-bold hover:text-secondary underline decoration-2 underline-offset-4">GitHub</a>
                  <a href={proj.dashboard} className="text-primary font-bold hover:text-secondary underline decoration-2 underline-offset-4">Live Dashboard</a>
                </div>
              </div>
              <div className="md:col-span-7 bg-foreground/5 aspect-video rounded-xl flex items-center justify-center overflow-hidden">
                <span className="text-muted tracking-widest uppercase text-sm group-hover:scale-105 transition-transform duration-700">Image Placeholder</span>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section 
        id="contact"
        className="py-40 flex flex-col items-center text-center border-t border-primary/20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-12 max-w-3xl">Let’s build something meaningful.</h2>
        <a href={`mailto:ramyapk6395@gmail.com`} className="bg-primary text-background px-12 py-6 rounded-full text-xl font-bold hover:bg-secondary transition-colors shadow-xl hover:shadow-2xl">
          Get in Touch
        </a>
        <div className="mt-16 flex gap-8 text-muted font-medium">
          <a href={profile.linkedin} className="hover:text-primary">LinkedIn</a>
          <a href={profile.github} className="hover:text-primary">GitHub</a>
        </div>
      </motion.section>
    </div>
  );
}
