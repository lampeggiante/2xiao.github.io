import{_ as u,r as c,o as d,c as k,a as t,b as n,d as e,w as s,f as h,e as _}from"./app-mvY9N9Pc.js";const m={},f={id:"_589-n-叉树的前序遍历",tabindex:"-1"},b=t("a",{class:"header-anchor",href:"#_589-n-叉树的前序遍历","aria-hidden":"true"},"#",-1),g={href:"https://leetcode.com/problems/n-ary-tree-preorder-traversal",target:"_blank",rel:"noopener noreferrer"},v=t("code",null,"栈",-1),y=t("code",null,"树",-1),x=t("code",null,"深度优先搜索",-1),w={href:"https://leetcode.com/problems/n-ary-tree-preorder-traversal",target:"_blank",rel:"noopener noreferrer"},N=t("code",null,"LeetCode",-1),E=_('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>root</code> of an n-ary tree, return <em>the preorder traversal of its nodes&#39; values</em>.</p><p>Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2018/10/12/narytreeexample.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,null,3,2,4,null,5,6]</p><p>Output: [1,3,5,6,2,4]</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2019/11/08/sample_4_964.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]</p><p>Output: [1,2,3,6,7,11,14,4,8,12,5,9,13,10]</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[0, 10^4]</code>.</li><li><code>0 &lt;= Node.val &lt;= 10^4</code></li><li>The height of the n-ary tree is less than or equal to <code>1000</code>.</li></ul><p><strong>Follow up:</strong> Recursive solution is trivial, could you do it iteratively?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个 <code>n</code> 叉树的根节点 <code>root</code> ，返回 <em>其节点值的 <strong>前序遍历</strong></em> 。</p><p><code>n</code> 叉树 在输入中按层序遍历进行序列化表示，每组子节点由空值 <code>null</code> 分隔（请参见示例）。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-递归" tabindex="-1"><a class="header-anchor" href="#思路一-递归" aria-hidden="true">#</a> 思路一：递归</h3><p>对于 n 叉树，<code>node.children</code> 表示节点的所有子节点。从根节点开始前序遍历，在访问每个节点时，将其值添加到结果数组中，然后递归地对每个子节点进行前序遍历。</p><hr><h3 id="思路二-迭代" tabindex="-1"><a class="header-anchor" href="#思路二-迭代" aria-hidden="true">#</a> 思路二：迭代</h3><p>也可以用迭代的方式实现思路一的递归函数，使用一个栈 <code>stack</code> ，初始化时将根节点入栈。在循环中，每次弹出栈顶节点，访问该节点，然后按逆序将其子节点入栈。这样保证了下一个要访问的节点是栈顶的子节点。</p><p>两种方式是等价的，区别在于递归的时候隐式地维护了一个栈，而迭代的时候需要显式地将这个栈模拟出来。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',23),j=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[n(`/**
 * `),t("span",{class:"token keyword"},"@param"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("Node"),t("span",{class:"token operator"},"|"),t("span",{class:"token keyword"},"null"),t("span",{class:"token punctuation"},"}")]),n(),t("span",{class:"token parameter"},"root"),n(`
 * `),t("span",{class:"token keyword"},"@return"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),n(`
 */`)]),n(`
`),t("span",{class:"token keyword"},"var"),n(),t("span",{class:"token function-variable function"},"preorder"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"function"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"root"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"!"),n("root"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"let"),n(" res "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),n("root"),t("span",{class:"token punctuation"},"."),n("val"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"for"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),n(" i "),t("span",{class:"token keyword"},"of"),n(" root"),t("span",{class:"token punctuation"},"."),n("children"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
		res`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"..."),t("span",{class:"token function"},"preorder"),t("span",{class:"token punctuation"},"("),n("i"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token punctuation"},"}"),n(`
	`),t("span",{class:"token keyword"},"return"),n(" res"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),C=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[n(`/**
 * `),t("span",{class:"token keyword"},"@param"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("Node"),t("span",{class:"token operator"},"|"),t("span",{class:"token keyword"},"null"),t("span",{class:"token punctuation"},"}")]),n(),t("span",{class:"token parameter"},"root"),n(`
 * `),t("span",{class:"token keyword"},"@return"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),n(`
 */`)]),n(`
`),t("span",{class:"token keyword"},"var"),n(),t("span",{class:"token function-variable function"},"preorder"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"function"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"root"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"!"),n("root"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"let"),n(" stack "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),n("root"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"let"),n(" res "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"while"),n(),t("span",{class:"token punctuation"},"("),n("stack"),t("span",{class:"token punctuation"},"."),n("length"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token keyword"},"let"),n(" node "),t("span",{class:"token operator"},"="),n(" stack"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"pop"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
		res`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),n("node"),t("span",{class:"token punctuation"},"."),n("val"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
		`),t("span",{class:"token keyword"},"for"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),n(" i "),t("span",{class:"token operator"},"="),n(" node"),t("span",{class:"token punctuation"},"."),n("children"),t("span",{class:"token punctuation"},"."),n("length "),t("span",{class:"token operator"},"-"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},";"),n(" i "),t("span",{class:"token operator"},">="),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),n(" i"),t("span",{class:"token operator"},"--"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
			stack`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),n("node"),t("span",{class:"token punctuation"},"."),n("children"),t("span",{class:"token punctuation"},"["),n("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
		`),t("span",{class:"token punctuation"},"}"),n(`
	`),t("span",{class:"token punctuation"},"}"),n(`
	`),t("span",{class:"token keyword"},"return"),n(" res"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),T=t("h2",{id:"相关题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),n(" 相关题目")],-1),q=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),L=t("td",{style:{"text-align":"center"}},"144",-1),V={style:{"text-align":"left"}},A={href:"https://leetcode.com/problems/binary-tree-preorder-traversal",target:"_blank",rel:"noopener noreferrer"},I={style:{"text-align":"center"}},z={href:"https://2xiao.github.io/leetcode-js/leetcode/problem/0144",target:"_blank",rel:"noopener noreferrer"},B={style:{"text-align":"left"}},R=t("code",null,"栈",-1),O=t("code",null,"树",-1),S=t("code",null,"深度优先搜索",-1),F=t("code",null,"1+",-1),G={style:{"text-align":"left"}},M=t("td",{style:{"text-align":"center"}},"429",-1),D={style:{"text-align":"left"}},H={href:"https://leetcode.com/problems/n-ary-tree-level-order-traversal",target:"_blank",rel:"noopener noreferrer"},J=t("td",{style:{"text-align":"center"}},null,-1),K={style:{"text-align":"left"}},P=t("code",null,"树",-1),Q=t("code",null,"广度优先搜索",-1),U={style:{"text-align":"left"}},W=t("td",{style:{"text-align":"center"}},"590",-1),X={style:{"text-align":"left"}},Y={href:"https://leetcode.com/problems/n-ary-tree-postorder-traversal",target:"_blank",rel:"noopener noreferrer"},Z={style:{"text-align":"center"}},$={href:"https://2xiao.github.io/leetcode-js/leetcode/problem/0590",target:"_blank",rel:"noopener noreferrer"},tt={style:{"text-align":"left"}},nt=t("code",null,"栈",-1),et=t("code",null,"树",-1),st=t("code",null,"深度优先搜索",-1),at={style:{"text-align":"left"}};function ot(lt,ct){const o=c("ExternalLinkIcon"),l=c("font"),a=c("RouterLink"),p=c("CodeTabs");return d(),k("div",null,[t("h1",f,[b,n(),t("a",g,[n("589. N 叉树的前序遍历"),e(o)])]),t("p",null,[n("🟢 "),e(l,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),e(a,{to:"/leetcode/outline/tag/stack.html"},{default:s(()=>[v]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/tree.html"},{default:s(()=>[y]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/depth-first-search.html"},{default:s(()=>[x]),_:1}),n("  🔗 "),t("a",w,[N,e(o)])]),E,e(p,{id:"97",data:[{id:"递归"},{id:"迭代"}]},{title0:s(({value:r,isActive:i})=>[n("递归")]),title1:s(({value:r,isActive:i})=>[n("迭代")]),tab0:s(({value:r,isActive:i})=>[j]),tab1:s(({value:r,isActive:i})=>[C]),_:1}),T,h(" prettier-ignore "),t("table",null,[q,t("tbody",null,[t("tr",null,[L,t("td",V,[t("a",A,[n("二叉树的前序遍历"),e(o)])]),t("td",I,[t("a",z,[n("[✓]"),e(o)])]),t("td",B,[e(a,{to:"/leetcode/outline/tag/stack.html"},{default:s(()=>[R]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/tree.html"},{default:s(()=>[O]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/depth-first-search.html"},{default:s(()=>[S]),_:1}),n(),F]),t("td",G,[e(l,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1})])]),t("tr",null,[M,t("td",D,[t("a",H,[n("N 叉树的层序遍历"),e(o)])]),J,t("td",K,[e(a,{to:"/leetcode/outline/tag/tree.html"},{default:s(()=>[P]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/breadth-first-search.html"},{default:s(()=>[Q]),_:1})]),t("td",U,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[W,t("td",X,[t("a",Y,[n("N 叉树的后序遍历"),e(o)])]),t("td",Z,[t("a",$,[n("[✓]"),e(o)])]),t("td",tt,[e(a,{to:"/leetcode/outline/tag/stack.html"},{default:s(()=>[nt]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/tree.html"},{default:s(()=>[et]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/depth-first-search.html"},{default:s(()=>[st]),_:1})]),t("td",at,[e(l,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1})])])])])])}const it=u(m,[["render",ot],["__file","0589.html.vue"]]);export{it as default};
