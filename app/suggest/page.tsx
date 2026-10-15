import type { Metadata } from 'next'

import { PageHeader } from '@/components/page-header'
import { SuggestionForm } from '@/components/suggestion-form'

export const metadata: Metadata = {
  title: 'Leave a suggestion',
  description:
    'Add your own tip, comment, or correction to the endometriosis support guide. Anonymous is fine.',
}

export default function SuggestPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10 md:px-10 md:py-14">
      <PageHeader
        eyebrow="Comments & suggestions"
        title="SUGGEST"
        intro="Drop anything you've found helpful, either as someone with endometriosis or someone who has helped others with it. The more community contributions we get, the better this resource becomes from the varied perspectives!"
      />

      <div className="mt-8">
        <SuggestionForm />
      </div>
    </div>
  )
}
