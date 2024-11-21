import{_ as n,o as s,c as a,e}from"./app-b4s7f53x.js";const t={},o=e(`<h1 id="和-的区别" tabindex="-1"><a class="header-anchor" href="#和-的区别" aria-hidden="true">#</a> == 和 === 的区别？</h1><p>它们的主要区别在于是否进行<strong>类型转换</strong>。</p><h2 id="一、相等操作符" tabindex="-1"><a class="header-anchor" href="#一、相等操作符" aria-hidden="true">#</a> 一、相等操作符（<code>==</code>）</h2><p>相等操作符 <code>==</code> 会在比较前进行<strong>类型转换</strong>，然后判断值是否相等。</p><h3 id="类型转换规则" tabindex="-1"><a class="header-anchor" href="#类型转换规则" aria-hidden="true">#</a> 类型转换规则</h3><ol><li><p><strong>布尔值</strong>会转换为数字：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token boolean">true</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>字符串</strong>会转换为数字：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;55&#39;</span> <span class="token operator">==</span> <span class="token number">55</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>对象</strong>会调用 <code>valueOf()</code> 或 <code>toString()</code> 方法，取得其原始值再比较：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token function-variable function">valueOf</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong><code>null</code> 和 <code>undefined</code> 相等</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong><code>NaN</code> 与任何值都不相等，包括自身</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">NaN</span> <span class="token operator">==</span> <span class="token number">NaN</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>两个引用类型比较时</strong>，仅当它们指向同一对象时才相等：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1 <span class="token operator">==</span> obj2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="总结规则" tabindex="-1"><a class="header-anchor" href="#总结规则" aria-hidden="true">#</a> 总结规则</h3><table><thead><tr><th>操作数类型</th><th>比较结果</th></tr></thead><tbody><tr><td>简单类型</td><td>字符串和布尔值会转换为数字再比较</td></tr><tr><td>简单 vs 引用类型</td><td>引用类型转换为原始值（调用 <code>valueOf</code> 或 <code>toString</code>）</td></tr><tr><td>引用类型</td><td>比较是否指向同一对象</td></tr><tr><td><code>null</code> vs <code>undefined</code></td><td>总是相等</td></tr><tr><td>包含 <code>NaN</code></td><td>总是返回 <code>false</code></td></tr></tbody></table><h2 id="二、全等操作符" tabindex="-1"><a class="header-anchor" href="#二、全等操作符" aria-hidden="true">#</a> 二、全等操作符（<code>===</code>）</h2><p>全等操作符 <code>===</code> 不会进行类型转换，要求<strong>值和类型完全相同</strong>。</p><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例：</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;55&#39;</span> <span class="token operator">===</span> <span class="token number">55</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false，类型不同</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">55</span> <span class="token operator">===</span> <span class="token number">55</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true，值和类型相同</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">undefined</span> <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="null-和-undefined-的全等比较" tabindex="-1"><a class="header-anchor" href="#null-和-undefined-的全等比较" aria-hidden="true">#</a> <code>null</code> 和 <code>undefined</code> 的全等比较</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false，类型不同</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">undefined</span> <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、-和-的区别" tabindex="-1"><a class="header-anchor" href="#三、-和-的区别" aria-hidden="true">#</a> 三、<code>==</code> 和 <code>===</code> 的区别</h2><table><thead><tr><th>操作符</th><th>类型转换</th><th>比较结果</th></tr></thead><tbody><tr><td><code>==</code></td><td>是</td><td>值相等即可，进行类型转换</td></tr><tr><td><code>===</code></td><td>否</td><td>值和类型都必须相等</td></tr></tbody></table><h3 id="特殊情况对比" tabindex="-1"><a class="header-anchor" href="#特殊情况对比" aria-hidden="true">#</a> 特殊情况对比</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;55&#39;</span> <span class="token operator">==</span> <span class="token number">55</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;55&#39;</span> <span class="token operator">===</span> <span class="token number">55</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、使用建议" tabindex="-1"><a class="header-anchor" href="#四、使用建议" aria-hidden="true">#</a> 四、使用建议</h2><ol><li><strong>推荐优先使用 <code>===</code>：</strong><br> 避免隐式类型转换导致的难以预料的结果。</li><li><strong>特殊场景下使用 <code>==</code>：</strong><br> 在比较对象属性是否为 <code>null</code> 或 <code>undefined</code> 时，<code>==</code> 更加简洁：<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span>x <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;属性 x 为 null 或 undefined&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>等价于：<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span>x <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> obj<span class="token punctuation">.</span>x <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;属性 x 为 null 或 undefined&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="五、隐式转换可能带来的问题" tabindex="-1"><a class="header-anchor" href="#五、隐式转换可能带来的问题" aria-hidden="true">#</a> 五、隐式转换可能带来的问题</h2><p>使用 <code>==</code> 时，类型转换可能会产生不直观的结果：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span> <span class="token operator">==</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">0</span> <span class="token operator">==</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token boolean">false</span> <span class="token operator">==</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">==</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39; \\t\\r\\n&#39;</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),p=[o];function c(l,i){return s(),a("div",null,p)}const d=n(t,[["render",c],["__file","equal.html.vue"]]);export{d as default};
