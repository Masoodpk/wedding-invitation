'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import defaultWeddingData from '@/data/defaultWeddingData.json'
import type { WeddingData, WeddingDraft } from '@/lib/wedding'
import { loadDraft, mergeDefaults, saveDraft } from '@/lib/wedding'

function getDefaultDraft(): WeddingDraft {
  return {
    templateId: 'template-1',
    paid: false,
    data: defaultWeddingData as WeddingData,
  }
}

export default function CheckoutPage() {
  const router = useRouter()
  const [draft, setDraft] = useState<WeddingDraft>(() => getDefaultDraft())

  useEffect(() => {
    const existing = loadDraft()
    if (existing) setDraft({ ...existing, data: mergeDefaults(defaultWeddingData as WeddingData, existing.data) })
  }, [])

  const pay = () => {
    saveDraft({ ...draft, paid: true })
    router.push('/publish')
  }

  return (
    <main className="app-shell px-6 py-12">
      <div className="max-w-xl mx-auto">
        <div className="app-kicker text-[11px]">Step 3</div>
        <h1 className="mt-2 text-[clamp(28px,4vw,40px)] app-title">Checkout (dummy)</h1>

        <div className="mt-8 app-card p-6">
          <div className="text-[14px] app-title">Order summary</div>
          <div className="mt-4 text-[13px] app-muted">
            Template: <span className="text-[color:var(--app-ink)]">{draft.templateId}</span>
          </div>
          <div className="mt-2 text-[13px] app-muted">
            Couple:{' '}
            <span className="text-[color:var(--app-ink)]">
              {draft.data.couple.groom.name} &amp; {draft.data.couple.bride.name}
            </span>
          </div>
          <div className="mt-2 text-[13px] app-muted">
            Price: <span className="text-[color:var(--app-ink)]">$0.00</span>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between gap-4">
          <Link
            href="/templates"
            className="app-btn app-btn-secondary px-5 py-2 text-[11px]"
          >
            Back
          </Link>
          <button
            type="button"
            className="app-btn app-btn-primary px-7 py-3"
            onClick={pay}
          >
            Pay & Continue
          </button>
        </div>

        {draft.paid ? (
          <div className="mt-6 text-[13px] app-muted">Already paid. Continue to publish.</div>
        ) : null}
      </div>
    </main>
  )
}
