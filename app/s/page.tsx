'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import defaultWeddingData from '@/data/defaultWeddingData.json'
import type { WeddingData, WeddingTemplateId } from '@/lib/wedding'
import { loadPublishedSite, mergeDefaults } from '@/lib/wedding'
import { TemplateOne } from '@/components/templates/TemplateOne'
import { TemplateTwo } from '@/components/templates/TemplateTwo'
import { TemplateThree } from '@/components/templates/TemplateThree'
import { TemplateFour } from '@/components/templates/TemplateFour'

function isTemplateId(value: string): value is WeddingTemplateId {
  return value === 'template-1' || value === 'template-2' || value === 'template-3' || value === 'template-4'
}

export default function PublishedSitePage() {
  const [slug, setSlug] = useState('')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    setSlug(params.get('slug') ?? '')
  }, [])

  const site = useMemo(() => {
    if (!slug) return null
    const found = loadPublishedSite(slug)
    if (!found) return null
    return { ...found, data: mergeDefaults(defaultWeddingData as WeddingData, found.data) }
  }, [slug])

  if (!slug || !site || !isTemplateId(site.templateId)) {
    return (
      <main className="app-shell px-6 py-12">
        <div className="max-w-xl mx-auto app-card px-8 py-12 text-center">
          <div className="app-kicker text-[11px]">Published Link</div>
          <h1 className="mt-4 text-[clamp(28px,4vw,40px)] app-title m-0">Site not found</h1>
          <p className="mt-4 app-muted">Publish a site first to get a shareable link.</p>
          <div className="mt-8">
            <Link
              href="/"
              className="app-btn app-btn-primary px-7 py-3"
            >
              Go home
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return site.templateId === 'template-1' ? (
    <TemplateOne data={site.data} />
  ) : site.templateId === 'template-2' ? (
    <TemplateTwo data={site.data} />
  ) : site.templateId === 'template-3' ? (
    <TemplateThree data={site.data} />
  ) : (
    <TemplateFour data={site.data} />
  )
}
