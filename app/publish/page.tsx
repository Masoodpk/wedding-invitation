'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import defaultWeddingData from '@/data/defaultWeddingData.json'
import type { PublishedSite, WeddingData, WeddingDraft } from '@/lib/wedding'
import { isValidSlug, loadDraft, mergeDefaults, normalizeSlug, savePublishedSite } from '@/lib/wedding'

function getDefaultDraft(): WeddingDraft {
  return {
    templateId: 'template-1',
    paid: false,
    data: defaultWeddingData as WeddingData,
  }
}

export default function PublishPage() {
  const router = useRouter()
  const [draft, setDraft] = useState<WeddingDraft>(() => getDefaultDraft())
  const [slugInput, setSlugInput] = useState('')

  useEffect(() => {
    const existing = loadDraft()
    if (existing) setDraft({ ...existing, data: mergeDefaults(defaultWeddingData as WeddingData, existing.data) })
  }, [])

  const slug = normalizeSlug(slugInput)
  const canPublish = draft.paid && isValidSlug(slug)

  const publish = () => {
    if (!canPublish) return
    const site: PublishedSite = {
      slug,
      templateId: draft.templateId,
      publishedAtIso: new Date().toISOString(),
      data: draft.data,
    }
    savePublishedSite(site)
    router.push(`/s?slug=${encodeURIComponent(slug)}`)
  }

  return (
    <main className="app-shell px-6 py-12">
      <div className="max-w-xl mx-auto">
        <div className="app-kicker text-[11px]">Step 4</div>
        <h1 className="mt-2 text-[clamp(28px,4vw,40px)] app-title">Publish</h1>

        {!draft.paid ? (
          <div className="mt-6 app-card p-5 text-[13px] app-muted">
            Payment is required before publishing.
          </div>
        ) : null}

        <div className="mt-8 app-card p-6">
          <div className="text-[14px] app-title">Choose a subdomain (slug)</div>
          <label className="block mt-4 text-sm app-muted">
            Slug
            <input
              className="mt-2 app-input px-3 py-2"
              placeholder="e.g. ayisha-naji"
              value={slugInput}
              onChange={(e) => setSlugInput(e.target.value)}
            />
          </label>
          <div className="mt-3 text-[12px] app-muted">
            Preview link: <span className="text-[color:var(--app-ink)]">/s?slug={slug || 'your-slug'}</span>
          </div>
          {!slugInput ? null : !isValidSlug(slug) ? (
            <div className="mt-3 text-[12px] text-[color:var(--app-accent)]">Use letters, numbers, and hyphens only.</div>
          ) : null}
        </div>

        <div className="mt-8 flex items-center justify-between gap-4">
          <Link
            href="/checkout"
            className="app-btn app-btn-secondary px-5 py-2 text-[11px]"
          >
            Back
          </Link>
          <button
            type="button"
            className={`app-btn px-7 py-3 ${
              canPublish ? 'app-btn-primary' : 'border border-[color:var(--app-border)] text-[color:rgba(36,28,26,0.35)] cursor-not-allowed'
            }`}
            onClick={publish}
            disabled={!canPublish}
          >
            Publish
          </button>
        </div>
      </div>
    </main>
  )
}
