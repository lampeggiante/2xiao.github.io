import{_ as l,r as e,o as u,c as i,a as n,b as s,d as a,w as t,e as r}from"./app-GnK0vSxb.js";const k={},d={id:"剑指-offer-47-礼物的最大价值",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#剑指-offer-47-礼物的最大价值","aria-hidden":"true"},"#",-1),v={href:"https://leetcode.cn/problems/li-wu-de-zui-da-jie-zhi-lcof",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"数组",-1),f=n("code",null,"动态规划",-1),h=n("code",null,"矩阵",-1),_={href:"https://leetcode.cn/problems/li-wu-de-zui-da-jie-zhi-lcof",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"LeetCode",-1),w=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>现有一个记作二维矩阵 <code>frame</code> 的珠宝架，其中 <code>frame[i][j]</code> 为该位置珠宝的价值。拿取珠宝的规则为：</p><ul><li>只能从架子的左上角开始拿珠宝</li><li>每次可以移动到右侧或下侧的相邻位置</li><li>到达珠宝架子的右下角时，停止拿取</li></ul><p>注意：珠宝的价值都是大于 <code>0</code> 的。除非这个架子上没有任何珠宝，比如 <code>frame = [[0]]</code>。</p><p><strong>示例 1:</strong></p><blockquote><p>输入: frame = [[1,3,1],[1,5,1],[4,2,1]]</p><p>输出: 12</p><p>解释: 路径 1→3→5→2→1 可以拿到最高价值的珠宝</p></blockquote><p><strong>提示：</strong></p><ul><li><code>0 &lt; frame.length &lt;= 200</code></li><li><code>0 &lt; frame[0].length &lt;= 200</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这个问题可以使用动态规划来解决。</p><p>可以创建一个与原始矩阵大小相同的二维数组，用于存储到达每个位置的最大价值。</p><p>对于每个位置 <code>(i, j)</code>，最大价值可以通过从左边或上边的相邻位置移动过来，并加上当前位置的价值得到：</p><p><code>dp[i][j] = max(dp[i-1][j], dp[i][j-1]) + frame[i][j]</code></p><p>最后，右下角的元素即为到达右下角的最大价值。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">frame</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">jewelleryValue</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">frame</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> m <span class="token operator">=</span> frame<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> n <span class="token operator">=</span> frame<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>

	<span class="token comment">// 创建一个二维数组用于存储最大价值</span>
	<span class="token keyword">let</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 初始化第一行和第一列</span>
	dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> frame<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> frame<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> frame<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 填充其余部分</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">+</span> frame<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 返回右下角的最大价值</span>
	<span class="token keyword">return</span> dp<span class="token punctuation">[</span>m <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function y(g,x){const o=e("ExternalLinkIcon"),c=e("font"),p=e("RouterLink");return u(),i("div",null,[n("h1",d,[m,s(),n("a",v,[s("剑指 Offer 47. 礼物的最大价值"),a(o)])]),n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(p,{to:"/leetcode/outline/tag/array.html"},{default:t(()=>[b]),_:1}),s(),a(p,{to:"/leetcode/outline/tag/dynamic-programming.html"},{default:t(()=>[f]),_:1}),s(),a(p,{to:"/leetcode/outline/tag/matrix.html"},{default:t(()=>[h]),_:1}),s("  🔗 "),n("a",_,[j,a(o)])]),w])}const L=l(k,[["render",y],["__file","jz_offer_47_1.html.vue"]]);export{L as default};
