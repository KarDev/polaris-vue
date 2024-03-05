import { _ as _export_sfc, D as resolveComponent, o as openBlock, b as createBlock } from "./framework.1qnja6qJ.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_PageActions = resolveComponent("PageActions");
  return openBlock(), createBlock(_component_PageActions, {
    primaryAction: { content: "Save" },
    secondaryActions: [{ content: "Delete", destructive: true }]
  });
}
const Default = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Default as default
};
