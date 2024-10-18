import{_ as i,r as c,o as d,c as p,a as t,b as n,d as e,w as s,f as u,e as r}from"./app-GnK0vSxb.js";const _={},h={id:"_496-下一个更大元素-i",tabindex:"-1"},m=t("a",{class:"header-anchor",href:"#_496-下一个更大元素-i","aria-hidden":"true"},"#",-1),k={href:"https://leetcode.com/problems/next-greater-element-i",target:"_blank",rel:"noopener noreferrer"},f=t("code",null,"栈",-1),g=t("code",null,"数组",-1),x=t("code",null,"哈希表",-1),b=t("code",null,"单调栈",-1),y={href:"https://leetcode.com/problems/next-greater-element-i",target:"_blank",rel:"noopener noreferrer"},v=t("code",null,"LeetCode",-1),w=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>The <strong>next greater element</strong> of some element <code>x</code> in an array is the <strong>first greater</strong> element that is <strong>to the right</strong> of <code>x</code> in the same array.</p><p>You are given two <strong>distinct 0-indexed</strong> integer arrays <code>nums1</code> and <code>nums2</code>, where <code>nums1</code> is a subset of <code>nums2</code>.</p><p>For each <code>0 &lt;= i &lt; nums1.length</code>, find the index <code>j</code> such that <code>nums1[i] == nums2[j]</code> and determine the <strong>next greater element</strong> of <code>nums2[j]</code> in <code>nums2</code>. If there is no next greater element, then the answer for this query is <code>-1</code>.</p><p>Return <em>an array</em><code>ans</code> <em>of length</em><code>nums1.length</code> <em>such that</em><code>ans[i]</code> <em>is the <strong>next greater element</strong> as described above.</em></p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums1 = [4,1,2], nums2 = [1,3,4,2]</p><p>Output: [-1,3,-1]</p><p>Explanation: The next greater element for each value of nums1 is as follows:</p><ul><li>4 is underlined in nums2 = [1,3, <em>4</em> ,2]. There is no next greater element, so the answer is -1.</li><li>1 is underlined in nums2 = [ <em>1</em> ,3,4,2]. The next greater element is 3.</li><li>2 is underlined in nums2 = [1,3,4, <em>2</em> ]. There is no next greater element, so the answer is -1.</li></ul></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums1 = [2,4], nums2 = [1,2,3,4]</p><p>Output: [3,-1]</p><p>Explanation: The next greater element for each value of nums1 is as follows:</p><ul><li>2 is underlined in nums2 = [1, <em>2</em> ,3,4]. The next greater element is 3.</li><li>4 is underlined in nums2 = [1,2,3, <em>4</em> ]. There is no next greater element, so the answer is -1.</li></ul></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums1.length &lt;= nums2.length &lt;= 1000</code></li><li><code>0 &lt;= nums1[i], nums2[i] &lt;= 10^4</code></li><li>All integers in <code>nums1</code> and <code>nums2</code> are <strong>unique</strong>.</li><li>All the integers of <code>nums1</code> also appear in <code>nums2</code>.</li></ul><p><strong>Follow up:</strong> Could you find an <code>O(nums1.length + nums2.length)</code> solution?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>题目给出 2 个数组 A 和 B，针对 A 中的每个数组中的元素，要求在 B 数组中找出比 A 数组中元素大的数，B 中元素之间的顺序保持不变。如果找到了就输出这个值，如果找不到就输出 <code>-1</code>。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>使用单调递增栈；</li><li>因为 <code>nums1</code> 是 <code>nums2</code> 的子集，所以我们可以先遍历一遍 <code>nums2</code>，并构造单调递增栈；</li><li>求出 <code>nums2</code> 中每个元素右侧下一个更大的元素，然后将其存储到哈希表中；</li><li>再遍历一遍 <code>nums1</code>，从哈希表中取出对应结果，存放到答案数组中；</li><li>这种解法的时间复杂度是 <code>O(n)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">nextGreaterElement</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums1<span class="token punctuation">,</span> nums2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> nums2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums1<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		nums1<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>nums1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">?</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>nums1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> nums1<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,19),I=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),E=t("td",{style:{"text-align":"center"}},"503",-1),T={style:{"text-align":"left"}},q={href:"https://leetcode.com/problems/next-greater-element-ii",target:"_blank",rel:"noopener noreferrer"},j={style:{"text-align":"center"}},B={style:{"text-align":"left"}},C=t("code",null,"栈",-1),M=t("code",null,"数组",-1),V=t("code",null,"单调栈",-1),A={style:{"text-align":"left"}},L=t("td",{style:{"text-align":"center"}},"556",-1),N={style:{"text-align":"left"}},O={href:"https://leetcode.com/problems/next-greater-element-iii",target:"_blank",rel:"noopener noreferrer"},R=t("td",{style:{"text-align":"center"}},null,-1),F={style:{"text-align":"left"}},H=t("code",null,"数学",-1),z=t("code",null,"双指针",-1),G=t("code",null,"字符串",-1),S={style:{"text-align":"left"}},Y=t("td",{style:{"text-align":"center"}},"739",-1),D={style:{"text-align":"left"}},J={href:"https://leetcode.com/problems/daily-temperatures",target:"_blank",rel:"noopener noreferrer"},K={style:{"text-align":"center"}},P={style:{"text-align":"left"}},Q=t("code",null,"栈",-1),U=t("code",null,"数组",-1),W=t("code",null,"单调栈",-1),X={style:{"text-align":"left"}},Z=t("td",{style:{"text-align":"center"}},"2104",-1),$={style:{"text-align":"left"}},tt={href:"https://leetcode.com/problems/sum-of-subarray-ranges",target:"_blank",rel:"noopener noreferrer"},et=t("td",{style:{"text-align":"center"}},null,-1),nt={style:{"text-align":"left"}},st=t("code",null,"栈",-1),at=t("code",null,"数组",-1),ot=t("code",null,"单调栈",-1),lt={style:{"text-align":"left"}},ct=t("td",{style:{"text-align":"center"}},"2281",-1),it={style:{"text-align":"left"}},dt={href:"https://leetcode.com/problems/sum-of-total-strength-of-wizards",target:"_blank",rel:"noopener noreferrer"},pt=t("td",{style:{"text-align":"center"}},null,-1),ut={style:{"text-align":"left"}},rt=t("code",null,"栈",-1),_t=t("code",null,"数组",-1),ht=t("code",null,"前缀和",-1),mt=t("code",null,"1+",-1),kt={style:{"text-align":"left"}},ft=t("td",{style:{"text-align":"center"}},"2454",-1),gt={style:{"text-align":"left"}},xt={href:"https://leetcode.com/problems/next-greater-element-iv",target:"_blank",rel:"noopener noreferrer"},bt=t("td",{style:{"text-align":"center"}},null,-1),yt={style:{"text-align":"left"}},vt=t("code",null,"栈",-1),wt=t("code",null,"数组",-1),It=t("code",null,"二分查找",-1),Et=t("code",null,"3+",-1),Tt={style:{"text-align":"left"}},qt=t("td",{style:{"text-align":"center"}},"2487",-1),jt={style:{"text-align":"left"}},Bt={href:"https://leetcode.com/problems/remove-nodes-from-linked-list",target:"_blank",rel:"noopener noreferrer"},Ct=t("td",{style:{"text-align":"center"}},null,-1),Mt={style:{"text-align":"left"}},Vt=t("code",null,"栈",-1),At=t("code",null,"递归",-1),Lt=t("code",null,"链表",-1),Nt=t("code",null,"1+",-1),Ot={style:{"text-align":"left"}},Rt=t("td",{style:{"text-align":"center"}},"2996",-1),Ft={style:{"text-align":"left"}},Ht={href:"https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum",target:"_blank",rel:"noopener noreferrer"},zt=t("td",{style:{"text-align":"center"}},null,-1),Gt={style:{"text-align":"left"}},St=t("code",null,"数组",-1),Yt=t("code",null,"哈希表",-1),Dt=t("code",null,"排序",-1),Jt={style:{"text-align":"left"}};function Kt(Pt,Qt){const o=c("ExternalLinkIcon"),l=c("font"),a=c("RouterLink");return d(),p("div",null,[t("h1",h,[m,n(),t("a",k,[n("496. 下一个更大元素 I"),e(o)])]),t("p",null,[n("🟢 "),e(l,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),e(a,{to:"/leetcode/outline/tag/stack.html"},{default:s(()=>[f]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[g]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/hash-table.html"},{default:s(()=>[x]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/monotonic-stack.html"},{default:s(()=>[b]),_:1}),n("  🔗 "),t("a",y,[v,e(o)])]),w,u(" prettier-ignore "),t("table",null,[I,t("tbody",null,[t("tr",null,[E,t("td",T,[t("a",q,[n("下一个更大元素 II"),e(o)])]),t("td",j,[e(a,{to:"/leetcode/problem/0503.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",B,[e(a,{to:"/leetcode/outline/tag/stack.html"},{default:s(()=>[C]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[M]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/monotonic-stack.html"},{default:s(()=>[V]),_:1})]),t("td",A,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[L,t("td",N,[t("a",O,[n("下一个更大元素 III"),e(o)])]),R,t("td",F,[e(a,{to:"/leetcode/outline/tag/math.html"},{default:s(()=>[H]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/two-pointers.html"},{default:s(()=>[z]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/string.html"},{default:s(()=>[G]),_:1})]),t("td",S,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[Y,t("td",D,[t("a",J,[n("每日温度"),e(o)])]),t("td",K,[e(a,{to:"/leetcode/problem/0739.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",P,[e(a,{to:"/leetcode/outline/tag/stack.html"},{default:s(()=>[Q]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[U]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/monotonic-stack.html"},{default:s(()=>[W]),_:1})]),t("td",X,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[Z,t("td",$,[t("a",tt,[n("子数组范围和"),e(o)])]),et,t("td",nt,[e(a,{to:"/leetcode/outline/tag/stack.html"},{default:s(()=>[st]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[at]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/monotonic-stack.html"},{default:s(()=>[ot]),_:1})]),t("td",lt,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[ct,t("td",it,[t("a",dt,[n("巫师的总力量和"),e(o)])]),pt,t("td",ut,[e(a,{to:"/leetcode/outline/tag/stack.html"},{default:s(()=>[rt]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[_t]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/prefix-sum.html"},{default:s(()=>[ht]),_:1}),n(),mt]),t("td",kt,[e(l,{color:"#ff334b"},{default:s(()=>[n("Hard")]),_:1})])]),t("tr",null,[ft,t("td",gt,[t("a",xt,[n("下一个更大元素 IV"),e(o)])]),bt,t("td",yt,[e(a,{to:"/leetcode/outline/tag/stack.html"},{default:s(()=>[vt]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[wt]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/binary-search.html"},{default:s(()=>[It]),_:1}),n(),Et]),t("td",Tt,[e(l,{color:"#ff334b"},{default:s(()=>[n("Hard")]),_:1})])]),t("tr",null,[qt,t("td",jt,[t("a",Bt,[n("从链表中移除节点"),e(o)])]),Ct,t("td",Mt,[e(a,{to:"/leetcode/outline/tag/stack.html"},{default:s(()=>[Vt]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/recursion.html"},{default:s(()=>[At]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/linked-list.html"},{default:s(()=>[Lt]),_:1}),n(),Nt]),t("td",Ot,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[Rt,t("td",Ft,[t("a",Ht,[n("大于等于顺序前缀和的最小缺失整数"),e(o)])]),zt,t("td",Gt,[e(a,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[St]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/hash-table.html"},{default:s(()=>[Yt]),_:1}),n(),e(a,{to:"/leetcode/outline/tag/sorting.html"},{default:s(()=>[Dt]),_:1})]),t("td",Jt,[e(l,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1})])])])])])}const Wt=i(_,[["render",Kt],["__file","0496.html.vue"]]);export{Wt as default};
