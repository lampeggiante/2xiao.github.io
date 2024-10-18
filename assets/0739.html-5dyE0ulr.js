import{_ as l,r as c,o as i,c as u,a as n,b as s,d as t,w as e,f as r,e as d}from"./app-5VBZs9Uu.js";const k={},m={id:"_739-每日温度",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#_739-每日温度","aria-hidden":"true"},"#",-1),_={href:"https://leetcode.com/problems/daily-temperatures",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"栈",-1),b=n("code",null,"数组",-1),v=n("code",null,"单调栈",-1),g={href:"https://leetcode.com/problems/daily-temperatures",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of integers <code>temperatures</code> represents the daily temperatures, return <em>an array</em> <code>answer</code> <em>such that</em> <code>answer[i]</code> <em>is the number of days you have to wait after the</em> <code>ith</code> <em>day to get a warmer temperature</em>. If there is no future day for which this is possible, keep <code>answer[i] == 0</code> instead.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: temperatures = [73,74,75,71,69,72,76,73]</p><p>Output: [1,1,4,2,1,1,0,0]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: temperatures = [30,40,50,60]</p><p>Output: [1,1,1,0]</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: temperatures = [30,60,90]</p><p>Output: [1,1,0]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= temperatures.length &lt;= 10^5</code></li><li><code>30 &lt;= temperatures[i] &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个整数数组 <code>temperatures</code> ，表示每天的温度，返回一个数组 <code>answer</code> ，其中 <code>answer[i]</code> 是指对于第 <code>i</code> 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 <code>0</code> 来代替。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>使用单调递增栈；</li><li>先遍历一遍 <code>temperatures</code>，并构造单调递增栈，栈中保存元素对应的 <code>index</code>；</li><li>求出 <code>temperatures</code> 中每个元素右侧下一个更大的元素，然后将其对应的 <code>index</code> 存储到哈希表中；</li><li>然后再遍历一遍 <code>temperatures</code>，从哈希表中取出对应结果，将差值 <code>value - key</code> 存放到答案数组中；</li><li>这种解法的时间复杂度是 <code>O(n)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">temperatures</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">dailyTemperatures</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">temperatures</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> temperatures<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>
      stack<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span>
      temperatures<span class="token punctuation">[</span>stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> temperatures<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> temperatures<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    temperatures<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">?</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">-</span> i <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> temperatures<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,17),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),j=n("td",{style:{"text-align":"center"}},"496",-1),E={style:{"text-align":"left"}},I={href:"https://leetcode.com/problems/next-greater-element-i",target:"_blank",rel:"noopener noreferrer"},q={style:{"text-align":"center"}},C={style:{"text-align":"left"}},L=n("code",null,"栈",-1),N=n("code",null,"数组",-1),V=n("code",null,"哈希表",-1),O=n("code",null,"1+",-1),B={style:{"text-align":"left"}},M=n("td",{style:{"text-align":"center"}},"901",-1),R={style:{"text-align":"left"}},T={href:"https://leetcode.com/problems/online-stock-span",target:"_blank",rel:"noopener noreferrer"},G=n("td",{style:{"text-align":"center"}},null,-1),S={style:{"text-align":"left"}},z=n("code",null,"栈",-1),A=n("code",null,"设计",-1),D=n("code",null,"数据流",-1),F=n("code",null,"1+",-1),H={style:{"text-align":"left"}};function J(K,P){const o=c("ExternalLinkIcon"),p=c("font"),a=c("RouterLink");return i(),u("div",null,[n("h1",m,[h,s(),n("a",_,[s("739. 每日温度"),t(o)])]),n("p",null,[s("🟠 "),t(p,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),t(a,{to:"/leetcode-js/outline/tag/stack.html"},{default:e(()=>[f]),_:1}),s(),t(a,{to:"/leetcode-js/outline/tag/array.html"},{default:e(()=>[b]),_:1}),s(),t(a,{to:"/leetcode-js/outline/tag/monotonic-stack.html"},{default:e(()=>[v]),_:1}),s("  🔗 "),n("a",g,[y,t(o)])]),x,r(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[j,n("td",E,[n("a",I,[s("下一个更大元素 I"),t(o)])]),n("td",q,[t(a,{to:"/leetcode-js/problem/0496.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",C,[t(a,{to:"/leetcode-js/outline/tag/stack.html"},{default:e(()=>[L]),_:1}),s(),t(a,{to:"/leetcode-js/outline/tag/array.html"},{default:e(()=>[N]),_:1}),s(),t(a,{to:"/leetcode-js/outline/tag/hash-table.html"},{default:e(()=>[V]),_:1}),s(),O]),n("td",B,[t(p,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1})])]),n("tr",null,[M,n("td",R,[n("a",T,[s("股票价格跨度"),t(o)])]),G,n("td",S,[t(a,{to:"/leetcode-js/outline/tag/stack.html"},{default:e(()=>[z]),_:1}),s(),t(a,{to:"/leetcode-js/outline/tag/design.html"},{default:e(()=>[A]),_:1}),s(),t(a,{to:"/leetcode-js/outline/tag/data-stream.html"},{default:e(()=>[D]),_:1}),s(),F]),n("td",H,[t(p,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1})])])])])])}const U=l(k,[["render",J],["__file","0739.html.vue"]]);export{U as default};
