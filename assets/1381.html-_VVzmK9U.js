import{_ as l,r as o,o as i,c as u,a as n,b as s,d as a,w as t,e as d}from"./app-mvY9N9Pc.js";const r={},k={id:"_1381-设计一个支持增量操作的栈",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#_1381-设计一个支持增量操作的栈","aria-hidden":"true"},"#",-1),v={href:"https://leetcode.com/problems/design-a-stack-with-increment-operation",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"栈",-1),b=n("code",null,"设计",-1),f=n("code",null,"数组",-1),_={href:"https://leetcode.com/problems/design-a-stack-with-increment-operation",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Design a stack that supports increment operations on its elements.</p><p>Implement the <code>CustomStack</code> class:</p><ul><li><code>CustomStack(int maxSize)</code> Initializes the object with <code>maxSize</code> which is the maximum number of elements in the stack.</li><li><code>void push(int x)</code> Adds <code>x</code> to the top of the stack if the stack has not reached the <code>maxSize</code>.</li><li><code>int pop()</code> Pops and returns the top of the stack or <code>-1</code> if the stack is empty.</li><li><code>void inc(int k, int val)</code> Increments the bottom <code>k</code> elements of the stack by <code>val</code>. If there are less than <code>k</code> elements in the stack, increment all the elements in the stack.</li></ul><p><strong>Example 1:</strong></p><blockquote><p><strong>Input</strong></p><p>[&quot;CustomStack&quot;,&quot;push&quot;,&quot;push&quot;,&quot;pop&quot;,&quot;push&quot;,&quot;push&quot;,&quot;push&quot;,&quot;increment&quot;,&quot;increment&quot;,&quot;pop&quot;,&quot;pop&quot;,&quot;pop&quot;,&quot;pop&quot;]</p><p>[[3],[1],[2],[],[2],[3],[4],[5,100],[2,100],[],[],[],[]]</p><p><strong>Output</strong></p><p>[null,null,null,2,null,null,null,null,null,103,202,201,-1]</p><p><strong>Explanation</strong></p><p>CustomStack stk = new CustomStack(3); // Stack is Empty []</p><p>stk.push(1); // stack becomes [1]</p><p>stk.push(2); // stack becomes [1, 2]</p><p>stk.pop(); // return 2 --&gt; Return top of the stack 2, stack becomes [1]</p><p>stk.push(2); // stack becomes [1, 2]</p><p>stk.push(3); // stack becomes [1, 2, 3]</p><p>stk.push(4); // stack still [1, 2, 3], Do not add another elements as size is 4</p><p>stk.increment(5, 100); // stack becomes [101, 102, 103]</p><p>stk.increment(2, 100); // stack becomes [201, 202, 103]</p><p>stk.pop(); // return 103 --&gt; Return top of the stack 103, stack becomes [201, 202]</p><p>stk.pop(); // return 202 --&gt; Return top of the stack 202, stack becomes [201]</p><p>stk.pop(); // return 201 --&gt; Return top of the stack 201, stack becomes []</p><p>stk.pop(); // return -1 --&gt; Stack is empty return -1.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= maxSize, x, k &lt;= 1000</code></li><li><code>0 &lt;= val &lt;= 100</code></li><li>At most <code>1000</code> calls will be made to each method of <code>increment</code>, <code>push</code> and <code>pop</code> each separately.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>请你设计一个支持对其元素进行增量操作的栈。</p><p>实现自定义栈类 <code>CustomStack</code> ：</p><ul><li><code>CustomStack(int maxSize)</code>：用 <code>maxSize</code> 初始化对象，<code>maxSize</code> 是栈中最多能容纳的元素数量。</li><li><code>void push(int x)</code>：如果栈还未增长到 <code>maxSize</code> ，就将 <code>x</code> 添加到栈顶。</li><li><code>int pop()</code>：弹出栈顶元素，并返回栈顶的值，或栈为空时返回 <code>-1</code> 。</li><li><code>void inc(int k, int val)</code>：栈底的 <code>k</code> 个元素的值都增加 <code>val</code> 。如果栈中元素总数小于 <code>k</code> ，则栈中的所有元素都增加 <code>val</code> 。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>按照题目要求实现即可：</p><ul><li>对于 <code>push</code> 操作，首先判断当前元素的个数是否达到上限，如果没有达到，就把 <code>top</code> 后移一个位置并添加一个元素。</li><li>对于 <code>pop</code> 操作，首先判断当前栈是否为空，非空返回栈顶元素并将 <code>top</code> 前移一位，否则返回 <code>−1</code>。</li><li>对于 <code>inc</code> 操作，直接对栈底的最多 <code>k</code> 个元素加上 <code>val</code>。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：初始化（构造函数）、<code>push</code> 操作和 <code>pop</code> 操作的渐进时间复杂度为 <code>O(1)</code>，<code>inc</code> 操作的渐进时间复杂度为 <code>O(k)</code>。</li><li><strong>空间复杂度</strong>：这里用到了一个长度为 <code>maxSize</code> 的数组作为辅助空间，渐进空间复杂度为 <code>O(maxSize)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">maxSize</span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">CustomStack</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">maxSize</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>max <span class="token operator">=</span> maxSize<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">x</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">CustomStack</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">push</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">CustomStack</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">pop</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">val</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">CustomStack</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">increment</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">k<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	k <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> k<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+=</span> val<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function y(g,S){const p=o("ExternalLinkIcon"),c=o("font"),e=o("RouterLink");return i(),u("div",null,[n("h1",k,[m,s(),n("a",v,[s("1381. 设计一个支持增量操作的栈"),a(p)])]),n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/leetcode/outline/tag/stack.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/leetcode/outline/tag/design.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/leetcode/outline/tag/array.html"},{default:t(()=>[f]),_:1}),s("  🔗 "),n("a",_,[x,a(p)])]),w])}const C=l(r,[["render",y],["__file","1381.html.vue"]]);export{C as default};
