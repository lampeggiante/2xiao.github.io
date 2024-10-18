import{_ as i,r as c,o as d,c as r,a as t,b as n,d as e,w as s,f as p,e as u}from"./app-mvY9N9Pc.js";const h={},_={id:"_124-二叉树中的最大路径和",tabindex:"-1"},m=t("a",{class:"header-anchor",href:"#_124-二叉树中的最大路径和","aria-hidden":"true"},"#",-1),f={href:"https://leetcode.com/problems/binary-tree-maximum-path-sum",target:"_blank",rel:"noopener noreferrer"},g=t("code",null,"树",-1),k=t("code",null,"深度优先搜索",-1),b=t("code",null,"动态规划",-1),x=t("code",null,"二叉树",-1),v={href:"https://leetcode.com/problems/binary-tree-maximum-path-sum",target:"_blank",rel:"noopener noreferrer"},y=t("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>A <strong>path</strong> in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence <strong>at most once</strong>. Note that the path does not need to pass through the root.</p><p>The <strong>path sum</strong> of a path is the sum of the node&#39;s values in the path.</p><p>Given the <code>root</code> of a binary tree, return <em>the maximum <strong>path sum</strong> of any <strong>non-empty</strong> path</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/10/13/exx1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,2,3]</p><p>Output: 6</p><p>Explanation: The optimal path is 2 -&gt; 1 -&gt; 3 with a path sum of 2 + 1 + 3 = 6.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/10/13/exx2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [-10,9,20,null,null,15,7]</p><p>Output: 42</p><p>Explanation: The optimal path is 15 -&gt; 20 -&gt; 7 with a path sum of 15 + 20 + 7 = 42.</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[1, 3 * 10^4]</code>.</li><li><code>-1000 &lt;= Node.val &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>二叉树中的 <strong>路径</strong> 被定义为一条节点序列，序列中每对相邻节点之间都存在一条边。同一个节点在一条路径序列中 <strong>至多出现一次</strong> 。该路径 <strong>至少包含一个</strong> 节点，且不一定经过根节点。</p><p><strong>路径和</strong> 是路径中各节点值的总和。</p><p>给你一个二叉树的根节点 <code>root</code> ，返回其 <strong>最大路径和</strong> 。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>给定一个二叉树，路径不一定要从根节点出发，可以从任意节点开始，并可以到达任意节点。要找到路径和的最大值，需要递归地计算每个节点的最大贡献值。</p><ul><li>对于当前节点 <code>root</code>，定义一个函数 <code>maxGain(node)</code>，表示从当前节点出发到任意下属节点的路径最大贡献值。贡献值是指该节点及其子树为路径提供的最大和。</li><li>当递归到叶节点的 <code>null</code> 节点时，返回 <code>0</code>，表示空节点的贡献为 <code>0</code>。</li><li>计算出当前节点左右子树的最大贡献值 <code>leftGain</code> 和 <code>rightGain</code>。</li><li>当前节点的最大路径和可以是： <ul><li>当前节点值 <code>node.val</code>。</li><li>当前节点 + 左子树的贡献。</li><li>当前节点 + 右子树的贡献。</li><li>当前节点 + 左子树的贡献 + 右子树的贡献（代表路径穿过当前节点）。</li></ul></li><li>更新全局最大路径和 <code>res</code>。</li><li>返回当前节点可以提供给父节点的最大路径贡献，值为 <code>node.val + max(leftGain, rightGain)</code>，即选择左右子树中贡献较大的那个。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是二叉树中的节点数量。我们需要遍历每个节点一次。</li><li><strong>空间复杂度</strong>：<code>O(h)</code>，其中 <code>h</code>是二叉树的高度。递归栈的深度取决于树的高度，在最坏情况下，树的高度为<code>O(n)</code>，即退化成链表的情况。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxPathSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">Infinity</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">maxGain</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

		<span class="token comment">// 递归计算左右子树的最大贡献值</span>
		<span class="token keyword">let</span> leftGain <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token function">maxGain</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 负数时选择0</span>
		<span class="token keyword">let</span> rightGain <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token function">maxGain</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 更新全局最大路径和</span>
		res <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> node<span class="token punctuation">.</span>val <span class="token operator">+</span> leftGain <span class="token operator">+</span> rightGain<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 返回当前节点可以提供给父节点的最大贡献</span>
		<span class="token keyword">return</span> node<span class="token punctuation">.</span>val <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>leftGain<span class="token punctuation">,</span> rightGain<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token function">maxGain</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,24),G=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),j=t("td",{style:{"text-align":"center"}},"112",-1),E={style:{"text-align":"left"}},M={href:"https://leetcode.com/problems/path-sum",target:"_blank",rel:"noopener noreferrer"},N={style:{"text-align":"center"}},q={href:"https://2xiao.github.io/leetcode-js/leetcode/problem/0112",target:"_blank",rel:"noopener noreferrer"},I={style:{"text-align":"left"}},T=t("code",null,"树",-1),V=t("code",null,"深度优先搜索",-1),C=t("code",null,"广度优先搜索",-1),L=t("code",null,"1+",-1),O={style:{"text-align":"left"}},B=t("td",{style:{"text-align":"center"}},"129",-1),z={style:{"text-align":"left"}},A={href:"https://leetcode.com/problems/sum-root-to-leaf-numbers",target:"_blank",rel:"noopener noreferrer"},H={style:{"text-align":"center"}},R={href:"https://2xiao.github.io/leetcode-js/leetcode/problem/0129",target:"_blank",rel:"noopener noreferrer"},S={style:{"text-align":"left"}},P=t("code",null,"树",-1),D=t("code",null,"深度优先搜索",-1),F=t("code",null,"二叉树",-1),J={style:{"text-align":"left"}},K=t("td",{style:{"text-align":"center"}},"666",-1),Q={style:{"text-align":"left"}},U={href:"https://leetcode.com/problems/path-sum-iv",target:"_blank",rel:"noopener noreferrer"},W=t("td",{style:{"text-align":"center"}},null,-1),X={style:{"text-align":"left"}},Y=t("code",null,"树",-1),Z=t("code",null,"深度优先搜索",-1),$=t("code",null,"数组",-1),tt=t("code",null,"2+",-1),et={style:{"text-align":"left"}},nt=t("td",{style:{"text-align":"center"}},"687",-1),st={style:{"text-align":"left"}},at={href:"https://leetcode.com/problems/longest-univalue-path",target:"_blank",rel:"noopener noreferrer"},ot=t("td",{style:{"text-align":"center"}},null,-1),lt={style:{"text-align":"left"}},ct=t("code",null,"树",-1),it=t("code",null,"深度优先搜索",-1),dt=t("code",null,"二叉树",-1),rt={style:{"text-align":"left"}},pt=t("td",{style:{"text-align":"center"}},"1376",-1),ut={style:{"text-align":"left"}},ht={href:"https://leetcode.com/problems/time-needed-to-inform-all-employees",target:"_blank",rel:"noopener noreferrer"},_t=t("td",{style:{"text-align":"center"}},null,-1),mt={style:{"text-align":"left"}},ft=t("code",null,"树",-1),gt=t("code",null,"深度优先搜索",-1),kt=t("code",null,"广度优先搜索",-1),bt={style:{"text-align":"left"}},xt=t("td",{style:{"text-align":"center"}},"2538",-1),vt={style:{"text-align":"left"}},yt={href:"https://leetcode.com/problems/difference-between-maximum-and-minimum-price-sum",target:"_blank",rel:"noopener noreferrer"},wt=t("td",{style:{"text-align":"center"}},null,-1),Gt={style:{"text-align":"left"}},jt=t("code",null,"树",-1),Et=t("code",null,"深度优先搜索",-1),Mt=t("code",null,"数组",-1),Nt=t("code",null,"1+",-1),qt={style:{"text-align":"left"}};function It(Tt,Vt){const o=c("ExternalLinkIcon"),l=c("font"),a=c("RouterLink");return d(),r("div",null,[t("h1",_,[m,n(),t("a",f,[n("124. 二叉树中的最大路径和"),e(o)])]),t("p",null,[n("🔴 "),e(l,{color:"#ff334b"},{default:s(()=>[n("Hard")]),_:1}),n("  🔖  "),e(a,{to:"/leetcode/outline/tag/tree.html"},{default:s(()=>[g]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/depth-first-search.html"},{default:s(()=>[k]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/dynamic-programming.html"},{default:s(()=>[b]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/binary-tree.html"},{default:s(()=>[x]),_:1}),n("  🔗 "),t("a",v,[y,e(o)])]),w,p(" prettier-ignore "),t("table",null,[G,t("tbody",null,[t("tr",null,[j,t("td",E,[t("a",M,[n("路径总和"),e(o)])]),t("td",N,[t("a",q,[n("[✓]"),e(o)])]),t("td",I,[e(a,{to:"/leetcode/outline/tag/tree.html"},{default:s(()=>[T]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/depth-first-search.html"},{default:s(()=>[V]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/breadth-first-search.html"},{default:s(()=>[C]),_:1}),n(),L]),t("td",O,[e(l,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1})])]),t("tr",null,[B,t("td",z,[t("a",A,[n("求根节点到叶节点数字之和"),e(o)])]),t("td",H,[t("a",R,[n("[✓]"),e(o)])]),t("td",S,[e(a,{to:"/leetcode/outline/tag/tree.html"},{default:s(()=>[P]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/depth-first-search.html"},{default:s(()=>[D]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/binary-tree.html"},{default:s(()=>[F]),_:1})]),t("td",J,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[K,t("td",Q,[t("a",U,[n("路径总和 IV"),e(o)])]),W,t("td",X,[e(a,{to:"/leetcode/outline/tag/tree.html"},{default:s(()=>[Y]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/depth-first-search.html"},{default:s(()=>[Z]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[$]),_:1}),n(),tt]),t("td",et,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[nt,t("td",st,[t("a",at,[n("最长同值路径"),e(o)])]),ot,t("td",lt,[e(a,{to:"/leetcode/outline/tag/tree.html"},{default:s(()=>[ct]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/depth-first-search.html"},{default:s(()=>[it]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/binary-tree.html"},{default:s(()=>[dt]),_:1})]),t("td",rt,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[pt,t("td",ut,[t("a",ht,[n("通知所有员工所需的时间"),e(o)])]),_t,t("td",mt,[e(a,{to:"/leetcode/outline/tag/tree.html"},{default:s(()=>[ft]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/depth-first-search.html"},{default:s(()=>[gt]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/breadth-first-search.html"},{default:s(()=>[kt]),_:1})]),t("td",bt,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[xt,t("td",vt,[t("a",yt,[n("最大价值和与最小价值和的差值"),e(o)])]),wt,t("td",Gt,[e(a,{to:"/leetcode/outline/tag/tree.html"},{default:s(()=>[jt]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/depth-first-search.html"},{default:s(()=>[Et]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[Mt]),_:1}),n(),Nt]),t("td",qt,[e(l,{color:"#ff334b"},{default:s(()=>[n("Hard")]),_:1})])])])])])}const Lt=i(h,[["render",It],["__file","0124.html.vue"]]);export{Lt as default};
