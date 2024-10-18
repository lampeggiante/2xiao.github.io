import{_ as l,r as c,o as i,c as u,a as n,b as s,d as a,w as t,f as d,e as r}from"./app-5VBZs9Uu.js";const k={},h={id:"_703-数据流中的第-k-大元素",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#_703-数据流中的第-k-大元素","aria-hidden":"true"},"#",-1),_={href:"https://leetcode.com/problems/kth-largest-element-in-a-stream",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"树",-1),g=n("code",null,"设计",-1),b=n("code",null,"二叉搜索树",-1),f=n("code",null,"二叉树",-1),y=n("code",null,"数据流",-1),w=n("code",null,"堆（优先队列）",-1),x={href:"https://leetcode.com/problems/kth-largest-element-in-a-stream",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"LeetCode",-1),L=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Design a class to find the <code>kth</code> largest element in a stream. Note that it is the <code>kth</code> largest element in the sorted order, not the <code>kth</code> distinct element.</p><p>Implement <code>KthLargest</code> class:</p><ul><li><code>KthLargest(int k, int[] nums)</code> Initializes the object with the integer <code>k</code> and the stream of integers <code>nums</code>.</li><li><code>int add(int val)</code> Appends the integer <code>val</code> to the stream and returns the element representing the <code>kth</code> largest element in the stream.</li></ul><p><strong>Example 1:</strong></p><blockquote><p><strong>Input</strong></p><p>[&quot;KthLargest&quot;, &quot;add&quot;, &quot;add&quot;, &quot;add&quot;, &quot;add&quot;, &quot;add&quot;]</p><p>[[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]</p><p><strong>Output</strong></p><p>[null, 4, 5, 5, 8, 8]</p><p><strong>Explanation</strong></p><p>KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);</p><p>kthLargest.add(3); // return 4</p><p>kthLargest.add(5); // return 5</p><p>kthLargest.add(10); // return 5</p><p>kthLargest.add(9); // return 8</p><p>kthLargest.add(4); // return 8</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= k &lt;= 10^4</code></li><li><code>0 &lt;= nums.length &lt;= 10^4</code></li><li><code>-10^4 &lt;= nums[i] &lt;= 10^4</code></li><li><code>-10^4 &lt;= val &lt;= 10^4</code></li><li>At most <code>10^4</code> calls will be made to <code>add</code>.</li><li>It is guaranteed that there will be at least <code>k</code> elements in the array when you search for the <code>kth</code> element.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>设计一个找到数据流中第 <code>k</code> 大元素的类（class）。注意是排序后的第 <code>k</code> 大元素，不是第 <code>k</code> 个不同的元素。</p><p>请实现 <code>KthLargest</code> 类：</p><ul><li><code>KthLargest(int k, int[] nums)</code> 使用整数 <code>k</code> 和整数流 <code>nums</code> 初始化对象。</li><li><code>int add(int val)</code> 将 <code>val</code> 插入数据流 <code>nums</code> 后，返回当前数据流中第 <code>k</code> 大的元素</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以用小顶堆来做。</p><p>数组在不断插入数据，如果每次求前 <code>K</code> 大的数据，都基于当前的数据重新计算的话，那时间复杂度就是 <code>O(nlogK)</code>，<code>n</code> 表示当前的数据的大小。</p><p>可以维护一个大小为 <code>K</code> 的小顶堆，当有数据被添加到数组中时，就拿它与堆顶的元素对比。</p><ul><li>如果比堆顶元素大，就把堆顶元素删除，并且将这个元素插入到堆中；</li><li>如果比堆顶元素小，则不做处理；</li></ul><p>这样，无论任何时候需要查询当前的前 <code>K</code> 大的数据，都可以立刻返回。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(log k)</code></p><p>对于 <code>add</code> 方法，最坏情况下，我们需要进行堆化的次数是堆的高度，即 <code>log k</code>。因此，<code>add</code> 方法的时间复杂度是 <code>O(log k)</code>。在初始化时，需要将前 <code>k</code> 个元素构建最小堆，这一过程的时间复杂度是 <code>O(klog k)</code>。</p><p>总体来说，<code>KthLargest</code> 类的时间复杂度主要受 <code>add</code> 方法的影响，为 <code>O(log k)</code>。</p></li><li><p><strong>空间复杂度</strong>：<code>O(k)</code>。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">KthLargest</span> <span class="token punctuation">{</span>
	<span class="token comment">// @param {number} k</span>
	<span class="token comment">// @param {number[]} nums</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">k<span class="token punctuation">,</span> nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>k <span class="token operator">=</span> k<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>heap <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// @param {number} val</span>
	<span class="token comment">// @return {number}</span>
	<span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">heapifyUp</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> val<span class="token punctuation">;</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">heapifyDown</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token function">heapifyUp</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> parent <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
					<span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">,</span>
					<span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span>
				<span class="token punctuation">]</span><span class="token punctuation">;</span>
				index <span class="token operator">=</span> parent<span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				<span class="token keyword">break</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token function">heapifyDown</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> left <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> right <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> index <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> min <span class="token operator">=</span> index<span class="token punctuation">;</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			min <span class="token operator">=</span> left<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			min <span class="token operator">=</span> right<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>min <span class="token operator">!==</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">heapifyDown</span><span class="token punctuation">(</span>min<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,23),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),K=n("td",{style:{"text-align":"center"}},"215",-1),O={style:{"text-align":"left"}},E={href:"https://leetcode.com/problems/kth-largest-element-in-an-array",target:"_blank",rel:"noopener noreferrer"},I={style:{"text-align":"center"}},N={style:{"text-align":"left"}},C=n("code",null,"数组",-1),V=n("code",null,"分治",-1),D=n("code",null,"快速选择",-1),B=n("code",null,"2+",-1),M={style:{"text-align":"left"}},A=n("td",{style:{"text-align":"center"}},"1825",-1),H={style:{"text-align":"left"}},R={href:"https://leetcode.com/problems/finding-mk-average",target:"_blank",rel:"noopener noreferrer"},U=n("td",{style:{"text-align":"center"}},null,-1),z={style:{"text-align":"left"}},S=n("code",null,"设计",-1),T=n("code",null,"队列",-1),F=n("code",null,"数据流",-1),G=n("code",null,"2+",-1),J={style:{"text-align":"left"}},P=n("td",{style:{"text-align":"center"}},"2102",-1),Q={style:{"text-align":"left"}},W={href:"https://leetcode.com/problems/sequentially-ordinal-rank-tracker",target:"_blank",rel:"noopener noreferrer"},X=n("td",{style:{"text-align":"center"}},null,-1),Y={style:{"text-align":"left"}},Z=n("code",null,"设计",-1),$=n("code",null,"数据流",-1),nn=n("code",null,"有序集合",-1),sn=n("code",null,"1+",-1),an={style:{"text-align":"left"}};function tn(en,on){const o=c("ExternalLinkIcon"),p=c("font"),e=c("RouterLink");return i(),u("div",null,[n("h1",h,[m,s(),n("a",_,[s("703. 数据流中的第 K 大元素"),a(o)])]),n("p",null,[s("🟢 "),a(p,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(e,{to:"/leetcode-js/outline/tag/tree.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/leetcode-js/outline/tag/design.html"},{default:t(()=>[g]),_:1}),s(),a(e,{to:"/leetcode-js/outline/tag/binary-search-tree.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/leetcode-js/outline/tag/binary-tree.html"},{default:t(()=>[f]),_:1}),s(),a(e,{to:"/leetcode-js/outline/tag/data-stream.html"},{default:t(()=>[y]),_:1}),s(),a(e,{to:"/leetcode-js/outline/tag/heap-priority-queue.html"},{default:t(()=>[w]),_:1}),s("  🔗 "),n("a",x,[j,a(o)])]),L,d(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[K,n("td",O,[n("a",E,[s("数组中的第K个最大元素"),a(o)])]),n("td",I,[a(e,{to:"/leetcode-js/problem/0215.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",N,[a(e,{to:"/leetcode-js/outline/tag/array.html"},{default:t(()=>[C]),_:1}),s(),a(e,{to:"/leetcode-js/outline/tag/divide-and-conquer.html"},{default:t(()=>[V]),_:1}),s(),a(e,{to:"/leetcode-js/outline/tag/quickselect.html"},{default:t(()=>[D]),_:1}),s(),B]),n("td",M,[a(p,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1})])]),n("tr",null,[A,n("td",H,[n("a",R,[s("求出 MK 平均值"),a(o)])]),U,n("td",z,[a(e,{to:"/leetcode-js/outline/tag/design.html"},{default:t(()=>[S]),_:1}),s(),a(e,{to:"/leetcode-js/outline/tag/queue.html"},{default:t(()=>[T]),_:1}),s(),a(e,{to:"/leetcode-js/outline/tag/data-stream.html"},{default:t(()=>[F]),_:1}),s(),G]),n("td",J,[a(p,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1})])]),n("tr",null,[P,n("td",Q,[n("a",W,[s("序列顺序查询"),a(o)])]),X,n("td",Y,[a(e,{to:"/leetcode-js/outline/tag/design.html"},{default:t(()=>[Z]),_:1}),s(),a(e,{to:"/leetcode-js/outline/tag/data-stream.html"},{default:t(()=>[$]),_:1}),s(),a(e,{to:"/leetcode-js/outline/tag/ordered-set.html"},{default:t(()=>[nn]),_:1}),s(),sn]),n("td",an,[a(p,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1})])])])])])}const cn=l(k,[["render",tn],["__file","0703.html.vue"]]);export{cn as default};
