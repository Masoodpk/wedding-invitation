import { _ as __nuxt_component_0 } from './nuxt-link-DbBL4SdM.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderClass, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { d as defaultWeddingData } from './defaultWeddingData-B7uqN430.mjs';
import { n as normalizeSlug, i as isValidSlug } from './wedding-DB1Sg7gL.mjs';
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
  __name: "publish",
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
    const slugInput = ref("");
    const slug = computed(() => normalizeSlug(slugInput.value));
    const isValidSlugValue = computed(() => isValidSlug(slug.value));
    const canPublish = computed(() => draft.value.paid && isValidSlugValue.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "app-shell px-6 py-12" }, _attrs))}><div class="max-w-xl mx-auto"><div class="app-kicker text-[11px]">Step 4</div><h1 class="mt-2 text-[clamp(28px,4vw,40px)] app-title">Publish</h1>`);
      if (!draft.value.paid) {
        _push(`<div class="mt-6 app-card p-5 text-[13px] app-muted"> Payment is required before publishing. </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mt-8 app-card p-6"><div class="text-[14px] app-title">Choose a subdomain (slug)</div><label class="block mt-4 text-sm app-muted"> Slug <input class="mt-2 app-input px-3 py-2" placeholder="e.g. ayisha-naji"${ssrRenderAttr("value", slugInput.value)}></label><div class="mt-3 text-[12px] app-muted"> Preview link: <span class="text-[color:var(--app-ink)]">/s?slug=${ssrInterpolate(slug.value || "your-slug")}</span></div>`);
      if (slugInput.value && !isValidSlugValue.value) {
        _push(`<div class="mt-3 text-[12px] text-[color:var(--app-accent)]"> Use letters, numbers, and hyphens only. </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-8 flex items-center justify-between gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/checkout",
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
      _push(`<button type="button" class="${ssrRenderClass(`app-btn px-7 py-3 ${canPublish.value ? "app-btn-primary" : "border border-[color:var(--app-border)] text-[color:rgba(36,28,26,0.35)] cursor-not-allowed"}`)}"${ssrIncludeBooleanAttr(!canPublish.value) ? " disabled" : ""}> Publish </button></div></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/publish.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=publish-DkZnL85T.mjs.map
