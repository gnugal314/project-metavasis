import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Database,
  BarChart3,
  ShieldCheck,
  Cpu,
  ChevronDown,
} from 'lucide-react';

import {
  experience,
  projects,
  expertise, 
  metrics
} from "./data/data";

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Selected Work', href: '#projects' },
  { label: 'Career', href: '#experience' },
  { label: 'Connect', href: '#contact' },
 
];

function SectionLabel({ children }) {
  return <div className="mb-4 text-xs uppercase tracking-[0.35em] text-white/45">{children}</div>;
}

function GradientOrb({ className }) {
  return <div className={`absolute rounded-full blur-3xl opacity-30 bg-white ${className}`} aria-hidden="true" />;
}

function GlassCard({ children, className = '' }) {
  return (
    <div
      className={`rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-2xl shadow-black/30 ${className}`}
    >
      {children}
    </div>
  );
}

function StatPill({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-xl">
      <div className="text-lg font-semibold text-white">{value}</div>
      <div className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/40 sm:text-[11px]">
        {label}
      </div>
    </div>
  );
}

const iconMap = {
  database: Database,
  governance: ShieldCheck,
  analytics: BarChart3,
  platform: Cpu,
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

const intro = {
  name: 'Tori Hawkins',
  title: 'Data Engineering & Analytics',
  subtitle:
    'I build trusted data systems and modern analytics experiences for complex healthcare environments.',
  blurb:
    'Focused on platform modernization, governance, reporting, and scalable analytics enablement.',
  email: 'torihawkins.th@gmail.com',
  linkedin: 'https://www.linkedin.com/in/torihawkins/',
  github: 'https://github.com/gnugal314',
  resume: '/brief.pdf',
};

  // your JSX return continues below...
const handleNavClick = (e, id) => {
  e.preventDefault();
  setActive(id);

  const section = document.getElementById(id);
  if (!section) return;

  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });

  window.history.replaceState(null, '', `#${id}`);
};

useEffect(() => {
  const ids = navItems.map((item) => item.href.replace('#', ''));
  const sections = ids
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const getActiveSection = () => {
    const headerOffset = 110;

    let currentId = ids[0] || '';
    let smallestDistance = Number.POSITIVE_INFINITY;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const topDistance = Math.abs(rect.top - headerOffset);
      const isVisibleBand =
        rect.top <= headerOffset + 80 && rect.bottom > headerOffset + 40;

      if (isVisibleBand && topDistance < smallestDistance) {
        smallestDistance = topDistance;
        currentId = section.id;
      }
    });

    if (!currentId && sections.length) {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= headerOffset) {
          currentId = section.id;
        }
      });
    }

    if (currentId) {
      setActive((prev) => (prev !== currentId ? currentId : prev));
    }
  };

  let ticking = false;

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        getActiveSection();
        ticking = false;
      });
      ticking = true;
    }
  };

  getActiveSection();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  window.addEventListener('hashchange', onScroll);

  return () => {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
    window.removeEventListener('hashchange', onScroll);
  };
}, []);

  return (
    <div className="min-h-screen bg-[#06070a] text-white selection:bg-white selection:text-black">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <GradientOrb className="left-[-8rem] top-16 h-72 w-72" />
        <GradientOrb className="right-[-6rem] top-[22rem] h-80 w-80" />
        <GradientOrb className="bottom-[-8rem] left-1/3 h-96 w-96" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%),linear-gradient(to_bottom,transparent,rgba(255,255,255,0.02),transparent)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/8 bg-[#06070a]/70 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#top" className="text-sm font-medium tracking-[0.3em] text-white/85 uppercase">
            {intro.name}
          </a>

<nav className="hidden items-center gap-8 md:flex">
  {navItems.map((item) => {
    const id = item.href.replace('#', '');
    const isActive = active === id;

    return (
      <div key={item.label} className="group">
        <a
          href={item.href}
          onClick={(e) => handleNavClick(e, id)}
          className={`relative inline-block pb-3 text-sm transition duration-300 group-hover:-translate-y-[1px] ${
            isActive ? 'text-white' : 'text-white/55 hover:text-white/90'
          }`}
        >
          {item.label}

          <span
            className={`absolute left-1/2 top-full h-[6px] w-[6px] -translate-x-1/2 rounded-full bg-[#3b82f6] transition-all duration-300 ${
              isActive
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-75 group-hover:opacity-70 group-hover:scale-100'
            }`}
          />
        </a>
      </div>
    );
  })}
</nav>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/8 px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="text-white/75 hover:text-white">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main id="top" className="relative z-10">
        <section className="mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 py-14 lg:px-10">
          <div className="grid w-full gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              <div className="mb-6 inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/60">
                Advanced Analytics · BI · Machine Learning · Responsible AI
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
                Building trust
                <span className="block text-white/45">into every layer</span>
                <span className="block">of analytics.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-white/68 sm:text-lg">{intro.subtitle}</p>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">{intro.blurb}</p>
              
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:-translate-y-1 hover:border-white/20 hover:scale-[1.03] hover:-translate-y-0.5"
                >
                  View projects <ArrowRight size={16} />
                </a>
                <a
                  href={intro.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:-translate-y-1 hover:border-white/20 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Candidate Brief
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {metrics.map((metric) => (
                  <StatPill key={metric.label} value={metric.value} label={metric.label} />
                ))}
              </div>
            </motion.div>

  <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9, delay: 0.15 }}
  className="flex items-center"
>
  <GlassCard className="relative w-full overflow-hidden px-5 py-5 sm:px-6 sm:py-6">
    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.09),transparent_40%,rgba(255,255,255,0.03))]" />
    <div className="relative">

      <div className="flex items-center justify-between gap-4">
  <div>
    <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/35 sm:text-[12px]">
      Profile
    </div>
    <div className="mt-3 text-lg font-semibold tracking-tight text-white sm:text-xl">
      {intro.title}
    </div>
  </div>

  <a
    href="#contact"
    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/50 transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
  >
    Let’s Connect
  </a>
</div>

      <div className="mt-6 grid gap-3">
        {[
          ['Core Focus', 'Healthcare analytics, governance, and reporting transformation'],
          ['Leadership Style', 'Structured, strategic, calm, and business-centered'],
          ['Differentiator', 'Executive-ready analytics with trust built into the process'],
        ].map(([k, v]) => (
          <div key={k} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
            <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/35 sm:text-[11px]">
              {k}
            </div>
            <div className="mt-2 text-sm leading-7 text-white/75">
              {v}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <a
          href={intro.linkedin}
          className="rounded-full border border-white/10 p-2.5 text-white/70 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
          aria-label="LinkedIn"
        >
          <Linkedin size={16} />
        </a>
        <a
          href={intro.github}
          className="rounded-full border border-white/10 p-2.5 text-white/70 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
          aria-label="GitHub"
        >
          <Github size={16} />
        </a>
        <a
  href={`mailto:${intro.email}?subject=${encodeURIComponent("Let's connect")}`}
  className="rounded-full border border-white/10 p-2.5 text-white/70 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
  aria-label="Email"
>
  <Mail size={16} />
</a>
      </div>
    </div>
  </GlassCard>
</motion.div>
</div>
          <a href="#about" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/45 md:flex">
            Scroll <ChevronDown size={14} />
          </a>
        </section>

<section id="about" className="scroll-mt-24 mx-auto max-w-7xl px-6 py-16 lg:px-10">
  <SectionLabel>About</SectionLabel>

  <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
    <div>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
        Building trusted analytics systems for complex healthcare environments.
      </h2>
    </div>

    <div>
      <p className="text-sm leading-7 text-white/65 sm:text-base">
        I’m a senior data engineering and analytics professional with 15+ years of experience building governed data platforms, modern reporting systems, and scalable analytics workflows in regulated healthcare environments.
      </p>

      <p className="mt-4 text-sm leading-7 text-white/50 sm:text-base">
         My work spans enterprise data engineering, analytics modernization, fraud-focused reporting, and machine learning enablement — turning fragmented systems into reliable, decision-ready platforms.
      </p>
    </div>
  </div>
</section>

<section id="certifications" className="scroll-mt-24 mx-auto max-w-7xl px-6 py-16 lg:px-10">
  <SectionLabel>Certifications</SectionLabel>

  <GlassCard className="overflow-hidden px-5 py-6 sm:px-6 sm:py-8">
    <div className="mb-8">
      <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
        Cloud foundation for modern analytics and AI enablement.
      </h2>

      <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
        Certifications that support cloud modernization, analytics engineering,
        responsible AI adoption, and enterprise AI enablement.
      </p>
    </div>

    <div className="grid gap-5 md:grid-cols-2">
      {[
        {
          name: 'AWS Certified Cloud Practitioner',
          description:
            'Foundational knowledge of cloud concepts, AWS services, security, architecture, pricing, and cloud-enabled modernization.',
          image: '/aws-cloud-practitioner.png',
          alt: 'AWS Certified Cloud Practitioner badge',
        },
        {
          name: 'AWS Certified AI Practitioner',
          description:
            'Foundational knowledge of artificial intelligence, machine learning, generative AI, foundation models, responsible AI, and AWS AI services.',
          image: '/aws-ai-practitioner.png',
          alt: 'AWS Certified AI Practitioner badge',
        },
      ].map((cert) => (
        <div
          key={cert.name}
          className="rounded-[22px] border border-white/10 bg-black/20 px-5 py-5 sm:px-6 sm:py-6"
        >
          <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                {cert.name}
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/60">
                {cert.description}
              </p>
            </div>

            <img
              src={cert.image}
              alt={cert.alt}
              className="w-28 max-w-full rounded-2xl border border-white/10 bg-white/[0.03] p-3 shadow-2xl shadow-black/30 sm:w-32"
            />
          </div>
        </div>
      ))}
    </div>
  </GlassCard>
</section>

  <section id="expertise" className="scroll-mt-24 mx-auto max-w-7xl px-6 py-20 lg:px-10">
  <SectionLabel>Expertise</SectionLabel>

  <div className="mb-10">
  <h2 className="max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
    Intelligence built from data.
  </h2>

  <p className="mt-4 max-w-3xl text-sm leading-7 text-white/60 sm:text-base">
    From raw ingestion to GenAI retrieval — built to scale, designed for trust.
  </p>
</div>

  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
    {expertise.map((item, index) => {
      const Icon = iconMap[item.icon] || Database;

      return (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: index * 0.06 }}
          className="rounded-[22px] border border-white/10 bg-white/[0.04] px-5 py-5 backdrop-blur-xl shadow-2xl shadow-black/30 sm:px-6 sm:py-6"
        >
          <div className="inline-flex rounded-2xl border border-white/10 bg-white/10 p-2.5 text-white/85">
            <Icon size={16} />
          </div>

          <h3 className="mt-4 text-lg font-semibold leading-tight tracking-tight text-white sm:text-xl">
            {item.title}
          </h3>

          <p className="mt-4 text-sm leading-7 text-white/60 sm:text-base">
            {item.body}
          </p>
        </motion.div>
      );
    })}
  </div>
</section>


<section id="projects" className="scroll-mt-24 mx-auto max-w-7xl px-6 py-16 lg:px-10">
  <SectionLabel>Selected Work</SectionLabel>

  <div className="mb-10">
    <h2 className="max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
      Work shaped by scale, trust, and outcomes.
    </h2>
    <p className="mt-4 max-w-3xl text-sm leading-7 text-white/60 sm:text-base">
      A curated selection of analytics, governance, and modernization work across complex healthcare environments.
    </p>
  </div>

  <div className="space-y-6">
    {projects.map((project, index) => (
      <motion.div
        key={project.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, delay: index * 0.06 }}
        className="rounded-[22px] border border-white/10 bg-white/[0.04] px-5 py-5 backdrop-blur-xl shadow-2xl shadow-black/30 sm:px-6 sm:py-6"
      >
        <div className="grid gap-4 lg:grid-cols-[48px_1fr_auto] lg:items-start">
          <div className="pt-1 text-sm font-semibold text-white/25">
            {project.number}
          </div>

          <div>
            <div className="inline-flex rounded-full bg-[#1d3d73]/55 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#60a5fa] sm:text-[11px]">
              {project.badge}
            </div>

            <h3 className="mt-3 text-lg font-semibold leading-tight tracking-tight text-white sm:text-xl">
              {project.title}
            </h3>

            <p className="mt-4 max-w-4xl text-sm leading-7 text-white/55">
              {project.description}
            </p>

            {project.tags && (
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-white/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="pt-1 text-left text-xs font-medium text-white/35 lg:text-right sm:text-sm">
            {project.yearCompany}
          </div>
        </div>

        {project.stats && (
          <>
            <div className="mt-5 border-t border-white/10" />

            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {project.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-lg font-semibold leading-none tracking-tight text-white sm:text-xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[11px] leading-5 text-white/50 sm:text-xs">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </motion.div>
    ))}
  </div>
</section>

<section id="experience" className="scroll-mt-24 mx-auto max-w-7xl px-6 py-16 lg:px-10">
  <SectionLabel>Career</SectionLabel>

  <div className="mb-10">
    <h2 className="max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
      Experience shaping enterprise data and analytics systems.
    </h2>
    <p className="mt-4 max-w-3xl text-sm leading-7 text-white/60 sm:text-base">
      Selected roles spanning healthcare analytics, governance, and platform engineering.
    </p>
  </div>

  <div className="space-y-6">
    {experience.map((item, index) => (
      <motion.div
        key={item.company}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, delay: index * 0.06 }}
        className="rounded-[22px] border border-white/10 bg-white/[0.04] px-5 py-5 backdrop-blur-xl shadow-2xl shadow-black/30 sm:px-6 sm:py-6"
      >
        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-start">
          <div>
            <div className="text-sm font-semibold text-[#3b82f6] sm:text-base">
              {item.company}
            </div>

            <h3 className="mt-1 text-lg font-semibold leading-tight tracking-tight text-white sm:text-xl">
              {item.role}
            </h3>
          </div>

          <div className="text-xs text-white/35 sm:text-sm">
            {item.period}
          </div>
        </div>

        <ul className="mt-4 space-y-3">
          {item.highlights.map((point, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#3b82f6]" />
              <span className="text-sm leading-7 text-white/65 sm:text-base">
                {point}
              </span>
            </li>
          ))}
        </ul>

        {item.tags && (
          <div className="mt-4 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-white/50"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    ))}
  </div>
</section>

<section id="contact" className="scroll-mt-24 mx-auto max-w-7xl px-6 py-16 lg:px-10">
  <GlassCard className="overflow-hidden px-5 py-6 sm:px-6 sm:py-8">
    <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
      <div>
        <SectionLabel>Get In Touch</SectionLabel>
        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          Let’s build analytics experiences leaders can trust.
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
          I’m interested in senior roles focused on healthcare analytics, enterprise reporting, governance, and modern data platform strategy. For conversations about leadership opportunities, transformation initiatives, or analytics modernization, feel free to reach out.
        </p>
      </div>

       <div className="flex flex-col gap-3 lg:items-end">
              <a
  href={`mailto:${intro.email}?subject=${encodeURIComponent("Let's connect")}&body=${encodeURIComponent("Hi Tori,")}`}
  className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition duration-300 hover:-translate-y-0.5"
>
  Email me <ArrowRight size={16} />
</a>
              <div className="text-sm text-white/45">{intro.email}</div>
            </div>
          </div>
        </GlassCard>
      </section>
            </main>
          </div>
  );
}
