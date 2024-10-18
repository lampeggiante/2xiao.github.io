import{_ as r,r as c,o as d,c as k,a as n,b as t,d as s,w as e,f as m,e as h}from"./app-mvY9N9Pc.js";const b={},_={id:"_139-单词拆分",tabindex:"-1"},g=n("a",{class:"header-anchor",href:"#_139-单词拆分","aria-hidden":"true"},"#",-1),f={href:"https://leetcode.com/problems/word-break",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"字典树",-1),v=n("code",null,"记忆化搜索",-1),w=n("code",null,"数组",-1),y=n("code",null,"哈希表",-1),x=n("code",null,"字符串",-1),D=n("code",null,"动态规划",-1),j={href:"https://leetcode.com/problems/word-break",target:"_blank",rel:"noopener noreferrer"},E=n("code",null,"LeetCode",-1),A=h('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>s</code> and a dictionary of strings <code>wordDict</code>, return <code>true</code> if <code>s</code> can be segmented into a space-separated sequence of one or more dictionary words.</p><p><strong>Note</strong> that the same word in the dictionary may be reused multiple times in the segmentation.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;leetcode&quot;, wordDict = [&quot;leet&quot;,&quot;code&quot;]</p><p>Output: true</p><p>Explanation: Return true because &quot;leetcode&quot; can be segmented as &quot;leet code&quot;.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;applepenapple&quot;, wordDict = [&quot;apple&quot;,&quot;pen&quot;]</p><p>Output: true</p><p>Explanation: Return true because &quot;applepenapple&quot; can be segmented as &quot;apple pen apple&quot;.</p><p>Note that you are allowed to reuse a dictionary word.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;catsandog&quot;, wordDict = [&quot;cats&quot;,&quot;dog&quot;,&quot;sand&quot;,&quot;and&quot;,&quot;cat&quot;]</p><p>Output: false</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 300</code></li><li><code>1 &lt;= wordDict.length &lt;= 1000</code></li><li><code>1 &lt;= wordDict[i].length &lt;= 20</code></li><li><code>s</code> and <code>wordDict[i]</code> consist of only lowercase English letters.</li><li>All the strings of <code>wordDict</code> are <strong>unique</strong>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串 <code>s</code> 和一个字符串列表 <code>wordDict</code> 作为字典。如果可以利用字典中出现的一个或多个单词拼接出 <code>s</code> 则返回 <code>true</code>。</p><p><strong>注意</strong>：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。</p><p><strong>示例 1：</strong></p><blockquote><p>输入: s = &quot;leetcode&quot;, wordDict = [&quot;leet&quot;, &quot;code&quot;]</p><p>输出: true</p><p>解释: 返回 true 因为 &quot;leetcode&quot; 可以由 &quot;leet&quot; 和 &quot;code&quot; 拼接成。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p>输入: s = &quot;applepenapple&quot;, wordDict = [&quot;apple&quot;, &quot;pen&quot;]</p><p>输出: true</p><p>解释: 返回 true 因为 &quot;applepenapple&quot; 可以由 &quot;apple&quot; &quot;pen&quot; &quot;apple&quot; 拼接成。</p><p>注意，你可以重复使用字典中的单词。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p>输入: s = &quot;catsandog&quot;, wordDict = [&quot;cats&quot;, &quot;dog&quot;, &quot;sand&quot;, &quot;and&quot;, &quot;cat&quot;]</p><p>输出: false</p></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-递归-记忆化搜索" tabindex="-1"><a class="header-anchor" href="#思路一-递归-记忆化搜索" aria-hidden="true">#</a> 思路一：递归+记忆化搜索</h3><ol><li><p><strong>递归 + 记忆化搜索</strong>：使用递归函数 <code>helper</code> 来判断从当前位置 <code>i</code> 开始的子串能否被拆分。通过遍历字典中的单词，检查当前位置开始的子串是否以这些单词开头。如果是，则递归调用 <code>helper</code> 判断剩余部分，如果能被拆分，则返回 <code>true</code>。</p></li><li><p><strong>记忆化搜索</strong>：为了避免重复计算，使用一个数组 <code>dp</code> 来记录每个位置的计算结果。<code>dp[i]</code> 的值为 1 表示从位置 <code>i</code> 开始的子串可以被拆分，为 0 表示不能被拆分，初始化为 -1。</p></li><li><p><strong>返回结果</strong>：调用 <code>helper(0)</code>，即从字符串的起始位置开始判断整个字符串是否能被拆分。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>: 最坏情况下的时间复杂度为 <code>O((n/m)^m)</code>，其中 <code>n</code> 表示字符串的长度，<code>m</code> 表示字典中单词的平均长度，最坏情况下每个位置 <code>i</code> 可能需要遍历所有 <code>m</code> 长度的单词，递归的深度可能达到 <code>n/m</code> 层。具体复杂度取决于能否利用记忆化搜索避免重复计算。</p></li><li><p><strong>空间复杂度</strong>: <code>O(n)</code>，记忆化搜索中使用了一个数组 <code>dp</code>，其长度为字符串的长度。递归调用的栈深度也会占用一些额外的空间。</p></li></ul><hr><h3 id="思路二-动态规划-dp-table" tabindex="-1"><a class="header-anchor" href="#思路二-动态规划-dp-table" aria-hidden="true">#</a> 思路二：动态规划-DP table</h3><ol><li><p><strong>动态规划</strong>：可以使用动态规划来解决这个问题。定义一个一维数组 <code>dp</code>，其中 <code>dp[i]</code> 表示字符串的前 <code>i</code> 个字符是否可以被拆分。</p></li><li><p><strong>状态转移方程</strong>：对于每个位置 <code>i</code>，可以考虑将字符串拆分成两部分，即 <code>s[0:i]</code> 和 <code>s[i:n]</code>（<code>n</code> 是字符串的长度）。如果前半部分可以被拆分，并且后半部分在字典中，那么整个字符串就可以被拆分。因此，状态转移方程为：<code>dp[i] = dp[j] &amp;&amp; s[j:i] ∈ wordDict</code> 其中，<code>0 ≤ j &lt; i</code>。</p></li><li><p><strong>初始化</strong>：初始化 <code>dp[0]</code> 为 <code>true</code>，表示空字符串可以被拆分。</p></li><li><p><strong>遍历计算</strong>：从字符串的第一个字符开始，依次计算 <code>dp[i]</code> 直到最后一个字符。</p></li><li><p><strong>结果</strong>：返回 <code>dp[n]</code>，其中 <code>n</code> 是字符串的长度，表示整个字符串是否可以被拆分。</p></li></ol><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n^2)</code>，两层循环，遍历字符串的所有可能子串。</li><li><strong>空间复杂度</strong>: <code>O(n)</code>，使用了一个数组来存储中间状态。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',31),C=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("string"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"s"),t(`
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"wordDict"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("boolean"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"wordBreak"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("s"),n("span",{class:"token punctuation"},","),t(" wordDict")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" n "),n("span",{class:"token operator"},"="),t(" s"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" dp "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),t("n"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"helper"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"i"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"=="),t(" n"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("dp"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"!=="),t(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token keyword"},"return"),t(" dp"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"=="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" word "),n("span",{class:"token keyword"},"of"),t(" wordDict"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token keyword"},"let"),t(" len "),n("span",{class:"token operator"},"="),t(" word"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"+"),t(" len "),n("span",{class:"token operator"},">"),t(" n"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
				`),n("span",{class:"token keyword"},"continue"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(`
			`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("word "),n("span",{class:"token operator"},"!=="),t(" s"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"substring"),n("span",{class:"token punctuation"},"("),t("i"),n("span",{class:"token punctuation"},","),t(" i "),n("span",{class:"token operator"},"+"),t(" len"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
				`),n("span",{class:"token keyword"},"continue"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(`
			`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"helper"),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"+"),t(" len"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
				dp`),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
				`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
		dp`),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token function"},"helper"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("string"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"s"),t(`
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"wordDict"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("boolean"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"wordBreak"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("s"),n("span",{class:"token punctuation"},","),t(" wordDict")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" n "),n("span",{class:"token operator"},"="),t(" s"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("n "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`

	`),n("span",{class:"token comment"},"// 初始化动态规划数组"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" dp "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),t("n "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	dp`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},"// 空字符串可以被拆分"),t(`

	`),n("span",{class:"token comment"},"// 遍历计算动态规划数组"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<="),t(" n"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" j "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" j "),n("span",{class:"token operator"},"<"),t(" i"),n("span",{class:"token punctuation"},";"),t(" j"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("dp"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"&&"),t(" wordDict"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"includes"),n("span",{class:"token punctuation"},"("),t("s"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"substring"),n("span",{class:"token punctuation"},"("),t("j"),n("span",{class:"token punctuation"},","),t(" i"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
				dp`),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
				`),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`

	`),n("span",{class:"token comment"},"// 返回结果"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" dp"),n("span",{class:"token punctuation"},"["),t("n"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),N=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),O=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),B=n("td",{style:{"text-align":"center"}},"140",-1),L={style:{"text-align":"left"}},V={href:"https://leetcode.com/problems/word-break-ii",target:"_blank",rel:"noopener noreferrer"},R=n("td",{style:{"text-align":"center"}},null,-1),P={style:{"text-align":"left"}},T=n("code",null,"字典树",-1),z=n("code",null,"记忆化搜索",-1),M=n("code",null,"数组",-1),G=n("code",null,"4+",-1),H={style:{"text-align":"left"}},S=n("td",{style:{"text-align":"center"}},"2707",-1),F={style:{"text-align":"left"}},J={href:"https://leetcode.com/problems/extra-characters-in-a-string",target:"_blank",rel:"noopener noreferrer"},K=n("td",{style:{"text-align":"center"}},null,-1),Q={style:{"text-align":"left"}},U=n("code",null,"字典树",-1),W=n("code",null,"数组",-1),X=n("code",null,"哈希表",-1),Y=n("code",null,"2+",-1),Z={style:{"text-align":"left"}};function $(nn,tn){const o=c("ExternalLinkIcon"),l=c("font"),a=c("RouterLink"),i=c("CodeTabs");return d(),k("div",null,[n("h1",_,[g,t(),n("a",f,[t("139. 单词拆分"),s(o)])]),n("p",null,[t("🟠 "),s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1}),t("  🔖  "),s(a,{to:"/leetcode/outline/tag/trie.html"},{default:e(()=>[q]),_:1}),t(),s(a,{to:"/leetcode/outline/tag/memoization.html"},{default:e(()=>[v]),_:1}),t(),s(a,{to:"/leetcode/outline/tag/array.html"},{default:e(()=>[w]),_:1}),t(),s(a,{to:"/leetcode/outline/tag/hash-table.html"},{default:e(()=>[y]),_:1}),t(),s(a,{to:"/leetcode/outline/tag/string.html"},{default:e(()=>[x]),_:1}),t(),s(a,{to:"/leetcode/outline/tag/dynamic-programming.html"},{default:e(()=>[D]),_:1}),t("  🔗 "),n("a",j,[E,s(o)])]),A,s(i,{id:"225",data:[{id:"递归+记忆化搜索"},{id:"动态规划-DP table"}]},{title0:e(({value:p,isActive:u})=>[t("递归+记忆化搜索")]),title1:e(({value:p,isActive:u})=>[t("动态规划-DP table")]),tab0:e(({value:p,isActive:u})=>[C]),tab1:e(({value:p,isActive:u})=>[I]),_:1}),N,m(" prettier-ignore "),n("table",null,[O,n("tbody",null,[n("tr",null,[B,n("td",L,[n("a",V,[t("单词拆分 II"),s(o)])]),R,n("td",P,[s(a,{to:"/leetcode/outline/tag/trie.html"},{default:e(()=>[T]),_:1}),t(),s(a,{to:"/leetcode/outline/tag/memoization.html"},{default:e(()=>[z]),_:1}),t(),s(a,{to:"/leetcode/outline/tag/array.html"},{default:e(()=>[M]),_:1}),t(),G]),n("td",H,[s(l,{color:"#ff334b"},{default:e(()=>[t("Hard")]),_:1})])]),n("tr",null,[S,n("td",F,[n("a",J,[t("字符串中的额外字符"),s(o)])]),K,n("td",Q,[s(a,{to:"/leetcode/outline/tag/trie.html"},{default:e(()=>[U]),_:1}),t(),s(a,{to:"/leetcode/outline/tag/array.html"},{default:e(()=>[W]),_:1}),t(),s(a,{to:"/leetcode/outline/tag/hash-table.html"},{default:e(()=>[X]),_:1}),t(),Y]),n("td",Z,[s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1})])])])])])}const en=r(b,[["render",$],["__file","0139.html.vue"]]);export{en as default};
