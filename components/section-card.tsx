import Link from 'next/link'

import type { SectionCardMeta } from '@/lib/content'

export function SectionCard({ card }: { card: SectionCardMeta }) {
  return (
    <Link
      href={card.href}
      className="group flex flex-col items-center justify-between rounded-2xl border border-transparent bg-foreground p-6 text-center transition-colors hover:border-background/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background sm:items-start sm:text-left"
    >
      <div className="w-full">
        <span
          aria-hidden="true"
          className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 sm:mx-0"
        >
          <card.icon className="h-5 w-5 text-background" strokeWidth={1.75} />
        </span>
        <h2 className="mt-4 font-display text-xl uppercase leading-none tracking-wide text-background">
          {card.title}
        </h2>
        <p className="mt-3 text-[13px] leading-relaxed text-background/70">{card.blurb}</p>
      </div>

      <div className="mt-6 flex w-full items-center justify-between border-t border-background/20 pt-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-background/60">
          {card.meta}
        </span>
        <span
          aria-hidden="true"
          className="font-mono text-sm text-background transition-transform duration-150 group-hover:translate-x-1"
        >
          →
        </span>
      </div>
    </Link>
  )
}
