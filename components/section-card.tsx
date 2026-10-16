import Image from 'next/image'
import Link from 'next/link'

import type { SectionCardMeta } from '@/lib/content'

export function SectionCard({ card }: { card: SectionCardMeta }) {
  if (card.image) {
    return (
      <Link
        href={card.href}
        className="group relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-2xl border border-border p-6 transition-colors hover:border-[var(--endo-red)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--endo-red)]"
      >
        <Image
          src={card.image}
          alt={card.imageAlt ?? ''}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent"
        />

        <span
          aria-hidden="true"
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm"
        >
          <card.icon className="h-5 w-5 text-white" strokeWidth={1.75} />
        </span>

        <div className="relative z-10">
          <h2 className="font-display text-xl uppercase leading-none tracking-wide text-white">
            {card.title}
          </h2>
          <p className="mt-3 text-[13px] leading-relaxed text-white/80">{card.blurb}</p>

          <div className="mt-6 flex items-center justify-between border-t border-white/25 pt-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/75">
              {card.meta}
            </span>
            <span
              aria-hidden="true"
              className="font-mono text-sm text-white transition-transform duration-150 group-hover:translate-x-1"
            >
              →
            </span>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={card.href}
      className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-colors hover:border-[var(--endo-red)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--endo-red)]"
    >
      <div>
        <span
          aria-hidden="true"
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-background"
        >
          <card.icon className="h-5 w-5" strokeWidth={1.75} style={{ color: 'var(--endo-red)' }} />
        </span>
        <h2 className="mt-4 font-display text-xl uppercase leading-none tracking-wide text-foreground transition-colors group-hover:text-[var(--endo-red)]">
          {card.title}
        </h2>
        <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">{card.blurb}</p>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          {card.meta}
        </span>
        <span
          aria-hidden="true"
          className="font-mono text-sm text-[var(--endo-red)] transition-transform duration-150 group-hover:translate-x-1"
        >
          →
        </span>
      </div>
    </Link>
  )
}
