'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import defaultWeddingData from '@/data/defaultWeddingData.json'
import type { WeddingData, WeddingDraft, WeddingTemplateId } from '@/lib/wedding'
import { loadDraft, mergeDefaults, saveDraft } from '@/lib/wedding'

function getDefaultDraft(): WeddingDraft {
  return {
    templateId: 'template-1',
    paid: false,
    data: defaultWeddingData as WeddingData,
  }
}

function templateLabel(id: WeddingTemplateId) {
  if (id === 'template-1') return 'Template One (Sketchy Modern)'
  if (id === 'template-2') return 'Template Two (Minimal)'
  if (id === 'template-3') return 'Template Three (White Editorial)'
  return 'Template Four (Hero RSVP)'
}

export default function TemplatesPage() {
  const [draft, setDraft] = useState<WeddingDraft>(() => getDefaultDraft())

  useEffect(() => {
    const existing = loadDraft()
    if (existing) setDraft({ ...existing, data: mergeDefaults(defaultWeddingData as WeddingData, existing.data) })
  }, [])

  const choose = (templateId: WeddingTemplateId) => {
    const next = { ...draft, templateId }
    setDraft(next)
    saveDraft(next)
  }

  return (
    <main className="app-shell px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="app-kicker text-[11px]">Step 2</div>
            <h1 className="mt-2 text-[clamp(28px,4vw,40px)] app-title">Choose a template</h1>
          </div>
          <Link
            href="/start"
            className="app-btn app-btn-secondary px-5 py-2 text-[11px]"
          >
            Edit details
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {(['template-1', 'template-2', 'template-3', 'template-4'] as const).map((templateId) => {
            const selected = draft.templateId === templateId
            return (
              <div key={templateId} className="app-card overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-[14px] app-title">{templateLabel(templateId)}</div>
                      <div className="mt-2 text-[13px] app-muted">
                        {draft.data.couple.groom.name} &amp; {draft.data.couple.bride.name}
                      </div>
                    </div>
                    <div
                      className={`px-3 py-1 rounded-full text-[11px] tracking-[0.18em] uppercase font-serif ${
                        selected ? 'bg-[color:var(--app-accent)] text-[color:var(--app-paper)]' : 'border border-[color:var(--app-border)] text-[color:var(--app-accent)]'
                      }`}
                    >
                      {selected ? 'Selected' : ' '}
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link
                      href={`/preview?templateId=${templateId}`}
                      className="app-btn app-btn-secondary px-5 py-2 text-[11px]"
                    >
                      Preview
                    </Link>
                    <button
                      type="button"
                      className="app-btn app-btn-primary px-5 py-2 text-[11px]"
                      onClick={() => choose(templateId)}
                    >
                      Choose
                    </button>
                  </div>
                </div>

                <div className="h-[160px] flex items-center justify-center border-t border-[color:var(--app-border)] bg-[rgba(247,241,232,0.6)]">
                  <div className="text-center text-[11px] tracking-[0.22em] uppercase app-muted">Preview in new page</div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-10 flex items-center justify-end">
          <Link
            href="/checkout"
            className="app-btn app-btn-primary px-7 py-3"
            onClick={() => saveDraft(draft)}
          >
            Continue
          </Link>
        </div>
      </div>
    </main>
  )
}
