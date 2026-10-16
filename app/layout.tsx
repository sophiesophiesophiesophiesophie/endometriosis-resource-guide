import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Caveat, IM_Fell_DW_Pica, Inter, IBM_Plex_Mono } from 'next/font/google'

import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import './globals.css'

const _imFellDwPica = IM_Fell_DW_Pica({
  subsets: ['latin'],
  weight: '400',
})

const _caveat = Caveat({
  subsets: ['latin'],
  weight: ['500', '600'],
})

const _inter = Inter({
  subsets: ['latin'],
})

const _ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
})

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://endometriosis-resource-guide.vercel.app'
const TITLE = 'How to ACTUALLY help people with endometriosis'
const DESCRIPTION =
  'A crowdsourced guide to supporting someone with endometriosis, with advice from hundreds of people with endo — sorted by cost and effort.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s — endometriosis guide',
  },
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: 'endometriosis guide',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: TITLE,
    description: DESCRIPTION,
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#F7E1DE',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="overflow-x-hidden antialiased font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-[var(--endo-red)] focus:px-4 focus:py-2 focus:font-mono focus:text-[11px] focus:uppercase focus:tracking-[0.15em] focus:text-[var(--primary-foreground)]"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
