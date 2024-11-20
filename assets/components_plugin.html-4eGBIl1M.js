import{_ as n,o as a,c as s,e}from"./app-aDvcZtpj.js";const t={},p=e(`<h1 id="vue-中组件和插件有什么区别" tabindex="-1"><a class="header-anchor" href="#vue-中组件和插件有什么区别" aria-hidden="true">#</a> Vue 中组件和插件有什么区别？</h1><figure><img src="https://static.vue-js.com/683475e0-3acc-11eb-ab90-d9ae814b240d.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h2 id="一、组件是什么" tabindex="-1"><a class="header-anchor" href="#一、组件是什么" aria-hidden="true">#</a> 一、组件是什么</h2><p>回顾以前对组件的定义：</p><p>组件就是把图形、非图形的各种逻辑均抽象为一个统一的概念（组件）来实现开发的模式，在<code>Vue</code>中每一个<code>.vue</code>文件都可以视为一个组件</p><p>组件的优势</p><ul><li><p>降低整个系统的耦合度，在保持接口不变的情况下，我们可以替换不同的组件快速完成需求，例如输入框，可以替换为日历、时间、范围等组件作具体的实现</p></li><li><p>调试方便，由于整个系统是通过组件组合起来的，在出现问题的时候，可以用排除法直接移除组件，或者根据报错的组件快速定位问题，之所以能够快速定位，是因为每个组件之间低耦合，职责单一，所以逻辑会比分析整个系统要简单</p></li><li><p>提高可维护性，由于每个组件的职责单一，并且组件在系统中是被复用的，所以对代码进行优化可获得系统的整体升级</p></li></ul><h2 id="二、插件是什么" tabindex="-1"><a class="header-anchor" href="#二、插件是什么" aria-hidden="true">#</a> 二、插件是什么</h2><p>插件通常用来为 <code>Vue</code> 添加全局功能。插件的功能范围没有严格的限制——一般有下面几种：</p><ul><li>添加全局方法或者属性。如: <code>vue-custom-element</code></li><li>添加全局资源：指令/过滤器/过渡等。如 <code>vue-touch</code></li><li>通过全局混入来添加一些组件选项。如<code> vue-router</code></li><li>添加 <code>Vue</code> 实例方法，通过把它们添加到 <code>Vue.prototype</code> 上实现。</li><li>一个库，提供自己的 <code>API</code>，同时提供上面提到的一个或多个功能。如<code> vue-router</code></li></ul><h2 id="三、两者的区别" tabindex="-1"><a class="header-anchor" href="#三、两者的区别" aria-hidden="true">#</a> 三、两者的区别</h2><p>两者的区别主要表现在以下几个方面：</p><ul><li>编写形式</li><li>注册形式</li><li>使用场景</li></ul><h3 id="编写形式" tabindex="-1"><a class="header-anchor" href="#编写形式" aria-hidden="true">#</a> 编写形式</h3><h4 id="编写组件" tabindex="-1"><a class="header-anchor" href="#编写组件" aria-hidden="true">#</a> 编写组件</h4><p>编写一个组件，可以有很多方式，我们最常见的就是<code>vue</code>单文件的这种格式，每一个<code>.vue</code>文件我们都可以看成是一个组件</p><p><code>vue</code>文件标准格式</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们还可以通过<code>template</code>属性来编写一个组件，如果组件内容多，我们可以在外部定义<code>template</code>组件内容，如果组件内容并不多，我们可直接写在<code>template</code>属性上</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template id<span class="token operator">=</span><span class="token string">&quot;testComponent&quot;</span><span class="token operator">&gt;</span>     <span class="token comment">// 组件显示的内容</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>component<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;componentA&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;#testComponent&#39;</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;component&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>  <span class="token comment">// 组件内容少可以通过这种形式</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="编写插件" tabindex="-1"><a class="header-anchor" href="#编写插件" aria-hidden="true">#</a> 编写插件</h4><p><code>vue</code>插件的实现应该暴露一个 <code>install</code> 方法。这个方法的第一个参数是 <code>Vue</code> 构造器，第二个参数是一个可选的选项对象</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>MyPlugin<span class="token punctuation">.</span><span class="token function-variable function">install</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">Vue<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1. 添加全局方法或 property</span>
  Vue<span class="token punctuation">.</span><span class="token function-variable function">myGlobalMethod</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 逻辑...</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 2. 添加全局资源</span>
  Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;my-directive&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">bind</span> <span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding<span class="token punctuation">,</span> vnode<span class="token punctuation">,</span> oldVnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 逻辑...</span>
    <span class="token punctuation">}</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 3. 注入组件选项</span>
  Vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function-variable function">created</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 逻辑...</span>
    <span class="token punctuation">}</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 4. 添加实例方法</span>
  <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$myMethod</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">methodOptions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 逻辑...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注册形式" tabindex="-1"><a class="header-anchor" href="#注册形式" aria-hidden="true">#</a> 注册形式</h3><h4 id="组件注册" tabindex="-1"><a class="header-anchor" href="#组件注册" aria-hidden="true">#</a> 组件注册</h4><p><code>vue</code>组件注册主要分为全局注册与局部注册</p><p>全局注册通过<code>Vue.component</code>方法，第一个参数为组件的名称，第二个参数为传入的配置项</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;my-component-name&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token comment">/* ... */</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>局部注册只需在用到的地方通过<code>components</code>属性注册一个组件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> component1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span> <span class="token comment">// 定义一个组件</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">components</span><span class="token operator">:</span><span class="token punctuation">{</span>
		component1   <span class="token comment">// 局部注册</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="插件注册" tabindex="-1"><a class="header-anchor" href="#插件注册" aria-hidden="true">#</a> 插件注册</h4><p>插件的注册通过<code>Vue.use()</code>的方式进行注册（安装），第一个参数为插件的名字，第二个参数是可选择的配置项</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>插件名字<span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token comment">/* ... */</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意的是：</p><p>注册插件的时候，需要在调用 <code>new Vue()</code> 启动应用之前完成</p><p><code>Vue.use</code>会自动阻止多次注册相同插件，只会注册一次</p><h3 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h3><p>具体的其实在插件是什么章节已经表述了，这里在总结一下</p><p>组件 <code>(Component)</code> 是用来构成你的 <code>App</code> 的业务模块，它的目标是 <code>App.vue</code></p><p>插件 <code>(Plugin)</code> 是用来增强你的技术栈的功能模块，它的目标是 <code>Vue</code> 本身</p><p>简单来说，插件就是指对<code>Vue</code>的功能的增强或补充</p><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2><ul><li>https://vue3js.cn/docs/zh</li></ul>`,43),o=[p];function c(i,l){return a(),s("div",null,o)}const d=n(t,[["render",c],["__file","components_plugin.html.vue"]]);export{d as default};
