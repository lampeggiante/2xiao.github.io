import{_ as r,r as c,o as p,c as _,a as t,b as e,d as n,w as s,f as h,e as m}from"./app-mvY9N9Pc.js";const k={},g={id:"_300-最长递增子序列",tabindex:"-1"},f=t("a",{class:"header-anchor",href:"#_300-最长递增子序列","aria-hidden":"true"},"#",-1),b={href:"https://leetcode.com/problems/longest-increasing-subsequence",target:"_blank",rel:"noopener noreferrer"},y=t("code",null,"数组",-1),x=t("code",null,"二分查找",-1),v=t("code",null,"动态规划",-1),w={href:"https://leetcode.com/problems/longest-increasing-subsequence",target:"_blank",rel:"noopener noreferrer"},q=t("code",null,"LeetCode",-1),I=m('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code>, return <em>the length of the longest <strong>strictly increasing</strong></em> _ <strong>subsequence</strong>_.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [10,9,2,5,3,7,101,18]</p><p>Output: 4</p><p>Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [0,1,0,3,2,3]</p><p>Output: 4</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [7,7,7,7,7,7,7]</p><p>Output: 1</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 2500</code></li><li><code>-10^4 &lt;= nums[i] &lt;= 10^4</code></li></ul><p><strong>Follow up:</strong> Can you come up with an algorithm that runs in <code>O(n log(n))</code> time complexity?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code> ，找到其中最长严格递增子序列的长度。</p><p><strong>子序列</strong> 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，<code>[3,6,2,7]</code> 是数组 <code>[0,3,1,6,2,2,7]</code> 的子序列。</p><p><strong>进阶：</strong></p><p>你能将算法的时间复杂度降低到 <code>O(n logn)</code> 吗?</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-动态规划" tabindex="-1"><a class="header-anchor" href="#思路一-动态规划" aria-hidden="true">#</a> 思路一：动态规划</h3><p>可以使用动态规划来解决:</p><ul><li>创建一个长度为 <code>n</code> 的数组 <code>dp</code>，其中 <code>dp[i]</code> 表示以第 <code>i</code> 个元素为结尾的最长递增子序列的长度。</li><li>初始化 <code>dp</code> 数组的所有元素为 1，因为每个元素自身也是一个长度为 1 的递增子序列。</li><li>对于每个位置 <code>i</code>，遍历 <code>0</code> 到 <code>i-1</code> 的所有位置，如果 <code>nums[i] &gt; nums[j]</code>，说明 <code>nums[i]</code> 可以接在 <code>nums[j]</code> 后面构成一个更长的递增子序列，更新 <code>dp[i] = Math.max(dp[i], dp[j] + 1)</code>。</li><li>最终，<code>dp</code> 数组中的最大值即为所求的最长递增子序列的长度。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n^2)</code> ，其中 <code>n</code> 是数组 <code>nums</code> 的长度。主要的时间复杂度来自于两层嵌套的循环，外层循环遍历数组中的每个元素，而内层循环在每次外层循环中都遍历了之前的所有元素。</li><li><strong>空间复杂度</strong>: <code>O(n)</code>，使用了一个长度为 <code>n</code> 的数组来存储中间状态。</li></ul><hr><h3 id="思路二-二分查找" tabindex="-1"><a class="header-anchor" href="#思路二-二分查找" aria-hidden="true">#</a> 思路二：二分查找</h3><p>使用二分查找优化最长递增子序列问题，主要利用了一个辅助数组 <code>tails</code>。这个数组在遍历过程中，始终保持递增的状态。辅助数组 <code>tails</code> 的长度 <code>len</code> 表示当前已经找到的最长递增子序列的长度。二分查找的过程如下：</p><ol><li><p><strong>初始化左右指针：</strong></p><ul><li>初始时，<code>left</code> 指向 0，<code>right</code> 指向 <code>len</code>。</li></ul></li><li><p><strong>开始二分查找：</strong></p><ul><li>在当前的辅助数组 <code>tails</code> 中进行二分查找，找到第一个大于等于 <code>nums[i]</code> 的位置。用 <code>mid</code> 表示二分查找中间位置。</li><li>如果 <code>tails[mid] &lt; nums[i]</code>，说明当前的递增子序列可以继续延长，因此更新 <code>left = mid + 1</code>。</li><li>否则，说明当前递增子序列需要进行调整，因此更新 <code>right = mid</code>。</li></ul></li><li><p><strong>更新辅助数组：</strong></p><ul><li>如果 <code>left === len</code>，说明 <code>nums[i]</code> 大于当前递增子序列的所有元素，将 <code>nums[i]</code> 添加到辅助数组的末尾，并且递增子序列的长度 <code>len++</code>。</li><li>否则，将 <code>nums[i]</code> 替换掉辅助数组中第一个大于等于 <code>nums[i]</code> 的元素。</li></ul></li><li><p><strong>迭代下一个元素：</strong></p><ul><li>重复上述过程，直到遍历完整个数组 <code>nums</code>。</li></ul></li><li><p><strong>最终结果：</strong></p><ul><li>辅助数组的长度 <code>len</code> 即为最长递增子序列的长度。</li></ul></li></ol><p>举一个具体的示例来说明：</p><p>假设 <code>nums = [10, 9, 2, 5, 3, 7, 101, 18]</code>。</p><ul><li>初始化时，辅助数组 <code>tails</code> 为空，<code>len = 0</code>。</li><li>当处理元素 <code>nums[0] = 10</code> 时，<code>tails</code> 为空，将 <code>10</code> 加入到 <code>tails</code>，<code>len</code> 变为 <code>1</code>。</li><li>当处理元素 <code>nums[1] = 9</code> 时，通过二分查找在 <code>tails</code> 中找到第一个大于等于 <code>9</code> 的位置，将 <code>tails[0]</code> 替换为 <code>9</code>。</li><li>依此类推，处理完整个数组后，<code>tails</code> 为 <code>[2, 3, 7, 18]</code>，<code>len = 4</code>，最终结果为 <code>4</code>。</li></ul><p>这种方法的核心在于通过二分查找，高效地维护了一个递增的辅助数组，从而在保证正确性的同时降低时间复杂度到 <code>O(n logn)</code>。</p><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n logn)</code> ，其中 <code>n</code> 是数组 <code>nums</code> 的长度。</li><li><strong>空间复杂度</strong>: <code>O(len)</code>，其中 <code>len</code> 是最长递增子序列的长度，使用了一个长度最长为 <code>len</code> 的辅助数组。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',33),j=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[e(`/**
 * `),t("span",{class:"token keyword"},"@param"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),e(),t("span",{class:"token parameter"},"nums"),e(`
 * `),t("span",{class:"token keyword"},"@return"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("number"),t("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),t("span",{class:"token keyword"},"var"),e(),t("span",{class:"token function-variable function"},"lengthOfLIS"),e(),t("span",{class:"token operator"},"="),e(),t("span",{class:"token keyword"},"function"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"nums"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
	`),t("span",{class:"token keyword"},"let"),e(" dp "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token keyword"},"new"),e(),t("span",{class:"token class-name"},"Array"),t("span",{class:"token punctuation"},"("),e("nums"),t("span",{class:"token punctuation"},"."),e("length"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"fill"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"for"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),e(" i "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),e(" i "),t("span",{class:"token operator"},"<"),e(" nums"),t("span",{class:"token punctuation"},"."),e("length"),t("span",{class:"token punctuation"},";"),e(" i"),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
		`),t("span",{class:"token keyword"},"for"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),e(" j "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),e(" j "),t("span",{class:"token operator"},"<"),e(" i"),t("span",{class:"token punctuation"},";"),e(" j"),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
			`),t("span",{class:"token keyword"},"if"),e(),t("span",{class:"token punctuation"},"("),e("nums"),t("span",{class:"token punctuation"},"["),e("i"),t("span",{class:"token punctuation"},"]"),e(),t("span",{class:"token operator"},">"),e(" nums"),t("span",{class:"token punctuation"},"["),e("j"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
				dp`),t("span",{class:"token punctuation"},"["),e("i"),t("span",{class:"token punctuation"},"]"),e(),t("span",{class:"token operator"},"="),e(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"max"),t("span",{class:"token punctuation"},"("),e("dp"),t("span",{class:"token punctuation"},"["),e("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),e(" dp"),t("span",{class:"token punctuation"},"["),e("j"),t("span",{class:"token punctuation"},"]"),e(),t("span",{class:"token operator"},"+"),e(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
			`),t("span",{class:"token punctuation"},"}"),e(`
		`),t("span",{class:"token punctuation"},"}"),e(`
	`),t("span",{class:"token punctuation"},"}"),e(`

	`),t("span",{class:"token keyword"},"return"),e(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"max"),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"..."),e("dp"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),M=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[e(`/**
 * `),t("span",{class:"token keyword"},"@param"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),e(),t("span",{class:"token parameter"},"nums"),e(`
 * `),t("span",{class:"token keyword"},"@return"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("number"),t("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),t("span",{class:"token keyword"},"function"),e(),t("span",{class:"token function"},"lengthOfLIS"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"nums"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
	`),t("span",{class:"token keyword"},"if"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"!"),e("nums "),t("span",{class:"token operator"},"||"),e(" nums"),t("span",{class:"token punctuation"},"."),e("length "),t("span",{class:"token operator"},"==="),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
		`),t("span",{class:"token keyword"},"return"),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token punctuation"},"}"),e(`

	`),t("span",{class:"token keyword"},"const"),e(" n "),t("span",{class:"token operator"},"="),e(" nums"),t("span",{class:"token punctuation"},"."),e("length"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"const"),e(" tails "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"let"),e(" len "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),e(`

	`),t("span",{class:"token keyword"},"for"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),e(" i "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),e(" i "),t("span",{class:"token operator"},"<"),e(" n"),t("span",{class:"token punctuation"},";"),e(" i"),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
		`),t("span",{class:"token keyword"},"let"),e(" left "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),e(`
		`),t("span",{class:"token keyword"},"let"),e(" right "),t("span",{class:"token operator"},"="),e(" len"),t("span",{class:"token punctuation"},";"),e(`

		`),t("span",{class:"token keyword"},"while"),e(),t("span",{class:"token punctuation"},"("),e("left "),t("span",{class:"token operator"},"<"),e(" right"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
			`),t("span",{class:"token keyword"},"const"),e(" mid "),t("span",{class:"token operator"},"="),e(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"floor"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),e("left "),t("span",{class:"token operator"},"+"),e(" right"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token operator"},"/"),e(),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
			`),t("span",{class:"token keyword"},"if"),e(),t("span",{class:"token punctuation"},"("),e("tails"),t("span",{class:"token punctuation"},"["),e("mid"),t("span",{class:"token punctuation"},"]"),e(),t("span",{class:"token operator"},"<"),e(" nums"),t("span",{class:"token punctuation"},"["),e("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
				left `),t("span",{class:"token operator"},"="),e(" mid "),t("span",{class:"token operator"},"+"),e(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},";"),e(`
			`),t("span",{class:"token punctuation"},"}"),e(),t("span",{class:"token keyword"},"else"),e(),t("span",{class:"token punctuation"},"{"),e(`
				right `),t("span",{class:"token operator"},"="),e(" mid"),t("span",{class:"token punctuation"},";"),e(`
			`),t("span",{class:"token punctuation"},"}"),e(`
		`),t("span",{class:"token punctuation"},"}"),e(`

		`),t("span",{class:"token keyword"},"if"),e(),t("span",{class:"token punctuation"},"("),e("left "),t("span",{class:"token operator"},"==="),e(" len"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
			tails`),t("span",{class:"token punctuation"},"["),e("len"),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},"]"),e(),t("span",{class:"token operator"},"="),e(" nums"),t("span",{class:"token punctuation"},"["),e("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),e(`
		`),t("span",{class:"token punctuation"},"}"),e(),t("span",{class:"token keyword"},"else"),e(),t("span",{class:"token punctuation"},"{"),e(`
			tails`),t("span",{class:"token punctuation"},"["),e("left"),t("span",{class:"token punctuation"},"]"),e(),t("span",{class:"token operator"},"="),e(" nums"),t("span",{class:"token punctuation"},"["),e("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),e(`
		`),t("span",{class:"token punctuation"},"}"),e(`
	`),t("span",{class:"token punctuation"},"}"),e(`

	`),t("span",{class:"token keyword"},"return"),e(" len"),t("span",{class:"token punctuation"},";"),e(`
`),t("span",{class:"token punctuation"},"}"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),O=t("h2",{id:"相关题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),e(" 相关题目")],-1),C=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),E=t("td",{style:{"text-align":"center"}},"334",-1),H={style:{"text-align":"left"}},L={href:"https://leetcode.com/problems/increasing-triplet-subsequence",target:"_blank",rel:"noopener noreferrer"},A=t("td",{style:{"text-align":"center"}},null,-1),N={style:{"text-align":"left"}},V=t("code",null,"贪心",-1),S=t("code",null,"数组",-1),T={style:{"text-align":"left"}},B=t("td",{style:{"text-align":"center"}},"354",-1),R={style:{"text-align":"left"}},F={href:"https://leetcode.com/problems/russian-doll-envelopes",target:"_blank",rel:"noopener noreferrer"},G={style:{"text-align":"center"}},K={href:"https://2xiao.github.io/leetcode-js/leetcode/problem/0354",target:"_blank",rel:"noopener noreferrer"},z={style:{"text-align":"left"}},D=t("code",null,"数组",-1),J=t("code",null,"二分查找",-1),P=t("code",null,"动态规划",-1),Q=t("code",null,"1+",-1),U={style:{"text-align":"left"}},W=t("td",{style:{"text-align":"center"}},"646",-1),X={style:{"text-align":"left"}},Y={href:"https://leetcode.com/problems/maximum-length-of-pair-chain",target:"_blank",rel:"noopener noreferrer"},Z=t("td",{style:{"text-align":"center"}},null,-1),$={style:{"text-align":"left"}},tt=t("code",null,"贪心",-1),et=t("code",null,"数组",-1),nt=t("code",null,"动态规划",-1),st=t("code",null,"1+",-1),ot={style:{"text-align":"left"}},lt=t("td",{style:{"text-align":"center"}},"673",-1),at={style:{"text-align":"left"}},ct={href:"https://leetcode.com/problems/number-of-longest-increasing-subsequence",target:"_blank",rel:"noopener noreferrer"},it=t("td",{style:{"text-align":"center"}},null,-1),dt={style:{"text-align":"left"}},ut=t("code",null,"树状数组",-1),rt=t("code",null,"线段树",-1),pt=t("code",null,"数组",-1),_t=t("code",null,"1+",-1),ht={style:{"text-align":"left"}},mt=t("td",{style:{"text-align":"center"}},"712",-1),kt={style:{"text-align":"left"}},gt={href:"https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings",target:"_blank",rel:"noopener noreferrer"},ft={style:{"text-align":"center"}},bt={href:"https://2xiao.github.io/leetcode-js/leetcode/problem/0712",target:"_blank",rel:"noopener noreferrer"},yt={style:{"text-align":"left"}},xt=t("code",null,"字符串",-1),vt=t("code",null,"动态规划",-1),wt={style:{"text-align":"left"}},qt=t("td",{style:{"text-align":"center"}},"1671",-1),It={style:{"text-align":"left"}},jt={href:"https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array",target:"_blank",rel:"noopener noreferrer"},Mt=t("td",{style:{"text-align":"center"}},null,-1),Ot={style:{"text-align":"left"}},Ct=t("code",null,"贪心",-1),Et=t("code",null,"数组",-1),Ht=t("code",null,"二分查找",-1),Lt=t("code",null,"1+",-1),At={style:{"text-align":"left"}},Nt=t("td",{style:{"text-align":"center"}},"1964",-1),Vt={style:{"text-align":"left"}},St={href:"https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position",target:"_blank",rel:"noopener noreferrer"},Tt=t("td",{style:{"text-align":"center"}},null,-1),Bt={style:{"text-align":"left"}},Rt=t("code",null,"树状数组",-1),Ft=t("code",null,"数组",-1),Gt=t("code",null,"二分查找",-1),Kt={style:{"text-align":"left"}},zt=t("td",{style:{"text-align":"center"}},"2111",-1),Dt={style:{"text-align":"left"}},Jt={href:"https://leetcode.com/problems/minimum-operations-to-make-the-array-k-increasing",target:"_blank",rel:"noopener noreferrer"},Pt=t("td",{style:{"text-align":"center"}},null,-1),Qt={style:{"text-align":"left"}},Ut=t("code",null,"数组",-1),Wt=t("code",null,"二分查找",-1),Xt={style:{"text-align":"left"}},Yt=t("td",{style:{"text-align":"center"}},"2355",-1),Zt={style:{"text-align":"left"}},$t={href:"https://leetcode.com/problems/maximum-number-of-books-you-can-take",target:"_blank",rel:"noopener noreferrer"},te=t("td",{style:{"text-align":"center"}},null,-1),ee={style:{"text-align":"left"}},ne=t("code",null,"栈",-1),se=t("code",null,"数组",-1),oe=t("code",null,"动态规划",-1),le=t("code",null,"1+",-1),ae={style:{"text-align":"left"}},ce=t("td",{style:{"text-align":"center"}},"2370",-1),ie={style:{"text-align":"left"}},de={href:"https://leetcode.com/problems/longest-ideal-subsequence",target:"_blank",rel:"noopener noreferrer"},ue=t("td",{style:{"text-align":"center"}},null,-1),re={style:{"text-align":"left"}},pe=t("code",null,"哈希表",-1),_e=t("code",null,"字符串",-1),he=t("code",null,"动态规划",-1),me={style:{"text-align":"left"}},ke=t("td",{style:{"text-align":"center"}},"2407",-1),ge={style:{"text-align":"left"}},fe={href:"https://leetcode.com/problems/longest-increasing-subsequence-ii",target:"_blank",rel:"noopener noreferrer"},be=t("td",{style:{"text-align":"center"}},null,-1),ye={style:{"text-align":"left"}},xe=t("code",null,"树状数组",-1),ve=t("code",null,"线段树",-1),we=t("code",null,"队列",-1),qe=t("code",null,"4+",-1),Ie={style:{"text-align":"left"}},je=t("td",{style:{"text-align":"center"}},"3176",-1),Me={style:{"text-align":"left"}},Oe={href:"https://leetcode.com/problems/find-the-maximum-length-of-a-good-subsequence-i",target:"_blank",rel:"noopener noreferrer"},Ce=t("td",{style:{"text-align":"center"}},null,-1),Ee={style:{"text-align":"left"}},He=t("code",null,"数组",-1),Le=t("code",null,"哈希表",-1),Ae=t("code",null,"动态规划",-1),Ne={style:{"text-align":"left"}},Ve=t("td",{style:{"text-align":"center"}},"3177",-1),Se={style:{"text-align":"left"}},Te={href:"https://leetcode.com/problems/find-the-maximum-length-of-a-good-subsequence-ii",target:"_blank",rel:"noopener noreferrer"},Be=t("td",{style:{"text-align":"center"}},null,-1),Re={style:{"text-align":"left"}},Fe=t("code",null,"数组",-1),Ge=t("code",null,"哈希表",-1),Ke=t("code",null,"动态规划",-1),ze={style:{"text-align":"left"}},De=t("td",{style:{"text-align":"center"}},"3201",-1),Je={style:{"text-align":"left"}},Pe={href:"https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-i",target:"_blank",rel:"noopener noreferrer"},Qe=t("td",{style:{"text-align":"center"}},null,-1),Ue={style:{"text-align":"left"}},We=t("code",null,"数组",-1),Xe=t("code",null,"动态规划",-1),Ye={style:{"text-align":"left"}},Ze=t("td",{style:{"text-align":"center"}},"3202",-1),$e={style:{"text-align":"left"}},tn={href:"https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-ii",target:"_blank",rel:"noopener noreferrer"},en=t("td",{style:{"text-align":"center"}},null,-1),nn={style:{"text-align":"left"}},sn=t("code",null,"数组",-1),on=t("code",null,"动态规划",-1),ln={style:{"text-align":"left"}};function an(cn,dn){const l=c("ExternalLinkIcon"),a=c("font"),o=c("RouterLink"),u=c("CodeTabs");return p(),_("div",null,[t("h1",g,[f,e(),t("a",b,[e("300. 最长递增子序列"),n(l)])]),t("p",null,[e("🟠 "),n(a,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1}),e("  🔖  "),n(o,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[y]),_:1}),e(),n(o,{to:"/leetcode/outline/tag/binary-search.html"},{default:s(()=>[x]),_:1}),e(),n(o,{to:"/leetcode/outline/tag/dynamic-programming.html"},{default:s(()=>[v]),_:1}),e("  🔗 "),t("a",w,[q,n(l)])]),I,n(u,{id:"260",data:[{id:"动态规划"},{id:"二分查找"}]},{title0:s(({value:i,isActive:d})=>[e("动态规划")]),title1:s(({value:i,isActive:d})=>[e("二分查找")]),tab0:s(({value:i,isActive:d})=>[j]),tab1:s(({value:i,isActive:d})=>[M]),_:1}),O,h(" prettier-ignore "),t("table",null,[C,t("tbody",null,[t("tr",null,[E,t("td",H,[t("a",L,[e("递增的三元子序列"),n(l)])]),A,t("td",N,[n(o,{to:"/leetcode/outline/tag/greedy.html"},{default:s(()=>[V]),_:1}),e(),n(o,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[S]),_:1})]),t("td",T,[n(a,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[B,t("td",R,[t("a",F,[e("俄罗斯套娃信封问题"),n(l)])]),t("td",G,[t("a",K,[e("[✓]"),n(l)])]),t("td",z,[n(o,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[D]),_:1}),e(),n(o,{to:"/leetcode/outline/tag/binary-search.html"},{default:s(()=>[J]),_:1}),e(),n(o,{to:"/leetcode/outline/tag/dynamic-programming.html"},{default:s(()=>[P]),_:1}),e(),Q]),t("td",U,[n(a,{color:"#ff334b"},{default:s(()=>[e("Hard")]),_:1})])]),t("tr",null,[W,t("td",X,[t("a",Y,[e("最长数对链"),n(l)])]),Z,t("td",$,[n(o,{to:"/leetcode/outline/tag/greedy.html"},{default:s(()=>[tt]),_:1}),e(),n(o,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[et]),_:1}),e(),n(o,{to:"/leetcode/outline/tag/dynamic-programming.html"},{default:s(()=>[nt]),_:1}),e(),st]),t("td",ot,[n(a,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[lt,t("td",at,[t("a",ct,[e("最长递增子序列的个数"),n(l)])]),it,t("td",dt,[n(o,{to:"/leetcode/outline/tag/binary-indexed-tree.html"},{default:s(()=>[ut]),_:1}),e(),n(o,{to:"/leetcode/outline/tag/segment-tree.html"},{default:s(()=>[rt]),_:1}),e(),n(o,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[pt]),_:1}),e(),_t]),t("td",ht,[n(a,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[mt,t("td",kt,[t("a",gt,[e("两个字符串的最小ASCII删除和"),n(l)])]),t("td",ft,[t("a",bt,[e("[✓]"),n(l)])]),t("td",yt,[n(o,{to:"/leetcode/outline/tag/string.html"},{default:s(()=>[xt]),_:1}),e(),n(o,{to:"/leetcode/outline/tag/dynamic-programming.html"},{default:s(()=>[vt]),_:1})]),t("td",wt,[n(a,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[qt,t("td",It,[t("a",jt,[e("得到山形数组的最少删除次数"),n(l)])]),Mt,t("td",Ot,[n(o,{to:"/leetcode/outline/tag/greedy.html"},{default:s(()=>[Ct]),_:1}),e(),n(o,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[Et]),_:1}),e(),n(o,{to:"/leetcode/outline/tag/binary-search.html"},{default:s(()=>[Ht]),_:1}),e(),Lt]),t("td",At,[n(a,{color:"#ff334b"},{default:s(()=>[e("Hard")]),_:1})])]),t("tr",null,[Nt,t("td",Vt,[t("a",St,[e("找出到每个位置为止最长的有效障碍赛跑路线"),n(l)])]),Tt,t("td",Bt,[n(o,{to:"/leetcode/outline/tag/binary-indexed-tree.html"},{default:s(()=>[Rt]),_:1}),e(),n(o,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[Ft]),_:1}),e(),n(o,{to:"/leetcode/outline/tag/binary-search.html"},{default:s(()=>[Gt]),_:1})]),t("td",Kt,[n(a,{color:"#ff334b"},{default:s(()=>[e("Hard")]),_:1})])]),t("tr",null,[zt,t("td",Dt,[t("a",Jt,[e("使数组 K 递增的最少操作次数"),n(l)])]),Pt,t("td",Qt,[n(o,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[Ut]),_:1}),e(),n(o,{to:"/leetcode/outline/tag/binary-search.html"},{default:s(()=>[Wt]),_:1})]),t("td",Xt,[n(a,{color:"#ff334b"},{default:s(()=>[e("Hard")]),_:1})])]),t("tr",null,[Yt,t("td",Zt,[t("a",$t,[e("你能拿走的最大图书数量"),n(l)])]),te,t("td",ee,[n(o,{to:"/leetcode/outline/tag/stack.html"},{default:s(()=>[ne]),_:1}),e(),n(o,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[se]),_:1}),e(),n(o,{to:"/leetcode/outline/tag/dynamic-programming.html"},{default:s(()=>[oe]),_:1}),e(),le]),t("td",ae,[n(a,{color:"#ff334b"},{default:s(()=>[e("Hard")]),_:1})])]),t("tr",null,[ce,t("td",ie,[t("a",de,[e("最长理想子序列"),n(l)])]),ue,t("td",re,[n(o,{to:"/leetcode/outline/tag/hash-table.html"},{default:s(()=>[pe]),_:1}),e(),n(o,{to:"/leetcode/outline/tag/string.html"},{default:s(()=>[_e]),_:1}),e(),n(o,{to:"/leetcode/outline/tag/dynamic-programming.html"},{default:s(()=>[he]),_:1})]),t("td",me,[n(a,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[ke,t("td",ge,[t("a",fe,[e("最长递增子序列 II"),n(l)])]),be,t("td",ye,[n(o,{to:"/leetcode/outline/tag/binary-indexed-tree.html"},{default:s(()=>[xe]),_:1}),e(),n(o,{to:"/leetcode/outline/tag/segment-tree.html"},{default:s(()=>[ve]),_:1}),e(),n(o,{to:"/leetcode/outline/tag/queue.html"},{default:s(()=>[we]),_:1}),e(),qe]),t("td",Ie,[n(a,{color:"#ff334b"},{default:s(()=>[e("Hard")]),_:1})])]),t("tr",null,[je,t("td",Me,[t("a",Oe,[e("求出最长好子序列 I"),n(l)])]),Ce,t("td",Ee,[n(o,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[He]),_:1}),e(),n(o,{to:"/leetcode/outline/tag/hash-table.html"},{default:s(()=>[Le]),_:1}),e(),n(o,{to:"/leetcode/outline/tag/dynamic-programming.html"},{default:s(()=>[Ae]),_:1})]),t("td",Ne,[n(a,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[Ve,t("td",Se,[t("a",Te,[e("求出最长好子序列 II"),n(l)])]),Be,t("td",Re,[n(o,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[Fe]),_:1}),e(),n(o,{to:"/leetcode/outline/tag/hash-table.html"},{default:s(()=>[Ge]),_:1}),e(),n(o,{to:"/leetcode/outline/tag/dynamic-programming.html"},{default:s(()=>[Ke]),_:1})]),t("td",ze,[n(a,{color:"#ff334b"},{default:s(()=>[e("Hard")]),_:1})])]),t("tr",null,[De,t("td",Je,[t("a",Pe,[e("找出有效子序列的最大长度 I"),n(l)])]),Qe,t("td",Ue,[n(o,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[We]),_:1}),e(),n(o,{to:"/leetcode/outline/tag/dynamic-programming.html"},{default:s(()=>[Xe]),_:1})]),t("td",Ye,[n(a,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[Ze,t("td",$e,[t("a",tn,[e("找出有效子序列的最大长度 II"),n(l)])]),en,t("td",nn,[n(o,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[sn]),_:1}),e(),n(o,{to:"/leetcode/outline/tag/dynamic-programming.html"},{default:s(()=>[on]),_:1})]),t("td",ln,[n(a,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])])])])])}const rn=r(k,[["render",an],["__file","0300.html.vue"]]);export{rn as default};
