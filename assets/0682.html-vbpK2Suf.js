import{_ as l,r as p,o as r,c as i,a as n,b as t,d as s,w as e,f as u,e as d}from"./app-5VBZs9Uu.js";const k={},h={id:"_682-棒球比赛",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#_682-棒球比赛","aria-hidden":"true"},"#",-1),q={href:"https://leetcode.com/problems/baseball-game",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"栈",-1),b=n("code",null,"数组",-1),_=n("code",null,"模拟",-1),g={href:"https://leetcode.com/problems/baseball-game",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),w=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.</p><p>You are given a list of strings <code>operations</code>, where <code>operations[i]</code> is the <code>ith</code> operation you must apply to the record and is one of the following:</p><ul><li>An integer <code>x</code>: Record a new score of <code>x</code>.</li><li><code>&#39;+&#39;</code>: Record a new score that is the sum of the previous two scores.</li><li><code>&#39;D&#39;</code>: Record a new score that is the double of the previous score.</li><li><code>&#39;C&#39;</code>: Invalidate the previous score, removing it from the record.</li></ul><p>Return <em>the sum of all the scores on the record after applying all the operations</em>.</p><p>The test cases are generated such that the answer and all intermediate calculations fit in a <strong>32-bit</strong> integer and that all operations are valid.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: ops = [&quot;5&quot;,&quot;2&quot;,&quot;C&quot;,&quot;D&quot;,&quot;+&quot;]</p><p>Output: 30</p><p>Explanation:</p><p>&quot;5&quot; - Add 5 to the record, record is now [5].</p><p>&quot;2&quot; - Add 2 to the record, record is now [5, 2].</p><p>&quot;C&quot; - Invalidate and remove the previous score, record is now [5].</p><p>&quot;D&quot; - Add 2 * 5 = 10 to the record, record is now [5, 10].</p><p>&quot;+&quot; - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].</p><p>The total sum is 5 + 10 + 15 = 30.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: ops = [&quot;5&quot;,&quot;-2&quot;,&quot;4&quot;,&quot;C&quot;,&quot;D&quot;,&quot;9&quot;,&quot;+&quot;,&quot;+&quot;]</p><p>Output: 27</p><p>Explanation:</p><p>&quot;5&quot; - Add 5 to the record, record is now [5].</p><p>&quot;-2&quot; - Add -2 to the record, record is now [5, -2].</p><p>&quot;4&quot; - Add 4 to the record, record is now [5, -2, 4].</p><p>&quot;C&quot; - Invalidate and remove the previous score, record is now [5, -2].</p><p>&quot;D&quot; - Add 2 * -2 = -4 to the record, record is now [5, -2, -4].</p><p>&quot;9&quot; - Add 9 to the record, record is now [5, -2, -4, 9].</p><p>&quot;+&quot; - Add -4 + 9 = 5 to the record, record is now [5, -2, -4, 9, 5].</p><p>&quot;+&quot; - Add 9 + 5 = 14 to the record, record is now [5, -2, -4, 9, 5, 14].</p><p>The total sum is 5 + -2 + -4 + 9 + 5 + 14 = 27.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: ops = [&quot;1&quot;,&quot;C&quot;]</p><p>Output: 0</p><p>Explanation:</p><p>&quot;1&quot; - Add 1 to the record, record is now [1].</p><p>&quot;C&quot; - Invalidate and remove the previous score, record is now [].</p><p>Since the record is empty, the total sum is 0.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= operations.length &lt;= 1000</code></li><li><code>operations[i]</code> is <code>&quot;C&quot;</code>, <code>&quot;D&quot;</code>, <code>&quot;+&quot;</code>, or a string representing an integer in the range <code>[-3 * 10^4, 3 * 10^4]</code>.</li><li>For operation <code>&quot;+&quot;</code>, there will always be at least two previous scores on the record.</li><li>For operations <code>&quot;C&quot;</code> and <code>&quot;D&quot;</code>, there will always be at least one previous score on the record.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>这道题是模拟题，给一串数字和操作符。出现数字就直接累加，出现 <code>&quot;C&quot;</code> 就代表栈推出一个元素，相应的总和要减去栈顶的元素。出现 <code>&quot;D&quot;</code> 就代表把前一个元素乘以 <code>2</code>，就得到当前的元素值，再累加。出现 <code>&quot;+&quot;</code> 就代表把前 <code>2</code> 个值求和，得到当前元素的值，再累积。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题用栈模拟即可。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">operations</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">calPoints</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">operations</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span>item <span class="token keyword">of</span> operations<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> top <span class="token operator">=</span> stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">switch</span> <span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">case</span> <span class="token string">&#39;+&#39;</span><span class="token operator">:</span>
				stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>stack<span class="token punctuation">[</span>top<span class="token punctuation">]</span> <span class="token operator">+</span> stack<span class="token punctuation">[</span>top <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">break</span><span class="token punctuation">;</span>
			<span class="token keyword">case</span> <span class="token string">&#39;C&#39;</span><span class="token operator">:</span>
				stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">break</span><span class="token punctuation">;</span>
			<span class="token keyword">case</span> <span class="token string">&#39;D&#39;</span><span class="token operator">:</span>
				stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>stack<span class="token punctuation">[</span>top<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">break</span><span class="token punctuation">;</span>
			<span class="token keyword">default</span><span class="token operator">:</span>
				stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> stack<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">+</span> b<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,21),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),x=n("td",{style:{"text-align":"center"}},"1598",-1),C={style:{"text-align":"left"}},A={href:"https://leetcode.com/problems/crawler-log-folder",target:"_blank",rel:"noopener noreferrer"},E=n("td",{style:{"text-align":"center"}},null,-1),j={style:{"text-align":"left"}},D=n("code",null,"栈",-1),I=n("code",null,"数组",-1),N=n("code",null,"字符串",-1),R={style:{"text-align":"left"}};function L(V,T){const o=p("ExternalLinkIcon"),c=p("font"),a=p("RouterLink");return r(),i("div",null,[n("h1",h,[m,t(),n("a",q,[t("682. 棒球比赛"),s(o)])]),n("p",null,[t("🟢 "),s(c,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1}),t("  🔖  "),s(a,{to:"/leetcode-js/outline/tag/stack.html"},{default:e(()=>[v]),_:1}),t(),s(a,{to:"/leetcode-js/outline/tag/array.html"},{default:e(()=>[b]),_:1}),t(),s(a,{to:"/leetcode-js/outline/tag/simulation.html"},{default:e(()=>[_]),_:1}),t("  🔗 "),n("a",g,[f,s(o)])]),w,u(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[x,n("td",C,[n("a",A,[t("文件夹操作日志搜集器"),s(o)])]),E,n("td",j,[s(a,{to:"/leetcode-js/outline/tag/stack.html"},{default:e(()=>[D]),_:1}),t(),s(a,{to:"/leetcode-js/outline/tag/array.html"},{default:e(()=>[I]),_:1}),t(),s(a,{to:"/leetcode-js/outline/tag/string.html"},{default:e(()=>[N]),_:1})]),n("td",R,[s(c,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1})])])])])])}const O=l(k,[["render",L],["__file","0682.html.vue"]]);export{O as default};
