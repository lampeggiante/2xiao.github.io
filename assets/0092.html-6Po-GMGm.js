import{_ as u,r as o,o as d,c as k,a as n,b as e,d as s,w as t,f as m,e as h}from"./app-5VBZs9Uu.js";const v={},b={id:"_92-反转链表-ii",tabindex:"-1"},f=n("a",{class:"header-anchor",href:"#_92-反转链表-ii","aria-hidden":"true"},"#",-1),_={href:"https://leetcode.com/problems/reverse-linked-list-ii",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"链表",-1),x={href:"https://leetcode.com/problems/reverse-linked-list-ii",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),w=h('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>head</code> of a singly linked list and two integers <code>left</code> and <code>right</code> where <code>left &lt;= right</code>, reverse the nodes of the list from position <code>left</code> to position <code>right</code>, and return <em>the reversed list</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/02/19/rev2ex2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [1,2,3,4,5], left = 2, right = 4</p><p>Output: [1,4,3,2,5]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: head = [5], left = 1, right = 1</p><p>Output: [5]</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the list is <code>n</code>.</li><li><code>1 &lt;= n &lt;= 500</code></li><li><code>-500 &lt;= Node.val &lt;= 500</code></li><li><code>1 &lt;= left &lt;= right &lt;= n</code></li></ul><p><strong>Follow up:</strong> Could you do it in one pass?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定 <code>2</code> 个链表中结点的位置 <code>m</code>, <code>n</code>，反转这个两个位置区间内的所有结点。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-迭代法" tabindex="-1"><a class="header-anchor" href="#思路一-迭代法" aria-hidden="true">#</a> 思路一：迭代法</h3><ul><li>由于有可能整个链表都被反转，所以构造一个新的头结点指向当前的头；</li><li>找到第一个需要反转的结点的前一个结点 <code>p</code>，从这个结点开始，依次把后面的结点用“头插”法，插入到 <code>p</code> 结点的后面；</li><li>循环次数用 <code>n-m</code> 来控制。</li></ul><hr><h3 id="思路二-递归法" tabindex="-1"><a class="header-anchor" href="#思路二-递归法" aria-hidden="true">#</a> 思路二：递归法</h3><p>使用递归方法来解决这道题的关键在于如何递归地反转链表中的某个子链表，并利用辅助变量 <code>successor</code> 保存反转后的链表连接部分。</p><ul><li>定义一个辅助函数 <code>reverseN(node, n)</code>，用于反转以 <code>node</code> 为起点的前 <code>n</code> 个节点，并返回反转后的新头节点。</li><li>当 <code>n === 1</code> 时，说明递归到达了需要反转的最后一个节点，此时保存 <code>node.next</code> 为 <code>successor</code>，以便后续连接反转后的链表片段。</li><li>通过递归调用 <code>reverseN(node.next, n - 1)</code>，逐步反转前 <code>n</code> 个节点，并将反转后的链表与 <code>successor</code> 相连接。</li><li>如果 <code>left &gt; 1</code>，则通过递归调用 <code>reverseBetween(head.next, left - 1, right - 1)</code>，逐步遍历到指定的 <code>left</code> 位置。</li><li>当 <code>left === 1</code> 时，直接返回反转后的头节点。</li><li>否则，将原链表的 <code>head.next</code> 指向反转后的子链表头节点。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',20),N=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[e(`/**
 * `),n("span",{class:"token keyword"},"@param"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("ListNode"),n("span",{class:"token punctuation"},"}")]),e(),n("span",{class:"token parameter"},"head"),e(`
 * `),n("span",{class:"token keyword"},"@param"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("number"),n("span",{class:"token punctuation"},"}")]),e(),n("span",{class:"token parameter"},"left"),e(`
 * `),n("span",{class:"token keyword"},"@param"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("number"),n("span",{class:"token punctuation"},"}")]),e(),n("span",{class:"token parameter"},"right"),e(`
 * `),n("span",{class:"token keyword"},"@return"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("ListNode"),n("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),n("span",{class:"token keyword"},"var"),e(),n("span",{class:"token function-variable function"},"reverseBetween"),e(),n("span",{class:"token operator"},"="),e(),n("span",{class:"token keyword"},"function"),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[e("head"),n("span",{class:"token punctuation"},","),e(" left"),n("span",{class:"token punctuation"},","),e(" right")]),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
	`),n("span",{class:"token keyword"},"if"),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),e("head "),n("span",{class:"token operator"},"||"),e(" left "),n("span",{class:"token operator"},"==="),e(" right"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token keyword"},"return"),e(" head"),n("span",{class:"token punctuation"},";"),e(`

	`),n("span",{class:"token keyword"},"let"),e(" res "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token keyword"},"new"),e(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),e(" head"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token keyword"},"let"),e(" prev "),n("span",{class:"token operator"},"="),e(" res"),n("span",{class:"token punctuation"},";"),e(`

	`),n("span",{class:"token comment"},"// 移动prev指针，直至指向left - 1"),e(`
	`),n("span",{class:"token keyword"},"for"),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),e(" i "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),e(" i "),n("span",{class:"token operator"},"<"),e(" left "),n("span",{class:"token operator"},"-"),e(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),e(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
		prev `),n("span",{class:"token operator"},"="),e(" prev"),n("span",{class:"token punctuation"},"."),e("next"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token punctuation"},"}"),e(`

	`),n("span",{class:"token keyword"},"let"),e(" cur "),n("span",{class:"token operator"},"="),e(" prev"),n("span",{class:"token punctuation"},"."),e("next"),n("span",{class:"token punctuation"},";"),e(`

	`),n("span",{class:"token comment"},"// 不断地将 cur.next 插入到 prev.next"),e(`
	`),n("span",{class:"token keyword"},"for"),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),e(" i "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),e(" i "),n("span",{class:"token operator"},"<"),e(" right "),n("span",{class:"token operator"},"-"),e(" left"),n("span",{class:"token punctuation"},";"),e(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
		`),n("span",{class:"token keyword"},"let"),e(" temp "),n("span",{class:"token operator"},"="),e(" cur"),n("span",{class:"token punctuation"},"."),e("next"),n("span",{class:"token punctuation"},";"),e(`
		cur`),n("span",{class:"token punctuation"},"."),e("next "),n("span",{class:"token operator"},"="),e(" temp"),n("span",{class:"token punctuation"},"."),e("next"),n("span",{class:"token punctuation"},";"),e(`
		temp`),n("span",{class:"token punctuation"},"."),e("next "),n("span",{class:"token operator"},"="),e(" prev"),n("span",{class:"token punctuation"},"."),e("next"),n("span",{class:"token punctuation"},";"),e(`
		prev`),n("span",{class:"token punctuation"},"."),e("next "),n("span",{class:"token operator"},"="),e(" temp"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token punctuation"},"}"),e(`

	`),n("span",{class:"token keyword"},"return"),e(" res"),n("span",{class:"token punctuation"},"."),e("next"),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"var"),e(),n("span",{class:"token function-variable function"},"reverseBetween"),e(),n("span",{class:"token operator"},"="),e(),n("span",{class:"token keyword"},"function"),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[e("head"),n("span",{class:"token punctuation"},","),e(" left"),n("span",{class:"token punctuation"},","),e(" right")]),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
	`),n("span",{class:"token comment"},"// 记录 right 之后的节点"),e(`
	`),n("span",{class:"token keyword"},"let"),e(" successor "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),e(`

	`),n("span",{class:"token comment"},"// 递归反转从 left 开始的 right 个节点"),e(`
	`),n("span",{class:"token keyword"},"const"),e(),n("span",{class:"token function-variable function"},"reverseN"),e(),n("span",{class:"token operator"},"="),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[e("node"),n("span",{class:"token punctuation"},","),e(" n")]),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token operator"},"=>"),e(),n("span",{class:"token punctuation"},"{"),e(`
		`),n("span",{class:"token keyword"},"if"),e(),n("span",{class:"token punctuation"},"("),e("n "),n("span",{class:"token operator"},"==="),e(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
			`),n("span",{class:"token comment"},"// 记录第 n 个节点的下一个节点，即 right+1 的节点"),e(`
			successor `),n("span",{class:"token operator"},"="),e(" node"),n("span",{class:"token punctuation"},"."),e("next"),n("span",{class:"token punctuation"},";"),e(`
			`),n("span",{class:"token keyword"},"return"),e(" node"),n("span",{class:"token punctuation"},";"),e(`
		`),n("span",{class:"token punctuation"},"}"),e(`
		`),n("span",{class:"token comment"},"// 递归反转前 n-1 个节点"),e(`
		`),n("span",{class:"token keyword"},"const"),e(" last "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token function"},"reverseN"),n("span",{class:"token punctuation"},"("),e("node"),n("span",{class:"token punctuation"},"."),e("next"),n("span",{class:"token punctuation"},","),e(" n "),n("span",{class:"token operator"},"-"),e(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`
		`),n("span",{class:"token comment"},"// 调整指针"),e(`
		node`),n("span",{class:"token punctuation"},"."),e("next"),n("span",{class:"token punctuation"},"."),e("next "),n("span",{class:"token operator"},"="),e(" node"),n("span",{class:"token punctuation"},";"),e(`
		node`),n("span",{class:"token punctuation"},"."),e("next "),n("span",{class:"token operator"},"="),e(" successor"),n("span",{class:"token punctuation"},";"),e(`
		`),n("span",{class:"token keyword"},"return"),e(" last"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`

	`),n("span",{class:"token comment"},"// 如果 left === 1，说明从头开始反转"),e(`
	`),n("span",{class:"token keyword"},"if"),e(),n("span",{class:"token punctuation"},"("),e("left "),n("span",{class:"token operator"},"==="),e(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
		`),n("span",{class:"token keyword"},"return"),e(),n("span",{class:"token function"},"reverseN"),n("span",{class:"token punctuation"},"("),e("head"),n("span",{class:"token punctuation"},","),e(" right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token punctuation"},"}"),e(`

	`),n("span",{class:"token comment"},"// 否则，递归移动到 left 位置，处理区间反转"),e(`
	head`),n("span",{class:"token punctuation"},"."),e("next "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token function"},"reverseBetween"),n("span",{class:"token punctuation"},"("),e("head"),n("span",{class:"token punctuation"},"."),e("next"),n("span",{class:"token punctuation"},","),e(" left "),n("span",{class:"token operator"},"-"),e(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),e(" right "),n("span",{class:"token operator"},"-"),e(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token keyword"},"return"),e(" head"),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),e(" 相关题目")],-1),L=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),B=n("td",{style:{"text-align":"center"}},"206",-1),E={style:{"text-align":"left"}},I={href:"https://leetcode.com/problems/reverse-linked-list",target:"_blank",rel:"noopener noreferrer"},V={style:{"text-align":"center"}},q={style:{"text-align":"left"}},A=n("code",null,"递归",-1),T=n("code",null,"链表",-1),O={style:{"text-align":"left"}};function R(z,F){const c=o("ExternalLinkIcon"),p=o("font"),a=o("RouterLink"),r=o("CodeTabs");return d(),k("div",null,[n("h1",b,[f,e(),n("a",_,[e("92. 反转链表 II"),s(c)])]),n("p",null,[e("🟠 "),s(p,{color:"#ffb800"},{default:t(()=>[e("Medium")]),_:1}),e("  🔖  "),s(a,{to:"/leetcode-js/outline/tag/linked-list.html"},{default:t(()=>[g]),_:1}),e("  🔗 "),n("a",x,[y,s(c)])]),w,s(r,{id:"136",data:[{id:"迭代法"},{id:"递归法"}]},{title0:t(({value:l,isActive:i})=>[e("迭代法")]),title1:t(({value:l,isActive:i})=>[e("递归法")]),tab0:t(({value:l,isActive:i})=>[N]),tab1:t(({value:l,isActive:i})=>[j]),_:1}),C,m(" prettier-ignore "),n("table",null,[L,n("tbody",null,[n("tr",null,[B,n("td",E,[n("a",I,[e("反转链表"),s(c)])]),n("td",V,[s(a,{to:"/leetcode-js/problem/0206.html"},{default:t(()=>[e("[✓]")]),_:1})]),n("td",q,[s(a,{to:"/leetcode-js/outline/tag/recursion.html"},{default:t(()=>[A]),_:1}),e(),s(a,{to:"/leetcode-js/outline/tag/linked-list.html"},{default:t(()=>[T]),_:1})]),n("td",O,[s(p,{color:"#15bd66"},{default:t(()=>[e("Easy")]),_:1})])])])])])}const M=u(v,[["render",R],["__file","0092.html.vue"]]);export{M as default};
