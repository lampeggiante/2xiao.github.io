import{_ as l,r as o,o as i,c as u,a as n,b as s,d as a,w as t,f as k,e as r}from"./app-5VBZs9Uu.js";const d={},m={id:"_632-最小区间",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#_632-最小区间","aria-hidden":"true"},"#",-1),h={href:"https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"贪心",-1),g=n("code",null,"数组",-1),f=n("code",null,"哈希表",-1),y=n("code",null,"排序",-1),w=n("code",null,"滑动窗口",-1),_=n("code",null,"堆（优先队列）",-1),x={href:"https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists",target:"_blank",rel:"noopener noreferrer"},V=n("code",null,"LeetCode",-1),j=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You have <code>k</code> lists of sorted integers in <strong>non-decreasing order</strong>. Find the <strong>smallest</strong> range that includes at least one number from each of the <code>k</code> lists.</p><p>We define the range <code>[a, b]</code> is smaller than range <code>[c, d]</code> if <code>b - a &lt; d - c</code><strong>or</strong> <code>a &lt; c</code> if <code>b - a == d - c</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]</p><p>Output: [20,24]</p><p>Explanation:</p><p>List 1: [4, 10, 15, 24,26], 24 is in range [20,24].</p><p>List 2: [0, 9, 12, 20], 20 is in range [20,24].</p><p>List 3: [5, 18, 22, 30], 22 is in range [20,24].</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [[1,2,3],[1,2,3],[1,2,3]]</p><p>Output: [1,1]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>nums.length == k</code></li><li><code>1 &lt;= k &lt;= 3500</code></li><li><code>1 &lt;= nums[i].length &lt;= 50</code></li><li><code>-10^5 &lt;= nums[i][j] &lt;= 10^5</code></li><li><code>nums[i]</code> is sorted in <strong>non-decreasing</strong> order.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>你有 <code>k</code> 个 <strong>非递减排列</strong> 的整数列表。找到一个 <strong>最小</strong> 区间，使得 <code>k</code> 个列表中的每个列表至少有一个数包含在其中。</p><p>我们定义如果 <code>b-a &lt; d-c</code> 或者在 <code>b-a == d-c</code> 时 <code>a &lt; c</code>，则区间 <code>[a,b]</code> 比 <code>[c,d]</code> 小。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [[4,10,15,24,26], [0,9,12,20], [5,18,22,30]]</p><p><strong>输出：</strong>[20,24]</p><p><strong>解释：</strong></p><p>列表 1：[4, 10, 15, 24, 26]，24 在区间 [20,24] 中。</p><p>列表 2：[0, 9, 12, 20]，20 在区间 [20,24] 中。</p><p>列表 3：[5, 18, 22, 30]，22 在区间 [20,24] 中。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [[1,2,3],[1,2,3],[1,2,3]]</p><p><strong>输出：</strong>[1,1]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>nums.length == k</code></li><li><code>1 &lt;= k &lt;= 3500</code></li><li><code>1 &lt;= nums[i].length &lt;= 50</code></li><li><code>-10^5 &lt;= nums[i][j] &lt;= 10^5</code></li><li><code>nums[i]</code> 按非递减顺序排列</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用最小优先队列来维护每个数组当前元素的最小值。通过这个队列，可以快速获取当前区间的最小值和最大值。</p><ul><li>首先，将每个数组的第一个元素（即最小的元素）放入优先队列中，并记录当前的最大元素。</li><li>然后，不断从队列中取出最小元素，同时将这个元素所在数组的下一个元素加入队列中，并更新当前的最大值。</li><li>在每一步中，计算当前区间的大小，并与当前最优区间进行比较，如果区间更小，则更新最优解。</li></ul><p>当其中一个数组被遍历完时（即它的所有元素都被处理完），就无法继续扩展区间了，此时循环结束。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n log k)</code>，其中 <code>n</code> 是所有数组的元素总数，<code>k</code> 是数组的个数。每次操作都涉及到从堆中取出最小元素并插入新元素，堆的大小最多为 <code>k</code>，所以每次操作的时间复杂度是 <code>O(log k)</code>，每个数组的所有元素都会被处理一次，共处理 <code>n</code> 次。</li><li><strong>空间复杂度</strong>：<code>O(k)</code>，优先队列的大小最多为 <code>k</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">smallestRange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> rangeStart <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		rangeEnd <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> maxVal <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">Infinity</span><span class="token punctuation">;</span>

	<span class="token comment">// 初始化最小堆为每个数组的第一个元素</span>
	<span class="token keyword">let</span> minHeap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MinHeap</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token function-variable function">priority</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> i<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		minHeap<span class="token punctuation">.</span><span class="token function">enqueue</span><span class="token punctuation">(</span><span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		maxVal <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxVal<span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 当其中一个数组被遍历完时，结束循环</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>minHeap<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 出堆</span>
		<span class="token keyword">const</span> <span class="token punctuation">[</span>minVal<span class="token punctuation">,</span> numsIdx<span class="token punctuation">,</span> itemIdx<span class="token punctuation">]</span> <span class="token operator">=</span> minHeap<span class="token punctuation">.</span><span class="token function">dequeue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 更新最优解</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>maxVal <span class="token operator">-</span> minVal <span class="token operator">&lt;</span> rangeEnd <span class="token operator">-</span> rangeStart<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			rangeStart <span class="token operator">=</span> minVal<span class="token punctuation">;</span>
			rangeEnd <span class="token operator">=</span> maxVal<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 如果有下一个数，入堆</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>itemIdx <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;</span> nums<span class="token punctuation">[</span>numsIdx<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> nextVal <span class="token operator">=</span> nums<span class="token punctuation">[</span>numsIdx<span class="token punctuation">]</span><span class="token punctuation">[</span>itemIdx <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			minHeap<span class="token punctuation">.</span><span class="token function">enqueue</span><span class="token punctuation">(</span><span class="token punctuation">[</span>nextVal<span class="token punctuation">,</span> numsIdx<span class="token punctuation">,</span> itemIdx <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			maxVal <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxVal<span class="token punctuation">,</span> nextVal<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token punctuation">[</span>rangeStart<span class="token punctuation">,</span> rangeEnd<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 最小优先队列</span>
<span class="token keyword">class</span> <span class="token class-name">MinHeap</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> priority <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>heap <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>priority <span class="token operator">=</span> priority<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token function">enqueue</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">heapifyUp</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">dequeue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">const</span> min <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">heapifyDown</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> min<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">heapifyUp</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> parent <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>
				<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getPriority</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getPriority</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">)</span>
			<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
				i <span class="token operator">=</span> parent<span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				<span class="token keyword">break</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token function">heapifyDown</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> left <span class="token operator">=</span> i <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
			right <span class="token operator">=</span> i <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> min <span class="token operator">=</span> i<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>
			left <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getPriority</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getPriority</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">)</span>
		<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			min <span class="token operator">=</span> left<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>
			right <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getPriority</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getPriority</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span>
		<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			min <span class="token operator">=</span> right<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>min <span class="token operator">!==</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">heapifyDown</span><span class="token punctuation">(</span>min<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token function">getPriority</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">priority</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,27),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),I=n("td",{style:{"text-align":"center"}},"76",-1),E={style:{"text-align":"left"}},H={href:"https://leetcode.com/problems/minimum-window-substring",target:"_blank",rel:"noopener noreferrer"},L={style:{"text-align":"center"}},P={style:{"text-align":"left"}},z=n("code",null,"哈希表",-1),C=n("code",null,"字符串",-1),N=n("code",null,"滑动窗口",-1),O={style:{"text-align":"left"}};function S(M,B){const e=o("ExternalLinkIcon"),c=o("font"),p=o("RouterLink");return i(),u("div",null,[n("h1",m,[v,s(),n("a",h,[s("632. 最小区间"),a(e)])]),n("p",null,[s("🔴 "),a(c,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1}),s("  🔖  "),a(p,{to:"/leetcode-js/outline/tag/greedy.html"},{default:t(()=>[b]),_:1}),s(),a(p,{to:"/leetcode-js/outline/tag/array.html"},{default:t(()=>[g]),_:1}),s(),a(p,{to:"/leetcode-js/outline/tag/hash-table.html"},{default:t(()=>[f]),_:1}),s(),a(p,{to:"/leetcode-js/outline/tag/sorting.html"},{default:t(()=>[y]),_:1}),s(),a(p,{to:"/leetcode-js/outline/tag/sliding-window.html"},{default:t(()=>[w]),_:1}),s(),a(p,{to:"/leetcode-js/outline/tag/heap-priority-queue.html"},{default:t(()=>[_]),_:1}),s("  🔗 "),n("a",x,[V,a(e)])]),j,k(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[I,n("td",E,[n("a",H,[s("最小覆盖子串"),a(e)])]),n("td",L,[a(p,{to:"/leetcode-js/problem/0076.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",P,[a(p,{to:"/leetcode-js/outline/tag/hash-table.html"},{default:t(()=>[z]),_:1}),s(),a(p,{to:"/leetcode-js/outline/tag/string.html"},{default:t(()=>[C]),_:1}),s(),a(p,{to:"/leetcode-js/outline/tag/sliding-window.html"},{default:t(()=>[N]),_:1})]),n("td",O,[a(c,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1})])])])])])}const R=l(d,[["render",S],["__file","0632.html.vue"]]);export{R as default};
