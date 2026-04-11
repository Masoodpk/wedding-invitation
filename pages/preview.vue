<template>
  <div class="min-h-[100svh]">
    <div class="fixed top-0 left-0 right-0 z-[200] app-topbar">
      <div class="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        <div class="app-kicker text-[11px]">Preview</div>
        <div class="flex items-center gap-3">
          <NuxtLink
            to="/templates"
            class="app-btn app-btn-secondary px-5 py-2 text-[11px]"
          >
            Back
          </NuxtLink>
          <NuxtLink
            to="/checkout"
            class="app-btn app-btn-primary px-5 py-2 text-[11px]"
            @click="applyTemplate"
          >
            Use this
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="pt-[64px]">
      <TemplateOne v-if="templateId === 'template-1'" :data="draft.data" />
      <TemplateTwo v-else-if="templateId === 'template-2'" :data="draft.data" />
      <TemplateThree v-else-if="templateId === 'template-3'" :data="draft.data" />
      <TemplateFour v-else :data="draft.data" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import defaultWeddingData from '~/data/defaultWeddingData.json'
import type { WeddingData, WeddingDraft, WeddingTemplateId } from '~/lib/wedding'
import { loadDraft, mergeDefaults, saveDraft } from '~/lib/wedding'
import TemplateOne from '~/components/templates/TemplateOne.vue'
import TemplateTwo from '~/components/templates/TemplateTwo.vue'
import TemplateThree from '~/components/templates/TemplateThree.vue'
import TemplateFour from '~/components/templates/TemplateFour.vue'

function getDefaultDraft(): WeddingDraft {
  return {
    templateId: 'template-1',
    paid: false,
    data: defaultWeddingData as WeddingData,
  }
}

function isTemplateId(value: string | null): value is WeddingTemplateId {
  return value === 'template-1' || value === 'template-2' || value === 'template-3' || value === 'template-4'
}

const draft = ref<WeddingDraft>(getDefaultDraft())
const templateId = ref<WeddingTemplateId>('template-1')

onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  const templateIdParam = params.get('templateId')
  const existing = loadDraft()
  const nextDraft = existing
    ? { ...existing, data: mergeDefaults(defaultWeddingData as WeddingData, existing.data) }
    : getDefaultDraft()
  draft.value = nextDraft
  templateId.value = isTemplateId(templateIdParam) ? templateIdParam : nextDraft.templateId
})

const applyTemplate = () => {
  saveDraft({ ...draft.value, templateId: templateId.value })
}
</script>
