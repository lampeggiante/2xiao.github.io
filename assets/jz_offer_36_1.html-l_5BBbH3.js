import{_ as i,r as o,o as d,c as r,a as n,b as s,d as a,w as t,e as c}from"./app-GnK0vSxb.js";const u={},k={id:"剑指-offer-36-二叉搜索树与双向链表",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#剑指-offer-36-二叉搜索树与双向链表","aria-hidden":"true"},"#",-1),v={href:"https://leetcode.cn/problems/er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"栈",-1),b=n("code",null,"树",-1),f=n("code",null,"深度优先搜索",-1),_=n("code",null,"二叉搜索树",-1),g=n("code",null,"链表",-1),y=n("code",null,"二叉树",-1),w=n("code",null,"双向链表",-1),x={href:"https://leetcode.cn/problems/er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof",target:"_blank",rel:"noopener noreferrer"},N=n("code",null,"LeetCode",-1),q=c('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>将一个 <strong>二叉搜索树</strong> 就地转化为一个 <strong>已排序的双向循环链表</strong> 。</p><p>对于双向循环列表，你可以将左右孩子指针作为双向循环链表的前驱和后继指针，第一个节点的前驱是最后一个节点，最后一个节点的后继是第一个节点。</p><p>特别地，我们希望可以 <strong>就地</strong> 完成转换操作。当转化完成以后，树中节点的左指针需要指向前驱，树中节点的右指针需要指向后继。还需要返回链表中最小元素的指针。</p><p><strong>示例 1：</strong></p><blockquote><p>输入：root = [4,2,5,1,3]</p><figure><img src="https://assets.leetcode.com/uploads/2018/10/12/bstdllreturndll.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>输出：[1,2,3,4,5]</p><p>解释：下图显示了转化后的二叉搜索树，实线表示后继关系，虚线表示前驱关系。</p><figure><img src="https://assets.leetcode.com/uploads/2018/10/12/bstdllreturnbst.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></blockquote><p><strong>示例 2：</strong></p><blockquote><p>输入：root = [2,1,3]</p><p>输出：[1,2,3]</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p>输入：root = []</p><p>输出：[]</p><p>解释：输入是空树，所以输出也是空链表。</p></blockquote><p><strong>示例 4：</strong></p><blockquote><p>输入：root = [1]</p><p>输出：[1]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>-1000 &lt;= Node.val &lt;= 1000</code></li><li><code>Node.left.val &lt; Node.val &lt; Node.right.val</code></li><li><code>Node.val</code> 的所有值都是独一无二的</li><li><code>0 &lt;= Number of Nodes &lt;= 2000</code></li></ul><p><strong>提示：</strong></p>',15),L={class:"hint-container warning"},j=n("p",{class:"hint-container-title"},"注意",-1),z=c(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>二叉搜索树的中序遍历结果是有序的，因此要将一个二叉搜索树就地转化为一个已排序的双向循环链表，可以采用中序遍历的方式，将节点的左右指针分别指向前驱和后继节点。最后，调整头尾节点的前驱和后继指针，形成循环链表。</p><ol><li>定义两个指针 <code>head</code> 和 <code>tail</code>，它们分别表示双向链表的头部和尾部。</li><li>定义一个中序遍历的函数 <code>traverse</code>，其中对每个节点进行如下处理： <ul><li>如果 <code>head</code> 为空，将当前节点赋值给 <code>head</code>。</li><li>如果 <code>tail</code> 不为空，将 <code>tail</code> 的右指针指向当前节点，将当前节点的左指针指向 <code>tail</code>。</li><li>更新 <code>tail</code> 为当前节点。</li></ul></li><li>在 <code>traverse</code> 完成中序遍历后，将 <code>head</code> 和 <code>tail</code> 进行连接，形成双向循环链表。 <ul><li>将 <code>head</code> 的左指针指向 <code>tail</code>。</li><li>将 <code>tail</code> 的右指针指向 <code>head</code>。</li></ul></li></ol><p>这样，我们就完成了将 BST 转化为已排序的双向循环链表。最后，返回 <code>head</code> 作为循环链表的头节点。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，其中 <code>n</code> 是二叉搜索树的节点数量。因为我们需要访问每个节点一次，完成中序遍历。</li><li><strong>空间复杂度</strong>: <code>O(h)</code>，其中 <code>h</code> 是二叉搜索树的高度，表示递归调用栈的深度。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Node<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Node<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">treeToDoublyList</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> head <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> tail <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">traverse</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 处理当前节点</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			head <span class="token operator">=</span> root<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>tail<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			tail<span class="token punctuation">.</span>right <span class="token operator">=</span> root<span class="token punctuation">;</span>
			root<span class="token punctuation">.</span>left <span class="token operator">=</span> tail<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		tail <span class="token operator">=</span> root<span class="token punctuation">;</span>

		<span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token comment">// 开始中序遍历</span>
	<span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 将头尾相连形成循环链表</span>
	head<span class="token punctuation">.</span>left <span class="token operator">=</span> tail<span class="token punctuation">;</span>
	tail<span class="token punctuation">.</span>right <span class="token operator">=</span> head<span class="token punctuation">;</span>
	<span class="token keyword">return</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function B(C,V){const l=o("ExternalLinkIcon"),p=o("font"),e=o("RouterLink");return d(),r("div",null,[n("h1",k,[h,s(),n("a",v,[s("剑指 Offer 36. 二叉搜索树与双向链表"),a(l)])]),n("p",null,[s("🟠 "),a(p,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/leetcode/outline/tag/stack.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/leetcode/outline/tag/tree.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/leetcode/outline/tag/depth-first-search.html"},{default:t(()=>[f]),_:1}),s(),a(e,{to:"/leetcode/outline/tag/binary-search-tree.html"},{default:t(()=>[_]),_:1}),s(),a(e,{to:"/leetcode/outline/tag/linked-list.html"},{default:t(()=>[g]),_:1}),s(),a(e,{to:"/leetcode/outline/tag/binary-tree.html"},{default:t(()=>[y]),_:1}),s(),a(e,{to:"/leetcode/outline/tag/doubly-linked-list.html"},{default:t(()=>[w]),_:1}),s("  🔗 "),n("a",x,[N,a(l)])]),q,n("div",L,[j,n("p",null,[s("本题与 LeetCode "),a(e,{to:"/leetcode/problem/0426.html"},{default:t(()=>[s("第 426 题")]),_:1}),s(" 相同。")])]),z])}const O=i(u,[["render",B],["__file","jz_offer_36_1.html.vue"]]);export{O as default};
