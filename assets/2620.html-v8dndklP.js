import{_ as c,r as l,o as r,c as i,a as e,b as t,d as n,w as a,f as d,e as p}from"./app-mvY9N9Pc.js";const u={},h={id:"_2620-计数器",tabindex:"-1"},_=e("a",{class:"header-anchor",href:"#_2620-计数器","aria-hidden":"true"},"#",-1),m={href:"https://leetcode.com/problems/counter",target:"_blank",rel:"noopener noreferrer"},g={href:"https://leetcode.com/problems/counter",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"LeetCode",-1),f=p(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer <code>n</code>, return a <code>counter</code> function. This <code>counter</code> function initially returns <code>n</code> and then returns 1 more than the previous value every subsequent time it is called (<code>n</code>, <code>n + 1</code>, <code>n + 2</code>, etc).</p><p><strong>Example 1:</strong></p><blockquote><p>Input:</p><p>n = 10</p><p>[&quot;call&quot;,&quot;call&quot;,&quot;call&quot;]</p><p>Output: [10,11,12]</p><p>Explanation: counter() = 10 // The first time counter() is called, it returns n.</p><p>counter() = 11 // Returns 1 more than the previous time.</p><p>counter() = 12 // Returns 1 more than the previous time.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input:</p><p>n = -2</p><p>[&quot;call&quot;,&quot;call&quot;,&quot;call&quot;,&quot;call&quot;,&quot;call&quot;]</p><p>Output: [-2,-1,0,1,2]</p><p>Explanation: counter() initially returns -2. Then increases after each sebsequent call.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>-1000 &lt;= n &lt;= 1000</code></li><li><code>0 &lt;= calls.length &lt;= 1000</code></li><li><code>calls[i] === &quot;call&quot;</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个整型参数 <code>n</code>，请你编写并返回一个 <code>counter</code>** ** 函数。这个 <code>counter</code>** ** 函数最初返回 <code>n</code>，每次调用它时会返回前一个值加 1 的值 ( <code>n</code> , <code>n + 1</code> , <code>n + 2</code> ，等等)。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong></p><p>n = 10</p><p>[&quot;call&quot;,&quot;call&quot;,&quot;call&quot;]</p><p><strong>输出：</strong>[10,11,12]</p><p><strong>解释：</strong></p><p>counter() = 10 // 第一次调用 counter()，返回 n。</p><p>counter() = 11 // 返回上次调用的值加 1。</p><p>counter() = 12 // 返回上次调用的值加 1。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong></p><p>n = -2</p><p>[&quot;call&quot;,&quot;call&quot;,&quot;call&quot;,&quot;call&quot;,&quot;call&quot;]</p><p><strong>输出：</strong>[-2,-1,0,1,2]</p><p><strong>解释：</strong> counter() 最初返回 -2。然后在每个后续调用后增加 1。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>-1000 &lt;= n &lt;= 1000</code></li><li><code>0 &lt;= calls.length &lt;= 1000</code></li><li><code>calls[i] === &quot;call&quot;</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这是闭包的一个典型应用。我们需要用闭包来保存 <code>n</code> 的当前值，每次调用递增后返回最新值。</p><ol><li>创建一个函数 <code>createCounter</code>，这个函数接受一个参数 <code>n</code>，即从哪个数字开始计数。</li><li>返回一个函数，该函数每次调用时递增并返回当前计数值。</li></ol><p>这道题旨在帮助理解闭包的基本概念，在闭包中，内部函数可以访问外部函数的变量并保存其状态。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，每次调用时仅进行一次数值操作。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只需要存储变量 <code>n</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> counter
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">createCounter</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> n<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,25),k=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"left"}},"难度")])],-1),v=e("td",{style:{"text-align":"center"}},"2623",-1),q={style:{"text-align":"left"}},x={href:"https://leetcode.com/problems/memoize",target:"_blank",rel:"noopener noreferrer"},y={style:{"text-align":"center"}},E={href:"https://2xiao.github.io/leetcode-js/leetcode/problem/2623",target:"_blank",rel:"noopener noreferrer"},w=e("td",{style:{"text-align":"left"}},null,-1),C={style:{"text-align":"left"}},j=e("td",{style:{"text-align":"center"}},"2629",-1),I={style:{"text-align":"left"}},N={href:"https://leetcode.com/problems/function-composition",target:"_blank",rel:"noopener noreferrer"},V={style:{"text-align":"center"}},O={href:"https://2xiao.github.io/leetcode-js/leetcode/problem/2629",target:"_blank",rel:"noopener noreferrer"},T=e("td",{style:{"text-align":"left"}},null,-1),B={style:{"text-align":"left"}},L=e("td",{style:{"text-align":"center"}},"2665",-1),R={style:{"text-align":"left"}},z={href:"https://leetcode.com/problems/counter-ii",target:"_blank",rel:"noopener noreferrer"},F={style:{"text-align":"center"}},G={href:"https://2xiao.github.io/leetcode-js/leetcode/problem/2665",target:"_blank",rel:"noopener noreferrer"},M=e("td",{style:{"text-align":"left"}},null,-1),S={style:{"text-align":"left"}};function A(D,H){const o=l("ExternalLinkIcon"),s=l("font");return r(),i("div",null,[e("h1",h,[_,t(),e("a",m,[t("2620. 计数器"),n(o)])]),e("p",null,[t("🟢 "),n(s,{color:"#15bd66"},{default:a(()=>[t("Easy")]),_:1}),t("  🔗 "),e("a",g,[b,n(o)])]),f,d(" prettier-ignore "),e("table",null,[k,e("tbody",null,[e("tr",null,[v,e("td",q,[e("a",x,[t("记忆函数"),n(o)])]),e("td",y,[e("a",E,[t("[✓]"),n(o)])]),w,e("td",C,[n(s,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1})])]),e("tr",null,[j,e("td",I,[e("a",N,[t("复合函数"),n(o)])]),e("td",V,[e("a",O,[t("[✓]"),n(o)])]),T,e("td",B,[n(s,{color:"#15bd66"},{default:a(()=>[t("Easy")]),_:1})])]),e("tr",null,[L,e("td",R,[e("a",z,[t("计数器 II"),n(o)])]),e("td",F,[e("a",G,[t("[✓]"),n(o)])]),M,e("td",S,[n(s,{color:"#15bd66"},{default:a(()=>[t("Easy")]),_:1})])])])])])}const K=c(u,[["render",A],["__file","2620.html.vue"]]);export{K as default};
