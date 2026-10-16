import type { LongBlock as LongBlockData } from '@/lib/content'

/** 0 at the top of a list, deepening toward the bottom. */
function ombreStyle(index?: number, total?: number) {
  if (typeof index !== 'number' || !total || total < 2) return undefined
  const pct = Math.round((index / (total - 1)) * 60)
  return { backgroundColor: `color-mix(in srgb, var(--endo-red) ${pct}%, var(--card))` }
}

/**
 * Long-form text, collapsed by default. Nobody has to read the legal detail
 * unless they choose to.
 */
export function LongBlock({
  block,
  index,
  total,
}: {
  block: LongBlockData
  index?: number
  total?: number
}) {
  return (
    <details
      className="group rounded-xl border border-border bg-card transition-colors open:border-[var(--endo-red)]"
      style={ombreStyle(index, total)}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 [&::-webkit-details-marker]:hidden">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground">
          {block.title}
        </span>
        <span
          aria-hidden="true"
          className="shrink-0 select-none font-mono text-sm leading-none text-[var(--endo-red)] transition-transform duration-150 group-open:rotate-45"
        >
          +
        </span>
      </summary>

      <div className="space-y-4 border-t border-border p-4">
        {block.body.map((paragraph, i) => (
          <p key={i} className="max-w-2xl text-[13px] leading-relaxed text-muted-foreground">
            {paragraph}
          </p>
        ))}
      </div>
    </details>
  )
}
