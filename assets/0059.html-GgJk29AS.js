import{_ as c,r as p,o as i,c as r,a as n,b as s,d as t,w as a,f as u,e as d}from"./app-mvY9N9Pc.js";const k={},m={id:"_59-螺旋矩阵-ii",tabindex:"-1"},_=n("a",{class:"header-anchor",href:"#_59-螺旋矩阵-ii","aria-hidden":"true"},"#",-1),h={href:"https://leetcode.com/problems/spiral-matrix-ii",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"数组",-1),b=n("code",null,"矩阵",-1),f=n("code",null,"模拟",-1),g={href:"https://leetcode.com/problems/spiral-matrix-ii",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a positive integer <code>n</code>, generate an <code>n x n</code> <code>matrix</code> filled with elements from <code>1</code> to <code>n2</code> in spiral order.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/11/13/spiraln.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: n = 3</p><p>Output: [[1,2,3],[8,9,4],[7,6,5]]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 1</p><p>Output: [[1]]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 20</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个正整数 n，生成一个包含 1 到 n^2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>给出一个数组 n，要求输出一个 n * n 的二维数组，里面元素是 1 - n*n，且数组排列顺序是螺旋排列的；</li><li>这一题是第 54 题的加强版，没有需要注意的特殊情况，直接模拟即可；</li><li>用四个指针控制每次上、下、左、右的边，然后按照逆时针的顺序从边界上依次访问元素；</li><li>当访问完当前边界之后，要更新一下边界位置，缩小范围，方便下一轮进行访问；</li><li>注意初始化 <code>res</code> 时不能直接 <code>new Array(n).fill([])</code>，因为 JS 中将数组作为参数时，传递的是引用，而不是 <code>value</code>；</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">generateMatrix</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> right <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> top <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> bottom <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span>count <span class="token operator">&lt;</span> n <span class="token operator">*</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 在上边界向右扫描</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> left<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> right<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			count<span class="token operator">++</span><span class="token punctuation">;</span>
			res<span class="token punctuation">[</span>top<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> count<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 缩小上边界</span>
		top<span class="token operator">++</span><span class="token punctuation">;</span>

		<span class="token comment">// 在右边界向下扫描</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> top<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> bottom<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			count<span class="token operator">++</span><span class="token punctuation">;</span>
			res<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">=</span> count<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 缩小右边界</span>
		right<span class="token operator">--</span><span class="token punctuation">;</span>

		<span class="token comment">// 在下边界向左扫描</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> right<span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> left<span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			count<span class="token operator">++</span><span class="token punctuation">;</span>
			res<span class="token punctuation">[</span>bottom<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> count<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 缩小下边界</span>
		bottom<span class="token operator">--</span><span class="token punctuation">;</span>

		<span class="token comment">// 在左边界向上扫描</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> bottom<span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> top<span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			count<span class="token operator">++</span><span class="token punctuation">;</span>
			res<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">=</span> count<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 缩小左边界</span>
		left<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,16),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),I=n("td",{style:{"text-align":"center"}},"54",-1),V={style:{"text-align":"left"}},j={href:"https://leetcode.com/problems/spiral-matrix",target:"_blank",rel:"noopener noreferrer"},C={style:{"text-align":"center"}},E={href:"https://2xiao.github.io/leetcode-js/leetcode/problem/0054",target:"_blank",rel:"noopener noreferrer"},L={style:{"text-align":"left"}},M=n("code",null,"数组",-1),N=n("code",null,"矩阵",-1),q=n("code",null,"模拟",-1),A={style:{"text-align":"left"}},B=n("td",{style:{"text-align":"center"}},"885",-1),O={style:{"text-align":"left"}},R={href:"https://leetcode.com/problems/spiral-matrix-iii",target:"_blank",rel:"noopener noreferrer"},S=n("td",{style:{"text-align":"center"}},null,-1),z={style:{"text-align":"left"}},G=n("code",null,"数组",-1),J=n("code",null,"矩阵",-1),T=n("code",null,"模拟",-1),D={style:{"text-align":"left"}},F=n("td",{style:{"text-align":"center"}},"2326",-1),H={style:{"text-align":"left"}},K={href:"https://leetcode.com/problems/spiral-matrix-iv",target:"_blank",rel:"noopener noreferrer"},P=n("td",{style:{"text-align":"center"}},null,-1),Q={style:{"text-align":"left"}},U=n("code",null,"数组",-1),W=n("code",null,"链表",-1),X=n("code",null,"矩阵",-1),Y=n("code",null,"1+",-1),Z={style:{"text-align":"left"}};function $(nn,sn){const o=p("ExternalLinkIcon"),l=p("font"),e=p("RouterLink");return i(),r("div",null,[n("h1",m,[_,s(),n("a",h,[s("59. 螺旋矩阵 II"),t(o)])]),n("p",null,[s("🟠 "),t(l,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(e,{to:"/leetcode/outline/tag/array.html"},{default:a(()=>[v]),_:1}),s(),t(e,{to:"/leetcode/outline/tag/matrix.html"},{default:a(()=>[b]),_:1}),s(),t(e,{to:"/leetcode/outline/tag/simulation.html"},{default:a(()=>[f]),_:1}),s("  🔗 "),n("a",g,[y,t(o)])]),x,u(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[I,n("td",V,[n("a",j,[s("螺旋矩阵"),t(o)])]),n("td",C,[n("a",E,[s("[✓]"),t(o)])]),n("td",L,[t(e,{to:"/leetcode/outline/tag/array.html"},{default:a(()=>[M]),_:1}),s(),t(e,{to:"/leetcode/outline/tag/matrix.html"},{default:a(()=>[N]),_:1}),s(),t(e,{to:"/leetcode/outline/tag/simulation.html"},{default:a(()=>[q]),_:1})]),n("td",A,[t(l,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1})])]),n("tr",null,[B,n("td",O,[n("a",R,[s("螺旋矩阵 III"),t(o)])]),S,n("td",z,[t(e,{to:"/leetcode/outline/tag/array.html"},{default:a(()=>[G]),_:1}),s(),t(e,{to:"/leetcode/outline/tag/matrix.html"},{default:a(()=>[J]),_:1}),s(),t(e,{to:"/leetcode/outline/tag/simulation.html"},{default:a(()=>[T]),_:1})]),n("td",D,[t(l,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1})])]),n("tr",null,[F,n("td",H,[n("a",K,[s("螺旋矩阵 IV"),t(o)])]),P,n("td",Q,[t(e,{to:"/leetcode/outline/tag/array.html"},{default:a(()=>[U]),_:1}),s(),t(e,{to:"/leetcode/outline/tag/linked-list.html"},{default:a(()=>[W]),_:1}),s(),t(e,{to:"/leetcode/outline/tag/matrix.html"},{default:a(()=>[X]),_:1}),s(),Y]),n("td",Z,[t(l,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1})])])])])])}const an=c(k,[["render",$],["__file","0059.html.vue"]]);export{an as default};
