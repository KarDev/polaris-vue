import { _ as _export_sfc, D as resolveComponent, o as openBlock, c as createElementBlock, I as createVNode, m as createBaseVNode } from "./framework.1qnja6qJ.js";
const _sfc_main = {};
const _hoisted_1 = { style: { width: "255px" } };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
function _sfc_render(_ctx, _cache) {
  const _component_ProgressBar = resolveComponent("ProgressBar");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_ProgressBar, {
      progress: 70,
      color: "primary"
    }),
    _hoisted_2,
    createVNode(_component_ProgressBar, {
      progress: 30,
      color: "success"
    })
  ]);
}
const ProgressBarColored = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  ProgressBarColored as default
};
