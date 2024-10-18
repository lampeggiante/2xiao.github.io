import{_ as r,r as l,o as d,c as k,a as n,b as t,d as s,w as e,f as m,e as h}from"./app-mvY9N9Pc.js";const _={},b={id:"_392-判断子序列",tabindex:"-1"},f=n("a",{class:"header-anchor",href:"#_392-判断子序列","aria-hidden":"true"},"#",-1),g={href:"https://leetcode.com/problems/is-subsequence",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"双指针",-1),y=n("code",null,"字符串",-1),w=n("code",null,"动态规划",-1),x={href:"https://leetcode.com/problems/is-subsequence",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"LeetCode",-1),j=h('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two strings <code>s</code> and <code>t</code>, return <code>true</code> <em>if</em><code>s</code> _is a <strong>subsequence</strong> of _<code>t</code> <em>, or</em><code>false</code> <em>otherwise</em>.</p><p>A <strong>subsequence</strong> of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., <code>&quot;ace&quot;</code> is a subsequence of <code>&quot; _a_ b _c_ d _e_ &quot;</code> while <code>&quot;aec&quot;</code> is not).</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;abc&quot;, t = &quot;ahbgdc&quot;</p><p>Output: true</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;axc&quot;, t = &quot;ahbgdc&quot;</p><p>Output: false</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= s.length &lt;= 100</code></li><li><code>0 &lt;= t.length &lt;= 10^4</code></li><li><code>s</code> and <code>t</code> consist only of lowercase English letters.</li></ul><p><strong>Follow up:</strong> Suppose there are lots of incoming <code>s</code>, say <code>s1, s2, ..., sk</code> where <code>k &gt;= 109</code>, and you want to check one by one to see if <code>t</code> has its subsequence. In this scenario, how would you change your code?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定字符串 <code>s</code> 和 <code>t</code> ，判断 <code>s</code> 是否为 <code>t</code> 的子序列。字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，<code>&quot;ace&quot;</code>是<code>&quot;abcde&quot;</code>的一个子序列，而<code>&quot;aec&quot;</code>不是）。</p><p><strong>进阶</strong> ：如果有大量输入的 <code>S</code>，称作<code> S1, S2, ... , Sk</code> 其中 <code>k &gt;= 10亿</code>，你需要依次检查它们是否为 <code>T</code> 的子序列。在这种情况下，你会怎样改变代码？</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-双指针" tabindex="-1"><a class="header-anchor" href="#思路一-双指针" aria-hidden="true">#</a> 思路一：双指针</h3><p>使用两个指针 <code>i</code>、<code>j</code> 分别指向字符串 <code>s</code> 和 <code>t</code>，然后对两个字符串进行遍历，时间复杂度 <code>O(n)</code>。</p><ul><li>遇到 <code>s[i] == t[j]</code> 的情况，则 <code>i</code> 向右移。</li><li>不断右移 <code>j</code>。</li><li>如果超过 <code>s</code> 或 <code>t</code> 的长度则跳出。</li><li>最后判断指针 <code>i</code> 是否指向了 <code>s</code> 的末尾，即：判断 <code>i</code> 是否等于 <code>s</code> 的长度。如果等于，则说明 <code>s</code> 是 <code>t</code> 的子序列，如果不等于，则不是。</li></ul><h3 id="进阶-二分思路" tabindex="-1"><a class="header-anchor" href="#进阶-二分思路" aria-hidden="true">#</a> 进阶：二分思路</h3><p>二分思路主要是对 <code>t</code> 进行预处理，用一个字典将每个字符出现的索引位置按顺序存储下来，比如 <code>&quot;abacb&quot;</code> 的字典为：<code>{a: [0, 1], b: [1, 4], c: [3]}</code> ，这样我们不需要每次都遍历 <code>t</code> ，只需查看字典中，是否有满足要求的索引即可。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',20),M=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("string"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"s"),t(`
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("string"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"t"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("boolean"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"isSubsequence"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("s"),n("span",{class:"token punctuation"},","),t(" t")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" j "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"while"),t(),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"<"),t(" s"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"&&"),t(" j "),n("span",{class:"token operator"},"<"),t(" t"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("s"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"=="),t(" t"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			i`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
		j`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" i "),n("span",{class:"token operator"},"=="),t(" s"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("string"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"s"),t(`
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("string"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"t"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("boolean"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"isSubsequence"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("s"),n("span",{class:"token punctuation"},","),t(" t")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" indexMap "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(" t"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("indexMap"),n("span",{class:"token punctuation"},"["),t("t"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			indexMap`),n("span",{class:"token punctuation"},"["),t("t"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
		indexMap`),n("span",{class:"token punctuation"},"["),t("t"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("i"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token comment"},"// 串 t 上的指针"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" j "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(" s"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token comment"},"// 整个 t 压根儿没有这个字符"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("indexMap"),n("span",{class:"token punctuation"},"["),t("s"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"let"),t(" pos "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"left_bound"),n("span",{class:"token punctuation"},"("),t("indexMap"),n("span",{class:"token punctuation"},"["),t("s"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(" j"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("s"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(" pos"),n("span",{class:"token punctuation"},","),t(" j"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token comment"},"// 二分搜索区间中没有找到字符 c"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("pos "),n("span",{class:"token operator"},"=="),t(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token comment"},"// 向前移动指针 j"),t(`
		j `),n("span",{class:"token operator"},"="),t(" indexMap"),n("span",{class:"token punctuation"},"["),t("s"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("pos"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token comment"},"// 查找左侧边界的二分查找"),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"left_bound"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("arr"),n("span",{class:"token punctuation"},","),t(" target")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" left "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(`
		right `),n("span",{class:"token operator"},"="),t(" arr"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"while"),t(),n("span",{class:"token punctuation"},"("),t("left "),n("span",{class:"token operator"},"<"),t(" right"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"let"),t(" mid "),n("span",{class:"token operator"},"="),t(" left "),n("span",{class:"token operator"},"+"),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"floor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),t("right "),n("span",{class:"token operator"},"-"),t(" left"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"/"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("target "),n("span",{class:"token operator"},">"),t(" arr"),n("span",{class:"token punctuation"},"["),t("mid"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			left `),n("span",{class:"token operator"},"="),t(" mid "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
			right `),n("span",{class:"token operator"},"="),t(" mid"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token comment"},"// 如果 left 越界 说明数组中不存在 target"),t(`
	`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("left "),n("span",{class:"token operator"},"=="),t(" arr"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" left"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),E=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),A=n("td",{style:{"text-align":"center"}},"792",-1),I={style:{"text-align":"left"}},L={href:"https://leetcode.com/problems/number-of-matching-subsequences",target:"_blank",rel:"noopener noreferrer"},N=n("td",{style:{"text-align":"center"}},null,-1),V={style:{"text-align":"left"}},T=n("code",null,"字典树",-1),B=n("code",null,"数组",-1),O=n("code",null,"哈希表",-1),R=n("code",null,"4+",-1),F={style:{"text-align":"left"}},G=n("td",{style:{"text-align":"center"}},"1055",-1),z={style:{"text-align":"left"}},D={href:"https://leetcode.com/problems/shortest-way-to-form-string",target:"_blank",rel:"noopener noreferrer"},H=n("td",{style:{"text-align":"center"}},null,-1),J={style:{"text-align":"left"}},K=n("code",null,"贪心",-1),P=n("code",null,"双指针",-1),Q=n("code",null,"字符串",-1),U=n("code",null,"1+",-1),W={style:{"text-align":"left"}},X=n("td",{style:{"text-align":"center"}},"2486",-1),Y={style:{"text-align":"left"}},Z={href:"https://leetcode.com/problems/append-characters-to-string-to-make-subsequence",target:"_blank",rel:"noopener noreferrer"},$=n("td",{style:{"text-align":"center"}},null,-1),nn={style:{"text-align":"left"}},tn=n("code",null,"贪心",-1),sn=n("code",null,"双指针",-1),en=n("code",null,"字符串",-1),an={style:{"text-align":"left"}},on=n("td",{style:{"text-align":"center"}},"2825",-1),cn={style:{"text-align":"left"}},ln={href:"https://leetcode.com/problems/make-string-a-subsequence-using-cyclic-increments",target:"_blank",rel:"noopener noreferrer"},pn=n("td",{style:{"text-align":"center"}},null,-1),un={style:{"text-align":"left"}},rn=n("code",null,"双指针",-1),dn=n("code",null,"字符串",-1),kn={style:{"text-align":"left"}};function mn(hn,_n){const o=l("ExternalLinkIcon"),c=l("font"),a=l("RouterLink"),u=l("CodeTabs");return d(),k("div",null,[n("h1",b,[f,t(),n("a",g,[t("392. 判断子序列"),s(o)])]),n("p",null,[t("🟢 "),s(c,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1}),t("  🔖  "),s(a,{to:"/leetcode/outline/tag/two-pointers.html"},{default:e(()=>[v]),_:1}),t(),s(a,{to:"/leetcode/outline/tag/string.html"},{default:e(()=>[y]),_:1}),t(),s(a,{to:"/leetcode/outline/tag/dynamic-programming.html"},{default:e(()=>[w]),_:1}),t("  🔗 "),n("a",x,[q,s(o)])]),j,s(u,{id:"109",data:[{id:"双指针"},{id:"进阶：二分法"}]},{title0:e(({value:i,isActive:p})=>[t("双指针")]),title1:e(({value:i,isActive:p})=>[t("进阶：二分法")]),tab0:e(({value:i,isActive:p})=>[M]),tab1:e(({value:i,isActive:p})=>[S]),_:1}),C,m(" prettier-ignore "),n("table",null,[E,n("tbody",null,[n("tr",null,[A,n("td",I,[n("a",L,[t("匹配子序列的单词数"),s(o)])]),N,n("td",V,[s(a,{to:"/leetcode/outline/tag/trie.html"},{default:e(()=>[T]),_:1}),t(),s(a,{to:"/leetcode/outline/tag/array.html"},{default:e(()=>[B]),_:1}),t(),s(a,{to:"/leetcode/outline/tag/hash-table.html"},{default:e(()=>[O]),_:1}),t(),R]),n("td",F,[s(c,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1})])]),n("tr",null,[G,n("td",z,[n("a",D,[t("形成字符串的最短路径"),s(o)])]),H,n("td",J,[s(a,{to:"/leetcode/outline/tag/greedy.html"},{default:e(()=>[K]),_:1}),t(),s(a,{to:"/leetcode/outline/tag/two-pointers.html"},{default:e(()=>[P]),_:1}),t(),s(a,{to:"/leetcode/outline/tag/string.html"},{default:e(()=>[Q]),_:1}),t(),U]),n("td",W,[s(c,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1})])]),n("tr",null,[X,n("td",Y,[n("a",Z,[t("追加字符以获得子序列"),s(o)])]),$,n("td",nn,[s(a,{to:"/leetcode/outline/tag/greedy.html"},{default:e(()=>[tn]),_:1}),t(),s(a,{to:"/leetcode/outline/tag/two-pointers.html"},{default:e(()=>[sn]),_:1}),t(),s(a,{to:"/leetcode/outline/tag/string.html"},{default:e(()=>[en]),_:1})]),n("td",an,[s(c,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1})])]),n("tr",null,[on,n("td",cn,[n("a",ln,[t("循环增长使字符串子序列等于另一个字符串"),s(o)])]),pn,n("td",un,[s(a,{to:"/leetcode/outline/tag/two-pointers.html"},{default:e(()=>[rn]),_:1}),t(),s(a,{to:"/leetcode/outline/tag/string.html"},{default:e(()=>[dn]),_:1})]),n("td",kn,[s(c,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1})])])])])])}const fn=r(_,[["render",mn],["__file","0392.html.vue"]]);export{fn as default};
