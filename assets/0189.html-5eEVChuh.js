import{_ as u,r as c,o as d,c as k,a as n,b as t,d as s,w as e,f as m,e as h}from"./app-GnK0vSxb.js";const _={},b={id:"_189-轮转数组",tabindex:"-1"},f=n("a",{class:"header-anchor",href:"#_189-轮转数组","aria-hidden":"true"},"#",-1),g={href:"https://leetcode.com/problems/rotate-array",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"数组",-1),y=n("code",null,"数学",-1),x=n("code",null,"双指针",-1),w={href:"https://leetcode.com/problems/rotate-array",target:"_blank",rel:"noopener noreferrer"},C=n("code",null,"LeetCode",-1),E=h('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code>, rotate the array to the right by <code>k</code> steps, where <code>k</code> is non-negative.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,2,3,4,5,6,7], k = 3</p><p>Output: [5,6,7,1,2,3,4]</p><p>Explanation:</p><p>rotate 1 steps to the right: [7,1,2,3,4,5,6]</p><p>rotate 2 steps to the right: [6,7,1,2,3,4,5]</p><p>rotate 3 steps to the right: [5,6,7,1,2,3,4]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [-1,-100,3,99], k = 2</p><p>Output: [3,99,-1,-100]</p><p>Explanation:</p><p>rotate 1 steps to the right: [99,-1,-100,3]</p><p>rotate 2 steps to the right: [3,99,-1,-100]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>-2^31 &lt;= nums[i] &lt;= 2^31 - 1</code></li><li><code>0 &lt;= k &lt;= 10^5</code></li></ul><p><strong>Follow up:</strong></p><ul><li>Try to come up with as many solutions as you can. There are at least <strong>three</strong> different ways to solve this problem.</li><li>Could you do it in-place with <code>O(1)</code> extra space?</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一" tabindex="-1"><a class="header-anchor" href="#思路一" aria-hidden="true">#</a> 思路一</h3><p>使用一个额外的数组，先将原数组拷贝一份，再将下标为 <code>(i + n - k) mod n</code> 的元素移动到 i 的位置即可。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 为给定数组的长度。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，使用了长度为 <code>n</code> 的额外空间。</li></ul><hr><h3 id="思路二" tabindex="-1"><a class="header-anchor" href="#思路二" aria-hidden="true">#</a> 思路二</h3><p>由于题目要求不能使用额外的空间，所以本题最佳解法不是解法一。翻转最终态是，末尾 <code>k mod n</code> 个元素移动至了数组头部，剩下的元素右移 <code>k mod n</code> 个位置至最尾部。确定了最终态以后再变换就很容易。先将数组中所有元素从头到尾翻转一次，尾部的所有元素都到了头部，然后再将 <code>[0,(k mod n) − 1]</code> 区间内的元素翻转一次，最后再将 <code>[k mod n, n − 1]</code> 区间内的元素翻转一次，即可满足题目要求。</p><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 为给定数组的长度。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数级别的额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',23),O=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"nums"),t(`
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"k"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},"}")]),t(` Do not return anything, modify nums in-place instead.
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"rotate"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("nums"),n("span",{class:"token punctuation"},","),t(" k")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" n "),n("span",{class:"token operator"},"="),t(" nums"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`
	k `),n("span",{class:"token operator"},"="),t(" k "),n("span",{class:"token operator"},"%"),t(" n"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" arr "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"..."),t("nums"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(" n"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		nums`),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(" arr"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"+"),t(" n "),n("span",{class:"token operator"},"-"),t(" k"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"%"),t(" n"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"nums"),t(`
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"k"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},"}")]),t(` Do not return anything, modify nums in-place instead.
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"rotate"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("nums"),n("span",{class:"token punctuation"},","),t(" k")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" n "),n("span",{class:"token operator"},"="),t(" nums"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`
	k `),n("span",{class:"token operator"},"="),t(" k "),n("span",{class:"token operator"},"%"),t(" n"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token function"},"reverse"),n("span",{class:"token punctuation"},"("),t("nums"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(" n "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token function"},"reverse"),n("span",{class:"token punctuation"},"("),t("nums"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(" k "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token function"},"reverse"),n("span",{class:"token punctuation"},"("),t("nums"),n("span",{class:"token punctuation"},","),t(" k"),n("span",{class:"token punctuation"},","),t(" n "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"reverse"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("arr"),n("span",{class:"token punctuation"},","),t(" start"),n("span",{class:"token punctuation"},","),t(" end")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" mid "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),t("end "),n("span",{class:"token operator"},"-"),t(" start"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"/"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" temp"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(" mid"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		temp `),n("span",{class:"token operator"},"="),t(" arr"),n("span",{class:"token punctuation"},"["),t("start"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
		arr`),n("span",{class:"token punctuation"},"["),t("start"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(" arr"),n("span",{class:"token punctuation"},"["),t("end"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
		arr`),n("span",{class:"token punctuation"},"["),t("end"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(" temp"),n("span",{class:"token punctuation"},";"),t(`
		start`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),t(`
		end`),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" arr"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),L=n("td",{style:{"text-align":"center"}},"61",-1),N={style:{"text-align":"left"}},T={href:"https://leetcode.com/problems/rotate-list",target:"_blank",rel:"noopener noreferrer"},V={style:{"text-align":"center"}},A={style:{"text-align":"left"}},M=n("code",null,"链表",-1),B=n("code",null,"双指针",-1),D={style:{"text-align":"left"}},R=n("td",{style:{"text-align":"center"}},"186",-1),F={style:{"text-align":"left"}},G={href:"https://leetcode.com/problems/reverse-words-in-a-string-ii",target:"_blank",rel:"noopener noreferrer"},S=n("td",{style:{"text-align":"center"}},null,-1),z={style:{"text-align":"left"}},H=n("code",null,"双指针",-1),J=n("code",null,"字符串",-1),K={style:{"text-align":"left"}},P=n("td",{style:{"text-align":"center"}},"2607",-1),Q={style:{"text-align":"left"}},U={href:"https://leetcode.com/problems/make-k-subarray-sums-equal",target:"_blank",rel:"noopener noreferrer"},W=n("td",{style:{"text-align":"center"}},null,-1),X={style:{"text-align":"left"}},Y=n("code",null,"数组",-1),Z=n("code",null,"数学",-1),$=n("code",null,"数论",-1),nn=n("code",null,"1+",-1),tn={style:{"text-align":"left"}};function sn(en,an){const o=c("ExternalLinkIcon"),l=c("font"),a=c("RouterLink"),i=c("CodeTabs");return d(),k("div",null,[n("h1",b,[f,t(),n("a",g,[t("189. 轮转数组"),s(o)])]),n("p",null,[t("🟠 "),s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1}),t("  🔖  "),s(a,{to:"/leetcode/outline/tag/array.html"},{default:e(()=>[v]),_:1}),t(),s(a,{to:"/leetcode/outline/tag/math.html"},{default:e(()=>[y]),_:1}),t(),s(a,{to:"/leetcode/outline/tag/two-pointers.html"},{default:e(()=>[x]),_:1}),t("  🔗 "),n("a",w,[C,s(o)])]),E,s(i,{id:"145",data:[{id:"思路一"},{id:"思路二"}]},{title0:e(({value:r,isActive:p})=>[t("思路一")]),title1:e(({value:r,isActive:p})=>[t("思路二")]),tab0:e(({value:r,isActive:p})=>[O]),tab1:e(({value:r,isActive:p})=>[j]),_:1}),I,m(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[L,n("td",N,[n("a",T,[t("旋转链表"),s(o)])]),n("td",V,[s(a,{to:"/leetcode/problem/0061.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",A,[s(a,{to:"/leetcode/outline/tag/linked-list.html"},{default:e(()=>[M]),_:1}),t(),s(a,{to:"/leetcode/outline/tag/two-pointers.html"},{default:e(()=>[B]),_:1})]),n("td",D,[s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1})])]),n("tr",null,[R,n("td",F,[n("a",G,[t("反转字符串中的单词 II"),s(o)])]),S,n("td",z,[s(a,{to:"/leetcode/outline/tag/two-pointers.html"},{default:e(()=>[H]),_:1}),t(),s(a,{to:"/leetcode/outline/tag/string.html"},{default:e(()=>[J]),_:1})]),n("td",K,[s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1})])]),n("tr",null,[P,n("td",Q,[n("a",U,[t("使子数组元素和相等"),s(o)])]),W,n("td",X,[s(a,{to:"/leetcode/outline/tag/array.html"},{default:e(()=>[Y]),_:1}),t(),s(a,{to:"/leetcode/outline/tag/math.html"},{default:e(()=>[Z]),_:1}),t(),s(a,{to:"/leetcode/outline/tag/number-theory.html"},{default:e(()=>[$]),_:1}),t(),nn]),n("td",tn,[s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1})])])])])])}const ln=u(_,[["render",sn],["__file","0189.html.vue"]]);export{ln as default};
