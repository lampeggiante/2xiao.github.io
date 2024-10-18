import{_ as l,r as o,o as i,c as d,a as n,b as s,d as a,w as e,e as r}from"./app-5VBZs9Uu.js";const u={},k={id:"剑指-offer-03-数组中重复的数字",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#剑指-offer-03-数组中重复的数字","aria-hidden":"true"},"#",-1),m={href:"https://leetcode.cn/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"数组",-1),f=n("code",null,"哈希表",-1),v=n("code",null,"排序",-1),b={href:"https://leetcode.cn/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"LeetCode",-1),w=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>在一个长度为 <code>n</code> 的数组里的所有数字都在 <code>0</code> 到 <code>n-1</code> 的范围内。数组中某些数字是重复的，但不知道有几个数字是重复的，也不知道每个数字重复几次，请找出数组中任意一个重复的数字。</p><p>例如，如果输入长度为 <code>7</code> 的数组<code>[2,3,1,0,2,5,3]</code>，那么对应的输出是 <code>2</code> 或者 <code>3</code>。存在不合法的输入的话输出<code>-1</code>.</p><p><strong>Example:</strong></p><blockquote><p>输入：[2, 5, 3, 0, 5, 0]</p><p>输出：0 或 5</p></blockquote><p><strong>Constraints:</strong></p><ul><li>数据范围：<code>0 ≤ n ≤ 10000</code></li><li>进阶：时间复杂度 <code>O(n)</code> ，空间复杂度 <code>O(n)</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>使用哈希表，遍历数组，如果 <code>map</code> 中不存在该元素则保存它，如果 <code>map</code> 中已经存在该元素，立即返回。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">documents</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findRepeatDocument</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">documents</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> documents<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> i<span class="token punctuation">;</span>
		map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function y(x,z){const c=o("ExternalLinkIcon"),p=o("font"),t=o("RouterLink");return i(),d("div",null,[n("h1",k,[h,s(),n("a",m,[s("剑指 Offer 03. 数组中重复的数字"),a(c)])]),n("p",null,[s("🟢 "),a(p,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),a(t,{to:"/leetcode-js/outline/tag/array.html"},{default:e(()=>[_]),_:1}),s(),a(t,{to:"/leetcode-js/outline/tag/hash-table.html"},{default:e(()=>[f]),_:1}),s(),a(t,{to:"/leetcode-js/outline/tag/sorting.html"},{default:e(()=>[v]),_:1}),s("  🔗 "),n("a",b,[g,a(c)])]),w])}const E=l(u,[["render",y],["__file","jz_offer_03_1.html.vue"]]);export{E as default};
