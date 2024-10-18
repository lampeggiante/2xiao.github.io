import{_ as p,r as t,o as l,c,a as n,b as s,d as a,w as r,e as i}from"./app-GnK0vSxb.js";const u={},d={id:"_2727-判断对象是否为空",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#_2727-判断对象是否为空","aria-hidden":"true"},"#",-1),h={href:"https://leetcode.com/problems/is-object-empty",target:"_blank",rel:"noopener noreferrer"},b={href:"https://leetcode.com/problems/is-object-empty",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"LeetCode",-1),v=n("h2",{id:"题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),s(" 题目")],-1),_=n("p",null,"Given an object or an array, return if it is empty.",-1),y=n("ul",null,[n("li",null,"An empty object contains no key-value pairs."),n("li",null,"An empty array contains no elements.")],-1),g=n("p",null,[s("You may assume the object or array is the output of "),n("code",null,"JSON.parse"),s(".")],-1),f=n("p",null,[n("strong",null,"Example 1:")],-1),j=n("blockquote",null,[n("p",{"x:5,y:42":""},"Input: obj ="),n("p",null,"Output: false"),n("p",null,"Explanation: The object has 2 key-value pairs so it is not empty.")],-1),O=i(`<p><strong>Example 2:</strong></p><blockquote><p>Input: obj = {}</p><p>Output: true</p><p>Explanation: The object doesn&#39;t have any key-value pairs so it is empty.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: obj = [null, false, 0]</p><p>Output: false</p><p>Explanation: The array has 3 elements so it is not empty.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>obj</code> is a valid JSON object or array</li><li><code>2 &lt;= JSON.stringify(obj).length &lt;= 10^5</code></li></ul><p><strong>Can you solve it in O(1) time?</strong></p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个对象或数组，判断它是否为空。</p><ul><li>一个空对象不包含任何键值对。</li><li>一个空数组不包含任何元素。</li></ul><p>你可以假设对象或数组是通过 <code>JSON.parse</code> 解析得到的。</p><p><strong>提示：</strong></p><ul><li><code>obj</code> 是一个有效的 JSON 对象或数组</li><li><code>2 &lt;= JSON.stringify(obj).length &lt;= 10^5</code></li></ul><p><strong>你可以在 O(1) 时间复杂度内解决这个问题吗？</strong></p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>在这道题中，需要在 <strong>O(1)</strong> 时间复杂度内判断一个对象或数组是否为空。由于输入是通过 <code>JSON.parse()</code> 生成的合法 JSON 对象或数组，直接对这些数据结构进行操作。</p><p>然而，标准的 JavaScript 操作（如 <code>Object.keys()</code>）用于判断对象是否为空的复杂度通常为 <strong>O(n)</strong>，因为这些方法需要遍历对象或数组的所有属性或元素。</p><p>要实现 <strong>O(1)</strong> 时间复杂度的解法，标准 JavaScript 无法在不遍历元素的情况下实现对象或数组的快速判断。所以，在常规环境下，我们无法实现纯 <strong>O(1)</strong> 的判断操作。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code><ul><li>判断数组是否为空的时间复杂度为 <strong>O(1)</strong>，因为 <code>.length</code> 是一个常量时间操作。</li><li>判断对象是否为空的时间复杂度是 <strong>O(n)</strong>，因为 <code>Object.keys()</code> 需要遍历对象的所有属性。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了常数个变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token operator">|</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">obj</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isEmpty</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 对于数组，检查是否为空</span>
		<span class="token keyword">return</span> obj<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span> obj <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 对于对象，检查是否有 key-value 对</span>
		<span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function x(w,N){const e=t("ExternalLinkIcon"),o=t("font");return l(),c("div",null,[n("h1",d,[k,s(),n("a",h,[s("2727. 判断对象是否为空"),a(e)])]),n("p",null,[s("🟢 "),a(o,{color:"#15bd66"},{default:r(()=>[s("Easy")]),_:1}),s("  🔗 "),n("a",b,[m,a(e)])]),v,_,y,g,f,j,O])}const S=p(u,[["render",x],["__file","2727.html.vue"]]);export{S as default};
