import{_ as r,r as o,o as i,c as u,a as n,b as s,d as a,w as e,e as c}from"./app-mvY9N9Pc.js";const d={},k={id:"剑指-offer-16-数值的整数次方",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#剑指-offer-16-数值的整数次方","aria-hidden":"true"},"#",-1),h={href:"https://leetcode.cn/problems/shu-zhi-de-zheng-shu-ci-fang-lcof",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"递归",-1),b=n("code",null,"数学",-1),v={href:"https://leetcode.cn/problems/shu-zhi-de-zheng-shu-ci-fang-lcof",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),x=c('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>实现 <code>pow(x, n)</code> ，即计算 <code>x</code> 的 <code>n</code> 次幂函数（即，<code>x^n</code>）。</p><p><strong>Example 1:</strong></p><blockquote><p>输入：x = 2.00000, n = 10</p><p>输出：1024.00000</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>输入：x = 2.10000, n = 3</p><p>输出：9.26100</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>输入：x = 2.00000, n = -2</p><p>输出：0.25000</p><p>解释：2-2 = 1/22 = 1/4 = 0.25</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>-100.0 &lt; x &lt; 100.0</code></li><li><code>-2^31 &lt;= n &lt;= 2^31-1</code></li><li><code>-10^4 &lt;= x^n &lt;= 10^4</code></li></ul>',10),g={class:"hint-container warning"},w=n("p",{class:"hint-container-title"},"注意",-1),y=c(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>用递归的方式，不断的将 <code>n</code> 二分下去，注意 <code>n</code> 的正负、奇偶。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(log n)</code>，二分法。</li><li><strong>空间复杂度</strong>: <code>O(1)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">x</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">myPow</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> x<span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		x <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">/</span> x<span class="token punctuation">;</span>
		n <span class="token operator">=</span> <span class="token operator">-</span>n<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">let</span> temp <span class="token operator">=</span> <span class="token function">myPow</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> temp <span class="token operator">*</span> temp <span class="token operator">*</span> x<span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> temp <span class="token operator">*</span> temp<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function q(z,E){const p=o("ExternalLinkIcon"),l=o("font"),t=o("RouterLink");return i(),u("div",null,[n("h1",k,[m,s(),n("a",h,[s("剑指 Offer 16. 数值的整数次方"),a(p)])]),n("p",null,[s("🟠 "),a(l,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),a(t,{to:"/leetcode/outline/tag/recursion.html"},{default:e(()=>[_]),_:1}),s(),a(t,{to:"/leetcode/outline/tag/math.html"},{default:e(()=>[b]),_:1}),s("  🔗 "),n("a",v,[f,a(p)])]),x,n("div",g,[w,n("p",null,[s("本题与 LeetCode "),a(t,{to:"/leetcode/problem/0050.html"},{default:e(()=>[s("第 50 题")]),_:1}),s(" 相同。")])]),y])}const j=r(d,[["render",q],["__file","jz_offer_16_1.html.vue"]]);export{j as default};
