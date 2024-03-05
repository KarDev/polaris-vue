import { _ as _export_sfc, o as openBlock, c as createElementBlock, m as createBaseVNode, a as createTextVNode, t as toDisplayString, U as createStaticVNode } from "./chunks/framework.1qnja6qJ.js";
const __pageData = JSON.parse('{"title":"Installation","description":"","frontmatter":{"title":"Installation","outline":"deep"},"headers":[],"relativePath":"documentation.md","filePath":"documentation.md"}');
const _sfc_main = { name: "documentation.md" };
const _hoisted_1 = {
  id: "frontmatter-title",
  tabindex: "-1"
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("a", {
  class: "header-anchor",
  href: "#frontmatter-title",
  "aria-label": 'Permalink to "{{ $frontmatter.title }}"'
}, "​", -1);
const _hoisted_3 = /* @__PURE__ */ createStaticVNode('<p>Polaris Vue by <a href="https://ownego.com?utm_source=polaris-vue&amp;utm_medium=referral&amp;utm_campaign=website" target="_blank" rel="noreferrer">Ownego</a> is a component library for <a href="https://vuejs.org" target="_blank" rel="noreferrer">Vue 3</a> based on <a href="https://polaris.shopify.com" target="_blank" rel="noreferrer">Shopify Polaris style guide</a>. We try to keep the package light-weight and easy to use (mostly similar with original Polaris Library).</p><p><strong>Following Shopify Polaris React version:</strong> 12.19.2.</p><h3 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h3><ul><li><a href="https://nodejs.org/" target="_blank" rel="noreferrer">Node.js</a> version 18 or higher. (<code>lts/hydrogen</code> is recommended)</li><li>Vue 3 version 3.3 or higher.</li><li><a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">VSCode</a> is recommended, along with the <a href="https://marketplace.visualstudio.com/items?itemName=Vue.volar" target="_blank" rel="noreferrer">official Vue extension</a>.</li></ul><h3 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;Setup&quot;">​</a></h3><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-guv1k" id="tab-dSmbVBG" checked="checked"><label for="tab-dSmbVBG">npm</label><input type="radio" name="group-guv1k" id="tab-yc7uKvW"><label for="tab-yc7uKvW">yarn</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @ownego/polaris-vue</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @ownego/polaris-vue</span></span></code></pre></div></div></div><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><p>You can use Polaris Vue in two ways, as a plugin or as a component library. We recommend using it as a plugin.</p><h4 id="use-as-a-plugin" tabindex="-1">Use as a plugin <a class="header-anchor" href="#use-as-a-plugin" aria-label="Permalink to &quot;Use as a plugin&quot;">​</a></h4><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-0n0V4" id="tab-3Sjiux0" checked="checked"><label for="tab-3Sjiux0">main.js</label></div><div class="blocks"><div class="language-js vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark has-diff vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { createApp } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span></span>\n<span class="line diff add"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PolarisVue </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@ownego/polaris-vue&#39;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> App </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./App.vue&#39;</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// This css import line will be deprecated once Vue 3 supports css injections.</span></span>\n<span class="line diff add"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@ownego/polaris-vue/dist/style.css&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//...</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> app</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> createApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(App)</span></span>\n<span class="line diff add"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(PolarisVue) </span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span></span></code></pre></div></div></div><h4 id="use-as-a-component-library" tabindex="-1">Use as a component library <a class="header-anchor" href="#use-as-a-component-library" aria-label="Permalink to &quot;Use as a component library&quot;">​</a></h4><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-iUXft" id="tab-VpkjkZH" checked="checked"><label for="tab-VpkjkZH">Component.vue</label></div><div class="blocks"><div class="language-vue vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { List, Icon } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@ownego/polaris-vue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></div></div><details class="details custom-block"><summary>De-duplicating Vue version</summary><p><code>PolarisVue</code>, other packages and your project may require access to the global Vue reference. So sometimes, you may get the runtime error message like:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>TypeError: Cannot read properties of null (reading &#39;isCE&#39;)</span></span>\n<span class="line"><span>renderSlot(...)</span></span>\n<span class="line"><span>...</span></span></code></pre></div><p>To avoid this, simply add <code>dedupe: [&#39;vue&#39;]</code> to your <code>vite.config.ts</code> file, like below:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  resolve: {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ...</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    dedupe: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;vue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ...</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div></details><h2 id="appprovider" tabindex="-1">AppProvider <a class="header-anchor" href="#appprovider" aria-label="Permalink to &quot;AppProvider&quot;">​</a></h2><p>The <a href="/polaris-vue/components/AppProvider">AppProvider</a> component is <strong>required</strong> to use PolarisVue. Without it, the components in your application will not function correctly. You must wrap the root (the top) of your application in the app provider component.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-JeYus" id="tab-sGAUKEV" checked="checked"><label for="tab-sGAUKEV">App.vue</label></div><div class="blocks"><div class="language-vue vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">AppProvider</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ...</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">router-view</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">AppProvider</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></div></div><h2 id="nuxt-3" tabindex="-1">Nuxt 3 <a class="header-anchor" href="#nuxt-3" aria-label="Permalink to &quot;Nuxt 3&quot;">​</a></h2><p>We have tested support for Nuxt 3 in non-SSR mode only. To use with Nuxt 3, follow the below configuration and then use the plugin in your <code>components/pages</code>.</p><h4 id="plugin" tabindex="-1">Plugin <a class="header-anchor" href="#plugin" aria-label="Permalink to &quot;Plugin&quot;">​</a></h4><p>Create a new plugin file at <code>&lt;project-root&gt;/plugins/polaris.client.ts</code> and update the content to following</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-nQZHJ" id="tab-2p4kiFO" checked="checked"><label for="tab-2p4kiFO">polaris.client.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PolarisVue </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@ownego/polaris-vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@ownego/polaris-vue/dist/style.css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineNuxtPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">nuxtApp</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  nuxtApp.vueApp.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(PolarisVue);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div></div></div><h4 id="nuxt-config" tabindex="-1">Nuxt Config <a class="header-anchor" href="#nuxt-config" aria-label="Permalink to &quot;Nuxt Config&quot;">​</a></h4><p>Update <code>&lt;project-root&gt;/nuxt.config.ts</code> to include following config values</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-UxPdF" id="tab-8BTlSmf" checked="checked"><label for="tab-8BTlSmf">nuxt.config.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineNuxtConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ...</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  build: {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    transpile: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;@ownego/polaris-vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ...</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div></div></div><h2 id="issues-contributions" tabindex="-1">Issues &amp; Contributions <a class="header-anchor" href="#issues-contributions" aria-label="Permalink to &quot;Issues &amp; Contributions&quot;">​</a></h2><p>Polaris Vue by ownego is an open source project and we are very happy to accept community contributions.</p><p>If you notice any bugs, please create issues under <a href="https://github.com/ownego/polaris-vue/issues" target="_blank" rel="noreferrer">Issues</a>. To contribute, please read <a href="/polaris-vue/contributing">Contributing</a> first.</p><p>--</p><h3 id="missing-declaration-types" tabindex="-1">Missing declaration types? <a class="header-anchor" href="#missing-declaration-types" aria-label="Permalink to &quot;Missing declaration types?&quot;">​</a></h3><p>At this moment, you should add the property <code>skipLibCheck: true</code> to <code>tsconfig.json</code> file. This will skip the check for missing declaration types.</p><p>Mostly components have been typed, but somehow if you find missing declaration types, please create an issue under <a href="https://github.com/ownego/polaris-vue/issues" target="_blank" rel="noreferrer">Issues</a>.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-AhPGK" id="tab-ToSGDV-" checked="checked"><label for="tab-ToSGDV-">tsconfig.json</label></div><div class="blocks"><div class="language-json vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;compilerOptions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;skipLibCheck&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h3 id="types-css-variables" tabindex="-1">Types &amp; CSS Variables <a class="header-anchor" href="#types-css-variables" aria-label="Permalink to &quot;Types &amp; CSS Variables&quot;">​</a></h3><p>All tokens &amp; variables are following the <a href="https://polaris.shopify.com/tokens/color" target="_blank" rel="noreferrer">Polaris Design Tokens</a>.</p><p>For example, in the <code>Box</code> component, there is <code>background?: ColorBackgroundAlias</code> property. <code>ColorBackgroundAlias</code> is a type that contains all the color tokens from Polaris (without prefix <code>--p-color</code>), similar with original Shopify Polaris React version.</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">Box</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> background</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bg-fill-success&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Success&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">Box</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="volar-vue-language-service" tabindex="-1">Volar &amp; Vue language service <a class="header-anchor" href="#volar-vue-language-service" aria-label="Permalink to &quot;Volar &amp; Vue language service&quot;">​</a></h3><p>If you are using Volar (Vue language features) plugin, you can specify global component types by configuring <code>compilerOptions.types</code> in <code>tsconfig.json</code>.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-g-KOr" id="tab--3XPeT6" checked="checked"><label for="tab--3XPeT6">tsconfig.json</label></div><div class="blocks"><div class="language-json vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;compilerOptions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;types&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;@ownego/polaris-vue/dist/volar&quot;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="license" tabindex="-1">License <a class="header-anchor" href="#license" aria-label="Permalink to &quot;License&quot;">​</a></h2><p>Code released under the <a href="https://github.com/ownego/polaris-vue/blob/master/LICENSE" target="_blank" rel="noreferrer">MIT License</a>.</p><p>Copyright © 2021 - present by <a href="https://ownego.com?utm_source=polaris-vue&amp;utm_medium=referral&amp;utm_campaign=website" target="_blank" rel="noreferrer">Ownego</a>.</p>', 42);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("h1", _hoisted_1, [
      createTextVNode(toDisplayString(_ctx.$frontmatter.title) + " ", 1),
      _hoisted_2
    ]),
    _hoisted_3
  ]);
}
const documentation = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  documentation as default
};