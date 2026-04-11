
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T


export const CountdownSection: typeof import("../components/CountdownSection.vue")['default']
export const CoupleSection: typeof import("../components/CoupleSection.vue")['default']
export const DetailsSection: typeof import("../components/DetailsSection.vue")['default']
export const Footer: typeof import("../components/Footer.vue")['default']
export const HeroSection: typeof import("../components/HeroSection.vue")['default']
export const IntroScreen: typeof import("../components/IntroScreen.vue")['default']
export const MandalaDecoration: typeof import("../components/MandalaDecoration.vue")['default']
export const MusicToggle: typeof import("../components/MusicToggle.vue")['default']
export const QuoteSection: typeof import("../components/QuoteSection.vue")['default']
export const SketchyCalendarSection: typeof import("../components/Sketchy/CalendarSection.vue")['default']
export const SketchyContactSection: typeof import("../components/Sketchy/ContactSection.vue")['default']
export const SketchyCoupleSection: typeof import("../components/Sketchy/CoupleSection.vue")['default']
export const SketchyElements: typeof import("../components/Sketchy/Elements.vue")['default']
export const SketchyEnvelopeSection: typeof import("../components/Sketchy/EnvelopeSection.vue")['default']
export const SketchyFooter: typeof import("../components/Sketchy/Footer.vue")['default']
export const SketchyHeroSection: typeof import("../components/Sketchy/HeroSection.vue")['default']
export const SketchyIntroSection: typeof import("../components/Sketchy/IntroSection.vue")['default']
export const SketchyRulesSection: typeof import("../components/Sketchy/RulesSection.vue")['default']
export const ThemesElegantForest: typeof import("../components/Themes/ElegantForest.vue")['default']
export const ThemesSketchyModern: typeof import("../components/Themes/SketchyModern.vue")['default']
export const TemplatesTemplateFour: typeof import("../components/templates/TemplateFour.vue")['default']
export const TemplatesTemplateOne: typeof import("../components/templates/TemplateOne.vue")['default']
export const TemplatesTemplateThree: typeof import("../components/templates/TemplateThree.vue")['default']
export const TemplatesTemplateTwo: typeof import("../components/templates/TemplateTwo.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyCountdownSection: LazyComponent<typeof import("../components/CountdownSection.vue")['default']>
export const LazyCoupleSection: LazyComponent<typeof import("../components/CoupleSection.vue")['default']>
export const LazyDetailsSection: LazyComponent<typeof import("../components/DetailsSection.vue")['default']>
export const LazyFooter: LazyComponent<typeof import("../components/Footer.vue")['default']>
export const LazyHeroSection: LazyComponent<typeof import("../components/HeroSection.vue")['default']>
export const LazyIntroScreen: LazyComponent<typeof import("../components/IntroScreen.vue")['default']>
export const LazyMandalaDecoration: LazyComponent<typeof import("../components/MandalaDecoration.vue")['default']>
export const LazyMusicToggle: LazyComponent<typeof import("../components/MusicToggle.vue")['default']>
export const LazyQuoteSection: LazyComponent<typeof import("../components/QuoteSection.vue")['default']>
export const LazySketchyCalendarSection: LazyComponent<typeof import("../components/Sketchy/CalendarSection.vue")['default']>
export const LazySketchyContactSection: LazyComponent<typeof import("../components/Sketchy/ContactSection.vue")['default']>
export const LazySketchyCoupleSection: LazyComponent<typeof import("../components/Sketchy/CoupleSection.vue")['default']>
export const LazySketchyElements: LazyComponent<typeof import("../components/Sketchy/Elements.vue")['default']>
export const LazySketchyEnvelopeSection: LazyComponent<typeof import("../components/Sketchy/EnvelopeSection.vue")['default']>
export const LazySketchyFooter: LazyComponent<typeof import("../components/Sketchy/Footer.vue")['default']>
export const LazySketchyHeroSection: LazyComponent<typeof import("../components/Sketchy/HeroSection.vue")['default']>
export const LazySketchyIntroSection: LazyComponent<typeof import("../components/Sketchy/IntroSection.vue")['default']>
export const LazySketchyRulesSection: LazyComponent<typeof import("../components/Sketchy/RulesSection.vue")['default']>
export const LazyThemesElegantForest: LazyComponent<typeof import("../components/Themes/ElegantForest.vue")['default']>
export const LazyThemesSketchyModern: LazyComponent<typeof import("../components/Themes/SketchyModern.vue")['default']>
export const LazyTemplatesTemplateFour: LazyComponent<typeof import("../components/templates/TemplateFour.vue")['default']>
export const LazyTemplatesTemplateOne: LazyComponent<typeof import("../components/templates/TemplateOne.vue")['default']>
export const LazyTemplatesTemplateThree: LazyComponent<typeof import("../components/templates/TemplateThree.vue")['default']>
export const LazyTemplatesTemplateTwo: LazyComponent<typeof import("../components/templates/TemplateTwo.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]
