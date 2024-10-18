import{_ as u,r as c,o as d,c as k,a as n,b as t,d as s,w as e,f as m,e as _}from"./app-5VBZs9Uu.js";const h={},b={id:"_5-最长回文子串",tabindex:"-1"},g=n("a",{class:"header-anchor",href:"#_5-最长回文子串","aria-hidden":"true"},"#",-1),f={href:"https://leetcode.com/problems/longest-palindromic-substring",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"双指针",-1),y=n("code",null,"字符串",-1),x=n("code",null,"动态规划",-1),j={href:"https://leetcode.com/problems/longest-palindromic-substring",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),q=_('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>s</code>, return <em>the longest</em> <em>palindromic</em> <em>substring</em> in <code>s</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;babad&quot;</p><p>Output: &quot;bab&quot;</p><p>Explanation: &quot;aba&quot; is also a valid answer.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;cbbd&quot;</p><p>Output: &quot;bb&quot;</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 1000</code></li><li><code>s</code> consist of only digits and English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串 <code>s</code>，找到 <code>s</code> 中最长的回文子串。</p><p>如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。</p><p><code>s</code> 仅由数字和英文字母组成。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-中心扩展法" tabindex="-1"><a class="header-anchor" href="#思路一-中心扩展法" aria-hidden="true">#</a> 思路一：中心扩展法</h3><p>找回文串的难点在于，回文串的的长度可能是奇数也可能是偶数，解决问题的核心是以每个字符或两个相邻字符为中心，用左右指针向两边扩展，判断是否是回文串。遍历所有可能的中心，记录最长的回文串。</p><ul><li><strong>奇数长度的回文串：</strong> 以每个字符为中心，向两边扩展判断回文串。</li><li><strong>偶数长度的回文串：</strong> 以每两个相邻字符的中心向两边扩展判断回文串。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n^2)</code>，其中 <code>n</code> 是字符串的长度。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>。</li></ul><hr><h3 id="思路二-动态规划" tabindex="-1"><a class="header-anchor" href="#思路二-动态规划" aria-hidden="true">#</a> 思路二：动态规划</h3><p>动态规划法的思想是，利用已知的回文串信息推导出更长的回文串。</p><ul><li><p>定义动态规划数组 <code>dp</code>，其中 <code>dp[i][j]</code> 表示字符串 <code>s</code> 从索引 <code>i</code> 到索引 <code>j</code> 是否为回文串。</p></li><li><p>状态转移方程为：</p><ul><li><code>s[i] == s[j] &amp;&amp; dp[i+1][j-1] == true</code> 时，<code>dp[i][j] = true</code></li><li>否则，<code>dp[i][j] = false</code></li></ul></li><li><p>边界条件：</p><ul><li><code>dp[i][i] = true</code></li><li><code>s[i] == s[i+1]</code> 时，<code>dp[i][i+1] = true</code></li></ul></li></ul><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n^2)</code>，其中 <code>n</code> 是字符串的长度。</li><li><strong>空间复杂度</strong>：<code>O(n^2)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',25),E=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("string"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"s"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("string"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"longestPalindrome"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"s"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"palindrome"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("i"),n("span",{class:"token punctuation"},","),t(" j")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"while"),t(),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},">="),t(),n("span",{class:"token number"},"0"),t(),n("span",{class:"token operator"},"&&"),t(" j "),n("span",{class:"token operator"},"<"),t(" s"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"&&"),t(" s"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"=="),t(" s"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			i`),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),t(`
			j`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token keyword"},"return"),t(" s"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"substring"),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(" j"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" res "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(" s"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"let"),t(" s1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"palindrome"),n("span",{class:"token punctuation"},"("),t("i"),n("span",{class:"token punctuation"},","),t(" i"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"let"),t(" s2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"palindrome"),n("span",{class:"token punctuation"},"("),t("i"),n("span",{class:"token punctuation"},","),t(" i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		res `),n("span",{class:"token operator"},"="),t(" res"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},">"),t(" s1"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"?"),t(" res "),n("span",{class:"token operator"},":"),t(" s1"),n("span",{class:"token punctuation"},";"),t(`
		res `),n("span",{class:"token operator"},"="),t(" res"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},">"),t(" s2"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"?"),t(" res "),n("span",{class:"token operator"},":"),t(" s2"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" res"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("string"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"s"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("string"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"longestPalindrome"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"s"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" n "),n("span",{class:"token operator"},"="),t(" s"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" dp "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),t("n"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"i"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),t("n"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" start "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" end "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token comment"},"// 初始化动态规划数组"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(" n"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		dp`),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"<"),t(" n "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),t(),n("span",{class:"token operator"},"&&"),t(" s"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"=="),t(" s"),n("span",{class:"token punctuation"},"["),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			dp`),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
			start `),n("span",{class:"token operator"},"="),t(" i"),n("span",{class:"token punctuation"},";"),t(`
			end `),n("span",{class:"token operator"},"="),t(" i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`

	`),n("span",{class:"token comment"},"// 对于长度为 2 的子串，我们在初始化动态规划数组时已经考虑到了，即 dp[i][i+1]。"),t(`
	`),n("span",{class:"token comment"},"// 因此，从长度为 3 的子串开始遍历，直到长度为 n 的子串，逐步填充动态规划数组。"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" len "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},";"),t(" len "),n("span",{class:"token operator"},"<="),t(" n"),n("span",{class:"token punctuation"},";"),t(" len"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"+"),t(" len "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),t(),n("span",{class:"token operator"},"<"),t(" n"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token keyword"},"const"),t(" j "),n("span",{class:"token operator"},"="),t(" i "),n("span",{class:"token operator"},"+"),t(" len "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("s"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"=="),t(" s"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"&&"),t(" dp"),n("span",{class:"token punctuation"},"["),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
				dp`),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
				start `),n("span",{class:"token operator"},"="),t(" i"),n("span",{class:"token punctuation"},";"),t(`
				end `),n("span",{class:"token operator"},"="),t(" i "),n("span",{class:"token operator"},"+"),t(" len "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" s"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"substring"),n("span",{class:"token punctuation"},"("),t("start"),n("span",{class:"token punctuation"},","),t(" end "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),O=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),L=n("td",{style:{"text-align":"center"}},"214",-1),N={style:{"text-align":"left"}},V={href:"https://leetcode.com/problems/shortest-palindrome",target:"_blank",rel:"noopener noreferrer"},I=n("td",{style:{"text-align":"center"}},null,-1),B={style:{"text-align":"left"}},H=n("code",null,"字符串",-1),M=n("code",null,"字符串匹配",-1),T=n("code",null,"哈希函数",-1),P=n("code",null,"1+",-1),R={style:{"text-align":"left"}},G=n("td",{style:{"text-align":"center"}},"266",-1),S={style:{"text-align":"left"}},z={href:"https://leetcode.com/problems/palindrome-permutation",target:"_blank",rel:"noopener noreferrer"},D=n("td",{style:{"text-align":"center"}},null,-1),F={style:{"text-align":"left"}},J=n("code",null,"位运算",-1),K=n("code",null,"哈希表",-1),Q=n("code",null,"字符串",-1),U={style:{"text-align":"left"}},W=n("td",{style:{"text-align":"center"}},"336",-1),X={style:{"text-align":"left"}},Y={href:"https://leetcode.com/problems/palindrome-pairs",target:"_blank",rel:"noopener noreferrer"},Z=n("td",{style:{"text-align":"center"}},null,-1),$={style:{"text-align":"left"}},nn=n("code",null,"字典树",-1),tn=n("code",null,"数组",-1),sn=n("code",null,"哈希表",-1),en=n("code",null,"1+",-1),an={style:{"text-align":"left"}},on=n("td",{style:{"text-align":"center"}},"516",-1),ln={style:{"text-align":"left"}},cn={href:"https://leetcode.com/problems/longest-palindromic-subsequence",target:"_blank",rel:"noopener noreferrer"},pn={style:{"text-align":"center"}},rn={style:{"text-align":"left"}},un=n("code",null,"字符串",-1),dn=n("code",null,"动态规划",-1),kn={style:{"text-align":"left"}},mn=n("td",{style:{"text-align":"center"}},"647",-1),_n={style:{"text-align":"left"}},hn={href:"https://leetcode.com/problems/palindromic-substrings",target:"_blank",rel:"noopener noreferrer"},bn=n("td",{style:{"text-align":"center"}},null,-1),gn={style:{"text-align":"left"}},fn=n("code",null,"双指针",-1),vn=n("code",null,"字符串",-1),yn=n("code",null,"动态规划",-1),xn={style:{"text-align":"left"}},jn=n("td",{style:{"text-align":"center"}},"2472",-1),wn={style:{"text-align":"left"}},qn={href:"https://leetcode.com/problems/maximum-number-of-non-overlapping-palindrome-substrings",target:"_blank",rel:"noopener noreferrer"},En=n("td",{style:{"text-align":"center"}},null,-1),Cn={style:{"text-align":"left"}},An=n("code",null,"贪心",-1),On=n("code",null,"双指针",-1),Ln=n("code",null,"字符串",-1),Nn=n("code",null,"1+",-1),Vn={style:{"text-align":"left"}};function In(Bn,Hn){const o=c("ExternalLinkIcon"),l=c("font"),a=c("RouterLink"),r=c("CodeTabs");return d(),k("div",null,[n("h1",b,[g,t(),n("a",f,[t("5. 最长回文子串"),s(o)])]),n("p",null,[t("🟠 "),s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1}),t("  🔖  "),s(a,{to:"/leetcode-js/outline/tag/two-pointers.html"},{default:e(()=>[v]),_:1}),t(),s(a,{to:"/leetcode-js/outline/tag/string.html"},{default:e(()=>[y]),_:1}),t(),s(a,{to:"/leetcode-js/outline/tag/dynamic-programming.html"},{default:e(()=>[x]),_:1}),t("  🔗 "),n("a",j,[w,s(o)])]),q,s(r,{id:"166",data:[{id:"中心扩展法"},{id:"动态规划"}]},{title0:e(({value:p,isActive:i})=>[t("中心扩展法")]),title1:e(({value:p,isActive:i})=>[t("动态规划")]),tab0:e(({value:p,isActive:i})=>[E]),tab1:e(({value:p,isActive:i})=>[C]),_:1}),A,m(" prettier-ignore "),n("table",null,[O,n("tbody",null,[n("tr",null,[L,n("td",N,[n("a",V,[t("最短回文串"),s(o)])]),I,n("td",B,[s(a,{to:"/leetcode-js/outline/tag/string.html"},{default:e(()=>[H]),_:1}),t(),s(a,{to:"/leetcode-js/outline/tag/string-matching.html"},{default:e(()=>[M]),_:1}),t(),s(a,{to:"/leetcode-js/outline/tag/hash-function.html"},{default:e(()=>[T]),_:1}),t(),P]),n("td",R,[s(l,{color:"#ff334b"},{default:e(()=>[t("Hard")]),_:1})])]),n("tr",null,[G,n("td",S,[n("a",z,[t("回文排列"),s(o)])]),D,n("td",F,[s(a,{to:"/leetcode-js/outline/tag/bit-manipulation.html"},{default:e(()=>[J]),_:1}),t(),s(a,{to:"/leetcode-js/outline/tag/hash-table.html"},{default:e(()=>[K]),_:1}),t(),s(a,{to:"/leetcode-js/outline/tag/string.html"},{default:e(()=>[Q]),_:1})]),n("td",U,[s(l,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1})])]),n("tr",null,[W,n("td",X,[n("a",Y,[t("回文对"),s(o)])]),Z,n("td",$,[s(a,{to:"/leetcode-js/outline/tag/trie.html"},{default:e(()=>[nn]),_:1}),t(),s(a,{to:"/leetcode-js/outline/tag/array.html"},{default:e(()=>[tn]),_:1}),t(),s(a,{to:"/leetcode-js/outline/tag/hash-table.html"},{default:e(()=>[sn]),_:1}),t(),en]),n("td",an,[s(l,{color:"#ff334b"},{default:e(()=>[t("Hard")]),_:1})])]),n("tr",null,[on,n("td",ln,[n("a",cn,[t("最长回文子序列"),s(o)])]),n("td",pn,[s(a,{to:"/leetcode-js/problem/0516.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",rn,[s(a,{to:"/leetcode-js/outline/tag/string.html"},{default:e(()=>[un]),_:1}),t(),s(a,{to:"/leetcode-js/outline/tag/dynamic-programming.html"},{default:e(()=>[dn]),_:1})]),n("td",kn,[s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1})])]),n("tr",null,[mn,n("td",_n,[n("a",hn,[t("回文子串"),s(o)])]),bn,n("td",gn,[s(a,{to:"/leetcode-js/outline/tag/two-pointers.html"},{default:e(()=>[fn]),_:1}),t(),s(a,{to:"/leetcode-js/outline/tag/string.html"},{default:e(()=>[vn]),_:1}),t(),s(a,{to:"/leetcode-js/outline/tag/dynamic-programming.html"},{default:e(()=>[yn]),_:1})]),n("td",xn,[s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1})])]),n("tr",null,[jn,n("td",wn,[n("a",qn,[t("不重叠回文子字符串的最大数目"),s(o)])]),En,n("td",Cn,[s(a,{to:"/leetcode-js/outline/tag/greedy.html"},{default:e(()=>[An]),_:1}),t(),s(a,{to:"/leetcode-js/outline/tag/two-pointers.html"},{default:e(()=>[On]),_:1}),t(),s(a,{to:"/leetcode-js/outline/tag/string.html"},{default:e(()=>[Ln]),_:1}),t(),Nn]),n("td",Vn,[s(l,{color:"#ff334b"},{default:e(()=>[t("Hard")]),_:1})])])])])])}const Tn=u(h,[["render",In],["__file","0005.html.vue"]]);export{Tn as default};
