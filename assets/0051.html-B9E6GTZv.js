import{_ as l,r as c,o as i,c as u,a as n,b as s,d as a,w as t,f as r,e as d}from"./app-mvY9N9Pc.js";const k={},m={id:"_51-n-皇后",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#_51-n-皇后","aria-hidden":"true"},"#",-1),h={href:"https://leetcode.com/problems/n-queens",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"数组",-1),_=n("code",null,"回溯",-1),f={href:"https://leetcode.com/problems/n-queens",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"LeetCode",-1),q=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>The <strong>n-queens</strong> puzzle is the problem of placing <code>n</code> queens on an <code>n x n</code> chessboard such that no two queens attack each other.</p><p>Given an integer <code>n</code>, return <em>all distinct solutions to the <strong>n-queens puzzle</strong></em>. You may return the answer in <strong>any order</strong>.</p><p>Each solution contains a distinct board configuration of the n-queens&#39; placement, where <code>&#39;Q&#39;</code> and <code>&#39;.&#39;</code> both indicate a queen and an empty space, respectively.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/11/13/queens.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: n = 4</p><p>Output: [[&quot;.Q..&quot;,&quot;...Q&quot;,&quot;Q...&quot;,&quot;..Q.&quot;],[&quot;..Q.&quot;,&quot;Q...&quot;,&quot;...Q&quot;,&quot;.Q..&quot;]]</p><p>Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 1</p><p>Output: [[&quot;Q&quot;]]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 9</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。</p><p><strong>n 皇后问题</strong> 研究的是如何将 <code>n</code> 个皇后放置在 <code>n×n</code> 的棋盘上，并且使皇后彼此之间不能相互攻击。</p><p>给你一个整数 <code>n</code> ，返回所有不同的 <strong>n 皇后问题</strong> 的解决方案。</p><p>每一种解法包含一个不同的 <strong>n 皇后问题</strong> 的棋子放置方案，该方案中 <code>&#39;Q&#39;</code> 和 <code>&#39;.&#39;</code> 分别代表了皇后和空位。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以采用递归和回溯来解决，通过检查每一行、每一列和每一对角线上是否存在其他皇后，来保证 N 皇后的问题得到解。最后，将符合条件的结果进行格式化，返回最终的答案。</p><ol><li><p>使用一个一维数组 <code>queens</code> 来表示每一行皇后所在的列位置。其中 <code>queens[i]</code> 表示第 <code>i</code> 行的皇后所在的列。</p></li><li><p>使用回溯法，逐行放置皇后。在每一行，尝试将皇后放在该行的每一列，检查在当前位置 <code>(row, col)</code> 放置皇后是否满足不互相攻击的条件：</p><ul><li><code>queens[i] === col</code>：检查同一列上是否有其他皇后；</li><li><code>queens[i] - i === col - row</code>：通过检查横坐标减去纵坐标的差是否相等，检查在左上至右下的对角线上是否有其他皇后；</li><li><code>queens[i] + i === col + row</code>：通过检查横坐标加上纵坐标的和是否相等，检查在左下至右上的对角线上是否有其他皇后；</li><li>如果以上三个条件都不满足，说明当前位置是安全的，找到了一个合适的位置。</li></ul></li><li><p>如果找到一个合适的位置，将该位置的列坐标存入 <code>queens</code> 数组中，并递归调用下一行的放置皇后操作。</p></li><li><p>如果在某一行无法找到合适的位置，则需要回溯，即回到上一行，尝试在上一行的其他列放置皇后，继续递归搜索。</p></li><li><p>当成功放置 N 个皇后时，将当前 <code>queens</code> 数组的拷贝加入结果数组中。</p></li><li><p>最后，将符合条件的结果进行格式化，返回最终的答案。</p></li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">solveNQueens</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> queens <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">valid</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">row<span class="token punctuation">,</span> col</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> row<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>
				<span class="token comment">// 检查同一列上是否有其他皇后</span>
				queens<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> col <span class="token operator">||</span>
				<span class="token comment">// 检查在左上至右下的对角线上是否有其他皇后</span>
				queens<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> i <span class="token operator">==</span> col <span class="token operator">-</span> row <span class="token operator">||</span>
				<span class="token comment">// 检查在左下至右上的对角线上是否有其他皇后</span>
				queens<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> i <span class="token operator">==</span> col <span class="token operator">+</span> row
			<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">backtrack</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">row</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>row <span class="token operator">==</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 找到一个成功解</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>queens<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> col <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> col <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> col<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">valid</span><span class="token punctuation">(</span>row<span class="token punctuation">,</span> col<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 在当前位置放置皇后</span>
				queens<span class="token punctuation">[</span>row<span class="token punctuation">]</span> <span class="token operator">=</span> col<span class="token punctuation">;</span>
				<span class="token comment">// 继续尝试下一行</span>
				<span class="token function">backtrack</span><span class="token punctuation">(</span>row <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token comment">// 回溯，清空当前行状态</span>
				queens<span class="token punctuation">[</span>row<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token function">backtrack</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
		arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">col</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">&#39;.&#39;</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span>col<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;Q&#39;</span> <span class="token operator">+</span> <span class="token string">&#39;.&#39;</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span>n <span class="token operator">-</span> col <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,22),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),w=n("td",{style:{"text-align":"center"}},"52",-1),x={style:{"text-align":"left"}},Q={href:"https://leetcode.com/problems/n-queens-ii",target:"_blank",rel:"noopener noreferrer"},N={style:{"text-align":"center"}},z={href:"https://2xiao.github.io/leetcode-js/leetcode/problem/0052",target:"_blank",rel:"noopener noreferrer"},E={style:{"text-align":"left"}},I=n("code",null,"回溯",-1),j={style:{"text-align":"left"}},C=n("td",{style:{"text-align":"center"}},"1001",-1),L={style:{"text-align":"left"}},V={href:"https://leetcode.com/problems/grid-illumination",target:"_blank",rel:"noopener noreferrer"},B=n("td",{style:{"text-align":"center"}},null,-1),H={style:{"text-align":"left"}},T=n("code",null,"数组",-1),O=n("code",null,"哈希表",-1),R={style:{"text-align":"left"}};function A(G,S){const e=c("ExternalLinkIcon"),p=c("font"),o=c("RouterLink");return i(),u("div",null,[n("h1",m,[v,s(),n("a",h,[s("51. N 皇后"),a(e)])]),n("p",null,[s("🔴 "),a(p,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1}),s("  🔖  "),a(o,{to:"/leetcode/outline/tag/array.html"},{default:t(()=>[b]),_:1}),s(),a(o,{to:"/leetcode/outline/tag/backtracking.html"},{default:t(()=>[_]),_:1}),s("  🔗 "),n("a",f,[g,a(e)])]),q,r(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[w,n("td",x,[n("a",Q,[s("N 皇后 II"),a(e)])]),n("td",N,[n("a",z,[s("[✓]"),a(e)])]),n("td",E,[a(o,{to:"/leetcode/outline/tag/backtracking.html"},{default:t(()=>[I]),_:1})]),n("td",j,[a(p,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1})])]),n("tr",null,[C,n("td",L,[n("a",V,[s("网格照明"),a(e)])]),B,n("td",H,[a(o,{to:"/leetcode/outline/tag/array.html"},{default:t(()=>[T]),_:1}),s(),a(o,{to:"/leetcode/outline/tag/hash-table.html"},{default:t(()=>[O]),_:1})]),n("td",R,[a(p,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1})])])])])])}const D=l(k,[["render",A],["__file","0051.html.vue"]]);export{D as default};
