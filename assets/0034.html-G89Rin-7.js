import{_ as l,r as c,o as i,c as r,a as n,b as s,d as t,w as a,f as u,e as d}from"./app-5VBZs9Uu.js";const k={},m={id:"_34-在排序数组中查找元素的第一个和最后一个位置",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#_34-在排序数组中查找元素的第一个和最后一个位置","aria-hidden":"true"},"#",-1),_={href:"https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"数组",-1),f=n("code",null,"二分查找",-1),v={href:"https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"LeetCode",-1),y=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of integers <code>nums</code> sorted in non-decreasing order, find the starting and ending position of a given <code>target</code> value.</p><p>If <code>target</code> is not found in the array, return <code>[-1, -1]</code>.</p><p>You must write an algorithm with <code>O(log n)</code> runtime complexity.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [5,7,7,8,8,10], target = 8</p><p>Output: [3,4]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [5,7,7,8,8,10], target = 6</p><p>Output: [-1,-1]</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [], target = 0</p><p>Output: [-1,-1]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= nums.length &lt;= 10^5</code></li><li><code>-10^9 &lt;= nums[i] &lt;= 10^9</code></li><li><code>nums</code> is a non-decreasing array.</li><li><code>-10^9 &lt;= target &lt;= 10^9</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个按照非递减顺序排列的整数数组 <code>nums</code>，和一个目标值 <code>target</code>。请你找出给定目标值在数组中的开始位置和结束位置。</p><p>如果数组中不存在目标值 <code>target</code>，返回 <code>[-1, -1]</code>。</p><p>你必须设计并实现时间复杂度为 <code>O(log n)</code> 的算法解决此问题。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以通过两次二分查找来完成这个过程。</p><p>首先，定义一个辅助函数 <code>findFirst</code>，用于找到目标值的起始位置。这个函数使用二分查找的方法，在每一步查找中，如果中间元素大于等于目标值，将<code>right</code>指针移动到中间位置的左边，并更新结果为当前中间位置。如果中间元素小于目标值，将<code>left</code>指针移动到中间位置的右边。</p><p>类似地，定义另一个辅助函数 <code>findLast</code>，用于找到目标值的结束位置。这个函数也使用二分查找的方法，但是在每一步查找中，如果中间元素小于等于目标值，将<code>left</code>指针移动到中间位置的右边，并更新结果为当前中间位置。如果中间元素大于目标值，将<code>right</code>指针移动到中间位置的左边。</p><p>最终，调用这两个辅助函数得到目标值的起始位置和结束位置，返回结果数组 <code>[start, end]</code>。</p><p>这样，就能够通过两次二分查找，找到目标值在有序数组中的起始位置和结束位置。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">searchRange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token function-variable function">getFirst</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&gt;=</span> nums<span class="token punctuation">.</span>length <span class="token operator">||</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">!==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> left<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token function-variable function">getLast</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">&gt;=</span> nums<span class="token punctuation">.</span>length <span class="token operator">||</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">!==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> right<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token function">getFirst</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> target<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getLast</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> target<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,25),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),w=n("td",{style:{"text-align":"center"}},"278",-1),j={style:{"text-align":"left"}},E={href:"https://leetcode.com/problems/first-bad-version",target:"_blank",rel:"noopener noreferrer"},L={style:{"text-align":"center"}},q={style:{"text-align":"left"}},I=n("code",null,"二分查找",-1),C=n("code",null,"交互",-1),N={style:{"text-align":"left"}},O=n("td",{style:{"text-align":"center"}},"2055",-1),V={style:{"text-align":"left"}},M={href:"https://leetcode.com/problems/plates-between-candles",target:"_blank",rel:"noopener noreferrer"},B=n("td",{style:{"text-align":"center"}},null,-1),F={style:{"text-align":"left"}},R=n("code",null,"数组",-1),G=n("code",null,"字符串",-1),S=n("code",null,"二分查找",-1),T=n("code",null,"1+",-1),Y={style:{"text-align":"left"}},z=n("td",{style:{"text-align":"center"}},"2089",-1),A={style:{"text-align":"left"}},D={href:"https://leetcode.com/problems/find-target-indices-after-sorting-array",target:"_blank",rel:"noopener noreferrer"},H=n("td",{style:{"text-align":"center"}},null,-1),J={style:{"text-align":"left"}},K=n("code",null,"数组",-1),P=n("code",null,"二分查找",-1),Q=n("code",null,"排序",-1),U={style:{"text-align":"left"}};function W(X,Z){const o=c("ExternalLinkIcon"),p=c("font"),e=c("RouterLink");return i(),r("div",null,[n("h1",m,[h,s(),n("a",_,[s("34. 在排序数组中查找元素的第一个和最后一个位置"),t(o)])]),n("p",null,[s("🟠 "),t(p,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(e,{to:"/leetcode-js/outline/tag/array.html"},{default:a(()=>[g]),_:1}),s(),t(e,{to:"/leetcode-js/outline/tag/binary-search.html"},{default:a(()=>[f]),_:1}),s("  🔗 "),n("a",v,[b,t(o)])]),y,u(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[w,n("td",j,[n("a",E,[s("第一个错误的版本"),t(o)])]),n("td",L,[t(e,{to:"/leetcode-js/problem/0278.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",q,[t(e,{to:"/leetcode-js/outline/tag/binary-search.html"},{default:a(()=>[I]),_:1}),s(),t(e,{to:"/leetcode-js/outline/tag/interactive.html"},{default:a(()=>[C]),_:1})]),n("td",N,[t(p,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1})])]),n("tr",null,[O,n("td",V,[n("a",M,[s("蜡烛之间的盘子"),t(o)])]),B,n("td",F,[t(e,{to:"/leetcode-js/outline/tag/array.html"},{default:a(()=>[R]),_:1}),s(),t(e,{to:"/leetcode-js/outline/tag/string.html"},{default:a(()=>[G]),_:1}),s(),t(e,{to:"/leetcode-js/outline/tag/binary-search.html"},{default:a(()=>[S]),_:1}),s(),T]),n("td",Y,[t(p,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1})])]),n("tr",null,[z,n("td",A,[n("a",D,[s("找出数组排序后的目标下标"),t(o)])]),H,n("td",J,[t(e,{to:"/leetcode-js/outline/tag/array.html"},{default:a(()=>[K]),_:1}),s(),t(e,{to:"/leetcode-js/outline/tag/binary-search.html"},{default:a(()=>[P]),_:1}),s(),t(e,{to:"/leetcode-js/outline/tag/sorting.html"},{default:a(()=>[Q]),_:1})]),n("td",U,[t(p,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1})])])])])])}const nn=l(k,[["render",W],["__file","0034.html.vue"]]);export{nn as default};
