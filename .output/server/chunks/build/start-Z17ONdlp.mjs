import { defineComponent, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { d as defaultWeddingData } from './defaultWeddingData-B7uqN430.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "start",
  __ssrInlineRender: true,
  setup(__props) {
    function getDefaultDraft() {
      return {
        templateId: "template-1",
        paid: false,
        data: JSON.parse(JSON.stringify(defaultWeddingData))
      };
    }
    useRouter();
    const draft = ref(getDefaultDraft());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "app-shell px-6 py-12" }, _attrs))}><div class="max-w-3xl mx-auto"><div class="flex items-center justify-between gap-4"><h1 class="text-[clamp(28px,4vw,40px)] app-title m-0">Enter your details</h1><button type="button" class="app-btn app-btn-secondary px-5 py-2 text-[11px]"> Reset </button></div><div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"><div class="app-card p-6"><div class="app-kicker text-[11px]">Couple</div><label class="block mt-5 text-sm app-muted"> Groom name <input class="mt-2 app-input px-3 py-2"${ssrRenderAttr("value", draft.value.data.couple.groom.name)}></label><label class="block mt-4 text-sm app-muted"> Groom details line <input class="mt-2 app-input px-3 py-2"${ssrRenderAttr("value", draft.value.data.couple.groom.detailsLine)}></label><label class="block mt-6 text-sm app-muted"> Bride name <input class="mt-2 app-input px-3 py-2"${ssrRenderAttr("value", draft.value.data.couple.bride.name)}></label><label class="block mt-4 text-sm app-muted"> Bride details line <input class="mt-2 app-input px-3 py-2"${ssrRenderAttr("value", draft.value.data.couple.bride.detailsLine)}></label></div><div class="app-card p-6"><div class="app-kicker text-[11px]">Wedding</div><label class="block mt-5 text-sm app-muted"> Wedding date &amp; time <input type="datetime-local" class="mt-2 app-input px-3 py-2"${ssrRenderAttr("value", draft.value.data.wedding.dateTimeLocal)}></label><label class="block mt-4 text-sm app-muted"> Tagline <input class="mt-2 app-input px-3 py-2"${ssrRenderAttr("value", draft.value.data.wedding.tagline)}></label><label class="block mt-4 text-sm app-muted"> Hero image URL <input class="mt-2 app-input px-3 py-2"${ssrRenderAttr("value", draft.value.data.wedding.heroImageUrl)}></label></div></div><div class="mt-6 app-card p-6"><div class="app-kicker text-[11px]">Venue</div><div class="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5"><label class="block text-sm app-muted"> Venue name <input class="mt-2 app-input px-3 py-2"${ssrRenderAttr("value", draft.value.data.events.venue.name)}></label><label class="block text-sm app-muted"> Venue address <input class="mt-2 app-input px-3 py-2"${ssrRenderAttr("value", draft.value.data.events.venue.address)}></label><label class="block text-sm app-muted md:col-span-2"> Google maps link <input class="mt-2 app-input px-3 py-2"${ssrRenderAttr("value", draft.value.data.events.venue.mapUrl)}></label></div></div><div class="mt-6 app-card p-6"><div class="app-kicker text-[11px]">Schedule</div><div class="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5"><label class="block text-sm app-muted"> Ceremony time <input class="mt-2 app-input px-3 py-2"${ssrRenderAttr("value", draft.value.data.events.ceremony.time)}></label><label class="block text-sm app-muted"> Reception time <input class="mt-2 app-input px-3 py-2"${ssrRenderAttr("value", draft.value.data.events.reception.time)}></label><label class="block text-sm app-muted"> Ceremony location name <input class="mt-2 app-input px-3 py-2"${ssrRenderAttr("value", draft.value.data.events.ceremony.locationName)}></label><label class="block text-sm app-muted"> Reception location name <input class="mt-2 app-input px-3 py-2"${ssrRenderAttr("value", draft.value.data.events.reception.locationName)}></label></div></div><div class="mt-6 app-card p-6"><div class="app-kicker text-[11px]">Quote</div><div class="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5"><label class="block text-sm app-muted md:col-span-2"> Quote text <input class="mt-2 app-input px-3 py-2"${ssrRenderAttr("value", draft.value.data.quote.text)}></label><label class="block text-sm app-muted"> Quote source <input class="mt-2 app-input px-3 py-2"${ssrRenderAttr("value", draft.value.data.quote.source)}></label></div></div><div class="mt-6 app-card p-6"><div class="app-kicker text-[11px]">Template Two</div><div class="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5"><label class="block text-sm app-muted md:col-span-2"> Description paragraph <textarea class="mt-2 app-input px-3 py-2 min-h-[110px]">${ssrInterpolate(draft.value.data.templateTwo.description)}</textarea></label><label class="block text-sm app-muted md:col-span-2"> Travel text <textarea class="mt-2 app-input px-3 py-2 min-h-[90px]">${ssrInterpolate(draft.value.data.templateTwo.travelText)}</textarea></label><label class="block text-sm app-muted"> Hotel name <input class="mt-2 app-input px-3 py-2"${ssrRenderAttr("value", draft.value.data.templateTwo.travelHotelName)}></label><label class="block text-sm app-muted"> Hotel address <input class="mt-2 app-input px-3 py-2"${ssrRenderAttr("value", draft.value.data.templateTwo.travelHotelAddress)}></label></div></div><div class="mt-10 flex items-center justify-end"><button type="button" class="app-btn app-btn-primary px-7 py-3"> Continue </button></div></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/start.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=start-Z17ONdlp.mjs.map
