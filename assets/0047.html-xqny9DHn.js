import{_ as l,r as c,o as i,c as u,a as n,b as t,d as s,w as a,f as r,e as d}from"./app-GnK0vSxb.js";const k={},m={id:"_47-全排列-ii",tabindex:"-1"},_=n("a",{class:"header-anchor",href:"#_47-全排列-ii","aria-hidden":"true"},"#",-1),h={href:"https://leetcode.com/problems/permutations-ii",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"数组",-1),f=n("code",null,"回溯",-1),v={href:"https://leetcode.com/problems/permutations-ii",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"LeetCode",-1),y=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a collection of numbers, <code>nums</code>, that might contain duplicates, return <em>all possible unique permutations <strong>in any order</strong>.</em></p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,1,2]</p><p>Output:</p><p>[[1,1,2],</p><p>[1,2,1],</p><p>[2,1,1]]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,2,3]</p><p>Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 8</code></li><li><code>-10 &lt;= nums[i] &lt;= 10</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个可包含重复数字的序列 <code>nums</code> ，<strong>按任意顺序</strong> 返回所有不重复的全排列。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用回溯算法生成全排列，同时处理数组中可能存在重复元素的情况：</p><ol><li>定义一个结果数组 <code>res</code>，一个路径数组 <code>track</code> 用于记录当前排列的路径，以及一个布尔数组 <code>used</code> 用于标记某个元素是否已经被使用过。</li><li>对输入数组 <code>nums</code> 进行升序排序，以方便在后续去重的过程中判断相邻元素是否相同。</li><li>创建一个名为 <code>backtrack</code> 的递归函数，该函数用于生成全排列。函数没有参数，通过数组 <code>track</code> 和布尔数组 <code>used</code> 记录当前的路径和状态。</li><li>在 <code>backtrack</code> 函数中，首先检查当前路径的长度是否等于输入数组 <code>nums</code> 的长度，如果是，则说明已经生成了一个完整的排列，将当前路径加入到结果数组 <code>res</code> 中，并直接返回。</li><li>然后，从头开始遍历排序后的数组 <code>nums</code>，对于每个元素： <ul><li>如果该元素已经被使用过 (<code>used[i]</code> 为 <code>true</code>)，则跳过当前元素。</li><li>如果该元素和前一个元素相同，且前一个元素没有被使用过 (<code>!used[i - 1]</code>)，则跳过当前元素。这是为了避免生成重复的排列，确保相同元素只在同一层递归中出现一次。</li><li>否则，将当前元素加入到路径 <code>track</code> 中，标记该元素为已使用，递归调用 <code>backtrack</code> 函数，进入下一层，并在递归调用结束后，将当前元素从路径中弹出，标记为未使用，以便回溯到上一层，继续遍历其他元素。</li></ul></li><li>最后，返回结果数组 <code>res</code>，其中包含了所有满足条件的全排列。</li></ol><p>标准全排列算法之所以出现重复，是因为把相同元素形成的排列序列视为不同的序列，但实际上它们应该是相同的；而如果固定相同元素形成的序列顺序，保证相同元素在排列中的相对位置保持不变，就避免了重复。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">permuteUnique</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> track <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> used <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 先排序，让相同的元素靠在一起</span>
	nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">backtrack</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>track<span class="token punctuation">.</span>length <span class="token operator">==</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>track<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 新添加的剪枝逻辑，固定相同的元素在排列中的相对位置</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>used<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>used<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">continue</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			track<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			used<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
			<span class="token function">backtrack</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			track<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			used<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token function">backtrack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,17),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),w=n("td",{style:{"text-align":"center"}},"31",-1),I={style:{"text-align":"left"}},q={href:"https://leetcode.com/problems/next-permutation",target:"_blank",rel:"noopener noreferrer"},C={style:{"text-align":"center"}},E={style:{"text-align":"left"}},L=n("code",null,"数组",-1),N=n("code",null,"双指针",-1),V={style:{"text-align":"left"}},M=n("td",{style:{"text-align":"center"}},"46",-1),j={style:{"text-align":"left"}},B={href:"https://leetcode.com/problems/permutations",target:"_blank",rel:"noopener noreferrer"},O={style:{"text-align":"center"}},R={style:{"text-align":"left"}},A=n("code",null,"数组",-1),G=n("code",null,"回溯",-1),H={style:{"text-align":"left"}},S=n("td",{style:{"text-align":"center"}},"267",-1),T={style:{"text-align":"left"}},U={href:"https://leetcode.com/problems/palindrome-permutation-ii",target:"_blank",rel:"noopener noreferrer"},z=n("td",{style:{"text-align":"center"}},null,-1),D={style:{"text-align":"left"}},F=n("code",null,"哈希表",-1),J=n("code",null,"字符串",-1),K=n("code",null,"回溯",-1),P={style:{"text-align":"left"}},Q=n("td",{style:{"text-align":"center"}},"996",-1),W={style:{"text-align":"left"}},X={href:"https://leetcode.com/problems/number-of-squareful-arrays",target:"_blank",rel:"noopener noreferrer"},Y=n("td",{style:{"text-align":"center"}},null,-1),Z={style:{"text-align":"left"}},$=n("code",null,"位运算",-1),nn=n("code",null,"数组",-1),sn=n("code",null,"哈希表",-1),tn=n("code",null,"4+",-1),an={style:{"text-align":"left"}};function en(on,pn){const o=c("ExternalLinkIcon"),p=c("font"),e=c("RouterLink");return i(),u("div",null,[n("h1",m,[_,t(),n("a",h,[t("47. 全排列 II"),s(o)])]),n("p",null,[t("🟠 "),s(p,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1}),t("  🔖  "),s(e,{to:"/leetcode/outline/tag/array.html"},{default:a(()=>[b]),_:1}),t(),s(e,{to:"/leetcode/outline/tag/backtracking.html"},{default:a(()=>[f]),_:1}),t("  🔗 "),n("a",v,[g,s(o)])]),y,r(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[w,n("td",I,[n("a",q,[t("下一个排列"),s(o)])]),n("td",C,[s(e,{to:"/leetcode/problem/0031.html"},{default:a(()=>[t("[✓]")]),_:1})]),n("td",E,[s(e,{to:"/leetcode/outline/tag/array.html"},{default:a(()=>[L]),_:1}),t(),s(e,{to:"/leetcode/outline/tag/two-pointers.html"},{default:a(()=>[N]),_:1})]),n("td",V,[s(p,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1})])]),n("tr",null,[M,n("td",j,[n("a",B,[t("全排列"),s(o)])]),n("td",O,[s(e,{to:"/leetcode/problem/0046.html"},{default:a(()=>[t("[✓]")]),_:1})]),n("td",R,[s(e,{to:"/leetcode/outline/tag/array.html"},{default:a(()=>[A]),_:1}),t(),s(e,{to:"/leetcode/outline/tag/backtracking.html"},{default:a(()=>[G]),_:1})]),n("td",H,[s(p,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1})])]),n("tr",null,[S,n("td",T,[n("a",U,[t("回文排列 II"),s(o)])]),z,n("td",D,[s(e,{to:"/leetcode/outline/tag/hash-table.html"},{default:a(()=>[F]),_:1}),t(),s(e,{to:"/leetcode/outline/tag/string.html"},{default:a(()=>[J]),_:1}),t(),s(e,{to:"/leetcode/outline/tag/backtracking.html"},{default:a(()=>[K]),_:1})]),n("td",P,[s(p,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1})])]),n("tr",null,[Q,n("td",W,[n("a",X,[t("平方数组的数目"),s(o)])]),Y,n("td",Z,[s(e,{to:"/leetcode/outline/tag/bit-manipulation.html"},{default:a(()=>[$]),_:1}),t(),s(e,{to:"/leetcode/outline/tag/array.html"},{default:a(()=>[nn]),_:1}),t(),s(e,{to:"/leetcode/outline/tag/hash-table.html"},{default:a(()=>[sn]),_:1}),t(),tn]),n("td",an,[s(p,{color:"#ff334b"},{default:a(()=>[t("Hard")]),_:1})])])])])])}const ln=l(k,[["render",en],["__file","0047.html.vue"]]);export{ln as default};
