import{_ as l,r as c,o as i,c as u,a as n,b as s,d as t,w as a,f as r,e as d}from"./app-mvY9N9Pc.js";const k={},h={id:"_150-逆波兰表达式求值",tabindex:"-1"},_=n("a",{class:"header-anchor",href:"#_150-逆波兰表达式求值","aria-hidden":"true"},"#",-1),m={href:"https://leetcode.com/problems/evaluate-reverse-polish-notation",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"栈",-1),g=n("code",null,"数组",-1),v=n("code",null,"数学",-1),q={href:"https://leetcode.com/problems/evaluate-reverse-polish-notation",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"LeetCode",-1),x=n("h2",{id:"题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),s(" 题目")],-1),y=n("code",null,"tokens",-1),w={href:"http://en.wikipedia.org/wiki/Reverse_Polish_notation",target:"_blank",rel:"noopener noreferrer"},E=d(`<p>Evaluate the expression. Return <em>an integer that represents the value of the expression</em>.</p><p><strong>Note</strong> that:</p><ul><li>The valid operators are <code>&#39;+&#39;</code>, <code>&#39;-&#39;</code>, <code>&#39;*&#39;</code>, and <code>&#39;/&#39;</code>.</li><li>Each operand may be an integer or another expression.</li><li>The division between two integers always <strong>truncates toward zero</strong>.</li><li>There will not be any division by zero.</li><li>The input represents a valid arithmetic expression in a reverse polish notation.</li><li>The answer and all the intermediate calculations can be represented in a <strong>32-bit</strong> integer.</li></ul><p><strong>Example 1:</strong></p><blockquote><p>Input: tokens = [&quot;2&quot;,&quot;1&quot;,&quot;+&quot;,&quot;3&quot;,&quot;*&quot;]</p><p>Output: 9</p><p>Explanation: ((2 + 1) * 3) = 9</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: tokens = [&quot;4&quot;,&quot;13&quot;,&quot;5&quot;,&quot;/&quot;,&quot;+&quot;]</p><p>Output: 6</p><p>Explanation: (4 + (13 / 5)) = 6</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: tokens = [&quot;10&quot;,&quot;6&quot;,&quot;9&quot;,&quot;3&quot;,&quot;+&quot;,&quot;-11&quot;,&quot;<em>&quot;,&quot;/&quot;,&quot;</em>&quot;,&quot;17&quot;,&quot;+&quot;,&quot;5&quot;,&quot;+&quot;]</p><p>Output: 22</p><p>Explanation: ((10 _ (6 / ((9 + 3) _ -11))) + 17) + 5</p><p>= ((10 _ (6 / (12 _ -11))) + 17) + 5</p><p>= ((10 * (6 / -132)) + 17) + 5</p><p>= ((10 * 0) + 17) + 5</p><p>= (0 + 17) + 5</p><p>= 17 + 5</p><p>= 22</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= tokens.length &lt;= 10^4</code></li><li><code>tokens[i]</code> is either an operator: <code>&quot;+&quot;</code>, <code>&quot;-&quot;</code>, <code>&quot;*&quot;</code>, or <code>&quot;/&quot;</code>, or an integer in the range <code>[-200, 200]</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串数组 <code>tokens</code> ，表示一个根据 <strong>逆波兰表示法</strong> 表示的算术表达式。</p><p>请你计算该表达式。返回一个表示表达式值的整数。</p><p>注意：</p><ul><li>有效的算符为 <code>&#39;+&#39;</code>、<code>&#39;-&#39;</code>、<code>&#39;*&#39;</code> 和 <code>&#39;/&#39;</code> 。</li><li>每个操作数（运算对象）都可以是一个整数或者另一个表达式。</li><li>两个整数之间的除法总是 <strong>向零截断</strong> 。</li><li>表达式中不含除零运算。</li><li>输入是一个根据逆波兰表示法表示的算术表达式。</li><li>答案及所有中间计算结果可以用 <strong>32 位</strong> 整数表示。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>逆波兰表达式发明出来就是为了方便计算机运用「栈」进行表达式运算的，其运算规则如下：</p><p>按顺序遍历逆波兰表达式中的字符，如果是数字，则放入栈；如果是运算符，则将栈顶的两个元素拿出来进行运算，再将结果放入栈。对于减法和除法，运算顺序别搞反了，栈顶第二个数是被除（减）数。</p><p>所以这题很简单，直接按照运算规则借助栈计算表达式结果即可。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">tokens</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">evalRPN</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">tokens</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> tokens<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token string">&quot;+&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token string">&quot;-&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span> <span class="token operator">*</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> temp <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> temp<span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,23),N=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),R=n("td",{style:{"text-align":"center"}},"224",-1),T={style:{"text-align":"left"}},C={href:"https://leetcode.com/problems/basic-calculator",target:"_blank",rel:"noopener noreferrer"},I={style:{"text-align":"center"}},L={href:"https://2xiao.github.io/leetcode-js/leetcode/problem/0224",target:"_blank",rel:"noopener noreferrer"},V={style:{"text-align":"left"}},j=n("code",null,"栈",-1),B=n("code",null,"递归",-1),O=n("code",null,"数学",-1),P=n("code",null,"1+",-1),z={style:{"text-align":"left"}},H=n("td",{style:{"text-align":"center"}},"282",-1),M={style:{"text-align":"left"}},S={href:"https://leetcode.com/problems/expression-add-operators",target:"_blank",rel:"noopener noreferrer"},Y=n("td",{style:{"text-align":"center"}},null,-1),A={style:{"text-align":"left"}},D=n("code",null,"数学",-1),F=n("code",null,"字符串",-1),G=n("code",null,"回溯",-1),J={style:{"text-align":"left"}};function K(Q,U){const o=c("ExternalLinkIcon"),p=c("font"),e=c("RouterLink");return i(),u("div",null,[n("h1",h,[_,s(),n("a",m,[s("150. 逆波兰表达式求值"),t(o)])]),n("p",null,[s("🟠 "),t(p,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(e,{to:"/leetcode/outline/tag/stack.html"},{default:a(()=>[f]),_:1}),s(),t(e,{to:"/leetcode/outline/tag/array.html"},{default:a(()=>[g]),_:1}),s(),t(e,{to:"/leetcode/outline/tag/math.html"},{default:a(()=>[v]),_:1}),s("  🔗 "),n("a",q,[b,t(o)])]),x,n("p",null,[s("You are given an array of strings "),y,s(" that represents an arithmetic expression in a "),n("a",w,[s("Reverse Polish Notation"),t(o)]),s(".")]),E,r(" prettier-ignore "),n("table",null,[N,n("tbody",null,[n("tr",null,[R,n("td",T,[n("a",C,[s("基本计算器"),t(o)])]),n("td",I,[n("a",L,[s("[✓]"),t(o)])]),n("td",V,[t(e,{to:"/leetcode/outline/tag/stack.html"},{default:a(()=>[j]),_:1}),s(),t(e,{to:"/leetcode/outline/tag/recursion.html"},{default:a(()=>[B]),_:1}),s(),t(e,{to:"/leetcode/outline/tag/math.html"},{default:a(()=>[O]),_:1}),s(),P]),n("td",z,[t(p,{color:"#ff334b"},{default:a(()=>[s("Hard")]),_:1})])]),n("tr",null,[H,n("td",M,[n("a",S,[s("给表达式添加运算符"),t(o)])]),Y,n("td",A,[t(e,{to:"/leetcode/outline/tag/math.html"},{default:a(()=>[D]),_:1}),s(),t(e,{to:"/leetcode/outline/tag/string.html"},{default:a(()=>[F]),_:1}),s(),t(e,{to:"/leetcode/outline/tag/backtracking.html"},{default:a(()=>[G]),_:1})]),n("td",J,[t(p,{color:"#ff334b"},{default:a(()=>[s("Hard")]),_:1})])])])])])}const X=l(k,[["render",K],["__file","0150.html.vue"]]);export{X as default};
