<template>
  <main v-if="!isValidSite" class="app-shell px-6 py-12">
    <div class="max-w-xl mx-auto app-card px-8 py-12 text-center">
      <div class="app-kicker text-[11px]">Published Link</div>
      <h1 class="mt-4 text-[clamp(28px,4vw,40px)] app-title m-0">Site not found</h1>
      <p class="mt-4 app-muted">Publish a site first to get a shareable link.</p>
      <div class="mt-8">
        <NuxtLink
          to="/"
          class="app-btn app-btn-primary px-7 py-3"
        >
          Go home
        </NuxtLink>
      </div>
    </div>
  </main>

  <template v-else>
    <TemplateOne v-if="site.templateId === 'template-1'" :data="site.data" />
    <TemplateTwo v-else-if="site.templateId === 'template-2'" :data="site.data" />
    <TemplateThree v-else-if="site.templateId === 'template-3'" :data="site.data" />
    <TemplateFour v-else :data="site.data" />
  </template>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import defaultWeddingData from '~/data/defaultWeddingData.json'
import type { WeddingData, WeddingTemplateId } from '~/lib/wedding'
import { loadPublishedSite, mergeDefaults } from '~/lib/wedding'
import TemplateOne from '~/components/templates/TemplateOne.vue'
import TemplateTwo from '~/components/templates/TemplateTwo.vue'
import TemplateThree from '~/components/templates/TemplateThree.vue'
import TemplateFour from '~/components/templates/TemplateFour.vue'

function isTemplateId(value: string): value is WeddingTemplateId {
  return value === 'template-1' || value === 'template-2' || value === 'template-3' || value === 'template-4'
}

const slug = ref('')

onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  slug.value = params.get('slug') ?? ''
})

const site = computed(() => {
  if (!slug.value) return null
  const found = loadPublishedSite(slug.value)
  if (!found) return null
  return { ...found, data: mergeDefaults(defaultWeddingData as WeddingData, found.data) }
})

const isValidSite = computed(() => site.value && isTemplateId(site.value.templateId))
</script>
