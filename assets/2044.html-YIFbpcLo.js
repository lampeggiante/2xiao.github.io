import{_ as d,r as l,o as k,c as m,a as n,b as t,d as s,w as e,f as b,e as u}from"./app-5VBZs9Uu.js";const h={},g={id:"_2044-统计按位或能得到最大值的子集数目",tabindex:"-1"},_=n("a",{class:"header-anchor",href:"#_2044-统计按位或能得到最大值的子集数目","aria-hidden":"true"},"#",-1),f={href:"https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"位运算",-1),x=n("code",null,"数组",-1),y=n("code",null,"回溯",-1),w=n("code",null,"枚举",-1),O={href:"https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets",target:"_blank",rel:"noopener noreferrer"},R=n("code",null,"LeetCode",-1),j=u('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code>, find the <strong>maximum</strong> possible <strong>bitwise OR</strong> of a subset of <code>nums</code> and return <em>the <strong>number of different non-empty subsets</strong> with the maximum bitwise OR</em>.</p><p>An array <code>a</code> is a <strong>subset</strong> of an array <code>b</code> if <code>a</code> can be obtained from <code>b</code> by deleting some (possibly zero) elements of <code>b</code>. Two subsets are considered <strong>different</strong> if the indices of the elements chosen are different.</p><p>The bitwise OR of an array <code>a</code> is equal to <code>a[0] **OR** a[1] **OR** ... **OR** a[a.length - 1]</code> (<strong>0-indexed</strong>).</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [3,1]</p><p>Output: 2</p><p>Explanation: The maximum possible bitwise OR of a subset is 3. There are 2 subsets with a bitwise OR of 3:</p><ul><li>[3]</li><li>[3,1]</li></ul></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [2,2,2]</p><p>Output: 7</p><p>Explanation: All non-empty subsets of [2,2,2] have a bitwise OR of 2. There are 2^3 - 1 = 7 total subsets.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [3,2,1,5]</p><p>Output: 6</p><p>Explanation: The maximum possible bitwise OR of a subset is 7. There are 6 subsets with a bitwise OR of 7:</p><ul><li>[3,5]</li><li>[3,1,5]</li><li>[3,2,5]</li><li>[3,2,1,5]</li><li>[2,5]</li><li>[2,1,5]</li></ul></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 16</code></li><li><code>1 &lt;= nums[i] &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code> ，请你找出 <code>nums</code> 子集 <strong>按位或</strong> 可能得到的<strong>最大值</strong> ，并返回按位或能得到最大值的 <strong>不同非空子集的数目</strong> 。</p><p>如果数组 <code>a</code> 可以由数组 <code>b</code> 删除一些元素（或不删除）得到，则认为数组 <code>a</code> 是数组 <code>b</code> 的一个 <strong>子集</strong> 。如果选中的元素下标位置不一样，则认为两个子集 <strong>不同</strong> 。</p><p>对数组 <code>a</code> 执行 <strong>按位或</strong> ，结果等于 <code>a[0] OR a[1] OR ... OR a[a.length - 1]</code>（下标从 <strong>0</strong> 开始）。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [3,1]</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 子集按位或能得到的最大值是 3 。有 2 个子集按位或可以得到 3 ：</p><ul><li>[3]</li><li>[3,1]</li></ul></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [2,2,2]</p><p><strong>输出：</strong> 7</p><p><strong>解释：</strong>[2,2,2] 的所有非空子集的按位或都可以得到 2 。总共有 2^3 - 1 = 7 个子集。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> nums = [3,2,1,5]</p><p><strong>输出：</strong> 6</p><p><strong>解释：</strong> 子集按位或可能的最大值是 7 。有 6 个子集按位或可以得到 7 ：</p><ul><li>[3,5]</li><li>[3,1,5]</li><li>[3,2,5]</li><li>[3,2,1,5]</li><li>[2,5]</li><li>[2,1,5]</li></ul></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 16</code></li><li><code>1 &lt;= nums[i] &lt;= 10^5</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-回溯" tabindex="-1"><a class="header-anchor" href="#思路一-回溯" aria-hidden="true">#</a> 思路一：回溯</h3>',26),q=u('<ol><li><p><strong>初始化</strong>：</p><ul><li>创建一个变量 <code>maxOR</code> 用于存储当前找到的最大按位或值，另一个变量 <code>count</code> 用于记录可以得到该最大值的不同非空子集的数量。</li><li>使用一个 <code>track</code> 变量来维护当前子集的按位或值。</li></ul></li><li><p><strong>回溯函数</strong>：</p><ul><li>定义一个回溯函数 <code>backtrack(start)</code>，用于生成从 <code>start</code> 开始的所有子集。</li><li>在每次递归中，遍历当前索引 <code>start</code> 到数组末尾的所有元素，进行如下操作： <ul><li><strong>记录状态</strong>：在处理当前元素前，保存当前的 <code>track</code> 值。</li><li><strong>更新 <code>track</code></strong>：将当前元素与 <code>track</code> 进行按位或运算，更新 <code>track</code>。</li><li><strong>更新最大值和计数</strong>： <ul><li>如果当前 <code>track</code> 的值大于 <code>maxOR</code>，则更新 <code>maxOR</code> 并将 <code>count</code> 重置为 1（表示找到一个新的最大值）。</li><li>如果当前 <code>track</code> 等于 <code>maxOR</code>，则将 <code>count</code> 加 1（表示找到一个符合条件的子集）。</li></ul></li><li><strong>递归调用</strong>：递归地调用 <code>backtrack(i + 1)</code>，继续处理下一个元素。</li><li><strong>恢复状态</strong>：在返回之前，将 <code>track</code> 恢复到之前的状态，以便进行下一次迭代。</li></ul></li></ul></li><li><p><strong>启动回溯</strong>：</p><ul><li>从索引 0 开始调用 <code>backtrack(0)</code>，以生成所有可能的子集。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>函数结束后返回 <code>count</code>，即能够生成最大按位或值的不同非空子集的数量。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(2^n)</code>，其中 n 是数组的长度，每个元素可以选择加入或不加入子集中，最多会有 <code>2^n</code> 个子集，最坏情况下需要检查所有子集。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，主要开销是递归栈的空间，递归调用的深度最多为 <code>n</code>。</li></ul><h3 id="思路二-隐式回溯" tabindex="-1"><a class="header-anchor" href="#思路二-隐式回溯" aria-hidden="true">#</a> 思路二：隐式回溯</h3><p>可以对上面的代码进一步优化。</p><ol><li><p>隐式回溯 给回溯函数增加一个参数 <code>currentOR</code>，直接通过 <code>currentOR</code> 参数来跟踪当前的按位或值，将 <code>track</code> 的更新逻辑移除，隐式地回溯，简化状态管理。</p></li><li><p>直接求得最大按位或值 <code>maxOR</code> 按位或运算（<code>|</code>）对两个数的每一位进行比较，只要有一位是 1，结果的该位就是 1。因此，按位或的结果会保留所有参与运算数的 1。</p><p>所以最大按位或值 <code>maxOR</code> 就是将数组中的所有元素进行按位或运算，因为它将包含所有元素在其二进制表示中存在的所有 1 位。</p><p>即：<code>maxOR = nums.reduce((acc, num) =&gt; acc | num, 0)</code></p><p>因此可以直接求得 <code>maxOR</code>，移除在递归中计算最大值的逻辑，简化状态管理。</p></li></ol><p>复杂度分析同上。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',8),T=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"nums"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"countMaxOrSubsets"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"nums"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" n "),n("span",{class:"token operator"},"="),t(" nums"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" track "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(`
		maxOR `),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(`
		count `),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"backtrack"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"start"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(" start"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(" n"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token comment"},"// 记录当前状态"),t(`
			`),n("span",{class:"token keyword"},"const"),t(" currentTrack "),n("span",{class:"token operator"},"="),t(" track"),n("span",{class:"token punctuation"},";"),t(`

			`),n("span",{class:"token comment"},"// 更新 track"),t(`
			track `),n("span",{class:"token operator"},"|="),t(" nums"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`

			`),n("span",{class:"token comment"},"// 根据 track 的值更新 maxOR 和 count"),t(`
			`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("track "),n("span",{class:"token operator"},">"),t(" maxOR"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
				maxOR `),n("span",{class:"token operator"},"="),t(" track"),n("span",{class:"token punctuation"},";"),t(`
				count `),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},"// 找到新的最大值，重置计数"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("track "),n("span",{class:"token operator"},"==="),t(" maxOR"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
				count`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},"// 当前值等于最大值，计数加 1"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(`

			`),n("span",{class:"token comment"},"// 递归调用"),t(`
			`),n("span",{class:"token function"},"backtrack"),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

			`),n("span",{class:"token comment"},"// 恢复 track 的状态"),t(`
			track `),n("span",{class:"token operator"},"="),t(" currentTrack"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token function"},"backtrack"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" count"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"nums"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"countMaxOrSubsets"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"nums"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" n "),n("span",{class:"token operator"},"="),t(" nums"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" maxOR "),n("span",{class:"token operator"},"="),t(" nums"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reduce"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("acc"),n("span",{class:"token punctuation"},","),t(" num")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(" acc "),n("span",{class:"token operator"},"|"),t(" num"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" count "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"backtrack"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("start"),n("span",{class:"token punctuation"},","),t(" currentOR")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(" start"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(" n"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token keyword"},"const"),t(" newOR "),n("span",{class:"token operator"},"="),t(" currentOR "),n("span",{class:"token operator"},"|"),t(" nums"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`

			`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("newOR "),n("span",{class:"token operator"},"==="),t(" maxOR"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
				count`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},"// 如果当前按位或值等于最大值，计数加 1"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(`

			`),n("span",{class:"token function"},"backtrack"),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(" newOR"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},"// 递归调用，更新 currentOR"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token function"},"backtrack"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},"// 从索引 0 开始，初始按位或值为 0"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" count"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),A=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),M=n("td",{style:{"text-align":"center"}},"78",-1),I={style:{"text-align":"left"}},L={href:"https://leetcode.com/problems/subsets",target:"_blank",rel:"noopener noreferrer"},N={style:{"text-align":"center"}},V={style:{"text-align":"left"}},B=n("code",null,"位运算",-1),S=n("code",null,"数组",-1),z=n("code",null,"回溯",-1),G={style:{"text-align":"left"}},D=n("td",{style:{"text-align":"center"}},"2275",-1),F={style:{"text-align":"left"}},H={href:"https://leetcode.com/problems/largest-combination-with-bitwise-and-greater-than-zero",target:"_blank",rel:"noopener noreferrer"},J=n("td",{style:{"text-align":"center"}},null,-1),K={style:{"text-align":"left"}},P=n("code",null,"位运算",-1),Q=n("code",null,"数组",-1),U=n("code",null,"哈希表",-1),W=n("code",null,"1+",-1),X={style:{"text-align":"left"}},Y=n("td",{style:{"text-align":"center"}},"2419",-1),Z={style:{"text-align":"left"}},$={href:"https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and",target:"_blank",rel:"noopener noreferrer"},nn=n("td",{style:{"text-align":"center"}},null,-1),tn={style:{"text-align":"left"}},sn=n("code",null,"位运算",-1),en=n("code",null,"脑筋急转弯",-1),an=n("code",null,"数组",-1),on={style:{"text-align":"left"}};function cn(ln,rn){const o=l("ExternalLinkIcon"),c=l("font"),a=l("RouterLink"),p=l("CodeTabs");return k(),m("div",null,[n("h1",g,[_,t(),n("a",f,[t("2044. 统计按位或能得到最大值的子集数目"),s(o)])]),n("p",null,[t("🟠 "),s(c,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1}),t("  🔖  "),s(a,{to:"/leetcode-js/outline/tag/bit-manipulation.html"},{default:e(()=>[v]),_:1}),t(),s(a,{to:"/leetcode-js/outline/tag/array.html"},{default:e(()=>[x]),_:1}),t(),s(a,{to:"/leetcode-js/outline/tag/backtracking.html"},{default:e(()=>[y]),_:1}),t(),s(a,{to:"/leetcode-js/outline/tag/enumeration.html"},{default:e(()=>[w]),_:1}),t("  🔗 "),n("a",O,[R,s(o)])]),j,n("p",null,[t("这道题目还可以使用回溯来做，对应到算法详解"),s(a,{to:"/leetcode-js/algorithm/backtracking.html"},{default:e(()=>[t("《3.4 回溯算法》")]),_:1}),t(" 中讲到的「元素可重不可复选 - 子集」题型。")]),q,s(p,{id:"388",data:[{id:"回溯"},{id:"隐式回溯"}]},{title0:e(({value:i,isActive:r})=>[t("回溯")]),title1:e(({value:i,isActive:r})=>[t("隐式回溯")]),tab0:e(({value:i,isActive:r})=>[T]),tab1:e(({value:i,isActive:r})=>[E]),_:1}),C,b(" prettier-ignore "),n("table",null,[A,n("tbody",null,[n("tr",null,[M,n("td",I,[n("a",L,[t("子集"),s(o)])]),n("td",N,[s(a,{to:"/leetcode-js/problem/0078.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",V,[s(a,{to:"/leetcode-js/outline/tag/bit-manipulation.html"},{default:e(()=>[B]),_:1}),t(),s(a,{to:"/leetcode-js/outline/tag/array.html"},{default:e(()=>[S]),_:1}),t(),s(a,{to:"/leetcode-js/outline/tag/backtracking.html"},{default:e(()=>[z]),_:1})]),n("td",G,[s(c,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1})])]),n("tr",null,[D,n("td",F,[n("a",H,[t("按位与结果大于零的最长组合"),s(o)])]),J,n("td",K,[s(a,{to:"/leetcode-js/outline/tag/bit-manipulation.html"},{default:e(()=>[P]),_:1}),t(),s(a,{to:"/leetcode-js/outline/tag/array.html"},{default:e(()=>[Q]),_:1}),t(),s(a,{to:"/leetcode-js/outline/tag/hash-table.html"},{default:e(()=>[U]),_:1}),t(),W]),n("td",X,[s(c,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1})])]),n("tr",null,[Y,n("td",Z,[n("a",$,[t("按位与最大的最长子数组"),s(o)])]),nn,n("td",tn,[s(a,{to:"/leetcode-js/outline/tag/bit-manipulation.html"},{default:e(()=>[sn]),_:1}),t(),s(a,{to:"/leetcode-js/outline/tag/brainteaser.html"},{default:e(()=>[en]),_:1}),t(),s(a,{to:"/leetcode-js/outline/tag/array.html"},{default:e(()=>[an]),_:1})]),n("td",on,[s(c,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1})])])])])])}const pn=d(h,[["render",cn],["__file","2044.html.vue"]]);export{pn as default};
