import{_ as p,r as c,o as i,c as r,a as n,b as t,d as s,w as e,f as d,e as u}from"./app-GnK0vSxb.js";const k={},m={id:"_43-字符串相乘",tabindex:"-1"},_=n("a",{class:"header-anchor",href:"#_43-字符串相乘","aria-hidden":"true"},"#",-1),h={href:"https://leetcode.com/problems/multiply-strings",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"数学",-1),f=n("code",null,"字符串",-1),b=n("code",null,"模拟",-1),v={href:"https://leetcode.com/problems/multiply-strings",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two non-negative integers <code>num1</code> and <code>num2</code> represented as strings, return the product of <code>num1</code> and <code>num2</code>, also represented as a string.</p><p><strong>Note:</strong> You must not use any built-in BigInteger library or convert the inputs to integer directly.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: num1 = &quot;2&quot;, num2 = &quot;3&quot;</p><p>Output: &quot;6&quot;</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: num1 = &quot;123&quot;, num2 = &quot;456&quot;</p><p>Output: &quot;56088&quot;</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= num1.length, num2.length &lt;= 200</code></li><li><code>num1</code> and <code>num2</code> consist of digits only.</li><li>Both <code>num1</code> and <code>num2</code> do not contain any leading zero, except the number <code>0</code> itself.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定两个以字符串形式表示的非负整数 <code>num1</code> 和 <code>num2</code>，返回 <code>num1</code> 和 <code>num2</code> 的乘积，它们的乘积也表示为字符串形式。</p><p>注意：不能使用任何内置的 <code>BigInteger</code> 库或直接将输入转换为整数。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>需要逐步模拟乘法过程，确保处理大数字时不会溢出。</p><ul><li>创建一个大小为 <code>m + n</code> 的数组 <code>res</code>，其中 <code>m</code> 和 <code>n</code> 分别是两个输入字符串的长度。这个大小足够存储乘法结果的最大可能位数。</li><li>从两个字符串的末尾开始反向遍历（从最低位到最高位）。对于每一对数字，将它们转换为整数进行相乘，并将结果放置在 <code>res</code> 数组的相应位置。</li><li>在将结果放入 <code>res</code> 数组时，需跟踪进位。由于乘积可能超过 <code>10</code>，因此需要计算进位并相应地调整 <code>res</code> 数组中的当前位。</li><li>填充完 <code>res</code> 数组后，将其转换为字符串。在此过程中，跳过前导零，构建最终的乘积字符串。</li><li>处理边界情况，若字符串为空，乘积应直接返回 <code>&quot;0&quot;</code>。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m * n)</code>，其中 <code>m</code> 和 <code>n</code> 分别是两个字符串的长度，因为需要遍历每一个数字。</li><li><strong>空间复杂度</strong>：<code>O(m + n)</code>，用于存储中间结果的 <code>res</code> 数组。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">num1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">num2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">multiply</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> m <span class="token operator">=</span> num1<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
		n <span class="token operator">=</span> num2<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>m <span class="token operator">+</span> n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 模拟乘法过程</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> m <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> product <span class="token operator">=</span> <span class="token punctuation">(</span>num1<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>num2<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">const</span> sum <span class="token operator">=</span> product <span class="token operator">+</span> res<span class="token punctuation">[</span>i <span class="token operator">+</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

			res<span class="token punctuation">[</span>i <span class="token operator">+</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> sum <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">;</span>
			res<span class="token punctuation">[</span>i <span class="token operator">+</span> j<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token punctuation">(</span>sum <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 跳过前导零</span>
	<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> res<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> res<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		i<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">const</span> str <span class="token operator">=</span> res<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 处理边界条件</span>
	<span class="token keyword">return</span> str<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token string">&#39;0&#39;</span> <span class="token operator">:</span> str<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,20),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),q=n("td",{style:{"text-align":"center"}},"2",-1),j={style:{"text-align":"left"}},E={href:"https://leetcode.com/problems/add-two-numbers",target:"_blank",rel:"noopener noreferrer"},B={style:{"text-align":"center"}},I={style:{"text-align":"left"}},N=n("code",null,"递归",-1),C=n("code",null,"链表",-1),L=n("code",null,"数学",-1),V={style:{"text-align":"left"}},O=n("td",{style:{"text-align":"center"}},"66",-1),M={style:{"text-align":"left"}},R={href:"https://leetcode.com/problems/plus-one",target:"_blank",rel:"noopener noreferrer"},z={style:{"text-align":"center"}},A={style:{"text-align":"left"}},G=n("code",null,"数组",-1),S=n("code",null,"数学",-1),T={style:{"text-align":"left"}},Y=n("td",{style:{"text-align":"center"}},"67",-1),D={style:{"text-align":"left"}},F={href:"https://leetcode.com/problems/add-binary",target:"_blank",rel:"noopener noreferrer"},H={style:{"text-align":"center"}},J={style:{"text-align":"left"}},K=n("code",null,"位运算",-1),P=n("code",null,"数学",-1),Q=n("code",null,"字符串",-1),U=n("code",null,"1+",-1),W={style:{"text-align":"left"}},X=n("td",{style:{"text-align":"center"}},"415",-1),Z={style:{"text-align":"left"}},$={href:"https://leetcode.com/problems/add-strings",target:"_blank",rel:"noopener noreferrer"},nn={style:{"text-align":"center"}},sn={style:{"text-align":"left"}},tn=n("code",null,"数学",-1),en=n("code",null,"字符串",-1),an=n("code",null,"模拟",-1),on={style:{"text-align":"left"}},ln=n("td",{style:{"text-align":"center"}},"2288",-1),cn={style:{"text-align":"left"}},pn={href:"https://leetcode.com/problems/apply-discount-to-prices",target:"_blank",rel:"noopener noreferrer"},rn=n("td",{style:{"text-align":"center"}},null,-1),dn={style:{"text-align":"left"}},un=n("code",null,"字符串",-1),kn={style:{"text-align":"left"}};function mn(_n,hn){const o=c("ExternalLinkIcon"),l=c("font"),a=c("RouterLink");return i(),r("div",null,[n("h1",m,[_,t(),n("a",h,[t("43. 字符串相乘"),s(o)])]),n("p",null,[t("🟠 "),s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1}),t("  🔖  "),s(a,{to:"/leetcode/outline/tag/math.html"},{default:e(()=>[g]),_:1}),t(),s(a,{to:"/leetcode/outline/tag/string.html"},{default:e(()=>[f]),_:1}),t(),s(a,{to:"/leetcode/outline/tag/simulation.html"},{default:e(()=>[b]),_:1}),t("  🔗 "),n("a",v,[y,s(o)])]),x,d(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[q,n("td",j,[n("a",E,[t("两数相加"),s(o)])]),n("td",B,[s(a,{to:"/leetcode/problem/0002.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",I,[s(a,{to:"/leetcode/outline/tag/recursion.html"},{default:e(()=>[N]),_:1}),t(),s(a,{to:"/leetcode/outline/tag/linked-list.html"},{default:e(()=>[C]),_:1}),t(),s(a,{to:"/leetcode/outline/tag/math.html"},{default:e(()=>[L]),_:1})]),n("td",V,[s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1})])]),n("tr",null,[O,n("td",M,[n("a",R,[t("加一"),s(o)])]),n("td",z,[s(a,{to:"/leetcode/problem/0066.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",A,[s(a,{to:"/leetcode/outline/tag/array.html"},{default:e(()=>[G]),_:1}),t(),s(a,{to:"/leetcode/outline/tag/math.html"},{default:e(()=>[S]),_:1})]),n("td",T,[s(l,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1})])]),n("tr",null,[Y,n("td",D,[n("a",F,[t("二进制求和"),s(o)])]),n("td",H,[s(a,{to:"/leetcode/problem/0067.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",J,[s(a,{to:"/leetcode/outline/tag/bit-manipulation.html"},{default:e(()=>[K]),_:1}),t(),s(a,{to:"/leetcode/outline/tag/math.html"},{default:e(()=>[P]),_:1}),t(),s(a,{to:"/leetcode/outline/tag/string.html"},{default:e(()=>[Q]),_:1}),t(),U]),n("td",W,[s(l,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1})])]),n("tr",null,[X,n("td",Z,[n("a",$,[t("字符串相加"),s(o)])]),n("td",nn,[s(a,{to:"/leetcode/problem/0415.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",sn,[s(a,{to:"/leetcode/outline/tag/math.html"},{default:e(()=>[tn]),_:1}),t(),s(a,{to:"/leetcode/outline/tag/string.html"},{default:e(()=>[en]),_:1}),t(),s(a,{to:"/leetcode/outline/tag/simulation.html"},{default:e(()=>[an]),_:1})]),n("td",on,[s(l,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1})])]),n("tr",null,[ln,n("td",cn,[n("a",pn,[t("价格减免"),s(o)])]),rn,n("td",dn,[s(a,{to:"/leetcode/outline/tag/string.html"},{default:e(()=>[un]),_:1})]),n("td",kn,[s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1})])])])])])}const fn=p(k,[["render",mn],["__file","0043.html.vue"]]);export{fn as default};
