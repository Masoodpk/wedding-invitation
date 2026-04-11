<template>
  <component :is="currentComponent" v-if="wedding" :data="wedding" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, createError } from '#app'
import weddingsData from '~/data/weddings.json'
import type { WeddingData } from '~/types/wedding'
import ElegantForestTheme from '~/components/Themes/ElegantForest.vue'
import SketchyModernTheme from '~/components/Themes/SketchyModern.vue'

const route = useRoute()
const slug = route.params.slug as string

const wedding = computed(() => {
  return (weddingsData.weddings as WeddingData[]).find((w) => w.slug === slug)
})

if (!wedding.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true })
}

const currentComponent = computed(() => {
  switch (wedding.value?.theme) {
    case 'elegant-forest':
      return ElegantForestTheme
    case 'sketchy-modern':
      return SketchyModernTheme
    default:
      return ElegantForestTheme
  }
})
</script>
