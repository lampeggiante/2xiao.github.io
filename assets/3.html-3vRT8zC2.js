import{_ as o,o as e,c,e as i}from"./app-GnK0vSxb.js";const t={},d=i('<h1 id="_3-响应式数据核心" tabindex="-1"><a class="header-anchor" href="#_3-响应式数据核心" aria-hidden="true">#</a> 3. 响应式数据核心</h1><blockquote><p>Vue3 中使用 <code>Proxy</code> 来实现响应式数据变化。</p></blockquote><h2 id="compositionapi" tabindex="-1"><a class="header-anchor" href="#compositionapi" aria-hidden="true">#</a> CompositionAPI</h2><blockquote><p>简单的组件仍然可以采用 OptionsAPI 进行编写（但是在 Vue3 中基本不在使用），compositionAPI 在复杂的逻辑中有着明显的优势~</p></blockquote><ul><li>CompositionAPI 在用户编写复杂业务逻辑不会出现反复横跳问题</li><li>CompositionAPI 不存在<code>this</code>指向不明确问题</li><li>Composition API 对 tree-shaking 更加友好，代码也更容易压缩。</li><li>CompositionAPI 提取公共逻辑非常方便</li></ul><blockquote><p><code>reactivity</code>模块中就包含了很多我们经常使用到的<code>API</code> 例如：<code>computed</code>、<code>reactive</code>、<code>ref</code>、<code>effect</code> 等</p></blockquote>',6),a=[d];function n(s,l){return e(),c("div",null,a)}const p=o(t,[["render",n],["__file","3.html.vue"]]);export{p as default};
