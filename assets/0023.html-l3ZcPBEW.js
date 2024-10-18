import{_ as i,r as p,o as r,c as u,a as n,b as s,d as t,w as e,f as d,e as c}from"./app-mvY9N9Pc.js";const k={},h={id:"_23-合并-k-个升序链表",tabindex:"-1"},_=n("a",{class:"header-anchor",href:"#_23-合并-k-个升序链表","aria-hidden":"true"},"#",-1),m={href:"https://leetcode.com/problems/merge-k-sorted-lists",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"链表",-1),f=n("code",null,"分治",-1),v=n("code",null,"堆（优先队列）",-1),b=n("code",null,"归并排序",-1),y={href:"https://leetcode.com/problems/merge-k-sorted-lists",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=c('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an array of <code>k</code> linked-lists <code>lists</code>, each linked-list is sorted in ascending order.</p><p><em>Merge all the linked-lists into one sorted linked-list and return it.</em></p><p><strong>Example 1:</strong></p><blockquote><p>Input: lists = [[1,4,5],[1,3,4],[2,6]]</p><p>Output: [1,1,2,3,4,4,5,6]</p><p>Explanation: The linked-lists are:</p><p>[</p><p>1-&gt;4-&gt;5,</p><p>1-&gt;3-&gt;4,</p><p>2-&gt;6</p><p>]</p><p>merging them into one sorted list:</p><p>1-&gt;1-&gt;2-&gt;3-&gt;4-&gt;4-&gt;5-&gt;6</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: lists = []</p><p>Output: []</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: lists = [[]]</p><p>Output: []</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>k == lists.length</code></li><li><code>0 &lt;= k &lt;= 10^4</code></li><li><code>0 &lt;= lists[i].length &lt;= 500</code></li><li><code>-10^4 &lt;= lists[i][j] &lt;= 10^4</code></li><li><code>lists[i]</code> is sorted in <strong>ascending order</strong>.</li><li>The sum of <code>lists[i].length</code> will not exceed <code>104</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>合并 K 个有序链表</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>',14),L=c(`<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">lists</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">mergeKLists</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">lists</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> len <span class="token operator">=</span> lists<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> lists<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> medium <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>len <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> left <span class="token operator">=</span> <span class="token function">mergeKLists</span><span class="token punctuation">(</span>lists<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> medium<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> right <span class="token operator">=</span> <span class="token function">mergeKLists</span><span class="token punctuation">(</span>lists<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>medium<span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token function">mergeTwoLists</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> <span class="token function-variable function">mergeTwoLists</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> prev <span class="token operator">=</span> res<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&amp;&amp;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>left<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> right<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			prev<span class="token punctuation">.</span>next <span class="token operator">=</span> left<span class="token punctuation">;</span>
			left <span class="token operator">=</span> left<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			prev<span class="token punctuation">.</span>next <span class="token operator">=</span> right<span class="token punctuation">;</span>
			right <span class="token operator">=</span> right<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		prev <span class="token operator">=</span> prev<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	prev<span class="token punctuation">.</span>next <span class="token operator">=</span> left <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">?</span> left <span class="token operator">:</span> right<span class="token punctuation">;</span>
	<span class="token keyword">return</span> res<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,3),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),E=n("td",{style:{"text-align":"center"}},"21",-1),N={style:{"text-align":"left"}},I={href:"https://leetcode.com/problems/merge-two-sorted-lists",target:"_blank",rel:"noopener noreferrer"},j={style:{"text-align":"center"}},K={href:"https://2xiao.github.io/leetcode-js/leetcode/problem/0021",target:"_blank",rel:"noopener noreferrer"},C={style:{"text-align":"left"}},T=n("code",null,"递归",-1),V=n("code",null,"链表",-1),M={style:{"text-align":"left"}},B=n("td",{style:{"text-align":"center"}},"264",-1),O={style:{"text-align":"left"}},R={href:"https://leetcode.com/problems/ugly-number-ii",target:"_blank",rel:"noopener noreferrer"},H={style:{"text-align":"center"}},S={href:"https://2xiao.github.io/leetcode-js/leetcode/problem/0264",target:"_blank",rel:"noopener noreferrer"},Y={style:{"text-align":"left"}},z=n("code",null,"哈希表",-1),A=n("code",null,"数学",-1),D=n("code",null,"动态规划",-1),F=n("code",null,"1+",-1),G={style:{"text-align":"left"}},J=n("td",{style:{"text-align":"center"}},"2411",-1),P={style:{"text-align":"left"}},Q={href:"https://leetcode.com/problems/smallest-subarrays-with-maximum-bitwise-or",target:"_blank",rel:"noopener noreferrer"},U=n("td",{style:{"text-align":"center"}},null,-1),W={style:{"text-align":"left"}},X=n("code",null,"位运算",-1),Z=n("code",null,"数组",-1),$=n("code",null,"二分查找",-1),nn=n("code",null,"1+",-1),sn={style:{"text-align":"left"}};function tn(en,an){const o=p("ExternalLinkIcon"),l=p("font"),a=p("RouterLink");return r(),u("div",null,[n("h1",h,[_,s(),n("a",m,[s("23. 合并 K 个升序链表"),t(o)])]),n("p",null,[s("🔴 "),t(l,{color:"#ff334b"},{default:e(()=>[s("Hard")]),_:1}),s("  🔖  "),t(a,{to:"/leetcode/outline/tag/linked-list.html"},{default:e(()=>[g]),_:1}),s(),t(a,{to:"/leetcode/outline/tag/divide-and-conquer.html"},{default:e(()=>[f]),_:1}),s(),t(a,{to:"/leetcode/outline/tag/heap-priority-queue.html"},{default:e(()=>[v]),_:1}),s(),t(a,{to:"/leetcode/outline/tag/merge-sort.html"},{default:e(()=>[b]),_:1}),s("  🔗 "),n("a",y,[x,t(o)])]),w,n("p",null,[s("借助分治的思想，把 K 个有序链表两两合并即可。相当于是 "),t(a,{to:"/leetcode/problem/0021.html"},{default:e(()=>[s("第 21 题")]),_:1}),s(" 的加强版。")]),L,d(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[E,n("td",N,[n("a",I,[s("合并两个有序链表"),t(o)])]),n("td",j,[n("a",K,[s("[✓]"),t(o)])]),n("td",C,[t(a,{to:"/leetcode/outline/tag/recursion.html"},{default:e(()=>[T]),_:1}),s(),t(a,{to:"/leetcode/outline/tag/linked-list.html"},{default:e(()=>[V]),_:1})]),n("td",M,[t(l,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1})])]),n("tr",null,[B,n("td",O,[n("a",R,[s("丑数 II"),t(o)])]),n("td",H,[n("a",S,[s("[✓]"),t(o)])]),n("td",Y,[t(a,{to:"/leetcode/outline/tag/hash-table.html"},{default:e(()=>[z]),_:1}),s(),t(a,{to:"/leetcode/outline/tag/math.html"},{default:e(()=>[A]),_:1}),s(),t(a,{to:"/leetcode/outline/tag/dynamic-programming.html"},{default:e(()=>[D]),_:1}),s(),F]),n("td",G,[t(l,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1})])]),n("tr",null,[J,n("td",P,[n("a",Q,[s("按位或最大的最小子数组长度"),t(o)])]),U,n("td",W,[t(a,{to:"/leetcode/outline/tag/bit-manipulation.html"},{default:e(()=>[X]),_:1}),s(),t(a,{to:"/leetcode/outline/tag/array.html"},{default:e(()=>[Z]),_:1}),s(),t(a,{to:"/leetcode/outline/tag/binary-search.html"},{default:e(()=>[$]),_:1}),s(),nn]),n("td",sn,[t(l,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1})])])])])])}const ln=i(k,[["render",tn],["__file","0023.html.vue"]]);export{ln as default};
