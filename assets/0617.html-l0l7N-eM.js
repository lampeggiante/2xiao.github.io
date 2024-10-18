import{_ as c,r as o,o as l,c as i,a as n,b as e,d as s,w as a,e as u}from"./app-5VBZs9Uu.js";const d={},k={id:"_617-合并二叉树",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#_617-合并二叉树","aria-hidden":"true"},"#",-1),m={href:"https://leetcode.com/problems/merge-two-binary-trees",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"树",-1),f=n("code",null,"深度优先搜索",-1),v=n("code",null,"广度优先搜索",-1),g=n("code",null,"二叉树",-1),b={href:"https://leetcode.com/problems/merge-two-binary-trees",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given two binary trees <code>root1</code> and <code>root2</code>.</p><p>Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.</p><p>Return <em>the merged tree</em>.</p><p><strong>Note:</strong> The merging process must start from the root nodes of both trees.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/02/05/merge.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]</p><p>Output: [3,4,5,5,4,null,7]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: root1 = [1], root2 = [1,2]</p><p>Output: [2,2]</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in both trees is in the range <code>[0, 2000]</code>.</li><li><code>-10^4 &lt;= Node.val &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你两棵二叉树： <code>root1</code> 和 <code>root2</code> 。</p><p>想象一下，当你将其中一棵覆盖到另一棵之上时，两棵树上的一些节点将会重叠（而另一些不会）。你需要将这两棵树合并成一棵新二叉树。合并的规则是：如果两个节点重叠，那么将这两个节点的值相加作为合并后节点的新值；否则，不为 null 的节点将直接作为新二叉树的节点。</p><p>返回合并后的二叉树。</p><p>注意: 合并过程必须从两个树的根节点开始。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以将 <code>root1</code> 和 <code>root2</code> 的根节点合并，然后递归地合并左右子树即可。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">mergeTrees</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root1<span class="token punctuation">,</span> root2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root1<span class="token punctuation">)</span> <span class="token keyword">return</span> root2<span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root2<span class="token punctuation">)</span> <span class="token keyword">return</span> root1<span class="token punctuation">;</span>
	<span class="token keyword">let</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>root1<span class="token punctuation">.</span>val <span class="token operator">+</span> root2<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
	root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">mergeTrees</span><span class="token punctuation">(</span>root1<span class="token punctuation">.</span>left<span class="token punctuation">,</span> root2<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
	root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">mergeTrees</span><span class="token punctuation">(</span>root1<span class="token punctuation">.</span>right<span class="token punctuation">,</span> root2<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21);function x(T,N){const p=o("ExternalLinkIcon"),r=o("font"),t=o("RouterLink");return l(),i("div",null,[n("h1",k,[h,e(),n("a",m,[e("617. 合并二叉树"),s(p)])]),n("p",null,[e("🟢 "),s(r,{color:"#15bd66"},{default:a(()=>[e("Easy")]),_:1}),e("  🔖  "),s(t,{to:"/leetcode-js/outline/tag/tree.html"},{default:a(()=>[_]),_:1}),e(),s(t,{to:"/leetcode-js/outline/tag/depth-first-search.html"},{default:a(()=>[f]),_:1}),e(),s(t,{to:"/leetcode-js/outline/tag/breadth-first-search.html"},{default:a(()=>[v]),_:1}),e(),s(t,{to:"/leetcode-js/outline/tag/binary-tree.html"},{default:a(()=>[g]),_:1}),e("  🔗 "),n("a",b,[w,s(p)])]),y])}const E=c(d,[["render",x],["__file","0617.html.vue"]]);export{E as default};
