import { redirect } from 'next/navigation'
import weddingsData from '@/data/weddings.json'

export default function Home() {
  const firstWedding = weddingsData.weddings[0]
  if (firstWedding) {
    redirect(`/${firstWedding.slug}`)
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#001f11] text-white">
      <p>No weddings found in data/weddings.json</p>
    </div>
  )
}
