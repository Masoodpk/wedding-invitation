import { notFound } from 'next/navigation'
import weddingsData from '@/data/weddings.json'
import { WeddingData } from '@/types/wedding'
import { ElegantForestTheme } from '@/components/Themes/ElegantForest'
import { SketchyModernTheme } from '@/components/Themes/SketchyModern'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return (weddingsData.weddings as WeddingData[]).map((wedding) => ({
    slug: wedding.slug,
  }))
}

export default async function WeddingPage({ params }: PageProps) {
  const { slug } = await params
  const wedding = (weddingsData.weddings as WeddingData[]).find(
    (w) => w.slug === slug
  )

  if (!wedding) {
    notFound()
  }

  // Theme Switcher Logic
  switch (wedding.theme) {
    case 'elegant-forest':
      return <ElegantForestTheme data={wedding} />
    case 'sketchy-modern':
      return <SketchyModernTheme data={wedding} />
    default:
      return <ElegantForestTheme data={wedding} />
  }
}
