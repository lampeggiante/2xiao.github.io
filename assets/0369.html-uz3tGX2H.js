import{_ as l,r as e,o as i,c as r,a as n,b as s,d as a,w as t,e as u}from"./app-GnK0vSxb.js";const d={},k={id:"_369-给单链表加一",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#_369-给单链表加一","aria-hidden":"true"},"#",-1),m={href:"https://leetcode.com/problems/plus-one-linked-list",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"链表",-1),b=n("code",null,"数学",-1),_={href:"https://leetcode.com/problems/plus-one-linked-list",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),g=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a <strong>non-negative</strong> integer represented as non-empty a singly linked list of digits, plus one to the integer.</p><p>The digits are stored such that the most significant digit is at the head of the list.</p><p><strong>Example:</strong></p><blockquote><p>Input: head = [1,2,3]</p><p>Output: [1,2,4]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: head = [0]</p><p>Output: [1]</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the linked list is in the range <code>[1, 100]</code>.</li><li><code>0 &lt;= Node.val &lt;= 9</code></li><li>The number represented by the linked list does not contain leading zeros except for the zero itself.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>用一个 <strong>非空</strong> 单链表来表示一个非负整数，然后将这个整数加一。</p><p>你可以假设这个整数除了 <code>0</code> 本身，没有任何前导的 <code>0</code>。</p><p>这个整数的各个数位按照 <strong>高位在链表头部、低位在链表尾部</strong> 的顺序排列。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>反转链表。</li><li>从链表头部开始遍历，逐位进行加一操作，处理进位。</li><li>将链表再次反转，得到最终结果。</li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">plusOne</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1. 反转链表</span>
  <span class="token keyword">let</span> reversedHead <span class="token operator">=</span> <span class="token function">reverse</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> cur <span class="token operator">=</span> reversedHead<span class="token punctuation">;</span>
  <span class="token keyword">let</span> carry <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

  <span class="token comment">// 2. 遍历链表，对每个节点加一并处理进位</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>cur <span class="token operator">&amp;&amp;</span> carry <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> sum <span class="token operator">=</span> cur<span class="token punctuation">.</span>val <span class="token operator">+</span> carry<span class="token punctuation">;</span>
    cur<span class="token punctuation">.</span>val <span class="token operator">=</span> sum <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// 更新当前节点的值</span>
    carry <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>sum <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 计算进位</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>carry <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 处理最高位的进位</span>
      cur<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>carry<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 3. 再次反转链表得到结果</span>
  <span class="token keyword">return</span> <span class="token function">reverse</span><span class="token punctuation">(</span>reversedHead<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> <span class="token function-variable function">reverse</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> prev <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> cur <span class="token operator">=</span> head<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    cur<span class="token punctuation">.</span>next <span class="token operator">=</span> prev<span class="token punctuation">;</span>
    prev <span class="token operator">=</span> cur<span class="token punctuation">;</span>
    cur <span class="token operator">=</span> next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> prev<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17);function y(w,x){const o=e("ExternalLinkIcon"),c=e("font"),p=e("RouterLink");return i(),r("div",null,[n("h1",k,[v,s(),n("a",m,[s("369. 给单链表加一"),a(o)])]),n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(p,{to:"/leetcode/outline/tag/linked-list.html"},{default:t(()=>[h]),_:1}),s(),a(p,{to:"/leetcode/outline/tag/math.html"},{default:t(()=>[b]),_:1}),s("  🔗 "),n("a",_,[f,a(o)])]),g])}const N=l(d,[["render",y],["__file","0369.html.vue"]]);export{N as default};
