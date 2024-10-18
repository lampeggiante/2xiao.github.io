import{_ as l,r as c,o as u,c as i,a as n,b as s,d as a,w as t,f as r,e as d}from"./app-5VBZs9Uu.js";const k={},m={id:"_307-区域和检索-数组可修改",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#_307-区域和检索-数组可修改","aria-hidden":"true"},"#",-1),v={href:"https://leetcode.com/problems/range-sum-query-mutable",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"设计",-1),f=n("code",null,"树状数组",-1),b=n("code",null,"线段树",-1),_=n("code",null,"数组",-1),y={href:"https://leetcode.com/problems/range-sum-query-mutable",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code>, handle multiple queries of the following types:</p><ol><li><strong>Update</strong> the value of an element in <code>nums</code>.</li><li>Calculate the <strong>sum</strong> of the elements of <code>nums</code> between indices <code>left</code> and <code>right</code> <strong>inclusive</strong> where <code>left &lt;= right</code>.</li></ol><p>Implement the <code>NumArray</code> class:</p><ul><li><code>NumArray(int[] nums)</code> Initializes the object with the integer array <code>nums</code>.</li><li><code>void update(int index, int val)</code> <strong>Updates</strong> the value of <code>nums[index]</code> to be <code>val</code>.</li><li><code>int sumRange(int left, int right)</code> Returns the <strong>sum</strong> of the elements of <code>nums</code> between indices <code>left</code> and <code>right</code> <strong>inclusive</strong> (i.e. <code>nums[left] + nums[left + 1] + ... + nums[right]</code>).</li></ul><p><strong>Example 1:</strong></p><blockquote><p><strong>Input</strong></p><p>[&quot;NumArray&quot;, &quot;sumRange&quot;, &quot;update&quot;, &quot;sumRange&quot;]</p><p>[[[1, 3, 5]], [0, 2], [1, 2], [0, 2]]</p><p><strong>Output</strong></p><p>[null, 9, null, 8]</p><p><strong>Explanation</strong></p><p>NumArray numArray = new NumArray([1, 3, 5]);</p><p>numArray.sumRange(0, 2); // return 1 + 3 + 5 = 9</p><p>numArray.update(1, 2); // nums = [1, 2, 5]</p><p>numArray.sumRange(0, 2); // return 1 + 2 + 5 = 8</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 3 * 10^4</code></li><li><code>-100 &lt;= nums[i] &lt;= 100</code></li><li><code>0 &lt;= index &lt; nums.length</code></li><li><code>-100 &lt;= val &lt;= 100</code></li><li><code>0 &lt;= left &lt;= right &lt; nums.length</code></li><li>At most <code>3 * 10^4</code> calls will be made to <code>update</code> and <code>sumRange</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个整数数组 <code>nums</code>，请你完成两类查询：</p><ol><li><strong>更新</strong> 数组 <code>nums</code> 下标对应的值</li><li>返回数组 <code>nums</code> 中索引 <code>left</code> 和 <code>right</code> （包含 <code>left</code> 和 <code>right</code>）之间的 <code>nums</code> 元素的 <strong>和</strong> ，其中 <code>left &lt;= right</code></li></ol><p>实现 <code>NumArray</code> 类：</p><ul><li><code>NumArray(int[] nums)</code> 使用数组 <code>nums</code> 初始化对象</li><li><code>void update(int index, int val)</code> 将 <code>nums[index]</code> 的值 <strong>更新</strong> 为 <code>val</code></li><li><code>int sumRange(int i, int j)</code> 返回数组 <code>nums</code> 中索引 <code>left</code> 和 <code>right</code> 之间的元素的 总和 ，包含 <code>left</code> 和 <code>right</code> 两点（也就是 <code>nums[left] + nums[left + 1] + ... + nums[right]</code> ）</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这个问题可以通过线段树来解决：</p><ol><li><p><strong>初始化：</strong> 在 <code>NumArray</code> 类的构造函数中，首先将输入的数组 <code>nums</code> 存储起来，并构建一个线段树，表示整个数组的和。每个线段树节点包含一个区间的起始位置、结束位置和该区间的和。</p></li><li><p><strong>更新操作：</strong> 当调用 <code>update</code> 方法时，根据给定的索引和新的值，更新数组 <code>nums</code> 对应位置的值，并在线段树中更新对应的节点的值。这个更新过程是通过递归地向下更新线段树节点实现的。</p></li><li><p><strong>区间和查询：</strong> 当调用 <code>sumRange</code> 方法时，需要查询数组中指定区间 <code>[i, j]</code> 的和。在线段树中，可以通过递归地查询左右子树来获得区间 <code>[i, j]</code> 的和：</p><ul><li>如果当前节点的区间完全包含在 <code>[i, j]</code> 中，则直接返回该节点的和。</li><li>否则，根据当前节点的中点将查询区间 <code>[i, j]</code> 分为左右两部分，递归地查询左右子树，并将两部分的和相加。</li></ul></li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">NumArray</span> <span class="token punctuation">{</span>
  <span class="token comment">// @param {number[]} nums</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>nums <span class="token operator">=</span> nums<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>segmentTree <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">buildSegmentTree</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// @param {number[]} nums</span>
  <span class="token comment">// @param {number} start</span>
  <span class="token comment">// @param {number} end</span>
  <span class="token function">buildSegmentTree</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>start <span class="token operator">==</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> start<span class="token punctuation">,</span> end<span class="token punctuation">,</span> <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token literal-property property">sum</span><span class="token operator">:</span> nums<span class="token punctuation">[</span>start<span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>start <span class="token operator">+</span> end<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> left <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">buildSegmentTree</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> start<span class="token punctuation">,</span> mid<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> right <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">buildSegmentTree</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> sum <span class="token operator">=</span> left<span class="token punctuation">.</span>sum <span class="token operator">+</span> right<span class="token punctuation">.</span>sum<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> start<span class="token punctuation">,</span> end<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right<span class="token punctuation">,</span> sum <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// @param {number} index</span>
  <span class="token comment">// @param {number} val</span>
  <span class="token comment">// @return {void}</span>
  <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">index<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateSegmentTree</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>segmentTree<span class="token punctuation">,</span> index<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">updateSegmentTree</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> index<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>start <span class="token operator">==</span> root<span class="token punctuation">.</span>end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      root<span class="token punctuation">.</span>sum <span class="token operator">=</span> val<span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>start <span class="token operator">+</span> root<span class="token punctuation">.</span>end<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;=</span> mid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateSegmentTree</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> index<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateSegmentTree</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> index<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    root<span class="token punctuation">.</span>sum <span class="token operator">=</span>
      <span class="token punctuation">(</span>root<span class="token punctuation">.</span>left <span class="token operator">?</span> root<span class="token punctuation">.</span>left<span class="token punctuation">.</span>sum <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>right <span class="token operator">?</span> root<span class="token punctuation">.</span>right<span class="token punctuation">.</span>sum <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// @param {number} left</span>
  <span class="token comment">// @param {number} right</span>
  <span class="token comment">// @return {number}</span>
  <span class="token function">sumRange</span><span class="token punctuation">(</span><span class="token parameter">left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">querySegmentTree</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>segmentTree<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">querySegmentTree</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>start <span class="token operator">&gt;</span> end <span class="token operator">||</span> root<span class="token punctuation">.</span>end <span class="token operator">&lt;</span> start<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>start <span class="token operator">&gt;=</span> start <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>end <span class="token operator">&lt;=</span> end<span class="token punctuation">)</span> <span class="token keyword">return</span> root<span class="token punctuation">.</span>sum<span class="token punctuation">;</span>

    <span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>start <span class="token operator">+</span> root<span class="token punctuation">.</span>end<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> leftSum <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">querySegmentTree</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> start<span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>mid<span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> rightSum <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">querySegmentTree</span><span class="token punctuation">(</span>
      root<span class="token punctuation">.</span>right<span class="token punctuation">,</span>
      Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> start<span class="token punctuation">)</span><span class="token punctuation">,</span>
      end
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> leftSum <span class="token operator">+</span> rightSum<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,20),j=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),q=n("td",{style:{"text-align":"center"}},"303",-1),S={style:{"text-align":"left"}},T={href:"https://leetcode.com/problems/range-sum-query-immutable",target:"_blank",rel:"noopener noreferrer"},A={style:{"text-align":"center"}},N={style:{"text-align":"left"}},R=n("code",null,"设计",-1),I=n("code",null,"数组",-1),M=n("code",null,"前缀和",-1),C={style:{"text-align":"left"}},E=n("td",{style:{"text-align":"center"}},"308",-1),L={style:{"text-align":"left"}},V={href:"https://leetcode.com/problems/range-sum-query-2d-mutable",target:"_blank",rel:"noopener noreferrer"},B=n("td",{style:{"text-align":"center"}},null,-1),U={style:{"text-align":"left"}},z=n("code",null,"设计",-1),G=n("code",null,"树状数组",-1),H=n("code",null,"线段树",-1),O=n("code",null,"2+",-1),D={style:{"text-align":"left"}},F=n("td",{style:{"text-align":"center"}},"2381",-1),J={style:{"text-align":"left"}},K={href:"https://leetcode.com/problems/shifting-letters-ii",target:"_blank",rel:"noopener noreferrer"},P=n("td",{style:{"text-align":"center"}},null,-1),Q={style:{"text-align":"left"}},W=n("code",null,"数组",-1),X=n("code",null,"字符串",-1),Y=n("code",null,"前缀和",-1),Z={style:{"text-align":"left"}};function $(nn,sn){const o=c("ExternalLinkIcon"),p=c("font"),e=c("RouterLink");return u(),i("div",null,[n("h1",m,[h,s(),n("a",v,[s("307. 区域和检索 - 数组可修改"),a(o)])]),n("p",null,[s("🟠 "),a(p,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/leetcode-js/outline/tag/design.html"},{default:t(()=>[g]),_:1}),s(),a(e,{to:"/leetcode-js/outline/tag/binary-indexed-tree.html"},{default:t(()=>[f]),_:1}),s(),a(e,{to:"/leetcode-js/outline/tag/segment-tree.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/leetcode-js/outline/tag/array.html"},{default:t(()=>[_]),_:1}),s("  🔗 "),n("a",y,[x,a(o)])]),w,r(" prettier-ignore "),n("table",null,[j,n("tbody",null,[n("tr",null,[q,n("td",S,[n("a",T,[s("区域和检索 - 数组不可变"),a(o)])]),n("td",A,[a(e,{to:"/leetcode-js/problem/0303.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",N,[a(e,{to:"/leetcode-js/outline/tag/design.html"},{default:t(()=>[R]),_:1}),s(),a(e,{to:"/leetcode-js/outline/tag/array.html"},{default:t(()=>[I]),_:1}),s(),a(e,{to:"/leetcode-js/outline/tag/prefix-sum.html"},{default:t(()=>[M]),_:1})]),n("td",C,[a(p,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1})])]),n("tr",null,[E,n("td",L,[n("a",V,[s("二维区域和检索 - 矩阵可修改"),a(o)])]),B,n("td",U,[a(e,{to:"/leetcode-js/outline/tag/design.html"},{default:t(()=>[z]),_:1}),s(),a(e,{to:"/leetcode-js/outline/tag/binary-indexed-tree.html"},{default:t(()=>[G]),_:1}),s(),a(e,{to:"/leetcode-js/outline/tag/segment-tree.html"},{default:t(()=>[H]),_:1}),s(),O]),n("td",D,[a(p,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1})])]),n("tr",null,[F,n("td",J,[n("a",K,[s("字母移位 II"),a(o)])]),P,n("td",Q,[a(e,{to:"/leetcode-js/outline/tag/array.html"},{default:t(()=>[W]),_:1}),s(),a(e,{to:"/leetcode-js/outline/tag/string.html"},{default:t(()=>[X]),_:1}),s(),a(e,{to:"/leetcode-js/outline/tag/prefix-sum.html"},{default:t(()=>[Y]),_:1})]),n("td",Z,[a(p,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1})])])])])])}const tn=l(k,[["render",$],["__file","0307.html.vue"]]);export{tn as default};
