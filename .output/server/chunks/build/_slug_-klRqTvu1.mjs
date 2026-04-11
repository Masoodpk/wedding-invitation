import { defineComponent, computed, createVNode, resolveDynamicComponent, mergeProps, ref, unref, createElementBlock, shallowRef, getCurrentInstance, provide, cloneVNode, h, useSSRContext, toValue, onServerPrefetch, reactive, nextTick, toRef } from 'vue';
import { ssrRenderVNode, ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { debounce } from 'perfect-debounce';
import { b as useRoute, c as createError, u as useNuxtApp, a as asyncDataDefaults, f as fetchDefaults } from './server.mjs';
import { t as hash } from '../nitro/nitro.mjs';
import { isPlainObject } from '@vue/shared';
import { a as formatDateParts, g as getFirstName } from './wedding-DB1Sg7gL.mjs';
import { M as MusicToggle, I as IntroSectionSketchy, H as HeroSectionSketchy, C as CoupleSectionSketchy, E as EnvelopeSection, a as CalendarSection, R as RulesSection, b as ContactSection, F as FooterSketchy, u as useCountdown } from './useCountdown-KSLBk3ZA.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = /* @__PURE__ */ Symbol.for("nuxt:client-only");
defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  ...false,
  setup(props, { slots, attrs }) {
    const mounted = shallowRef(false);
    const vm = getCurrentInstance();
    if (vm) {
      vm._nuxtClientOnly = true;
    }
    provide(clientOnlySymbol, true);
    return () => {
      if (mounted.value) {
        const vnodes = slots.default?.();
        if (vnodes && vnodes.length === 1) {
          return [cloneVNode(vnodes[0], attrs)];
        }
        return vnodes;
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return h(slot);
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
function defineKeyedFunctionFactory(factory) {
  const placeholder = function() {
    throw new Error(`[nuxt] \`${factory.name}\` is a compiler macro and cannot be called at runtime.`);
  };
  return Object.defineProperty(placeholder, "__nuxt_factory", {
    enumerable: false,
    get: () => factory.factory
  });
}
const createUseAsyncData = defineKeyedFunctionFactory({
  name: "createUseAsyncData",
  factory(options = {}) {
    function useAsyncData2(...args) {
      const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
      if (_isAutoKeyNeeded(args[0], args[1])) {
        args.unshift(autoKey);
      }
      let [_key, _handler, opts = {}] = args;
      const key = computed(() => toValue(_key));
      if (typeof key.value !== "string") {
        throw new TypeError("[nuxt] [useAsyncData] key must be a string.");
      }
      if (typeof _handler !== "function") {
        throw new TypeError("[nuxt] [useAsyncData] handler must be a function.");
      }
      const shouldFactoryOptionsOverride = typeof options === "function";
      const nuxtApp = useNuxtApp();
      const factoryOptions = shouldFactoryOptionsOverride ? options(opts) : options;
      if (!shouldFactoryOptionsOverride) {
        for (const key2 in factoryOptions) {
          if (factoryOptions[key2] === void 0) {
            continue;
          }
          if (opts[key2] !== void 0) {
            continue;
          }
          opts[key2] = factoryOptions[key2];
        }
      }
      opts.server ??= true;
      opts.default ??= getDefault;
      opts.getCachedData ??= getDefaultCachedData;
      opts.lazy ??= false;
      opts.immediate ??= true;
      opts.deep ??= asyncDataDefaults.deep;
      opts.dedupe ??= "cancel";
      if (shouldFactoryOptionsOverride) {
        for (const key2 in factoryOptions) {
          if (factoryOptions[key2] === void 0) {
            continue;
          }
          opts[key2] = factoryOptions[key2];
        }
      }
      nuxtApp._asyncData[key.value];
      function createInitialFetch() {
        const initialFetchOptions = { cause: "initial", dedupe: opts.dedupe };
        if (!nuxtApp._asyncData[key.value]?._init) {
          initialFetchOptions.cachedData = opts.getCachedData(key.value, nuxtApp, { cause: "initial" });
          nuxtApp._asyncData[key.value] = buildAsyncData(nuxtApp, key.value, _handler, opts, initialFetchOptions.cachedData);
        }
        return () => nuxtApp._asyncData[key.value].execute(initialFetchOptions);
      }
      const initialFetch = createInitialFetch();
      const asyncData = nuxtApp._asyncData[key.value];
      asyncData._deps++;
      const fetchOnServer = opts.server !== false && nuxtApp.payload.serverRendered;
      if (fetchOnServer && opts.immediate) {
        const promise = initialFetch();
        if (getCurrentInstance()) {
          onServerPrefetch(() => promise);
        } else {
          nuxtApp.hook("app:created", async () => {
            await promise;
          });
        }
      }
      const asyncReturn = {
        data: writableComputedRef(() => nuxtApp._asyncData[key.value]?.data),
        pending: writableComputedRef(() => nuxtApp._asyncData[key.value]?.pending),
        status: writableComputedRef(() => nuxtApp._asyncData[key.value]?.status),
        error: writableComputedRef(() => nuxtApp._asyncData[key.value]?.error),
        refresh: (...args2) => {
          if (!nuxtApp._asyncData[key.value]?._init) {
            const initialFetch2 = createInitialFetch();
            return initialFetch2();
          }
          return nuxtApp._asyncData[key.value].execute(...args2);
        },
        execute: (...args2) => asyncReturn.refresh(...args2),
        clear: () => {
          const entry = nuxtApp._asyncData[key.value];
          if (entry?._abortController) {
            try {
              entry._abortController.abort(new DOMException("AsyncData aborted by user.", "AbortError"));
            } finally {
              entry._abortController = void 0;
            }
          }
          clearNuxtDataByKey(nuxtApp, key.value);
        }
      };
      const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key.value]).then(() => asyncReturn);
      Object.assign(asyncDataPromise, asyncReturn);
      Object.defineProperties(asyncDataPromise, {
        then: { enumerable: true, value: asyncDataPromise.then.bind(asyncDataPromise) },
        catch: { enumerable: true, value: asyncDataPromise.catch.bind(asyncDataPromise) },
        finally: { enumerable: true, value: asyncDataPromise.finally.bind(asyncDataPromise) }
      });
      return asyncDataPromise;
    }
    return useAsyncData2;
  }
});
const useAsyncData = createUseAsyncData.__nuxt_factory();
createUseAsyncData.__nuxt_factory({
  lazy: true,
  // @ts-expect-error private property
  _functionName: "useLazyAsyncData"
});
function writableComputedRef(getter) {
  return computed({
    get() {
      return getter()?.value;
    },
    set(value) {
      const ref2 = getter();
      if (ref2) {
        ref2.value = value;
      }
    }
  });
}
function _isAutoKeyNeeded(keyOrFetcher, fetcher) {
  if (typeof keyOrFetcher === "string") {
    return false;
  }
  if (typeof keyOrFetcher === "object" && keyOrFetcher !== null) {
    return false;
  }
  if (typeof keyOrFetcher === "function" && typeof fetcher === "function") {
    return false;
  }
  return true;
}
function clearNuxtDataByKey(nuxtApp, key) {
  if (key in nuxtApp.payload.data) {
    nuxtApp.payload.data[key] = void 0;
  }
  if (key in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key] = void 0;
  }
  if (nuxtApp._asyncData[key]) {
    nuxtApp._asyncData[key].data.value = unref(nuxtApp._asyncData[key]._default());
    nuxtApp._asyncData[key].error.value = void 0;
    nuxtApp._asyncData[key].status.value = "idle";
  }
  if (key in nuxtApp._asyncDataPromises) {
    nuxtApp._asyncDataPromises[key] = void 0;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function buildAsyncData(nuxtApp, key, _handler, options, initialCachedData) {
  nuxtApp.payload._errors[key] ??= void 0;
  const hasCustomGetCachedData = options.getCachedData !== getDefaultCachedData;
  const handler = _handler ;
  const _ref = options.deep ? ref : shallowRef;
  const hasCachedData = initialCachedData !== void 0;
  const unsubRefreshAsyncData = nuxtApp.hook("app:data:refresh", async (keys) => {
    if (!keys || keys.includes(key)) {
      await asyncData.execute({ cause: "refresh:hook" });
    }
  });
  const asyncData = {
    data: _ref(hasCachedData ? initialCachedData : options.default()),
    pending: computed(() => asyncData.status.value === "pending"),
    error: toRef(nuxtApp.payload._errors, key),
    status: shallowRef("idle"),
    execute: (...args) => {
      const [_opts, newValue = void 0] = args;
      const opts = _opts && newValue === void 0 && typeof _opts === "object" ? _opts : {};
      if (nuxtApp._asyncDataPromises[key]) {
        if ((opts.dedupe ?? options.dedupe) === "defer") {
          return nuxtApp._asyncDataPromises[key];
        }
      }
      {
        const cachedData = "cachedData" in opts ? opts.cachedData : options.getCachedData(key, nuxtApp, { cause: opts.cause ?? "refresh:manual" });
        if (cachedData !== void 0) {
          nuxtApp.payload.data[key] = asyncData.data.value = cachedData;
          asyncData.error.value = void 0;
          asyncData.status.value = "success";
          return Promise.resolve(cachedData);
        }
      }
      if (asyncData._abortController) {
        asyncData._abortController.abort(new DOMException("AsyncData request cancelled by deduplication", "AbortError"));
      }
      asyncData._abortController = new AbortController();
      asyncData.status.value = "pending";
      const cleanupController = new AbortController();
      const promise = new Promise(
        (resolve, reject) => {
          try {
            const timeout = opts.timeout ?? options.timeout;
            const mergedSignal = mergeAbortSignals([asyncData._abortController?.signal, opts?.signal], cleanupController.signal, timeout);
            if (mergedSignal.aborted) {
              const reason = mergedSignal.reason;
              reject(reason instanceof Error ? reason : new DOMException(String(reason ?? "Aborted"), "AbortError"));
              return;
            }
            mergedSignal.addEventListener("abort", () => {
              const reason = mergedSignal.reason;
              reject(reason instanceof Error ? reason : new DOMException(String(reason ?? "Aborted"), "AbortError"));
            }, { once: true, signal: cleanupController.signal });
            return Promise.resolve(handler(nuxtApp, { signal: mergedSignal })).then(resolve, reject);
          } catch (err) {
            reject(err);
          }
        }
      ).then(async (_result) => {
        let result = _result;
        if (options.transform) {
          result = await options.transform(_result);
        }
        if (options.pick) {
          result = pick(result, options.pick);
        }
        nuxtApp.payload.data[key] = result;
        asyncData.data.value = result;
        asyncData.error.value = void 0;
        asyncData.status.value = "success";
      }).catch((error) => {
        if (nuxtApp._asyncDataPromises[key] && nuxtApp._asyncDataPromises[key] !== promise) {
          return nuxtApp._asyncDataPromises[key];
        }
        if (asyncData._abortController?.signal.aborted) {
          return nuxtApp._asyncDataPromises[key];
        }
        if (typeof DOMException !== "undefined" && error instanceof DOMException && error.name === "AbortError") {
          asyncData.status.value = "idle";
          return nuxtApp._asyncDataPromises[key];
        }
        asyncData.error.value = createError(error);
        asyncData.data.value = unref(options.default());
        asyncData.status.value = "error";
      }).finally(() => {
        cleanupController.abort();
        delete nuxtApp._asyncDataPromises[key];
      });
      nuxtApp._asyncDataPromises[key] = promise;
      return nuxtApp._asyncDataPromises[key];
    },
    _execute: debounce((...args) => asyncData.execute(...args), 0, { leading: true }),
    _default: options.default,
    _deps: 0,
    _init: true,
    _hash: void 0,
    _off: () => {
      unsubRefreshAsyncData();
      if (nuxtApp._asyncData[key]?._init) {
        nuxtApp._asyncData[key]._init = false;
      }
      if (!hasCustomGetCachedData) {
        nextTick(() => {
          if (!nuxtApp._asyncData[key]?._init) {
            clearNuxtDataByKey(nuxtApp, key);
            asyncData.execute = () => Promise.resolve();
          }
        });
      }
    }
  };
  return asyncData;
}
const getDefault = () => void 0;
const getDefaultCachedData = (key, nuxtApp, ctx) => {
  if (nuxtApp.isHydrating) {
    return nuxtApp.payload.data[key];
  }
  if (ctx.cause !== "refresh:manual" && ctx.cause !== "refresh:hook") {
    return nuxtApp.static.data[key];
  }
};
function mergeAbortSignals(signals, cleanupSignal, timeout) {
  const list = signals.filter((s) => !!s);
  if (typeof timeout === "number" && timeout >= 0) {
    const timeoutSignal = AbortSignal.timeout?.(timeout);
    if (timeoutSignal) {
      list.push(timeoutSignal);
    }
  }
  if (AbortSignal.any) {
    return AbortSignal.any(list);
  }
  const controller = new AbortController();
  for (const sig of list) {
    if (sig.aborted) {
      const reason = sig.reason ?? new DOMException("Aborted", "AbortError");
      try {
        controller.abort(reason);
      } catch {
        controller.abort();
      }
      return controller.signal;
    }
  }
  const onAbort = () => {
    const abortedSignal = list.find((s) => s.aborted);
    const reason = abortedSignal?.reason ?? new DOMException("Aborted", "AbortError");
    try {
      controller.abort(reason);
    } catch {
      controller.abort();
    }
  };
  for (const sig of list) {
    sig.addEventListener?.("abort", onAbort, { once: true, signal: cleanupSignal });
  }
  return controller.signal;
}
function useRequestEvent(nuxtApp) {
  nuxtApp ||= useNuxtApp();
  return nuxtApp.ssrContext?.event;
}
function useRequestFetch() {
  return useRequestEvent()?.$fetch || globalThis.$fetch;
}
function generateOptionSegments(opts) {
  const segments = [
    toValue(opts.method)?.toUpperCase() || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.query || opts.params]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  if (opts.body) {
    const value = toValue(opts.body);
    if (!value) {
      segments.push(hash(value));
    } else if (value instanceof ArrayBuffer) {
      segments.push(hash(Object.fromEntries([...new Uint8Array(value).entries()].map(([k, v]) => [k, v.toString()]))));
    } else if (value instanceof FormData) {
      const obj = {};
      for (const entry of value.entries()) {
        const [key, val] = entry;
        obj[key] = val instanceof File ? val.name : val;
      }
      segments.push(hash(obj));
    } else if (isPlainObject(value)) {
      segments.push(hash(reactive(value)));
    } else {
      try {
        segments.push(hash(value));
      } catch {
        console.warn("[useFetch] Failed to hash body", value);
      }
    }
  }
  return segments;
}
const createUseFetch = defineKeyedFunctionFactory({
  name: "createUseFetch",
  factory(options = {}) {
    function useFetch2(request, arg1, arg2) {
      const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
      const _request = computed(() => toValue(request));
      const key = computed(() => toValue(opts.key) || "$f" + hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]));
      if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
        throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
      }
      const factoryOptions = typeof options === "function" ? options(opts) : options;
      const {
        server,
        lazy,
        default: defaultFn,
        transform,
        pick: pick2,
        watch: watchSources,
        immediate,
        getCachedData,
        deep,
        dedupe,
        timeout,
        ...fetchOptions
      } = {
        ...typeof options === "function" ? {} : factoryOptions,
        ...opts,
        ...typeof options === "function" ? factoryOptions : {}
      };
      const _fetchOptions = reactive({
        ...fetchDefaults,
        ...fetchOptions,
        cache: typeof fetchOptions.cache === "boolean" ? void 0 : fetchOptions.cache
      });
      const _asyncDataOptions = {
        server,
        lazy,
        default: defaultFn,
        transform,
        pick: pick2,
        immediate,
        getCachedData,
        deep,
        dedupe,
        timeout,
        watch: watchSources === false ? [] : [...watchSources || [], _fetchOptions]
      };
      const asyncData = useAsyncData(watchSources === false ? key.value : key, (_, { signal }) => {
        let _$fetch = opts.$fetch || globalThis.$fetch;
        if (!opts.$fetch) {
          const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
          if (isLocalFetch) {
            _$fetch = useRequestFetch();
          }
        }
        return _$fetch(_request.value, { signal, ..._fetchOptions });
      }, _asyncDataOptions);
      return asyncData;
    }
    return useFetch2;
  }
});
createUseFetch.__nuxt_factory();
createUseFetch.__nuxt_factory({
  lazy: true,
  // @ts-expect-error private property
  _functionName: "useLazyFetch"
});
const weddings = [{ "id": "naji-ayisha", "slug": "naji-ayisha", "theme": "sketchy-modern", "details": { "groom": { "name": "Naji", "fullName": "Naji Ibn Muhammed", "parents": "Mr. & Mrs. Muhammed" }, "bride": { "name": "Ayisha", "fullName": "Ayisha Ziyad", "parents": "Mr. & Mrs. Ziyad" }, "date": "2026-12-20T10:00:00Z", "venue": "All Seasons", "address": "ul. Bolshaya Morskaya, 34", "events": [{ "title": "NIKAH", "time": "3:00 PM", "date": "20 December 2026", "location": "Bride's Residence", "icon": "calendar" }, { "title": "RECEPTION", "time": "6:00 PM", "date": "20 December 2026", "location": "Groom's Residence", "icon": "reception" }, { "title": "THE VENUE", "time": "Kothiyoth House", "date": "Nandi Bazar, Calicut", "location": "", "address": "Nandi Bazar, Calicut", "mapLink": "https://www.google.com/maps?q=11.483810424804688,75.64095306396484&z=17&hl=en", "icon": "pin" }], "quote": { "text": "And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them...", "source": "Surah Ar-Rum" }, "music": "/assets/wedding_music.mp3", "heroImage": "/assets/786.jpg" } }, { "id": "kirill-ulyana", "slug": "kirill-ulyana", "theme": "sketchy-modern", "details": { "groom": { "name": "Кирилл" }, "bride": { "name": "Ульяна" }, "date": "2024-07-05T18:00:00Z", "venue": 'Ресторан "All Seasons"', "address": "ул. Большая Морская, 34", "quote": { "text": "ЛЮБОВЬ - ЭТО...", "source": "СОВМЕСТНЫЕ МЕЧТЫ" } } }];
const weddingsData = {
  weddings
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "MandalaDecoration",
  __ssrInlineRender: true,
  setup(__props) {
    const rotations8 = [0, 45, 90, 135, 180, 225, 270, 315];
    const rotations12 = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
    const rotations16 = [0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5];
    const outerDots = Array.from({ length: 24 }, (_, i) => {
      const angle = i / 24 * 2 * Math.PI;
      return {
        cx: Math.round((100 + 94 * Math.cos(angle)) * 1e4) / 1e4,
        cy: Math.round((100 + 94 * Math.sin(angle)) * 1e4) / 1e4
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        viewBox: "-40 -40 280 280",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true"
      }, _attrs))}><g fill="none" stroke="white" stroke-width="0.5"><polygon points="100,88 112,100 100,112 88,100" fill="white" fill-opacity="0.15" stroke-width="0.8"></polygon><polygon points="100,82 118,100 100,118 82,100" stroke-width="0.8"></polygon><polygon points="91.5,91.5 108.5,91.5 108.5,108.5 91.5,108.5" stroke-width="0.8"></polygon><circle cx="100" cy="100" r="3" fill="white" fill-opacity="0.3"></circle><!--[-->`);
      ssrRenderList(rotations8, (r) => {
        _push(`<g${ssrRenderAttr("transform", `rotate(${r} 100 100)`)}><path d="M92 75 Q92 65 100 58 Q108 65 108 75" stroke-width="0.8" fill="none"></path><circle cx="100" cy="58" r="1.5" fill="white" fill-opacity="0.4"></circle></g>`);
      });
      _push(`<!--]--><circle cx="100" cy="100" r="35" stroke-width="0.3"></circle><!--[-->`);
      ssrRenderList(rotations16, (r) => {
        _push(`<g${ssrRenderAttr("transform", `rotate(${r} 100 100)`)}><path d="M100 65 L102 58 L100 52 L98 58 Z" fill="white" fill-opacity="0.1" stroke-width="0.5"></path></g>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(rotations8, (r) => {
        _push(`<g${ssrRenderAttr("transform", `rotate(${r} 100 100)`)}><path d="M88 48 Q88 32 100 22 Q112 32 112 48" stroke-width="0.6"></path><path d="M92 46 Q92 35 100 28 Q108 35 108 46" stroke-width="0.3" stroke-opacity="0.6"></path><path d="M100 22 Q103 18 100 14 Q97 18 100 22" fill="white" fill-opacity="0.2" stroke-width="0.4"></path></g>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(rotations8, (r) => {
        _push(`<g${ssrRenderAttr("transform", `rotate(${r} 100 100)`)}><circle cx="100" cy="40" r="4" stroke-width="0.5"></circle><circle cx="100" cy="40" r="2" fill="white" fill-opacity="0.15"></circle></g>`);
      });
      _push(`<!--]--><circle cx="100" cy="100" r="55" stroke-width="0.3" stroke-dasharray="2 2"></circle><circle cx="100" cy="100" r="60" stroke-width="0.5"></circle><!--[-->`);
      ssrRenderList(rotations8, (r) => {
        _push(`<g${ssrRenderAttr("transform", `rotate(${r} 100 100)`)}><path d="M100 40 L105 28 L100 15 L95 28 Z" stroke-width="0.4" fill="white" fill-opacity="0.05"></path><path d="M95 28 Q85 25 78 35" stroke-width="0.4" stroke-opacity="0.5"></path><path d="M105 28 Q115 25 122 35" stroke-width="0.4" stroke-opacity="0.5"></path></g>`);
      });
      _push(`<!--]--><circle cx="100" cy="100" r="75" stroke-width="0.3"></circle><circle cx="100" cy="100" r="80" stroke-width="0.8"></circle><!--[-->`);
      ssrRenderList(rotations12, (r) => {
        _push(`<g${ssrRenderAttr("transform", `rotate(${r} 100 100)`)}><path d="M100 18 A 4 4 0 1 1 100 10 A 3 3 0 1 0 100 18" fill="white" fill-opacity="0.2" stroke-width="0.3"></path><polygon points="100,6 100.8,8 103,8 101.2,9.2 101.8,11.5 100,10 98.2,11.5 98.8,9.2 97,8 99.2,8" fill="white" fill-opacity="0.3" stroke-width="0"></polygon></g>`);
      });
      _push(`<!--]--><circle cx="100" cy="100" r="90" stroke-width="0.3" stroke-dasharray="1 3"></circle><circle cx="100" cy="100" r="98" stroke-width="0.2"></circle><!--[-->`);
      ssrRenderList(unref(outerDots), (d, i) => {
        _push(`<circle${ssrRenderAttr("cx", d.cx)}${ssrRenderAttr("cy", d.cy)} r="1" fill="white" fill-opacity="0.5"></circle>`);
      });
      _push(`<!--]--></g></svg>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MandalaDecoration.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const MandalaDecoration = Object.assign(_sfc_main$a, { __name: "MandalaDecoration" });
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "IntroScreen",
  __ssrInlineRender: true,
  props: {
    hidden: { type: Boolean },
    brideName: {},
    groomName: {},
    basmala: {},
    subtitle: {}
  },
  emits: ["open"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "introScreen",
        class: `fixed inset-0 flex items-center justify-center p-6 z-[100] bg-[#001f11] transition-[opacity,visibility] duration-[1000ms] ease-in-out overflow-hidden ${__props.hidden ? "opacity-0 invisible pointer-events-none" : "opacity-100 visible pointer-events-auto"}`
      }, _attrs))}><div class="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-[#E6B836] to-transparent shadow-[0_0_15px_2px_rgba(230,184,54,0.5)] -translate-x-1/2 z-0 opacity-60 pointer-events-none" aria-hidden="true"></div>`);
      _push(ssrRenderComponent(MandalaDecoration, { class: "absolute top-0 left-0 w-[clamp(200px,60vw,500px)] h-[clamp(200px,60vw,500px)] md:w-[clamp(150px,30vw,400px)] md:h-[clamp(150px,30vw,400px)] text-white opacity-70 pointer-events-none z-0 -translate-x-1/2 -translate-y-[45%]" }, null, _parent));
      _push(ssrRenderComponent(MandalaDecoration, { class: "absolute bottom-0 right-0 w-[clamp(200px,60vw,500px)] h-[clamp(200px,60vw,500px)] md:w-[clamp(150px,30vw,400px)] md:h-[clamp(150px,30vw,400px)] text-white opacity-70 pointer-events-none z-0 translate-x-1/2 translate-y-[45%]" }, null, _parent));
      _push(`<div class="w-full max-w-2xl text-center z-[1] flex flex-col items-center justify-center"><div class="flex flex-col items-center mb-8"><p class="m-0 text-[1.5rem] md:text-[1.8rem] text-[#E6B836] leading-[1.2] font-arabic">${ssrInterpolate(__props.basmala)}</p></div><h1 class="mt-8 mb-0 flex flex-col items-center gap-0 leading-[1.1]"><span class="text-[60px] md:text-[90px] text-white font-normal font-script">${ssrInterpolate(__props.groomName)}</span><div class="flex items-center justify-center gap-4 w-full my-4"><div class="flex-none w-12 h-px bg-[#E6B836] opacity-40"></div><span class="text-[1.2rem] font-normal text-[#E6B836] font-serif">&amp;</span><div class="flex-none w-12 h-px bg-[#E6B836] opacity-40"></div></div><span class="text-[60px] md:text-[90px] text-white font-normal font-script">${ssrInterpolate(__props.brideName)}</span></h1><p class="mt-12 mb-0 text-white tracking-[0.25em] uppercase text-[0.9rem] opacity-50 font-serif">${ssrInterpolate(__props.subtitle)}</p><div class="relative flex flex-col items-center mt-12 gap-6"><button id="openInviteBtn" class="relative w-16 h-16 md:w-20 md:h-20 border-none rounded-full bg-[#E6B836] flex items-center justify-center cursor-pointer transition-all duration-500 hover:scale-110 hover:bg-[#f2db94] animate-[pulse-ring_1s_infinite] shadow-[0_4px_15px_rgba(0,0,0,0.3)]" aria-label="Open invitation"><svg class="w-6 h-6 md:w-8 md:h-8 text-[#001f11]" viewBox="0 0 24 24" aria-hidden="true" focusable="false" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></button><span class="text-[#E6B836] tracking-[0.15em] uppercase text-[0.8rem] font-serif animate-[blink_2s_infinite]">Open Invitation</span></div></div></section>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/IntroScreen.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const IntroScreen = Object.assign(_sfc_main$9, { __name: "IntroScreen" });
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "HeroSection",
  __ssrInlineRender: true,
  props: {
    brideName: {},
    groomName: {},
    dateTimeLocal: {},
    heroImageUrl: {},
    basmala: {},
    tagline: {}
  },
  setup(__props) {
    const props = __props;
    const formattedDate = computed(() => formatDateParts(props.dateTimeLocal));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "reveal relative min-h-[100svh] flex items-center justify-center overflow-visible" }, _attrs))}><div class="absolute inset-0 w-full h-full overflow-hidden"><div class="absolute inset-[clamp(1rem,1.3vw,2rem)] border border-[#E6B836]/20 z-[5] pointer-events-none before:content-[&#39;&#39;] before:absolute before:top-[-2px] before:left-[-2px] before:w-8 before:h-8 before:border-t-2 before:border-l-2 before:border-[#E6B836] after:content-[&#39;&#39;] after:absolute after:bottom-[-2px] after:right-[-2px] after:w-8 after:h-8 after:border-b-2 after:border-r-2 after:border-[#E6B836]"><div class="absolute inset-0 before:content-[&#39;&#39;] before:absolute before:top-[-2px] before:right-[-2px] before:w-8 before:h-8 before:border-t-2 before:border-r-2 before:border-[#E6B836] after:content-[&#39;&#39;] after:absolute after:bottom-[-2px] after:left-[-2px] after:w-8 after:h-8 after:border-b-2 after:border-l-2 after:border-[#E6B836]"></div></div><img${ssrRenderAttr("src", __props.heroImageUrl)} alt="Wedding couple" class="hero-image parallax absolute inset-0 w-full h-full object-cover object-center scale-[1.05] grayscale opacity-25" decoding="async"><div class="absolute inset-0 bg-gradient-to-b from-[#001f11]/70 via-[#001f11]/50 to-[#001f11] opacity-80"></div><div class="relative z-[2] text-center w-full px-4 flex flex-col items-center justify-center h-full"><p class="text-[clamp(1.2rem,2.5vw,1.8rem)] text-[#E6B836] mb-8 font-arabic">${ssrInterpolate(__props.basmala)}</p><p class="m-0 mb-8 uppercase tracking-[0.3em] text-[clamp(0.7rem,1.5vw,0.9rem)] text-white opacity-80 font-serif">${ssrInterpolate(__props.tagline)}</p><div class="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 my-8"><span class="text-[clamp(4rem,12vw,8rem)] text-white leading-none [text-shadow:0_4px_20px_rgba(0,0,0,0.5)] font-script">${ssrInterpolate(unref(getFirstName)(__props.groomName))}</span><span class="text-[clamp(1.5rem,3vw,2.5rem)] text-[#E6B836] font-serif">&amp;</span><span class="text-[clamp(4rem,12vw,8rem)] text-white leading-none [text-shadow:0_4px_20px_rgba(0,0,0,0.5)] font-script">${ssrInterpolate(unref(getFirstName)(__props.brideName))}</span></div><div class="flex items-center justify-center gap-4 md:gap-8 my-8 text-[#E6B836] bg-[#003219]/10 backdrop-blur-[2px] border border-[#E6B836]/15 py-4 px-6 md:px-12 font-serif max-w-[calc(100%-2rem)] mx-auto"><div class="flex flex-col items-center line-height-[1.2]"><span class="text-[clamp(1.8rem,4vw,2.5rem)] font-semibold">${ssrInterpolate(formattedDate.value.day)}</span><span class="text-[clamp(0.7rem,1.5vw,0.9rem)] tracking-[0.2em]">${ssrInterpolate(formattedDate.value.month)}</span></div><div class="w-px h-10 bg-[#E6B836] opacity-50"></div><div class="flex flex-col items-center line-height-[1.2]"><span class="text-[clamp(1.8rem,4vw,2.5rem)] font-semibold">${ssrInterpolate(formattedDate.value.year)}</span><span class="text-[clamp(0.7rem,1.5vw,0.9rem)] tracking-[0.2em]">${ssrInterpolate(formattedDate.value.weekday)}</span></div></div><div class="scroll-down absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 color-[#E6B836] text-[0.75rem] tracking-[0.2em] opacity-80 animate-bounce font-serif"><p>Scroll Down</p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></div></div></div></header>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const HeroSection = Object.assign(_sfc_main$8, { __name: "HeroSection" });
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "QuoteSection",
  __ssrInlineRender: true,
  props: {
    text: {},
    source: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "reveal relative py-20 md:py-32 px-6 text-center flex items-center justify-center min-h-[70vh] overflow-hidden bg-gradient-to-br from-[#002a18] via-[#001f11] to-[#002a18]",
        id: "quote-section"
      }, _attrs))}><div class="absolute inset-[clamp(1.5rem,4vw,3rem)] border border-accent/15 z-0 pointer-events-none"></div><div class="max-w-[800px] relative z-[1]"><blockquote class="m-0 text-[clamp(1.4rem,3.5vw,2.2rem)] leading-[1.5] text-accent uppercase font-serif">${ssrInterpolate(__props.text)}</blockquote><div class="flex items-center justify-center gap-4 mt-8 text-accent text-[0.9rem] tracking-[0.2em] uppercase"><span class="flex-none w-10 h-px bg-accent opacity-50"></span><p>${ssrInterpolate(__props.source)}</p><span class="flex-none w-10 h-px bg-accent opacity-50"></span></div></div><div class="absolute bottom-[-15%] right-[-15%] w-[clamp(300px,50vw,500px)] md:w-[clamp(200px,30vw,350px)] text-accent/20 pointer-events-none animate-[spin_40s_linear_infinite] z-0 hidden md:block" aria-hidden="true">`);
      _push(ssrRenderComponent(MandalaDecoration, { class: "w-full h-full" }, null, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/QuoteSection.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const QuoteSection = Object.assign(_sfc_main$7, { __name: "QuoteSection" });
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "CoupleSection",
  __ssrInlineRender: true,
  props: {
    groomName: {},
    groomDetailsLine: {},
    brideName: {},
    brideDetailsLine: {},
    heading: {},
    subheading: {}
  },
  setup(__props) {
    const props = __props;
    const groomFirst = computed(() => props.groomName.trim().split(/\s+/)[0]);
    const groomRest = computed(() => props.groomName.trim().split(/\s+/).slice(1));
    const brideFirst = computed(() => props.brideName.trim().split(/\s+/)[0]);
    const brideRest = computed(() => props.brideName.trim().split(/\s+/).slice(1));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "reveal py-8 px-4 pb-[clamp(4rem,8vw,6rem)] max-w-[1100px] mx-auto text-center",
        id: "couple"
      }, _attrs))}><div class="mb-16"><h2 class="text-[clamp(3rem,7vw,5rem)] text-text m-0 leading-none font-script">${ssrInterpolate(__props.heading)}</h2><div class="flex items-center justify-center gap-6 mt-4 text-accent text-[clamp(0.7rem,1.5vw,0.9rem)] tracking-[0.2em] uppercase font-serif"><span class="flex-none w-[60px] h-px bg-accent opacity-40"></span><p>${ssrInterpolate(__props.subheading)}</p><span class="flex-none w-[60px] h-px bg-accent opacity-40"></span></div></div><div class="flex flex-col lg:flex-row justify-center items-stretch gap-12 lg:gap-8 relative"><article class="flex-1 max-w-[400px] flex flex-col items-center mx-auto"><div class="w-full text-center"><p class="text-accent text-[0.8rem] tracking-[0.25em] m-0 mb-4 font-serif">• THE GROOM</p><h4 class="text-[clamp(1.8rem,3vw,2.4rem)] text-text m-0 mb-2 leading-[1.2] font-serif">${ssrInterpolate(groomFirst.value)} `);
      if (groomRest.value.length > 0) {
        _push(`<!--[--><br> ${ssrInterpolate(groomRest.value.join(" "))}<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</h4><p class="text-muted text-[0.95rem] m-0 font-body italic">${ssrInterpolate(__props.groomDetailsLine)}</p></div></article><div class="flex items-center justify-center px-4 md:px-0 max-lg:-my-4 z-[3]"><div class="flex items-center justify-center text-[1.5rem] md:text-[3rem] text-accent bg-bg z-[2] font-script">&amp;</div></div><article class="flex-1 max-w-[400px] flex flex-col items-center mx-auto"><div class="w-full text-center"><p class="text-accent text-[0.8rem] tracking-[0.25em] m-0 mb-4 font-serif">THE BRIDE •</p><h4 class="text-[clamp(1.8rem,3vw,2.4rem)] text-text m-0 mb-2 leading-[1.2] font-serif">${ssrInterpolate(brideFirst.value)} `);
      if (brideRest.value.length > 0) {
        _push(`<!--[--><br> ${ssrInterpolate(brideRest.value.join(" "))}<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</h4><p class="text-muted text-[0.95rem] m-0 font-body italic">${ssrInterpolate(__props.brideDetailsLine)}</p></div></article></div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CoupleSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const CoupleSection = Object.assign(_sfc_main$6, { __name: "CoupleSection" });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "CountdownSection",
  __ssrInlineRender: true,
  props: {
    dateTimeLocal: {},
    heading: {},
    subheading: {}
  },
  setup(__props) {
    const props = __props;
    const time = useCountdown(props.dateTimeLocal);
    const formattedDate = computed(() => formatDateParts(props.dateTimeLocal));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "reveal py-[clamp(3rem,6vw,5rem)] px-4 max-w-[1000px] mx-auto text-center",
        id: "date"
      }, _attrs))}><h3 class="font-serif text-[clamp(2rem,4vw,3rem)] text-accent m-0 mb-4 tracking-[0.1em]">${ssrInterpolate(__props.heading)}</h3><div class="w-[60px] h-0.5 bg-accent mx-auto mb-12 opacity-50"></div><div class="bg-card rounded-[20px] p-[clamp(2rem,5vw,4rem)] shadow-2xl"><p class="font-serif tracking-widest text-accent text-sm mb-4">${ssrInterpolate(__props.subheading)}</p><div class="flex items-center justify-center gap-8 text-text mb-12"><div class="text-[clamp(4rem,8vw,6rem)] leading-none font-serif">${ssrInterpolate(formattedDate.value.day)}</div><div class="w-px h-20 bg-text opacity-30"></div><div class="flex flex-col items-start text-accent font-serif"><span class="text-[clamp(2rem,4vw,3.5rem)] leading-none tracking-[0.1em]">${ssrInterpolate(formattedDate.value.month)}</span><span class="text-[clamp(0.9rem,1.5vw,1.2rem)] tracking-[0.25em] mt-2 text-text opacity-80 font-serif">${ssrInterpolate(formattedDate.value.year)} • ${ssrInterpolate(formattedDate.value.weekday)}</span></div></div><div id="countdown" class="flex items-center justify-center gap-[clamp(0.2rem,2vw,1.5rem)]" aria-live="polite"><div class="border border-accent/30 rounded-lg p-[clamp(0.5rem,1.5vw,1rem)] min-w-[clamp(50px,15vw,100px)] bg-black/10"><strong id="days" class="block text-[clamp(1.5rem,3vw,2.5rem)] text-text leading-[1.2] font-normal font-serif">${ssrInterpolate(unref(time).days)}</strong><span class="block text-[clamp(0.6rem,1vw,0.8rem)] text-accent tracking-[0.15em] mt-1 font-serif">DAYS</span></div><span class="text-[clamp(1.5rem,2vw,2rem)] text-accent opacity-50 -mt-4 sm:-mt-6 lg:-mt-8">:</span><div class="border border-accent/30 rounded-lg p-[clamp(0.5rem,1.5vw,1rem)] min-w-[clamp(50px,15vw,100px)] bg-black/10"><strong id="hours" class="block text-[clamp(1.5rem,3vw,2.5rem)] text-text leading-[1.2] font-normal font-serif">${ssrInterpolate(unref(time).hours)}</strong><span class="block text-[clamp(0.6rem,1vw,0.8rem)] text-accent tracking-[0.15em] mt-1 font-serif">HOURS</span></div><span class="text-[clamp(1.5rem,2vw,2rem)] text-accent opacity-50 -mt-4 sm:-mt-6 lg:-mt-8">:</span><div class="border border-accent/30 rounded-lg p-[clamp(0.5rem,1.5vw,1rem)] min-w-[clamp(50px,15vw,100px)] bg-black/10"><strong id="minutes" class="block text-[clamp(1.5rem,3vw,2.5rem)] text-text leading-[1.2] font-normal font-serif">${ssrInterpolate(unref(time).minutes)}</strong><span class="block text-[clamp(0.6rem,1vw,0.8rem)] text-accent tracking-[0.15em] mt-1 font-serif">MINS</span></div><span class="text-[clamp(1.5rem,2vw,2rem)] text-accent opacity-50 -mt-4 sm:-mt-6 lg:-mt-8">:</span><div class="border border-accent/30 rounded-lg p-[clamp(0.5rem,1.5vw,1rem)] min-w-[clamp(50px,15vw,100px)] bg-black/10"><strong id="seconds" class="block text-[clamp(1.5rem,3vw,2.5rem)] text-text leading-[1.2] font-normal font-serif">${ssrInterpolate(unref(time).seconds)}</strong><span class="block text-[clamp(0.6rem,1vw,0.8rem)] text-accent tracking-[0.15em] mt-1 font-serif">SECS</span></div></div></div>`);
      if (unref(time).arrived) {
        _push(`<p id="countdownNote" class="mt-8 text-accent text-[1.2rem] font-serif"> The wedding day has arrived. Welcome to our celebration. </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CountdownSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const CountdownSection = Object.assign(_sfc_main$5, { __name: "CountdownSection" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DetailsSection",
  __ssrInlineRender: true,
  props: {
    ceremonyTitle: {},
    ceremonyTime: {},
    ceremonyDateText: {},
    ceremonyLocationName: {},
    receptionTitle: {},
    receptionTime: {},
    receptionDateText: {},
    receptionLocationName: {},
    venueTitle: {},
    venueName: {},
    venueAddress: {},
    venueMapUrl: {},
    venueCtaLabel: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "reveal py-[clamp(3rem,6vw,5rem)] px-4 max-w-[1200px] mx-auto",
        id: "details"
      }, _attrs))}><div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-md md:max-w-none mx-auto"><article class="border border-accent/20 bg-bg py-12 px-6 text-center flex flex-col items-center shadow-2xl relative rounded-t-[9999px] rounded-b-xl transition-all duration-300 hover:border-accent/40"><div class="w-[50px] h-[50px] border border-accent rotate-45 flex items-center justify-center mb-10" aria-hidden="true"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" fill="none" class="-rotate-45 text-accent"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></div><h5 class="text-2xl text-text m-0 mb-4 tracking-[0.1em] font-serif">${ssrInterpolate(__props.ceremonyTitle)}</h5><div class="w-10 h-px bg-accent mx-auto mb-6 opacity-50"></div><p class="text-[1.2rem] m-0 mb-2 font-serif text-accent">${ssrInterpolate(__props.ceremonyTime)}</p><p class="m-0.5 text-[0.95rem] opacity-80 text-[#FAFAF2] font-body">${ssrInterpolate(__props.ceremonyDateText)}</p><p class="m-0.5 text-[0.95rem] opacity-80 text-[#FAFAF2] font-body">${ssrInterpolate(__props.ceremonyLocationName)}</p></article><article class="border border-accent/20 bg-bg py-12 px-6 text-center flex flex-col items-center shadow-2xl relative rounded-t-[9999px] rounded-b-xl transition-all duration-300 hover:border-accent/40"><div class="w-[50px] h-[50px] border border-accent rotate-45 flex items-center justify-center mb-10" aria-hidden="true"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" fill="none" class="-rotate-45 text-accent"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></div><h5 class="text-2xl text-text m-0 mb-4 tracking-[0.1em] font-serif">${ssrInterpolate(__props.receptionTitle)}</h5><div class="w-10 h-px bg-accent mx-auto mb-6 opacity-50"></div><p class="text-[1.2rem] m-0 mb-2 font-serif text-accent">${ssrInterpolate(__props.receptionTime)}</p><p class="m-0.5 text-[0.95rem] opacity-80 text-[#FAFAF2] font-body">${ssrInterpolate(__props.receptionDateText)}</p><p class="m-0.5 text-[0.95rem] opacity-80 text-[#FAFAF2] font-body">${ssrInterpolate(__props.receptionLocationName)}</p></article><article class="border border-accent/20 bg-bg py-12 px-6 text-center flex flex-col items-center shadow-2xl relative rounded-t-[9999px] rounded-b-xl transition-all duration-300 hover:border-accent/40"><div class="w-[50px] h-[50px] border border-accent rotate-45 flex items-center justify-center mb-10" aria-hidden="true"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" fill="none" class="-rotate-45 text-accent"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></div><h5 class="text-2xl text-text m-0 mb-4 tracking-[0.1em] font-serif">${ssrInterpolate(__props.venueTitle)}</h5><div class="w-10 h-px bg-accent mx-auto mb-6 opacity-50"></div><p class="text-[1.2rem] m-0 mb-2 font-serif text-accent">${ssrInterpolate(__props.venueName)}</p><p class="m-0.5 text-[0.95rem] opacity-80 text-[#FAFAF2] font-body mb-4">${ssrInterpolate(__props.venueAddress)}</p><a${ssrRenderAttr("href", __props.venueMapUrl)} target="_blank" rel="noopener noreferrer" class="inline-block mt-6 border border-accent text-accent no-underline py-3 px-6 text-[0.8rem] tracking-[0.2em] transition-all duration-300 rounded hover:bg-accent hover:text-bg font-serif">${ssrInterpolate(__props.venueCtaLabel)}</a></article></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DetailsSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const DetailsSection = Object.assign(_sfc_main$4, { __name: "DetailsSection" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  props: {
    blessingArabic: {},
    namesLine: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "reveal text-center py-16 px-4 bg-bg border-t border-accent/10" }, _attrs))}><p class="font-arabic text-accent text-2xl mb-2">${ssrInterpolate(__props.blessingArabic)}</p><p class="font-serif tracking-widest text-sm text-[FAFAF2] opacity-80 mt-2">${ssrInterpolate(__props.namesLine)}</p></footer>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Footer = Object.assign(_sfc_main$3, { __name: "Footer" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ElegantForest",
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
      (void 0).documentElement.classList.add("is-open");
      (void 0).body.classList.add("is-open");
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
      _push(`<div${ssrRenderAttrs(_attrs)}><canvas id="sparkleCanvas" class="fixed inset-0 w-full h-full pointer-events-none z-0" aria-hidden="true"></canvas>`);
      _push(ssrRenderComponent(IntroScreen, {
        onOpen: handleOpen,
        hidden: isOpen.value,
        data: __props.data,
        brideName: __props.data.couple.bride.name,
        groomName: __props.data.couple.groom.name,
        basmala: __props.data.wedding.basmala || "",
        subtitle: __props.data.wedding.tagline
      }, null, _parent));
      _push(`<main id="invitation" class="${ssrRenderClass(`relative z-[1] w-full transition-opacity duration-[1500ms] ease-in-out ${isOpen.value ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`)}"${ssrRenderAttr("aria-hidden", !isOpen.value)}>`);
      _push(ssrRenderComponent(HeroSection, {
        data: __props.data,
        brideName: __props.data.couple.bride.name,
        groomName: __props.data.couple.groom.name,
        dateTimeLocal: __props.data.wedding.dateTimeLocal,
        heroImageUrl: __props.data.wedding.heroImageUrl,
        basmala: __props.data.wedding.basmala || "",
        tagline: __props.data.wedding.tagline
      }, null, _parent));
      _push(ssrRenderComponent(QuoteSection, {
        text: __props.data.quote.text,
        source: __props.data.quote.source
      }, null, _parent));
      _push(ssrRenderComponent(CoupleSection, {
        groomName: __props.data.couple.groom.name,
        groomDetailsLine: __props.data.couple.groom.detailsLine,
        brideName: __props.data.couple.bride.name,
        brideDetailsLine: __props.data.couple.bride.detailsLine,
        heading: __props.data.wedding.tagline,
        subheading: __props.data.wedding.tagline
      }, null, _parent));
      _push(ssrRenderComponent(CountdownSection, {
        dateTimeLocal: __props.data.wedding.dateTimeLocal,
        heading: "Save The Date",
        subheading: "Join Us"
      }, null, _parent));
      _push(ssrRenderComponent(DetailsSection, {
        ceremonyTitle: "Nikah",
        ceremonyTime: __props.data.events.ceremony.time,
        ceremonyDateText: "Wedding Day",
        ceremonyLocationName: __props.data.events.ceremony.locationName,
        receptionTitle: "Reception",
        receptionTime: __props.data.events.reception.time,
        receptionDateText: "Wedding Day",
        receptionLocationName: __props.data.events.reception.locationName,
        venueTitle: "Venue",
        venueName: __props.data.events.venue.name,
        venueAddress: __props.data.events.venue.address,
        venueMapUrl: __props.data.events.venue.mapUrl,
        venueCtaLabel: "View Map"
      }, null, _parent));
      _push(ssrRenderComponent(Footer, {
        blessingArabic: "Barakallahu lakuma",
        namesLine: `${__props.data.couple.groom.name} & ${__props.data.couple.bride.name}`
      }, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(MusicToggle, {
        playing: musicPlaying.value,
        onToggle: handleMusicToggle,
        hidden: !musicVisible.value
      }, null, _parent));
      _push(`<audio id="bgMusic" preload="metadata" loop><source${ssrRenderAttr("src", __props.data.details?.music || "/assets/wedding_music.mp3")} type="audio/mpeg"></audio></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Themes/ElegantForest.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ElegantForestTheme = Object.assign(_sfc_main$2, { __name: "ThemesElegantForest" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SketchyModern",
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
      (void 0).documentElement.classList.add("theme-sketchy", "is-open");
      (void 0).body.classList.add("theme-sketchy", "is-open");
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
      _push(`<audio preload="metadata" loop><source${ssrRenderAttr("src", __props.data.details?.music || "/assets/wedding_music.mp3")} type="audio/mpeg"></audio></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Themes/SketchyModern.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SketchyModernTheme = Object.assign(_sfc_main$1, { __name: "ThemesSketchyModern" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const slug = route.params.slug;
    const wedding = computed(() => {
      return weddingsData.weddings.find((w) => w.slug === slug);
    });
    if (!wedding.value) {
      throw createError({ statusCode: 404, statusMessage: "Page Not Found", fatal: true });
    }
    const currentComponent = computed(() => {
      switch (wedding.value?.theme) {
        case "elegant-forest":
          return ElegantForestTheme;
        case "sketchy-modern":
          return SketchyModernTheme;
        default:
          return ElegantForestTheme;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (wedding.value) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(currentComponent.value), mergeProps({ data: wedding.value }, _attrs), null), _parent);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-klRqTvu1.mjs.map
