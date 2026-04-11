import { defineComponent, ref, mergeProps, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { I as IntroSectionSketchy, H as HeroSectionSketchy, C as CoupleSectionSketchy, E as EnvelopeSection, a as CalendarSection, R as RulesSection, b as ContactSection, F as FooterSketchy, M as MusicToggle, u as useCountdown } from './useCountdown-KSLBk3ZA.mjs';
import { f as formatDateLong, a as formatDateParts } from './wedding-DB1Sg7gL.mjs';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TemplateOne",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const isOpen = ref(false);
    const musicPlaying = ref(false);
    const musicVisible = ref(false);
    const audioRef = ref(null);
    const playMusic = async () => {
      if (!audioRef.value) return;
      try {
        audioRef.value.volume = 0.35;
        await audioRef.value.play();
        musicPlaying.value = true;
      } catch {
        musicPlaying.value = false;
      }
    };
    const handleOpen = async () => {
      (void 0).documentElement.classList.add("theme-sketchy");
      (void 0).body.classList.add("theme-sketchy");
      isOpen.value = true;
      musicVisible.value = true;
      await playMusic();
    };
    const handleMusicToggle = async () => {
      if (!audioRef.value) return;
      if (audioRef.value.paused) {
        await playMusic();
      } else {
        audioRef.value.pause();
        musicPlaying.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#F5F1E9] text-[#1A1A1A] font-sans selection:bg-[#C62828]/20 selection:text-[#C62828]" }, _attrs))}>`);
      _push(ssrRenderComponent(IntroSectionSketchy, {
        onOpen: handleOpen,
        hidden: isOpen.value,
        data: __props.data
      }, null, _parent));
      _push(`<main class="${ssrRenderClass(`relative w-full transition-opacity duration-1000 ${isOpen.value ? "opacity-100" : "opacity-0 pointer-events-none"}`)}">`);
      _push(ssrRenderComponent(HeroSectionSketchy, { data: __props.data }, null, _parent));
      _push(ssrRenderComponent(CoupleSectionSketchy, { data: __props.data }, null, _parent));
      _push(ssrRenderComponent(EnvelopeSection, { data: __props.data }, null, _parent));
      _push(ssrRenderComponent(CalendarSection, { data: __props.data }, null, _parent));
      _push(ssrRenderComponent(RulesSection, { data: __props.data }, null, _parent));
      _push(ssrRenderComponent(ContactSection, { data: __props.data }, null, _parent));
      _push(ssrRenderComponent(FooterSketchy, { data: __props.data }, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(MusicToggle, {
        playing: musicPlaying.value,
        onToggle: handleMusicToggle,
        hidden: !musicVisible.value
      }, null, _parent));
      _push(`<audio preload="metadata" loop><source${ssrRenderAttr("src", __props.data.wedding.musicUrl)} type="audio/mpeg"></audio></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/templates/TemplateOne.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const TemplateOne = Object.assign(_sfc_main$3, { __name: "TemplatesTemplateOne" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TemplateTwo",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const props = __props;
    const dateLong = computed(() => formatDateLong(props.data.wedding.dateTimeLocal));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-[100svh] bg-[#f3efe6] text-[#161616]" }, _attrs))}><header class="max-w-[980px] mx-auto px-6 pt-10"><div class="flex items-center justify-between text-[12px] tracking-[0.2em] uppercase"><div>${ssrInterpolate(__props.data.templateTwo.topLeftText)}</div><button class="border border-[#161616] px-4 py-2 text-[12px] tracking-[0.2em] uppercase">${ssrInterpolate(__props.data.templateTwo.topRightCtaLabel)}</button></div></header><main class="max-w-[980px] mx-auto px-6 pb-20"><section class="text-center pt-14"><div class="text-[11px] tracking-[0.25em] uppercase opacity-70">Save the Date</div><h1 class="mt-6 text-[clamp(44px,7vw,82px)] leading-[0.95] font-serif font-normal"> We’re Getting <br> Married! </h1><div class="mt-10 mx-auto w-full max-w-[560px]"><img${ssrRenderAttr("src", __props.data.templateTwo.heroImageUrl)} alt="Wedding hero" class="w-full h-[320px] md:h-[360px] object-cover grayscale"></div><div class="mt-10 text-[clamp(32px,5vw,58px)] leading-[1] font-serif">${ssrInterpolate(dateLong.value)}</div><p class="mt-6 mx-auto max-w-[620px] text-[15px] leading-[1.7] opacity-80">${ssrInterpolate(__props.data.templateTwo.description)}</p><div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 text-left max-w-[720px] mx-auto"><div><div class="text-center text-[14px] tracking-[0.18em] uppercase">Ceremony</div><div class="mt-5 text-center text-[12px] tracking-[0.18em] uppercase opacity-70">${ssrInterpolate(__props.data.events.venue.name)}</div><div class="mt-2 text-center text-[12px] tracking-[0.18em] uppercase opacity-70">${ssrInterpolate(__props.data.events.venue.address)}</div><div class="mt-3 text-center text-[12px] tracking-[0.18em] uppercase opacity-70">${ssrInterpolate(__props.data.events.ceremony.time)}</div></div><div><div class="text-center text-[14px] tracking-[0.18em] uppercase">Reception</div><div class="mt-5 text-center text-[12px] tracking-[0.18em] uppercase opacity-70">${ssrInterpolate(__props.data.events.venue.name)}</div><div class="mt-2 text-center text-[12px] tracking-[0.18em] uppercase opacity-70">${ssrInterpolate(__props.data.events.venue.address)}</div><div class="mt-3 text-center text-[12px] tracking-[0.18em] uppercase opacity-70">${ssrInterpolate(__props.data.events.reception.time)}</div></div></div><div class="mt-12"><button class="border border-[#161616] px-10 py-4 text-[12px] tracking-[0.22em] uppercase">${ssrInterpolate(__props.data.templateTwo.primaryCtaLabel)}</button></div></section><section class="mt-20 border-t border-[#161616]/20 pt-14 text-center"><h2 class="text-[22px] tracking-[0.12em] uppercase font-serif font-normal">${ssrInterpolate(__props.data.templateTwo.travelHeading)}</h2><p class="mt-4 mx-auto max-w-[560px] text-[14px] leading-[1.8] opacity-80">${ssrInterpolate(__props.data.templateTwo.travelText)}</p><div class="mt-10 text-[12px] tracking-[0.18em] uppercase opacity-80">${ssrInterpolate(__props.data.templateTwo.travelHotelName)}</div><div class="mt-2 text-[12px] tracking-[0.18em] uppercase opacity-70">${ssrInterpolate(__props.data.templateTwo.travelHotelAddress)}</div></section></main></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/templates/TemplateTwo.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TemplateTwo = Object.assign(_sfc_main$2, { __name: "TemplatesTemplateTwo" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TemplateThree",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const props = __props;
    const t3 = computed(() => props.data.templateThree ?? {});
    const formattedDate = computed(() => formatDateParts(props.data.wedding.dateTimeLocal));
    const dateLine = computed(() => {
      const { day, year } = formattedDate.value;
      const numericMonth = /^(\d{4})-(\d{2})-(\d{2})/.exec(props.data.wedding.dateTimeLocal.trim())?.[2] ?? "";
      return day && numericMonth && year ? `${day} . ${numericMonth} . ${year}` : "";
    });
    const time = useCountdown(props.data.wedding.dateTimeLocal);
    const countdownStyle = computed(() => ({
      backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${t3.value.countdownBackgroundUrl})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }));
    const countdownParts = computed(() => [
      { value: time.value.days, label: "DAYS" },
      { value: time.value.hours, label: "HOURS" },
      { value: time.value.minutes, label: "MINS" },
      { value: time.value.seconds, label: "SECS" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-[100svh] bg-[#f2efe9] text-[#161616]" }, _attrs))}><header class="max-w-[1040px] mx-auto px-6 pt-10"><div class="flex items-center justify-between gap-6"><div class="text-[12px] tracking-[0.22em] uppercase">${ssrInterpolate(t3.value.headerText)}</div><nav class="hidden md:flex items-center gap-6 text-[11px] tracking-[0.22em] uppercase opacity-70"><!--[-->`);
      ssrRenderList(t3.value.topLinks ?? [], (label) => {
        _push(`<a href="#" class="hover:opacity-100">${ssrInterpolate(label)}</a>`);
      });
      _push(`<!--]--></nav><button class="border border-[#161616]/70 px-4 py-2 text-[11px] tracking-[0.22em] uppercase">${ssrInterpolate(t3.value.rsvpLabel)}</button></div></header><section class="pt-12 text-center max-w-[1040px] mx-auto px-6"><div class="grid grid-cols-1 md:grid-cols-[220px_1fr_220px] items-center gap-8"><div class="mx-auto w-full max-w-[220px]"><img${ssrRenderAttr("src", (t3.value.galleryImages ?? [])[0] ?? __props.data.wedding.heroImageUrl)} alt="" class="w-full h-[160px] object-cover grayscale"></div><div><div class="text-[clamp(34px,6vw,68px)] leading-[0.95] font-serif font-normal">${ssrInterpolate(dateLine.value || " ")}</div><div class="mt-5 text-[11px] tracking-[0.22em] uppercase opacity-70 max-w-[520px] mx-auto">${ssrInterpolate(__props.data.couple.groom.name)} &amp; ${ssrInterpolate(__props.data.couple.bride.name)}</div><div class="mt-3 text-[11px] tracking-[0.22em] uppercase opacity-60 max-w-[520px] mx-auto">${ssrInterpolate(__props.data.quote.source)}</div></div><div class="mx-auto w-full max-w-[220px]"><img${ssrRenderAttr("src", (t3.value.galleryImages ?? [])[2] ?? __props.data.wedding.heroImageUrl)} alt="" class="w-full h-[160px] object-cover grayscale"></div></div><div class="mt-10 mx-auto w-full max-w-[420px]"><img${ssrRenderAttr("src", (t3.value.galleryImages ?? [])[1] ?? __props.data.wedding.heroImageUrl)} alt="" class="w-full h-[220px] object-cover grayscale"></div></section><section class="mt-14 bg-[#1b1b1b] text-[#f2efe9] rounded-[2px] overflow-hidden max-w-[1040px] mx-auto px-0"><div class="px-6 md:px-12 py-14 text-center"><div class="text-[12px] tracking-[0.22em] uppercase opacity-80">${ssrInterpolate(t3.value.scheduleHeading)}</div><div class="mt-2 text-[14px] tracking-[0.22em] uppercase font-serif opacity-90">${ssrInterpolate(t3.value.scheduleSubheading)}</div><div class="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-[900px] mx-auto"><!--[-->`);
      ssrRenderList(t3.value.scheduleItems ?? [], (item) => {
        _push(`<div class="text-center"><div class="text-[14px] tracking-[0.18em] uppercase">${ssrInterpolate(item.time)}</div><div class="mt-2 text-[10px] tracking-[0.22em] uppercase opacity-70">${ssrInterpolate(item.label)}</div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="mt-14 rounded-[2px] overflow-hidden max-w-[1040px] mx-auto" style="${ssrRenderStyle(countdownStyle.value)}"><div class="px-6 md:px-12 py-20 text-center text-[#f2efe9]"><div class="text-[12px] tracking-[0.22em] uppercase opacity-80">Countdown</div><div class="mt-10 flex items-center justify-center gap-8"><!--[-->`);
      ssrRenderList(countdownParts.value, (part) => {
        _push(`<div class="text-center min-w-[60px]"><div class="text-[22px] md:text-[26px] tracking-[0.1em] font-serif">${ssrInterpolate(part.value)}</div><div class="mt-2 text-[10px] tracking-[0.22em] uppercase opacity-70">${ssrInterpolate(part.label)}</div></div>`);
      });
      _push(`<!--]--></div><div class="mt-10 text-[11px] tracking-[0.22em] uppercase opacity-75">${ssrInterpolate(__props.data.couple.groom.name)} <span class="mx-2 opacity-60">•</span> ${ssrInterpolate(__props.data.couple.bride.name)}</div></div></section><section class="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1040px] mx-auto px-6"><div class="bg-[#f7f4ee] border border-[#161616]/15 rounded-[2px] px-8 py-12 text-center"><div class="text-[14px] tracking-[0.22em] uppercase font-serif">${ssrInterpolate(t3.value.registryHeading)}</div><p class="mt-6 text-[13px] leading-[1.8] opacity-80">${ssrInterpolate(t3.value.registryText)}</p></div><div class="bg-[#f7f4ee] border border-[#161616]/15 rounded-[2px] px-8 py-12 text-center"><div class="text-[14px] tracking-[0.22em] uppercase font-serif">${ssrInterpolate(t3.value.dressCodeHeading)}</div><p class="mt-6 text-[13px] leading-[1.8] opacity-80">${ssrInterpolate(t3.value.dressCodeText)}</p></div></section><section class="mt-14 bg-[#f7f4ee] border border-[#161616]/15 rounded-[2px] overflow-hidden max-w-[1040px] mx-auto"><div class="px-6 md:px-12 py-14 text-center"><div class="text-[14px] tracking-[0.22em] uppercase font-serif">${ssrInterpolate(t3.value.locationHeading)}</div><div class="mt-10 grid grid-cols-1 md:grid-cols-[1fr_300px_1fr] gap-10 items-center"><div class="text-[10px] tracking-[0.22em] uppercase opacity-70 whitespace-pre-line">${ssrInterpolate(t3.value.locationLeftText)}</div><div class="mx-auto w-full"><img${ssrRenderAttr("src", t3.value.locationImageUrl)} alt="" class="w-full h-[200px] object-cover grayscale"><a${ssrRenderAttr("href", __props.data.events.venue.mapUrl)} target="_blank" rel="noopener noreferrer" class="mt-5 flex items-center justify-center border border-[#161616]/70 px-5 py-2 text-[10px] tracking-[0.22em] uppercase">${ssrInterpolate(t3.value.locationCtaLabel)}</a></div><div class="text-[10px] tracking-[0.22em] uppercase opacity-70 whitespace-pre-line">${ssrInterpolate(t3.value.locationRightText)}</div></div></div></section><div class="pb-24"></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/templates/TemplateThree.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TemplateThree = Object.assign(_sfc_main$1, { __name: "TemplatesTemplateThree" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TemplateFour",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const props = __props;
    const t4 = computed(() => props.data.templateFour ?? {});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-[100svh] bg-[#f2efe6] text-[#171717]" }, _attrs))}><header class="max-w-[1100px] mx-auto px-6 pt-8"><div class="text-center text-[12px] tracking-[0.26em] uppercase opacity-70">${ssrInterpolate(t4.value.headerText)}</div><div class="mt-7 border-t border-[#171717]/15"></div><nav class="py-4 flex items-center justify-center gap-10 text-[11px] tracking-[0.22em] uppercase opacity-70"><!--[-->`);
      ssrRenderList(t4.value.navItems ?? [], (label) => {
        _push(`<a href="#" class="hover:opacity-100">${ssrInterpolate(label)}</a>`);
      });
      _push(`<!--]--></nav></header><section class="max-w-[1100px] mx-auto px-6 mt-6 rounded-[2px] overflow-hidden relative"><img${ssrRenderAttr("src", t4.value.heroImageUrl)} alt="" class="w-full h-[360px] md:h-[420px] object-cover"><div class="absolute inset-0 bg-black/35"></div><div class="absolute inset-0 flex items-center justify-center text-center px-6"><div class="max-w-[900px]"><div class="text-[11px] tracking-[0.26em] uppercase text-white/85">${ssrInterpolate(t4.value.heroKicker)}</div><div class="mt-6 text-[clamp(44px,7vw,92px)] leading-[0.92] text-white font-script">${ssrInterpolate(t4.value.heroTitle)}</div><div class="mt-4 text-[12px] tracking-[0.22em] uppercase text-white/80">${ssrInterpolate(t4.value.heroDateText)}</div></div></div></section><section class="max-w-[1100px] mx-auto px-6 mt-10 bg-[#f7f3ea] border border-[#171717]/12 rounded-[2px] px-8 md:px-12 py-14 text-center"><div class="text-[11px] tracking-[0.26em] uppercase opacity-70">${ssrInterpolate(t4.value.welcomeKicker)}</div><div class="mt-6 text-[clamp(42px,6vw,78px)] leading-[0.92] font-script">${ssrInterpolate(t4.value.welcomeHeading)}</div><p class="mt-8 max-w-[760px] mx-auto text-[14px] leading-[1.9] opacity-80">${ssrInterpolate(t4.value.welcomeText)}</p><div class="mt-10"><button class="border border-[#171717]/70 px-10 py-4 text-[11px] tracking-[0.26em] uppercase">${ssrInterpolate(t4.value.primaryCtaLabel)}</button></div><div class="mt-10 text-[12px] tracking-[0.18em] opacity-70 font-serif">${ssrInterpolate(__props.data.couple.groom.name)} &amp; ${ssrInterpolate(__props.data.couple.bride.name)}</div></section><section class="max-w-[1100px] mx-auto px-6 mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 pb-24"><!--[-->`);
      ssrRenderList((t4.value.galleryImages ?? []).slice(0, 3), (src, idx) => {
        _push(`<div class="rounded-[2px] overflow-hidden bg-[#171717]/10"><img${ssrRenderAttr("src", src)} alt="" class="w-full h-[240px] object-cover grayscale"></div>`);
      });
      _push(`<!--]--></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/templates/TemplateFour.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TemplateFour = Object.assign(_sfc_main, { __name: "TemplatesTemplateFour" });

export { TemplateOne as T, TemplateTwo as a, TemplateThree as b, TemplateFour as c };
//# sourceMappingURL=TemplateFour-EuXjJA-I.mjs.map
