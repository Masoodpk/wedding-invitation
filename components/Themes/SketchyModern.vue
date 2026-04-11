<template>
  <div class="bg-[#F5F1E9] text-[#1A1A1A] font-sans selection:bg-[#C62828]/20 selection:text-[#C62828]">
    <IntroSectionSketchy @open="handleOpen" :hidden="isOpen" :data="data" />

    <main
      :class="`relative w-full transition-opacity duration-1000 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`"
    >
      <HeroSectionSketchy :data="data" />
      <CoupleSectionSketchy :data="data" />
      <EnvelopeSection :data="data" />
      <CalendarSection :data="data" />
      <RulesSection :data="data" />
      <ContactSection :data="data" />
      <FooterSketchy :data="data" />
    </main>

    <MusicToggle
      :playing="musicPlaying"
      @toggle="handleMusicToggle"
      :hidden="!musicVisible"
    />

    <audio ref="audioRef" preload="metadata" loop>
      <source :src="data.details?.music || '/assets/wedding_music.mp3'" type="audio/mpeg" />
    </audio>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import { useReveal } from '~/composables/useReveal'
import type { WeddingData } from '~/lib/wedding'

import IntroSectionSketchy from '~/components/Sketchy/IntroSection.vue'
import HeroSectionSketchy from '~/components/Sketchy/HeroSection.vue'
import CoupleSectionSketchy from '~/components/Sketchy/CoupleSection.vue'
import EnvelopeSection from '~/components/Sketchy/EnvelopeSection.vue'
import CalendarSection from '~/components/Sketchy/CalendarSection.vue'
import RulesSection from '~/components/Sketchy/RulesSection.vue'
import ContactSection from '~/components/Sketchy/ContactSection.vue'
import FooterSketchy from '~/components/Sketchy/Footer.vue'
import MusicToggle from '~/components/MusicToggle.vue'

const props = defineProps<{
  data: WeddingData
}>()

const isOpen = ref(false)
const musicPlaying = ref(false)
const musicVisible = ref(false)
const audioRef = ref<HTMLAudioElement | null>(null)

useReveal()

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
  document.documentElement.classList.add('theme-sketchy', 'is-open')
  document.body.classList.add('theme-sketchy', 'is-open')
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
  document.documentElement.classList.remove('theme-sketchy', 'is-open')
  document.body.classList.remove('theme-sketchy', 'is-open')
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&family=Caveat:wght@400;700&display=swap');

.theme-sketchy {
  background-color: #F5F1E9;
}

@keyframes draw {
  from { stroke-dashoffset: 300; }
  to { stroke-dashoffset: 0; }
}
</style>
