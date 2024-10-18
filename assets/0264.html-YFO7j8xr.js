import{_ as p,r as c,o as i,c as d,a as t,b as e,d as n,w as s,f as r,e as u}from"./app-GnK0vSxb.js";const _={},h={id:"_264-丑数-ii",tabindex:"-1"},m=t("a",{class:"header-anchor",href:"#_264-丑数-ii","aria-hidden":"true"},"#",-1),k={href:"https://leetcode.com/problems/ugly-number-ii",target:"_blank",rel:"noopener noreferrer"},g=t("code",null,"哈希表",-1),f=t("code",null,"数学",-1),b=t("code",null,"动态规划",-1),v=t("code",null,"堆（优先队列）",-1),y={href:"https://leetcode.com/problems/ugly-number-ii",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>An <strong>ugly number</strong> is a positive integer whose prime factors are limited to <code>2</code>, <code>3</code>, and <code>5</code>.</p><p>Given an integer <code>n</code>, return <em>the</em> <code>nth</code> <em><strong>ugly number</strong></em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 10</p><p>Output: 12</p><p>Explanation: [1, 2, 3, 4, 5, 6, 8, 9, 10, 12] is the sequence of the first 10 ugly numbers.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 1</p><p>Output: 1</p><p>Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 1690</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数 <code>n</code> ，请你找出并返回第 <code>n</code> 个 <strong>丑数</strong> 。</p><p>说明：丑数是只包含质因数 <code>2</code>、<code>3</code> 和/或 <code>5</code> 的正整数；<code>1</code> 是丑数。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题很精妙，你看着它好像是道数学题，实际上它却是一个合并多个有序链表的问题，同时用到了筛选素数的思路。</p><p>类似 <strong>如何高效寻找素数</strong> 的思路：如果一个数 x 是丑数，那么 <code>x * 2</code>, <code>x * 3</code>, <code>x * 5</code> 都一定是丑数。</p><p>我们把所有丑数想象成一个从小到大排序的链表，就是这个样子：</p><p><code>1 -&gt; 2 -&gt; 3 -&gt; 4 -&gt; 5 -&gt; 6 -&gt; 8 -&gt; ...</code></p><p>然后，我们可以把丑数分为三类：<code>2</code> 的倍数、<code>3</code> 的倍数、<code>5</code> 的倍数（按照题目的意思，<code>1</code> 算作特殊的丑数，放在开头），这三类丑数就好像三条有序链表，如下：</p><ul><li>能被 <code>2</code> 整除的丑数：</li></ul><p><code>1 -&gt; 1*2 -&gt; 2*2 -&gt; 3*2 -&gt; 4*2 -&gt; 5*2 -&gt; 6*2 -&gt; 8*2 -&gt;...</code></p><ul><li>能被 <code>3</code> 整除的丑数：</li></ul><p><code>1 -&gt; 1*3 -&gt; 2*3 -&gt; 3*3 -&gt; 4*3 -&gt; 5*3 -&gt; 6*3 -&gt; 8*3 -&gt;...</code></p><ul><li>能被 <code>5</code> 整除的丑数：</li></ul><p><code>1 -&gt; 1*5 -&gt; 2*5 -&gt; 3*5 -&gt; 4*5 -&gt; 5*5 -&gt; 6*5 -&gt; 8*5 -&gt;...</code></p><p>我们其实就是想把这三条「有序链表」合并在一起并去重，合并的结果就是丑数的序列，然后求合并后的这条有序链表中第 <code>n</code> 个元素是什么。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">nthUglyNumber</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> index2 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		index3 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		index5 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> val2 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
		val3 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
		val5 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> ugly <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> min <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>val2<span class="token punctuation">,</span> val3<span class="token punctuation">,</span> val5<span class="token punctuation">)</span><span class="token punctuation">;</span>
		ugly<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> min<span class="token punctuation">;</span>
		index<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>min <span class="token operator">==</span> val2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			val2 <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> ugly<span class="token punctuation">[</span>index2<span class="token punctuation">]</span><span class="token punctuation">;</span>
			index2<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>min <span class="token operator">==</span> val3<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			val3 <span class="token operator">=</span> <span class="token number">3</span> <span class="token operator">*</span> ugly<span class="token punctuation">[</span>index3<span class="token punctuation">]</span><span class="token punctuation">;</span>
			index3<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>min <span class="token operator">==</span> val5<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			val5 <span class="token operator">=</span> <span class="token number">5</span> <span class="token operator">*</span> ugly<span class="token punctuation">[</span>index5<span class="token punctuation">]</span><span class="token punctuation">;</span>
			index5<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> ugly<span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,28),q=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),I=t("td",{style:{"text-align":"center"}},"23",-1),E={style:{"text-align":"left"}},M={href:"https://leetcode.com/problems/merge-k-sorted-lists",target:"_blank",rel:"noopener noreferrer"},N={style:{"text-align":"center"}},C={style:{"text-align":"left"}},L=t("code",null,"链表",-1),V=t("code",null,"分治",-1),j=t("code",null,"堆（优先队列）",-1),B=t("code",null,"1+",-1),A={style:{"text-align":"left"}},O=t("td",{style:{"text-align":"center"}},"204",-1),R={style:{"text-align":"left"}},G={href:"https://leetcode.com/problems/count-primes",target:"_blank",rel:"noopener noreferrer"},H=t("td",{style:{"text-align":"center"}},null,-1),K={style:{"text-align":"left"}},S=t("code",null,"数组",-1),T=t("code",null,"数学",-1),U=t("code",null,"枚举",-1),z=t("code",null,"1+",-1),D={style:{"text-align":"left"}},F=t("td",{style:{"text-align":"center"}},"263",-1),J={style:{"text-align":"left"}},P={href:"https://leetcode.com/problems/ugly-number",target:"_blank",rel:"noopener noreferrer"},Q=t("td",{style:{"text-align":"center"}},null,-1),W={style:{"text-align":"left"}},X=t("code",null,"数学",-1),Y={style:{"text-align":"left"}},Z=t("td",{style:{"text-align":"center"}},"279",-1),$={style:{"text-align":"left"}},tt={href:"https://leetcode.com/problems/perfect-squares",target:"_blank",rel:"noopener noreferrer"},nt={style:{"text-align":"center"}},et={style:{"text-align":"left"}},st=t("code",null,"广度优先搜索",-1),at=t("code",null,"数学",-1),ot=t("code",null,"动态规划",-1),lt={style:{"text-align":"left"}},ct=t("td",{style:{"text-align":"center"}},"313",-1),pt={style:{"text-align":"left"}},it={href:"https://leetcode.com/problems/super-ugly-number",target:"_blank",rel:"noopener noreferrer"},dt=t("td",{style:{"text-align":"center"}},null,-1),rt={style:{"text-align":"left"}},ut=t("code",null,"数组",-1),_t=t("code",null,"数学",-1),ht=t("code",null,"动态规划",-1),mt={style:{"text-align":"left"}},kt=t("td",{style:{"text-align":"center"}},"1201",-1),gt={style:{"text-align":"left"}},ft={href:"https://leetcode.com/problems/ugly-number-iii",target:"_blank",rel:"noopener noreferrer"},bt=t("td",{style:{"text-align":"center"}},null,-1),vt={style:{"text-align":"left"}},yt=t("code",null,"数学",-1),xt=t("code",null,"二分查找",-1),wt=t("code",null,"组合数学",-1),qt=t("code",null,"1+",-1),It={style:{"text-align":"left"}};function Et(Mt,Nt){const o=c("ExternalLinkIcon"),l=c("font"),a=c("RouterLink");return i(),d("div",null,[t("h1",h,[m,e(),t("a",k,[e("264. 丑数 II"),n(o)])]),t("p",null,[e("🟠 "),n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1}),e("  🔖  "),n(a,{to:"/leetcode/outline/tag/hash-table.html"},{default:s(()=>[g]),_:1}),e(),n(a,{to:"/leetcode/outline/tag/math.html"},{default:s(()=>[f]),_:1}),e(),n(a,{to:"/leetcode/outline/tag/dynamic-programming.html"},{default:s(()=>[b]),_:1}),e(),n(a,{to:"/leetcode/outline/tag/heap-priority-queue.html"},{default:s(()=>[v]),_:1}),e("  🔗 "),t("a",y,[x,n(o)])]),w,r(" prettier-ignore "),t("table",null,[q,t("tbody",null,[t("tr",null,[I,t("td",E,[t("a",M,[e("合并 K 个升序链表"),n(o)])]),t("td",N,[n(a,{to:"/leetcode/problem/0023.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",C,[n(a,{to:"/leetcode/outline/tag/linked-list.html"},{default:s(()=>[L]),_:1}),e(),n(a,{to:"/leetcode/outline/tag/divide-and-conquer.html"},{default:s(()=>[V]),_:1}),e(),n(a,{to:"/leetcode/outline/tag/heap-priority-queue.html"},{default:s(()=>[j]),_:1}),e(),B]),t("td",A,[n(l,{color:"#ff334b"},{default:s(()=>[e("Hard")]),_:1})])]),t("tr",null,[O,t("td",R,[t("a",G,[e("计数质数"),n(o)])]),H,t("td",K,[n(a,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[S]),_:1}),e(),n(a,{to:"/leetcode/outline/tag/math.html"},{default:s(()=>[T]),_:1}),e(),n(a,{to:"/leetcode/outline/tag/enumeration.html"},{default:s(()=>[U]),_:1}),e(),z]),t("td",D,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[F,t("td",J,[t("a",P,[e("丑数"),n(o)])]),Q,t("td",W,[n(a,{to:"/leetcode/outline/tag/math.html"},{default:s(()=>[X]),_:1})]),t("td",Y,[n(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1})])]),t("tr",null,[Z,t("td",$,[t("a",tt,[e("完全平方数"),n(o)])]),t("td",nt,[n(a,{to:"/leetcode/problem/0279.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",et,[n(a,{to:"/leetcode/outline/tag/breadth-first-search.html"},{default:s(()=>[st]),_:1}),e(),n(a,{to:"/leetcode/outline/tag/math.html"},{default:s(()=>[at]),_:1}),e(),n(a,{to:"/leetcode/outline/tag/dynamic-programming.html"},{default:s(()=>[ot]),_:1})]),t("td",lt,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[ct,t("td",pt,[t("a",it,[e("超级丑数"),n(o)])]),dt,t("td",rt,[n(a,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[ut]),_:1}),e(),n(a,{to:"/leetcode/outline/tag/math.html"},{default:s(()=>[_t]),_:1}),e(),n(a,{to:"/leetcode/outline/tag/dynamic-programming.html"},{default:s(()=>[ht]),_:1})]),t("td",mt,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[kt,t("td",gt,[t("a",ft,[e("丑数 III"),n(o)])]),bt,t("td",vt,[n(a,{to:"/leetcode/outline/tag/math.html"},{default:s(()=>[yt]),_:1}),e(),n(a,{to:"/leetcode/outline/tag/binary-search.html"},{default:s(()=>[xt]),_:1}),e(),n(a,{to:"/leetcode/outline/tag/combinatorics.html"},{default:s(()=>[wt]),_:1}),e(),qt]),t("td",It,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])])])])])}const Lt=p(_,[["render",Et],["__file","0264.html.vue"]]);export{Lt as default};
