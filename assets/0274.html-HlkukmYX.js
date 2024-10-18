import{_ as l,r as c,o as r,c as p,a as e,b as n,d as t,w as a,f as d,e as u}from"./app-GnK0vSxb.js";const h={},_={id:"_274-h-指数",tabindex:"-1"},k=e("a",{class:"header-anchor",href:"#_274-h-指数","aria-hidden":"true"},"#",-1),m={href:"https://leetcode.com/problems/h-index",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"数组",-1),f=e("code",null,"计数排序",-1),b=e("code",null,"排序",-1),v={href:"https://leetcode.com/problems/h-index",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"LeetCode",-1),y=e("h2",{id:"题目",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),n(" 题目")],-1),w=e("p",null,[n("Given an array of integers "),e("code",null,"citations"),n(" where "),e("code",null,"citations[i]"),n(" is the number of citations a researcher received for their "),e("code",null,"ith"),n(" paper, return "),e("em",null,"the researcher 's h-index"),n(".")],-1),q={href:"https://en.wikipedia.org/wiki/H-index",target:"_blank",rel:"noopener noreferrer"},I=e("code",null,"h",-1),E=e("code",null,"h",-1),C=e("code",null,"h",-1),L=u(`<p><strong>Example 1:</strong></p><blockquote><p>Input: citations = [3,0,6,1,5]</p><p>Output: 3</p><p>Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.</p><p>Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: citations = [1,3,1]</p><p>Output: 1</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == citations.length</code></li><li><code>1 &lt;= n &lt;= 5000</code></li><li><code>0 &lt;= citations[i] &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>citations</code> ，其中 <code>citations[i]</code> 表示研究者的第 <code>i</code> 篇论文被引用的次数。计算并返回该研究者的 <code>h</code> <strong>指数</strong>。</p><p>根据维基百科上 <code>h</code> 指数的定义：<code>h</code> 代表“高引用次数” ，一名科研人员的 <code>h</code> 指数 是指他（她）至少发表了 <code>h</code> 篇论文，并且 <strong>至少</strong> 有 <code>h</code> 篇论文被引用次数大于等于 <code>h</code> 。如果 <code>h</code> 有多种可能的值，<code>h</code> <strong>指数</strong> 是其中最大的那个。</p><p><strong>示例 1：</strong></p><blockquote><p>输入：citations = [3,0,6,1,5]</p><p>输出：3</p><p>解释：给定数组表示研究者总共有 5 篇论文，每篇论文相应的被引用了 3, 0, 6, 1, 5 次。</p><p>由于研究者有 3 篇论文每篇 至少 被引用了 3 次，其余两篇论文每篇被引用 不多于 3 次，所以她的 h 指数是 3。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p>输入：citations = [1,3,1]</p><p>输出：1</p></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>第一步：排序，将数组由大到小排序；</li><li>第二步：从左到右遍历数组，如果 <code>citations[i]&gt;i</code> 则说明至少有 <code>i+1</code> 篇论文被引用了至少 <code>i+1</code> 次；</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(nlogn)</code></li><li><strong>空间复杂度</strong>： <code>O(1)</code></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">citations</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">hIndex</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">citations</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	citations<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> b <span class="token operator">-</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>citations<span class="token punctuation">[</span>res<span class="token punctuation">]</span> <span class="token operator">&gt;</span> res<span class="token punctuation">)</span> res<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,20),N=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"left"}},"难度")])],-1),V=e("td",{style:{"text-align":"center"}},"275",-1),O={style:{"text-align":"left"}},j={href:"https://leetcode.com/problems/h-index-ii",target:"_blank",rel:"noopener noreferrer"},B={style:{"text-align":"center"}},H={style:{"text-align":"left"}},M=e("code",null,"数组",-1),R=e("code",null,"二分查找",-1),S={style:{"text-align":"left"}};function T(A,G){const o=c("ExternalLinkIcon"),i=c("font"),s=c("RouterLink");return r(),p("div",null,[e("h1",_,[k,n(),e("a",m,[n("274. H 指数"),t(o)])]),e("p",null,[n("🟠 "),t(i,{color:"#ffb800"},{default:a(()=>[n("Medium")]),_:1}),n("  🔖  "),t(s,{to:"/leetcode/outline/tag/array.html"},{default:a(()=>[g]),_:1}),n(),t(s,{to:"/leetcode/outline/tag/counting-sort.html"},{default:a(()=>[f]),_:1}),n(),t(s,{to:"/leetcode/outline/tag/sorting.html"},{default:a(()=>[b]),_:1}),n("  🔗 "),e("a",v,[x,t(o)])]),y,w,e("p",null,[n("According to the "),e("a",q,[n("definition of h-index on Wikipedia"),t(o)]),n(": The h-index is defined as the maximum value of "),I,n(" such that the given researcher has published at least "),E,n(" papers that have each been cited at least "),C,n(" times.")]),L,d(" prettier-ignore "),e("table",null,[N,e("tbody",null,[e("tr",null,[V,e("td",O,[e("a",j,[n("H 指数 II"),t(o)])]),e("td",B,[t(s,{to:"/leetcode/problem/0275.html"},{default:a(()=>[n("[✓]")]),_:1})]),e("td",H,[t(s,{to:"/leetcode/outline/tag/array.html"},{default:a(()=>[M]),_:1}),n(),t(s,{to:"/leetcode/outline/tag/binary-search.html"},{default:a(()=>[R]),_:1})]),e("td",S,[t(i,{color:"#ffb800"},{default:a(()=>[n("Medium")]),_:1})])])])])])}const z=l(h,[["render",T],["__file","0274.html.vue"]]);export{z as default};
