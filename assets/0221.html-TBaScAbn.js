import{_ as r,r as l,o as d,c as k,a as n,b as t,d as s,w as a,f as m,e as h}from"./app-5VBZs9Uu.js";const _={},b={id:"_221-最大正方形",tabindex:"-1"},f=n("a",{class:"header-anchor",href:"#_221-最大正方形","aria-hidden":"true"},"#",-1),g={href:"https://leetcode.com/problems/maximal-square",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"数组",-1),y=n("code",null,"动态规划",-1),x=n("code",null,"矩阵",-1),j={href:"https://leetcode.com/problems/maximal-square",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"LeetCode",-1),w=h('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an <code>m x n</code> binary <code>matrix</code> filled with <code>0</code>&#39;s and <code>1</code>&#39;s, <em>find the largest square containing only</em> <code>1</code>&#39;s <em>and return its area</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/11/26/max1grid.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: matrix = [[&quot;1&quot;,&quot;0&quot;,&quot;1&quot;,&quot;0&quot;,&quot;0&quot;],[&quot;1&quot;,&quot;0&quot;,&quot;1&quot;,&quot;1&quot;,&quot;1&quot;],[&quot;1&quot;,&quot;1&quot;,&quot;1&quot;,&quot;1&quot;,&quot;1&quot;],[&quot;1&quot;,&quot;0&quot;,&quot;0&quot;,&quot;1&quot;,&quot;0&quot;]]</p><p>Output: 4</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/11/26/max2grid.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: matrix = [[&quot;0&quot;,&quot;1&quot;],[&quot;1&quot;,&quot;0&quot;]]</p><p>Output: 1</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: matrix = [[&quot;0&quot;]]</p><p>Output: 0</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>m == matrix.length</code></li><li><code>n == matrix[i].length</code></li><li><code>1 &lt;= m, n &lt;= 300</code></li><li><code>matrix[i][j]</code> is <code>&#39;0&#39;</code> or <code>&#39;1&#39;</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>在一个由 <code>&#39;0&#39;</code> 和 <code>&#39;1&#39;</code> 组成的二维矩阵内，找到只包含 <code>&#39;1&#39;</code> 的最大正方形，并返回其面积。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-动态规划" tabindex="-1"><a class="header-anchor" href="#思路一-动态规划" aria-hidden="true">#</a> 思路一：动态规划</h3><ol><li><p><strong>动态规划</strong>：定义一个二维数组 <code>dp</code>，其中 <code>dp[i][j]</code> 表示以矩阵中第 <code>i</code> 行、第 <code>j</code> 列为右下角的正方形的最大边长。</p></li><li><p><strong>状态转移方程</strong>：对于每个位置 <code>(i, j)</code>，如果当前位置为 &#39;1&#39;，则 <code>dp[i][j]</code> 的值取决于其左、上和左上三个相邻位置的最小值，因为只有这三个位置都为 &#39;1&#39;，当前位置才能构成正方形。状态转移方程为：<code>dp[i][j] = min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1</code></p></li><li><p><strong>初始化</strong>：初始化第一行和第一列，因为这些位置没有左、上和左上相邻位置。</p></li><li><p><strong>遍历计算</strong>：从矩阵的第二行和第二列开始遍历，根据状态转移方程计算每个位置的 <code>dp</code> 值。</p></li><li><p><strong>结果</strong>：<code>dp</code> 数组中的最大值即为最大正方形的边长，返回其面积。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(m * n)</code>，遍历整个矩阵。</li><li><strong>空间复杂度</strong>: <code>O(m * n)</code>，使用了一个二维数组来存储中间状态。可以优化为 <code>O(n)</code>。</li></ul><hr><h3 id="思路二-动态规划-状态压缩" tabindex="-1"><a class="header-anchor" href="#思路二-动态规划-状态压缩" aria-hidden="true">#</a> 思路二：动态规划-状态压缩</h3><p>可以进行空间优化，将二维的 dp 数组优化为一维。因为在计算 <code>dp[i][j]</code> 的时候，只用到了 <code>dp[i-1][j]</code>，<code>dp[i][j-1]</code>，和 <code>dp[i-1][j-1]</code> 这三个位置的值，所以只需要维护当前行和上一行的状态即可。</p><p>动态规划状态转移方程变为：<code>dp[j] = min(dp[j], dp[j-1], prev) + 1</code> ，其中：</p><ul><li><code>dp[j]</code> 对应 <code>dp[i - 1][j]</code>，表示上边的格子的最大边长（此时 <code>dp[j]</code> 还未更新，仍保留着上一行的数据）；</li><li><code>dp[j-1]</code> 对应 <code>dp[i][j - 1]</code>，表示左边的格子的最大边长（此时 <code>dp[j - 1]</code> 已经被更新，储存着本行最新的数据）；</li><li><code>prev</code> 对应 <code>dp[i - 1][j - 1]</code>，表示左上边的格子的最大边长（在每次更新 <code>dp[j]</code> 之前，我们会保存 <code>dp[j]</code> 的原始值到 <code>temp</code>，然后在下一轮迭代中作为 <code>prev</code> 使用）；</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',25),M=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("character"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"matrix"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"maximalSquare"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"matrix"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" res "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" m "),n("span",{class:"token operator"},"="),t(" matrix"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" n "),n("span",{class:"token operator"},"="),t(" matrix"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" dp "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),t("m"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),t("n"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token comment"},"// 动态规划遍历"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(" m"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" j "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" j "),n("span",{class:"token operator"},"<"),t(" n"),n("span",{class:"token punctuation"},";"),t(" j"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("matrix"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"=="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
				`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"=="),t(),n("span",{class:"token number"},"0"),t(),n("span",{class:"token operator"},"||"),t(" j "),n("span",{class:"token operator"},"=="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
					`),n("span",{class:"token comment"},"// base case"),t(`
					dp`),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
				`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
					dp`),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),t("dp"),n("span",{class:"token punctuation"},"["),t("i "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(" dp"),n("span",{class:"token punctuation"},"["),t("i "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(" dp"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
				`),n("span",{class:"token punctuation"},"}"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(`
			`),n("span",{class:"token comment"},"// 更新最大正方形的边长"),t(`
			res `),n("span",{class:"token operator"},"="),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),t("res"),n("span",{class:"token punctuation"},","),t(" dp"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`

	`),n("span",{class:"token comment"},"// 返回最大正方形的面积"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" res "),n("span",{class:"token operator"},"*"),t(" res"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("character"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"matrix"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"maximalSquare"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"matrix"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" res "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" m "),n("span",{class:"token operator"},"="),t(" matrix"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" n "),n("span",{class:"token operator"},"="),t(" matrix"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" dp "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),t("n"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" prev "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token comment"},"// 动态规划遍历"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(" m"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" j "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" j "),n("span",{class:"token operator"},"<"),t(" n"),n("span",{class:"token punctuation"},";"),t(" j"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token comment"},"// 保留左上角的原始值，留到下一轮作为 prev 使用"),t(`
			`),n("span",{class:"token keyword"},"let"),t(" temp "),n("span",{class:"token operator"},"="),t(" dp"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("matrix"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"=="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
				`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"=="),t(),n("span",{class:"token number"},"0"),t(),n("span",{class:"token operator"},"||"),t(" j "),n("span",{class:"token operator"},"=="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
					`),n("span",{class:"token comment"},"// base case"),t(`
					dp`),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
				`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
					dp`),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),t("dp"),n("span",{class:"token punctuation"},"["),t("j "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(" dp"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(" prev"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
				`),n("span",{class:"token punctuation"},"}"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
				dp`),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(`
			`),n("span",{class:"token comment"},"// prev 在下一轮迭代中使用，相当于 dp[i - 1][j - 1]"),t(`
			prev `),n("span",{class:"token operator"},"="),t(" temp"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token comment"},"// 更新最大正方形的边长"),t(`
			res `),n("span",{class:"token operator"},"="),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),t("res"),n("span",{class:"token punctuation"},","),t(" dp"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`

	`),n("span",{class:"token comment"},"// 返回最大正方形的面积"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" res "),n("span",{class:"token operator"},"*"),t(" res"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),E=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),O=n("td",{style:{"text-align":"center"}},"85",-1),I={style:{"text-align":"left"}},L={href:"https://leetcode.com/problems/maximal-rectangle",target:"_blank",rel:"noopener noreferrer"},N={style:{"text-align":"center"}},V={style:{"text-align":"left"}},z=n("code",null,"栈",-1),B=n("code",null,"数组",-1),S=n("code",null,"动态规划",-1),T=n("code",null,"2+",-1),H={style:{"text-align":"left"}},R=n("td",{style:{"text-align":"center"}},"764",-1),G={style:{"text-align":"left"}},D={href:"https://leetcode.com/problems/largest-plus-sign",target:"_blank",rel:"noopener noreferrer"},F=n("td",{style:{"text-align":"center"}},null,-1),J={style:{"text-align":"left"}},K=n("code",null,"数组",-1),P=n("code",null,"动态规划",-1),Q={style:{"text-align":"left"}},U=n("td",{style:{"text-align":"center"}},"2132",-1),W={style:{"text-align":"left"}},X={href:"https://leetcode.com/problems/stamping-the-grid",target:"_blank",rel:"noopener noreferrer"},Y=n("td",{style:{"text-align":"center"}},null,-1),Z={style:{"text-align":"left"}},$=n("code",null,"贪心",-1),nn=n("code",null,"数组",-1),tn=n("code",null,"矩阵",-1),sn=n("code",null,"1+",-1),an={style:{"text-align":"left"}},en=n("td",{style:{"text-align":"center"}},"2201",-1),on={style:{"text-align":"left"}},cn={href:"https://leetcode.com/problems/count-artifacts-that-can-be-extracted",target:"_blank",rel:"noopener noreferrer"},ln=n("td",{style:{"text-align":"center"}},null,-1),pn={style:{"text-align":"left"}},un=n("code",null,"数组",-1),rn=n("code",null,"哈希表",-1),dn=n("code",null,"模拟",-1),kn={style:{"text-align":"left"}},mn=n("td",{style:{"text-align":"center"}},"2943",-1),hn={style:{"text-align":"left"}},_n={href:"https://leetcode.com/problems/maximize-area-of-square-hole-in-grid",target:"_blank",rel:"noopener noreferrer"},bn=n("td",{style:{"text-align":"center"}},null,-1),fn={style:{"text-align":"left"}},gn=n("code",null,"数组",-1),vn=n("code",null,"排序",-1),yn={style:{"text-align":"left"}};function xn(jn,qn){const o=l("ExternalLinkIcon"),c=l("font"),e=l("RouterLink"),i=l("CodeTabs");return d(),k("div",null,[n("h1",b,[f,t(),n("a",g,[t("221. 最大正方形"),s(o)])]),n("p",null,[t("🟠 "),s(c,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1}),t("  🔖  "),s(e,{to:"/leetcode-js/outline/tag/array.html"},{default:a(()=>[v]),_:1}),t(),s(e,{to:"/leetcode-js/outline/tag/dynamic-programming.html"},{default:a(()=>[y]),_:1}),t(),s(e,{to:"/leetcode-js/outline/tag/matrix.html"},{default:a(()=>[x]),_:1}),t("  🔗 "),n("a",j,[q,s(o)])]),w,s(i,{id:"160",data:[{id:"动态规划"},{id:"动态规划-状态压缩"}]},{title0:a(({value:p,isActive:u})=>[t("动态规划")]),title1:a(({value:p,isActive:u})=>[t("动态规划-状态压缩")]),tab0:a(({value:p,isActive:u})=>[M]),tab1:a(({value:p,isActive:u})=>[A]),_:1}),C,m(" prettier-ignore "),n("table",null,[E,n("tbody",null,[n("tr",null,[O,n("td",I,[n("a",L,[t("最大矩形"),s(o)])]),n("td",N,[s(e,{to:"/leetcode-js/problem/0085.html"},{default:a(()=>[t("[✓]")]),_:1})]),n("td",V,[s(e,{to:"/leetcode-js/outline/tag/stack.html"},{default:a(()=>[z]),_:1}),t(),s(e,{to:"/leetcode-js/outline/tag/array.html"},{default:a(()=>[B]),_:1}),t(),s(e,{to:"/leetcode-js/outline/tag/dynamic-programming.html"},{default:a(()=>[S]),_:1}),t(),T]),n("td",H,[s(c,{color:"#ff334b"},{default:a(()=>[t("Hard")]),_:1})])]),n("tr",null,[R,n("td",G,[n("a",D,[t("最大加号标志"),s(o)])]),F,n("td",J,[s(e,{to:"/leetcode-js/outline/tag/array.html"},{default:a(()=>[K]),_:1}),t(),s(e,{to:"/leetcode-js/outline/tag/dynamic-programming.html"},{default:a(()=>[P]),_:1})]),n("td",Q,[s(c,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1})])]),n("tr",null,[U,n("td",W,[n("a",X,[t("用邮票贴满网格图"),s(o)])]),Y,n("td",Z,[s(e,{to:"/leetcode-js/outline/tag/greedy.html"},{default:a(()=>[$]),_:1}),t(),s(e,{to:"/leetcode-js/outline/tag/array.html"},{default:a(()=>[nn]),_:1}),t(),s(e,{to:"/leetcode-js/outline/tag/matrix.html"},{default:a(()=>[tn]),_:1}),t(),sn]),n("td",an,[s(c,{color:"#ff334b"},{default:a(()=>[t("Hard")]),_:1})])]),n("tr",null,[en,n("td",on,[n("a",cn,[t("统计可以提取的工件"),s(o)])]),ln,n("td",pn,[s(e,{to:"/leetcode-js/outline/tag/array.html"},{default:a(()=>[un]),_:1}),t(),s(e,{to:"/leetcode-js/outline/tag/hash-table.html"},{default:a(()=>[rn]),_:1}),t(),s(e,{to:"/leetcode-js/outline/tag/simulation.html"},{default:a(()=>[dn]),_:1})]),n("td",kn,[s(c,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1})])]),n("tr",null,[mn,n("td",hn,[n("a",_n,[t("最大化网格图中正方形空洞的面积"),s(o)])]),bn,n("td",fn,[s(e,{to:"/leetcode-js/outline/tag/array.html"},{default:a(()=>[gn]),_:1}),t(),s(e,{to:"/leetcode-js/outline/tag/sorting.html"},{default:a(()=>[vn]),_:1})]),n("td",yn,[s(c,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1})])])])])])}const Mn=r(_,[["render",xn],["__file","0221.html.vue"]]);export{Mn as default};
