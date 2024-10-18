import{_ as n,o as s,c as a,e as t}from"./app-GnK0vSxb.js";const p={},e=t(`<h1 id="_15-依赖注入原理" tabindex="-1"><a class="header-anchor" href="#_15-依赖注入原理" aria-hidden="true">#</a> 15. 依赖注入原理</h1><h2 id="_1-基本使用" tabindex="-1"><a class="header-anchor" href="#_1-基本使用" aria-hidden="true">#</a> 1.基本使用</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> My <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token punctuation">{</span> name <span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> VueComponent <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;mrs erxiao&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> state<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			state<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;erxiao&#39;</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>My<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">render</span><span class="token punctuation">(</span><span class="token function">h</span><span class="token punctuation">(</span>VueComponent<span class="token punctuation">)</span><span class="token punctuation">,</span> app<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在创建实例时会采用父组件的 provides 属性</p></blockquote><p>我们需要先构建组件渲染的父子关系</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token function-variable function">patch</span> <span class="token operator">=</span> <span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> parentComponent <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">switch</span> <span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">case</span> Fragment<span class="token operator">:</span> <span class="token comment">// 无用的标签</span>
			<span class="token function">processFragment</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container<span class="token punctuation">,</span> parentComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token keyword">default</span><span class="token operator">:</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">ELEMENT</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token function">processElement</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">,</span> parentComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">COMPONENT</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token function">processComponent</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">,</span> parentComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token function-variable function">processComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">,</span> parentComponent<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>n1 <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 组件挂载的时候传入父组件</span>
		<span class="token function">mountComponent</span><span class="token punctuation">(</span>n2<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">,</span> parentComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		<span class="token comment">// 组件更新靠的是props</span>
		<span class="token function">updateComponent</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createComponentInstance</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> parent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token punctuation">{</span>
		<span class="token comment">// 组件的实例</span>
		data<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
		parent<span class="token punctuation">,</span>
		provides<span class="token operator">:</span> parent <span class="token operator">?</span> parent<span class="token punctuation">.</span>provides <span class="token operator">:</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// 创建一个provides对象</span>
		<span class="token comment">// ... 创建实例的时候标记父组件是谁</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> instance<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-provide" tabindex="-1"><a class="header-anchor" href="#_2-provide" aria-hidden="true">#</a> 2.Provide</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">provide</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>currentInstance<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> parentProvides <span class="token operator">=</span>
		currentInstance<span class="token punctuation">.</span>parent <span class="token operator">&amp;&amp;</span> currentInstance<span class="token punctuation">.</span>parent<span class="token punctuation">.</span>provides<span class="token punctuation">;</span>
	<span class="token keyword">let</span> provides <span class="token operator">=</span> currentInstance<span class="token punctuation">.</span>provides<span class="token punctuation">;</span> <span class="token comment">// 获取当前实例的provides属性</span>
	<span class="token comment">// 如果是同一个对象，就创建个新的，下次在调用provide不必重新创建</span>
	<span class="token comment">// provides(&#39;a&#39;, 1);</span>
	<span class="token comment">// provides(&#39;b&#39;, 2)</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>parentProvides <span class="token operator">===</span> provides<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		provides <span class="token operator">=</span> currentInstance<span class="token punctuation">.</span>provides <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>provides<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 创建一个新的provides来存储</span>
	<span class="token punctuation">}</span>
	provides<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-inject" tabindex="-1"><a class="header-anchor" href="#_3-inject" aria-hidden="true">#</a> 3.Inject</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">inject</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> defaultValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>currentInstance<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> provides <span class="token operator">=</span> currentInstance<span class="token punctuation">.</span>parent<span class="token punctuation">.</span>provides<span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>provides <span class="token operator">&amp;&amp;</span> key <span class="token keyword">in</span> provides<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> provides<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>arguments<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> defaultValue<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),o=[e];function c(i,u){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","15.html.vue"]]);export{r as default};
