import{_ as c,r as l,o as i,c as u,a as n,b as s,d as t,w as a,f as r,e as d}from"./app-mvY9N9Pc.js";const k={},m={id:"_994-腐烂的橘子",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#_994-腐烂的橘子","aria-hidden":"true"},"#",-1),g={href:"https://leetcode.com/problems/rotting-oranges",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"广度优先搜索",-1),v=n("code",null,"数组",-1),_=n("code",null,"矩阵",-1),f={href:"https://leetcode.com/problems/rotting-oranges",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an <code>m x n</code> <code>grid</code> where each cell can have one of three values:</p><ul><li><code>0</code> representing an empty cell,</li><li><code>1</code> representing a fresh orange, or</li><li><code>2</code> representing a rotten orange.</li></ul><p>Every minute, any fresh orange that is <strong>4-directionally adjacent</strong> to a rotten orange becomes rotten.</p><p>Return <em>the minimum number of minutes that must elapse until no cell has a fresh orange</em>. If <em>this is impossible, return</em> <code>-1</code>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2019/02/16/oranges.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: grid = [[2,1,1],[1,1,0],[0,1,1]]</p><p>Output: 4</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: grid = [[2,1,1],[0,1,1],[1,0,1]]</p><p>Output: -1</p><p>Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: grid = [[0,2]]</p><p>Output: 0</p><p>Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>m == grid.length</code></li><li><code>n == grid[i].length</code></li><li><code>1 &lt;= m, n &lt;= 10</code></li><li><code>grid[i][j]</code> is <code>0</code>, <code>1</code>, or <code>2</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>在给定的 <code>m x n</code> 网格 <code>grid</code> 中，每个单元格可以有以下三个值之一：</p><ul><li>值 <code>0</code> 代表空单元格；</li><li>值 <code>1</code> 代表新鲜橘子；</li><li>值 <code>2</code> 代表腐烂的橘子。</li></ul><p>每分钟，腐烂的橘子 <strong>周围 4 个方向上相邻</strong> 的新鲜橘子都会腐烂。</p><p>返回 <em>直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回 <code>-1</code></em> 。</p><p><strong>示例 1：</strong></p><p><strong>![](https://assets.leetcode-cn.com/aliyun-lc- upload/uploads/2019/02/16/oranges.png)</strong></p><blockquote><p><strong>输入：</strong> grid = [[2,1,1],[1,1,0],[0,1,1]]</p><p><strong>输出：</strong> 4</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> grid = [[2,1,1],[0,1,1],[1,0,1]]</p><p><strong>输出：</strong> -1</p><p><strong>解释：</strong> 左下角的橘子（第 2 行， 第 0 列）永远不会腐烂，因为腐烂只会发生在 4 个方向上。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> grid = [[0,2]]</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong> 因为 0 分钟时已经没有新鲜橘子了，所以答案就是 0 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>m == grid.length</code></li><li><code>n == grid[i].length</code></li><li><code>1 &lt;= m, n &lt;= 10</code></li><li><code>grid[i][j]</code> 仅为 <code>0</code>、<code>1</code> 或 <code>2</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用<strong>广度优先搜索 (BFS)</strong> 来解决这个问题，BFS 的特点是层次遍历，非常适合模拟这种扩散问题。</p><ol><li>初始化队列</li></ol><p>首先需要找到所有的腐烂橘子，并将它们的坐标存储在队列中。同时记录网格中新鲜橘子的数量 <code>freshCount</code>。</p><ol start="2"><li>扩散腐烂橘子</li></ol><p>每分钟从队列中取出当前腐烂橘子的坐标，并将其扩散到相邻的四个方向。如果相邻的橘子是新鲜的，腐烂橘子会让它变成腐烂的，并将其加入队列中，同时减少新鲜橘子的计数。</p><ol start="3"><li>检查是否成功腐烂所有橘子</li></ol><p>每次扩散完之后，检查是否还有新鲜橘子存在。如果所有新鲜橘子都被腐烂了，返回扩散所需的分钟数。如果有新鲜橘子无法被腐烂（即它们周围没有腐烂橘子），返回 <code>-1</code>。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(m * n)</code>，其中 <code>m</code> 和 <code>n</code> 分别是二维矩阵的长和宽，需要遍历整个矩阵以标记所有腐烂的橘子。</li><li><strong>空间复杂度</strong>: <code>O(m * n)</code>，最多需要在队列中存储 <code>m * n</code> 个橘子的坐标。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">grid</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">orangesRotting</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">grid</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> m <span class="token operator">=</span> grid<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
		n <span class="token operator">=</span> grid<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>

	<span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		freshCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token comment">// 遍历矩阵，找到所有坏橘子，并计算所有新鲜橘子的数量</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				freshCount<span class="token operator">++</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>i<span class="token punctuation">,</span> j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 如果没有新鲜橘子，返回 0</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>freshCount <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> minutes <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token comment">// 上、下、左、右</span>
	<span class="token keyword">const</span> dirc <span class="token operator">=</span> <span class="token punctuation">[</span>
		<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>
	<span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token comment">// BFS 遍历坏橘子的邻居</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> len <span class="token operator">=</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
			findFresh <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span> y<span class="token punctuation">]</span> <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>dx<span class="token punctuation">,</span> dy<span class="token punctuation">]</span> <span class="token keyword">of</span> dirc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">const</span> newX <span class="token operator">=</span> x <span class="token operator">+</span> dx<span class="token punctuation">;</span>
				<span class="token keyword">const</span> newY <span class="token operator">=</span> y <span class="token operator">+</span> dy<span class="token punctuation">;</span>

				<span class="token keyword">if</span> <span class="token punctuation">(</span>
					newX <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>
					newX <span class="token operator">&lt;</span> m <span class="token operator">&amp;&amp;</span>
					newY <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>
					newY <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span>
					grid<span class="token punctuation">[</span>newX<span class="token punctuation">]</span><span class="token punctuation">[</span>newY<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span>
				<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token comment">// 将新鲜橘子变坏</span>
					grid<span class="token punctuation">[</span>newX<span class="token punctuation">]</span><span class="token punctuation">[</span>newY<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
					freshCount<span class="token operator">--</span><span class="token punctuation">;</span>
					queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>newX<span class="token punctuation">,</span> newY<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					findFresh <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 如果有新鲜橘子变坏，minutes 加一</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>findFresh<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			minutes<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 如果依然有新鲜橘子，返回 -1</span>
	<span class="token keyword">return</span> freshCount <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">?</span> minutes <span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,41),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),q=n("td",{style:{"text-align":"center"}},"286",-1),j={style:{"text-align":"left"}},C={href:"https://leetcode.com/problems/walls-and-gates",target:"_blank",rel:"noopener noreferrer"},E=n("td",{style:{"text-align":"center"}},null,-1),Y={style:{"text-align":"left"}},B=n("code",null,"广度优先搜索",-1),F=n("code",null,"数组",-1),I=n("code",null,"矩阵",-1),X={style:{"text-align":"left"}},L=n("td",{style:{"text-align":"center"}},"419",-1),N={style:{"text-align":"left"}},O={href:"https://leetcode.com/problems/battleships-in-a-board",target:"_blank",rel:"noopener noreferrer"},S=n("td",{style:{"text-align":"center"}},null,-1),V={style:{"text-align":"left"}},M=n("code",null,"深度优先搜索",-1),R=n("code",null,"数组",-1),T=n("code",null,"矩阵",-1),z={style:{"text-align":"left"}},H=n("td",{style:{"text-align":"center"}},"2101",-1),A={style:{"text-align":"left"}},D={href:"https://leetcode.com/problems/detonate-the-maximum-bombs",target:"_blank",rel:"noopener noreferrer"},G=n("td",{style:{"text-align":"center"}},null,-1),J={style:{"text-align":"left"}},K=n("code",null,"深度优先搜索",-1),P=n("code",null,"广度优先搜索",-1),Q=n("code",null,"图",-1),U=n("code",null,"3+",-1),W={style:{"text-align":"left"}},Z=n("td",{style:{"text-align":"center"}},"2258",-1),$={style:{"text-align":"left"}},nn={href:"https://leetcode.com/problems/escape-the-spreading-fire",target:"_blank",rel:"noopener noreferrer"},sn=n("td",{style:{"text-align":"center"}},null,-1),tn={style:{"text-align":"left"}},an=n("code",null,"广度优先搜索",-1),en=n("code",null,"数组",-1),on=n("code",null,"二分查找",-1),pn=n("code",null,"1+",-1),ln={style:{"text-align":"left"}};function cn(un,rn){const o=l("ExternalLinkIcon"),p=l("font"),e=l("RouterLink");return i(),u("div",null,[n("h1",m,[h,s(),n("a",g,[s("994. 腐烂的橘子"),t(o)])]),n("p",null,[s("🟠 "),t(p,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(e,{to:"/leetcode/outline/tag/breadth-first-search.html"},{default:a(()=>[b]),_:1}),s(),t(e,{to:"/leetcode/outline/tag/array.html"},{default:a(()=>[v]),_:1}),s(),t(e,{to:"/leetcode/outline/tag/matrix.html"},{default:a(()=>[_]),_:1}),s("  🔗 "),n("a",f,[y,t(o)])]),x,r(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[q,n("td",j,[n("a",C,[s("墙与门"),t(o)])]),E,n("td",Y,[t(e,{to:"/leetcode/outline/tag/breadth-first-search.html"},{default:a(()=>[B]),_:1}),s(),t(e,{to:"/leetcode/outline/tag/array.html"},{default:a(()=>[F]),_:1}),s(),t(e,{to:"/leetcode/outline/tag/matrix.html"},{default:a(()=>[I]),_:1})]),n("td",X,[t(p,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1})])]),n("tr",null,[L,n("td",N,[n("a",O,[s("棋盘上的战舰"),t(o)])]),S,n("td",V,[t(e,{to:"/leetcode/outline/tag/depth-first-search.html"},{default:a(()=>[M]),_:1}),s(),t(e,{to:"/leetcode/outline/tag/array.html"},{default:a(()=>[R]),_:1}),s(),t(e,{to:"/leetcode/outline/tag/matrix.html"},{default:a(()=>[T]),_:1})]),n("td",z,[t(p,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1})])]),n("tr",null,[H,n("td",A,[n("a",D,[s("引爆最多的炸弹"),t(o)])]),G,n("td",J,[t(e,{to:"/leetcode/outline/tag/depth-first-search.html"},{default:a(()=>[K]),_:1}),s(),t(e,{to:"/leetcode/outline/tag/breadth-first-search.html"},{default:a(()=>[P]),_:1}),s(),t(e,{to:"/leetcode/outline/tag/graph.html"},{default:a(()=>[Q]),_:1}),s(),U]),n("td",W,[t(p,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1})])]),n("tr",null,[Z,n("td",$,[n("a",nn,[s("逃离火灾"),t(o)])]),sn,n("td",tn,[t(e,{to:"/leetcode/outline/tag/breadth-first-search.html"},{default:a(()=>[an]),_:1}),s(),t(e,{to:"/leetcode/outline/tag/array.html"},{default:a(()=>[en]),_:1}),s(),t(e,{to:"/leetcode/outline/tag/binary-search.html"},{default:a(()=>[on]),_:1}),s(),pn]),n("td",ln,[t(p,{color:"#ff334b"},{default:a(()=>[s("Hard")]),_:1})])])])])])}const kn=c(k,[["render",cn],["__file","0994.html.vue"]]);export{kn as default};
