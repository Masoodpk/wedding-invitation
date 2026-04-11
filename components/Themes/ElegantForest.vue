<template>
  <div>
    <canvas 
      id="sparkleCanvas" 
      class="fixed inset-0 w-full h-full pointer-events-none z-0" 
      aria-hidden="true" 
    />

    <IntroScreen @open="handleOpen" :hidden="isOpen" :data="data" :brideName="data.couple.bride.name" :groomName="data.couple.groom.name" :basmala="data.wedding.basmala || ''" :subtitle="data.wedding.tagline" />

    <main
      id="invitation"
      :class="`relative z-[1] w-full transition-opacity duration-[1500ms] ease-in-out ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`"
      :aria-hidden="!isOpen"
    >
      <HeroSection 
        :data="data" 
        :brideName="data.couple.bride.name" 
        :groomName="data.couple.groom.name" 
        :dateTimeLocal="data.wedding.dateTimeLocal" 
        :heroImageUrl="data.wedding.heroImageUrl" 
        :basmala="data.wedding.basmala || ''" 
        :tagline="data.wedding.tagline" 
      />
      <QuoteSection :text="data.quote.text" :source="data.quote.source" />
      <CoupleSection 
        :groomName="data.couple.groom.name" 
        :groomDetailsLine="data.couple.groom.detailsLine" 
        :brideName="data.couple.bride.name" 
        :brideDetailsLine="data.couple.bride.detailsLine" 
        :heading="data.wedding.tagline" 
        :subheading="data.wedding.tagline" 
      />
      <CountdownSection 
        :dateTimeLocal="data.wedding.dateTimeLocal" 
        heading="Save The Date" 
        subheading="Join Us" 
      />
      <DetailsSection 
        ceremonyTitle="Nikah" 
        :ceremonyTime="data.events.ceremony.time" 
        ceremonyDateText="Wedding Day" 
        :ceremonyLocationName="data.events.ceremony.locationName" 
        receptionTitle="Reception" 
        :receptionTime="data.events.reception.time" 
        receptionDateText="Wedding Day" 
        :receptionLocationName="data.events.reception.locationName" 
        venueTitle="Venue" 
        :venueName="data.events.venue.name" 
        :venueAddress="data.events.venue.address" 
        :venueMapUrl="data.events.venue.mapUrl" 
        venueCtaLabel="View Map" 
      />
      <Footer blessingArabic="Barakallahu lakuma" :namesLine="`${data.couple.groom.name} & ${data.couple.bride.name}`" />
    </main>

    <MusicToggle
      :playing="musicPlaying"
      @toggle="handleMusicToggle"
      :hidden="!musicVisible"
    />

    <audio ref="audioRef" id="bgMusic" preload="metadata" loop>
      <source :src="data.details?.music || '/assets/wedding_music.mp3'" type="audio/mpeg" />
    </audio>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import { useReveal } from '~/composables/useReveal'
import { useParallax } from '~/composables/useParallax'
import { useSparkles } from '~/composables/useSparkles'
import type { WeddingData } from '~/lib/wedding'

import IntroScreen from '~/components/IntroScreen.vue'
import HeroSection from '~/components/HeroSection.vue'
import QuoteSection from '~/components/QuoteSection.vue'
import CoupleSection from '~/components/CoupleSection.vue'
import CountdownSection from '~/components/CountdownSection.vue'
import DetailsSection from '~/components/DetailsSection.vue'
import Footer from '~/components/Footer.vue'
import MusicToggle from '~/components/MusicToggle.vue'

const props = defineProps<{
  data: WeddingData
}>()

const isOpen = ref(false)
const musicPlaying = ref(false)
const musicVisible = ref(false)
const audioRef = ref<HTMLAudioElement | null>(null)

useReveal()
useParallax()
useSparkles()

const playMusic = async () => {
  if (!audioRef.value) return
  try {
    audioRef.value.volume = 0.35
    await audioRef.value.play()
    musicPlaying.value = true
  } catch {
    musicPlaying.value = false
  }
}

const handleOpen = async () => {
  document.documentElement.classList.add('is-open')
  document.body.classList.add('is-open')
  isOpen.value = true
  musicVisible.value = true
  await playMusic()
}

const handleMusicToggle = async () => {
  if (!audioRef.value) return
  if (audioRef.value.paused) {
    await playMusic()
  } else {
    audioRef.value.pause()
    musicPlaying.value = false
  }
}

onUnmounted(() => {
  document.documentElement.classList.remove('is-open')
  document.body.classList.remove('is-open')
})
</script>
