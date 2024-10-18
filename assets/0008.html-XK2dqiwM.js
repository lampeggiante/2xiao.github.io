import{_ as c,r as p,o as l,c as r,a as n,b as s,d as e,w as t,f as u,e as d}from"./app-mvY9N9Pc.js";const h={},k={id:"_8-字符串转换整数-atoi",tabindex:"-1"},g=n("a",{class:"header-anchor",href:"#_8-字符串转换整数-atoi","aria-hidden":"true"},"#",-1),m={href:"https://leetcode.com/problems/string-to-integer-atoi",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"字符串",-1),f={href:"https://leetcode.com/problems/string-to-integer-atoi",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"LeetCode",-1),v=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Implement the <code>myAtoi(string s)</code> function, which converts a string to a 32-bit signed integer (similar to C/C++&#39;s <code>atoi</code> function).</p><p>The algorithm for <code>myAtoi(string s)</code> is as follows:</p><ol><li>Read in and ignore any leading whitespace.</li><li>Check if the next character (if not already at the end of the string) is <code>&#39;-&#39;</code> or <code>&#39;+&#39;</code>. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.</li><li>Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.</li><li>Convert these digits into an integer (i.e. <code>&quot;123&quot; -&gt; 123</code>, <code>&quot;0032&quot; -&gt; 32</code>). If no digits were read, then the integer is <code>0</code>. Change the sign as necessary (from step 2).</li><li>If the integer is out of the 32-bit signed integer range <code>[-2^31, 2^31 - 1]</code>, then clamp the integer so that it remains in the range. Specifically, integers less than <code>-2^31</code> should be clamped to <code>-2^31</code>, and integers greater than <code>2^31 - 1</code> should be clamped to <code>2^31 - 1</code>.</li><li>Return the integer as the final result.</li></ol><p><strong>Note:</strong></p><ul><li>Only the space character <code>&#39; &#39;</code> is considered a whitespace character.</li><li><strong>Do not ignore</strong> any characters other than the leading whitespace or the rest of the string after the digits.</li></ul><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;42&quot;</p><p>Output: 42</p><p>Explanation: The underlined characters are what is read in, the caret is the current reader position.</p><p>Step 1: &quot;42&quot; (no characters read because there is no leading whitespace)</p><p>Step 2: &quot;42&quot; (no characters read because there is neither a &#39;-&#39; nor &#39;+&#39;)</p><p>Step 3: &quot; <em>42</em> &quot; (&quot;42&quot; is read in)</p><p>The parsed integer is 42.</p><p>Since 42 is in the range [-2^31, 2^31 - 1], the final result is 42.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot; -42&quot;</p><p>Output: -42</p><p>Explanation:</p><p>Step 1: &quot; __ -42&quot; (leading whitespace is read and ignored)</p><p>Step 2: &quot; <em>-</em> 42&quot; (&#39;-&#39; is read, so the result should be negative)</p><p>Step 3: &quot; - <em>42</em> &quot; (&quot;42&quot; is read in)</p><p>The parsed integer is -42.</p><p>Since -42 is in the range [-2^31, 2^31 - 1], the final result is -42.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;4193 with words&quot;</p><p>Output: 4193</p><p>Explanation:</p><p>Step 1: &quot;4193 with words&quot; (no characters read because there is no leading whitespace)</p><p>Step 2: &quot;4193 with words&quot; (no characters read because there is neither a &#39;-&#39; nor &#39;+&#39;)</p><p>Step 3: &quot; <em>4193</em> with words&quot; (&quot;4193&quot; is read in; reading stops because the next character is a non-digit)</p><p>The parsed integer is 4193.</p><p>Since 4193 is in the range [-2^31, 2^31 - 1], the final result is 4193.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= s.length &lt;= 200</code></li><li><code>s</code> consists of English letters (lower-case and upper-case), digits (<code>0-9</code>), <code>&#39; &#39;</code>, <code>&#39;+&#39;</code>, <code>&#39;-&#39;</code>, and <code>&#39;.&#39;</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>请你来实现一个  myAtoi(string s)  函数，使其能将字符串转换成一个 32 位有符号整数（类似 C/C++ 中的 atoi 函数）。</p><p>函数  myAtoi(string s) 的算法如下：</p><ul><li>读入字符串并丢弃无用的前导空格</li><li>检查下一个字符（假设还未到字符末尾）为正还是负号，读取该字符（如果有）。 确定最终结果是负数还是正数。 如果两者都不存在，则假定结果为正。</li><li>读入下一个字符，直到到达下一个非数字字符或到达输入的结尾。字符串的其余部分将被忽略。</li><li>将前面步骤读入的这些数字转换为整数（即，&quot;123&quot; -&gt; 123， &quot;0032&quot; -&gt; 32）。如果没有读入数字，则整数为 0 。必要时更改符号（从步骤 2 开始）。</li><li>如果整数数超过 32 位有符号整数范围 [−2^31,  2^31 − 1] ，需要截断这个整数，使其保持在这个范围内。具体来说，小于 −2^31 的整数应该被固定为 −2^31 ，大于 2^31 − 1 的整数应该被固定为 2^31 − 1 。</li><li>返回整数作为最终结果。</li></ul><p>注意：</p><ul><li>本题中的空白字符只包括空格字符 &#39; &#39; 。</li><li>除前导空格或数字后的其余字符串外，请勿忽略 任何其他字符。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>这题是简单题。题目要求实现类似 <code>C++</code> 中 <code>atoi</code> 函数的功能，这个函数功能是将字符串类型的数字转成 <code>int</code> 类型数字。</li></ul><ol><li>先去除字符串中的前导空格，并判断记录数字的符号 <code>sign</code>；</li><li>遍历字符串，如果 <code>s[i]</code> 是整型，则将其转换成数字类型存入 <code>res</code>；</li><li>如果遇到非整型，则立刻结束遍历；</li><li>将数字乘以 <code>sign</code>；</li><li>判断是否超过 <code>int</code> 类型的上限 <code>[-2^31, 2^31 - 1]</code>，如果超过上限，需要输出边界，即 <code>-2^31</code>，或者 <code>2^31 - 1</code>。</li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">myAtoi</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  s <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> sign <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&quot;-&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    i<span class="token operator">++</span><span class="token punctuation">;</span>
    sign <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&quot;+&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    i<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token function">parseInt</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">*</span> res <span class="token operator">+</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    i<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  res <span class="token operator">*=</span> sign<span class="token punctuation">;</span>
  res <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">**</span> <span class="token number">31</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">**</span> <span class="token number">31</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,26),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),y=n("td",{style:{"text-align":"center"}},"7",-1),x={style:{"text-align":"left"}},w={href:"https://leetcode.com/problems/reverse-integer",target:"_blank",rel:"noopener noreferrer"},S={style:{"text-align":"center"}},C={href:"https://2xiao.github.io/leetcode-js/leetcode/problem/0007",target:"_blank",rel:"noopener noreferrer"},E={style:{"text-align":"left"}},I=n("code",null,"数学",-1),N={style:{"text-align":"left"}},T=n("td",{style:{"text-align":"center"}},"65",-1),A={style:{"text-align":"left"}},R={href:"https://leetcode.com/problems/valid-number",target:"_blank",rel:"noopener noreferrer"},L=n("td",{style:{"text-align":"center"}},null,-1),V={style:{"text-align":"left"}},j=n("code",null,"字符串",-1),M={style:{"text-align":"left"}},O=n("td",{style:{"text-align":"center"}},"2042",-1),B={style:{"text-align":"left"}},D={href:"https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence",target:"_blank",rel:"noopener noreferrer"},H=n("td",{style:{"text-align":"center"}},null,-1),z={style:{"text-align":"left"}},F=n("code",null,"字符串",-1),G={style:{"text-align":"left"}};function J(K,P){const a=p("ExternalLinkIcon"),o=p("font"),i=p("RouterLink");return l(),r("div",null,[n("h1",k,[g,s(),n("a",m,[s("8. 字符串转换整数 (atoi)"),e(a)])]),n("p",null,[s("🟠 "),e(o,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),e(i,{to:"/leetcode/outline/tag/string.html"},{default:t(()=>[_]),_:1}),s("  🔗 "),n("a",f,[b,e(a)])]),v,u(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[y,n("td",x,[n("a",w,[s("整数反转"),e(a)])]),n("td",S,[n("a",C,[s("[✓]"),e(a)])]),n("td",E,[e(i,{to:"/leetcode/outline/tag/math.html"},{default:t(()=>[I]),_:1})]),n("td",N,[e(o,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1})])]),n("tr",null,[T,n("td",A,[n("a",R,[s("有效数字"),e(a)])]),L,n("td",V,[e(i,{to:"/leetcode/outline/tag/string.html"},{default:t(()=>[j]),_:1})]),n("td",M,[e(o,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1})])]),n("tr",null,[O,n("td",B,[n("a",D,[s("检查句子中的数字是否递增"),e(a)])]),H,n("td",z,[e(i,{to:"/leetcode/outline/tag/string.html"},{default:t(()=>[F]),_:1})]),n("td",G,[e(o,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1})])])])])])}const U=c(h,[["render",J],["__file","0008.html.vue"]]);export{U as default};
