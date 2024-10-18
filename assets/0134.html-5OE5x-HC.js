import{_ as l,r as c,o as i,c as r,a as n,b as t,d as a,w as s,f as u,e as d}from"./app-mvY9N9Pc.js";const k={},h={id:"_134-加油站",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#_134-加油站","aria-hidden":"true"},"#",-1),g={href:"https://leetcode.com/problems/gas-station",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"贪心",-1),_=n("code",null,"数组",-1),b={href:"https://leetcode.com/problems/gas-station",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),x=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>There are <code>n</code> gas stations along a circular route, where the amount of gas at the <code>ith</code> station is <code>gas[i]</code>.</p><p>You have a car with an unlimited gas tank and it costs <code>cost[i]</code> of gas to travel from the <code>ith</code> station to its next <code>(i + 1)th</code> station. You begin the journey with an empty tank at one of the gas stations.</p><p>Given two integer arrays <code>gas</code> and <code>cost</code>, return <em>the starting gas station &#39;s index if you can travel around the circuit once in the clockwise direction, otherwise return</em> <code>-1</code>. If there exists a solution, it is <strong>guaranteed</strong> to be <strong>unique</strong></p><p><strong>Example 1:</strong></p><blockquote><p>Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]</p><p>Output: 3</p><p>Explanation:</p><p>Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4</p><p>Travel to station 4. Your tank = 4 - 1 + 5 = 8</p><p>Travel to station 0. Your tank = 8 - 2 + 1 = 7</p><p>Travel to station 1. Your tank = 7 - 3 + 2 = 6</p><p>Travel to station 2. Your tank = 6 - 4 + 3 = 5</p><p>Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.</p><p>Therefore, return 3 as the starting index.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: gas = [2,3,4], cost = [3,4,3]</p><p>Output: -1</p><p>Explanation:</p><p>You can&#39;t start at station 0 or 1, as there is not enough gas to travel to the next station.</p><p>Let&#39;s start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4</p><p>Travel to station 0. Your tank = 4 - 3 + 2 = 3</p><p>Travel to station 1. Your tank = 3 - 3 + 3 = 3</p><p>You cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.</p><p>Therefore, you can&#39;t travel around the circuit once no matter where you start.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == gas.length == cost.length</code></li><li><code>1 &lt;= n &lt;= 10^5</code></li><li><code>0 &lt;= gas[i], cost[i] &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>在一条环路上有 <code>n</code> 个加油站，其中第 <code>i</code> 个加油站有汽油 <code>gas[i]</code> 升。</p><p>你有一辆油箱容量无限的的汽车，从第 <code>i</code> 个加油站开往第 <code>i+1</code> 个加油站需要消耗汽油 <code>cost[i]</code> 升。你从其中的一个加油站出发，开始时油箱为空。</p><p>给定两个整数数组 <code>gas</code> 和 <code>cost</code> ，如果你可以按顺序绕环路行驶一周，则返回出发时加油站的编号，否则返回 <code>-1</code> 。如果存在解，则 <strong>保证</strong> 它是 <strong>唯一</strong> 的。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这个问题可以通过一次遍历来解决，遍历过程中记录总加油量与总消耗量的差值，当找到<code>总加油量 - 总消耗量</code>最小值时，也即油最不够用的地方，说明需要在此之后的加油站出发，先补足不够的油，才能保证行驶一周，所以下一个加油站就是出发加油站。</p><ol><li>初始化变量 <code>sum</code> 表示总加油量与总消耗量的差值，变量 <code>minSum</code> 表示最小的差值，变量 <code>start</code> 表示起始索引，以及变量 <code>n</code> 表示加油站的数量。</li><li>遍历每个加油站，计算总加油量与总消耗量的差值，并判断是否小于当前最小差值。如果是，则更新最小差值和起始索引。</li><li>遍历结束后，如果总差值小于 <code>0</code>，说明无法绕一周，返回 <code>-1</code>；否则，返回起始索引。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是加油站的数量。一次遍历所有加油站。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数个额外变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">gas</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">cost</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">canCompleteCircuit</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">gas<span class="token punctuation">,</span> cost</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		minSum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		n <span class="token operator">=</span> gas<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		sum <span class="token operator">+=</span> gas<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> cost<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&lt;</span> minSum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			minSum <span class="token operator">=</span> sum<span class="token punctuation">;</span>
			start <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> start <span class="token operator">==</span> n <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> start<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,22),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),w=n("td",{style:{"text-align":"center"}},"2202",-1),Y={style:{"text-align":"left"}},T={href:"https://leetcode.com/problems/maximize-the-topmost-element-after-k-moves",target:"_blank",rel:"noopener noreferrer"},C=n("td",{style:{"text-align":"center"}},null,-1),E={style:{"text-align":"left"}},q=n("code",null,"贪心",-1),L=n("code",null,"数组",-1),S={style:{"text-align":"left"}};function j(I,N){const o=c("ExternalLinkIcon"),p=c("font"),e=c("RouterLink");return i(),r("div",null,[n("h1",h,[m,t(),n("a",g,[t("134. 加油站"),a(o)])]),n("p",null,[t("🟠 "),a(p,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1}),t("  🔖  "),a(e,{to:"/leetcode/outline/tag/greedy.html"},{default:s(()=>[v]),_:1}),t(),a(e,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[_]),_:1}),t("  🔗 "),n("a",b,[f,a(o)])]),x,u(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[w,n("td",Y,[n("a",T,[t("K 次操作后最大化顶端元素"),a(o)])]),C,n("td",E,[a(e,{to:"/leetcode/outline/tag/greedy.html"},{default:s(()=>[q]),_:1}),t(),a(e,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[L]),_:1})]),n("td",S,[a(p,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1})])])])])])}const O=l(k,[["render",j],["__file","0134.html.vue"]]);export{O as default};
