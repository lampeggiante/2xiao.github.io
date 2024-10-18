import{_ as p,r as c,o as i,c as u,a as n,b as t,d as s,w as e,f as r,e as d}from"./app-GnK0vSxb.js";const m={},h={id:"_437-路径总和-iii",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#_437-路径总和-iii","aria-hidden":"true"},"#",-1),_={href:"https://leetcode.com/problems/path-sum-iii",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"树",-1),f=n("code",null,"深度优先搜索",-1),v=n("code",null,"二叉树",-1),b={href:"https://leetcode.com/problems/path-sum-iii",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>root</code> of a binary tree and an integer <code>targetSum</code>, return <em>the number of paths where the sum of the values along the path equals</em><code>targetSum</code>.</p><p>The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/04/09/pathsum3-1-tree.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8</p><p>Output: 3</p><p>Explanation: The paths that sum to 8 are shown.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22</p><p>Output: 3</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[0, 1000]</code>.</li><li><code>-10^9 &lt;= Node.val &lt;= 10^9</code></li><li><code>-1000 &lt;= targetSum &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个二叉树的根节点 <code>root</code> ，和一个整数 <code>targetSum</code> ，求该二叉树里节点值之和等于 <code>targetSum</code> 的 <strong>路径</strong> 的数目。</p><p><strong>路径</strong> 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/04/09/pathsum3-1-tree.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 和等于 8 的路径有 3 条，如图所示。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22</p><p><strong>输出：</strong> 3</p></blockquote><p><strong>提示:</strong></p><ul><li>二叉树的节点个数的范围是 <code>[0,1000]</code></li><li><code>-10^9 &lt;= Node.val &lt;= 10^9</code></li><li><code>-1000 &lt;= targetSum &lt;= 1000</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用<strong>深度优先搜索 (DFS)</strong> 和<strong>前缀和</strong>来解决这个问题。</p><ul><li>维护一个哈希表 <code>map</code>，存储从根节点到当前节点的所有路径和的出现次数。</li><li>在每次访问一个节点时，我们计算当前路径和 <code>sum</code>，并检查在此路径之前是否有路径和 <code>sum - targetSum</code>。如果存在，则说明有一条从之前某个节点到当前节点的路径的和为 <code>targetSum</code>。</li><li>递归处理左右节点，并在递归返回时回退 <code>map</code>，保证每次路径的计算仅在当前分支有效。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，其中 <code>n</code> 是树中节点的个数。每个节点仅被访问一次。</li><li><strong>空间复杂度</strong>: <code>O(n)</code>，用于存储递归栈和前缀和哈希表。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">targetSum</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">pathSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> targetSum</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 当路径和正好等于targetSum时，需要有一个虚拟前缀和为0的路径</span>
	map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 深度优先遍历</span>
	<span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> sum</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

		<span class="token comment">// 更新当前路径和</span>
		sum <span class="token operator">+=</span> root<span class="token punctuation">.</span>val<span class="token punctuation">;</span>

		<span class="token comment">// 查找有多少个之前的路径和等于sum - targetSum</span>
		<span class="token keyword">let</span> res <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>sum <span class="token operator">-</span> targetSum<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">;</span>

		<span class="token comment">// 更新路径和的计数</span>
		map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>sum<span class="token punctuation">,</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 递归处理左右子树</span>
		res <span class="token operator">+=</span> <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
		res <span class="token operator">+=</span> <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> sum<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 回溯时将当前节点的路径和从哈希表中删除</span>
		map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>sum<span class="token punctuation">,</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">return</span> res<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,28),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),S=n("td",{style:{"text-align":"center"}},"112",-1),I={style:{"text-align":"left"}},q={href:"https://leetcode.com/problems/path-sum",target:"_blank",rel:"noopener noreferrer"},N={style:{"text-align":"center"}},E={style:{"text-align":"left"}},T=n("code",null,"树",-1),V=n("code",null,"深度优先搜索",-1),j=n("code",null,"广度优先搜索",-1),C=n("code",null,"1+",-1),L={style:{"text-align":"left"}},M=n("td",{style:{"text-align":"center"}},"113",-1),O={style:{"text-align":"left"}},B={href:"https://leetcode.com/problems/path-sum-ii",target:"_blank",rel:"noopener noreferrer"},z={style:{"text-align":"center"}},D={style:{"text-align":"left"}},R=n("code",null,"树",-1),F=n("code",null,"深度优先搜索",-1),G=n("code",null,"回溯",-1),A=n("code",null,"1+",-1),H={style:{"text-align":"left"}},J=n("td",{style:{"text-align":"center"}},"666",-1),K={style:{"text-align":"left"}},P={href:"https://leetcode.com/problems/path-sum-iv",target:"_blank",rel:"noopener noreferrer"},Q=n("td",{style:{"text-align":"center"}},null,-1),U={style:{"text-align":"left"}},W=n("code",null,"树",-1),X=n("code",null,"深度优先搜索",-1),Y=n("code",null,"数组",-1),Z=n("code",null,"2+",-1),$={style:{"text-align":"left"}},nn=n("td",{style:{"text-align":"center"}},"687",-1),tn={style:{"text-align":"left"}},sn={href:"https://leetcode.com/problems/longest-univalue-path",target:"_blank",rel:"noopener noreferrer"},en=n("td",{style:{"text-align":"center"}},null,-1),an={style:{"text-align":"left"}},on=n("code",null,"树",-1),ln=n("code",null,"深度优先搜索",-1),cn=n("code",null,"二叉树",-1),pn={style:{"text-align":"left"}};function un(rn,dn){const o=c("ExternalLinkIcon"),l=c("font"),a=c("RouterLink");return i(),u("div",null,[n("h1",h,[k,t(),n("a",_,[t("437. 路径总和 III"),s(o)])]),n("p",null,[t("🟠 "),s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1}),t("  🔖  "),s(a,{to:"/leetcode/outline/tag/tree.html"},{default:e(()=>[g]),_:1}),t(),s(a,{to:"/leetcode/outline/tag/depth-first-search.html"},{default:e(()=>[f]),_:1}),t(),s(a,{to:"/leetcode/outline/tag/binary-tree.html"},{default:e(()=>[v]),_:1}),t("  🔗 "),n("a",b,[y,s(o)])]),x,r(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[S,n("td",I,[n("a",q,[t("路径总和"),s(o)])]),n("td",N,[s(a,{to:"/leetcode/problem/0112.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",E,[s(a,{to:"/leetcode/outline/tag/tree.html"},{default:e(()=>[T]),_:1}),t(),s(a,{to:"/leetcode/outline/tag/depth-first-search.html"},{default:e(()=>[V]),_:1}),t(),s(a,{to:"/leetcode/outline/tag/breadth-first-search.html"},{default:e(()=>[j]),_:1}),t(),C]),n("td",L,[s(l,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1})])]),n("tr",null,[M,n("td",O,[n("a",B,[t("路径总和 II"),s(o)])]),n("td",z,[s(a,{to:"/leetcode/problem/0113.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",D,[s(a,{to:"/leetcode/outline/tag/tree.html"},{default:e(()=>[R]),_:1}),t(),s(a,{to:"/leetcode/outline/tag/depth-first-search.html"},{default:e(()=>[F]),_:1}),t(),s(a,{to:"/leetcode/outline/tag/backtracking.html"},{default:e(()=>[G]),_:1}),t(),A]),n("td",H,[s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1})])]),n("tr",null,[J,n("td",K,[n("a",P,[t("路径总和 IV"),s(o)])]),Q,n("td",U,[s(a,{to:"/leetcode/outline/tag/tree.html"},{default:e(()=>[W]),_:1}),t(),s(a,{to:"/leetcode/outline/tag/depth-first-search.html"},{default:e(()=>[X]),_:1}),t(),s(a,{to:"/leetcode/outline/tag/array.html"},{default:e(()=>[Y]),_:1}),t(),Z]),n("td",$,[s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1})])]),n("tr",null,[nn,n("td",tn,[n("a",sn,[t("最长同值路径"),s(o)])]),en,n("td",an,[s(a,{to:"/leetcode/outline/tag/tree.html"},{default:e(()=>[on]),_:1}),t(),s(a,{to:"/leetcode/outline/tag/depth-first-search.html"},{default:e(()=>[ln]),_:1}),t(),s(a,{to:"/leetcode/outline/tag/binary-tree.html"},{default:e(()=>[cn]),_:1})]),n("td",pn,[s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1})])])])])])}const hn=p(m,[["render",un],["__file","0437.html.vue"]]);export{hn as default};
