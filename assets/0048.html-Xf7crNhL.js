import{_ as c,r as p,o as i,c as r,a as n,b as s,d as a,w as t,f as u,e as d}from"./app-mvY9N9Pc.js";const k={},m={id:"_48-旋转图像",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#_48-旋转图像","aria-hidden":"true"},"#",-1),h={href:"https://leetcode.com/problems/rotate-image",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"数组",-1),_=n("code",null,"数学",-1),g=n("code",null,"矩阵",-1),f={href:"https://leetcode.com/problems/rotate-image",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),y=n("h2",{id:"题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),s(" 题目")],-1),w=n("p",null,[s("You are given an "),n("code",null,"n x n"),s(" 2D "),n("code",null,"matrix"),s(" representing an image, rotate the image by "),n("strong",null,"90"),s(" degrees (clockwise).")],-1),j={href:"https://en.wikipedia.org/wiki/In-place_algorithm",target:"_blank",rel:"noopener noreferrer"},E=n("strong",null,"in-place",-1),N=n("strong",null,"DO NOT",-1),C=d(`<p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/08/28/mat1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]</p><p>Output: [[7,4,1],[8,5,2],[9,6,3]]</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/08/28/mat2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]</p><p>Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == matrix.length == matrix[i].length</code></li><li><code>1 &lt;= n &lt;= 20</code></li><li><code>-1000 &lt;= matrix[i][j] &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个 n × n 的二维矩阵表示一个图像。将图像顺时针旋转 90 度。说明：你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>给出一个二维数组，要求顺时针旋转 90 度，这一题比较简单；</li><li>这里给出 2 种旋转方法的实现，顺时针旋转和逆时针旋转；</li><li>顺时针旋转：先将二维数组上下翻转，然后将二维数组沿对角线交换；</li><li>逆时针旋转：先将二维数组左右翻转，然后将二维数组沿对角线交换；</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * clockwise rotate 顺时针旋转
 * first reverse up to down, then swap the symmetry
 * 1 2 3     7 8 9     7 4 1
 * 4 5 6  =&gt; 4 5 6  =&gt; 8 5 2
 * 7 8 9     1 2 3     9 6 3
 */</span>

<span class="token comment">/*
 * anticlockwise rotate 逆时针旋转
 * first reverse left to right, then swap the symmetry
 * 1 2 3     3 2 1     3 6 9
 * 4 5 6  =&gt; 6 5 4  =&gt; 2 5 8
 * 7 8 9     9 8 7     1 4 7
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">matrix</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span> Do not return anything, modify matrix in-place instead.
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">rotate</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">matrix</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> len <span class="token operator">=</span> matrix<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token comment">// 上下翻转</span>
	<span class="token comment">// 此处要注意：只能针对一半的行数翻转</span>
	<span class="token comment">// 否则翻转两遍等于没变</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> temp <span class="token operator">=</span> matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
			matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> matrix<span class="token punctuation">[</span>len <span class="token operator">-</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
			matrix<span class="token punctuation">[</span>len <span class="token operator">-</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 沿对角线翻转</span>
	<span class="token comment">// 此处要注意：只能对左下角或者右上角的一半数据做翻转</span>
	<span class="token comment">// 否则翻转两遍等于没变</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> temp <span class="token operator">=</span> matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
			matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> matrix<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
			matrix<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,16),D=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),I=n("td",{style:{"text-align":"center"}},"1886",-1),L={style:{"text-align":"left"}},V={href:"https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation",target:"_blank",rel:"noopener noreferrer"},q=n("td",{style:{"text-align":"center"}},null,-1),O={style:{"text-align":"left"}},B=n("code",null,"数组",-1),z=n("code",null,"矩阵",-1),R={style:{"text-align":"left"}};function T(Y,M){const o=p("ExternalLinkIcon"),l=p("font"),e=p("RouterLink");return i(),r("div",null,[n("h1",m,[v,s(),n("a",h,[s("48. 旋转图像"),a(o)])]),n("p",null,[s("🟠 "),a(l,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/leetcode/outline/tag/array.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/leetcode/outline/tag/math.html"},{default:t(()=>[_]),_:1}),s(),a(e,{to:"/leetcode/outline/tag/matrix.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",f,[x,a(o)])]),y,w,n("p",null,[s("You have to rotate the image "),n("a",j,[E,a(o)]),s(", which means you have to modify the input 2D matrix directly. "),N,s(" allocate another 2D matrix and do the rotation.")]),C,u(" prettier-ignore "),n("table",null,[D,n("tbody",null,[n("tr",null,[I,n("td",L,[n("a",V,[s("判断矩阵经轮转后是否一致"),a(o)])]),q,n("td",O,[a(e,{to:"/leetcode/outline/tag/array.html"},{default:t(()=>[B]),_:1}),s(),a(e,{to:"/leetcode/outline/tag/matrix.html"},{default:t(()=>[z]),_:1})]),n("td",R,[a(l,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1})])])])])])}const A=c(k,[["render",T],["__file","0048.html.vue"]]);export{A as default};
