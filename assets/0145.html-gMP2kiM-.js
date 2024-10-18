import{_ as p,r as c,o as d,c as k,a as t,b as n,d as e,w as s,f as h,e as _}from"./app-GnK0vSxb.js";const m={},f={id:"_145-二叉树的后序遍历",tabindex:"-1"},g=t("a",{class:"header-anchor",href:"#_145-二叉树的后序遍历","aria-hidden":"true"},"#",-1),b={href:"https://leetcode.com/problems/binary-tree-postorder-traversal",target:"_blank",rel:"noopener noreferrer"},v=t("code",null,"栈",-1),y=t("code",null,"树",-1),x=t("code",null,"深度优先搜索",-1),w=t("code",null,"二叉树",-1),T={href:"https://leetcode.com/problems/binary-tree-postorder-traversal",target:"_blank",rel:"noopener noreferrer"},O=t("code",null,"LeetCode",-1),E=_('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>root</code> of a binary tree, return <em>the postorder traversal of its nodes&#39; values</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/08/28/pre1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,null,2,3]</p><p>Output: [3,2,1]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: root = []</p><p>Output: []</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: root = [1]</p><p>Output: [1]</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of the nodes in the tree is in the range <code>[0, 100]</code>.</li><li><code>-100 &lt;= Node.val &lt;= 100</code></li></ul><p><strong>Follow up:</strong> Recursive solution is trivial, could you do it iteratively?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你二叉树的根节点 <code>root</code> ，返回它节点值的 <strong>后序</strong> 遍历。</p><p><strong>进阶</strong>：递归算法很简单，你可以通过迭代算法完成吗？</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-递归" tabindex="-1"><a class="header-anchor" href="#思路一-递归" aria-hidden="true">#</a> 思路一：递归</h3><p>后序遍历是指，对于树中的任意节点来说，先打印它的左子树，然后再打印它的右子树，最后打印这个节点本身。而在访问左子树或者右子树的时候，按照同样的方式遍历，直到遍历完整棵树。因此整个遍历过程天然具有递归的性质，可以直接用递归函数来模拟这一过程。</p><ul><li>先递归调用 <code>preorderTraversal(root.left)</code> 来遍历 <code>root</code> 节点的左子树</li><li>再递归调用 <code>preorderTraversal(root.right)</code> 来遍历 <code>root</code> 节点的右子树</li><li>最后将 <code>root</code> 节点的值加入答案即可</li><li>递归终止的条件为碰到空节点</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是二叉树的节点数。每一个节点恰好被遍历一次。</p></li><li><p><strong>空间复杂度</strong>：<code>O(n)</code>，为递归过程中栈的开销，平均情况下为 <code>O(log⁡n)</code>，最坏情况下树呈现链状，为 <code>O(n)</code>。</p></li></ul><hr><h3 id="思路二-迭代" tabindex="-1"><a class="header-anchor" href="#思路二-迭代" aria-hidden="true">#</a> 思路二：迭代</h3><p>也可以用迭代的方式实现思路一的递归函数，两种方式是等价的，区别在于递归的时候隐式地维护了一个栈，而迭代的时候需要显式地将这个栈模拟出来，其余的实现与细节都相同，具体可以参考下面的代码。</p><p>先序遍历是中左右，后续遍历是左右中，那么我们只需要调整一下先序遍历的代码顺序，就变成中右左的遍历顺序，然后再反转 res 数组，输出的结果顺序就是左右中了。</p><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是二叉树的节点数。每一个节点恰好被遍历一次。</p></li><li><p><strong>空间复杂度</strong>：<code>O(n)</code>，为迭代过程中显式栈的开销，平均情况下为 <code>O(log⁡n)</code>，最坏情况下树呈现链状，为 <code>O(n)</code>。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',28),N=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[n(`/**
 * `),t("span",{class:"token keyword"},"@param"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("TreeNode"),t("span",{class:"token punctuation"},"}")]),n(),t("span",{class:"token parameter"},"root"),n(`
 * `),t("span",{class:"token keyword"},"@return"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),n(`
 */`)]),n(`
`),t("span",{class:"token keyword"},"var"),n(),t("span",{class:"token function-variable function"},"postorderTraversal"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"function"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"root"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token keyword"},"let"),n(" res "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),n("root "),t("span",{class:"token operator"},"=="),n(),t("span",{class:"token keyword"},"null"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token keyword"},"return"),n(" res"),t("span",{class:"token punctuation"},";"),n(`
	res`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"..."),t("span",{class:"token function"},"postorderTraversal"),t("span",{class:"token punctuation"},"("),n("root"),t("span",{class:"token punctuation"},"."),n("left"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
	res`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"..."),t("span",{class:"token function"},"postorderTraversal"),t("span",{class:"token punctuation"},"("),n("root"),t("span",{class:"token punctuation"},"."),n("right"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
	res`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),n("root"),t("span",{class:"token punctuation"},"."),n("val"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"return"),n(" res"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),j=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[n(`/**
 * `),t("span",{class:"token keyword"},"@param"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("TreeNode"),t("span",{class:"token punctuation"},"}")]),n(),t("span",{class:"token parameter"},"root"),n(`
 * `),t("span",{class:"token keyword"},"@return"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),n(`
 */`)]),n(`
`),t("span",{class:"token keyword"},"var"),n(),t("span",{class:"token function-variable function"},"postorderTraversal"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"function"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"root"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token keyword"},"let"),n(" res "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),n("root "),t("span",{class:"token operator"},"=="),n(),t("span",{class:"token keyword"},"null"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token keyword"},"return"),n(" res"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"let"),n(" stack "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),n("root"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"while"),n(),t("span",{class:"token punctuation"},"("),n("stack"),t("span",{class:"token punctuation"},"."),n("length"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token keyword"},"let"),n(" node "),t("span",{class:"token operator"},"="),n(" stack"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"pop"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
		res`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"unshift"),t("span",{class:"token punctuation"},"("),n("node"),t("span",{class:"token punctuation"},"."),n("val"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
		`),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),n("node"),t("span",{class:"token punctuation"},"."),n("left"),t("span",{class:"token punctuation"},")"),n(" stack"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),n("node"),t("span",{class:"token punctuation"},"."),n("left"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
		`),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),n("node"),t("span",{class:"token punctuation"},"."),n("right"),t("span",{class:"token punctuation"},")"),n(" stack"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),n("node"),t("span",{class:"token punctuation"},"."),n("right"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token punctuation"},"}"),n(`
	`),t("span",{class:"token keyword"},"return"),n(" res"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),C=t("h2",{id:"相关题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),n(" 相关题目")],-1),q=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),I=t("td",{style:{"text-align":"center"}},"94",-1),L={style:{"text-align":"left"}},V={href:"https://leetcode.com/problems/binary-tree-inorder-traversal",target:"_blank",rel:"noopener noreferrer"},A={style:{"text-align":"center"}},B={style:{"text-align":"left"}},R=t("code",null,"栈",-1),z=t("code",null,"树",-1),F=t("code",null,"深度优先搜索",-1),G=t("code",null,"1+",-1),M={style:{"text-align":"left"}},S=t("td",{style:{"text-align":"center"}},"590",-1),D={style:{"text-align":"left"}},H={href:"https://leetcode.com/problems/n-ary-tree-postorder-traversal",target:"_blank",rel:"noopener noreferrer"},J={style:{"text-align":"center"}},K={style:{"text-align":"left"}},P=t("code",null,"栈",-1),Q=t("code",null,"树",-1),U=t("code",null,"深度优先搜索",-1),W={style:{"text-align":"left"}},X=t("td",{style:{"text-align":"center"}},"2477",-1),Y={style:{"text-align":"left"}},Z={href:"https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital",target:"_blank",rel:"noopener noreferrer"},$=t("td",{style:{"text-align":"center"}},null,-1),tt={style:{"text-align":"left"}},nt=t("code",null,"树",-1),et=t("code",null,"深度优先搜索",-1),st=t("code",null,"广度优先搜索",-1),at=t("code",null,"1+",-1),ot={style:{"text-align":"left"}};function lt(ct,rt){const o=c("ExternalLinkIcon"),l=c("font"),a=c("RouterLink"),u=c("CodeTabs");return d(),k("div",null,[t("h1",f,[g,n(),t("a",b,[n("145. 二叉树的后序遍历"),e(o)])]),t("p",null,[n("🟢 "),e(l,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),e(a,{to:"/leetcode/outline/tag/stack.html"},{default:s(()=>[v]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/tree.html"},{default:s(()=>[y]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/depth-first-search.html"},{default:s(()=>[x]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/binary-tree.html"},{default:s(()=>[w]),_:1}),n("  🔗 "),t("a",T,[O,e(o)])]),E,e(u,{id:"149",data:[{id:"递归"},{id:"迭代"}]},{title0:s(({value:r,isActive:i})=>[n("递归")]),title1:s(({value:r,isActive:i})=>[n("迭代")]),tab0:s(({value:r,isActive:i})=>[N]),tab1:s(({value:r,isActive:i})=>[j]),_:1}),C,h(" prettier-ignore "),t("table",null,[q,t("tbody",null,[t("tr",null,[I,t("td",L,[t("a",V,[n("二叉树的中序遍历"),e(o)])]),t("td",A,[e(a,{to:"/leetcode/problem/0094.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",B,[e(a,{to:"/leetcode/outline/tag/stack.html"},{default:s(()=>[R]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/tree.html"},{default:s(()=>[z]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/depth-first-search.html"},{default:s(()=>[F]),_:1}),n(),G]),t("td",M,[e(l,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1})])]),t("tr",null,[S,t("td",D,[t("a",H,[n("N 叉树的后序遍历"),e(o)])]),t("td",J,[e(a,{to:"/leetcode/problem/0590.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",K,[e(a,{to:"/leetcode/outline/tag/stack.html"},{default:s(()=>[P]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/tree.html"},{default:s(()=>[Q]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/depth-first-search.html"},{default:s(()=>[U]),_:1})]),t("td",W,[e(l,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1})])]),t("tr",null,[X,t("td",Y,[t("a",Z,[n("到达首都的最少油耗"),e(o)])]),$,t("td",tt,[e(a,{to:"/leetcode/outline/tag/tree.html"},{default:s(()=>[nt]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/depth-first-search.html"},{default:s(()=>[et]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/breadth-first-search.html"},{default:s(()=>[st]),_:1}),n(),at]),t("td",ot,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])])])])])}const ut=p(m,[["render",lt],["__file","0145.html.vue"]]);export{ut as default};
