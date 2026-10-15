import type { Metadata } from 'next'

import { PageHeader } from '@/components/page-header'
import { PageNav } from '@/components/page-nav'
import { SuggestBanner } from '@/components/suggest-banner'
import { TipCard } from '@/components/tip-card'
import { ADVICE_TIPS } from '@/lib/content'

export const metadata: Metadata = {
  title: 'General advice',
  description:
    'The most important things you can do for someone with endometriosis, plus anything that fits nowhere else.',
}

export default function AdvicePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10 md:px-10 md:py-14">
      <PageHeader
        eyebrow="Misc / FAQs / general advice"
        title="ADVICE"
        intro="General advice for people supporting friends, family, or a partner with endometriosis."
      />

      <div className="mt-8 space-y-3">
        {ADVICE_TIPS.map((tip, i) => (
          <TipCard key={tip.title} tip={tip} index={i} />
        ))}
      </div>

      <div className="mt-12 space-y-12">
        <SuggestBanner heading="Anything missing?" />
        <PageNav current="/advice" />
      </div>
    </div>
  )
}
