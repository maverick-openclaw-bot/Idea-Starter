"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { PainPoint } from "@/lib/demo-data";

const severityColors: Record<string, string> = {
  critical: "bg-red-500/20 text-red-400 border-red-500/30",
  high: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  medium: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  low: "bg-zinc-500/20 text-zinc-400 border-zinc-500/30",
};

const verdictColors: Record<string, string> = {
  BUILD: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  SKIP: "bg-red-500/20 text-red-400 border-red-500/30",
  "RESEARCH MORE": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
};

const verdictIcons: Record<string, string> = {
  BUILD: "🔧",
  SKIP: "⛔",
  "RESEARCH MORE": "🔍",
};

const strengthColors: Record<string, string> = {
  strong: "text-emerald-400",
  moderate: "text-yellow-400",
  weak: "text-blue-400",
};

const strengthDots: Record<string, string> = {
  strong: "bg-emerald-400",
  moderate: "bg-yellow-400",
  weak: "bg-blue-400",
};

export function PainPointCard({ painPoint }: { painPoint: PainPoint }) {
  const [wtpExpanded, setWtpExpanded] = useState(false);

  return (
    <Card className="border-zinc-800 bg-zinc-900/70 hover:border-zinc-700 transition-all duration-200">
      <CardContent className="p-6 space-y-4">
        {/* Header: Rank + Title + Badges */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-start gap-2">
            {/* Rank */}
            <span className="text-2xl font-bold text-zinc-500 mr-1">
              #{painPoint.rank}
            </span>

            {/* Title */}
            <h3 className="text-lg font-semibold text-zinc-100 flex-1 min-w-0">
              {painPoint.title}
            </h3>
          </div>

          {/* Badges row */}
          <div className="flex flex-wrap gap-2">
            <Badge
              variant="outline"
              className={severityColors[painPoint.severity]}
            >
              {painPoint.severity}
            </Badge>
            <Badge
              variant="outline"
              className="bg-zinc-500/20 text-zinc-300 border-zinc-500/30"
            >
              {painPoint.score}/100
            </Badge>
            <Badge
              variant="outline"
              className={verdictColors[painPoint.verdict]}
            >
              {verdictIcons[painPoint.verdict]} {painPoint.verdict}
            </Badge>
            <Badge
              variant="outline"
              className="bg-amber-500/20 text-amber-400 border-amber-500/30"
            >
              💰 WTP {painPoint.wtpScore}
            </Badge>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-400 leading-relaxed">
          {painPoint.description}
        </p>

        {/* Mention count + Subreddits */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-zinc-500">
          <span>📊 Mentioned {painPoint.mentionCount}x</span>
          <span>📍 {painPoint.subreddits.join(", ")}</span>
        </div>

        {/* User Quotes */}
        <div className="space-y-2">
          {painPoint.userQuotes.map((quote, i) => (
            <blockquote
              key={i}
              className="border-l-2 border-zinc-700 pl-3 text-sm text-zinc-400 italic"
            >
              &ldquo;{quote}&rdquo;
            </blockquote>
          ))}
        </div>

        {/* Existing Solutions */}
        <div className="text-sm">
          <span className="text-zinc-500">Existing solutions: </span>
          <span className="text-zinc-400">{painPoint.existingSolutions}</span>
        </div>

        {/* WTP Signals (expandable) */}
        <div className="border border-emerald-500/20 rounded-lg overflow-hidden">
          <button
            onClick={() => setWtpExpanded(!wtpExpanded)}
            className="w-full flex items-center justify-between p-3 text-sm font-medium text-emerald-400 hover:bg-emerald-500/5 transition-colors cursor-pointer"
          >
            <span>💰 Willingness to Pay Signals</span>
            <span className="text-zinc-500">
              {wtpExpanded ? "▲" : "▼"}
            </span>
          </button>

          {wtpExpanded && (
            <div className="px-3 pb-3 space-y-2">
              {painPoint.wtpSignals.map((signal, i) => (
                <div key={i} className="flex gap-2 text-sm">
                  <span
                    className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${strengthDots[signal.strength]}`}
                  />
                  <span className="text-zinc-400">
                    &ldquo;{signal.quote}&rdquo;{" "}
                    <span className={`${strengthColors[signal.strength]}`}>
                      — {signal.source}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Solution Ideas */}
        {painPoint.solutionIdeas.length > 0 && (
          <div className="text-sm space-y-1">
            <span className="text-white font-medium">🚀 Possible Solutions ({painPoint.solutionIdeas.length}):</span>
            <ul className="list-disc list-inside text-zinc-100 space-y-0.5 ml-1">
              {painPoint.solutionIdeas.map((idea, i) => (
                <li key={i}>{idea}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
