import{_ as u,r as c,o as p,c as h,a as e,b as t,d as n,w as s,f as _,e as k}from"./app-mvY9N9Pc.js";const m={},f={id:"_206-反转链表",tabindex:"-1"},g=e("a",{class:"header-anchor",href:"#_206-反转链表","aria-hidden":"true"},"#",-1),b={href:"https://leetcode.com/problems/reverse-linked-list",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"递归",-1),v=e("code",null,"链表",-1),y={href:"https://leetcode.com/problems/reverse-linked-list",target:"_blank",rel:"noopener noreferrer"},w=e("code",null,"LeetCode",-1),L=k('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>head</code> of a singly linked list, reverse the list, and return <em>the reversed list</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [1,2,3,4,5]</p><p>Output: [5,4,3,2,1]</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/02/19/rev1ex2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [1,2]</p><p>Output: [2,1]</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: head = []</p><p>Output: []</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the list is the range <code>[0, 5000]</code>.</li><li><code>-5000 &lt;= Node.val &lt;= 5000</code></li></ul><p><strong>Follow up:</strong> A linked list can be reversed either iteratively or recursively. Could you implement both?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你单链表的头节点 <code>head</code> ，请你反转链表，并返回反转后的链表。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>有两种解题方法，一是循环、二是递归。</p><h3 id="思路一-循环" tabindex="-1"><a class="header-anchor" href="#思路一-循环" aria-hidden="true">#</a> 思路一：循环</h3><p>使用双指针，遍历链表，并在访问各节点时修改 <code>next</code> 引用指向。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>： <code>O(n)</code>，遍历链表使用线性大小时间。</li><li><strong>空间复杂度</strong>： <code>O(1)</code>，变量 <code>prev</code> 和 <code>cur</code> 使用常数大小额外空间。</li></ul><hr><h3 id="思路二-递归" tabindex="-1"><a class="header-anchor" href="#思路二-递归" aria-hidden="true">#</a> 思路二：递归</h3><p>使用递归法遍历链表，当越过尾节点后终止递归，在回溯时修改各节点的 <code>next</code> 引用指向。</p><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>： <code>O(n)</code>，遍历链表使用线性大小时间。</li><li><strong>空间复杂度</strong>： <code>O(n)</code>，遍历链表的递归深度达到 <code>n</code> ，系统使用 <code>O(n)</code> 大小额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',27),j=e("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[e("pre",{class:"language-javascript"},[e("code",null,[e("span",{class:"token doc-comment comment"},[t(`/**
 * `),e("span",{class:"token keyword"},"@param"),t(),e("span",{class:"token class-name"},[e("span",{class:"token punctuation"},"{"),t("ListNode"),e("span",{class:"token punctuation"},"}")]),t(),e("span",{class:"token parameter"},"head"),t(`
 * `),e("span",{class:"token keyword"},"@return"),t(),e("span",{class:"token class-name"},[e("span",{class:"token punctuation"},"{"),t("ListNode"),e("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),e("span",{class:"token keyword"},"var"),t(),e("span",{class:"token function-variable function"},"reverseList"),t(),e("span",{class:"token operator"},"="),t(),e("span",{class:"token keyword"},"function"),t(),e("span",{class:"token punctuation"},"("),e("span",{class:"token parameter"},"head"),e("span",{class:"token punctuation"},")"),t(),e("span",{class:"token punctuation"},"{"),t(`
	`),e("span",{class:"token keyword"},"let"),t(" prev "),e("span",{class:"token operator"},"="),t(),e("span",{class:"token keyword"},"null"),e("span",{class:"token punctuation"},";"),t(`
	`),e("span",{class:"token keyword"},"let"),t(" cur "),e("span",{class:"token operator"},"="),t(" head"),e("span",{class:"token punctuation"},";"),t(`

	`),e("span",{class:"token keyword"},"while"),t(),e("span",{class:"token punctuation"},"("),t("cur "),e("span",{class:"token operator"},"!=="),t(),e("span",{class:"token keyword"},"null"),e("span",{class:"token punctuation"},")"),t(),e("span",{class:"token punctuation"},"{"),t(`
		`),e("span",{class:"token keyword"},"let"),t(" next "),e("span",{class:"token operator"},"="),t(" cur"),e("span",{class:"token punctuation"},"."),t("next"),e("span",{class:"token punctuation"},";"),t(`
		cur`),e("span",{class:"token punctuation"},"."),t("next "),e("span",{class:"token operator"},"="),t(" prev"),e("span",{class:"token punctuation"},";"),t(`
		prev `),e("span",{class:"token operator"},"="),t(" cur"),e("span",{class:"token punctuation"},";"),t(`
		cur `),e("span",{class:"token operator"},"="),t(" next"),e("span",{class:"token punctuation"},";"),t(`
	`),e("span",{class:"token punctuation"},"}"),t(`
	`),e("span",{class:"token keyword"},"return"),t(" prev"),e("span",{class:"token punctuation"},";"),t(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},";"),t(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),N=e("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[e("pre",{class:"language-javascript"},[e("code",null,[e("span",{class:"token doc-comment comment"},[t(`/**
 * `),e("span",{class:"token keyword"},"@param"),t(),e("span",{class:"token class-name"},[e("span",{class:"token punctuation"},"{"),t("ListNode"),e("span",{class:"token punctuation"},"}")]),t(),e("span",{class:"token parameter"},"head"),t(`
 * `),e("span",{class:"token keyword"},"@return"),t(),e("span",{class:"token class-name"},[e("span",{class:"token punctuation"},"{"),t("ListNode"),e("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),e("span",{class:"token keyword"},"var"),t(),e("span",{class:"token function-variable function"},"reverseList"),t(),e("span",{class:"token operator"},"="),t(),e("span",{class:"token keyword"},"function"),t(),e("span",{class:"token punctuation"},"("),e("span",{class:"token parameter"},"head"),e("span",{class:"token punctuation"},")"),t(),e("span",{class:"token punctuation"},"{"),t(`
	`),e("span",{class:"token keyword"},"if"),t(),e("span",{class:"token punctuation"},"("),t("head "),e("span",{class:"token operator"},"==="),t(),e("span",{class:"token keyword"},"null"),t(),e("span",{class:"token operator"},"||"),t(" head"),e("span",{class:"token punctuation"},"."),t("next "),e("span",{class:"token operator"},"==="),t(),e("span",{class:"token keyword"},"null"),e("span",{class:"token punctuation"},")"),t(),e("span",{class:"token punctuation"},"{"),t(`
		`),e("span",{class:"token keyword"},"return"),t(" head"),e("span",{class:"token punctuation"},";"),t(`
	`),e("span",{class:"token punctuation"},"}"),t(`
	`),e("span",{class:"token keyword"},"const"),t(" last "),e("span",{class:"token operator"},"="),t(),e("span",{class:"token function"},"reverseList"),e("span",{class:"token punctuation"},"("),t("head"),e("span",{class:"token punctuation"},"."),t("next"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),t(`
	head`),e("span",{class:"token punctuation"},"."),t("next"),e("span",{class:"token punctuation"},"."),t("next "),e("span",{class:"token operator"},"="),t(" head"),e("span",{class:"token punctuation"},";"),t(`
	head`),e("span",{class:"token punctuation"},"."),t("next "),e("span",{class:"token operator"},"="),t(),e("span",{class:"token keyword"},"null"),e("span",{class:"token punctuation"},";"),t(`
	`),e("span",{class:"token keyword"},"return"),t(" last"),e("span",{class:"token punctuation"},";"),t(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},";"),t(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),C=e("h2",{id:"相关题目",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),E=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"left"}},"难度")])],-1),O=e("td",{style:{"text-align":"center"}},"92",-1),I={style:{"text-align":"left"}},q={href:"https://leetcode.com/problems/reverse-linked-list-ii",target:"_blank",rel:"noopener noreferrer"},M={style:{"text-align":"center"}},A={href:"https://2xiao.github.io/leetcode-js/leetcode/problem/0092",target:"_blank",rel:"noopener noreferrer"},V={style:{"text-align":"left"}},T=e("code",null,"链表",-1),B={style:{"text-align":"left"}},z=e("td",{style:{"text-align":"center"}},"156",-1),R={style:{"text-align":"left"}},F={href:"https://leetcode.com/problems/binary-tree-upside-down",target:"_blank",rel:"noopener noreferrer"},G={style:{"text-align":"center"}},S={href:"https://2xiao.github.io/leetcode-js/leetcode/problem/0156",target:"_blank",rel:"noopener noreferrer"},D={style:{"text-align":"left"}},H=e("code",null,"树",-1),J=e("code",null,"深度优先搜索",-1),K=e("code",null,"二叉树",-1),P={style:{"text-align":"left"}},Q=e("td",{style:{"text-align":"center"}},"234",-1),U={style:{"text-align":"left"}},W={href:"https://leetcode.com/problems/palindrome-linked-list",target:"_blank",rel:"noopener noreferrer"},X={style:{"text-align":"center"}},Y={href:"https://2xiao.github.io/leetcode-js/leetcode/problem/0234",target:"_blank",rel:"noopener noreferrer"},Z={style:{"text-align":"left"}},$=e("code",null,"栈",-1),ee=e("code",null,"递归",-1),te=e("code",null,"链表",-1),ne=e("code",null,"1+",-1),se={style:{"text-align":"left"}},oe=e("td",{style:{"text-align":"center"}},"2074",-1),ae={style:{"text-align":"left"}},le={href:"https://leetcode.com/problems/reverse-nodes-in-even-length-groups",target:"_blank",rel:"noopener noreferrer"},ce=e("td",{style:{"text-align":"center"}},null,-1),ie={style:{"text-align":"left"}},re=e("code",null,"链表",-1),de={style:{"text-align":"left"}},ue=e("td",{style:{"text-align":"center"}},"2130",-1),pe={style:{"text-align":"left"}},he={href:"https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list",target:"_blank",rel:"noopener noreferrer"},_e=e("td",{style:{"text-align":"center"}},null,-1),ke={style:{"text-align":"left"}},me=e("code",null,"栈",-1),fe=e("code",null,"链表",-1),ge=e("code",null,"双指针",-1),be={style:{"text-align":"left"}},xe=e("td",{style:{"text-align":"center"}},"2487",-1),ve={style:{"text-align":"left"}},ye={href:"https://leetcode.com/problems/remove-nodes-from-linked-list",target:"_blank",rel:"noopener noreferrer"},we=e("td",{style:{"text-align":"center"}},null,-1),Le={style:{"text-align":"left"}},je=e("code",null,"栈",-1),Ne=e("code",null,"递归",-1),Ce=e("code",null,"链表",-1),Ee=e("code",null,"1+",-1),Oe={style:{"text-align":"left"}},Ie=e("td",{style:{"text-align":"center"}},"2807",-1),qe={style:{"text-align":"left"}},Me={href:"https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list",target:"_blank",rel:"noopener noreferrer"},Ae=e("td",{style:{"text-align":"center"}},null,-1),Ve={style:{"text-align":"left"}},Te=e("code",null,"链表",-1),Be=e("code",null,"数学",-1),ze=e("code",null,"数论",-1),Re={style:{"text-align":"left"}};function Fe(Ge,Se){const a=c("ExternalLinkIcon"),l=c("font"),o=c("RouterLink"),d=c("CodeTabs");return p(),h("div",null,[e("h1",f,[g,t(),e("a",b,[t("206. 反转链表"),n(a)])]),e("p",null,[t("🟢 "),n(l,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),n(o,{to:"/leetcode/outline/tag/recursion.html"},{default:s(()=>[x]),_:1}),t(),n(o,{to:"/leetcode/outline/tag/linked-list.html"},{default:s(()=>[v]),_:1}),t("  🔗 "),e("a",y,[w,n(a)])]),L,n(d,{id:"127",data:[{id:"循环"},{id:"递归"}]},{title0:s(({value:i,isActive:r})=>[t("循环")]),title1:s(({value:i,isActive:r})=>[t("递归")]),tab0:s(({value:i,isActive:r})=>[j]),tab1:s(({value:i,isActive:r})=>[N]),_:1}),C,_(" prettier-ignore "),e("table",null,[E,e("tbody",null,[e("tr",null,[O,e("td",I,[e("a",q,[t("反转链表 II"),n(a)])]),e("td",M,[e("a",A,[t("[✓]"),n(a)])]),e("td",V,[n(o,{to:"/leetcode/outline/tag/linked-list.html"},{default:s(()=>[T]),_:1})]),e("td",B,[n(l,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1})])]),e("tr",null,[z,e("td",R,[e("a",F,[t("上下翻转二叉树"),n(a)])]),e("td",G,[e("a",S,[t("[✓]"),n(a)])]),e("td",D,[n(o,{to:"/leetcode/outline/tag/tree.html"},{default:s(()=>[H]),_:1}),t(),n(o,{to:"/leetcode/outline/tag/depth-first-search.html"},{default:s(()=>[J]),_:1}),t(),n(o,{to:"/leetcode/outline/tag/binary-tree.html"},{default:s(()=>[K]),_:1})]),e("td",P,[n(l,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1})])]),e("tr",null,[Q,e("td",U,[e("a",W,[t("回文链表"),n(a)])]),e("td",X,[e("a",Y,[t("[✓]"),n(a)])]),e("td",Z,[n(o,{to:"/leetcode/outline/tag/stack.html"},{default:s(()=>[$]),_:1}),t(),n(o,{to:"/leetcode/outline/tag/recursion.html"},{default:s(()=>[ee]),_:1}),t(),n(o,{to:"/leetcode/outline/tag/linked-list.html"},{default:s(()=>[te]),_:1}),t(),ne]),e("td",se,[n(l,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1})])]),e("tr",null,[oe,e("td",ae,[e("a",le,[t("反转偶数长度组的节点"),n(a)])]),ce,e("td",ie,[n(o,{to:"/leetcode/outline/tag/linked-list.html"},{default:s(()=>[re]),_:1})]),e("td",de,[n(l,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1})])]),e("tr",null,[ue,e("td",pe,[e("a",he,[t("链表最大孪生和"),n(a)])]),_e,e("td",ke,[n(o,{to:"/leetcode/outline/tag/stack.html"},{default:s(()=>[me]),_:1}),t(),n(o,{to:"/leetcode/outline/tag/linked-list.html"},{default:s(()=>[fe]),_:1}),t(),n(o,{to:"/leetcode/outline/tag/two-pointers.html"},{default:s(()=>[ge]),_:1})]),e("td",be,[n(l,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1})])]),e("tr",null,[xe,e("td",ve,[e("a",ye,[t("从链表中移除节点"),n(a)])]),we,e("td",Le,[n(o,{to:"/leetcode/outline/tag/stack.html"},{default:s(()=>[je]),_:1}),t(),n(o,{to:"/leetcode/outline/tag/recursion.html"},{default:s(()=>[Ne]),_:1}),t(),n(o,{to:"/leetcode/outline/tag/linked-list.html"},{default:s(()=>[Ce]),_:1}),t(),Ee]),e("td",Oe,[n(l,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1})])]),e("tr",null,[Ie,e("td",qe,[e("a",Me,[t("在链表中插入最大公约数"),n(a)])]),Ae,e("td",Ve,[n(o,{to:"/leetcode/outline/tag/linked-list.html"},{default:s(()=>[Te]),_:1}),t(),n(o,{to:"/leetcode/outline/tag/math.html"},{default:s(()=>[Be]),_:1}),t(),n(o,{to:"/leetcode/outline/tag/number-theory.html"},{default:s(()=>[ze]),_:1})]),e("td",Re,[n(l,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1})])])])])])}const He=u(m,[["render",Fe],["__file","0206.html.vue"]]);export{He as default};
