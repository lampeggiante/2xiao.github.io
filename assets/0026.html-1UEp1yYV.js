import{_ as d,r as c,o as i,c as p,a as e,b as t,d as n,w as s,f as u,e as r}from"./app-mvY9N9Pc.js";const h={},_={id:"_26-删除有序数组中的重复项",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#_26-删除有序数组中的重复项","aria-hidden":"true"},"#",-1),k={href:"https://leetcode.com/problems/remove-duplicates-from-sorted-array",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"数组",-1),g=e("code",null,"双指针",-1),b={href:"https://leetcode.com/problems/remove-duplicates-from-sorted-array",target:"_blank",rel:"noopener noreferrer"},y=e("code",null,"LeetCode",-1),v=e("h2",{id:"题目",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),t(" 题目")],-1),x=e("code",null,"nums",-1),w=e("strong",null,"non-decreasing order",-1),E={href:"https://en.wikipedia.org/wiki/In-place_algorithm",target:"_blank",rel:"noopener noreferrer"},I=e("strong",null,"in-place",-1),q=e("strong",null,"once",-1),C=e("strong",null,"relative order",-1),j=e("strong",null,"same",-1),L=e("em",null,"the number of unique elements in",-1),N=e("code",null,"nums",-1),O=r('<p>Consider the number of unique elements of <code>nums</code> to be <code>k</code>, to get accepted, you need to do the following things:</p><ul><li>Change the array <code>nums</code> such that the first <code>k</code> elements of <code>nums</code> contain the unique elements in the order they were present in <code>nums</code> initially. The remaining elements of <code>nums</code> are not important as well as the size of <code>nums</code>.</li><li>Return <code>k</code>.</li></ul><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,1,2]</p><p>Output: 2, nums = [1,2,_]</p><p>Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.</p><p>It does not matter what you leave beyond the returned k (hence they are underscores).</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [0,0,1,1,1,2,2,3,3,4]</p><p>Output: 5, nums = [0,1,2,3,4,<em>,</em>,<em>,</em>,_]</p><p>Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.</p><p>It does not matter what you leave beyond the returned k (hence they are underscores).</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 3 * 10^4</code></li><li><code>-100 &lt;= nums[i] &lt;= 100</code></li><li><code>nums</code> is sorted in <strong>non-decreasing</strong> order.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个有序数组 nums，对数组中的元素进行去重，使得原数组中的每个元素只有一个。最后返回去重以后数组的长度值。</p><p>不能使用额外的数组空间，在原地修改数组，并在使用 <code>O(1)</code> 额外空间的条件下完成。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>',12),V=r(`<p>因为数组是有序的，那么重复的元素一定会相邻。</p><p>删除重复元素，实际上就是将不重复的元素移到数组左侧。考虑使用双指针。具体算法如下：</p><ol><li>定义两个快慢指针 <code>slow</code>，<code>fast</code>。其中 <code>slow</code> 指向去除重复元素后的数组的末尾位置。<code>fast</code> 指向当前元素。</li><li>令 <code>slow</code> 在后， <code>fast</code> 在前。</li><li>比较 <code>slow</code> 位置上元素值和 <code>fast</code> 位置上元素值是否相等。 <ul><li>如果不相等，则将 <code>slow</code> 后移一位，将 <code>fast</code> 指向位置的元素复制到 <code>slow</code> 位置上；</li><li>如果相等，则不作处理；</li></ul></li><li>将 <code>fast</code> 右移 <code>1</code> 位。</li><li>重复上述 3 ~ 4 步，直到 <code>fast</code> 等于数组长度。</li><li>返回 <code>slow + 1</code> 即为新数组长度。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中<code>n</code> 表示 <code>nums</code> 的长度，需要遍历数组一遍。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，用了常数个变量存储中间状态。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">removeDuplicates</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> slow <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> fast <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> fast <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> fast<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>slow<span class="token punctuation">]</span> <span class="token operator">!=</span> nums<span class="token punctuation">[</span>fast<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			slow<span class="token operator">++</span><span class="token punctuation">;</span>
			nums<span class="token punctuation">[</span>slow<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>fast<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> slow <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,8),T=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"left"}},"难度")])],-1),B=e("td",{style:{"text-align":"center"}},"27",-1),R={style:{"text-align":"left"}},M={href:"https://leetcode.com/problems/remove-element",target:"_blank",rel:"noopener noreferrer"},Y={style:{"text-align":"center"}},z={href:"https://2xiao.github.io/leetcode-js/leetcode/problem/0027",target:"_blank",rel:"noopener noreferrer"},D={style:{"text-align":"left"}},G=e("code",null,"数组",-1),S=e("code",null,"双指针",-1),A={style:{"text-align":"left"}},F=e("td",{style:{"text-align":"center"}},"80",-1),H={style:{"text-align":"left"}},J={href:"https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii",target:"_blank",rel:"noopener noreferrer"},K={style:{"text-align":"center"}},P={href:"https://2xiao.github.io/leetcode-js/leetcode/problem/0080",target:"_blank",rel:"noopener noreferrer"},Q={style:{"text-align":"left"}},U=e("code",null,"数组",-1),W=e("code",null,"双指针",-1),X={style:{"text-align":"left"}},Z=e("td",{style:{"text-align":"center"}},"2460",-1),$={style:{"text-align":"left"}},ee={href:"https://leetcode.com/problems/apply-operations-to-an-array",target:"_blank",rel:"noopener noreferrer"},te=e("td",{style:{"text-align":"center"}},null,-1),ne={style:{"text-align":"left"}},se=e("code",null,"数组",-1),oe=e("code",null,"双指针",-1),ae=e("code",null,"模拟",-1),le={style:{"text-align":"left"}},ce=e("td",{style:{"text-align":"center"}},"2615",-1),re={style:{"text-align":"left"}},de={href:"https://leetcode.com/problems/sum-of-distances",target:"_blank",rel:"noopener noreferrer"},ie=e("td",{style:{"text-align":"center"}},null,-1),pe={style:{"text-align":"left"}},ue=e("code",null,"数组",-1),he=e("code",null,"哈希表",-1),_e=e("code",null,"前缀和",-1),me={style:{"text-align":"left"}};function ke(fe,ge){const a=c("ExternalLinkIcon"),l=c("font"),o=c("RouterLink");return i(),p("div",null,[e("h1",_,[m,t(),e("a",k,[t("26. 删除有序数组中的重复项"),n(a)])]),e("p",null,[t("🟢 "),n(l,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),n(o,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[f]),_:1}),t(),n(o,{to:"/leetcode/outline/tag/two-pointers.html"},{default:s(()=>[g]),_:1}),t("  🔗 "),e("a",b,[y,n(a)])]),v,e("p",null,[t("Given an integer array "),x,t(" sorted in "),w,t(" , remove the duplicates "),e("a",E,[I,n(a)]),t(" such that each unique element appears only "),q,t(". The "),C,t(" of the elements should be kept the "),j,t(". Then return "),L,N,t(".")]),O,e("p",null,[t("这道题和 "),n(o,{to:"/leetcode/problem/0283.html"},{default:s(()=>[t("第 283 题")]),_:1}),t("，"),n(o,{to:"/leetcode/problem/0027.html"},{default:s(()=>[t("第 27 题")]),_:1}),t(" 基本一致，283 题是删除 0，27 题是删除指定元素，这一题是删除重复元素，实质是一样的。")]),V,u(" prettier-ignore "),e("table",null,[T,e("tbody",null,[e("tr",null,[B,e("td",R,[e("a",M,[t("移除元素"),n(a)])]),e("td",Y,[e("a",z,[t("[✓]"),n(a)])]),e("td",D,[n(o,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[G]),_:1}),t(),n(o,{to:"/leetcode/outline/tag/two-pointers.html"},{default:s(()=>[S]),_:1})]),e("td",A,[n(l,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1})])]),e("tr",null,[F,e("td",H,[e("a",J,[t("删除有序数组中的重复项 II"),n(a)])]),e("td",K,[e("a",P,[t("[✓]"),n(a)])]),e("td",Q,[n(o,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[U]),_:1}),t(),n(o,{to:"/leetcode/outline/tag/two-pointers.html"},{default:s(()=>[W]),_:1})]),e("td",X,[n(l,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1})])]),e("tr",null,[Z,e("td",$,[e("a",ee,[t("对数组执行操作"),n(a)])]),te,e("td",ne,[n(o,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[se]),_:1}),t(),n(o,{to:"/leetcode/outline/tag/two-pointers.html"},{default:s(()=>[oe]),_:1}),t(),n(o,{to:"/leetcode/outline/tag/simulation.html"},{default:s(()=>[ae]),_:1})]),e("td",le,[n(l,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1})])]),e("tr",null,[ce,e("td",re,[e("a",de,[t("等值距离和"),n(a)])]),ie,e("td",pe,[n(o,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[ue]),_:1}),t(),n(o,{to:"/leetcode/outline/tag/hash-table.html"},{default:s(()=>[he]),_:1}),t(),n(o,{to:"/leetcode/outline/tag/prefix-sum.html"},{default:s(()=>[_e]),_:1})]),e("td",me,[n(l,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1})])])])])])}const ye=d(h,[["render",ke],["__file","0026.html.vue"]]);export{ye as default};
