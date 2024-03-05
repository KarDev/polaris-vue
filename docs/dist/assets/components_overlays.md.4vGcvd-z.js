import { M as MarkdownIt } from "./chunks/theme.HRElI9Oh.js";
import { o as openBlock, c as createElementBlock, m as createBaseVNode, a as createTextVNode, t as toDisplayString, I as createVNode, w as withCtx, p as unref, D as resolveComponent } from "./chunks/framework.1qnja6qJ.js";
const _hoisted_1 = {
  id: "frontmatter-title",
  tabindex: "-1"
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("a", {
  class: "header-anchor",
  href: "#frontmatter-title",
  "aria-label": 'Permalink to "{{ $frontmatter.title }}"'
}, "​", -1);
const _hoisted_3 = ["innerHTML"];
const __pageData = JSON.parse('{"title":"Overlays","description":"","frontmatter":{"outline":false,"aside":false,"prev":false,"next":false,"title":"Overlays","description":"Display contextual elements on top of the main admin interface that provide additional information or functionality."},"headers":[],"params":{"category":"overlays","name":"Overlays"},"relativePath":"components/overlays.md","filePath":"category/overlays.md"}');
const __default__ = { name: "components/overlays.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    const md = new MarkdownIt();
    return (_ctx, _cache) => {
      const _component_Lede = resolveComponent("Lede");
      const _component_ListComponents = resolveComponent("ListComponents");
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("h1", _hoisted_1, [
          createTextVNode(toDisplayString(_ctx.$frontmatter.title) + " ", 1),
          _hoisted_2
        ]),
        createVNode(_component_Lede, null, {
          default: withCtx(() => [
            createBaseVNode("div", {
              innerHTML: unref(md).render(_ctx.$frontmatter.description)
            }, null, 8, _hoisted_3)
          ]),
          _: 1
        }),
        createVNode(_component_ListComponents)
      ]);
    };
  }
});
export {
  __pageData,
  _sfc_main as default
};