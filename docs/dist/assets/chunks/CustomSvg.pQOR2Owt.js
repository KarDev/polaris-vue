import { d as defineComponent, D as resolveComponent, o as openBlock, b as createBlock } from "./framework.1qnja6qJ.js";
const customSvg = "<svg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='M10.707 17.707l5-5a.999.999 0 1 0-1.414-1.414L11 14.586V3a1 1 0 1 0-2 0v11.586l-3.293-3.293a.999.999 0 1 0-1.414 1.414l5 5a.999.999 0 0 0 1.414 0' /></svg>";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CustomSvg",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_Icon = resolveComponent("Icon");
      return openBlock(), createBlock(_component_Icon, { source: customSvg });
    };
  }
});
export {
  _sfc_main as default
};
