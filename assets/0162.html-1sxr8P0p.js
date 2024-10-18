import{_ as i,r as c,o as d,c as r,a as e,b as n,d as t,w as s,f as p,e as u}from"./app-mvY9N9Pc.js";const h={},m={id:"_162-寻找峰值",tabindex:"-1"},_=e("a",{class:"header-anchor",href:"#_162-寻找峰值","aria-hidden":"true"},"#",-1),k={href:"https://leetcode.com/problems/find-peak-element",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"数组",-1),g=e("code",null,"二分查找",-1),b={href:"https://leetcode.com/problems/find-peak-element",target:"_blank",rel:"noopener noreferrer"},y=e("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>A peak element is an element that is strictly greater than its neighbors.</p><p>Given a <strong>0-indexed</strong> integer array <code>nums</code>, find a peak element, and return its index. If the array contains multiple peaks, return the index to <strong>any of the peaks</strong>.</p><p>You may imagine that <code>nums[-1] = nums[n] = -∞</code>. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.</p><p>You must write an algorithm that runs in <code>O(log n)</code> time.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,2,3,1]</p><p>Output: 2</p><p>Explanation: 3 is a peak element and your function should return the index number 2.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,2,1,3,5,6,4]</p><p>Output: 5</p><p>Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 1000</code></li><li><code>-2^31 &lt;= nums[i] &lt;= 2^31 - 1</code></li><li><code>nums[i] != nums[i + 1]</code> for all valid <code>i</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>峰值元素是指其值严格大于左右相邻值的元素。</p><p>给你一个整数数组 <code>nums</code>，找到峰值元素并返回其索引。数组可能包含多个峰值，在这种情况下，返回 <strong>任何一个峰值</strong> 所在位置即可。</p><p>你可以假设 <code>nums[-1] = nums[n] = -∞</code> 。</p><p>你必须实现时间复杂度为 <code>O(log n)</code> 的算法来解决此问题。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>要求算法在 <code>O(log n)</code> 的时间内完成，可以使用二分查找来解决。</p><p>在每一步二分查找中，可以找到中间元素 <code>mid</code>，然后与其相邻的元素 <code>mid-1</code> 和 <code>mid+1</code> 进行比较。如果 <code>nums[mid] &gt; nums[mid-1]</code> 且 <code>nums[mid] &gt; nums[mid+1]</code>，则 <code>mid</code> 即为峰值元素的位置。如果 <code>nums[mid-1] &gt; nums[mid]</code>，则峰值元素必然在 <code>mid</code> 的左侧；如果 <code>nums[mid+1] &gt; nums[mid]</code>，则峰值元素必然在 <code>mid</code> 的右侧。</p><p>通过不断缩小搜索范围，最终可以找到一个峰值元素的位置。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findPeakElement</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums<span class="token punctuation">[</span>mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      right <span class="token operator">=</span> mid<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,23),v=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"left"}},"难度")])],-1),w=e("td",{style:{"text-align":"center"}},"852",-1),E={style:{"text-align":"left"}},I={href:"https://leetcode.com/problems/peak-index-in-a-mountain-array",target:"_blank",rel:"noopener noreferrer"},q=e("td",{style:{"text-align":"center"}},null,-1),C={style:{"text-align":"left"}},L=e("code",null,"数组",-1),M=e("code",null,"二分查找",-1),N={style:{"text-align":"left"}},O=e("td",{style:{"text-align":"center"}},"1901",-1),V={style:{"text-align":"left"}},j={href:"https://leetcode.com/problems/find-a-peak-element-ii",target:"_blank",rel:"noopener noreferrer"},B=e("td",{style:{"text-align":"center"}},null,-1),Y={style:{"text-align":"left"}},R=e("code",null,"数组",-1),A=e("code",null,"二分查找",-1),G=e("code",null,"矩阵",-1),P={style:{"text-align":"left"}},S=e("td",{style:{"text-align":"center"}},"2137",-1),T={style:{"text-align":"left"}},z={href:"https://leetcode.com/problems/pour-water-between-buckets-to-make-water-levels-equal",target:"_blank",rel:"noopener noreferrer"},D=e("td",{style:{"text-align":"center"}},null,-1),F={style:{"text-align":"left"}},H=e("code",null,"数组",-1),J=e("code",null,"二分查找",-1),K={style:{"text-align":"left"}},Q=e("td",{style:{"text-align":"center"}},"2210",-1),U={style:{"text-align":"left"}},W={href:"https://leetcode.com/problems/count-hills-and-valleys-in-an-array",target:"_blank",rel:"noopener noreferrer"},X=e("td",{style:{"text-align":"center"}},null,-1),Z={style:{"text-align":"left"}},$=e("code",null,"数组",-1),ee={style:{"text-align":"left"}},te=e("td",{style:{"text-align":"center"}},"2951",-1),ne={style:{"text-align":"left"}},se={href:"https://leetcode.com/problems/find-the-peaks",target:"_blank",rel:"noopener noreferrer"},ae=e("td",{style:{"text-align":"center"}},null,-1),oe={style:{"text-align":"left"}},le=e("code",null,"数组",-1),ce=e("code",null,"枚举",-1),ie={style:{"text-align":"left"}};function de(re,pe){const o=c("ExternalLinkIcon"),l=c("font"),a=c("RouterLink");return d(),r("div",null,[e("h1",m,[_,n(),e("a",k,[n("162. 寻找峰值"),t(o)])]),e("p",null,[n("🟠 "),t(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1}),n("  🔖  "),t(a,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[f]),_:1}),n(),t(a,{to:"/leetcode/outline/tag/binary-search.html"},{default:s(()=>[g]),_:1}),n("  🔗 "),e("a",b,[y,t(o)])]),x,p(" prettier-ignore "),e("table",null,[v,e("tbody",null,[e("tr",null,[w,e("td",E,[e("a",I,[n("山脉数组的峰顶索引"),t(o)])]),q,e("td",C,[t(a,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[L]),_:1}),n(),t(a,{to:"/leetcode/outline/tag/binary-search.html"},{default:s(()=>[M]),_:1})]),e("td",N,[t(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),e("tr",null,[O,e("td",V,[e("a",j,[n("寻找峰值 II"),t(o)])]),B,e("td",Y,[t(a,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[R]),_:1}),n(),t(a,{to:"/leetcode/outline/tag/binary-search.html"},{default:s(()=>[A]),_:1}),n(),t(a,{to:"/leetcode/outline/tag/matrix.html"},{default:s(()=>[G]),_:1})]),e("td",P,[t(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),e("tr",null,[S,e("td",T,[e("a",z,[n("通过倒水操作让所有的水桶所含水量相等"),t(o)])]),D,e("td",F,[t(a,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[H]),_:1}),n(),t(a,{to:"/leetcode/outline/tag/binary-search.html"},{default:s(()=>[J]),_:1})]),e("td",K,[t(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),e("tr",null,[Q,e("td",U,[e("a",W,[n("统计数组中峰和谷的数量"),t(o)])]),X,e("td",Z,[t(a,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[$]),_:1})]),e("td",ee,[t(l,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1})])]),e("tr",null,[te,e("td",ne,[e("a",se,[n("找出峰值"),t(o)])]),ae,e("td",oe,[t(a,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[le]),_:1}),n(),t(a,{to:"/leetcode/outline/tag/enumeration.html"},{default:s(()=>[ce]),_:1})]),e("td",ie,[t(l,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1})])])])])])}const he=i(h,[["render",de],["__file","0162.html.vue"]]);export{he as default};
