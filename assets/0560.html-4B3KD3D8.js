import{_ as d,r as c,o as i,c as p,a as t,b as n,d as e,w as s,f as r,e as u}from"./app-5VBZs9Uu.js";const _={},h={id:"_560-和为-k-的子数组",tabindex:"-1"},m=t("a",{class:"header-anchor",href:"#_560-和为-k-的子数组","aria-hidden":"true"},"#",-1),k={href:"https://leetcode.com/problems/subarray-sum-equals-k",target:"_blank",rel:"noopener noreferrer"},f=t("code",null,"数组",-1),g=t("code",null,"哈希表",-1),b=t("code",null,"前缀和",-1),y={href:"https://leetcode.com/problems/subarray-sum-equals-k",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of integers <code>nums</code> and an integer <code>k</code>, return <em>the total number of subarrays whose sum equals to</em> <code>k</code>.</p><p>A subarray is a contiguous <strong>non-empty</strong> sequence of elements within an array.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,1,1], k = 2</p><p>Output: 2</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,2,3], k = 3</p><p>Output: 2</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 2 * 10^4</code></li><li><code>-1000 &lt;= nums[i] &lt;= 1000</code></li><li><code>-10^7 &lt;= k &lt;= 10^7</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code> 和一个整数 <code>k</code> ，请你统计并返回 <em>该数组中和为 <code>k</code> 的子数组的个数</em>。</p><p>子数组是数组中元素的连续非空序列。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,1,1], k = 2</p><p><strong>输出：</strong> 2</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,2,3], k = 3</p><p><strong>输出：</strong> 2</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 2 * 10^4</code></li><li><code>-1000 &lt;= nums[i] &lt;= 1000</code></li><li><code>-10^7 &lt;= k &lt;= 10^7</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>为了高效解决这个问题，可以使用<strong>前缀和</strong>和<strong>哈希表</strong>的组合。</p><p>前缀和指的是数组中从开始到某个位置的所有元素之和。利用前缀和，可以计算出任意子数组的和。</p><p>假设子数组的范围是从索引 <code>i</code> 到 <code>j</code>，那么它的和可以表示为：<code>sum(nums[i:j]) = prefixSum[j] - prefixSum[i-1]</code>，其中，<code>prefixSum[i]</code> 是从数组开头到索引 <code>i</code> 的前缀和。</p><p>如果想让这个子数组的和等于 <code>k</code>，就需要满足：<code>prefixSum[j] - prefixSum[i-1] = k</code>，换句话说，子数组的和等于 <code>k</code> 等价于在之前的某个位置 <code>i-1</code> 存在一个前缀和，它与当前前缀和的差为 <code>k</code>。</p><p>为了快速判断是否有这样的前缀和，使用哈希表记录每个前缀和出现的次数。每次遍历数组时，计算当前前缀和，并查看哈希表中是否存在 <code>prefixSum - k</code>，如果存在，说明从之前某个位置到当前位置的子数组和等于 <code>k</code>。</p><ol><li>初始化一个哈希表 <code>map</code>，用于记录前缀和出现的次数。初始时将 <code>map[0] = 1</code>，表示和为 0 的前缀和已经出现过一次（这是为了处理从数组开头的子数组）。</li><li>遍历数组，逐步累加计算当前前缀和 <code>prefixSum</code>。</li><li>每次计算新的前缀和时，查看 <code>map</code> 中是否存在 <code>prefixSum - k</code>，如果存在，说明找到了一个和为 <code>k</code> 的子数组，将计数器增加。</li><li>然后将当前的 <code>prefixSum</code> 的值更新到哈希表中。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组的长度。只需要遍历数组一次，哈希表的插入和查询都是常数时间。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，最坏情况下，所有前缀和都不同，哈希表需要记录所有前缀和。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">subarraySum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 初始化前缀和为0，出现1次</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		sum <span class="token operator">+=</span> num<span class="token punctuation">;</span> <span class="token comment">// 当前前缀和</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>sum <span class="token operator">-</span> k<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res <span class="token operator">+=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>sum <span class="token operator">-</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 如果存在前缀和差为k，则增加计数</span>
		<span class="token punctuation">}</span>
		map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>sum<span class="token punctuation">,</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 更新当前前缀和的出现次数</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,30),j=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),w=t("td",{style:{"text-align":"center"}},"1",-1),q={style:{"text-align":"left"}},S={href:"https://leetcode.com/problems/two-sum",target:"_blank",rel:"noopener noreferrer"},M={style:{"text-align":"center"}},E={style:{"text-align":"left"}},C=t("code",null,"数组",-1),L=t("code",null,"哈希表",-1),N={style:{"text-align":"left"}},V=t("td",{style:{"text-align":"center"}},"523",-1),I={style:{"text-align":"left"}},O={href:"https://leetcode.com/problems/continuous-subarray-sum",target:"_blank",rel:"noopener noreferrer"},B=t("td",{style:{"text-align":"center"}},null,-1),K={style:{"text-align":"left"}},R=t("code",null,"数组",-1),z=t("code",null,"哈希表",-1),A=t("code",null,"数学",-1),G=t("code",null,"1+",-1),T={style:{"text-align":"left"}},D=t("td",{style:{"text-align":"center"}},"713",-1),F={style:{"text-align":"left"}},H={href:"https://leetcode.com/problems/subarray-product-less-than-k",target:"_blank",rel:"noopener noreferrer"},J=t("td",{style:{"text-align":"center"}},null,-1),P={style:{"text-align":"left"}},Q=t("code",null,"数组",-1),U=t("code",null,"二分查找",-1),W=t("code",null,"前缀和",-1),X=t("code",null,"1+",-1),Y={style:{"text-align":"left"}},Z=t("td",{style:{"text-align":"center"}},"724",-1),$={style:{"text-align":"left"}},tt={href:"https://leetcode.com/problems/find-pivot-index",target:"_blank",rel:"noopener noreferrer"},et={style:{"text-align":"center"}},nt={style:{"text-align":"left"}},st=t("code",null,"数组",-1),ot=t("code",null,"前缀和",-1),at={style:{"text-align":"left"}},lt=t("td",{style:{"text-align":"center"}},"974",-1),ct={style:{"text-align":"left"}},dt={href:"https://leetcode.com/problems/subarray-sums-divisible-by-k",target:"_blank",rel:"noopener noreferrer"},it=t("td",{style:{"text-align":"center"}},null,-1),pt={style:{"text-align":"left"}},rt=t("code",null,"数组",-1),ut=t("code",null,"哈希表",-1),_t=t("code",null,"前缀和",-1),ht={style:{"text-align":"left"}},mt=t("td",{style:{"text-align":"center"}},"1658",-1),kt={style:{"text-align":"left"}},ft={href:"https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero",target:"_blank",rel:"noopener noreferrer"},gt=t("td",{style:{"text-align":"center"}},null,-1),bt={style:{"text-align":"left"}},yt=t("code",null,"数组",-1),xt=t("code",null,"哈希表",-1),vt=t("code",null,"二分查找",-1),jt=t("code",null,"2+",-1),wt={style:{"text-align":"left"}},qt=t("td",{style:{"text-align":"center"}},"2090",-1),St={style:{"text-align":"left"}},Mt={href:"https://leetcode.com/problems/k-radius-subarray-averages",target:"_blank",rel:"noopener noreferrer"},Et=t("td",{style:{"text-align":"center"}},null,-1),Ct={style:{"text-align":"left"}},Lt=t("code",null,"数组",-1),Nt=t("code",null,"滑动窗口",-1),Vt={style:{"text-align":"left"}},It=t("td",{style:{"text-align":"center"}},"2219",-1),Ot={style:{"text-align":"left"}},Bt={href:"https://leetcode.com/problems/maximum-sum-score-of-array",target:"_blank",rel:"noopener noreferrer"},Kt=t("td",{style:{"text-align":"center"}},null,-1),Rt={style:{"text-align":"left"}},zt=t("code",null,"数组",-1),At=t("code",null,"前缀和",-1),Gt={style:{"text-align":"left"}};function Tt(Dt,Ft){const a=c("ExternalLinkIcon"),l=c("font"),o=c("RouterLink");return i(),p("div",null,[t("h1",h,[m,n(),t("a",k,[n("560. 和为 K 的子数组"),e(a)])]),t("p",null,[n("🟠 "),e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1}),n("  🔖  "),e(o,{to:"/leetcode-js/outline/tag/array.html"},{default:s(()=>[f]),_:1}),n(),e(o,{to:"/leetcode-js/outline/tag/hash-table.html"},{default:s(()=>[g]),_:1}),n(),e(o,{to:"/leetcode-js/outline/tag/prefix-sum.html"},{default:s(()=>[b]),_:1}),n("  🔗 "),t("a",y,[x,e(a)])]),v,r(" prettier-ignore "),t("table",null,[j,t("tbody",null,[t("tr",null,[w,t("td",q,[t("a",S,[n("两数之和"),e(a)])]),t("td",M,[e(o,{to:"/leetcode-js/problem/0001.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",E,[e(o,{to:"/leetcode-js/outline/tag/array.html"},{default:s(()=>[C]),_:1}),n(),e(o,{to:"/leetcode-js/outline/tag/hash-table.html"},{default:s(()=>[L]),_:1})]),t("td",N,[e(l,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1})])]),t("tr",null,[V,t("td",I,[t("a",O,[n("连续的子数组和"),e(a)])]),B,t("td",K,[e(o,{to:"/leetcode-js/outline/tag/array.html"},{default:s(()=>[R]),_:1}),n(),e(o,{to:"/leetcode-js/outline/tag/hash-table.html"},{default:s(()=>[z]),_:1}),n(),e(o,{to:"/leetcode-js/outline/tag/math.html"},{default:s(()=>[A]),_:1}),n(),G]),t("td",T,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[D,t("td",F,[t("a",H,[n("乘积小于 K 的子数组"),e(a)])]),J,t("td",P,[e(o,{to:"/leetcode-js/outline/tag/array.html"},{default:s(()=>[Q]),_:1}),n(),e(o,{to:"/leetcode-js/outline/tag/binary-search.html"},{default:s(()=>[U]),_:1}),n(),e(o,{to:"/leetcode-js/outline/tag/prefix-sum.html"},{default:s(()=>[W]),_:1}),n(),X]),t("td",Y,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[Z,t("td",$,[t("a",tt,[n("寻找数组的中心下标"),e(a)])]),t("td",et,[e(o,{to:"/leetcode-js/problem/0724.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",nt,[e(o,{to:"/leetcode-js/outline/tag/array.html"},{default:s(()=>[st]),_:1}),n(),e(o,{to:"/leetcode-js/outline/tag/prefix-sum.html"},{default:s(()=>[ot]),_:1})]),t("td",at,[e(l,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1})])]),t("tr",null,[lt,t("td",ct,[t("a",dt,[n("和可被 K 整除的子数组"),e(a)])]),it,t("td",pt,[e(o,{to:"/leetcode-js/outline/tag/array.html"},{default:s(()=>[rt]),_:1}),n(),e(o,{to:"/leetcode-js/outline/tag/hash-table.html"},{default:s(()=>[ut]),_:1}),n(),e(o,{to:"/leetcode-js/outline/tag/prefix-sum.html"},{default:s(()=>[_t]),_:1})]),t("td",ht,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[mt,t("td",kt,[t("a",ft,[n("将 x 减到 0 的最小操作数"),e(a)])]),gt,t("td",bt,[e(o,{to:"/leetcode-js/outline/tag/array.html"},{default:s(()=>[yt]),_:1}),n(),e(o,{to:"/leetcode-js/outline/tag/hash-table.html"},{default:s(()=>[xt]),_:1}),n(),e(o,{to:"/leetcode-js/outline/tag/binary-search.html"},{default:s(()=>[vt]),_:1}),n(),jt]),t("td",wt,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[qt,t("td",St,[t("a",Mt,[n("半径为 k 的子数组平均值"),e(a)])]),Et,t("td",Ct,[e(o,{to:"/leetcode-js/outline/tag/array.html"},{default:s(()=>[Lt]),_:1}),n(),e(o,{to:"/leetcode-js/outline/tag/sliding-window.html"},{default:s(()=>[Nt]),_:1})]),t("td",Vt,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[It,t("td",Ot,[t("a",Bt,[n("数组的最大总分"),e(a)])]),Kt,t("td",Rt,[e(o,{to:"/leetcode-js/outline/tag/array.html"},{default:s(()=>[zt]),_:1}),n(),e(o,{to:"/leetcode-js/outline/tag/prefix-sum.html"},{default:s(()=>[At]),_:1})]),t("td",Gt,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])])])])])}const Jt=d(_,[["render",Tt],["__file","0560.html.vue"]]);export{Jt as default};
