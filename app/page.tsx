import Image from 'next/image'
import Link from 'next/link'

import { SectionCard } from '@/components/section-card'
import { SuggestBanner } from '@/components/suggest-banner'
import { LAST_UPDATED, SECTION_CARDS } from '@/lib/content'

export default function Home() {
  return (
    <>
      <header className="relative overflow-hidden border-b border-border">
        {/* Grain texture overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px',
          }}
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-6 pb-12 pt-12 md:px-10 md:pb-16 md:pt-16">
          <div className="mb-6 flex justify-end">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Last updated: {LAST_UPDATED}
            </span>
          </div>

          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <span
                className="block font-display text-[clamp(2.2rem,7vw,5rem)] uppercase leading-none tracking-tight"
                style={{ color: 'var(--endo-red)' }}
                aria-hidden="true"
              >
                endometriosis
              </span>
              <span
                className="-mt-1 block font-script text-[clamp(2.5rem,8vw,6rem)] leading-none"
                style={{ color: 'var(--endo-red)' }}
                aria-hidden="true"
              >
                guide
              </span>

              <h1 className="mt-6 max-w-2xl text-pretty font-sans text-xl font-semibold leading-snug text-foreground md:text-2xl">
                How to ACTUALLY help people with endometriosis
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                This is a crowdsourced guide with advice from hundreds of people with
                endometriosis. Everything is sorted by cost and effort, so you can filter by what
                fits your circumstances best.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/start-here"
                  className="rounded-full bg-[var(--endo-red)] px-6 py-4 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--primary-foreground)] transition-opacity hover:opacity-85"
                >
                  Start here →
                </Link>
                <Link
                  href="/free-support"
                  className="rounded-full border border-border bg-card px-6 py-4 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-foreground transition-colors hover:border-[var(--endo-red)] hover:text-[var(--endo-red)]"
                >
                  Free ways to help
                </Link>
              </div>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-card">
              <Image
                src="/images/hero-sunburst.jpg"
                alt="Silhouette of a woman standing at the shoreline at sunset, arms raised"
                fill
                priority
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16">
        <div className="mb-8 flex items-baseline justify-between border-b border-border pb-4">
          <h2 className="font-display text-2xl uppercase leading-none tracking-wide text-foreground">
            Pick a section
          </h2>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {SECTION_CARDS.length} sections
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SECTION_CARDS.map((card) => (
            <SectionCard key={card.href} card={card} />
          ))}
        </div>

        <div className="mt-12 grid grid-cols-3 gap-4">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border bg-card">
            <Image
              src="/images/butterfly-pattern.jpg"
              alt="Close-up watercolor pattern of pink and burgundy butterfly wings"
              fill
              sizes="(min-width: 768px) 30vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border bg-card sm:mt-8">
            <Image
              src="/images/shell.jpg"
              alt="Macro photo of a spiral seashell"
              fill
              sizes="(min-width: 768px) 30vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border bg-card">
            <Image
              src="/images/lotus-leaves.jpg"
              alt="Translucent lotus leaves backlit against a pale sky"
              fill
              sizes="(min-width: 768px) 30vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-12">
          <SuggestBanner
            heading={
              <>
                This guide is <span className="font-script text-[1.3em] leading-none">crowdsourced</span>
              </>
            }
            body="It only exists because people shared what worked for them. Add yours — it takes about thirty seconds, and you don’t have to leave your name."
          />
        </div>
      </div>
    </>
  )
}
