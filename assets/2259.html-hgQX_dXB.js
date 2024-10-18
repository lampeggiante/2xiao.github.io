import{_ as i,r as c,o as r,c as p,a as t,b as n,d as e,w as s,f as d,e as u}from"./app-GnK0vSxb.js";const m={},h={id:"_2259-移除指定数字得到的最大结果",tabindex:"-1"},_=t("a",{class:"header-anchor",href:"#_2259-移除指定数字得到的最大结果","aria-hidden":"true"},"#",-1),g={href:"https://leetcode.com/problems/remove-digit-from-number-to-maximize-result",target:"_blank",rel:"noopener noreferrer"},k=t("code",null,"贪心",-1),f=t("code",null,"字符串",-1),b=t("code",null,"枚举",-1),v={href:"https://leetcode.com/problems/remove-digit-from-number-to-maximize-result",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a string <code>number</code> representing a <strong>positive integer</strong> and a character <code>digit</code>.</p><p>Return _the resulting string after removing <strong>exactly one occurrence</strong> of _<code>digit</code> <em>from</em><code>number</code> <em>such that the value of the resulting string in <strong>decimal</strong> form is <strong>maximized</strong></em>. The test cases are generated such that <code>digit</code> occurs at least once in <code>number</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: number = &quot;123&quot;, digit = &quot;3&quot;</p><p>Output: &quot;12&quot;</p><p>Explanation: There is only one &#39;3&#39; in &quot;123&quot;. After removing &#39;3&#39;, the result is &quot;12&quot;.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: number = &quot;1231&quot;, digit = &quot;1&quot;</p><p>Output: &quot;231&quot;</p><p>Explanation: We can remove the first &#39;1&#39; to get &quot;231&quot; or remove the second &#39;1&#39; to get &quot;123&quot;.</p><p>Since 231 &gt; 123, we return &quot;231&quot;.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: number = &quot;551&quot;, digit = &quot;5&quot;</p><p>Output: &quot;51&quot;</p><p>Explanation: We can remove either the first or second &#39;5&#39; from &quot;551&quot;.</p><p>Both result in the string &quot;51&quot;.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= number.length &lt;= 100</code></li><li><code>number</code> consists of digits from <code>&#39;1&#39;</code> to <code>&#39;9&#39;</code>.</li><li><code>digit</code> is a digit from <code>&#39;1&#39;</code> to <code>&#39;9&#39;</code>.</li><li><code>digit</code> occurs at least once in <code>number</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个表示某个正整数的字符串 <code>number</code> 和一个字符 <code>digit</code> 。</p><p>从 <code>number</code> 中 恰好 <strong>移除</strong> 一个 <strong>等于</strong> <code>digit</code> 的字符后，找出并返回按 <strong>十进制</strong> 表示 <strong>最大</strong> 的结果字符串。生成的测试用例满足 <code>digit</code> 在 <code>number</code> 中出现至少一次。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>用一个变量 <code>max</code> 来记录最大返回值；</li><li>遍历字符串，找出移除一个 <code>digit</code> 字符后的最大返回值；</li><li>需要注意 <code>number</code> 可能是特别大的整数，因此 <code>max</code> 要用 <code>BigInt</code> 来表示，且 <code>BigInt</code> 实例不能用于 <code>Math</code> 对象中的方法，也不能和任何 <code>Number</code> 实例混合运算；</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">number</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>character<span class="token punctuation">}</span></span> <span class="token parameter">digit</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">removeDigit</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">number<span class="token punctuation">,</span> digit</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> max <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		n <span class="token operator">=</span> number<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>number<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> digit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> num <span class="token operator">=</span> number<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">+</span> number<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>max <span class="token operator">&lt;</span> <span class="token function">BigInt</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				max <span class="token operator">=</span> <span class="token function">BigInt</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> max <span class="token operator">+</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,19),q=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),w=t("td",{style:{"text-align":"center"}},"402",-1),E={style:{"text-align":"left"}},I={href:"https://leetcode.com/problems/remove-k-digits",target:"_blank",rel:"noopener noreferrer"},B=t("td",{style:{"text-align":"center"}},null,-1),N={style:{"text-align":"left"}},C=t("code",null,"栈",-1),L=t("code",null,"贪心",-1),V=t("code",null,"字符串",-1),j=t("code",null,"1+",-1),z={style:{"text-align":"left"}},M=t("td",{style:{"text-align":"center"}},"1119",-1),O={style:{"text-align":"left"}},R={href:"https://leetcode.com/problems/remove-vowels-from-a-string",target:"_blank",rel:"noopener noreferrer"},T=t("td",{style:{"text-align":"center"}},null,-1),S={style:{"text-align":"left"}},W=t("code",null,"字符串",-1),A={style:{"text-align":"left"}},D=t("td",{style:{"text-align":"center"}},"1796",-1),K={style:{"text-align":"left"}},Y={href:"https://leetcode.com/problems/second-largest-digit-in-a-string",target:"_blank",rel:"noopener noreferrer"},F=t("td",{style:{"text-align":"center"}},null,-1),G={style:{"text-align":"left"}},H=t("code",null,"哈希表",-1),J=t("code",null,"字符串",-1),P={style:{"text-align":"left"}},Q=t("td",{style:{"text-align":"center"}},"2844",-1),U={style:{"text-align":"left"}},X={href:"https://leetcode.com/problems/minimum-operations-to-make-a-special-number",target:"_blank",rel:"noopener noreferrer"},Z=t("td",{style:{"text-align":"center"}},null,-1),$={style:{"text-align":"left"}},tt=t("code",null,"贪心",-1),nt=t("code",null,"数学",-1),et=t("code",null,"字符串",-1),st=t("code",null,"1+",-1),ot={style:{"text-align":"left"}};function at(lt,ct){const a=c("ExternalLinkIcon"),l=c("font"),o=c("RouterLink");return r(),p("div",null,[t("h1",h,[_,n(),t("a",g,[n("2259. 移除指定数字得到的最大结果"),e(a)])]),t("p",null,[n("🟢 "),e(l,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),e(o,{to:"/leetcode/outline/tag/greedy.html"},{default:s(()=>[k]),_:1}),n(),e(o,{to:"/leetcode/outline/tag/string.html"},{default:s(()=>[f]),_:1}),n(),e(o,{to:"/leetcode/outline/tag/enumeration.html"},{default:s(()=>[b]),_:1}),n("  🔗 "),t("a",v,[x,e(a)])]),y,d(" prettier-ignore "),t("table",null,[q,t("tbody",null,[t("tr",null,[w,t("td",E,[t("a",I,[n("移掉 K 位数字"),e(a)])]),B,t("td",N,[e(o,{to:"/leetcode/outline/tag/stack.html"},{default:s(()=>[C]),_:1}),n(),e(o,{to:"/leetcode/outline/tag/greedy.html"},{default:s(()=>[L]),_:1}),n(),e(o,{to:"/leetcode/outline/tag/string.html"},{default:s(()=>[V]),_:1}),n(),j]),t("td",z,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[M,t("td",O,[t("a",R,[n("删去字符串中的元音"),e(a)])]),T,t("td",S,[e(o,{to:"/leetcode/outline/tag/string.html"},{default:s(()=>[W]),_:1})]),t("td",A,[e(l,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1})])]),t("tr",null,[D,t("td",K,[t("a",Y,[n("字符串中第二大的数字"),e(a)])]),F,t("td",G,[e(o,{to:"/leetcode/outline/tag/hash-table.html"},{default:s(()=>[H]),_:1}),n(),e(o,{to:"/leetcode/outline/tag/string.html"},{default:s(()=>[J]),_:1})]),t("td",P,[e(l,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1})])]),t("tr",null,[Q,t("td",U,[t("a",X,[n("生成特殊数字的最少操作"),e(a)])]),Z,t("td",$,[e(o,{to:"/leetcode/outline/tag/greedy.html"},{default:s(()=>[tt]),_:1}),n(),e(o,{to:"/leetcode/outline/tag/math.html"},{default:s(()=>[nt]),_:1}),n(),e(o,{to:"/leetcode/outline/tag/string.html"},{default:s(()=>[et]),_:1}),n(),st]),t("td",ot,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])])])])])}const rt=i(m,[["render",at],["__file","2259.html.vue"]]);export{rt as default};
