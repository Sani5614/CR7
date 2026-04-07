"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  PieChart,
  Pie,
  Cell
} from "recharts";
import {
  Flag,
  Flame,
  HandHeart,
  Moon,
  Shield,
  Sun,
  Target,
  Trophy,
  Search,
  Share2,
  Sparkles
} from "lucide-react";
import { useMemo, useState } from "react";
import { useTheme } from "./theme-provider";
import { AnimatedCounter } from "./animated-counter";
import {
  careerClubs,
  galleryImages,
  goalMilestones,
  goalsByCompetition,
  goalsPerSeason,
  goalSplit,
  quickHighlights,
  quotes,
  stats,
  timelineEvents,
  trophies
} from "@/data/cr7";

const navItems = ["Home", "Stats", "Goals", "Achievements", "Career", "Gallery", "Quotes", "Timeline", "Footer"];

const iconMap = { Target, HandHeart, Shield, Flame, Flag, Trophy } as const;

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-white/60 backdrop-blur-xl dark:bg-black/25">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-8">
        <a href="#home" className="text-xl font-extrabold tracking-widest text-gold-500">CR7</a>
        <div className="hidden gap-4 md:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-slate-700 transition hover:text-gold-500 dark:text-slate-200">
              {item}
            </a>
          ))}
        </div>
        <button onClick={toggleTheme} aria-label="Toggle theme" className="rounded-full p-2 glass">
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </nav>
    </header>
  );
}

export function Hero() {
  return (
    <section id="home" className="section-pad relative overflow-hidden pt-32">
      <div className="absolute inset-0 -z-10 bg-mesh" />
      <div className="mx-auto max-w-7xl">
        <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
          CR7 — The Standard of Greatness
        </motion.h1>
        <p className="mt-4 max-w-2xl text-slate-700 dark:text-slate-300">A fan-made tribute to elite consistency, relentless ambition, and one of football's most legendary careers.</p>
        <div className="mt-8 flex gap-3">
          <a href="#stats" className="rounded-full bg-gold-500 px-6 py-3 font-semibold text-black shadow-glow">Explore Stats</a>
          <a href="#achievements" className="rounded-full glass px-6 py-3 font-semibold">View Achievements</a>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {quickHighlights.map((item) => (
            <div key={item.label} className="glass rounded-2xl p-5 transition hover:scale-[1.02] hover:shadow-glow">
              <p className="text-sm text-slate-500">{item.label}</p>
              <p className="mt-1 text-3xl font-bold text-gold-500">
                <AnimatedCounter value={item.value} suffix={item.suffix} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StatsSection() {
  return (
    <section id="stats" className="section-pad">
      <h2 className="text-3xl font-bold">Stats Dashboard</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Trophy;
          return (
            <div key={item.key} className="glass rounded-2xl p-5 transition hover:scale-[1.02] hover:shadow-glow">
              <Icon className="mb-3 text-gold-500" />
              <p className="text-sm text-slate-500">{item.label}</p>
              <p className="text-3xl font-bold"><AnimatedCounter value={item.value} /></p>
            </div>
          );
        })}
      </div>
      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <div className="glass rounded-2xl p-4">
          <h3 className="mb-3 font-semibold">Goals by Competition</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={goalsByCompetition}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                <XAxis dataKey="competition" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="goals" fill="#D4AF37" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="glass rounded-2xl p-4">
          <h3 className="mb-3 font-semibold">Goals per Season</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={goalsPerSeason}>
                <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#D4AF37" stopOpacity={0.65}/><stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/></linearGradient></defs>
                <XAxis dataKey="season" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="goals" stroke="#D4AF37" fill="url(#g)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

export function GoalsSection() {
  const [search, setSearch] = useState("");
  const [competition, setCompetition] = useState("All");
  const [yearMin, setYearMin] = useState(2000);
  const [yearMax, setYearMax] = useState(2030);

  const filtered = useMemo(
    () => goalMilestones.filter((m) => m.title.toLowerCase().includes(search.toLowerCase()) && (competition === "All" || m.competition === competition) && m.year >= yearMin && m.year <= yearMax),
    [search, competition, yearMin, yearMax]
  );

  return (
    <section id="goals" className="section-pad">
      <h2 className="text-3xl font-bold">Goals</h2>
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {goalSplit.map((g) => <div key={g.label} className="glass rounded-2xl p-4"><p className="text-sm">{g.label}</p><p className="text-2xl font-bold text-gold-500">{g.goals}</p></div>)}
        <div className="glass rounded-2xl p-4 lg:col-span-1">
          <p className="mb-2 font-semibold">Split Visualization</p>
          <div className="h-44">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={goalSplit} dataKey="goals" nameKey="label" innerRadius={45} outerRadius={70}>
                  {goalSplit.map((entry) => <Cell key={entry.label} fill={entry.color} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="mt-8 glass rounded-2xl p-4">
        <div className="grid gap-3 md:grid-cols-4">
          <label className="relative"><Search size={16} className="absolute left-3 top-3 text-slate-400" /><input className="w-full rounded-xl border border-slate-300 bg-transparent px-9 py-2 dark:border-slate-700" placeholder="Search milestone" value={search} onChange={(e) => setSearch(e.target.value)} /></label>
          <select className="rounded-xl border border-slate-300 bg-transparent px-3 py-2 dark:border-slate-700" value={competition} onChange={(e) => setCompetition(e.target.value)}>
            {["All", "League", "UCL", "International"].map((c) => <option key={c}>{c}</option>)}
          </select>
          <input type="number" className="rounded-xl border border-slate-300 bg-transparent px-3 py-2 dark:border-slate-700" value={yearMin} onChange={(e) => setYearMin(Number(e.target.value))} />
          <input type="number" className="rounded-xl border border-slate-300 bg-transparent px-3 py-2 dark:border-slate-700" value={yearMax} onChange={(e) => setYearMax(Number(e.target.value))} />
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead><tr className="border-b border-slate-300 dark:border-slate-700"><th className="py-2">Milestone</th><th>Competition</th><th>Year</th><th>Note</th></tr></thead>
            <tbody>
              {filtered.map((m) => <tr key={m.title} className="border-b border-slate-200/70 dark:border-slate-800"><td className="py-2 font-semibold">{m.title}</td><td>{m.competition}</td><td>{m.year}</td><td>{m.note}</td></tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function AchievementsSection() {
  return (
    <section id="achievements" className="section-pad">
      <h2 className="text-3xl font-bold">Achievements</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {trophies.map((t) => (
          <div key={t.title} className="glass rounded-2xl p-5 transition hover:scale-[1.02]">
            <span className="rounded-full bg-gold-500/20 px-3 py-1 text-xs text-gold-500">{t.category}</span>
            <h3 className="mt-3 font-semibold">{t.title}</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{t.description}</p>
            <p className="mt-3 text-2xl font-bold text-gold-500">{t.count}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 glass rounded-2xl p-6">
        <p className="text-xs uppercase tracking-widest text-gold-500">Top Awards</p>
        <p className="mt-2 text-2xl font-bold">5x Ballon d&apos;Or + 5x UCL Champion</p>
      </div>
    </section>
  );
}

export function CareerSection() {
  return (
    <section id="career" className="section-pad">
      <h2 className="text-3xl font-bold">Career Clubs</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {careerClubs.map((club) => (
          <div key={club.club} className="glass rounded-2xl p-5">
            <h3 className="text-xl font-semibold">{club.club}</h3>
            <p className="text-sm text-slate-500">{club.years}</p>
            <div className="mt-3 grid grid-cols-2 gap-3 text-sm"><p>Apps: <strong>{club.appearances}</strong></p><p>Goals: <strong>{club.goals}</strong></p></div>
            <p className="mt-2 text-sm">{club.notable}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function GallerySection() {
  const [selected, setSelected] = useState<number | null>(null);
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});

  return (
    <section id="gallery" className="section-pad">
      <h2 className="text-3xl font-bold">Gallery</h2>
      <div className="mt-6 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {galleryImages.map((img) => (
          <button key={img.id} onClick={() => setSelected(img.id)} className="group relative mb-4 block w-full overflow-hidden rounded-2xl">
            {!loaded[img.id] && <div className="h-56 w-full animate-pulse rounded-2xl bg-slate-300/40 dark:bg-slate-800" />}
            <Image src={`https://picsum.photos/id/${img.id}/900/700`} alt={img.alt} width={900} height={700} className="h-auto w-full rounded-2xl transition duration-300 group-hover:scale-[1.03]" onLoad={() => setLoaded((v) => ({ ...v, [img.id]: true }))} />
          </button>
        ))}
      </div>
      {selected && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4" onClick={() => setSelected(null)}>
          <Image src={`https://picsum.photos/id/${selected}/1400/1000`} alt="Expanded gallery image" width={1400} height={1000} className="max-h-[90vh] w-auto rounded-2xl" />
        </div>
      )}
    </section>
  );
}

export function QuotesSection() {
  const [active, setActive] = useState(0);
  const quote = quotes[active];

  return (
    <section id="quotes" className="section-pad">
      <h2 className="text-3xl font-bold">Quotes</h2>
      <div className="mt-6 glass rounded-2xl p-8">
        <motion.p key={quote.id} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} className="text-xl">“{quote.text}”</motion.p>
        <div className="mt-5 flex flex-wrap gap-3">
          {quotes.map((q, idx) => <button key={q.id} className={`rounded-full px-3 py-1 text-sm ${idx === active ? "bg-gold-500 text-black" : "glass"}`} onClick={() => setActive(idx)}>{idx + 1}</button>)}
          <button onClick={() => navigator.clipboard.writeText(quote.text)} className="ml-auto flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm text-white dark:bg-white dark:text-black"><Share2 size={14} /> Share quote</button>
        </div>
      </div>
    </section>
  );
}

export function TimelineSection() {
  return (
    <section id="timeline" className="section-pad">
      <h2 className="text-3xl font-bold">Timeline</h2>
      <div className="mt-8 border-l-2 border-gold-500/50 pl-6">
        {timelineEvents.map((e, idx) => (
          <motion.div key={e.year} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }} className="relative mb-8">
            <span className="absolute -left-[34px] top-1 grid h-4 w-4 place-content-center rounded-full bg-gold-500"><Sparkles size={10} className="text-black" /></span>
            <p className="text-sm text-gold-500">{e.year}</p>
            <h3 className="font-semibold">{e.title}</h3>
            <p className="text-slate-600 dark:text-slate-300">{e.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer id="footer" className="border-t border-white/10 px-4 py-10 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} CR7 Tribute · Fan-made tribute site.
    </footer>
  );
}
