import{_ as c,r as p,o as i,c as d,a as n,b as t,d as s,w as a,f as r,e as u}from"./app-GnK0vSxb.js";const k={},m={id:"_148-排序链表",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#_148-排序链表","aria-hidden":"true"},"#",-1),_={href:"https://leetcode.com/problems/sort-list",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"链表",-1),f=n("code",null,"双指针",-1),b=n("code",null,"分治",-1),g=n("code",null,"排序",-1),y=n("code",null,"归并排序",-1),x={href:"https://leetcode.com/problems/sort-list",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),L=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>head</code> of a linked list, return <em>the list after sorting it in <strong>ascending order</strong></em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/09/14/sort_list_1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [4,2,1,3]</p><p>Output: [1,2,3,4]</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/09/14/sort_list_2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [-1,5,3,4,0]</p><p>Output: [-1,0,3,4,5]</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: head = []</p><p>Output: []</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the list is in the range <code>[0, 5 * 10^4]</code>.</li><li><code>-10^5 &lt;= Node.val &lt;= 10^5</code></li></ul><p><strong>Follow up:</strong> Can you sort the linked list in <code>O(n logn)</code> time and <code>O(1)</code> memory (i.e. constant space)?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你链表的头结点 <code>head</code> ，请将其按 <strong>升序</strong> 排列并返回 <strong>排序后的链表</strong> 。</p><p><strong>进阶</strong>：你可以在 <code>O(n log n)</code> 时间复杂度和常数级空间复杂度下，对链表进行排序吗？</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>使用归并排序（Merge Sort）对链表进行排序，归并排序的核心思想是分治和合并。</p><ol><li>首先，对链表进行分治，将链表一分为二。可以通过快慢指针找到链表的中点，然后分别对左右两部分进行排序。</li><li>对左右两个已排序的链表进行合并。合并两个有序链表的过程可以参考合并两个有序数组的算法。</li><li>递归地对左右两部分链表进行排序和合并，直到每个部分的长度为 <code>1</code>。</li><li>最终得到一个完全有序的链表。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n log n)</code>，其中 <code>n</code> 是链表的长度。通过归并排序，可以在链表排序中达到 <code>O(n log n)</code> 的时间复杂度，且不需要额外的空间。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了常数级别的额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">sortList</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head <span class="token operator">||</span> <span class="token operator">!</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token keyword">return</span> head<span class="token punctuation">;</span>

	<span class="token comment">// 找到链表中点</span>
	<span class="token keyword">const</span> mid <span class="token operator">=</span> <span class="token function">findMid</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> left <span class="token operator">=</span> head<span class="token punctuation">;</span>
	<span class="token keyword">const</span> right <span class="token operator">=</span> mid<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
	mid<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 断开链表</span>

	<span class="token comment">// 递归对左右两部分进行排序</span>
	<span class="token keyword">const</span> sortLeft <span class="token operator">=</span> <span class="token function">sortList</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> sortRight <span class="token operator">=</span> <span class="token function">sortList</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 合并两个有序链表</span>
	<span class="token keyword">return</span> <span class="token function">merge</span><span class="token punctuation">(</span>sortLeft<span class="token punctuation">,</span> sortRight<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 找到链表的中点（快慢指针）</span>
<span class="token keyword">var</span> <span class="token function-variable function">findMid</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
	<span class="token keyword">let</span> fast <span class="token operator">=</span> head<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>fast<span class="token punctuation">.</span>next <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> slow<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 合并两个有序链表</span>
<span class="token keyword">var</span> <span class="token function-variable function">merge</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> cur <span class="token operator">=</span> res<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>a <span class="token operator">&amp;&amp;</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> b<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			cur<span class="token punctuation">.</span>next <span class="token operator">=</span> a<span class="token punctuation">;</span>
			a <span class="token operator">=</span> a<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			cur<span class="token punctuation">.</span>next <span class="token operator">=</span> b<span class="token punctuation">;</span>
			b <span class="token operator">=</span> b<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 处理剩余的节点</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		cur<span class="token punctuation">.</span>next <span class="token operator">=</span> a<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		cur<span class="token punctuation">.</span>next <span class="token operator">=</span> b<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,24),N=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),O=n("td",{style:{"text-align":"center"}},"21",-1),q={style:{"text-align":"left"}},E={href:"https://leetcode.com/problems/merge-two-sorted-lists",target:"_blank",rel:"noopener noreferrer"},M={style:{"text-align":"center"}},C={style:{"text-align":"left"}},j=n("code",null,"递归",-1),I=n("code",null,"链表",-1),V={style:{"text-align":"left"}},R=n("td",{style:{"text-align":"center"}},"75",-1),B={style:{"text-align":"left"}},z={href:"https://leetcode.com/problems/sort-colors",target:"_blank",rel:"noopener noreferrer"},S={style:{"text-align":"center"}},T={style:{"text-align":"left"}},F=n("code",null,"数组",-1),G=n("code",null,"双指针",-1),A=n("code",null,"排序",-1),D={style:{"text-align":"left"}},H=n("td",{style:{"text-align":"center"}},"147",-1),J={style:{"text-align":"left"}},K={href:"https://leetcode.com/problems/insertion-sort-list",target:"_blank",rel:"noopener noreferrer"},P={style:{"text-align":"center"}},Q={style:{"text-align":"left"}},U=n("code",null,"链表",-1),W=n("code",null,"排序",-1),X={style:{"text-align":"left"}},Y=n("td",{style:{"text-align":"center"}},"2046",-1),Z={style:{"text-align":"left"}},$={href:"https://leetcode.com/problems/sort-linked-list-already-sorted-using-absolute-values",target:"_blank",rel:"noopener noreferrer"},nn=n("td",{style:{"text-align":"center"}},null,-1),sn={style:{"text-align":"left"}},tn=n("code",null,"链表",-1),an=n("code",null,"双指针",-1),en=n("code",null,"排序",-1),on={style:{"text-align":"left"}};function ln(pn,cn){const o=p("ExternalLinkIcon"),l=p("font"),e=p("RouterLink");return i(),d("div",null,[n("h1",m,[h,t(),n("a",_,[t("148. 排序链表"),s(o)])]),n("p",null,[t("🟠 "),s(l,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1}),t("  🔖  "),s(e,{to:"/leetcode/outline/tag/linked-list.html"},{default:a(()=>[v]),_:1}),t(),s(e,{to:"/leetcode/outline/tag/two-pointers.html"},{default:a(()=>[f]),_:1}),t(),s(e,{to:"/leetcode/outline/tag/divide-and-conquer.html"},{default:a(()=>[b]),_:1}),t(),s(e,{to:"/leetcode/outline/tag/sorting.html"},{default:a(()=>[g]),_:1}),t(),s(e,{to:"/leetcode/outline/tag/merge-sort.html"},{default:a(()=>[y]),_:1}),t("  🔗 "),n("a",x,[w,s(o)])]),L,r(" prettier-ignore "),n("table",null,[N,n("tbody",null,[n("tr",null,[O,n("td",q,[n("a",E,[t("合并两个有序链表"),s(o)])]),n("td",M,[s(e,{to:"/leetcode/problem/0021.html"},{default:a(()=>[t("[✓]")]),_:1})]),n("td",C,[s(e,{to:"/leetcode/outline/tag/recursion.html"},{default:a(()=>[j]),_:1}),t(),s(e,{to:"/leetcode/outline/tag/linked-list.html"},{default:a(()=>[I]),_:1})]),n("td",V,[s(l,{color:"#15bd66"},{default:a(()=>[t("Easy")]),_:1})])]),n("tr",null,[R,n("td",B,[n("a",z,[t("颜色分类"),s(o)])]),n("td",S,[s(e,{to:"/leetcode/problem/0075.html"},{default:a(()=>[t("[✓]")]),_:1})]),n("td",T,[s(e,{to:"/leetcode/outline/tag/array.html"},{default:a(()=>[F]),_:1}),t(),s(e,{to:"/leetcode/outline/tag/two-pointers.html"},{default:a(()=>[G]),_:1}),t(),s(e,{to:"/leetcode/outline/tag/sorting.html"},{default:a(()=>[A]),_:1})]),n("td",D,[s(l,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1})])]),n("tr",null,[H,n("td",J,[n("a",K,[t("对链表进行插入排序"),s(o)])]),n("td",P,[s(e,{to:"/leetcode/problem/0147.html"},{default:a(()=>[t("[✓]")]),_:1})]),n("td",Q,[s(e,{to:"/leetcode/outline/tag/linked-list.html"},{default:a(()=>[U]),_:1}),t(),s(e,{to:"/leetcode/outline/tag/sorting.html"},{default:a(()=>[W]),_:1})]),n("td",X,[s(l,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1})])]),n("tr",null,[Y,n("td",Z,[n("a",$,[t("给按照绝对值排序的链表排序"),s(o)])]),nn,n("td",sn,[s(e,{to:"/leetcode/outline/tag/linked-list.html"},{default:a(()=>[tn]),_:1}),t(),s(e,{to:"/leetcode/outline/tag/two-pointers.html"},{default:a(()=>[an]),_:1}),t(),s(e,{to:"/leetcode/outline/tag/sorting.html"},{default:a(()=>[en]),_:1})]),n("td",on,[s(l,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1})])])])])])}const rn=c(k,[["render",ln],["__file","0148.html.vue"]]);export{rn as default};
