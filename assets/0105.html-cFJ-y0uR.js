import{_ as c}from"./2-6-10-GEaul7bj.js";import{_ as l,r as p,o as i,c as u,a as n,b as s,d as a,w as e,f as d,e as k}from"./app-5VBZs9Uu.js";const h={},m={id:"_105-从前序与中序遍历序列构造二叉树",tabindex:"-1"},_=n("a",{class:"header-anchor",href:"#_105-从前序与中序遍历序列构造二叉树","aria-hidden":"true"},"#",-1),f={href:"https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"树",-1),g=n("code",null,"数组",-1),v=n("code",null,"哈希表",-1),y=n("code",null,"分治",-1),x=n("code",null,"二叉树",-1),w={href:"https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"LeetCode",-1),N=k('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two integer arrays <code>preorder</code> and <code>inorder</code> where <code>preorder</code> is the preorder traversal of a binary tree and <code>inorder</code> is the inorder traversal of the same tree, construct and return <em>the binary tree</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/02/19/tree.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]</p><p>Output: [3,9,20,null,null,15,7]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: preorder = [-1], inorder = [-1]</p><p>Output: [-1]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= preorder.length &lt;= 3000</code></li><li><code>inorder.length == preorder.length</code></li><li><code>-3000 &lt;= preorder[i], inorder[i] &lt;= 3000</code></li><li><code>preorder</code> and <code>inorder</code> consist of <strong>unique</strong> values.</li><li>Each value of <code>inorder</code> also appears in <code>preorder</code>.</li><li><code>preorder</code> is <strong>guaranteed</strong> to be the preorder traversal of the tree.</li><li><code>inorder</code> is <strong>guaranteed</strong> to be the inorder traversal of the tree.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>根据一棵树的前序遍历与中序遍历构造二叉树。</p><p>注意: 你可以假设树中没有重复的元素。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>构造二叉树，第一件事一定是找根节点，然后想办法构造左右子树。</p><p>前序遍历结果第一个就是根节点的值，然后再根据中序遍历结果确定左右子树的节点。</p><p>不断的递归直到所有的树都生成完成。</p><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>递归时直接传入需要的 slice 范围作为输入, 可以避免申请对应 inorder 索引的内存。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">preorder</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">inorder</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">buildTree</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">preorder<span class="token punctuation">,</span> inorder</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>preorder<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>preorder<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> preorder<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>inorder<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> root<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>preorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> inorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>preorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> inorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,21),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),E=n("td",{style:{"text-align":"center"}},"106",-1),T={style:{"text-align":"left"}},C={href:"https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal",target:"_blank",rel:"noopener noreferrer"},L={style:{"text-align":"center"}},V={style:{"text-align":"left"}},I=n("code",null,"树",-1),B=n("code",null,"数组",-1),z=n("code",null,"哈希表",-1),M=n("code",null,"2+",-1),O={style:{"text-align":"left"}};function R(G,S){const o=p("ExternalLinkIcon"),r=p("font"),t=p("RouterLink");return i(),u("div",null,[n("h1",m,[_,s(),n("a",f,[s("105. 从前序与中序遍历序列构造二叉树"),a(o)])]),n("p",null,[s("🟠 "),a(r,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),a(t,{to:"/leetcode-js/outline/tag/tree.html"},{default:e(()=>[b]),_:1}),s(),a(t,{to:"/leetcode-js/outline/tag/array.html"},{default:e(()=>[g]),_:1}),s(),a(t,{to:"/leetcode-js/outline/tag/hash-table.html"},{default:e(()=>[v]),_:1}),s(),a(t,{to:"/leetcode-js/outline/tag/divide-and-conquer.html"},{default:e(()=>[y]),_:1}),s(),a(t,{to:"/leetcode-js/outline/tag/binary-tree.html"},{default:e(()=>[x]),_:1}),s("  🔗 "),n("a",w,[j,a(o)])]),N,d(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[E,n("td",T,[n("a",C,[s("从中序与后序遍历序列构造二叉树"),a(o)])]),n("td",L,[a(t,{to:"/leetcode-js/problem/0106.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",V,[a(t,{to:"/leetcode-js/outline/tag/tree.html"},{default:e(()=>[I]),_:1}),s(),a(t,{to:"/leetcode-js/outline/tag/array.html"},{default:e(()=>[B]),_:1}),s(),a(t,{to:"/leetcode-js/outline/tag/hash-table.html"},{default:e(()=>[z]),_:1}),s(),M]),n("td",O,[a(r,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1})])])])])])}const F=l(h,[["render",R],["__file","0105.html.vue"]]);export{F as default};
