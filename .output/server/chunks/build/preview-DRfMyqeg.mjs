import { _ as __nuxt_component_0 } from './nuxt-link-DbBL4SdM.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { d as defaultWeddingData } from './defaultWeddingData-B7uqN430.mjs';
import { s as saveDraft } from './wedding-DB1Sg7gL.mjs';
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
  __name: "preview",
  __ssrInlineRender: true,
  setup(__props) {
    function getDefaultDraft() {
      return {
        templateId: "template-1",
        paid: false,
        data: defaultWeddingData
      };
    }
    const draft = ref(getDefaultDraft());
    const templateId = ref("template-1");
    const applyTemplate = () => {
      saveDraft({ ...draft.value, templateId: templateId.value });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-[100svh]" }, _attrs))}><div class="fixed top-0 left-0 right-0 z-[200] app-topbar"><div class="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between gap-4"><div class="app-kicker text-[11px]">Preview</div><div class="flex items-center gap-3">`);
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
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/checkout",
        class: "app-btn app-btn-primary px-5 py-2 text-[11px]",
        onClick: applyTemplate
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Use this `);
          } else {
            return [
              createTextVNode(" Use this ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="pt-[64px]">`);
      if (templateId.value === "template-1") {
        _push(ssrRenderComponent(TemplateOne, {
          data: draft.value.data
        }, null, _parent));
      } else if (templateId.value === "template-2") {
        _push(ssrRenderComponent(TemplateTwo, {
          data: draft.value.data
        }, null, _parent));
      } else if (templateId.value === "template-3") {
        _push(ssrRenderComponent(TemplateThree, {
          data: draft.value.data
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(TemplateFour, {
          data: draft.value.data
        }, null, _parent));
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/preview.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=preview-DRfMyqeg.mjs.map
