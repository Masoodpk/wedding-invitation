<template>
  <section class="reveal py-24 px-6 flex flex-col items-center">
    <div class="relative w-full max-w-lg mx-auto">
      <h3 class="font-serif text-3xl md:text-5xl text-center mb-16 tracking-widest text-[#1A1A1A]">
        {{ displayInfo.displayMonth }} {{ displayInfo.year }}
      </h3>
      <div class="absolute top-10 left-1/2 -translate-x-1/2 w-32 h-6 text-[#C62828] opacity-60">
        <Elements type="line" className="w-full h-full" />
      </div>

      <div class="grid grid-cols-7 gap-y-6 gap-x-2 md:gap-x-4 text-center font-serif text-[#1A1A1A]">
        <div v-for="d in ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']" :key="d" class="text-xs md:text-sm tracking-widest font-bold opacity-50 mb-4">
          {{ d }}
        </div>

        <div v-for="i in displayInfo.blanks" :key="`blank-${i}`" class="p-2" />

        <div v-for="d in displayInfo.daysList" :key="d" class="relative p-2 md:p-4 text-lg md:text-2xl flex items-center justify-center">
          <span :class="`relative z-10 ${d === displayInfo.date ? 'font-bold' : ''}`">{{ d }}</span>
          <div v-if="d === displayInfo.date" class="absolute inset-0 text-[#C62828] z-0 -rotate-12 scale-150">
            <Elements type="circle" className="w-full h-full stroke-[3px]" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { WeddingData } from '~/lib/wedding'
import Elements from './Elements.vue'

const props = defineProps<{
  data: WeddingData
}>()

function parseYmd(dateTimeLocal: string) {
  const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(dateTimeLocal.trim())
  if (!match) return null
  const year = Number(match[1])
  const monthIndex = Number(match[2]) - 1
  const day = Number(match[3])
  if (!Number.isFinite(year) || !Number.isFinite(monthIndex) || !Number.isFinite(day)) return null
  return { year, monthIndex, day }
}

const displayInfo = computed(() => {
  const parsed = parseYmd(props.data.wedding.dateTimeLocal)
  const monthIndex = parsed?.monthIndex ?? 0
  const year = parsed?.year ?? 2026
  const date = parsed?.day ?? 1

  const daysInMonth = new Date(Date.UTC(year, monthIndex + 1, 0)).getUTCDate()
  const firstDay = new Date(Date.UTC(year, monthIndex, 1)).getUTCDay()

  const blanksCount = firstDay === 0 ? 6 : firstDay - 1
  const blanks = Array.from({ length: blanksCount }, (_, i) => i)
  const daysList = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  const monthNames = [
    'ЯНВАРЬ', 'ФЕВРАЛЬ', 'МАРТ', 'АПРЕЛЬ', 'МАЙ', 'ИЮНЬ',
    'ИЮЛЬ', 'АВГУСТ', 'СЕНТЯБРЬ', 'ОКТЯБРЬ', 'НОЯБРЬ', 'ДЕКАБРЬ',
  ]
  const displayMonth = monthNames[monthIndex] ?? 'MONTH'

  return { year, date, blanks, daysList, displayMonth }
})
</script>
