import { WeddingData } from '@/types/wedding'

interface FooterProps {
  data: WeddingData
}

export function Footer({ data }: FooterProps) {
  return (
    <footer className="reveal text-center py-16 px-4 bg-bg border-t border-accent/10">
      <p className="font-arabic text-accent text-2xl mb-2">بَارَكَ اللَّهُ لَكُمَا</p>
      <p className="font-serif tracking-widest text-sm text-[#FAFAF2] opacity-80 mt-2">
        {data.details.groom.name} • {data.details.bride.name}
      </p>
    </footer>
  )
}
