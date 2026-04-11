import { _ as __nuxt_component_0 } from './nuxt-link-DbBL4SdM.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { d as defaultWeddingData } from './defaultWeddingData-B7uqN430.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "checkout",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    function getDefaultDraft() {
      return {
        templateId: "template-1",
        paid: false,
        data: defaultWeddingData
      };
    }
    const draft = ref(getDefaultDraft());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "app-shell px-6 py-12" }, _attrs))}><div class="max-w-xl mx-auto"><div class="app-kicker text-[11px]">Step 3</div><h1 class="mt-2 text-[clamp(28px,4vw,40px)] app-title">Checkout (dummy)</h1><div class="mt-8 app-card p-6"><div class="text-[14px] app-title">Order summary</div><div class="mt-4 text-[13px] app-muted"> Template: <span class="text-[color:var(--app-ink)]">${ssrInterpolate(draft.value.templateId)}</span></div><div class="mt-2 text-[13px] app-muted"> Couple: <span class="text-[color:var(--app-ink)]">${ssrInterpolate(draft.value.data.couple.groom.name)} &amp; ${ssrInterpolate(draft.value.data.couple.bride.name)}</span></div><div class="mt-2 text-[13px] app-muted"> Price: <span class="text-[color:var(--app-ink)]">$0.00</span></div></div><div class="mt-8 flex items-center justify-between gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/templates",
        class: "app-btn app-btn-secondary px-5 py-2 text-[11px]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Back `);
          } else {
            return [
              createTextVNode(" Back ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button type="button" class="app-btn app-btn-primary px-7 py-3"> Pay &amp; Continue </button></div>`);
      if (draft.value.paid) {
        _push(`<div class="mt-6 text-[13px] app-muted">Already paid. Continue to publish.</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/checkout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=checkout-DIx_SuAP.mjs.map
