"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PainPointCard } from "@/components/pain-point-card";
import { demoData } from "@/lib/demo-data";

type SortKey = "score" | "wtpScore" | "mentionCount";

export default function ResultsPage() {
  const [sortBy, setSortBy] = useState<SortKey>("score");
  const [filterSeverity, setFilterSeverity] = useState<string>("all");
  const [filterVerdict, setFilterVerdict] = useState<string>("all");

  const painPoints = useMemo(() => {
    let filtered = [...demoData.painPoints];

    if (filterSeverity !== "all") {
      filtered = filtered.filter((p) => p.severity === filterSeverity);
    }

    if (filterVerdict !== "all") {
      filtered = filtered.filter((p) => p.verdict === filterVerdict);
    }

    filtered.sort((a, b) => b[sortBy] - a[sortBy]);
    return filtered;
  }, [sortBy, filterSeverity, filterVerdict]);

  const totalMentions = demoData.painPoints.reduce(
    (sum, p) => sum + p.mentionCount,
    0
  );
  const totalWTP = demoData.painPoints.reduce(
    (sum, p) => sum + p.wtpSignals.length,
    0
  );

  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="text-lg font-bold">
              <span className="text-emerald-400">Idea</span>{" "}
              <span className="text-white">Starter</span>
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-sm text-zinc-400 hidden sm:inline">
              &ldquo;{demoData.query}&rdquo;
            </span>
            <Link href="/">
              <Button
                variant="outline"
                size="sm"
                className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 cursor-pointer"
              >
                New Search
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8 w-full space-y-6">
        {/* Overall Verdict */}
        <Card className="border-emerald-500/30 bg-emerald-500/5">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl">🟢</span>
                <div>
                  <h2 className="text-2xl font-bold text-emerald-400">
                    BUILD — Score: 85/100
                  </h2>
                  <p className="text-sm text-zinc-400 mt-1">
                    High pain intensity + multiple WTP signals + medium
                    competition
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 text-sm text-zinc-400">
              <span className="font-medium text-zinc-300">
                💡 Top Solution Ideas:
              </span>
              <ul className="list-disc list-inside mt-1 space-y-0.5">
                <li>
                  All-in-one SaaS bundle for small businesses (&lt;20 people)
                </li>
                <li>
                  Automated pain point discovery + validation tool
                </li>
                <li>
                  AI pricing advisor for indie founders
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Stats Bar */}
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800">
            <span className="text-zinc-500">📊</span>
            <span className="text-zinc-300">
              {totalMentions} posts analyzed
            </span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800">
            <span className="text-zinc-500">🎯</span>
            <span className="text-zinc-300">
              {demoData.painPoints.length} pain points
            </span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800">
            <span className="text-zinc-500">💰</span>
            <span className="text-zinc-300">{totalWTP} WTP signals</span>
          </div>
        </div>

        {/* Filters & Sort */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Verdict filter */}
          <div className="flex flex-col gap-1">
            <label className="text-xs text-zinc-500">
              Verdict <span className="text-zinc-600">— AI recommendation</span>
            </label>
            <select
              value={filterVerdict}
              onChange={(e) => setFilterVerdict(e.target.value)}
              className="bg-zinc-900 border border-zinc-700 text-zinc-200 text-sm rounded-lg px-3 py-1.5 cursor-pointer focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500/50 outline-none"
            >
              <option value="all">All Verdicts</option>
              <option value="BUILD">🟢 BUILD</option>
              <option value="RESEARCH MORE">🟡 RESEARCH MORE</option>
              <option value="SKIP">🔴 SKIP</option>
            </select>
          </div>

          {/* Severity filter */}
          <div className="flex flex-col gap-1">
            <label className="text-xs text-zinc-500">
              Severity <span className="text-zinc-600">— pain intensity</span>
            </label>
            <select
              value={filterSeverity}
              onChange={(e) => setFilterSeverity(e.target.value)}
              className="bg-zinc-900 border border-zinc-700 text-zinc-200 text-sm rounded-lg px-3 py-1.5 cursor-pointer focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500/50 outline-none"
            >
              <option value="all">All Severities</option>
              <option value="critical">🔴 Critical</option>
              <option value="high">🟠 High</option>
              <option value="medium">🟡 Medium</option>
            </select>
          </div>

          {/* Sort */}
          <div className="flex flex-col gap-1 ml-auto">
            <label className="text-xs text-zinc-500">
              Sort by <span className="text-zinc-600">— ranking order</span>
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortKey)}
              className="bg-zinc-900 border border-zinc-700 text-zinc-200 text-sm rounded-lg px-3 py-1.5 cursor-pointer focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500/50 outline-none"
            >
              <option value="score">🔥 Pain Score</option>
              <option value="wtpScore">💰 WTP</option>
              <option value="mentionCount">📊 Mentions</option>
            </select>
          </div>
        </div>

        {/* Pain Point Cards */}
        <div className="space-y-4">
          {painPoints.map((pp) => (
            <PainPointCard key={pp.rank} painPoint={pp} />
          ))}

          {painPoints.length === 0 && (
            <div className="text-center py-12 text-zinc-500">
              No pain points match the current filter.
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="border-t border-zinc-800 pt-6 pb-8 text-center text-sm text-zinc-500">
          Idea Starter — Find what to build next 🚀
        </footer>
      </div>
    </main>
  );
}
