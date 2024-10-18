import{_ as c,r as l,o as i,c as r,a as n,b as t,d as s,w as a,f as u,e as d}from"./app-GnK0vSxb.js";const k={},_={id:"_20-有效的括号",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#_20-有效的括号","aria-hidden":"true"},"#",-1),m={href:"https://leetcode.com/problems/valid-parentheses",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"栈",-1),f=n("code",null,"字符串",-1),v={href:"https://leetcode.com/problems/valid-parentheses",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"LeetCode",-1),y=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>s</code> containing just the characters <code>&#39;(&#39;</code>, <code>&#39;)&#39;</code>, <code>&#39;{&#39;</code>, <code>&#39;}&#39;</code>, <code>&#39;[&#39;</code> and <code>&#39;]&#39;</code>, determine if the input string is valid.</p><p>An input string is valid if:</p><ol><li>Open brackets must be closed by the same type of brackets.</li><li>Open brackets must be closed in the correct order.</li><li>Every close bracket has a corresponding open bracket of the same type.</li></ol><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;()&quot;</p><p>Output: true</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;()[]{}&quot;</p><p>Output: true</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;(]&quot;</p><p>Output: false</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 10^4</code></li><li><code>s</code> consists of parentheses only <code>&#39;()[]{}&#39;</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>括号匹配问题。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>用栈来保存未匹配的左括号，从左到右依次扫描字符串。当扫描到左括号时，则将其压入栈中；</p><p>当扫描到右括号时，从栈顶取出一个左括号。如果能够匹配，比如“<code>(</code>”跟“<code>)</code>”匹配，“<code>[</code>”跟“<code>]</code>”匹配，“<code>{</code>”跟“<code>}</code>”匹配，则继续扫描剩下的字符串。</p><p>如果扫描的过程中，遇到不能配对的右括号，或者栈中没有数据，则说明为非法格式。</p><p>当所有的括号都扫描完成之后，如果栈为空，则说明字符串为合法格式；否则，说明有未匹配的左括号，为非法格式。</p><p>需要注意，空字符串是满足括号匹配的，即输出 <code>true</code>。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isValid</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> len <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> v <span class="token operator">=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>v <span class="token operator">===</span> <span class="token string">&#39;{&#39;</span> <span class="token operator">||</span> v <span class="token operator">===</span> <span class="token string">&#39;(&#39;</span> <span class="token operator">||</span> v <span class="token operator">===</span> <span class="token string">&#39;[&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>
			<span class="token punctuation">(</span>v <span class="token operator">===</span> <span class="token string">&#39;}&#39;</span> <span class="token operator">&amp;&amp;</span> stack<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;{&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span>
			<span class="token punctuation">(</span>v <span class="token operator">===</span> <span class="token string">&#39;)&#39;</span> <span class="token operator">&amp;&amp;</span> stack<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;(&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span>
			<span class="token punctuation">(</span>v <span class="token operator">===</span> <span class="token string">&#39;]&#39;</span> <span class="token operator">&amp;&amp;</span> stack<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;[&#39;</span><span class="token punctuation">)</span>
		<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> stack<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 简化写法</span>
<span class="token keyword">var</span> <span class="token function-variable function">isValid</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		obj <span class="token operator">=</span> <span class="token punctuation">{</span>
			<span class="token string-property property">&#39;)&#39;</span><span class="token operator">:</span> <span class="token string">&#39;(&#39;</span><span class="token punctuation">,</span>
			<span class="token string-property property">&#39;]&#39;</span><span class="token operator">:</span> <span class="token string">&#39;[&#39;</span><span class="token punctuation">,</span>
			<span class="token string-property property">&#39;}&#39;</span><span class="token operator">:</span> <span class="token string">&#39;{&#39;</span>
		<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&#39;[{(&#39;</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">[</span>item<span class="token punctuation">]</span> <span class="token operator">!=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> stack<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,23),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),w=n("td",{style:{"text-align":"center"}},"22",-1),q={style:{"text-align":"left"}},E={href:"https://leetcode.com/problems/generate-parentheses",target:"_blank",rel:"noopener noreferrer"},V={style:{"text-align":"center"}},j={style:{"text-align":"left"}},O=n("code",null,"字符串",-1),C=n("code",null,"动态规划",-1),I=n("code",null,"回溯",-1),L={style:{"text-align":"left"}},N=n("td",{style:{"text-align":"center"}},"32",-1),M={style:{"text-align":"left"}},B={href:"https://leetcode.com/problems/longest-valid-parentheses",target:"_blank",rel:"noopener noreferrer"},H={style:{"text-align":"center"}},R={style:{"text-align":"left"}},A=n("code",null,"栈",-1),G=n("code",null,"字符串",-1),S=n("code",null,"动态规划",-1),T={style:{"text-align":"left"}},z=n("td",{style:{"text-align":"center"}},"301",-1),D={style:{"text-align":"left"}},F={href:"https://leetcode.com/problems/remove-invalid-parentheses",target:"_blank",rel:"noopener noreferrer"},J=n("td",{style:{"text-align":"center"}},null,-1),K={style:{"text-align":"left"}},P=n("code",null,"广度优先搜索",-1),Q=n("code",null,"字符串",-1),U=n("code",null,"回溯",-1),W={style:{"text-align":"left"}},X=n("td",{style:{"text-align":"center"}},"1003",-1),Y={style:{"text-align":"left"}},Z={href:"https://leetcode.com/problems/check-if-word-is-valid-after-substitutions",target:"_blank",rel:"noopener noreferrer"},$=n("td",{style:{"text-align":"center"}},null,-1),nn={style:{"text-align":"left"}},sn=n("code",null,"栈",-1),tn=n("code",null,"字符串",-1),an={style:{"text-align":"left"}},en=n("td",{style:{"text-align":"center"}},"2116",-1),on={style:{"text-align":"left"}},pn={href:"https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid",target:"_blank",rel:"noopener noreferrer"},ln=n("td",{style:{"text-align":"center"}},null,-1),cn={style:{"text-align":"left"}},rn=n("code",null,"栈",-1),un=n("code",null,"贪心",-1),dn=n("code",null,"字符串",-1),kn={style:{"text-align":"left"}},_n=n("td",{style:{"text-align":"center"}},"2337",-1),hn={style:{"text-align":"left"}},mn={href:"https://leetcode.com/problems/move-pieces-to-obtain-a-string",target:"_blank",rel:"noopener noreferrer"},gn=n("td",{style:{"text-align":"center"}},null,-1),fn={style:{"text-align":"left"}},vn=n("code",null,"双指针",-1),bn=n("code",null,"字符串",-1),yn={style:{"text-align":"left"}};function xn(wn,qn){const o=l("ExternalLinkIcon"),p=l("font"),e=l("RouterLink");return i(),r("div",null,[n("h1",_,[h,t(),n("a",m,[t("20. 有效的括号"),s(o)])]),n("p",null,[t("🟢 "),s(p,{color:"#15bd66"},{default:a(()=>[t("Easy")]),_:1}),t("  🔖  "),s(e,{to:"/leetcode/outline/tag/stack.html"},{default:a(()=>[g]),_:1}),t(),s(e,{to:"/leetcode/outline/tag/string.html"},{default:a(()=>[f]),_:1}),t("  🔗 "),n("a",v,[b,s(o)])]),y,u(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[w,n("td",q,[n("a",E,[t("括号生成"),s(o)])]),n("td",V,[s(e,{to:"/leetcode/problem/0022.html"},{default:a(()=>[t("[✓]")]),_:1})]),n("td",j,[s(e,{to:"/leetcode/outline/tag/string.html"},{default:a(()=>[O]),_:1}),t(),s(e,{to:"/leetcode/outline/tag/dynamic-programming.html"},{default:a(()=>[C]),_:1}),t(),s(e,{to:"/leetcode/outline/tag/backtracking.html"},{default:a(()=>[I]),_:1})]),n("td",L,[s(p,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1})])]),n("tr",null,[N,n("td",M,[n("a",B,[t("最长有效括号"),s(o)])]),n("td",H,[s(e,{to:"/leetcode/problem/0032.html"},{default:a(()=>[t("[✓]")]),_:1})]),n("td",R,[s(e,{to:"/leetcode/outline/tag/stack.html"},{default:a(()=>[A]),_:1}),t(),s(e,{to:"/leetcode/outline/tag/string.html"},{default:a(()=>[G]),_:1}),t(),s(e,{to:"/leetcode/outline/tag/dynamic-programming.html"},{default:a(()=>[S]),_:1})]),n("td",T,[s(p,{color:"#ff334b"},{default:a(()=>[t("Hard")]),_:1})])]),n("tr",null,[z,n("td",D,[n("a",F,[t("删除无效的括号"),s(o)])]),J,n("td",K,[s(e,{to:"/leetcode/outline/tag/breadth-first-search.html"},{default:a(()=>[P]),_:1}),t(),s(e,{to:"/leetcode/outline/tag/string.html"},{default:a(()=>[Q]),_:1}),t(),s(e,{to:"/leetcode/outline/tag/backtracking.html"},{default:a(()=>[U]),_:1})]),n("td",W,[s(p,{color:"#ff334b"},{default:a(()=>[t("Hard")]),_:1})])]),n("tr",null,[X,n("td",Y,[n("a",Z,[t("检查替换后的词是否有效"),s(o)])]),$,n("td",nn,[s(e,{to:"/leetcode/outline/tag/stack.html"},{default:a(()=>[sn]),_:1}),t(),s(e,{to:"/leetcode/outline/tag/string.html"},{default:a(()=>[tn]),_:1})]),n("td",an,[s(p,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1})])]),n("tr",null,[en,n("td",on,[n("a",pn,[t("判断一个括号字符串是否有效"),s(o)])]),ln,n("td",cn,[s(e,{to:"/leetcode/outline/tag/stack.html"},{default:a(()=>[rn]),_:1}),t(),s(e,{to:"/leetcode/outline/tag/greedy.html"},{default:a(()=>[un]),_:1}),t(),s(e,{to:"/leetcode/outline/tag/string.html"},{default:a(()=>[dn]),_:1})]),n("td",kn,[s(p,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1})])]),n("tr",null,[_n,n("td",hn,[n("a",mn,[t("移动片段得到字符串"),s(o)])]),gn,n("td",fn,[s(e,{to:"/leetcode/outline/tag/two-pointers.html"},{default:a(()=>[vn]),_:1}),t(),s(e,{to:"/leetcode/outline/tag/string.html"},{default:a(()=>[bn]),_:1})]),n("td",yn,[s(p,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1})])])])])])}const Vn=c(k,[["render",xn],["__file","0020.html.vue"]]);export{Vn as default};
