import { ref, defineComponent, mergeProps, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "Elements",
  __ssrInlineRender: true,
  props: {
    type: {},
    className: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.type === "circle") {
        _push(`<svg${ssrRenderAttrs(mergeProps({
          viewBox: "0 0 100 100",
          class: __props.className,
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2"
        }, _attrs))}><path d="M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,12" stroke-dasharray="300" stroke-dashoffset="0" class="animate-[draw_2s_ease-out_infinite]"></path></svg>`);
      } else if (__props.type === "line") {
        _push(`<svg${ssrRenderAttrs(mergeProps({
          viewBox: "0 0 200 20",
          class: __props.className,
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "1.5"
        }, _attrs))}><path d="M0,10 Q25,0 50,10 T100,10 T150,10 T200,10"></path></svg>`);
      } else if (__props.type === "underline") {
        _push(`<svg${ssrRenderAttrs(mergeProps({
          viewBox: "0 0 100 10",
          class: __props.className,
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2"
        }, _attrs))}><path d="M2,5 Q50,8 98,4 Q50,2 5,6"></path></svg>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sketchy/Elements.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const Elements = Object.assign(_sfc_main$9, { __name: "SketchyElements" });
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "IntroSection",
  __ssrInlineRender: true,
  props: {
    hidden: { type: Boolean },
    data: {}
  },
  emits: ["open"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (!__props.hidden) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed inset-0 z-[100] bg-[#F5F1E9] flex flex-col items-center justify-center p-4 text-center overflow-y-auto overflow-x-hidden" }, _attrs))}><div class="relative w-full max-w-[350px] sm:max-w-[400px] mb-8 group mt-8"><div class="aspect-[3/4] max-h-[40vh] mx-auto overflow-hidden grayscale contrast-125 border-[3px] border-[#1A1A1A] transform -rotate-1 transition-transform group-hover:rotate-0 duration-500"><img${ssrRenderAttr("src", __props.data.wedding.heroImageUrl)} alt="Couple" class="w-full h-full object-cover"></div><div class="absolute -top-8 -right-8 w-20 h-20 md:w-24 md:h-24 text-[#C62828] opacity-60 pointer-events-none">`);
        _push(ssrRenderComponent(Elements, {
          type: "circle",
          className: "w-full h-full stroke-[3]"
        }, null, _parent));
        _push(`</div></div><div class="mb-8"><h1 class="font-serif text-[clamp(1.5rem,5vw,3.5rem)] mb-2 uppercase tracking-tighter text-[#1A1A1A]"> LOVE IS... </h1><p class="font-script text-[clamp(1.2rem,3vw,2.5rem)] text-[#C62828] -mt-2">...when you are together</p></div><button class="relative group px-10 py-3 md:px-12 md:py-4 bg-transparent transition-transform active:scale-95 cursor-pointer mb-8"><span class="relative z-10 font-serif text-base md:text-lg tracking-[0.2em] text-[#1A1A1A] uppercase">Open</span><svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 60" preserveAspectRatio="none"><path d="M5,5 Q100,2 195,5 Q198,30 195,55 Q100,58 5,55 Q2,30 5,5 Z" fill="none" stroke="#1A1A1A" stroke-width="2" class="group-hover:stroke-[#C62828] transition-colors"></path></svg></button><div class="mt-8 text-sm tracking-widest text-gray-500 font-serif uppercase animate-pulse">Scroll to explore</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sketchy/IntroSection.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const IntroSectionSketchy = Object.assign(_sfc_main$8, { __name: "SketchyIntroSection" });
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "HeroSection",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const props = __props;
    function parseYmd(dateTimeLocal) {
      const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(dateTimeLocal.trim());
      if (!match) return null;
      return { year: match[1], month: match[2], day: match[3] };
    }
    const dateText = computed(() => {
      const ymd = parseYmd(props.data.wedding.dateTimeLocal);
      return ymd ? `${ymd.day} . ${ymd.month} . ${ymd.year}` : "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "reveal relative min-h-screen py-20 px-6 flex flex-col items-center justify-center overflow-hidden" }, _attrs))}><div class="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center"><div class="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left"><div class="inline-block px-4 py-1 border border-[#C62828] text-[#C62828] text-sm tracking-[0.3em] uppercase mb-8"> The Wedding of ------- </div><h2 class="text-[clamp(3.5rem,10vw,7rem)] leading-[0.9] font-serif uppercase tracking-tighter mb-4 text-[#1A1A1A]">${ssrInterpolate(__props.data.couple.groom.name)} <br><span class="text-[#C62828]">&amp;</span> ${ssrInterpolate(__props.data.couple.bride.name)}</h2><div class="relative mt-4"><p class="font-script text-[clamp(1.5rem,4vw,2.5rem)] text-gray-700">...совместные мечты</p>`);
      _push(ssrRenderComponent(Elements, {
        type: "underline",
        className: "absolute -bottom-2 left-0 w-full h-4 text-[#C62828] opacity-40"
      }, null, _parent));
      _push(`</div><div class="mt-12 flex flex-col items-center md:items-start gap-4 font-serif tracking-[0.2em] text-[#1A1A1A]"><p class="text-xl">${ssrInterpolate(dateText.value)}</p><p class="text-sm opacity-60 uppercase">${ssrInterpolate(__props.data.events.venue.name)}</p></div></div><div class="order-1 md:order-2 relative"><div class="aspect-[4/5] bg-gray-200 border-[8px] border-white shadow-xl transform rotate-2 overflow-hidden"><img${ssrRenderAttr("src", __props.data.wedding.heroImageUrl)} alt="Couple" class="w-full h-full object-cover grayscale"></div><div class="absolute -bottom-10 -left-10 w-24 h-24 text-[#C62828] rotate-45 opacity-60"><svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2"><path d="M10,50 L90,50 M70,30 L90,50 L70,70"></path></svg></div></div></div><div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"><span class="font-serif text-[10px] tracking-[0.3em] uppercase text-[#C62828] opacity-60">Scroll</span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C62828" stroke-width="1.5"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"></path></svg></div></section>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sketchy/HeroSection.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const HeroSectionSketchy = Object.assign(_sfc_main$7, { __name: "SketchyHeroSection" });
const _imports_0 = publicAssetsURL("/assets/groom-optimized.jpg");
const _imports_1 = publicAssetsURL("/assets/bride-optimized.jpg");
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "CoupleSection",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "reveal py-24 px-6 relative overflow-hidden" }, _attrs))}><div class="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center"><div class="flex flex-col items-center md:items-end text-center md:text-right relative"><div class="aspect-square w-full max-w-[300px] mb-8 grayscale border-[2px] border-[#1A1A1A] transform -rotate-2 hover:rotate-0 transition-transform duration-500 overflow-hidden bg-gray-100"><img${ssrRenderAttr("src", _imports_0)}${ssrRenderAttr("alt", __props.data.couple.groom.name)} class="w-full h-full object-cover"></div><h3 class="font-serif text-4xl mb-2 text-[#1A1A1A] uppercase tracking-tighter">${ssrInterpolate(__props.data.couple.groom.name)}</h3><p class="font-serif text-[#C62828] text-sm tracking-widest mb-4 uppercase">The Groom</p><p class="font-sans text-gray-500 font-light max-w-xs">${ssrInterpolate(__props.data.couple.groom.detailsLine)}</p></div><div class="flex flex-col items-center md:items-start text-center md:text-left relative"><div class="aspect-square w-full max-w-[300px] mb-8 grayscale border-[2px] border-[#1A1A1A] transform rotate-2 hover:rotate-0 transition-transform duration-500 overflow-hidden bg-gray-100"><img${ssrRenderAttr("src", _imports_1)}${ssrRenderAttr("alt", __props.data.couple.bride.name)} class="w-full h-full object-cover"></div><h3 class="font-serif text-4xl mb-2 text-[#1A1A1A] uppercase tracking-tighter">${ssrInterpolate(__props.data.couple.bride.name)}</h3><p class="font-serif text-[#C62828] text-sm tracking-widest mb-4 uppercase">The Bride</p><p class="font-sans text-gray-500 font-light max-w-xs">${ssrInterpolate(__props.data.couple.bride.detailsLine)}</p></div></div><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[clamp(10rem,30vw,20rem)] text-[#C62828] opacity-[0.03] pointer-events-none select-none"> &amp; </div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sketchy/CoupleSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const CoupleSectionSketchy = Object.assign(_sfc_main$6, { __name: "SketchyCoupleSection" });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "EnvelopeSection",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const isOpen = ref(false);
    const sectionRef = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "sectionRef",
        ref: sectionRef,
        class: "reveal relative py-32 px-6 flex flex-col items-center justify-center min-h-[80vh] bg-[#F5F1E9] overflow-hidden"
      }, _attrs))} data-v-f322e70c><div class="absolute inset-x-0 top-0 h-px bg-gray-300 transform -skew-y-2 opacity-50" data-v-f322e70c></div><div class="absolute inset-x-0 bottom-0 h-px bg-gray-300 transform skew-y-2 opacity-50" data-v-f322e70c></div><div class="${ssrRenderClass(`text-center mb-24 relative z-10 transition-all duration-1000 ${isOpen.value ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"}`)}" data-v-f322e70c><h3 class="font-serif text-[clamp(2.5rem,6vw,4rem)] text-[#1A1A1A] uppercase tracking-widest mb-4" data-v-f322e70c> Invitation </h3><p class="font-script text-[clamp(1.5rem,3vw,2.5rem)] text-[#1A1A1A] opacity-70" data-v-f322e70c>A Secret Inside</p></div><div class="relative w-full max-w-[500px] aspect-[4/3] perspective-[1000px] group" data-v-f322e70c><div class="${ssrRenderClass(`relative w-full h-full transition-transform duration-1000 transform-style-3d ${isOpen.value ? "translate-y-20" : ""}`)}" data-v-f322e70c><div class="absolute inset-0 bg-[#b71f1f] shadow-2xl skew-x-1 rounded-sm" data-v-f322e70c></div><div class="${ssrRenderClass(`absolute left-4 right-4 bg-white shadow-lg border border-gray-100 transition-all duration-1000 ease-in-out flex flex-col items-center justify-center p-8 text-center ${isOpen.value ? "-translate-y-[60%] z-10 opacity-100 scale-105" : "translate-y-4 z-0 opacity-0 scale-95"}`)}" style="${ssrRenderStyle({ transitionDelay: isOpen.value ? "400ms" : "0ms" })}" data-v-f322e70c><p class="font-serif text-[10px] tracking-[0.4em] uppercase mb-4 text-[#C62828] font-bold" data-v-f322e70c>You are Invited</p><div class="w-10 h-px bg-gray-200 mb-8" data-v-f322e70c></div><h4 class="font-serif text-3xl md:text-4xl text-[#1A1A1A] uppercase leading-[0.9] tracking-tighter mb-4" data-v-f322e70c>${ssrInterpolate(__props.data.couple.groom.name)} <br data-v-f322e70c><span class="text-[#C62828] text-2xl font-script normal-case" data-v-f322e70c>&amp;</span><br data-v-f322e70c> ${ssrInterpolate(__props.data.couple.bride.name)}</h4><p class="font-script text-xl text-gray-500 mb-8 italic mt-4" data-v-f322e70c>Together Forever</p><div class="mt-4 pt-6 border-t border-gray-100 font-serif text-[9px] tracking-[0.4em] text-gray-400 uppercase w-full" data-v-f322e70c> Save the Date • 20.12.2026 </div></div><div class="absolute inset-0 z-20 pointer-events-none" data-v-f322e70c><div class="absolute left-0 top-0 bottom-0 w-1/2 bg-[#aa1919]" style="${ssrRenderStyle({ "clip-path": "polygon(0 0, 100% 50%, 0 100%)" })}" data-v-f322e70c></div><div class="absolute right-0 top-0 bottom-0 w-1/2 bg-[#aa1919]" style="${ssrRenderStyle({ "clip-path": "polygon(100% 0, 0 50%, 100% 100%)" })}" data-v-f322e70c></div><div class="absolute bottom-0 left-0 right-0 h-1/2 bg-[#991616]" style="${ssrRenderStyle({ "clip-path": "polygon(0 100%, 50% 0, 100% 100%)" })}" data-v-f322e70c></div><div class="${ssrRenderClass(`absolute top-0 left-0 right-0 h-1/2 bg-[#C62828] shadow-[0_5px_15px_rgba(0,0,0,0.2)] transform origin-top transition-all duration-500 ease-in-out z-30 ${isOpen.value ? "rotate-x-180" : "rotate-x-0"}`)}" style="${ssrRenderStyle({
        clipPath: "polygon(0 0, 100% 0, 50% 100%)",
        backfaceVisibility: "hidden",
        zIndex: isOpen.value ? "0" : "30"
      })}" data-v-f322e70c></div></div></div></div><div class="h-20" data-v-f322e70c></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sketchy/EnvelopeSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const EnvelopeSection = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$5, [["__scopeId", "data-v-f322e70c"]]), { __name: "SketchyEnvelopeSection" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "CalendarSection",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const props = __props;
    function parseYmd(dateTimeLocal) {
      const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(dateTimeLocal.trim());
      if (!match) return null;
      const year = Number(match[1]);
      const monthIndex = Number(match[2]) - 1;
      const day = Number(match[3]);
      if (!Number.isFinite(year) || !Number.isFinite(monthIndex) || !Number.isFinite(day)) return null;
      return { year, monthIndex, day };
    }
    const displayInfo = computed(() => {
      const parsed = parseYmd(props.data.wedding.dateTimeLocal);
      const monthIndex = parsed?.monthIndex ?? 0;
      const year = parsed?.year ?? 2026;
      const date = parsed?.day ?? 1;
      const daysInMonth = new Date(Date.UTC(year, monthIndex + 1, 0)).getUTCDate();
      const firstDay = new Date(Date.UTC(year, monthIndex, 1)).getUTCDay();
      const blanksCount = firstDay === 0 ? 6 : firstDay - 1;
      const blanks = Array.from({ length: blanksCount }, (_, i) => i);
      const daysList = Array.from({ length: daysInMonth }, (_, i) => i + 1);
      const monthNames = [
        "ЯНВАРЬ",
        "ФЕВРАЛЬ",
        "МАРТ",
        "АПРЕЛЬ",
        "МАЙ",
        "ИЮНЬ",
        "ИЮЛЬ",
        "АВГУСТ",
        "СЕНТЯБРЬ",
        "ОКТЯБРЬ",
        "НОЯБРЬ",
        "ДЕКАБРЬ"
      ];
      const displayMonth = monthNames[monthIndex] ?? "MONTH";
      return { year, date, blanks, daysList, displayMonth };
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "reveal py-24 px-6 flex flex-col items-center" }, _attrs))}><div class="relative w-full max-w-lg mx-auto"><h3 class="font-serif text-3xl md:text-5xl text-center mb-16 tracking-widest text-[#1A1A1A]">${ssrInterpolate(displayInfo.value.displayMonth)} ${ssrInterpolate(displayInfo.value.year)}</h3><div class="absolute top-10 left-1/2 -translate-x-1/2 w-32 h-6 text-[#C62828] opacity-60">`);
      _push(ssrRenderComponent(Elements, {
        type: "line",
        className: "w-full h-full"
      }, null, _parent));
      _push(`</div><div class="grid grid-cols-7 gap-y-6 gap-x-2 md:gap-x-4 text-center font-serif text-[#1A1A1A]"><!--[-->`);
      ssrRenderList(["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"], (d) => {
        _push(`<div class="text-xs md:text-sm tracking-widest font-bold opacity-50 mb-4">${ssrInterpolate(d)}</div>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(displayInfo.value.blanks, (i) => {
        _push(`<div class="p-2"></div>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(displayInfo.value.daysList, (d) => {
        _push(`<div class="relative p-2 md:p-4 text-lg md:text-2xl flex items-center justify-center"><span class="${ssrRenderClass(`relative z-10 ${d === displayInfo.value.date ? "font-bold" : ""}`)}">${ssrInterpolate(d)}</span>`);
        if (d === displayInfo.value.date) {
          _push(`<div class="absolute inset-0 text-[#C62828] z-0 -rotate-12 scale-150">`);
          _push(ssrRenderComponent(Elements, {
            type: "circle",
            className: "w-full h-full stroke-[3px]"
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sketchy/CalendarSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const CalendarSection = Object.assign(_sfc_main$4, { __name: "SketchyCalendarSection" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "RulesSection",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "reveal py-24 px-6" }, _attrs))}><div class="max-w-[800px] mx-auto"><div class="text-center mb-16"><h3 class="font-script text-[clamp(2.5rem,6vw,4.5rem)] text-[#C62828] leading-none mb-2 transform -rotate-2"> Details </h3><p class="font-serif tracking-[0.3em] uppercase text-sm text-[#1A1A1A]">important notes</p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-12"><div class="relative border border-[#1A1A1A] p-8 bg-white rotate-1 hover:rotate-0 transition-transform shadow-[5px_5px_0_#C62828]"><div class="absolute -top-6 -left-6 w-12 h-12 bg-[#F5F1E9] border-2 border-[#1A1A1A] rounded-full flex items-center justify-center font-serif text-xl font-bold text-[#1A1A1A]"> 1 </div><h4 class="font-serif text-xl mb-4 tracking-widest uppercase text-[#1A1A1A] border-b border-gray-200 pb-2 border-dashed"> Dress Code </h4><p class="font-serif text-gray-600 leading-relaxed text-sm text-justify"> Please join us in our celebration of love by following our color theme. We would be delighted to see you in pastel tones: beige, dusty rose, grey, or olive. </p></div><div class="relative border border-[#1A1A1A] p-8 bg-white -rotate-1 hover:rotate-0 transition-transform shadow-[-5px_5px_0_#1A1A1A]"><div class="absolute -top-6 -right-6 w-12 h-12 bg-[#F5F1E9] border-2 border-[#1A1A1A] rounded-full flex items-center justify-center font-serif text-xl font-bold text-[#C62828]"> 2 </div><h4 class="font-serif text-xl mb-4 tracking-widest uppercase text-[#1A1A1A] border-b border-gray-200 pb-2 border-dashed"> Gifts </h4><p class="font-serif text-gray-600 leading-relaxed text-sm text-justify"> Your presence is our most cherished gift. However, if you would like to honor us with a gift, a contribution in an envelope would help us realize our dreams. </p></div></div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sketchy/RulesSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const RulesSection = Object.assign(_sfc_main$3, { __name: "SketchyRulesSection" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ContactSection",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const props = __props;
    const events = computed(() => {
      return [
        { title: props.data.events.ceremony.title, time: props.data.events.ceremony.time },
        { title: props.data.events.reception.title, time: props.data.events.reception.time }
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "reveal py-24 px-6 bg-[#1A1A1A] text-white" }, _attrs))}><div class="max-w-[1000px] mx-auto text-center"><h3 class="font-serif text-[clamp(2.5rem,5vw,4rem)] uppercase tracking-[0.2em] mb-16 relative inline-block"> Location `);
      _push(ssrRenderComponent(Elements, {
        type: "underline",
        className: "absolute -bottom-4 left-0 w-full h-8 text-[#C62828]"
      }, null, _parent));
      _push(`</h3><div class="flex flex-col md:flex-row justify-center gap-12 md:gap-24 mb-16"><div class="flex-1 text-center md:text-right"><p class="font-serif text-[#C62828] tracking-widest uppercase text-sm mb-4">Venue</p><p class="font-serif text-2xl md:text-3xl mb-2">${ssrInterpolate(__props.data.events.venue.name)}</p><p class="font-sans text-gray-400 font-light max-w-xs ml-auto mr-auto md:mr-0">${ssrInterpolate(__props.data.events.venue.address)}</p></div><div class="hidden md:block w-px bg-gray-800"></div><div class="flex-1 text-center md:text-left flex flex-col justify-center"><!--[-->`);
      ssrRenderList(events.value, (e) => {
        _push(`<div class="mb-6 last:mb-0"><p class="font-serif text-xl mb-1">${ssrInterpolate(e.title)}</p><p class="font-sans text-[#C62828] tracking-widest text-sm">${ssrInterpolate(e.time)}</p></div>`);
      });
      _push(`<!--]--></div></div><a${ssrRenderAttr("href", __props.data.events.venue.mapUrl)} target="_blank" rel="noopener noreferrer" class="inline-block border-2 border-[#C62828] text-[#C62828] hover:bg-[#C62828] hover:text-white px-10 py-4 font-serif uppercase tracking-[0.2em] transition-colors duration-300"> View on Map </a></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sketchy/ContactSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ContactSection = Object.assign(_sfc_main$2, { __name: "SketchyContactSection" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "reveal py-20 px-6 bg-[#F5F1E9] text-center" }, _attrs))}><div class="inline-block relative"><h4 class="font-script text-[clamp(3rem,8vw,5rem)] text-[#1A1A1A] leading-none mb-4 transform -rotate-3"> See you there! </h4><div class="absolute -top-6 -right-12 w-16 h-16 opacity-30 text-[#C62828]"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg></div></div><div class="mt-8 flex items-center justify-center gap-4 text-[#1A1A1A] font-serif tracking-widest uppercase text-sm"><div class="w-12 h-px bg-[#1A1A1A] opacity-20"></div><p>${ssrInterpolate(__props.data.couple.groom.name)} &amp; ${ssrInterpolate(__props.data.couple.bride.name)}</p><div class="w-12 h-px bg-[#1A1A1A] opacity-20"></div></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sketchy/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FooterSketchy = Object.assign(_sfc_main$1, { __name: "SketchyFooter" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MusicToggle",
  __ssrInlineRender: true,
  props: {
    playing: { type: Boolean },
    hidden: { type: Boolean }
  },
  emits: ["toggle"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (!__props.hidden) {
        _push(`<button${ssrRenderAttrs(mergeProps({
          id: "musicToggle",
          class: `fixed bottom-5 right-5 md:bottom-8 md:right-8 xl:bottom-6 xl:right-5.5 z-40 w-10 h-10 md:w-[50px] md:h-[50px] rounded-full bg-card/80 backdrop-blur-lg border border-accent text-accent flex items-center justify-center cursor-pointer transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:scale-110 hover:bg-card ${__props.playing ? "is-playing" : ""}`,
          "aria-label": "Toggle background music",
          "aria-pressed": __props.playing
        }, _attrs))}><svg class="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">`);
        if (__props.playing) {
          _push(`<!--[--><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path><!--]-->`);
        } else {
          _push(`<!--[--><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line><!--]-->`);
        }
        _push(`</svg></button>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MusicToggle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MusicToggle = Object.assign(_sfc_main, { __name: "MusicToggle" });
function useCountdown(dateISO) {
  const time = ref({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
    arrived: false
  });
  return time;
}

export { CoupleSectionSketchy as C, EnvelopeSection as E, FooterSketchy as F, HeroSectionSketchy as H, IntroSectionSketchy as I, MusicToggle as M, RulesSection as R, CalendarSection as a, ContactSection as b, useCountdown as u };
//# sourceMappingURL=useCountdown-KSLBk3ZA.mjs.map
