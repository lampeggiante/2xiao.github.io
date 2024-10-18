import{_ as p,r as c,o as d,c as k,a as n,b as t,d as e,w as s,f as m,e as h}from"./app-GnK0vSxb.js";const _={},b={id:"_167-两数之和-ii-输入有序数组",tabindex:"-1"},g=n("a",{class:"header-anchor",href:"#_167-两数之和-ii-输入有序数组","aria-hidden":"true"},"#",-1),f={href:"https://leetcode.com/problems/two-sum-ii-input-array-is-sorted",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"数组",-1),y=n("code",null,"双指针",-1),v=n("code",null,"二分查找",-1),w={href:"https://leetcode.com/problems/two-sum-ii-input-array-is-sorted",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"LeetCode",-1),E=h('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a <strong>1-indexed</strong> array of integers <code>numbers</code> that is already <strong><em>sorted in non-decreasing order</em></strong> , find two numbers such that they add up to a specific <code>target</code> number. Let these two numbers be <code>numbers[index1]</code> and <code>numbers[index2]</code> where <code>1 &lt;= index1 &lt; index2 &lt; numbers.length</code>.</p><p>Return <em>the indices of the two numbers,</em><code>index1</code> <em>and</em> <code>index2</code> _, <strong>added by one</strong> as an integer array _<code>[index1, index2]</code> <em>of length 2.</em></p><p>The tests are generated such that there is <strong>exactly one solution</strong>. You <strong>may not</strong> use the same element twice.</p><p>Your solution must use only constant extra space.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: numbers = [ <em>2</em> , <em>7</em> ,11,15], target = 9</p><p>Output: [1,2]</p><p>Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: numbers = [ <em>2</em> ,3, <em>4</em> ], target = 6</p><p>Output: [1,3]</p><p>Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: numbers = [ <em>-1</em> , <em>0</em> ], target = -1</p><p>Output: [1,2]</p><p>Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= numbers.length &lt;= 3 * 10^4</code></li><li><code>-1000 &lt;= numbers[i] &lt;= 1000</code></li><li><code>numbers</code> is sorted in <strong>non-decreasing order</strong>.</li><li><code>-1000 &lt;= target &lt;= 1000</code></li><li>The tests are generated such that there is <strong>exactly one solution</strong>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个下标从 <code>1</code> 开始的整数数组 <code>numbers</code> ，该数组已按 <strong>非递减顺序排列</strong> ，请你从数组中找出满足相加之和等于目标数 <code>target</code> 的两个数。如果设这两个数分别是 <code>numbers[index1]</code> 和 <code>numbers[index2]</code> ，则 <code>1 &lt;= index1 &lt; index2 &lt;= numbers.length</code> 。</p><p>以长度为 <code>2</code> 的整数数组 <code>[index1, index2]</code> 的形式返回这两个整数的下标 <code>index1</code> 和 <code>index2</code>。</p><p>你可以假设每个输入 <strong>只对应唯一的答案</strong> ，而且你 <strong>不可以</strong> 重复使用相同的元素。</p><p>你所设计的解决方案必须只使用常量级的额外空间。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>',19),T=n("h2",{id:"代码",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#代码","aria-hidden":"true"},"#"),t(" 代码")],-1),I=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// 解法一 这一题可以利用数组有序的特性，使用对撞指针"),t(`
`),n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"numbers"),t(`
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"target"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"twoSum"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("numbers"),n("span",{class:"token punctuation"},","),t(" target")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" j "),n("span",{class:"token operator"},"="),t(" numbers"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"while"),t(),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"<"),t(" j"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("numbers"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"+"),t(" numbers"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"==="),t(" target"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"["),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(" j "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("numbers"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"+"),t(" numbers"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"<"),t(" target"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			i`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
			j`),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// 解法二 不管数组是否有序，空间复杂度比上一种解法要多 O(n)"),t(`
`),n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"nums"),t(`
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"target"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"twoSum"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("nums"),n("span",{class:"token punctuation"},","),t(" target")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" obj "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(" nums"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"let"),t(" another "),n("span",{class:"token operator"},"="),t(" target "),n("span",{class:"token operator"},"-"),t(" nums"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("another "),n("span",{class:"token keyword"},"in"),t(" obj"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"["),t("obj"),n("span",{class:"token punctuation"},"["),t("another"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(" i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
		obj`),n("span",{class:"token punctuation"},"["),t("nums"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(" i"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),L=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),V=n("td",{style:{"text-align":"center"}},"1",-1),N={style:{"text-align":"left"}},A={href:"https://leetcode.com/problems/two-sum",target:"_blank",rel:"noopener noreferrer"},O={style:{"text-align":"center"}},S={style:{"text-align":"left"}},B=n("code",null,"数组",-1),R=n("code",null,"哈希表",-1),W={style:{"text-align":"left"}},Y=n("td",{style:{"text-align":"center"}},"653",-1),G={style:{"text-align":"left"}},K={href:"https://leetcode.com/problems/two-sum-iv-input-is-a-bst",target:"_blank",rel:"noopener noreferrer"},M=n("td",{style:{"text-align":"center"}},null,-1),z={style:{"text-align":"left"}},D=n("code",null,"树",-1),F=n("code",null,"深度优先搜索",-1),H=n("code",null,"广度优先搜索",-1),J=n("code",null,"4+",-1),P={style:{"text-align":"left"}},Q=n("td",{style:{"text-align":"center"}},"1099",-1),U={style:{"text-align":"left"}},X={href:"https://leetcode.com/problems/two-sum-less-than-k",target:"_blank",rel:"noopener noreferrer"},Z=n("td",{style:{"text-align":"center"}},null,-1),$={style:{"text-align":"left"}},nn=n("code",null,"数组",-1),tn=n("code",null,"双指针",-1),en=n("code",null,"二分查找",-1),sn=n("code",null,"1+",-1),an={style:{"text-align":"left"}};function on(ln,cn){const o=c("ExternalLinkIcon"),l=c("font"),a=c("RouterLink"),u=c("CodeTabs");return d(),k("div",null,[n("h1",b,[g,t(),n("a",f,[t("167. 两数之和 II - 输入有序数组"),e(o)])]),n("p",null,[t("🟠 "),e(l,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1}),t("  🔖  "),e(a,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[x]),_:1}),t(),e(a,{to:"/leetcode/outline/tag/two-pointers.html"},{default:s(()=>[y]),_:1}),t(),e(a,{to:"/leetcode/outline/tag/binary-search.html"},{default:s(()=>[v]),_:1}),t("  🔗 "),n("a",w,[j,e(o)])]),E,n("p",null,[t("这一题比 "),e(a,{to:"/leetcode/problem/0001.html"},{default:s(()=>[t("第 1 题 Two Sum")]),_:1}),t(" 的问题还要简单，因为这里数组是有序的。可以直接用第一题的解法解决这道题。")]),T,e(u,{id:"117",data:[{id:"对撞指针"},{id:"哈希表"}]},{title0:s(({value:i,isActive:r})=>[t("对撞指针")]),title1:s(({value:i,isActive:r})=>[t("哈希表")]),tab0:s(({value:i,isActive:r})=>[I]),tab1:s(({value:i,isActive:r})=>[C]),_:1}),q,m(" prettier-ignore "),n("table",null,[L,n("tbody",null,[n("tr",null,[V,n("td",N,[n("a",A,[t("两数之和"),e(o)])]),n("td",O,[e(a,{to:"/leetcode/problem/0001.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",S,[e(a,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[B]),_:1}),t(),e(a,{to:"/leetcode/outline/tag/hash-table.html"},{default:s(()=>[R]),_:1})]),n("td",W,[e(l,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1})])]),n("tr",null,[Y,n("td",G,[n("a",K,[t("两数之和 IV - 输入二叉搜索树"),e(o)])]),M,n("td",z,[e(a,{to:"/leetcode/outline/tag/tree.html"},{default:s(()=>[D]),_:1}),t(),e(a,{to:"/leetcode/outline/tag/depth-first-search.html"},{default:s(()=>[F]),_:1}),t(),e(a,{to:"/leetcode/outline/tag/breadth-first-search.html"},{default:s(()=>[H]),_:1}),t(),J]),n("td",P,[e(l,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1})])]),n("tr",null,[Q,n("td",U,[n("a",X,[t("小于 K 的两数之和"),e(o)])]),Z,n("td",$,[e(a,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[nn]),_:1}),t(),e(a,{to:"/leetcode/outline/tag/two-pointers.html"},{default:s(()=>[tn]),_:1}),t(),e(a,{to:"/leetcode/outline/tag/binary-search.html"},{default:s(()=>[en]),_:1}),t(),sn]),n("td",an,[e(l,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1})])])])])])}const un=p(_,[["render",on],["__file","0167.html.vue"]]);export{un as default};
