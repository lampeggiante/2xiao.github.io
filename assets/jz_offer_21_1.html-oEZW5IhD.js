import{_ as r,r as e,o as d,c as k,a as n,b as s,d as t,w as a,e as h}from"./app-mvY9N9Pc.js";const m={},b={id:"剑指-offer-21-调整数组顺序使奇数位于偶数前面",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#剑指-offer-21-调整数组顺序使奇数位于偶数前面","aria-hidden":"true"},"#",-1),_={href:"https://leetcode.cn/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"数组",-1),f=n("code",null,"双指针",-1),w=n("code",null,"排序",-1),y={href:"https://leetcode.cn/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),A=h('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>输入一个长度为 <code>n</code> 整数数组 <code>actions</code> ，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前面部分，所有的偶数位于数组的后面部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。</p><p><strong>要求</strong>：时间复杂度 <code>O(n)</code> ，空间复杂度 <code>O(n)</code><strong>进阶</strong>：时间复杂度 <code>O(n^2)</code> ，空间复杂度 <code>O(1)</code></p><p><strong>示例 1：</strong></p><blockquote><p>输入：actions = [1,2,3,4,5]</p><p>输出：[1,3,5,2,4]</p><p>解释：为正确答案之一</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p>输入：actions = [2,4,6,5,7]</p><p>输出：[5,7,2,4,6]</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p>输入：actions = [1,3,5,6,7]</p><p>输出：[1,3,5,7,6]</p></blockquote><p><strong>提示：</strong></p><ul><li>数据范围：<code>0 ≤ n ≤ 5000</code></li><li>数组中每个数的值：<code>0 ≤ val ≤ 10000</code></li></ul><div class="hint-container warning"><p class="hint-container-title">注意</p><p>原题与 LeetCode 题目有细微差别，原题要保证奇数和奇数，偶数和偶数之间的相对位置不变；但是 LeetCode 题目并无此要求，下面的解题思路按照原题要求作答。</p></div><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-合并奇偶数组" tabindex="-1"><a class="header-anchor" href="#思路一-合并奇偶数组" aria-hidden="true">#</a> 思路一：合并奇偶数组</h3><p>要实现将奇数排在偶数前面并保持相对位置不变的要求，可以使用额外的空间来存储奇数和偶数的分组，然后再合并这两个分组。以下是具体的实现步骤：</p><ol><li><p><strong>初始化两个数组 <code>oddArr</code> 和 <code>evenArr</code></strong>：</p><ul><li><code>oddArr</code> 用于存储奇数。</li><li><code>evenArr</code> 用于存储偶数。</li></ul></li><li><p><strong>遍历输入数组 <code>actions</code></strong>：</p><ul><li>对于每个元素，判断其是否为奇数。 <ul><li>如果是奇数，将其添加到 <code>oddArr</code> 中。</li><li>如果是偶数，将其添加到 <code>evenArr</code> 中。</li></ul></li></ul></li><li><p><strong>合并两个数组</strong>：</p><ul><li>将 <code>oddArr</code> 和 <code>evenArr</code> 中的元素依次放回到原始数组 <code>actions</code> 中。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，其中 <code>n</code> 是数组的长度，遍历整个数组。</li><li><strong>空间复杂度</strong>: <code>O(n)</code>，使用了两个数组来存奇数和偶数。</li></ul><hr><h3 id="思路二-双指针" tabindex="-1"><a class="header-anchor" href="#思路二-双指针" aria-hidden="true">#</a> 思路二：双指针</h3><p>如果要求空间复杂度为 <code>O(1)</code>，可以使用双指针法来原地修改数组，而不使用额外的数组来存储奇数和偶数。双指针法的基本思路是维护两个指针，一个指向当前已处理的奇数的末尾位置，另一个指向当前已处理的数组的末尾位置。</p><p>具体的实现步骤如下：</p><ol><li><p><strong>初始化两个指针 <code>odd</code> 和 <code>cur</code></strong>：</p><ul><li><code>odd</code> 初始值为 <code>0</code>，表示当前已处理的奇数的末尾位置。</li><li><code>cur</code> 初始值为 <code>0</code>，表示当前正在遍历的数组的位置。</li></ul></li><li><p><strong>遍历数组 <code>actions</code></strong>：</p><ul><li>对于每个元素，判断其是否为奇数。 <ul><li>如果是奇数，将其与 <code>actions[odd]</code> 交换，并更新 <code>odd</code>。</li><li>如果是偶数，直接更新 <code>cur</code>。</li></ul></li></ul></li><li><p><strong>完成后，数组前半部分即为奇数，后半部分为偶数</strong>。</p></li></ol><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，其中 <code>n</code> 是数组的长度，遍历整个数组。</li><li><strong>空间复杂度</strong>: <code>O(1)</code>，原地修改了数组。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',26),q=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"actions"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"trainingPlan"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"actions"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" oddArr "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" evenArr "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" actions"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("actions"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"%"),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			oddArr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("actions"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
			evenArr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("actions"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"..."),s("oddArr"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"..."),s("evenArr"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"actions"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"trainingPlan"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"actions"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" cur "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" odd "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("cur "),n("span",{class:"token operator"},"<"),s(" actions"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("actions"),n("span",{class:"token punctuation"},"["),s("cur"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"%"),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token punctuation"},"["),s("actions"),n("span",{class:"token punctuation"},"["),s("odd"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" actions"),n("span",{class:"token punctuation"},"["),s("cur"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s("actions"),n("span",{class:"token punctuation"},"["),s("cur"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" actions"),n("span",{class:"token punctuation"},"["),s("odd"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
			odd`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		cur`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" actions"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function j(C,L){const i=e("ExternalLinkIcon"),p=e("font"),o=e("RouterLink"),u=e("CodeTabs");return d(),k("div",null,[n("h1",b,[v,s(),n("a",_,[s("剑指 Offer 21. 调整数组顺序使奇数位于偶数前面"),t(i)])]),n("p",null,[s("🟢 "),t(p,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1}),s("  🔖  "),t(o,{to:"/leetcode/outline/tag/array.html"},{default:a(()=>[g]),_:1}),s(),t(o,{to:"/leetcode/outline/tag/two-pointers.html"},{default:a(()=>[f]),_:1}),s(),t(o,{to:"/leetcode/outline/tag/sorting.html"},{default:a(()=>[w]),_:1}),s("  🔗 "),n("a",y,[x,t(i)])]),A,t(u,{id:"226",data:[{id:"合并奇偶数组"},{id:"双指针"}]},{title0:a(({value:c,isActive:l})=>[s("合并奇偶数组")]),title1:a(({value:c,isActive:l})=>[s("双指针")]),tab0:a(({value:c,isActive:l})=>[q]),tab1:a(({value:c,isActive:l})=>[O]),_:1})])}const E=r(m,[["render",j],["__file","jz_offer_21_1.html.vue"]]);export{E as default};
