import{_ as i,r as o,o as l,c as u,a as n,b as s,d as a,w as e,e as r}from"./app-GnK0vSxb.js";const d={},k={id:"_346-数据流中的移动平均值",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#_346-数据流中的移动平均值","aria-hidden":"true"},"#",-1),h={href:"https://leetcode.com/problems/moving-average-from-data-stream",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"设计",-1),g=n("code",null,"队列",-1),_=n("code",null,"数组",-1),b=n("code",null,"数据流",-1),f={href:"https://leetcode.com/problems/moving-average-from-data-stream",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),x=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.</p><p>Implement the <code>MovingAverage</code> class:</p><ul><li><code>MovingAverage(int size)</code> Initializes the object with the size of the window size.</li><li><code>double next(int val)</code> Returns the moving average of the last size values of the stream.</li></ul><p><strong>Example:</strong></p><blockquote><p>Input</p><p>[&quot;MovingAverage&quot;, &quot;next&quot;, &quot;next&quot;, &quot;next&quot;, &quot;next&quot;]</p><p>[[3], [1], [10], [3], [5]]</p><p>Output</p><p>[null, 1.0, 5.5, 4.66667, 6.0]</p><p>Explanation</p><p>MovingAverage movingAverage = new MovingAverage(3);</p><p>movingAverage.next(1); // return 1.0 = 1 / 1</p><p>movingAverage.next(10); // return 5.5 = (1 + 10) / 2</p><p>movingAverage.next(3); // return 4.66667 = (1 + 10 + 3) / 3</p><p>movingAverage.next(5); // return 6.0 = (10 + 3 + 5) / 3</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= size &lt;= 1000</code></li><li><code>-10^5 &lt;= val &lt;= 10^5</code></li><li>At most <code>10^4</code> calls will be made to next.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个整数数据流和一个窗口大小，根据该滑动窗口的大小，计算其所有整数的移动平均值。</p><p>实现 <code>MovingAverage</code> 类：</p><ul><li><code>MovingAverage(int size)</code> 用窗口大小初始化对象。</li><li><code>double next(int val)</code> 返回流的最后一个大小值的移动平均值。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题可以使用队列来做，用一个队列记录数字，用一个变量记录窗口和，每次更新窗口和。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MovingAverage</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">size</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">=</span> size<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">next</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>sum <span class="token operator">+=</span> val<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>sum <span class="token operator">-=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>sum <span class="token operator">/</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function q(y,A){const p=o("ExternalLinkIcon"),c=o("font"),t=o("RouterLink");return l(),u("div",null,[n("h1",k,[v,s(),n("a",h,[s("346. 数据流中的移动平均值"),a(p)])]),n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),a(t,{to:"/leetcode/outline/tag/design.html"},{default:e(()=>[m]),_:1}),s(),a(t,{to:"/leetcode/outline/tag/queue.html"},{default:e(()=>[g]),_:1}),s(),a(t,{to:"/leetcode/outline/tag/array.html"},{default:e(()=>[_]),_:1}),s(),a(t,{to:"/leetcode/outline/tag/data-stream.html"},{default:e(()=>[b]),_:1}),s("  🔗 "),n("a",f,[w,a(p)])]),x])}const M=i(d,[["render",q],["__file","0346.html.vue"]]);export{M as default};
