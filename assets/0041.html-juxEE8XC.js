import{_ as r,r as c,o as p,c as _,a as t,b as e,d as n,w as s,f as h,e as m}from"./app-GnK0vSxb.js";const k={},f={id:"_41-缺失的第一个正数",tabindex:"-1"},g=t("a",{class:"header-anchor",href:"#_41-缺失的第一个正数","aria-hidden":"true"},"#",-1),b={href:"https://leetcode.com/problems/first-missing-positive",target:"_blank",rel:"noopener noreferrer"},y=t("code",null,"数组",-1),x=t("code",null,"哈希表",-1),v={href:"https://leetcode.com/problems/first-missing-positive",target:"_blank",rel:"noopener noreferrer"},w=t("code",null,"LeetCode",-1),E=m('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an unsorted integer array <code>nums</code>, return the smallest missing positive integer.</p><p>You must implement an algorithm that runs in <code>O(n)</code> time and uses <code>O(1)</code> auxiliary space.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,2,0]</p><p>Output: 3</p><p>Explanation: The numbers in the range [1,2] are all in the array.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [3,4,-1,1]</p><p>Output: 2</p><p>Explanation: 1 is in the array but 2 is missing.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [7,8,9,11,12]</p><p>Output: 1</p><p>Explanation: The smallest positive integer 1 is missing.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>-2^31 &lt;= nums[i] &lt;= 2^31 - 1</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个未排序的整数数组 <code>nums</code> ，请你找出其中没有出现的最小的正整数。</p><p>请你实现时间复杂度为 <code>O(n)</code> 并且只使用常数级别额外空间的解决方案。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-哈希表" tabindex="-1"><a class="header-anchor" href="#思路一-哈希表" aria-hidden="true">#</a> 思路一：哈希表</h3><p>为了减少时间复杂度，可以把 <code>input</code> 数组都装到 <code>map</code> 中，然后 <code>i</code> 循环从 <code>1</code> 开始，依次比对 <code>map</code> 中是否存在 <code>i</code>，只要不存在 <code>i</code> 就立即返回结果，即所求。但是这种方法的空间复杂度为 <code>O(n)</code>，不满足题意。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，需要遍历数组。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，需要一个大小为 <code>n</code> 的哈希表存储数据。</li></ul><hr><h3 id="思路二-原地哈希" tabindex="-1"><a class="header-anchor" href="#思路二-原地哈希" aria-hidden="true">#</a> 思路二：原地哈希</h3><p>原地哈希的意思是利用数组的索引来存储元素的存在性。具体来说，将每个值 <code>x</code> 放到数组的索引 <code>x-1</code> 处（即 <code>nums[x-1]</code>），如果 <code>x</code> 的值在 <code>[1, n]</code> 范围内。这样做的前提是，数组中只有正整数。</p><ul><li><p><strong>遍历数组</strong>：</p><ul><li>首先遍历数组，将每个有效的正整数放到正确的位置（即将 <code>x</code> 放到 <code>nums[x-1]</code>）。</li><li>对于每个值 <code>x</code>，如果 <code>1 ≤ x ≤ n</code>，并且 <code>nums[x-1]</code> 不是 <code>x</code>，则交换 <code>nums[i]</code> 和 <code>nums[x-1]</code>，直到 <code>nums[i]</code> 在正确的位置。</li></ul></li><li><p><strong>第二次遍历</strong>：</p><ul><li>再次遍历数组，找到第一个位置 <code>i</code>，使得 <code>nums[i]</code> 不等于 <code>i + 1</code>，那么 <code>i + 1</code> 就是缺失的正整数。</li></ul></li><li><p><strong>边界情况</strong>：</p><ul><li>如果所有位置都满足 <code>nums[i] = i + 1</code>，那么缺失的第一个正整数就是 <code>n + 1</code>。</li></ul></li></ul><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，数组只遍历了两次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常量级别的额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',26),O=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[e(`/**
 * `),t("span",{class:"token keyword"},"@param"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),e(),t("span",{class:"token parameter"},"nums"),e(`
 * `),t("span",{class:"token keyword"},"@return"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("number"),t("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),t("span",{class:"token keyword"},"var"),e(),t("span",{class:"token function-variable function"},"firstMissingPositive"),e(),t("span",{class:"token operator"},"="),e(),t("span",{class:"token keyword"},"function"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"nums"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
	`),t("span",{class:"token keyword"},"let"),e(" map "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token keyword"},"new"),e(),t("span",{class:"token class-name"},"Map"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"for"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),e(" i "),t("span",{class:"token keyword"},"of"),e(" nums"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
		map`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"set"),t("span",{class:"token punctuation"},"("),e("i"),t("span",{class:"token punctuation"},","),e(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token punctuation"},"}"),e(`
	`),t("span",{class:"token keyword"},"let"),e(" i "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"while"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
		`),t("span",{class:"token keyword"},"if"),e(),t("span",{class:"token punctuation"},"("),e("map"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"has"),t("span",{class:"token punctuation"},"("),e("i"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),e(" i"),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},";"),e(`
		`),t("span",{class:"token keyword"},"else"),e(),t("span",{class:"token keyword"},"return"),e(" i"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token punctuation"},"}"),e(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),M=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[e(`/**
 * `),t("span",{class:"token keyword"},"@param"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),e(),t("span",{class:"token parameter"},"nums"),e(`
 * `),t("span",{class:"token keyword"},"@return"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("number"),t("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),t("span",{class:"token keyword"},"var"),e(),t("span",{class:"token function-variable function"},"firstMissingPositive"),e(),t("span",{class:"token operator"},"="),e(),t("span",{class:"token keyword"},"function"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"nums"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
	`),t("span",{class:"token keyword"},"const"),e(" n "),t("span",{class:"token operator"},"="),e(" nums"),t("span",{class:"token punctuation"},"."),e("length"),t("span",{class:"token punctuation"},";"),e(`

	`),t("span",{class:"token comment"},"// 1. 将每个数放到对应的位置"),e(`
	`),t("span",{class:"token keyword"},"for"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),e(" i "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),e(" i "),t("span",{class:"token operator"},"<"),e(" n"),t("span",{class:"token punctuation"},";"),e(" i"),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
		`),t("span",{class:"token keyword"},"while"),e(),t("span",{class:"token punctuation"},"("),e("nums"),t("span",{class:"token punctuation"},"["),e("i"),t("span",{class:"token punctuation"},"]"),e(),t("span",{class:"token operator"},">"),e(),t("span",{class:"token number"},"0"),e(),t("span",{class:"token operator"},"&&"),e(" nums"),t("span",{class:"token punctuation"},"["),e("i"),t("span",{class:"token punctuation"},"]"),e(),t("span",{class:"token operator"},"<="),e(" n "),t("span",{class:"token operator"},"&&"),e(" nums"),t("span",{class:"token punctuation"},"["),e("nums"),t("span",{class:"token punctuation"},"["),e("i"),t("span",{class:"token punctuation"},"]"),e(),t("span",{class:"token operator"},"-"),e(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),e(),t("span",{class:"token operator"},"!=="),e(" nums"),t("span",{class:"token punctuation"},"["),e("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
			`),t("span",{class:"token comment"},"// 交换 nums[i] 和 nums[nums[i] - 1]"),e(`
			`),t("span",{class:"token keyword"},"const"),e(" temp "),t("span",{class:"token operator"},"="),e(" nums"),t("span",{class:"token punctuation"},"["),e("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),e(`
			nums`),t("span",{class:"token punctuation"},"["),e("i"),t("span",{class:"token punctuation"},"]"),e(),t("span",{class:"token operator"},"="),e(" nums"),t("span",{class:"token punctuation"},"["),e("temp "),t("span",{class:"token operator"},"-"),e(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),e(`
			nums`),t("span",{class:"token punctuation"},"["),e("temp "),t("span",{class:"token operator"},"-"),e(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),e(),t("span",{class:"token operator"},"="),e(" temp"),t("span",{class:"token punctuation"},";"),e(`
		`),t("span",{class:"token punctuation"},"}"),e(`
	`),t("span",{class:"token punctuation"},"}"),e(`

	`),t("span",{class:"token comment"},"// 2. 查找第一个缺失的正整数"),e(`
	`),t("span",{class:"token keyword"},"for"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),e(" i "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),e(" i "),t("span",{class:"token operator"},"<"),e(" n"),t("span",{class:"token punctuation"},";"),e(" i"),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
		`),t("span",{class:"token keyword"},"if"),e(),t("span",{class:"token punctuation"},"("),e("nums"),t("span",{class:"token punctuation"},"["),e("i"),t("span",{class:"token punctuation"},"]"),e(),t("span",{class:"token operator"},"!=="),e(" i "),t("span",{class:"token operator"},"+"),e(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
			`),t("span",{class:"token keyword"},"return"),e(" i "),t("span",{class:"token operator"},"+"),e(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},";"),e(),t("span",{class:"token comment"},"// 找到第一个缺失的正整数"),e(`
		`),t("span",{class:"token punctuation"},"}"),e(`
	`),t("span",{class:"token punctuation"},"}"),e(`

	`),t("span",{class:"token keyword"},"return"),e(" n "),t("span",{class:"token operator"},"+"),e(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},";"),e(),t("span",{class:"token comment"},"// 如果 1 到 n 的正整数都在"),e(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),I=t("h2",{id:"相关题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),e(" 相关题目")],-1),q=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),C=t("td",{style:{"text-align":"center"}},"268",-1),j={style:{"text-align":"left"}},L={href:"https://leetcode.com/problems/missing-number",target:"_blank",rel:"noopener noreferrer"},N={style:{"text-align":"center"}},T={style:{"text-align":"left"}},V=t("code",null,"位运算",-1),A=t("code",null,"数组",-1),B=t("code",null,"哈希表",-1),H=t("code",null,"3+",-1),P={style:{"text-align":"left"}},R=t("td",{style:{"text-align":"center"}},"287",-1),G={style:{"text-align":"left"}},S={href:"https://leetcode.com/problems/find-the-duplicate-number",target:"_blank",rel:"noopener noreferrer"},X={style:{"text-align":"center"}},Y={style:{"text-align":"left"}},z=t("code",null,"位运算",-1),D=t("code",null,"数组",-1),F=t("code",null,"双指针",-1),J=t("code",null,"1+",-1),K={style:{"text-align":"left"}},Q=t("td",{style:{"text-align":"center"}},"448",-1),U={style:{"text-align":"left"}},W={href:"https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array",target:"_blank",rel:"noopener noreferrer"},Z=t("td",{style:{"text-align":"center"}},null,-1),$={style:{"text-align":"left"}},tt=t("code",null,"数组",-1),et=t("code",null,"哈希表",-1),nt={style:{"text-align":"left"}},st=t("td",{style:{"text-align":"center"}},"765",-1),ot={style:{"text-align":"left"}},at={href:"https://leetcode.com/problems/couples-holding-hands",target:"_blank",rel:"noopener noreferrer"},lt=t("td",{style:{"text-align":"center"}},null,-1),ct={style:{"text-align":"left"}},it=t("code",null,"贪心",-1),dt=t("code",null,"深度优先搜索",-1),ut=t("code",null,"广度优先搜索",-1),rt=t("code",null,"2+",-1),pt={style:{"text-align":"left"}},_t=t("td",{style:{"text-align":"center"}},"2336",-1),ht={style:{"text-align":"left"}},mt={href:"https://leetcode.com/problems/smallest-number-in-infinite-set",target:"_blank",rel:"noopener noreferrer"},kt=t("td",{style:{"text-align":"center"}},null,-1),ft={style:{"text-align":"left"}},gt=t("code",null,"设计",-1),bt=t("code",null,"哈希表",-1),yt=t("code",null,"有序集合",-1),xt=t("code",null,"1+",-1),vt={style:{"text-align":"left"}},wt=t("td",{style:{"text-align":"center"}},"2554",-1),Et={style:{"text-align":"left"}},Ot={href:"https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i",target:"_blank",rel:"noopener noreferrer"},Mt=t("td",{style:{"text-align":"center"}},null,-1),It={style:{"text-align":"left"}},qt=t("code",null,"贪心",-1),Ct=t("code",null,"数组",-1),jt=t("code",null,"哈希表",-1),Lt=t("code",null,"2+",-1),Nt={style:{"text-align":"left"}},Tt=t("td",{style:{"text-align":"center"}},"2557",-1),Vt={style:{"text-align":"left"}},At={href:"https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-ii",target:"_blank",rel:"noopener noreferrer"},Bt=t("td",{style:{"text-align":"center"}},null,-1),Ht={style:{"text-align":"left"}},Pt=t("code",null,"贪心",-1),Rt=t("code",null,"数组",-1),Gt=t("code",null,"二分查找",-1),St=t("code",null,"1+",-1),Xt={style:{"text-align":"left"}},Yt=t("td",{style:{"text-align":"center"}},"2598",-1),zt={style:{"text-align":"left"}},Dt={href:"https://leetcode.com/problems/smallest-missing-non-negative-integer-after-operations",target:"_blank",rel:"noopener noreferrer"},Ft=t("td",{style:{"text-align":"center"}},null,-1),Jt={style:{"text-align":"left"}},Kt=t("code",null,"贪心",-1),Qt=t("code",null,"数组",-1),Ut=t("code",null,"哈希表",-1),Wt=t("code",null,"1+",-1),Zt={style:{"text-align":"left"}},$t=t("td",{style:{"text-align":"center"}},"2996",-1),te={style:{"text-align":"left"}},ee={href:"https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum",target:"_blank",rel:"noopener noreferrer"},ne=t("td",{style:{"text-align":"center"}},null,-1),se={style:{"text-align":"left"}},oe=t("code",null,"数组",-1),ae=t("code",null,"哈希表",-1),le=t("code",null,"排序",-1),ce={style:{"text-align":"left"}};function ie(de,ue){const a=c("ExternalLinkIcon"),l=c("font"),o=c("RouterLink"),u=c("CodeTabs");return p(),_("div",null,[t("h1",f,[g,e(),t("a",b,[e("41. 缺失的第一个正数"),n(a)])]),t("p",null,[e("🔴 "),n(l,{color:"#ff334b"},{default:s(()=>[e("Hard")]),_:1}),e("  🔖  "),n(o,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[y]),_:1}),e(),n(o,{to:"/leetcode/outline/tag/hash-table.html"},{default:s(()=>[x]),_:1}),e("  🔗 "),t("a",v,[w,n(a)])]),E,n(u,{id:"173",data:[{id:"哈希表"},{id:"原地哈希"}]},{title0:s(({value:i,isActive:d})=>[e("哈希表")]),title1:s(({value:i,isActive:d})=>[e("原地哈希")]),tab0:s(({value:i,isActive:d})=>[O]),tab1:s(({value:i,isActive:d})=>[M]),_:1}),I,h(" prettier-ignore "),t("table",null,[q,t("tbody",null,[t("tr",null,[C,t("td",j,[t("a",L,[e("丢失的数字"),n(a)])]),t("td",N,[n(o,{to:"/leetcode/problem/0268.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",T,[n(o,{to:"/leetcode/outline/tag/bit-manipulation.html"},{default:s(()=>[V]),_:1}),e(),n(o,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[A]),_:1}),e(),n(o,{to:"/leetcode/outline/tag/hash-table.html"},{default:s(()=>[B]),_:1}),e(),H]),t("td",P,[n(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1})])]),t("tr",null,[R,t("td",G,[t("a",S,[e("寻找重复数"),n(a)])]),t("td",X,[n(o,{to:"/leetcode/problem/0287.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",Y,[n(o,{to:"/leetcode/outline/tag/bit-manipulation.html"},{default:s(()=>[z]),_:1}),e(),n(o,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[D]),_:1}),e(),n(o,{to:"/leetcode/outline/tag/two-pointers.html"},{default:s(()=>[F]),_:1}),e(),J]),t("td",K,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[Q,t("td",U,[t("a",W,[e("找到所有数组中消失的数字"),n(a)])]),Z,t("td",$,[n(o,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[tt]),_:1}),e(),n(o,{to:"/leetcode/outline/tag/hash-table.html"},{default:s(()=>[et]),_:1})]),t("td",nt,[n(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1})])]),t("tr",null,[st,t("td",ot,[t("a",at,[e("情侣牵手"),n(a)])]),lt,t("td",ct,[n(o,{to:"/leetcode/outline/tag/greedy.html"},{default:s(()=>[it]),_:1}),e(),n(o,{to:"/leetcode/outline/tag/depth-first-search.html"},{default:s(()=>[dt]),_:1}),e(),n(o,{to:"/leetcode/outline/tag/breadth-first-search.html"},{default:s(()=>[ut]),_:1}),e(),rt]),t("td",pt,[n(l,{color:"#ff334b"},{default:s(()=>[e("Hard")]),_:1})])]),t("tr",null,[_t,t("td",ht,[t("a",mt,[e("无限集中的最小数字"),n(a)])]),kt,t("td",ft,[n(o,{to:"/leetcode/outline/tag/design.html"},{default:s(()=>[gt]),_:1}),e(),n(o,{to:"/leetcode/outline/tag/hash-table.html"},{default:s(()=>[bt]),_:1}),e(),n(o,{to:"/leetcode/outline/tag/ordered-set.html"},{default:s(()=>[yt]),_:1}),e(),xt]),t("td",vt,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[wt,t("td",Et,[t("a",Ot,[e("从一个范围内选择最多整数 I"),n(a)])]),Mt,t("td",It,[n(o,{to:"/leetcode/outline/tag/greedy.html"},{default:s(()=>[qt]),_:1}),e(),n(o,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[Ct]),_:1}),e(),n(o,{to:"/leetcode/outline/tag/hash-table.html"},{default:s(()=>[jt]),_:1}),e(),Lt]),t("td",Nt,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[Tt,t("td",Vt,[t("a",At,[e("从一个范围内选择最多整数 II"),n(a)])]),Bt,t("td",Ht,[n(o,{to:"/leetcode/outline/tag/greedy.html"},{default:s(()=>[Pt]),_:1}),e(),n(o,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[Rt]),_:1}),e(),n(o,{to:"/leetcode/outline/tag/binary-search.html"},{default:s(()=>[Gt]),_:1}),e(),St]),t("td",Xt,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[Yt,t("td",zt,[t("a",Dt,[e("执行操作后的最大 MEX"),n(a)])]),Ft,t("td",Jt,[n(o,{to:"/leetcode/outline/tag/greedy.html"},{default:s(()=>[Kt]),_:1}),e(),n(o,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[Qt]),_:1}),e(),n(o,{to:"/leetcode/outline/tag/hash-table.html"},{default:s(()=>[Ut]),_:1}),e(),Wt]),t("td",Zt,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[$t,t("td",te,[t("a",ee,[e("大于等于顺序前缀和的最小缺失整数"),n(a)])]),ne,t("td",se,[n(o,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[oe]),_:1}),e(),n(o,{to:"/leetcode/outline/tag/hash-table.html"},{default:s(()=>[ae]),_:1}),e(),n(o,{to:"/leetcode/outline/tag/sorting.html"},{default:s(()=>[le]),_:1})]),t("td",ce,[n(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1})])])])])])}const pe=r(k,[["render",ie],["__file","0041.html.vue"]]);export{pe as default};
