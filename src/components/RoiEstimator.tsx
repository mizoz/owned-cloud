"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const taskLoadOptions = [
  { label: "Low", value: 25 },
  { label: "Medium", value: 45 },
  { label: "High", value: 65 },
  { label: "Critical", value: 85 },
] as const;

export function RoiEstimator() {
  const [teamSize, setTeamSize] = useState(12);
  const [manualTaskLoad, setManualTaskLoad] = useState<(typeof taskLoadOptions)[number]["value"]>(65);
  const teamSizeInputId = "roi-team-size";

  const metrics = useMemo(() => {
    const hoursSaved = teamSize * (manualTaskLoad / 100) * 160 * 0.4;
    const leadVelocityPercent = Math.min(200, teamSize * 12);
    return {
      hoursSaved: hoursSaved.toFixed(1),
      leadVelocityPercent,
    };
  }, [manualTaskLoad, teamSize]);

  return (
    <div className="relative z-10 rounded-xl bg-[var(--surface-container-high)] p-1 shadow-[var(--shadow-soft)]">
      <div className="rounded-lg bg-[var(--surface-container-lowest)] p-8">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-[var(--primary)]">Live ROI Estimator</h3>
          <span className="rounded bg-[var(--secondary-soft)] px-2 py-1 text-[0.6rem] font-extrabold uppercase tracking-[0.14em] text-[var(--secondary)]">
            Functional
          </span>
        </div>

        <div className="mt-6 space-y-6">
          <div>
            <div className="mb-2 flex justify-between text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[var(--text-muted)]">
              <label htmlFor={teamSizeInputId}>Team Size</label>
              <span className="text-[var(--primary)]">{teamSize} Members</span>
            </div>
            <input
              id={teamSizeInputId}
              type="range"
              min="1"
              max="30"
              value={teamSize}
              onChange={(event) => setTeamSize(Number(event.target.value))}
              className="w-full accent-[var(--primary)]"
            />
          </div>

          <fieldset>
            <legend className="sr-only">Manual Task Load</legend>
            <div className="mb-2 flex justify-between text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[var(--text-muted)]">
              <span>Manual Task Load</span>
              <span className="text-[var(--primary)]">
                {taskLoadOptions.find((option) => option.value === manualTaskLoad)?.label} ({manualTaskLoad}%)
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2" role="radiogroup" aria-label="Manual task load">
              {taskLoadOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setManualTaskLoad(option.value)}
                  role="radio"
                  aria-checked={manualTaskLoad === option.value}
                  aria-pressed={manualTaskLoad === option.value}
                  className={`rounded-md border px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] ${
                    manualTaskLoad === option.value
                      ? "border-[var(--primary-strong)] bg-[var(--surface-container-high)] text-[var(--primary)]"
                      : "border-[var(--outline)] bg-white text-[var(--text-muted)]"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </fieldset>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="rounded-lg border-b-2 border-[var(--secondary-soft)] bg-[var(--surface-container-low)] p-4">
            <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.14em] text-[var(--text-muted)]">
              Hours Saved/Mo
            </p>
            <p className="mt-1 text-4xl font-extrabold tracking-tight text-[var(--secondary)]">
              {metrics.hoursSaved}
            </p>
          </div>

          <div className="rounded-lg border-b-2 border-[var(--primary-strong)] bg-[var(--surface-container-low)] p-4">
            <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.14em] text-[var(--text-muted)]">
              Lead Velocity
            </p>
            <p className="mt-1 text-4xl font-extrabold tracking-tight text-[var(--primary)]">
              +{metrics.leadVelocityPercent}%
            </p>
          </div>
        </div>

        <div className="mt-6 border-t border-[var(--outline)] pt-4">
          <Link href="/contact" className="text-sm font-semibold text-[var(--primary-strong)]">
            Want the real number? Book your free audit →
          </Link>
        </div>
      </div>
    </div>
  );
}
