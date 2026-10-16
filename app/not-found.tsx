import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 text-center md:px-10 md:py-32">
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">404</p>
      <h1
        className="mt-4 font-display text-[clamp(2.5rem,8vw,5rem)] uppercase leading-none tracking-tight"
        style={{ color: 'var(--endo-red)' }}
      >
        Page not found
      </h1>
      <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
        That page doesn’t exist, or it’s moved. Try one of the sections below.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-[var(--endo-red)] px-6 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--primary-foreground)] transition-opacity hover:opacity-85"
      >
        Back to the guide →
      </Link>
    </div>
  )
}
