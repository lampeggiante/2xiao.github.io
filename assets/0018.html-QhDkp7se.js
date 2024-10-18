import{_ as u,r as l,o as i,c as r,a as n,b as s,d as a,w as t,f as d,e as c}from"./app-5VBZs9Uu.js";const k={},m={id:"_18-四数之和",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#_18-四数之和","aria-hidden":"true"},"#",-1),_={href:"https://leetcode.com/problems/4sum",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"数组",-1),f=n("code",null,"双指针",-1),g=n("code",null,"排序",-1),v={href:"https://leetcode.com/problems/4sum",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=c('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array <code>nums</code> of <code>n</code> integers, return <em>an array of all the <strong>unique</strong> quadruplets</em> <code>[nums[a], nums[b], nums[c], nums[d]]</code> such that:</p><ul><li><code>0 &lt;= a, b, c, d &lt; n</code></li><li><code>a</code>, <code>b</code>, <code>c</code>, and <code>d</code> are <strong>distinct</strong>.</li><li><code>nums[a] + nums[b] + nums[c] + nums[d] == target</code></li></ul><p>You may return the answer in <strong>any order</strong>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,0,-1,0,-2,2], target = 0</p><p>Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [2,2,2,2,2], target = 8</p><p>Output: [[2,2,2,2]]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 200</code></li><li><code>-10^9 &lt;= nums[i] &lt;= 10^9</code></li><li><code>-10^9 &lt;= target &lt;= 10^9</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个数组，要求在这个数组中找出 4 个数之和为 0 的所有组合。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这一题比较麻烦的一点在于，最后输出解的时候，要求输出不重复的解。数组中同一个数字可能出现多次，同一个数字也可能使用多次，但是最后输出解的时候，不能重复。例如 [-1，1，2, -2] 和 [2, -1, -2, 1]、[-2, 2, -1, 1] 这 3 个解是重复的。</p>',14),w=c(`<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">fourSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  nums <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len <span class="token operator">-</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> len <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> left <span class="token operator">=</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> right <span class="token operator">=</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> sum <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">===</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> left<span class="token operator">++</span><span class="token punctuation">;</span>
          <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>right <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> right<span class="token operator">--</span><span class="token punctuation">;</span>
          left<span class="token operator">++</span><span class="token punctuation">;</span>
          right<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          right<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          left<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> j<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> i<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,3),j=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),q=n("td",{style:{"text-align":"center"}},"1",-1),E={style:{"text-align":"left"}},I={href:"https://leetcode.com/problems/two-sum",target:"_blank",rel:"noopener noreferrer"},C={style:{"text-align":"center"}},L={style:{"text-align":"left"}},N=n("code",null,"数组",-1),V=n("code",null,"哈希表",-1),B={style:{"text-align":"left"}},M=n("td",{style:{"text-align":"center"}},"15",-1),O={style:{"text-align":"left"}},R={href:"https://leetcode.com/problems/3sum",target:"_blank",rel:"noopener noreferrer"},S={style:{"text-align":"center"}},G={style:{"text-align":"left"}},T=n("code",null,"数组",-1),Y=n("code",null,"双指针",-1),z=n("code",null,"排序",-1),A={style:{"text-align":"left"}},D=n("td",{style:{"text-align":"center"}},"454",-1),F={style:{"text-align":"left"}},H={href:"https://leetcode.com/problems/4sum-ii",target:"_blank",rel:"noopener noreferrer"},J=n("td",{style:{"text-align":"center"}},null,-1),K={style:{"text-align":"left"}},P=n("code",null,"数组",-1),Q=n("code",null,"哈希表",-1),U={style:{"text-align":"left"}},W=n("td",{style:{"text-align":"center"}},"1995",-1),X={style:{"text-align":"left"}},Z={href:"https://leetcode.com/problems/count-special-quadruplets",target:"_blank",rel:"noopener noreferrer"},$=n("td",{style:{"text-align":"center"}},null,-1),nn={style:{"text-align":"left"}},sn=n("code",null,"数组",-1),an=n("code",null,"哈希表",-1),tn=n("code",null,"枚举",-1),en={style:{"text-align":"left"}};function on(pn,ln){const o=l("ExternalLinkIcon"),p=l("font"),e=l("RouterLink");return i(),r("div",null,[n("h1",m,[h,s(),n("a",_,[s("18. 四数之和"),a(o)])]),n("p",null,[s("🟠 "),a(p,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/leetcode-js/outline/tag/array.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/leetcode-js/outline/tag/two-pointers.html"},{default:t(()=>[f]),_:1}),s(),a(e,{to:"/leetcode-js/outline/tag/sorting.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",v,[y,a(o)])]),x,n("p",null,[s("和 "),a(e,{to:"/leetcode-js/problem/0015.html"},{default:t(()=>[s("第 15 题")]),_:1}),s(" 的解法一致，这一题是第 15 题的升级版，思路都是完全一致的，需要去重和排序。")]),w,d(" prettier-ignore "),n("table",null,[j,n("tbody",null,[n("tr",null,[q,n("td",E,[n("a",I,[s("两数之和"),a(o)])]),n("td",C,[a(e,{to:"/leetcode-js/problem/0001.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",L,[a(e,{to:"/leetcode-js/outline/tag/array.html"},{default:t(()=>[N]),_:1}),s(),a(e,{to:"/leetcode-js/outline/tag/hash-table.html"},{default:t(()=>[V]),_:1})]),n("td",B,[a(p,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1})])]),n("tr",null,[M,n("td",O,[n("a",R,[s("三数之和"),a(o)])]),n("td",S,[a(e,{to:"/leetcode-js/problem/0015.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",G,[a(e,{to:"/leetcode-js/outline/tag/array.html"},{default:t(()=>[T]),_:1}),s(),a(e,{to:"/leetcode-js/outline/tag/two-pointers.html"},{default:t(()=>[Y]),_:1}),s(),a(e,{to:"/leetcode-js/outline/tag/sorting.html"},{default:t(()=>[z]),_:1})]),n("td",A,[a(p,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1})])]),n("tr",null,[D,n("td",F,[n("a",H,[s("四数相加 II"),a(o)])]),J,n("td",K,[a(e,{to:"/leetcode-js/outline/tag/array.html"},{default:t(()=>[P]),_:1}),s(),a(e,{to:"/leetcode-js/outline/tag/hash-table.html"},{default:t(()=>[Q]),_:1})]),n("td",U,[a(p,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1})])]),n("tr",null,[W,n("td",X,[n("a",Z,[s("统计特殊四元组"),a(o)])]),$,n("td",nn,[a(e,{to:"/leetcode-js/outline/tag/array.html"},{default:t(()=>[sn]),_:1}),s(),a(e,{to:"/leetcode-js/outline/tag/hash-table.html"},{default:t(()=>[an]),_:1}),s(),a(e,{to:"/leetcode-js/outline/tag/enumeration.html"},{default:t(()=>[tn]),_:1})]),n("td",en,[a(p,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1})])])])])])}const un=u(k,[["render",on],["__file","0018.html.vue"]]);export{un as default};
