import{_ as l,r as c,o as i,c as u,a as n,b as t,d as s,w as a,f as r,e as d}from"./app-5VBZs9Uu.js";const k={},h={id:"_290-单词规律",tabindex:"-1"},_=n("a",{class:"header-anchor",href:"#_290-单词规律","aria-hidden":"true"},"#",-1),m={href:"https://leetcode.com/problems/word-pattern",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"哈希表",-1),f=n("code",null,"字符串",-1),b={href:"https://leetcode.com/problems/word-pattern",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),y=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a <code>pattern</code> and a string <code>s</code>, find if <code>s</code> follows the same pattern.</p><p>Here <strong>follow</strong> means a full match, such that there is a bijection between a letter in <code>pattern</code> and a <strong>non-empty</strong> word in <code>s</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: pattern = &quot;abba&quot;, s = &quot;dog cat cat dog&quot;</p><p>Output: true</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: pattern = &quot;abba&quot;, s = &quot;dog cat cat fish&quot;</p><p>Output: false</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: pattern = &quot;aaaa&quot;, s = &quot;dog cat cat dog&quot;</p><p>Output: false</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= pattern.length &lt;= 300</code></li><li><code>pattern</code> contains only lower-case English letters.</li><li><code>1 &lt;= s.length &lt;= 3000</code></li><li><code>s</code> contains only lowercase English letters and spaces <code>&#39; &#39;</code>.</li><li><code>s</code> <strong>does not contain</strong> any leading or trailing spaces.</li><li>All the words in <code>s</code> are separated by a <strong>single space</strong>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一种规律 <code>pattern</code> 和一个字符串 <code>s</code> ，判断 <code>s</code> 是否遵循相同的规律。</p><p>这里的 <strong>遵循</strong> 指完全匹配，例如， <code>pattern</code> 里的每个字母和字符串 <code>s</code> 中的每个非空单词之间存在着双向连接的对应规律。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>为了判断字符串是否遵循相同的规律，可以使用两个哈希表 <code>map1</code> 和 <code>map2</code> 来分别建立字符到单词和单词到字符的映射关系。具体的思路如下：</p><ol><li><p><strong>分割字符串</strong>：首先，将输入的字符串 <code>str</code> 使用空格分割成一个单词数组。</p></li><li><p><strong>建立映射关系</strong>：对于规律字符串 <code>pattern</code> 和单词数组，同时遍历它们的每个元素。对于 <code>pattern[i]</code> 和 <code>arr[i]</code>，如果 <code>pattern[i]</code> 已经在 <code>map1</code> 中，但对应的值不等于 <code>arr[i]</code>，说明不满足规律，返回 <code>false</code>；如果 <code>pattern[i]</code> 不在 <code>map1</code> 中，但 <code>arr[i]</code> 在 <code>map2</code> 中，说明不满足规律，返回 <code>false</code>。如果都符合条件，则建立映射关系。</p></li><li><p><strong>返回结果</strong>：遍历结束后，如果没有发现不满足规律的情况，说明字符串满足相同的规律，返回 <code>true</code>。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串的长度。</li><li><strong>空间复杂度</strong>：<code>O(k)</code>，其中 <code>k</code> 是字符集的大小，通常是常数大小。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">pattern</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">wordPattern</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">pattern<span class="token punctuation">,</span> s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> arr <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">!==</span> pattern<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">let</span> map1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> map2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">in</span> pattern<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>map1<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>pattern<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			map1<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>pattern<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>map1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>pattern<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">!==</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>map2<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			map2<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> pattern<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>map2<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">!==</span> pattern<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,22),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),x=n("td",{style:{"text-align":"center"}},"205",-1),q={style:{"text-align":"left"}},j={href:"https://leetcode.com/problems/isomorphic-strings",target:"_blank",rel:"noopener noreferrer"},E={style:{"text-align":"center"}},I={style:{"text-align":"left"}},C=n("code",null,"哈希表",-1),L=n("code",null,"字符串",-1),N={style:{"text-align":"left"}},O=n("td",{style:{"text-align":"center"}},"291",-1),V={style:{"text-align":"left"}},M={href:"https://leetcode.com/problems/word-pattern-ii",target:"_blank",rel:"noopener noreferrer"},B=n("td",{style:{"text-align":"center"}},null,-1),R={style:{"text-align":"left"}},A=n("code",null,"哈希表",-1),G=n("code",null,"字符串",-1),H=n("code",null,"回溯",-1),P={style:{"text-align":"left"}},S=n("td",{style:{"text-align":"center"}},"890",-1),T={style:{"text-align":"left"}},z={href:"https://leetcode.com/problems/find-and-replace-pattern",target:"_blank",rel:"noopener noreferrer"},D=n("td",{style:{"text-align":"center"}},null,-1),F={style:{"text-align":"left"}},J=n("code",null,"数组",-1),K=n("code",null,"哈希表",-1),Q=n("code",null,"字符串",-1),U={style:{"text-align":"left"}};function W(X,Y){const o=c("ExternalLinkIcon"),p=c("font"),e=c("RouterLink");return i(),u("div",null,[n("h1",h,[_,t(),n("a",m,[t("290. 单词规律"),s(o)])]),n("p",null,[t("🟢 "),s(p,{color:"#15bd66"},{default:a(()=>[t("Easy")]),_:1}),t("  🔖  "),s(e,{to:"/leetcode-js/outline/tag/hash-table.html"},{default:a(()=>[g]),_:1}),t(),s(e,{to:"/leetcode-js/outline/tag/string.html"},{default:a(()=>[f]),_:1}),t("  🔗 "),n("a",b,[v,s(o)])]),y,r(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[x,n("td",q,[n("a",j,[t("同构字符串"),s(o)])]),n("td",E,[s(e,{to:"/leetcode-js/problem/0205.html"},{default:a(()=>[t("[✓]")]),_:1})]),n("td",I,[s(e,{to:"/leetcode-js/outline/tag/hash-table.html"},{default:a(()=>[C]),_:1}),t(),s(e,{to:"/leetcode-js/outline/tag/string.html"},{default:a(()=>[L]),_:1})]),n("td",N,[s(p,{color:"#15bd66"},{default:a(()=>[t("Easy")]),_:1})])]),n("tr",null,[O,n("td",V,[n("a",M,[t("单词规律 II"),s(o)])]),B,n("td",R,[s(e,{to:"/leetcode-js/outline/tag/hash-table.html"},{default:a(()=>[A]),_:1}),t(),s(e,{to:"/leetcode-js/outline/tag/string.html"},{default:a(()=>[G]),_:1}),t(),s(e,{to:"/leetcode-js/outline/tag/backtracking.html"},{default:a(()=>[H]),_:1})]),n("td",P,[s(p,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1})])]),n("tr",null,[S,n("td",T,[n("a",z,[t("查找和替换模式"),s(o)])]),D,n("td",F,[s(e,{to:"/leetcode-js/outline/tag/array.html"},{default:a(()=>[J]),_:1}),t(),s(e,{to:"/leetcode-js/outline/tag/hash-table.html"},{default:a(()=>[K]),_:1}),t(),s(e,{to:"/leetcode-js/outline/tag/string.html"},{default:a(()=>[Q]),_:1})]),n("td",U,[s(p,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1})])])])])])}const $=l(k,[["render",W],["__file","0290.html.vue"]]);export{$ as default};
