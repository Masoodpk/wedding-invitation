import { _ as __nuxt_component_0 } from './nuxt-link-DbBL4SdM.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { d as defaultWeddingData } from './defaultWeddingData-B7uqN430.mjs';
import { l as loadPublishedSite, m as mergeDefaults } from './wedding-DB1Sg7gL.mjs';
import { T as TemplateOne, a as TemplateTwo, b as TemplateThree, c as TemplateFour } from './TemplateFour-EuXjJA-I.mjs';
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
import 'vue-router';
import './useCountdown-KSLBk3ZA.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "s",
  __ssrInlineRender: true,
  setup(__props) {
    function isTemplateId(value) {
      return value === "template-1" || value === "template-2" || value === "template-3" || value === "template-4";
    }
    const slug = ref("");
    const site = computed(() => {
      if (!slug.value) return null;
      const found = loadPublishedSite(slug.value);
      if (!found) return null;
      return { ...found, data: mergeDefaults(defaultWeddingData, found.data) };
    });
    const isValidSite = computed(() => site.value && isTemplateId(site.value.templateId));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      if (!isValidSite.value) {
        _push(`<main${ssrRenderAttrs(mergeProps({ class: "app-shell px-6 py-12" }, _attrs))}><div class="max-w-xl mx-auto app-card px-8 py-12 text-center"><div class="app-kicker text-[11px]">Published Link</div><h1 class="mt-4 text-[clamp(28px,4vw,40px)] app-title m-0">Site not found</h1><p class="mt-4 app-muted">Publish a site first to get a shareable link.</p><div class="mt-8">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "app-btn app-btn-primary px-7 py-3"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Go home `);
            } else {
              return [
                createTextVNode(" Go home ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></main>`);
      } else {
        _push(`<!--[-->`);
        if (site.value.templateId === "template-1") {
          _push(ssrRenderComponent(TemplateOne, {
            data: site.value.data
          }, null, _parent));
        } else if (site.value.templateId === "template-2") {
          _push(ssrRenderComponent(TemplateTwo, {
            data: site.value.data
          }, null, _parent));
        } else if (site.value.templateId === "template-3") {
          _push(ssrRenderComponent(TemplateThree, {
            data: site.value.data
          }, null, _parent));
        } else {
          _push(ssrRenderComponent(TemplateFour, {
            data: site.value.data
          }, null, _parent));
        }
        _push(`<!--]-->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/s.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=s-20ZHI4l9.mjs.map
