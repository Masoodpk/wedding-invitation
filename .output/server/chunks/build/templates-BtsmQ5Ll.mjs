import { _ as __nuxt_component_0 } from './nuxt-link-DbBL4SdM.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { d as defaultWeddingData } from './defaultWeddingData-B7uqN430.mjs';
import { s as saveDraft } from './wedding-DB1Sg7gL.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "templates",
  __ssrInlineRender: true,
  setup(__props) {
    const templates = ["template-1", "template-2", "template-3", "template-4"];
    function templateLabel(id) {
      if (id === "template-1") return "Template One (Sketchy Modern)";
      if (id === "template-2") return "Template Two (Minimal)";
      if (id === "template-3") return "Template Three (White Editorial)";
      return "Template Four (Hero RSVP)";
    }
    function getDefaultDraft() {
      return {
        templateId: "template-1",
        paid: false,
        data: JSON.parse(JSON.stringify(defaultWeddingData))
      };
    }
    const draft = ref(getDefaultDraft());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "app-shell px-6 py-12" }, _attrs))}><div class="max-w-5xl mx-auto"><div class="flex items-center justify-between gap-4"><div><div class="app-kicker text-[11px]">Step 2</div><h1 class="mt-2 text-[clamp(28px,4vw,40px)] app-title">Choose a template</h1></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/start",
        class: "app-btn app-btn-secondary px-5 py-2 text-[11px]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Edit details `);
          } else {
            return [
              createTextVNode(" Edit details ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"><!--[-->`);
      ssrRenderList(templates, (templateId) => {
        _push(`<div class="app-card overflow-hidden"><div class="p-6"><div class="flex items-start justify-between gap-4"><div><div class="text-[14px] app-title">${ssrInterpolate(templateLabel(templateId))}</div><div class="mt-2 text-[13px] app-muted">${ssrInterpolate(draft.value.data.couple.groom.name)} &amp; ${ssrInterpolate(draft.value.data.couple.bride.name)}</div></div><div class="${ssrRenderClass(`px-3 py-1 rounded-full text-[11px] tracking-[0.18em] uppercase font-serif ${draft.value.templateId === templateId ? "bg-[color:var(--app-accent)] text-[color:var(--app-paper)]" : "border border-[color:var(--app-border)] text-[color:var(--app-accent)]"}`)}">${ssrInterpolate(draft.value.templateId === templateId ? "Selected" : " ")}</div></div><div class="mt-5 flex flex-wrap gap-3">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/preview?templateId=${templateId}`,
          class: "app-btn app-btn-secondary px-5 py-2 text-[11px]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Preview `);
            } else {
              return [
                createTextVNode(" Preview ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<button type="button" class="app-btn app-btn-primary px-5 py-2 text-[11px]"> Choose </button></div></div><div class="h-[160px] flex items-center justify-center border-t border-[color:var(--app-border)] bg-[rgba(247,241,232,0.6)]"><div class="text-center text-[11px] tracking-[0.22em] uppercase app-muted">Preview in new page</div></div></div>`);
      });
      _push(`<!--]--></div><div class="mt-10 flex items-center justify-end">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/checkout",
        class: "app-btn app-btn-primary px-7 py-3",
        onClick: ($event) => unref(saveDraft)(draft.value)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Continue `);
          } else {
            return [
              createTextVNode(" Continue ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/templates.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=templates-BtsmQ5Ll.mjs.map
