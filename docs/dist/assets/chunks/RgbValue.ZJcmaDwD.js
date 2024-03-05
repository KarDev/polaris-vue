import { d as defineComponent, h as ref, D as resolveComponent, o as openBlock, c as createElementBlock, I as createVNode, m as createBaseVNode, t as toDisplayString, F as Fragment } from "./framework.1qnja6qJ.js";
const _hoisted_1 = { style: { marginTop: "1rem" } };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RgbValue",
  setup(__props) {
    const color = ref("rgb(255, 0, 0)");
    return (_ctx, _cache) => {
      const _component_ColorPicker = resolveComponent("ColorPicker");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_ColorPicker, {
          modelValue: color.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => color.value = $event),
          output: "rgb",
          "allow-alpha": ""
        }, null, 8, ["modelValue"]),
        createBaseVNode("p", _hoisted_1, "Color value: " + toDisplayString(color.value), 1)
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
