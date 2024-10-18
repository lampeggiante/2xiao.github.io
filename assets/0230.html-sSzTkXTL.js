import{_ as p,r as c,o as i,c as r,a as n,b as e,d as t,w as s,f as d,e as u}from"./app-GnK0vSxb.js";const k={},h={id:"_230-二叉搜索树中第-k-小的元素",tabindex:"-1"},_=n("a",{class:"header-anchor",href:"#_230-二叉搜索树中第-k-小的元素","aria-hidden":"true"},"#",-1),m={href:"https://leetcode.com/problems/kth-smallest-element-in-a-bst",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"树",-1),b=n("code",null,"深度优先搜索",-1),v=n("code",null,"二叉搜索树",-1),g=n("code",null,"二叉树",-1),y={href:"https://leetcode.com/problems/kth-smallest-element-in-a-bst",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>root</code> of a binary search tree, and an integer <code>k</code>, return <em>the</em><code>kth</code> <em>smallest value ( <strong>1-indexed</strong> ) of all the values of the nodes in the tree</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/01/28/kthtree1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [3,1,4,null,2], k = 1</p><p>Output: 1</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/01/28/kthtree2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [5,3,6,2,4,null,null,1], k = 3</p><p>Output: 3</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is <code>n</code>.</li><li><code>1 &lt;= k &lt;= n &lt;= 10^4</code></li><li><code>0 &lt;= Node.val &lt;= 10^4</code></li></ul><p><strong>Follow up:</strong> If the BST is modified often (i.e., we can do insert and delete operations) and you need to find the kth smallest frequently, how would you optimize?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个二叉搜索树的根节点 <code>root</code> ，和一个整数 <code>k</code> ，请你设计一个算法查找其中第 <code>k</code> 个最小元素（从 <code>1</code> 开始计数）。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>BST 的中序遍历结果是升序的，所以用一个外部变量记录中序遍历结果，第 <code>k</code> 个元素即是第 <code>k</code> 小的元素。</p><p>需要注意 <code>i++</code> 要在 <code>return</code> 之前执行，否则会导致返回正确节点的父节点。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">kthSmallest</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> res<span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">traverse</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
    i<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res <span class="token operator">=</span> root<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,19),E=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),N=n("td",{style:{"text-align":"center"}},"94",-1),j={style:{"text-align":"left"}},q={href:"https://leetcode.com/problems/binary-tree-inorder-traversal",target:"_blank",rel:"noopener noreferrer"},B={style:{"text-align":"center"}},C={style:{"text-align":"left"}},I=n("code",null,"栈",-1),L=n("code",null,"树",-1),T=n("code",null,"深度优先搜索",-1),V=n("code",null,"1+",-1),S={style:{"text-align":"left"}},z=n("td",{style:{"text-align":"center"}},"671",-1),O={style:{"text-align":"left"}},R={href:"https://leetcode.com/problems/second-minimum-node-in-a-binary-tree",target:"_blank",rel:"noopener noreferrer"},F=n("td",{style:{"text-align":"center"}},null,-1),G={style:{"text-align":"left"}},K=n("code",null,"树",-1),M=n("code",null,"深度优先搜索",-1),A=n("code",null,"二叉树",-1),D={style:{"text-align":"left"}};function H(J,P){const o=c("ExternalLinkIcon"),l=c("font"),a=c("RouterLink");return i(),r("div",null,[n("h1",h,[_,e(),n("a",m,[e("230. 二叉搜索树中第 K 小的元素"),t(o)])]),n("p",null,[e("🟠 "),t(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1}),e("  🔖  "),t(a,{to:"/leetcode/outline/tag/tree.html"},{default:s(()=>[f]),_:1}),e(),t(a,{to:"/leetcode/outline/tag/depth-first-search.html"},{default:s(()=>[b]),_:1}),e(),t(a,{to:"/leetcode/outline/tag/binary-search-tree.html"},{default:s(()=>[v]),_:1}),e(),t(a,{to:"/leetcode/outline/tag/binary-tree.html"},{default:s(()=>[g]),_:1}),e("  🔗 "),n("a",y,[x,t(o)])]),w,d(" prettier-ignore "),n("table",null,[E,n("tbody",null,[n("tr",null,[N,n("td",j,[n("a",q,[e("二叉树的中序遍历"),t(o)])]),n("td",B,[t(a,{to:"/leetcode/problem/0094.html"},{default:s(()=>[e("[✓]")]),_:1})]),n("td",C,[t(a,{to:"/leetcode/outline/tag/stack.html"},{default:s(()=>[I]),_:1}),e(),t(a,{to:"/leetcode/outline/tag/tree.html"},{default:s(()=>[L]),_:1}),e(),t(a,{to:"/leetcode/outline/tag/depth-first-search.html"},{default:s(()=>[T]),_:1}),e(),V]),n("td",S,[t(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1})])]),n("tr",null,[z,n("td",O,[n("a",R,[e("二叉树中第二小的节点"),t(o)])]),F,n("td",G,[t(a,{to:"/leetcode/outline/tag/tree.html"},{default:s(()=>[K]),_:1}),e(),t(a,{to:"/leetcode/outline/tag/depth-first-search.html"},{default:s(()=>[M]),_:1}),e(),t(a,{to:"/leetcode/outline/tag/binary-tree.html"},{default:s(()=>[A]),_:1})]),n("td",D,[t(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1})])])])])])}const U=p(k,[["render",H],["__file","0230.html.vue"]]);export{U as default};
