'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import defaultWeddingData from '@/data/defaultWeddingData.json'
import type { WeddingData, WeddingDraft, WeddingTemplateId } from '@/lib/wedding'
import { loadDraft, mergeDefaults, saveDraft } from '@/lib/wedding'
import { TemplateOne } from '@/components/templates/TemplateOne'
import { TemplateTwo } from '@/components/templates/TemplateTwo'
import { TemplateThree } from '@/components/templates/TemplateThree'
import { TemplateFour } from '@/components/templates/TemplateFour'

function getDefaultDraft(): WeddingDraft {
  return {
    templateId: 'template-1',
    paid: false,
    data: defaultWeddingData as WeddingData,
  }
}

function isTemplateId(value: string | null): value is WeddingTemplateId {
  return value === 'template-1' || value === 'template-2' || value === 'template-3' || value === 'template-4'
}

export default function PreviewPage() {
  const [draft, setDraft] = useState<WeddingDraft>(() => getDefaultDraft())
  const [templateId, setTemplateId] = useState<WeddingTemplateId>('template-1')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const templateIdParam = params.get('templateId')
    const existing = loadDraft()
    const nextDraft = existing
      ? { ...existing, data: mergeDefaults(defaultWeddingData as WeddingData, existing.data) }
      : getDefaultDraft()
    setDraft(nextDraft)
    setTemplateId(isTemplateId(templateIdParam) ? templateIdParam : nextDraft.templateId)
  }, [])

  const applyTemplate = () => {
    saveDraft({ ...draft, templateId })
  }

  return (
    <div className="min-h-[100svh]">
      <div className="fixed top-0 left-0 right-0 z-[200] app-topbar">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
          <div className="app-kicker text-[11px]">Preview</div>
          <div className="flex items-center gap-3">
            <Link
              href="/templates"
              className="app-btn app-btn-secondary px-5 py-2 text-[11px]"
            >
              Back
            </Link>
            <Link
              href="/checkout"
              className="app-btn app-btn-primary px-5 py-2 text-[11px]"
              onClick={applyTemplate}
            >
              Use this
            </Link>
          </div>
        </div>
      </div>

      <div className="pt-[64px]">
        {templateId === 'template-1' ? (
          <TemplateOne data={draft.data} />
        ) : templateId === 'template-2' ? (
          <TemplateTwo data={draft.data} />
        ) : templateId === 'template-3' ? (
          <TemplateThree data={draft.data} />
        ) : (
          <TemplateFour data={draft.data} />
        )}
      </div>
    </div>
  )
}
