import{_ as i,r as c,o as d,c as r,a as t,b as n,d as e,w as s,f as u,e as p}from"./app-5VBZs9Uu.js";const _={},h={id:"_136-只出现一次的数字",tabindex:"-1"},m=t("a",{class:"header-anchor",href:"#_136-只出现一次的数字","aria-hidden":"true"},"#",-1),f={href:"https://leetcode.com/problems/single-number",target:"_blank",rel:"noopener noreferrer"},g=t("code",null,"位运算",-1),b=t("code",null,"数组",-1),k={href:"https://leetcode.com/problems/single-number",target:"_blank",rel:"noopener noreferrer"},y=t("code",null,"LeetCode",-1),x=p(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a <strong>non-empty</strong> array of integers <code>nums</code>, every element appears <em>twice</em> except for one. Find that single one.</p><p>You must implement a solution with a linear runtime complexity and use only constant extra space.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [2,2,1]</p><p>Output: 1</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [4,1,2,1,2]</p><p>Output: 4</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [1]</p><p>Output: 1</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 3 * 10^4</code></li><li><code>-3 * 10^4 &lt;= nums[i] &lt;= 3 * 10^4</code></li><li>Each element in the array appears twice except for one element which appears only once.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。要求算法时间复杂度是线性的，并且不使用额外的辅助空间。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>可以使用位运算，利用异或运算的性质：任何一个数字异或它自己都等于 <code>0</code> (<code>x ^ x = 0</code>)；</li><li>从头遍历数组，依次异或数组中的每一个数字；</li><li>数组中除了某个元素只出现一次以外，其余每个元素均出现两次，因为出现两次的数字在异或中会被抵消掉，所以最终得到的结果就是那个只出现一次的数字。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，其中 <code>n</code> 为 <code>nums</code> 数组的长度，需要遍历数组中的所有整数。</li><li><strong>空间复杂度</strong>: <code>O(1)</code>，使用了常数级别的辅助空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">singleNumber</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res <span class="token operator">=</span> res <span class="token operator">^</span> i<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,20),v=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),j=t("td",{style:{"text-align":"center"}},"137",-1),w={style:{"text-align":"left"}},E={href:"https://leetcode.com/problems/single-number-ii",target:"_blank",rel:"noopener noreferrer"},I={style:{"text-align":"center"}},q={style:{"text-align":"left"}},N=t("code",null,"位运算",-1),O=t("code",null,"数组",-1),C={style:{"text-align":"left"}},L=t("td",{style:{"text-align":"center"}},"260",-1),V={style:{"text-align":"left"}},B={href:"https://leetcode.com/problems/single-number-iii",target:"_blank",rel:"noopener noreferrer"},M=t("td",{style:{"text-align":"center"}},null,-1),R={style:{"text-align":"left"}},F=t("code",null,"位运算",-1),G=t("code",null,"数组",-1),S={style:{"text-align":"left"}},T=t("td",{style:{"text-align":"center"}},"268",-1),X={style:{"text-align":"left"}},Y={href:"https://leetcode.com/problems/missing-number",target:"_blank",rel:"noopener noreferrer"},z={style:{"text-align":"center"}},A={style:{"text-align":"left"}},D=t("code",null,"位运算",-1),H=t("code",null,"数组",-1),J=t("code",null,"哈希表",-1),K=t("code",null,"3+",-1),P={style:{"text-align":"left"}},Q=t("td",{style:{"text-align":"center"}},"287",-1),U={style:{"text-align":"left"}},W={href:"https://leetcode.com/problems/find-the-duplicate-number",target:"_blank",rel:"noopener noreferrer"},Z={style:{"text-align":"center"}},$={style:{"text-align":"left"}},tt=t("code",null,"位运算",-1),et=t("code",null,"数组",-1),nt=t("code",null,"双指针",-1),st=t("code",null,"1+",-1),ot={style:{"text-align":"left"}},lt=t("td",{style:{"text-align":"center"}},"389",-1),at={style:{"text-align":"left"}},ct={href:"https://leetcode.com/problems/find-the-difference",target:"_blank",rel:"noopener noreferrer"},it=t("td",{style:{"text-align":"center"}},null,-1),dt={style:{"text-align":"left"}},rt=t("code",null,"位运算",-1),ut=t("code",null,"哈希表",-1),pt=t("code",null,"字符串",-1),_t=t("code",null,"1+",-1),ht={style:{"text-align":"left"}},mt=t("td",{style:{"text-align":"center"}},"3158",-1),ft={style:{"text-align":"left"}},gt={href:"https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice",target:"_blank",rel:"noopener noreferrer"},bt=t("td",{style:{"text-align":"center"}},null,-1),kt={style:{"text-align":"left"}},yt=t("code",null,"位运算",-1),xt=t("code",null,"数组",-1),vt=t("code",null,"哈希表",-1),jt={style:{"text-align":"left"}};function wt(Et,It){const l=c("ExternalLinkIcon"),a=c("font"),o=c("RouterLink");return d(),r("div",null,[t("h1",h,[m,n(),t("a",f,[n("136. 只出现一次的数字"),e(l)])]),t("p",null,[n("🟢 "),e(a,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),e(o,{to:"/leetcode-js/outline/tag/bit-manipulation.html"},{default:s(()=>[g]),_:1}),n(),e(o,{to:"/leetcode-js/outline/tag/array.html"},{default:s(()=>[b]),_:1}),n("  🔗 "),t("a",k,[y,e(l)])]),x,u(" prettier-ignore "),t("table",null,[v,t("tbody",null,[t("tr",null,[j,t("td",w,[t("a",E,[n("只出现一次的数字 II"),e(l)])]),t("td",I,[e(o,{to:"/leetcode-js/problem/0137.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",q,[e(o,{to:"/leetcode-js/outline/tag/bit-manipulation.html"},{default:s(()=>[N]),_:1}),n(),e(o,{to:"/leetcode-js/outline/tag/array.html"},{default:s(()=>[O]),_:1})]),t("td",C,[e(a,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[L,t("td",V,[t("a",B,[n("只出现一次的数字 III"),e(l)])]),M,t("td",R,[e(o,{to:"/leetcode-js/outline/tag/bit-manipulation.html"},{default:s(()=>[F]),_:1}),n(),e(o,{to:"/leetcode-js/outline/tag/array.html"},{default:s(()=>[G]),_:1})]),t("td",S,[e(a,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[T,t("td",X,[t("a",Y,[n("丢失的数字"),e(l)])]),t("td",z,[e(o,{to:"/leetcode-js/problem/0268.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",A,[e(o,{to:"/leetcode-js/outline/tag/bit-manipulation.html"},{default:s(()=>[D]),_:1}),n(),e(o,{to:"/leetcode-js/outline/tag/array.html"},{default:s(()=>[H]),_:1}),n(),e(o,{to:"/leetcode-js/outline/tag/hash-table.html"},{default:s(()=>[J]),_:1}),n(),K]),t("td",P,[e(a,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1})])]),t("tr",null,[Q,t("td",U,[t("a",W,[n("寻找重复数"),e(l)])]),t("td",Z,[e(o,{to:"/leetcode-js/problem/0287.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",$,[e(o,{to:"/leetcode-js/outline/tag/bit-manipulation.html"},{default:s(()=>[tt]),_:1}),n(),e(o,{to:"/leetcode-js/outline/tag/array.html"},{default:s(()=>[et]),_:1}),n(),e(o,{to:"/leetcode-js/outline/tag/two-pointers.html"},{default:s(()=>[nt]),_:1}),n(),st]),t("td",ot,[e(a,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[lt,t("td",at,[t("a",ct,[n("找不同"),e(l)])]),it,t("td",dt,[e(o,{to:"/leetcode-js/outline/tag/bit-manipulation.html"},{default:s(()=>[rt]),_:1}),n(),e(o,{to:"/leetcode-js/outline/tag/hash-table.html"},{default:s(()=>[ut]),_:1}),n(),e(o,{to:"/leetcode-js/outline/tag/string.html"},{default:s(()=>[pt]),_:1}),n(),_t]),t("td",ht,[e(a,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1})])]),t("tr",null,[mt,t("td",ft,[t("a",gt,[n("求出出现两次数字的 XOR 值"),e(l)])]),bt,t("td",kt,[e(o,{to:"/leetcode-js/outline/tag/bit-manipulation.html"},{default:s(()=>[yt]),_:1}),n(),e(o,{to:"/leetcode-js/outline/tag/array.html"},{default:s(()=>[xt]),_:1}),n(),e(o,{to:"/leetcode-js/outline/tag/hash-table.html"},{default:s(()=>[vt]),_:1})]),t("td",jt,[e(a,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1})])])])])])}const Nt=i(_,[["render",wt],["__file","0136.html.vue"]]);export{Nt as default};
