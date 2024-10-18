import{_ as u,r as c,o as p,c as h,a as t,b as e,d as n,w as s,f as _,e as k}from"./app-5VBZs9Uu.js";const f={},m={id:"_104-二叉树的最大深度",tabindex:"-1"},b=t("a",{class:"header-anchor",href:"#_104-二叉树的最大深度","aria-hidden":"true"},"#",-1),g={href:"https://leetcode.com/problems/maximum-depth-of-binary-tree",target:"_blank",rel:"noopener noreferrer"},y=t("code",null,"树",-1),x=t("code",null,"深度优先搜索",-1),v=t("code",null,"广度优先搜索",-1),j=t("code",null,"二叉树",-1),w={href:"https://leetcode.com/problems/maximum-depth-of-binary-tree",target:"_blank",rel:"noopener noreferrer"},E=t("code",null,"LeetCode",-1),N=k('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>root</code> of a binary tree, return <em>its maximum depth</em>.</p><p>A binary tree&#39;s <strong>maximum depth</strong> is the number of nodes along the longest path from the root node down to the farthest leaf node.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/11/26/tmp-tree.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [3,9,20,null,null,15,7]</p><p>Output: 3</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: root = [1,null,2]</p><p>Output: 2</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[0, 10^4]</code>.</li><li><code>-100 &lt;= Node.val &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>要求输出一棵树的最大高度。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-递归" tabindex="-1"><a class="header-anchor" href="#思路一-递归" aria-hidden="true">#</a> 思路一：递归</h3><p>只需求出根节点的左孩子的最大高度和根节点右孩子的最大高度，取出两者的最大值再加一即为根节点的最大高度。</p><hr><h3 id="思路二-回溯" tabindex="-1"><a class="header-anchor" href="#思路二-回溯" aria-hidden="true">#</a> 思路二：回溯</h3><p>深度优先搜索（DFS）一颗二叉树，在 DFS 中，递归返回的时候，我们需要进行回溯（backtrack）。<code>depth</code> 变量用来记录当前节点的深度，每次进入一个子节点时，<code>depth</code> 增加，每次返回到父节点时，<code>depth</code> 需要减少。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',19),C=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[e(`/**
 * `),t("span",{class:"token keyword"},"@param"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("TreeNode"),t("span",{class:"token punctuation"},"}")]),e(),t("span",{class:"token parameter"},"root"),e(`
 * `),t("span",{class:"token keyword"},"@return"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("number"),t("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),t("span",{class:"token keyword"},"var"),e(),t("span",{class:"token function-variable function"},"maxDepth"),e(),t("span",{class:"token operator"},"="),e(),t("span",{class:"token keyword"},"function"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"root"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
	`),t("span",{class:"token keyword"},"if"),e(),t("span",{class:"token punctuation"},"("),e("root "),t("span",{class:"token operator"},"=="),e(),t("span",{class:"token keyword"},"null"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token keyword"},"return"),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"return"),e(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"max"),t("span",{class:"token punctuation"},"("),t("span",{class:"token function"},"maxDepth"),t("span",{class:"token punctuation"},"("),e("root"),t("span",{class:"token punctuation"},"."),e("left"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),e(),t("span",{class:"token function"},"maxDepth"),t("span",{class:"token punctuation"},"("),e("root"),t("span",{class:"token punctuation"},"."),e("right"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token operator"},"+"),e(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},";"),e(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),D=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token keyword"},"var"),e(),t("span",{class:"token function-variable function"},"maxDepth"),e(),t("span",{class:"token operator"},"="),e(),t("span",{class:"token keyword"},"function"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"root"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
	`),t("span",{class:"token keyword"},"let"),e(" track "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"let"),e(" res "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"const"),e(),t("span",{class:"token function-variable function"},"backtrack"),e(),t("span",{class:"token operator"},"="),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"root"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token operator"},"=>"),e(),t("span",{class:"token punctuation"},"{"),e(`
		`),t("span",{class:"token keyword"},"if"),e(),t("span",{class:"token punctuation"},"("),e("root "),t("span",{class:"token operator"},"=="),e(),t("span",{class:"token keyword"},"null"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token keyword"},"return"),t("span",{class:"token punctuation"},";"),e(`

		track`),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},";"),e(`
		res `),t("span",{class:"token operator"},"="),e(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"max"),t("span",{class:"token punctuation"},"("),e("res"),t("span",{class:"token punctuation"},","),e(" track"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
		`),t("span",{class:"token function"},"backtrack"),t("span",{class:"token punctuation"},"("),e("root"),t("span",{class:"token punctuation"},"."),e("left"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
		`),t("span",{class:"token function"},"backtrack"),t("span",{class:"token punctuation"},"("),e("root"),t("span",{class:"token punctuation"},"."),e("right"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
		track`),t("span",{class:"token operator"},"--"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token function"},"backtrack"),t("span",{class:"token punctuation"},"("),e("root"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"return"),e(" res"),t("span",{class:"token punctuation"},";"),e(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),q=t("h2",{id:"相关题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),e(" 相关题目")],-1),A=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),L=t("td",{style:{"text-align":"center"}},"110",-1),T={style:{"text-align":"left"}},V={href:"https://leetcode.com/problems/balanced-binary-tree",target:"_blank",rel:"noopener noreferrer"},I={style:{"text-align":"center"}},M={style:{"text-align":"left"}},B=t("code",null,"树",-1),S=t("code",null,"深度优先搜索",-1),F=t("code",null,"二叉树",-1),O={style:{"text-align":"left"}},R=t("td",{style:{"text-align":"center"}},"111",-1),z={style:{"text-align":"left"}},G={href:"https://leetcode.com/problems/minimum-depth-of-binary-tree",target:"_blank",rel:"noopener noreferrer"},H={style:{"text-align":"center"}},J={style:{"text-align":"left"}},K=t("code",null,"树",-1),P=t("code",null,"深度优先搜索",-1),Q=t("code",null,"广度优先搜索",-1),U=t("code",null,"1+",-1),W={style:{"text-align":"left"}},X=t("td",{style:{"text-align":"center"}},"559",-1),Y={style:{"text-align":"left"}},Z={href:"https://leetcode.com/problems/maximum-depth-of-n-ary-tree",target:"_blank",rel:"noopener noreferrer"},$={style:{"text-align":"center"}},tt={style:{"text-align":"left"}},et=t("code",null,"树",-1),nt=t("code",null,"深度优先搜索",-1),st=t("code",null,"广度优先搜索",-1),ot={style:{"text-align":"left"}},at=t("td",{style:{"text-align":"center"}},"1376",-1),lt={style:{"text-align":"left"}},ct={href:"https://leetcode.com/problems/time-needed-to-inform-all-employees",target:"_blank",rel:"noopener noreferrer"},rt=t("td",{style:{"text-align":"center"}},null,-1),it={style:{"text-align":"left"}},dt=t("code",null,"树",-1),ut=t("code",null,"深度优先搜索",-1),pt=t("code",null,"广度优先搜索",-1),ht={style:{"text-align":"left"}},_t=t("td",{style:{"text-align":"center"}},"2385",-1),kt={style:{"text-align":"left"}},ft={href:"https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected",target:"_blank",rel:"noopener noreferrer"},mt=t("td",{style:{"text-align":"center"}},null,-1),bt={style:{"text-align":"left"}},gt=t("code",null,"树",-1),yt=t("code",null,"深度优先搜索",-1),xt=t("code",null,"广度优先搜索",-1),vt=t("code",null,"2+",-1),jt={style:{"text-align":"left"}},wt=t("td",{style:{"text-align":"center"}},"2458",-1),Et={style:{"text-align":"left"}},Nt={href:"https://leetcode.com/problems/height-of-binary-tree-after-subtree-removal-queries",target:"_blank",rel:"noopener noreferrer"},Ct=t("td",{style:{"text-align":"center"}},null,-1),Dt={style:{"text-align":"left"}},qt=t("code",null,"树",-1),At=t("code",null,"深度优先搜索",-1),Lt=t("code",null,"广度优先搜索",-1),Tt=t("code",null,"2+",-1),Vt={style:{"text-align":"left"}};function It(Mt,Bt){const a=c("ExternalLinkIcon"),l=c("font"),o=c("RouterLink"),d=c("CodeTabs");return p(),h("div",null,[t("h1",m,[b,e(),t("a",g,[e("104. 二叉树的最大深度"),n(a)])]),t("p",null,[e("🟢 "),n(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),n(o,{to:"/leetcode-js/outline/tag/tree.html"},{default:s(()=>[y]),_:1}),e(),n(o,{to:"/leetcode-js/outline/tag/depth-first-search.html"},{default:s(()=>[x]),_:1}),e(),n(o,{to:"/leetcode-js/outline/tag/breadth-first-search.html"},{default:s(()=>[v]),_:1}),e(),n(o,{to:"/leetcode-js/outline/tag/binary-tree.html"},{default:s(()=>[j]),_:1}),e("  🔗 "),t("a",w,[E,n(a)])]),N,n(d,{id:"80",data:[{id:"递归"},{id:"回溯"}]},{title0:s(({value:r,isActive:i})=>[e("递归")]),title1:s(({value:r,isActive:i})=>[e("回溯")]),tab0:s(({value:r,isActive:i})=>[C]),tab1:s(({value:r,isActive:i})=>[D]),_:1}),q,_(" prettier-ignore "),t("table",null,[A,t("tbody",null,[t("tr",null,[L,t("td",T,[t("a",V,[e("平衡二叉树"),n(a)])]),t("td",I,[n(o,{to:"/leetcode-js/problem/0110.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",M,[n(o,{to:"/leetcode-js/outline/tag/tree.html"},{default:s(()=>[B]),_:1}),e(),n(o,{to:"/leetcode-js/outline/tag/depth-first-search.html"},{default:s(()=>[S]),_:1}),e(),n(o,{to:"/leetcode-js/outline/tag/binary-tree.html"},{default:s(()=>[F]),_:1})]),t("td",O,[n(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1})])]),t("tr",null,[R,t("td",z,[t("a",G,[e("二叉树的最小深度"),n(a)])]),t("td",H,[n(o,{to:"/leetcode-js/problem/0111.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",J,[n(o,{to:"/leetcode-js/outline/tag/tree.html"},{default:s(()=>[K]),_:1}),e(),n(o,{to:"/leetcode-js/outline/tag/depth-first-search.html"},{default:s(()=>[P]),_:1}),e(),n(o,{to:"/leetcode-js/outline/tag/breadth-first-search.html"},{default:s(()=>[Q]),_:1}),e(),U]),t("td",W,[n(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1})])]),t("tr",null,[X,t("td",Y,[t("a",Z,[e("N 叉树的最大深度"),n(a)])]),t("td",$,[n(o,{to:"/leetcode-js/problem/0559.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",tt,[n(o,{to:"/leetcode-js/outline/tag/tree.html"},{default:s(()=>[et]),_:1}),e(),n(o,{to:"/leetcode-js/outline/tag/depth-first-search.html"},{default:s(()=>[nt]),_:1}),e(),n(o,{to:"/leetcode-js/outline/tag/breadth-first-search.html"},{default:s(()=>[st]),_:1})]),t("td",ot,[n(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1})])]),t("tr",null,[at,t("td",lt,[t("a",ct,[e("通知所有员工所需的时间"),n(a)])]),rt,t("td",it,[n(o,{to:"/leetcode-js/outline/tag/tree.html"},{default:s(()=>[dt]),_:1}),e(),n(o,{to:"/leetcode-js/outline/tag/depth-first-search.html"},{default:s(()=>[ut]),_:1}),e(),n(o,{to:"/leetcode-js/outline/tag/breadth-first-search.html"},{default:s(()=>[pt]),_:1})]),t("td",ht,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[_t,t("td",kt,[t("a",ft,[e("感染二叉树需要的总时间"),n(a)])]),mt,t("td",bt,[n(o,{to:"/leetcode-js/outline/tag/tree.html"},{default:s(()=>[gt]),_:1}),e(),n(o,{to:"/leetcode-js/outline/tag/depth-first-search.html"},{default:s(()=>[yt]),_:1}),e(),n(o,{to:"/leetcode-js/outline/tag/breadth-first-search.html"},{default:s(()=>[xt]),_:1}),e(),vt]),t("td",jt,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[wt,t("td",Et,[t("a",Nt,[e("移除子树后的二叉树高度"),n(a)])]),Ct,t("td",Dt,[n(o,{to:"/leetcode-js/outline/tag/tree.html"},{default:s(()=>[qt]),_:1}),e(),n(o,{to:"/leetcode-js/outline/tag/depth-first-search.html"},{default:s(()=>[At]),_:1}),e(),n(o,{to:"/leetcode-js/outline/tag/breadth-first-search.html"},{default:s(()=>[Lt]),_:1}),e(),Tt]),t("td",Vt,[n(l,{color:"#ff334b"},{default:s(()=>[e("Hard")]),_:1})])])])])])}const Ft=u(f,[["render",It],["__file","0104.html.vue"]]);export{Ft as default};
