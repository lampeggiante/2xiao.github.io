import{_ as u,r as e,o as l,c as i,a as n,b as s,d as a,w as t,e as r}from"./app-mvY9N9Pc.js";const d={},k={id:"_918-环形子数组的最大和",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#_918-环形子数组的最大和","aria-hidden":"true"},"#",-1),g={href:"https://leetcode.com/problems/maximum-sum-circular-subarray",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"队列",-1),h=n("code",null,"数组",-1),v=n("code",null,"分治",-1),f=n("code",null,"动态规划",-1),_=n("code",null,"单调队列",-1),x={href:"https://leetcode.com/problems/maximum-sum-circular-subarray",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),S=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a <strong>circular integer array</strong> <code>nums</code> of length <code>n</code>, return <em>the maximum possible sum of a non-empty <strong>subarray</strong> of</em> <code>nums</code>.</p><p>A <strong>circular array</strong> means the end of the array connects to the beginning of the array. Formally, the next element of <code>nums[i]</code> is <code>nums[(i + 1) % n]</code> and the previous element of <code>nums[i]</code> is <code>nums[(i - 1 + n) % n]</code>.</p><p>A <strong>subarray</strong> may only include each element of the fixed buffer <code>nums</code> at most once. Formally, for a subarray <code>nums[i], nums[i + 1], ..., nums[j]</code>, there does not exist <code>i &lt;= k1</code>, <code>k2 &lt;= j</code> with <code>k1 % n == k2 % n</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,-2,3,-2]</p><p>Output: 3</p><p>Explanation: Subarray [3] has maximum sum 3.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [5,-3,5]</p><p>Output: 10</p><p>Explanation: Subarray [5,5] has maximum sum 5 + 5 = 10.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [-3,-2,-3]</p><p>Output: -2</p><p>Explanation: Subarray [-2] has maximum sum -2.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == nums.length</code></li><li><code>1 &lt;= n &lt;= 3 * 10^4</code></li><li><code>-3 * 104 &lt;= nums[i] &lt;= 3 * 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个长度为 <code>n</code> 的<strong>环形整数数组</strong> <code>nums</code> ，返回 <em><code>nums</code> 的非空 <strong>子数组</strong> 的最大可能和</em>。</p><p><strong>环形数组</strong> 意味着数组的末端将会与开头相连呈环状。形式上， <code>nums[i]</code> 的下一个元素是 <code>nums[(i + 1) % n]</code> ， <code>nums[i]</code> 的前一个元素是 <code>nums[(i - 1 + n) % n]</code> 。</p><p><strong>子数组</strong> 最多只能包含固定缓冲区 <code>nums</code> 中的每个元素一次。形式上，对于子数组 <code>nums[i], nums[i + 1], ..., nums[j]</code> ，不存在 <code>i &lt;= k1, k2 &lt;= j</code> 其中 <code>k1 % n == k2 % n</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,-2,3,-2]</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 从子数组 [3] 得到最大和 3</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [5,-3,5]</p><p><strong>输出：</strong> 10</p><p><strong>解释：</strong> 从子数组 [5,5] 得到最大和 5 + 5 = 10</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> nums = [3,-2,2,-3]</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 从子数组 [3] 和 [3,-2,2] 都可以得到最大和 3</p></blockquote><p><strong>提示：</strong></p><ul><li><code>n == nums.length</code></li><li><code>1 &lt;= n &lt;= 3 * 10^4</code></li><li><code>-3 * 104 &lt;= nums[i] &lt;= 3 * 10^4</code>​​​​​​​</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>要解决这个问题，可以考虑两种情况：</p><ul><li><strong>普通子数组</strong>：可以直接使用经典的 <strong>Kadane’s Algorithm</strong> 来找到非循环的最大子数组和。</li><li><strong>跨越首尾的子数组</strong>：这个子数组可以被理解为，总和减去一个最小的子数组和（即，找到整个数组的和，再减去中间的一个子数组，保留数组两端部分作为最大子数组和）。要实现这一点，需要求出最小子数组和。</li></ul><p>因此，解题分为三步：</p><ol><li><strong>计算非循环子数组的最大和</strong>：使用 Kadane&#39;s 算法来找到子数组的最大和 <code>maxSum</code>.</li><li><strong>计算最小子数组和</strong>：使用 Kadane&#39;s 算法的变种，找出子数组的最小和 <code>minSum</code>，然后用整个数组的和 <code>totalSum</code> 减去该最小和。这样得到跨越首尾的子数组和 <code>totalSum - minSum</code>。</li><li><strong>考虑特殊情况</strong>：当所有元素都是负数时，跨越首尾的子数组和可能会无效，因为整个数组的和 <code>totalSum</code> 会等于 <code>minSum</code>。在这种情况下，返回 <code>maxSum</code> 即可。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，因为只遍历数组三次（分别求最大子数组和、最小子数组和，以及总和），每次遍历需要 <code>O(n)</code> 时间。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，因为只使用了常数空间来存储若干变量，不需要额外的数组或其他数据结构。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxSubarraySumCircular</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> totalSum <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">+</span> b<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">getMaxSum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> max <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			maxEndingHere <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			maxEndingHere <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> maxEndingHere <span class="token operator">+</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxEndingHere<span class="token punctuation">,</span> max<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> max<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">getMinSum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> min <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			minEndingHere <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			minEndingHere <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> minEndingHere <span class="token operator">+</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			min <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>minEndingHere<span class="token punctuation">,</span> min<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> min<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> maxSum <span class="token operator">=</span> <span class="token function">getMaxSum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> minSum <span class="token operator">=</span> <span class="token function">getMinSum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">if</span> <span class="token punctuation">(</span>maxSum <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> maxSum<span class="token punctuation">;</span>
	<span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxSum<span class="token punctuation">,</span> totalSum <span class="token operator">-</span> minSum<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33);function w(E,q){const p=e("ExternalLinkIcon"),c=e("font"),o=e("RouterLink");return l(),i("div",null,[n("h1",k,[m,s(),n("a",g,[s("918. 环形子数组的最大和"),a(p)])]),n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(o,{to:"/leetcode/outline/tag/queue.html"},{default:t(()=>[b]),_:1}),s(),a(o,{to:"/leetcode/outline/tag/array.html"},{default:t(()=>[h]),_:1}),s(),a(o,{to:"/leetcode/outline/tag/divide-and-conquer.html"},{default:t(()=>[v]),_:1}),s(),a(o,{to:"/leetcode/outline/tag/dynamic-programming.html"},{default:t(()=>[f]),_:1}),s(),a(o,{to:"/leetcode/outline/tag/monotonic-queue.html"},{default:t(()=>[_]),_:1}),s("  🔗 "),n("a",x,[y,a(p)])]),S])}const H=u(d,[["render",w],["__file","0918.html.vue"]]);export{H as default};
