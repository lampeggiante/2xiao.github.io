import{_ as d,r as i,o as c,c as p,a as e,b as t,d as n,w as s,f as r,e as u}from"./app-GnK0vSxb.js";const h={},_={id:"_876-链表的中间结点",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#_876-链表的中间结点","aria-hidden":"true"},"#",-1),f={href:"https://leetcode.com/problems/middle-of-the-linked-list",target:"_blank",rel:"noopener noreferrer"},k=e("code",null,"链表",-1),g=e("code",null,"双指针",-1),x={href:"https://leetcode.com/problems/middle-of-the-linked-list",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>head</code> of a singly linked list, return <em>the middle node of the linked list</em>.</p><p>If there are two middle nodes, return <strong>the second middle</strong> node.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/07/23/lc-midlist1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [1,2,3,4,5]</p><p>Output: [3,4,5]</p><p>Explanation: The middle node of the list is node 3.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/07/23/lc-midlist2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [1,2,3,4,5,6]</p><p>Output: [4,5,6]</p><p>Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the list is in the range <code>[1, 100]</code>.</li><li><code>1 &lt;= Node.val &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>输出链表中间结点。这题在前面题目中反复出现了很多次了。</p><p>如果链表长度是奇数，输出中间结点是中间结点。如果链表长度是双数，输出中间结点是中位数后面的那个结点。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li><p>思路一：单指针</p><ul><li>先遍历一遍链表，统计一下节点个数为 n，再遍历到 n / 2 的位置，返回中间节点；</li><li>需要注意的一个特例是，有可能要删除头节点，在遍历之前，新建一个头节点，让其指向原来的头节点。</li></ul></li><li><p>思路二：快慢指针</p><ul><li>使用步长不一致的快慢指针进行一次遍历找到链表的中间节点；</li><li>使用两个指针 <code>slow</code>、<code>fast</code>，都指向链表的头节点;</li><li>将快、慢指针同时向右移动，其中慢指针每次移动 1 步，即 <code>slow = slow.next</code>；快指针每次移动 2 步，即 <code>fast = fast.next.next</code>；</li><li>等到快指针移动到链表尾部（即 <code>fast.next == null</code>）时跳出循环体，此时 slow 指向链表中间位置；</li><li>返回 slow 指针。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">middleNode</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
	<span class="token keyword">let</span> fast <span class="token operator">=</span> head<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> slow<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,19),w=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"left"}},"难度")])],-1),y=e("td",{style:{"text-align":"center"}},"2095",-1),N={style:{"text-align":"left"}},E={href:"https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list",target:"_blank",rel:"noopener noreferrer"},L=e("td",{style:{"text-align":"center"}},null,-1),j={style:{"text-align":"left"}},C=e("code",null,"链表",-1),I=e("code",null,"双指针",-1),V={style:{"text-align":"left"}},q=e("td",{style:{"text-align":"center"}},"2130",-1),B={style:{"text-align":"left"}},T={href:"https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list",target:"_blank",rel:"noopener noreferrer"},z=e("td",{style:{"text-align":"center"}},null,-1),M={style:{"text-align":"left"}},O=e("code",null,"栈",-1),R=e("code",null,"链表",-1),S=e("code",null,"双指针",-1),G={style:{"text-align":"left"}};function A(D,F){const o=i("ExternalLinkIcon"),l=i("font"),a=i("RouterLink");return c(),p("div",null,[e("h1",_,[m,t(),e("a",f,[t("876. 链表的中间结点"),n(o)])]),e("p",null,[t("🟢 "),n(l,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),n(a,{to:"/leetcode/outline/tag/linked-list.html"},{default:s(()=>[k]),_:1}),t(),n(a,{to:"/leetcode/outline/tag/two-pointers.html"},{default:s(()=>[g]),_:1}),t("  🔗 "),e("a",x,[b,n(o)])]),v,r(" prettier-ignore "),e("table",null,[w,e("tbody",null,[e("tr",null,[y,e("td",N,[e("a",E,[t("删除链表的中间节点"),n(o)])]),L,e("td",j,[n(a,{to:"/leetcode/outline/tag/linked-list.html"},{default:s(()=>[C]),_:1}),t(),n(a,{to:"/leetcode/outline/tag/two-pointers.html"},{default:s(()=>[I]),_:1})]),e("td",V,[n(l,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1})])]),e("tr",null,[q,e("td",B,[e("a",T,[t("链表最大孪生和"),n(o)])]),z,e("td",M,[n(a,{to:"/leetcode/outline/tag/stack.html"},{default:s(()=>[O]),_:1}),t(),n(a,{to:"/leetcode/outline/tag/linked-list.html"},{default:s(()=>[R]),_:1}),t(),n(a,{to:"/leetcode/outline/tag/two-pointers.html"},{default:s(()=>[S]),_:1})]),e("td",G,[n(l,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1})])])])])])}const J=d(h,[["render",A],["__file","0876.html.vue"]]);export{J as default};
