<template>
  <section
    ref="sectionRef"
    class="reveal relative py-32 px-6 flex flex-col items-center justify-center min-h-[80vh] bg-[#F5F1E9] overflow-hidden"
  >
    <div class="absolute inset-x-0 top-0 h-px bg-gray-300 transform -skew-y-2 opacity-50" />
    <div class="absolute inset-x-0 bottom-0 h-px bg-gray-300 transform skew-y-2 opacity-50" />

    <div 
      :class="`text-center mb-24 relative z-10 transition-all duration-1000 ${isOpen ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`"
    >
      <h3 class="font-serif text-[clamp(2.5rem,6vw,4rem)] text-[#1A1A1A] uppercase tracking-widest mb-4">
        Invitation
      </h3>
      <p class="font-script text-[clamp(1.5rem,3vw,2.5rem)] text-[#1A1A1A] opacity-70">A Secret Inside</p>
    </div>

    <div class="relative w-full max-w-[500px] aspect-[4/3] perspective-[1000px] group">
      <div 
        :class="`relative w-full h-full transition-transform duration-1000 transform-style-3d ${isOpen ? 'translate-y-20' : ''}`"
      >
        <!-- Envelope Back -->
        <div class="absolute inset-0 bg-[#b71f1f] shadow-2xl skew-x-1 rounded-sm" />

        <!-- Invitation Card -->
        <div
          :class="`absolute left-4 right-4 bg-white shadow-lg border border-gray-100 transition-all duration-1000 ease-in-out flex flex-col items-center justify-center p-8 text-center ${
            isOpen ? '-translate-y-[60%] z-10 opacity-100 scale-105' : 'translate-y-4 z-0 opacity-0 scale-95'
          }`"
          :style="{ transitionDelay: isOpen ? '400ms' : '0ms' }"
        >
          <p class="font-serif text-[10px] tracking-[0.4em] uppercase mb-4 text-[#C62828] font-bold">You are Invited</p>
          <div class="w-10 h-px bg-gray-200 mb-8" />
          
          <h4 class="font-serif text-3xl md:text-4xl text-[#1A1A1A] uppercase leading-[0.9] tracking-tighter mb-4">
            {{ data.couple.groom.name }} 
            <br/>
            <span class="text-[#C62828] text-2xl font-script normal-case">&amp;</span>
            <br/>
            {{ data.couple.bride.name }}
          </h4>
          
          <p class="font-script text-xl text-gray-500 mb-8 italic mt-4">Together Forever</p>
          
          <div class="mt-4 pt-6 border-t border-gray-100 font-serif text-[9px] tracking-[0.4em] text-gray-400 uppercase w-full">
            Save the Date • 20.12.2026
          </div>
        </div>

        <!-- Front Flaps Layer -->
        <div class="absolute inset-0 z-20 pointer-events-none">
          <!-- Left Flap -->
          <div
            class="absolute left-0 top-0 bottom-0 w-1/2 bg-[#aa1919]"
            style="clip-path: polygon(0 0, 100% 50%, 0 100%)"
          />
          <!-- Right Flap -->
          <div
            class="absolute right-0 top-0 bottom-0 w-1/2 bg-[#aa1919]"
            style="clip-path: polygon(100% 0, 0 50%, 100% 100%)"
          />
          <!-- Bottom Flap -->
          <div
            class="absolute bottom-0 left-0 right-0 h-1/2 bg-[#991616]"
            style="clip-path: polygon(0 100%, 50% 0, 100% 100%)"
          />
          <!-- Top Flap -->
          <div
            :class="`absolute top-0 left-0 right-0 h-1/2 bg-[#C62828] shadow-[0_5px_15px_rgba(0,0,0,0.2)] transform origin-top transition-all duration-500 ease-in-out z-30 ${
              isOpen ? 'rotate-x-180' : 'rotate-x-0'
            }`"
            :style="{
              clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
              backfaceVisibility: 'hidden',
              zIndex: isOpen ? '0' : '30'
            }"
          />
        </div>
      </div>
    </div>

    <div class="h-20" />
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import type { WeddingData } from '~/lib/wedding'

defineProps<{
  data: WeddingData
}>()

const isOpen = ref(false)
const sectionRef = ref<HTMLElement | null>(null)

let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting) {
        isOpen.value = true
      }
    },
    { threshold: 0.5 }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}
.transform-style-3d {
  transform-style: preserve-3d;
}
.rotate-x-180 {
  transform: rotateX(180deg);
}
.rotate-x-0 {
  transform: rotateX(0deg);
}
</style>
