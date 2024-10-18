import{_ as d,r as c,o as i,c as r,a as e,b as n,d as t,w as o,f as p,e as u}from"./app-mvY9N9Pc.js";const g={},h={id:"_1963-使字符串平衡的最小交换次数",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#_1963-使字符串平衡的最小交换次数","aria-hidden":"true"},"#",-1),_={href:"https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced",target:"_blank",rel:"noopener noreferrer"},k=e("code",null,"栈",-1),b=e("code",null,"贪心",-1),f=e("code",null,"双指针",-1),v=e("code",null,"字符串",-1),x={href:"https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced",target:"_blank",rel:"noopener noreferrer"},y=e("code",null,"LeetCode",-1),q=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a <strong>0-indexed</strong> string <code>s</code> of <strong>even</strong> length <code>n</code>. The string consists of <strong>exactly</strong> <code>n / 2</code> opening brackets <code>&#39;[&#39;</code> and <code>n / 2</code> closing brackets <code>&#39;]&#39;</code>.</p><p>A string is called <strong>balanced</strong> if and only if:</p><ul><li>It is the empty string, or</li><li>It can be written as <code>AB</code>, where both <code>A</code> and <code>B</code> are <strong>balanced</strong> strings, or</li><li>It can be written as <code>[C]</code>, where <code>C</code> is a <strong>balanced</strong> string.</li></ul><p>You may swap the brackets at <strong>any</strong> two indices <strong>any</strong> number of times.</p><p>Return <em>the<strong>minimum</strong> number of swaps to make</em> <code>s</code> <em><strong>balanced</strong></em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = <code>&quot;][][&quot;</code></p><p>Output: 1</p><p>Explanation: You can make the string balanced by swapping index 0 with index 3.</p><p>The resulting string is <code>&quot;[[]]&quot;</code>.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = <code>&quot;]]][[[&quot;</code></p><p>Output: 2</p><p>Explanation: You can do the following to make the string balanced:</p><ul><li>Swap index 0 with index 4. s = <code>&quot;[]][][&quot;</code>.</li><li>Swap index 1 with index 5. s = <code>&quot;[[][]]&quot;</code>.</li></ul><p>The resulting string is<code> &quot;[[][]]&quot;</code>.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = <code>&quot;[]&quot;</code></p><p>Output: 0</p><p>Explanation: The string is already balanced.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == s.length</code></li><li><code>2 &lt;= n &lt;= 10^6</code></li><li><code>n</code> is even.</li><li><code>s[i]</code> is either <code>&#39;[&#39; </code>or <code>&#39;]&#39;</code>.</li><li>The number of opening brackets <code>&#39;[&#39;</code> equals <code>n / 2</code>, and the number of closing brackets <code>&#39;]&#39;</code> equals <code>n / 2</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串 <code>s</code> ，<strong>下标从 0 开始</strong> ，且长度为偶数 <code>n</code> 。字符串 <strong>恰好</strong> 由 <code>n / 2</code> 个开括号 <code>&#39;[&#39;</code> 和 <code>n / 2</code> 个闭括号 <code>&#39;]&#39;</code> 组成。</p><p>只有能满足下述所有条件的字符串才能称为 <strong>平衡字符串</strong> ：</p><ul><li>字符串是一个空字符串，或者</li><li>字符串可以记作 <code>AB</code> ，其中 <code>A</code> 和 <code>B</code> 都是 <strong>平衡字符串</strong> ，或者</li><li>字符串可以写成 <code>[C]</code> ，其中 <code>C</code> 是一个 <strong>平衡字符串</strong> 。</li></ul><p>你可以交换 <strong>任意</strong> 两个下标所对应的括号 <strong>任意</strong> 次数。</p><p>返回使 <code>s</code> 变成 <strong>平衡字符串</strong> 所需要的 <strong>最小</strong> 交换次数。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = <code>&quot;][][&quot;</code></p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> 交换下标 0 和下标 3 对应的括号，可以使字符串变成平衡字符串。</p><p>最终字符串变成 <code>&quot;[[]]&quot;</code> 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = <code>&quot;]]][[[&quot;</code></p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 执行下述操作可以使字符串变成平衡字符串：</p><ul><li>交换下标 0 和下标 4 对应的括号，s = <code>&quot;[]][][&quot;</code> 。</li><li>交换下标 1 和下标 5 对应的括号，s = <code>&quot;[[][]]&quot;</code> 。</li></ul><p>最终字符串变成 <code>&quot;[[][]]&quot;</code> 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> s = <code>&quot;[]&quot;</code></p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong> 这个字符串已经是平衡字符串。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>n == s.length</code></li><li><code>2 &lt;= n &lt;= 10^6</code></li><li><code>n</code> 为偶数</li><li><code>s[i]</code> 为<code>&#39;[&#39;</code> 或 <code>&#39;]&#39;</code></li><li>开括号 <code>&#39;[&#39;</code> 的数目为 <code>n / 2</code> ，闭括号 <code>&#39;]&#39;</code> 的数目也是 <code>n / 2</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>当遍历字符串时，如果发现右括号 <code>]</code> 的数量比左括号 <code>[</code> 的数量多，这表示当前字符串已经不平衡了。此时，需要进行交换来修复这种不平衡。</p><p>在遍历字符串的过程中，可以维护一个变量 <code>imbalance</code> 来跟踪当前不平衡的右括号数量。</p><p>每次遇到不平衡的地方时，说明遇到了多余的右括，需要一个之后的左括号与右括号交换来减少 <code>imbalance</code>。每次交换可以平衡一对括号，因此总共需要的交换次数（即 <code>imbalance</code> 的最大值）就是字符串中的不平衡对数。</p><ol><li>初始化 <code>imbalance</code> 为 0，用于记录当前不平衡的右括号数量。</li><li>遍历字符串中的每个字符： <ul><li>如果是左括号 <code>[</code>，则平衡增加，<code>imbalance</code> 减少。</li><li>如果是右括号 <code>]</code>，则不平衡增加，<code>imbalance</code> 增加。</li></ul></li><li>每次 <code>imbalance</code> 递增时，表示当前右括号过多，需要进行一次交换。</li><li>遍历结束后，交换次数即为需要的最小交换次数。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 n 是字符串的长度。我们只需遍历一次字符串。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只需要常数空间来存储 <code>imbalance</code> 和 <code>maxImbalance</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minSwaps</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> imbalance <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		maxImbalance <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">===</span> <span class="token string">&#39;[&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			imbalance<span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			imbalance<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 记录最大不平衡</span>
		maxImbalance <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxImbalance<span class="token punctuation">,</span> imbalance<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 最小交换次数是最大不平衡的一半，向上取整</span>
	<span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>maxImbalance <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,38),w=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"left"}},"难度")])],-1),I=e("td",{style:{"text-align":"center"}},"301",-1),C={style:{"text-align":"left"}},E={href:"https://leetcode.com/problems/remove-invalid-parentheses",target:"_blank",rel:"noopener noreferrer"},B=e("td",{style:{"text-align":"center"}},null,-1),M={style:{"text-align":"left"}},T=e("code",null,"广度优先搜索",-1),A=e("code",null,"字符串",-1),L=e("code",null,"回溯",-1),N={style:{"text-align":"left"}},O=e("td",{style:{"text-align":"center"}},"921",-1),V={style:{"text-align":"left"}},j={href:"https://leetcode.com/problems/minimum-add-to-make-parentheses-valid",target:"_blank",rel:"noopener noreferrer"},S={style:{"text-align":"center"}},Y={href:"https://2xiao.github.io/leetcode-js/leetcode/problem/0921",target:"_blank",rel:"noopener noreferrer"},R={style:{"text-align":"left"}},H=e("code",null,"栈",-1),z=e("code",null,"贪心",-1),D=e("code",null,"字符串",-1),F={style:{"text-align":"left"}},G=e("td",{style:{"text-align":"center"}},"1249",-1),J={style:{"text-align":"left"}},K={href:"https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses",target:"_blank",rel:"noopener noreferrer"},P=e("td",{style:{"text-align":"center"}},null,-1),Q={style:{"text-align":"left"}},U=e("code",null,"栈",-1),W=e("code",null,"字符串",-1),X={style:{"text-align":"left"}},Z=e("td",{style:{"text-align":"center"}},"1541",-1),$={style:{"text-align":"left"}},ee={href:"https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string",target:"_blank",rel:"noopener noreferrer"},te=e("td",{style:{"text-align":"center"}},null,-1),ne={style:{"text-align":"left"}},oe=e("code",null,"栈",-1),se=e("code",null,"贪心",-1),ae=e("code",null,"字符串",-1),le={style:{"text-align":"left"}};function ce(de,ie){const a=c("ExternalLinkIcon"),l=c("font"),s=c("RouterLink");return i(),r("div",null,[e("h1",h,[m,n(),e("a",_,[n("1963. 使字符串平衡的最小交换次数"),t(a)])]),e("p",null,[n("🟠 "),t(l,{color:"#ffb800"},{default:o(()=>[n("Medium")]),_:1}),n("  🔖  "),t(s,{to:"/leetcode/outline/tag/stack.html"},{default:o(()=>[k]),_:1}),n(),t(s,{to:"/leetcode/outline/tag/greedy.html"},{default:o(()=>[b]),_:1}),n(),t(s,{to:"/leetcode/outline/tag/two-pointers.html"},{default:o(()=>[f]),_:1}),n(),t(s,{to:"/leetcode/outline/tag/string.html"},{default:o(()=>[v]),_:1}),n("  🔗 "),e("a",x,[y,t(a)])]),q,p(" prettier-ignore "),e("table",null,[w,e("tbody",null,[e("tr",null,[I,e("td",C,[e("a",E,[n("删除无效的括号"),t(a)])]),B,e("td",M,[t(s,{to:"/leetcode/outline/tag/breadth-first-search.html"},{default:o(()=>[T]),_:1}),n(),t(s,{to:"/leetcode/outline/tag/string.html"},{default:o(()=>[A]),_:1}),n(),t(s,{to:"/leetcode/outline/tag/backtracking.html"},{default:o(()=>[L]),_:1})]),e("td",N,[t(l,{color:"#ff334b"},{default:o(()=>[n("Hard")]),_:1})])]),e("tr",null,[O,e("td",V,[e("a",j,[n("使括号有效的最少添加"),t(a)])]),e("td",S,[e("a",Y,[n("[✓]"),t(a)])]),e("td",R,[t(s,{to:"/leetcode/outline/tag/stack.html"},{default:o(()=>[H]),_:1}),n(),t(s,{to:"/leetcode/outline/tag/greedy.html"},{default:o(()=>[z]),_:1}),n(),t(s,{to:"/leetcode/outline/tag/string.html"},{default:o(()=>[D]),_:1})]),e("td",F,[t(l,{color:"#ffb800"},{default:o(()=>[n("Medium")]),_:1})])]),e("tr",null,[G,e("td",J,[e("a",K,[n("移除无效的括号"),t(a)])]),P,e("td",Q,[t(s,{to:"/leetcode/outline/tag/stack.html"},{default:o(()=>[U]),_:1}),n(),t(s,{to:"/leetcode/outline/tag/string.html"},{default:o(()=>[W]),_:1})]),e("td",X,[t(l,{color:"#ffb800"},{default:o(()=>[n("Medium")]),_:1})])]),e("tr",null,[Z,e("td",$,[e("a",ee,[n("平衡括号字符串的最少插入次数"),t(a)])]),te,e("td",ne,[t(s,{to:"/leetcode/outline/tag/stack.html"},{default:o(()=>[oe]),_:1}),n(),t(s,{to:"/leetcode/outline/tag/greedy.html"},{default:o(()=>[se]),_:1}),n(),t(s,{to:"/leetcode/outline/tag/string.html"},{default:o(()=>[ae]),_:1})]),e("td",le,[t(l,{color:"#ffb800"},{default:o(()=>[n("Medium")]),_:1})])])])])])}const pe=d(g,[["render",ce],["__file","1963.html.vue"]]);export{pe as default};
