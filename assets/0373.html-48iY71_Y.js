import{_ as l,r as c,o as u,c as i,a as n,b as s,d as a,w as t,f as r,e as k}from"./app-mvY9N9Pc.js";const d={},m={id:"_373-查找和最小的-k-对数字",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#_373-查找和最小的-k-对数字","aria-hidden":"true"},"#",-1),v={href:"https://leetcode.com/problems/find-k-pairs-with-smallest-sums",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"数组",-1),f=n("code",null,"堆（优先队列）",-1),_={href:"https://leetcode.com/problems/find-k-pairs-with-smallest-sums",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"LeetCode",-1),y=k(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given two integer arrays <code>nums1</code> and <code>nums2</code> sorted in <strong>non- decreasing order</strong> and an integer <code>k</code>.</p><p>Define a pair <code>(u, v)</code> which consists of one element from the first array and one element from the second array.</p><p>Return <em>the</em> <code>k</code> <em>pairs</em> <code>(u1, v1), (u2, v2), ..., (uk, vk)</code> <em>with the smallest sums</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3</p><p>Output: [[1,2],[1,4],[1,6]]</p><p>Explanation: The first 3 pairs are returned from the sequence: [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums1 = [1,1,2], nums2 = [1,2,3], k = 2</p><p>Output: [[1,1],[1,1]]</p><p>Explanation: The first 2 pairs are returned from the sequence: [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums1 = [1,2], nums2 = [3], k = 3</p><p>Output: [[1,3],[2,3]]</p><p>Explanation: All possible pairs are returned from the sequence: [1,3],[2,3]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums1.length, nums2.length &lt;= 10^5</code></li><li><code>-10^9 &lt;= nums1[i], nums2[i] &lt;= 10^9</code></li><li><code>nums1</code> and <code>nums2</code> both are sorted in <strong>non-decreasing order</strong>.</li><li><code>1 &lt;= k &lt;= 10^4</code></li><li><code>k &lt;= nums1.length * nums2.length</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定两个以 <strong>非递减顺序排列</strong> 的整数数组 <code>nums1</code> 和 <code>nums2</code> , 以及一个整数 <code>k</code> 。</p><p>定义一对值 <code>(u,v)</code>，其中第一个元素来自 <code>nums1</code>，第二个元素来自 <code>nums2</code> 。</p><p>请找到和最小的 <code>k</code> 个数对 <code>(u1,v1)</code>, <code>(u2,v2)</code> ... <code>(uk,vk)</code> 。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以通过优先队列（堆）来解决。我们可以维护一个小顶堆，堆中存储的是每一个可能的数对的和，同时记录这个数对在两个数组中的位置。每次弹出堆顶元素，并将下一个可能的数对入堆。最终返回的结果数组就是从小到大的前 <code>k</code> 个数对。</p><ol><li>构建一个小顶堆，堆中的每个元素是一个三元组 <code>(sum, i, j)</code>，其中 <code>sum</code> 表示 <code>nums1[i] + nums2[j]</code> 的和，<code>i</code> 和 <code>j</code> 分别表示这个和在两个数组中的位置。</li><li>初始化堆中元素，将 <code>(nums1[0] + nums2[0], 0, 0)</code> 加入堆中。</li><li>重复以下步骤 <code>k</code> 次： <ul><li>弹出堆顶元素 <code>(sum, i, j)</code>，将 <code>(nums1[i+1] + nums2[j], i+1, j)</code> 和 <code>(nums1[i] + nums2[j+1], i, j+1)</code> 分别加入堆中。注意要确保 <code>(i+1, j)</code> 和 <code>(i, j+1)</code> 没有超出数组范围。</li><li>将弹出的元素 <code>(nums1[i], nums2[j])</code> 加入结果数组。</li></ul></li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums2</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">kSmallestPairs</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums1<span class="token punctuation">,</span> nums2<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> heap <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    heap<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">heapifyUp</span><span class="token punctuation">(</span>heap<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">pop</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>heap<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> top <span class="token operator">=</span> heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> last <span class="token operator">=</span> heap<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>heap<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> last<span class="token punctuation">;</span>
      <span class="token function">heapifyDown</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> top<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">heapifyUp</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> parent <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">[</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">,</span> heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        i <span class="token operator">=</span> parent<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">heapifyDown</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> left <span class="token operator">=</span> i <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> right <span class="token operator">=</span> i <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> min <span class="token operator">=</span> i<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> heap<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> heap<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      min <span class="token operator">=</span> left<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> heap<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> heap<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      min <span class="token operator">=</span> right<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>min <span class="token operator">!==</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token punctuation">[</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">,</span> heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token function">heapifyDown</span><span class="token punctuation">(</span>min<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>nums1 <span class="token operator">||</span> <span class="token operator">!</span>nums2 <span class="token operator">||</span> nums1<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span> nums2<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span> k <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>nums1<span class="token punctuation">.</span>length<span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">[</span>nums1<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> nums2<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>k<span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> heap<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>sum<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>nums1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums2<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;</span> nums2<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">[</span>nums1<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> nums2<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,22),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),x=n("td",{style:{"text-align":"center"}},"378",-1),j={style:{"text-align":"left"}},q={href:"https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix",target:"_blank",rel:"noopener noreferrer"},E={style:{"text-align":"center"}},C={href:"https://2xiao.github.io/leetcode-js/leetcode/problem/0378",target:"_blank",rel:"noopener noreferrer"},I={style:{"text-align":"left"}},L=n("code",null,"数组",-1),N=n("code",null,"二分查找",-1),V=n("code",null,"矩阵",-1),D=n("code",null,"2+",-1),K={style:{"text-align":"left"}},M=n("td",{style:{"text-align":"center"}},"719",-1),B={style:{"text-align":"left"}},O={href:"https://leetcode.com/problems/find-k-th-smallest-pair-distance",target:"_blank",rel:"noopener noreferrer"},R=n("td",{style:{"text-align":"center"}},null,-1),T={style:{"text-align":"left"}},H=n("code",null,"数组",-1),S=n("code",null,"双指针",-1),U=n("code",null,"二分查找",-1),A=n("code",null,"1+",-1),P={style:{"text-align":"left"}},Y=n("td",{style:{"text-align":"center"}},"2040",-1),z={style:{"text-align":"left"}},F={href:"https://leetcode.com/problems/kth-smallest-product-of-two-sorted-arrays",target:"_blank",rel:"noopener noreferrer"},G=n("td",{style:{"text-align":"center"}},null,-1),J={style:{"text-align":"left"}},Q=n("code",null,"数组",-1),W=n("code",null,"二分查找",-1),X={style:{"text-align":"left"}};function Z($,nn){const p=c("ExternalLinkIcon"),o=c("font"),e=c("RouterLink");return u(),i("div",null,[n("h1",m,[h,s(),n("a",v,[s("373. 查找和最小的 K 对数字"),a(p)])]),n("p",null,[s("🟠 "),a(o,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/leetcode/outline/tag/array.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/leetcode/outline/tag/heap-priority-queue.html"},{default:t(()=>[f]),_:1}),s("  🔗 "),n("a",_,[g,a(p)])]),y,r(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[x,n("td",j,[n("a",q,[s("有序矩阵中第 K 小的元素"),a(p)])]),n("td",E,[n("a",C,[s("[✓]"),a(p)])]),n("td",I,[a(e,{to:"/leetcode/outline/tag/array.html"},{default:t(()=>[L]),_:1}),s(),a(e,{to:"/leetcode/outline/tag/binary-search.html"},{default:t(()=>[N]),_:1}),s(),a(e,{to:"/leetcode/outline/tag/matrix.html"},{default:t(()=>[V]),_:1}),s(),D]),n("td",K,[a(o,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1})])]),n("tr",null,[M,n("td",B,[n("a",O,[s("找出第 K 小的数对距离"),a(p)])]),R,n("td",T,[a(e,{to:"/leetcode/outline/tag/array.html"},{default:t(()=>[H]),_:1}),s(),a(e,{to:"/leetcode/outline/tag/two-pointers.html"},{default:t(()=>[S]),_:1}),s(),a(e,{to:"/leetcode/outline/tag/binary-search.html"},{default:t(()=>[U]),_:1}),s(),A]),n("td",P,[a(o,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1})])]),n("tr",null,[Y,n("td",z,[n("a",F,[s("两个有序数组的第 K 小乘积"),a(p)])]),G,n("td",J,[a(e,{to:"/leetcode/outline/tag/array.html"},{default:t(()=>[Q]),_:1}),s(),a(e,{to:"/leetcode/outline/tag/binary-search.html"},{default:t(()=>[W]),_:1})]),n("td",X,[a(o,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1})])])])])])}const an=l(d,[["render",Z],["__file","0373.html.vue"]]);export{an as default};
