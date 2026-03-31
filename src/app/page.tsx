"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const PLATFORMS = [
  { id: "reddit", label: "Reddit", emoji: "🔴" },
  { id: "hackernews", label: "Hacker News", emoji: "🟠" },
  { id: "producthunt", label: "Product Hunt", emoji: "🟠" },
  { id: "stackoverflow", label: "Stack Overflow", emoji: "🟢" },
];

const STEPS = [
  {
    emoji: "🔍",
    title: "Scan Communities",
    description:
      "AI reads thousands of posts & comments across Reddit, Hacker News, Product Hunt, and Stack Overflow.",
  },
  {
    emoji: "🎯",
    title: "Cluster Pain Points",
    description:
      "Groups complaints into validated problems ranked by frequency & urgency.",
  },
  {
    emoji: "💰",
    title: "Detect WTP Signals",
    description:
      'Finds "I\'d pay for this" signals — know which problems have real demand.',
  },
];

export default function Home() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [platforms, setPlatforms] = useState<Record<string, boolean>>({
    reddit: true,
    hackernews: true,
    producthunt: true,
    stackoverflow: true,
  });

  const togglePlatform = (id: string) => {
    setPlatforms((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleScan = () => {
    router.push(`/results?q=${encodeURIComponent(query || "entrepreneur pain points")}`);
  };

  return (
    <main className="flex-1 flex flex-col">
      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-20">
        <div className="max-w-2xl w-full text-center space-y-8">
          {/* Logo & Title */}
          <div className="space-y-3">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
              <span className="text-emerald-400">Idea</span>{" "}
              <span className="text-white">Starter</span>
            </h1>
            <p className="text-lg sm:text-xl text-zinc-400">
              Enter a niche → AI scans communities → Get ranked pain points &
              opportunities
            </p>
          </div>

          {/* Search Box */}
          <div className="space-y-4">
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="e.g. project management, invoicing, email marketing"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleScan()}
                className="h-12 text-base bg-zinc-900 border-zinc-700 placeholder:text-zinc-500 focus-visible:ring-emerald-500/50"
              />
              <Button
                onClick={handleScan}
                className="h-12 px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold cursor-pointer"
              >
                🔍 Scan Now
              </Button>
            </div>

            {/* Platform Checkboxes */}
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {PLATFORMS.map((p) => (
                <label
                  key={p.id}
                  className="flex items-center gap-2 cursor-pointer select-none text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={platforms[p.id]}
                    onChange={() => togglePlatform(p.id)}
                    className="rounded border-zinc-600 bg-zinc-800 text-emerald-500 focus:ring-emerald-500/50 accent-emerald-500"
                  />
                  <span>
                    {p.emoji} {p.label}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-zinc-800 bg-zinc-950/50 px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-10 text-zinc-200">
            How it works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {STEPS.map((step, i) => (
              <div
                key={i}
                className="text-center space-y-3 p-6 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-colors"
              >
                <div className="text-4xl">{step.emoji}</div>
                <h3 className="text-lg font-semibold text-zinc-100">
                  {step.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="border-t border-zinc-800 px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-10 text-zinc-200">
            Why Idea Starter?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: "✓",
                title: "Stop guessing what to build",
                desc: "Let real user complaints guide your next product — not shower thoughts.",
              },
              {
                icon: "✓",
                title: "WTP Detection",
                desc: 'Detects willingness-to-pay signals. Find problems people will actually pay to solve.',
              },
              {
                icon: "✓",
                title: "Multi-platform",
                desc: "Scans Reddit, Hacker News, Product Hunt, Stack Overflow — and more.",
              },
              {
                icon: "✓",
                title: "Free & open",
                desc: "No $100/mo subscriptions. BYOK — bring your own AI key, pay only for what you use.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-3 p-4 rounded-lg border border-zinc-800 bg-zinc-900/30"
              >
                <span className="text-emerald-400 text-xl font-bold mt-0.5">
                  {item.icon}
                </span>
                <div>
                  <h3 className="font-semibold text-zinc-100">{item.title}</h3>
                  <p className="text-sm text-zinc-400 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 px-4 py-6 text-center text-sm text-zinc-500">
        Idea Starter — Find what to build next 🚀
      </footer>
    </main>
  );
}
