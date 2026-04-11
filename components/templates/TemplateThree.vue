<template>
  <div class="min-h-[100svh] bg-[#f2efe9] text-[#161616]">
    <header class="max-w-[1040px] mx-auto px-6 pt-10">
      <div class="flex items-center justify-between gap-6">
        <div class="text-[12px] tracking-[0.22em] uppercase">{{ t3.headerText }}</div>
        <nav class="hidden md:flex items-center gap-6 text-[11px] tracking-[0.22em] uppercase opacity-70">
          <a v-for="label in t3.topLinks ?? []" :key="label" href="#" class="hover:opacity-100">
            {{ label }}
          </a>
        </nav>
        <button class="border border-[#161616]/70 px-4 py-2 text-[11px] tracking-[0.22em] uppercase">{{ t3.rsvpLabel }}</button>
      </div>
    </header>

    <section class="pt-12 text-center max-w-[1040px] mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-[220px_1fr_220px] items-center gap-8">
        <div class="mx-auto w-full max-w-[220px]">
          <img
            :src="(t3.galleryImages ?? [])[0] ?? data.wedding.heroImageUrl"
            alt=""
            class="w-full h-[160px] object-cover grayscale"
          />
        </div>

        <div>
          <div class="text-[clamp(34px,6vw,68px)] leading-[0.95] font-serif font-normal">{{ dateLine || ' ' }}</div>
          <div class="mt-5 text-[11px] tracking-[0.22em] uppercase opacity-70 max-w-[520px] mx-auto">
            {{ data.couple.groom.name }} &amp; {{ data.couple.bride.name }}
          </div>
          <div class="mt-3 text-[11px] tracking-[0.22em] uppercase opacity-60 max-w-[520px] mx-auto">{{ data.quote.source }}</div>
        </div>

        <div class="mx-auto w-full max-w-[220px]">
          <img
            :src="(t3.galleryImages ?? [])[2] ?? data.wedding.heroImageUrl"
            alt=""
            class="w-full h-[160px] object-cover grayscale"
          />
        </div>
      </div>

      <div class="mt-10 mx-auto w-full max-w-[420px]">
        <img
          :src="(t3.galleryImages ?? [])[1] ?? data.wedding.heroImageUrl"
          alt=""
          class="w-full h-[220px] object-cover grayscale"
        />
      </div>
    </section>

    <section class="mt-14 bg-[#1b1b1b] text-[#f2efe9] rounded-[2px] overflow-hidden max-w-[1040px] mx-auto px-0">
      <div class="px-6 md:px-12 py-14 text-center">
        <div class="text-[12px] tracking-[0.22em] uppercase opacity-80">{{ t3.scheduleHeading }}</div>
        <div class="mt-2 text-[14px] tracking-[0.22em] uppercase font-serif opacity-90">{{ t3.scheduleSubheading }}</div>

        <div class="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-[900px] mx-auto">
          <div v-for="item in t3.scheduleItems ?? []" :key="`${item.time}-${item.label}`" class="text-center">
            <div class="text-[14px] tracking-[0.18em] uppercase">{{ item.time }}</div>
            <div class="mt-2 text-[10px] tracking-[0.22em] uppercase opacity-70">{{ item.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-14 rounded-[2px] overflow-hidden max-w-[1040px] mx-auto" :style="countdownStyle">
      <div class="px-6 md:px-12 py-20 text-center text-[#f2efe9]">
        <div class="text-[12px] tracking-[0.22em] uppercase opacity-80">Countdown</div>
        <div class="mt-10 flex items-center justify-center gap-8">
          <div v-for="part in countdownParts" :key="part.label" class="text-center min-w-[60px]">
            <div class="text-[22px] md:text-[26px] tracking-[0.1em] font-serif">{{ part.value }}</div>
            <div class="mt-2 text-[10px] tracking-[0.22em] uppercase opacity-70">{{ part.label }}</div>
          </div>
        </div>
        <div class="mt-10 text-[11px] tracking-[0.22em] uppercase opacity-75">
          {{ data.couple.groom.name }} <span class="mx-2 opacity-60">•</span> {{ data.couple.bride.name }}
        </div>
      </div>
    </section>

    <section class="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1040px] mx-auto px-6">
      <div class="bg-[#f7f4ee] border border-[#161616]/15 rounded-[2px] px-8 py-12 text-center">
        <div class="text-[14px] tracking-[0.22em] uppercase font-serif">{{ t3.registryHeading }}</div>
        <p class="mt-6 text-[13px] leading-[1.8] opacity-80">{{ t3.registryText }}</p>
      </div>
      <div class="bg-[#f7f4ee] border border-[#161616]/15 rounded-[2px] px-8 py-12 text-center">
        <div class="text-[14px] tracking-[0.22em] uppercase font-serif">{{ t3.dressCodeHeading }}</div>
        <p class="mt-6 text-[13px] leading-[1.8] opacity-80">{{ t3.dressCodeText }}</p>
      </div>
    </section>

    <section class="mt-14 bg-[#f7f4ee] border border-[#161616]/15 rounded-[2px] overflow-hidden max-w-[1040px] mx-auto">
      <div class="px-6 md:px-12 py-14 text-center">
        <div class="text-[14px] tracking-[0.22em] uppercase font-serif">{{ t3.locationHeading }}</div>
        <div class="mt-10 grid grid-cols-1 md:grid-cols-[1fr_300px_1fr] gap-10 items-center">
          <div class="text-[10px] tracking-[0.22em] uppercase opacity-70 whitespace-pre-line">{{ t3.locationLeftText }}</div>

          <div class="mx-auto w-full">
            <img :src="t3.locationImageUrl" alt="" class="w-full h-[200px] object-cover grayscale" />
            <a
              :href="data.events.venue.mapUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-5 flex items-center justify-center border border-[#161616]/70 px-5 py-2 text-[10px] tracking-[0.22em] uppercase"
            >
              {{ t3.locationCtaLabel }}
            </a>
          </div>

          <div class="text-[10px] tracking-[0.22em] uppercase opacity-70 whitespace-pre-line">{{ t3.locationRightText }}</div>
        </div>
      </div>
    </section>
    
    <div class="pb-24" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { WeddingData } from '~/lib/wedding'
import { formatDateParts } from '~/lib/wedding'
import { useCountdown } from '~/composables/useCountdown'

const props = defineProps<{ data: WeddingData }>()

const t3 = computed(() => props.data.templateThree ?? ({} as WeddingData['templateThree']))
const formattedDate = computed(() => formatDateParts(props.data.wedding.dateTimeLocal))

const dateLine = computed(() => {
  const { day, year } = formattedDate.value
  const numericMonth = /^(\d{4})-(\d{2})-(\d{2})/.exec(props.data.wedding.dateTimeLocal.trim())?.[2] ?? ''
  return day && numericMonth && year ? `${day} . ${numericMonth} . ${year}` : ''
})

const time = useCountdown(props.data.wedding.dateTimeLocal)

const countdownStyle = computed(() => ({
  backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${t3.value.countdownBackgroundUrl})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}))

const countdownParts = computed(() => [
  { value: time.value.days, label: 'DAYS' },
  { value: time.value.hours, label: 'HOURS' },
  { value: time.value.minutes, label: 'MINS' },
  { value: time.value.seconds, label: 'SECS' },
])
</script>
