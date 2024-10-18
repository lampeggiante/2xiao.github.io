import{_ as c,r as d,o as i,c as r,a as t,b as o,d as e,w as n,f as _,e as u}from"./app-mvY9N9Pc.js";const h={},p={id:"_1-两数之和",tabindex:"-1"},f=t("a",{class:"header-anchor",href:"#_1-两数之和","aria-hidden":"true"},"#",-1),g={href:"https://leetcode.com/problems/two-sum",target:"_blank",rel:"noopener noreferrer"},m=t("code",null,"数组",-1),y=t("code",null,"哈希表",-1),b={href:"https://leetcode.com/problems/two-sum",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"LeetCode",-1),k=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of integers <code>nums</code> and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to<code>target</code></em>.</p><p>You may assume that each input would have <strong><em>exactly</em> one solution</strong>, and you may not use the <em>same</em> element twice.</p><p>You can return the answer in any order.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [2,7,11,15], target = 9</p><p>Output: [0,1]</p><p>Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [3,2,4], target = 6</p><p>Output: [1,2]</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [3,3], target = 6</p><p>Output: [0,1]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= nums.length &lt;= 10^4</code></li><li><code>-10^9 &lt;= nums[i] &lt;= 10^9</code></li><li><code>-10^9 &lt;= target &lt;= 10^9</code></li><li><strong>Only one valid answer exists.</strong></li></ul><p><strong>Follow-up:</strong> Can you come up with an algorithm that is less than <code>O(n2)</code> time complexity?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>在数组中找到 2 个数之和等于给定值的数字，结果返回 2 个数字在数组中的下标。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>使用哈希表，顺序扫描数组，对每一个元素，在 <code>object</code> 中找能组合给定值的另一半数字，如果找到了，直接返回 2 个数字的下标即可。如果找不到，就把这个数字存入 <code>object</code> 中，等待扫到“另一半”数字的时候，再取出来返回结果。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串的长度。</li><li><strong>空间复杂度</strong>：<code>O(k)</code>，其中 <code>k</code> 是 <code>object</code> 中存放的数字数量，最坏情况下，需要扫描到最后一个数字才能找到结果，此时 <code>k</code> 会趋近 <code>n</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">twoSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> numsObj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> another <span class="token operator">=</span> target <span class="token operator">-</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>another <span class="token keyword">in</span> numsObj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token punctuation">[</span>numsObj<span class="token punctuation">[</span>another<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		numsObj<span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,22),w=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),v=t("td",{style:{"text-align":"center"}},"15",-1),E={style:{"text-align":"left"}},j={href:"https://leetcode.com/problems/3sum",target:"_blank",rel:"noopener noreferrer"},I={style:{"text-align":"center"}},O={href:"https://2xiao.github.io/leetcode-js/leetcode/problem/0015",target:"_blank",rel:"noopener noreferrer"},q={style:{"text-align":"left"}},M=t("code",null,"数组",-1),C=t("code",null,"双指针",-1),V=t("code",null,"排序",-1),K={style:{"text-align":"left"}},L=t("td",{style:{"text-align":"center"}},"18",-1),N={style:{"text-align":"left"}},B={href:"https://leetcode.com/problems/4sum",target:"_blank",rel:"noopener noreferrer"},R={style:{"text-align":"center"}},S={href:"https://2xiao.github.io/leetcode-js/leetcode/problem/0018",target:"_blank",rel:"noopener noreferrer"},Y={style:{"text-align":"left"}},F=t("code",null,"数组",-1),G=t("code",null,"双指针",-1),H=t("code",null,"排序",-1),T={style:{"text-align":"left"}},z=t("td",{style:{"text-align":"center"}},"167",-1),A={style:{"text-align":"left"}},D={href:"https://leetcode.com/problems/two-sum-ii-input-array-is-sorted",target:"_blank",rel:"noopener noreferrer"},J={style:{"text-align":"center"}},P={href:"https://2xiao.github.io/leetcode-js/leetcode/problem/0167",target:"_blank",rel:"noopener noreferrer"},Q={style:{"text-align":"left"}},U=t("code",null,"数组",-1),W=t("code",null,"双指针",-1),X=t("code",null,"二分查找",-1),Z={style:{"text-align":"left"}},$=t("td",{style:{"text-align":"center"}},"170",-1),tt={style:{"text-align":"left"}},et={href:"https://leetcode.com/problems/two-sum-iii-data-structure-design",target:"_blank",rel:"noopener noreferrer"},ot=t("td",{style:{"text-align":"center"}},null,-1),nt={style:{"text-align":"left"}},lt=t("code",null,"设计",-1),st=t("code",null,"数组",-1),at=t("code",null,"哈希表",-1),dt=t("code",null,"2+",-1),ct={style:{"text-align":"left"}},it=t("td",{style:{"text-align":"center"}},"560",-1),rt={style:{"text-align":"left"}},_t={href:"https://leetcode.com/problems/subarray-sum-equals-k",target:"_blank",rel:"noopener noreferrer"},ut={style:{"text-align":"center"}},ht={href:"https://2xiao.github.io/leetcode-js/leetcode/problem/0560",target:"_blank",rel:"noopener noreferrer"},pt={style:{"text-align":"left"}},ft=t("code",null,"数组",-1),gt=t("code",null,"哈希表",-1),mt=t("code",null,"前缀和",-1),yt={style:{"text-align":"left"}},bt=t("td",{style:{"text-align":"center"}},"653",-1),xt={style:{"text-align":"left"}},kt={href:"https://leetcode.com/problems/two-sum-iv-input-is-a-bst",target:"_blank",rel:"noopener noreferrer"},wt=t("td",{style:{"text-align":"center"}},null,-1),vt={style:{"text-align":"left"}},Et=t("code",null,"树",-1),jt=t("code",null,"深度优先搜索",-1),It=t("code",null,"广度优先搜索",-1),Ot=t("code",null,"4+",-1),qt={style:{"text-align":"left"}},Mt=t("td",{style:{"text-align":"center"}},"1099",-1),Ct={style:{"text-align":"left"}},Vt={href:"https://leetcode.com/problems/two-sum-less-than-k",target:"_blank",rel:"noopener noreferrer"},Kt=t("td",{style:{"text-align":"center"}},null,-1),Lt={style:{"text-align":"left"}},Nt=t("code",null,"数组",-1),Bt=t("code",null,"双指针",-1),Rt=t("code",null,"二分查找",-1),St=t("code",null,"1+",-1),Yt={style:{"text-align":"left"}},Ft=t("td",{style:{"text-align":"center"}},"1679",-1),Gt={style:{"text-align":"left"}},Ht={href:"https://leetcode.com/problems/max-number-of-k-sum-pairs",target:"_blank",rel:"noopener noreferrer"},Tt=t("td",{style:{"text-align":"center"}},null,-1),zt={style:{"text-align":"left"}},At=t("code",null,"数组",-1),Dt=t("code",null,"哈希表",-1),Jt=t("code",null,"双指针",-1),Pt=t("code",null,"1+",-1),Qt={style:{"text-align":"left"}},Ut=t("td",{style:{"text-align":"center"}},"1711",-1),Wt={style:{"text-align":"left"}},Xt={href:"https://leetcode.com/problems/count-good-meals",target:"_blank",rel:"noopener noreferrer"},Zt=t("td",{style:{"text-align":"center"}},null,-1),$t={style:{"text-align":"left"}},te=t("code",null,"数组",-1),ee=t("code",null,"哈希表",-1),oe={style:{"text-align":"left"}},ne=t("td",{style:{"text-align":"center"}},"2006",-1),le={style:{"text-align":"left"}},se={href:"https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k",target:"_blank",rel:"noopener noreferrer"},ae=t("td",{style:{"text-align":"center"}},null,-1),de={style:{"text-align":"left"}},ce=t("code",null,"数组",-1),ie=t("code",null,"哈希表",-1),re=t("code",null,"计数",-1),_e={style:{"text-align":"left"}},ue=t("td",{style:{"text-align":"center"}},"2023",-1),he={style:{"text-align":"left"}},pe={href:"https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target",target:"_blank",rel:"noopener noreferrer"},fe=t("td",{style:{"text-align":"center"}},null,-1),ge={style:{"text-align":"left"}},me=t("code",null,"数组",-1),ye=t("code",null,"哈希表",-1),be=t("code",null,"字符串",-1),xe=t("code",null,"1+",-1),ke={style:{"text-align":"left"}},we=t("td",{style:{"text-align":"center"}},"2200",-1),ve={style:{"text-align":"left"}},Ee={href:"https://leetcode.com/problems/find-all-k-distant-indices-in-an-array",target:"_blank",rel:"noopener noreferrer"},je=t("td",{style:{"text-align":"center"}},null,-1),Ie={style:{"text-align":"left"}},Oe=t("code",null,"数组",-1),qe=t("code",null,"双指针",-1),Me={style:{"text-align":"left"}},Ce=t("td",{style:{"text-align":"center"}},"2351",-1),Ve={style:{"text-align":"left"}},Ke={href:"https://leetcode.com/problems/first-letter-to-appear-twice",target:"_blank",rel:"noopener noreferrer"},Le=t("td",{style:{"text-align":"center"}},null,-1),Ne={style:{"text-align":"left"}},Be=t("code",null,"位运算",-1),Re=t("code",null,"哈希表",-1),Se=t("code",null,"字符串",-1),Ye=t("code",null,"1+",-1),Fe={style:{"text-align":"left"}},Ge=t("td",{style:{"text-align":"center"}},"2354",-1),He={style:{"text-align":"left"}},Te={href:"https://leetcode.com/problems/number-of-excellent-pairs",target:"_blank",rel:"noopener noreferrer"},ze=t("td",{style:{"text-align":"center"}},null,-1),Ae={style:{"text-align":"left"}},De=t("code",null,"位运算",-1),Je=t("code",null,"数组",-1),Pe=t("code",null,"哈希表",-1),Qe=t("code",null,"1+",-1),Ue={style:{"text-align":"left"}},We=t("td",{style:{"text-align":"center"}},"2367",-1),Xe={style:{"text-align":"left"}},Ze={href:"https://leetcode.com/problems/number-of-arithmetic-triplets",target:"_blank",rel:"noopener noreferrer"},$e=t("td",{style:{"text-align":"center"}},null,-1),to={style:{"text-align":"left"}},eo=t("code",null,"数组",-1),oo=t("code",null,"哈希表",-1),no=t("code",null,"双指针",-1),lo=t("code",null,"1+",-1),so={style:{"text-align":"left"}},ao=t("td",{style:{"text-align":"center"}},"2374",-1),co={style:{"text-align":"left"}},io={href:"https://leetcode.com/problems/node-with-highest-edge-score",target:"_blank",rel:"noopener noreferrer"},ro=t("td",{style:{"text-align":"center"}},null,-1),_o={style:{"text-align":"left"}},uo=t("code",null,"图",-1),ho=t("code",null,"哈希表",-1),po={style:{"text-align":"left"}},fo=t("td",{style:{"text-align":"center"}},"2395",-1),go={style:{"text-align":"left"}},mo={href:"https://leetcode.com/problems/find-subarrays-with-equal-sum",target:"_blank",rel:"noopener noreferrer"},yo=t("td",{style:{"text-align":"center"}},null,-1),bo={style:{"text-align":"left"}},xo=t("code",null,"数组",-1),ko=t("code",null,"哈希表",-1),wo={style:{"text-align":"left"}},vo=t("td",{style:{"text-align":"center"}},"2399",-1),Eo={style:{"text-align":"left"}},jo={href:"https://leetcode.com/problems/check-distances-between-same-letters",target:"_blank",rel:"noopener noreferrer"},Io=t("td",{style:{"text-align":"center"}},null,-1),Oo={style:{"text-align":"left"}},qo=t("code",null,"数组",-1),Mo=t("code",null,"哈希表",-1),Co=t("code",null,"字符串",-1),Vo={style:{"text-align":"left"}},Ko=t("td",{style:{"text-align":"center"}},"2441",-1),Lo={style:{"text-align":"left"}},No={href:"https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative",target:"_blank",rel:"noopener noreferrer"},Bo=t("td",{style:{"text-align":"center"}},null,-1),Ro={style:{"text-align":"left"}},So=t("code",null,"数组",-1),Yo=t("code",null,"哈希表",-1),Fo=t("code",null,"双指针",-1),Go=t("code",null,"1+",-1),Ho={style:{"text-align":"left"}},To=t("td",{style:{"text-align":"center"}},"2465",-1),zo={style:{"text-align":"left"}},Ao={href:"https://leetcode.com/problems/number-of-distinct-averages",target:"_blank",rel:"noopener noreferrer"},Do=t("td",{style:{"text-align":"center"}},null,-1),Jo={style:{"text-align":"left"}},Po=t("code",null,"数组",-1),Qo=t("code",null,"哈希表",-1),Uo=t("code",null,"双指针",-1),Wo=t("code",null,"1+",-1),Xo={style:{"text-align":"left"}},Zo=t("td",{style:{"text-align":"center"}},"2824",-1),$o={style:{"text-align":"left"}},tn={href:"https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target",target:"_blank",rel:"noopener noreferrer"},en=t("td",{style:{"text-align":"center"}},null,-1),on={style:{"text-align":"left"}},nn=t("code",null,"数组",-1),ln=t("code",null,"双指针",-1),sn=t("code",null,"二分查找",-1),an=t("code",null,"1+",-1),dn={style:{"text-align":"left"}};function cn(rn,_n){const s=d("ExternalLinkIcon"),a=d("font"),l=d("RouterLink");return i(),r("div",null,[t("h1",p,[f,o(),t("a",g,[o("1. 两数之和"),e(s)])]),t("p",null,[o("🟢 "),e(a,{color:"#15bd66"},{default:n(()=>[o("Easy")]),_:1}),o("  🔖  "),e(l,{to:"/leetcode/outline/tag/array.html"},{default:n(()=>[m]),_:1}),o(),e(l,{to:"/leetcode/outline/tag/hash-table.html"},{default:n(()=>[y]),_:1}),o("  🔗 "),t("a",b,[x,e(s)])]),k,_(" prettier-ignore "),t("table",null,[w,t("tbody",null,[t("tr",null,[v,t("td",E,[t("a",j,[o("三数之和"),e(s)])]),t("td",I,[t("a",O,[o("[✓]"),e(s)])]),t("td",q,[e(l,{to:"/leetcode/outline/tag/array.html"},{default:n(()=>[M]),_:1}),o(),e(l,{to:"/leetcode/outline/tag/two-pointers.html"},{default:n(()=>[C]),_:1}),o(),e(l,{to:"/leetcode/outline/tag/sorting.html"},{default:n(()=>[V]),_:1})]),t("td",K,[e(a,{color:"#ffb800"},{default:n(()=>[o("Medium")]),_:1})])]),t("tr",null,[L,t("td",N,[t("a",B,[o("四数之和"),e(s)])]),t("td",R,[t("a",S,[o("[✓]"),e(s)])]),t("td",Y,[e(l,{to:"/leetcode/outline/tag/array.html"},{default:n(()=>[F]),_:1}),o(),e(l,{to:"/leetcode/outline/tag/two-pointers.html"},{default:n(()=>[G]),_:1}),o(),e(l,{to:"/leetcode/outline/tag/sorting.html"},{default:n(()=>[H]),_:1})]),t("td",T,[e(a,{color:"#ffb800"},{default:n(()=>[o("Medium")]),_:1})])]),t("tr",null,[z,t("td",A,[t("a",D,[o("两数之和 II - 输入有序数组"),e(s)])]),t("td",J,[t("a",P,[o("[✓]"),e(s)])]),t("td",Q,[e(l,{to:"/leetcode/outline/tag/array.html"},{default:n(()=>[U]),_:1}),o(),e(l,{to:"/leetcode/outline/tag/two-pointers.html"},{default:n(()=>[W]),_:1}),o(),e(l,{to:"/leetcode/outline/tag/binary-search.html"},{default:n(()=>[X]),_:1})]),t("td",Z,[e(a,{color:"#ffb800"},{default:n(()=>[o("Medium")]),_:1})])]),t("tr",null,[$,t("td",tt,[t("a",et,[o("两数之和 III - 数据结构设计"),e(s)])]),ot,t("td",nt,[e(l,{to:"/leetcode/outline/tag/design.html"},{default:n(()=>[lt]),_:1}),o(),e(l,{to:"/leetcode/outline/tag/array.html"},{default:n(()=>[st]),_:1}),o(),e(l,{to:"/leetcode/outline/tag/hash-table.html"},{default:n(()=>[at]),_:1}),o(),dt]),t("td",ct,[e(a,{color:"#15bd66"},{default:n(()=>[o("Easy")]),_:1})])]),t("tr",null,[it,t("td",rt,[t("a",_t,[o("和为 K 的子数组"),e(s)])]),t("td",ut,[t("a",ht,[o("[✓]"),e(s)])]),t("td",pt,[e(l,{to:"/leetcode/outline/tag/array.html"},{default:n(()=>[ft]),_:1}),o(),e(l,{to:"/leetcode/outline/tag/hash-table.html"},{default:n(()=>[gt]),_:1}),o(),e(l,{to:"/leetcode/outline/tag/prefix-sum.html"},{default:n(()=>[mt]),_:1})]),t("td",yt,[e(a,{color:"#ffb800"},{default:n(()=>[o("Medium")]),_:1})])]),t("tr",null,[bt,t("td",xt,[t("a",kt,[o("两数之和 IV - 输入二叉搜索树"),e(s)])]),wt,t("td",vt,[e(l,{to:"/leetcode/outline/tag/tree.html"},{default:n(()=>[Et]),_:1}),o(),e(l,{to:"/leetcode/outline/tag/depth-first-search.html"},{default:n(()=>[jt]),_:1}),o(),e(l,{to:"/leetcode/outline/tag/breadth-first-search.html"},{default:n(()=>[It]),_:1}),o(),Ot]),t("td",qt,[e(a,{color:"#15bd66"},{default:n(()=>[o("Easy")]),_:1})])]),t("tr",null,[Mt,t("td",Ct,[t("a",Vt,[o("小于 K 的两数之和"),e(s)])]),Kt,t("td",Lt,[e(l,{to:"/leetcode/outline/tag/array.html"},{default:n(()=>[Nt]),_:1}),o(),e(l,{to:"/leetcode/outline/tag/two-pointers.html"},{default:n(()=>[Bt]),_:1}),o(),e(l,{to:"/leetcode/outline/tag/binary-search.html"},{default:n(()=>[Rt]),_:1}),o(),St]),t("td",Yt,[e(a,{color:"#15bd66"},{default:n(()=>[o("Easy")]),_:1})])]),t("tr",null,[Ft,t("td",Gt,[t("a",Ht,[o("K 和数对的最大数目"),e(s)])]),Tt,t("td",zt,[e(l,{to:"/leetcode/outline/tag/array.html"},{default:n(()=>[At]),_:1}),o(),e(l,{to:"/leetcode/outline/tag/hash-table.html"},{default:n(()=>[Dt]),_:1}),o(),e(l,{to:"/leetcode/outline/tag/two-pointers.html"},{default:n(()=>[Jt]),_:1}),o(),Pt]),t("td",Qt,[e(a,{color:"#ffb800"},{default:n(()=>[o("Medium")]),_:1})])]),t("tr",null,[Ut,t("td",Wt,[t("a",Xt,[o("大餐计数"),e(s)])]),Zt,t("td",$t,[e(l,{to:"/leetcode/outline/tag/array.html"},{default:n(()=>[te]),_:1}),o(),e(l,{to:"/leetcode/outline/tag/hash-table.html"},{default:n(()=>[ee]),_:1})]),t("td",oe,[e(a,{color:"#ffb800"},{default:n(()=>[o("Medium")]),_:1})])]),t("tr",null,[ne,t("td",le,[t("a",se,[o("差的绝对值为 K 的数对数目"),e(s)])]),ae,t("td",de,[e(l,{to:"/leetcode/outline/tag/array.html"},{default:n(()=>[ce]),_:1}),o(),e(l,{to:"/leetcode/outline/tag/hash-table.html"},{default:n(()=>[ie]),_:1}),o(),e(l,{to:"/leetcode/outline/tag/counting.html"},{default:n(()=>[re]),_:1})]),t("td",_e,[e(a,{color:"#15bd66"},{default:n(()=>[o("Easy")]),_:1})])]),t("tr",null,[ue,t("td",he,[t("a",pe,[o("连接后等于目标字符串的字符串对"),e(s)])]),fe,t("td",ge,[e(l,{to:"/leetcode/outline/tag/array.html"},{default:n(()=>[me]),_:1}),o(),e(l,{to:"/leetcode/outline/tag/hash-table.html"},{default:n(()=>[ye]),_:1}),o(),e(l,{to:"/leetcode/outline/tag/string.html"},{default:n(()=>[be]),_:1}),o(),xe]),t("td",ke,[e(a,{color:"#ffb800"},{default:n(()=>[o("Medium")]),_:1})])]),t("tr",null,[we,t("td",ve,[t("a",Ee,[o("找出数组中的所有 K 近邻下标"),e(s)])]),je,t("td",Ie,[e(l,{to:"/leetcode/outline/tag/array.html"},{default:n(()=>[Oe]),_:1}),o(),e(l,{to:"/leetcode/outline/tag/two-pointers.html"},{default:n(()=>[qe]),_:1})]),t("td",Me,[e(a,{color:"#15bd66"},{default:n(()=>[o("Easy")]),_:1})])]),t("tr",null,[Ce,t("td",Ve,[t("a",Ke,[o("第一个出现两次的字母"),e(s)])]),Le,t("td",Ne,[e(l,{to:"/leetcode/outline/tag/bit-manipulation.html"},{default:n(()=>[Be]),_:1}),o(),e(l,{to:"/leetcode/outline/tag/hash-table.html"},{default:n(()=>[Re]),_:1}),o(),e(l,{to:"/leetcode/outline/tag/string.html"},{default:n(()=>[Se]),_:1}),o(),Ye]),t("td",Fe,[e(a,{color:"#15bd66"},{default:n(()=>[o("Easy")]),_:1})])]),t("tr",null,[Ge,t("td",He,[t("a",Te,[o("优质数对的数目"),e(s)])]),ze,t("td",Ae,[e(l,{to:"/leetcode/outline/tag/bit-manipulation.html"},{default:n(()=>[De]),_:1}),o(),e(l,{to:"/leetcode/outline/tag/array.html"},{default:n(()=>[Je]),_:1}),o(),e(l,{to:"/leetcode/outline/tag/hash-table.html"},{default:n(()=>[Pe]),_:1}),o(),Qe]),t("td",Ue,[e(a,{color:"#ff334b"},{default:n(()=>[o("Hard")]),_:1})])]),t("tr",null,[We,t("td",Xe,[t("a",Ze,[o("等差三元组的数目"),e(s)])]),$e,t("td",to,[e(l,{to:"/leetcode/outline/tag/array.html"},{default:n(()=>[eo]),_:1}),o(),e(l,{to:"/leetcode/outline/tag/hash-table.html"},{default:n(()=>[oo]),_:1}),o(),e(l,{to:"/leetcode/outline/tag/two-pointers.html"},{default:n(()=>[no]),_:1}),o(),lo]),t("td",so,[e(a,{color:"#15bd66"},{default:n(()=>[o("Easy")]),_:1})])]),t("tr",null,[ao,t("td",co,[t("a",io,[o("边积分最高的节点"),e(s)])]),ro,t("td",_o,[e(l,{to:"/leetcode/outline/tag/graph.html"},{default:n(()=>[uo]),_:1}),o(),e(l,{to:"/leetcode/outline/tag/hash-table.html"},{default:n(()=>[ho]),_:1})]),t("td",po,[e(a,{color:"#ffb800"},{default:n(()=>[o("Medium")]),_:1})])]),t("tr",null,[fo,t("td",go,[t("a",mo,[o("和相等的子数组"),e(s)])]),yo,t("td",bo,[e(l,{to:"/leetcode/outline/tag/array.html"},{default:n(()=>[xo]),_:1}),o(),e(l,{to:"/leetcode/outline/tag/hash-table.html"},{default:n(()=>[ko]),_:1})]),t("td",wo,[e(a,{color:"#15bd66"},{default:n(()=>[o("Easy")]),_:1})])]),t("tr",null,[vo,t("td",Eo,[t("a",jo,[o("检查相同字母间的距离"),e(s)])]),Io,t("td",Oo,[e(l,{to:"/leetcode/outline/tag/array.html"},{default:n(()=>[qo]),_:1}),o(),e(l,{to:"/leetcode/outline/tag/hash-table.html"},{default:n(()=>[Mo]),_:1}),o(),e(l,{to:"/leetcode/outline/tag/string.html"},{default:n(()=>[Co]),_:1})]),t("td",Vo,[e(a,{color:"#15bd66"},{default:n(()=>[o("Easy")]),_:1})])]),t("tr",null,[Ko,t("td",Lo,[t("a",No,[o("与对应负数同时存在的最大正整数"),e(s)])]),Bo,t("td",Ro,[e(l,{to:"/leetcode/outline/tag/array.html"},{default:n(()=>[So]),_:1}),o(),e(l,{to:"/leetcode/outline/tag/hash-table.html"},{default:n(()=>[Yo]),_:1}),o(),e(l,{to:"/leetcode/outline/tag/two-pointers.html"},{default:n(()=>[Fo]),_:1}),o(),Go]),t("td",Ho,[e(a,{color:"#15bd66"},{default:n(()=>[o("Easy")]),_:1})])]),t("tr",null,[To,t("td",zo,[t("a",Ao,[o("不同的平均值数目"),e(s)])]),Do,t("td",Jo,[e(l,{to:"/leetcode/outline/tag/array.html"},{default:n(()=>[Po]),_:1}),o(),e(l,{to:"/leetcode/outline/tag/hash-table.html"},{default:n(()=>[Qo]),_:1}),o(),e(l,{to:"/leetcode/outline/tag/two-pointers.html"},{default:n(()=>[Uo]),_:1}),o(),Wo]),t("td",Xo,[e(a,{color:"#15bd66"},{default:n(()=>[o("Easy")]),_:1})])]),t("tr",null,[Zo,t("td",$o,[t("a",tn,[o("统计和小于目标的下标对数目"),e(s)])]),en,t("td",on,[e(l,{to:"/leetcode/outline/tag/array.html"},{default:n(()=>[nn]),_:1}),o(),e(l,{to:"/leetcode/outline/tag/two-pointers.html"},{default:n(()=>[ln]),_:1}),o(),e(l,{to:"/leetcode/outline/tag/binary-search.html"},{default:n(()=>[sn]),_:1}),o(),an]),t("td",dn,[e(a,{color:"#15bd66"},{default:n(()=>[o("Easy")]),_:1})])])])])])}const hn=c(h,[["render",cn],["__file","0001.html.vue"]]);export{hn as default};
