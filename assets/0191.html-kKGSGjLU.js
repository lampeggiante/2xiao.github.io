import{_ as u,r,o as p,c as h,a as e,b as t,d as n,w as s,f as _,e as m}from"./app-GnK0vSxb.js";const k={},g={id:"_191-位1的个数",tabindex:"-1"},b=e("a",{class:"header-anchor",href:"#_191-位1的个数","aria-hidden":"true"},"#",-1),f={href:"https://leetcode.com/problems/number-of-1-bits",target:"_blank",rel:"noopener noreferrer"},y=e("code",null,"位运算",-1),v=e("code",null,"分治",-1),x={href:"https://leetcode.com/problems/number-of-1-bits",target:"_blank",rel:"noopener noreferrer"},w=e("code",null,"LeetCode",-1),E=e("h2",{id:"题目",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),t(" 题目")],-1),j={href:"http://en.wikipedia.org/wiki/Hamming_weight",target:"_blank",rel:"noopener noreferrer"},I=e("p",null,[e("strong",null,"Note:")],-1),O=e("li",null,"Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.",-1),T={href:"https://en.wikipedia.org/wiki/Two%27s_complement",target:"_blank",rel:"noopener noreferrer"},q=e("strong",null,"Example 3",-1),C=e("code",null,"-3",-1),N=m('<p><strong>Example 1:</strong></p><blockquote><p>Input: n = 00000000000000000000000000001011</p><p>Output: 3</p><p>Explanation: The input binary string <strong>00000000000000000000000000001011</strong> has a total of three &#39;1&#39; bits.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 00000000000000000000000010000000</p><p>Output: 1</p><p>Explanation: The input binary string <strong>00000000000000000000000010000000</strong> has a total of one &#39;1&#39; bit.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: n = 11111111111111111111111111111101</p><p>Output: 31</p><p>Explanation: The input binary string <strong>11111111111111111111111111111101</strong> has a total of thirty one &#39;1&#39; bits.</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The input must be a <strong>binary string</strong> of length <code>32</code>.</li></ul><p><strong>Follow up:</strong> If this function is called many times, how would you optimize it?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>编写一个函数，输入是一个无符号整数（以二进制串的形式），返回其二进制表达式中数字位数为 &#39;1&#39; 的个数（也被称为 汉明重量）。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-循环" tabindex="-1"><a class="header-anchor" href="#思路一-循环" aria-hidden="true">#</a> 思路一：循环</h3><p>可以直接循环检查给定整数 <code>n</code> 的二进制位的每一位是否为 <code>1</code>。</p><p>当检查第 <code>i</code> 位时，可以让 <code>n</code> 与 <code>2^i</code> 进行 <strong>与</strong> 运算，当且仅当 <code>n</code> 的第 <code>i</code> 位为 <code>1</code> 时，运算结果不为 <code>0</code>。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(k)</code>，其中 <code>k=32</code>，一共需要检查 <code>32</code> 位。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只需要常数的空间保存若干变量。</li></ul><hr><h3 id="思路二-位运算" tabindex="-1"><a class="header-anchor" href="#思路二-位运算" aria-hidden="true">#</a> 思路二：位运算</h3><p>将<code>res</code> 初始化为 0，用于存储返回结果。</p><p>当 <code>n &gt; 0</code> 时，循环以下步骤：</p><ul><li>若<code>n &amp; 1</code> 不为 0，则 <code>n</code> 的最后一位为 <code>1</code>，<code>res++</code></li><li><code>n &gt;&gt;= 1</code>，将 <code>n</code> 右移一位，准备提取下一个位。</li></ul><p>最终返回 <code>res</code></p><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(k)</code>，其中 <code>k=32</code>，每次右移一位，一共需要检查 <code>32</code> 位。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只需要常数的空间保存若干变量。</li></ul><hr><h3 id="思路三-位运算" tabindex="-1"><a class="header-anchor" href="#思路三-位运算" aria-hidden="true">#</a> 思路三：位运算</h3><p>由于 <code>n &amp; (n−1)</code> 会 <code>n</code> 的二进制位中的最低位的 <code>1</code> 变为 <code>0</code> ，如：<code>6 &amp; (6−1) = 4</code>, <code>6 = (110)_2</code>, <code>4 = (100)_2</code>，运算结果 <code>4</code> 即为把 <code>6</code> 的二进制位中的最低位的 <code>1</code> 变为 <code>0</code> 之后的结果。</p><p>可以利用这个位运算的性质，不断让当前的 <code>n</code> 与 <code>n - 1</code> 做与运算，直到 <code>n</code> 变为 <code>0</code> 即可。因为每次运算会使得 <code>n</code> 的最低位的 <code>1</code> 被翻转，因此运算次数就等于 <code>n</code> 的二进制位中 <code>1</code> 的个数。</p><h4 id="复杂度分析-2" tabindex="-1"><a class="header-anchor" href="#复杂度分析-2" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m)</code>，其中 <code>m</code> 是 <code>n</code> 的二进制表示中 <code>1</code> 的数量。每次 <code>n &amp;= n - 1</code> 操作都会消除 <code>n</code> 中的一个 <code>1</code>，因此循环的次数等于 <code>1</code> 的个数。最坏情况下，当 <code>n</code> 的所有位都是 <code>1</code> 时，循环次数等于 <code>m</code>。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只需要常数的空间保存变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',32),A=e("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[e("pre",{class:"language-javascript"},[e("code",null,[e("span",{class:"token doc-comment comment"},[t(`/**
 * `),e("span",{class:"token keyword"},"@param"),t(),e("span",{class:"token class-name"},[e("span",{class:"token punctuation"},"{"),t("number"),e("span",{class:"token punctuation"},"}")]),t(),e("span",{class:"token parameter"},"n"),t(` - a positive integer
 * `),e("span",{class:"token keyword"},"@return"),t(),e("span",{class:"token class-name"},[e("span",{class:"token punctuation"},"{"),t("number"),e("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),e("span",{class:"token keyword"},"var"),t(),e("span",{class:"token function-variable function"},"hammingWeight"),t(),e("span",{class:"token operator"},"="),t(),e("span",{class:"token keyword"},"function"),t(),e("span",{class:"token punctuation"},"("),e("span",{class:"token parameter"},"n"),e("span",{class:"token punctuation"},")"),t(),e("span",{class:"token punctuation"},"{"),t(`
	`),e("span",{class:"token keyword"},"let"),t(" res "),e("span",{class:"token operator"},"="),t(),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},";"),t(`
	`),e("span",{class:"token keyword"},"for"),t(),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"let"),t(" i "),e("span",{class:"token operator"},"="),t(),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},";"),t(" i "),e("span",{class:"token operator"},"<"),t(),e("span",{class:"token number"},"32"),e("span",{class:"token punctuation"},";"),t(" i"),e("span",{class:"token operator"},"++"),e("span",{class:"token punctuation"},")"),t(),e("span",{class:"token punctuation"},"{"),t(`
		`),e("span",{class:"token keyword"},"if"),t(),e("span",{class:"token punctuation"},"("),t("n "),e("span",{class:"token operator"},"&"),t(),e("span",{class:"token punctuation"},"("),e("span",{class:"token number"},"1"),t(),e("span",{class:"token operator"},"<<"),t(" i"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),t(),e("span",{class:"token punctuation"},"{"),t(`
			res`),e("span",{class:"token operator"},"++"),e("span",{class:"token punctuation"},";"),t(`
		`),e("span",{class:"token punctuation"},"}"),t(`
	`),e("span",{class:"token punctuation"},"}"),t(`
	`),e("span",{class:"token keyword"},"return"),t(" res"),e("span",{class:"token punctuation"},";"),t(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},";"),t(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),L=e("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[e("pre",{class:"language-javascript"},[e("code",null,[e("span",{class:"token doc-comment comment"},[t(`/**
 * `),e("span",{class:"token keyword"},"@param"),t(),e("span",{class:"token class-name"},[e("span",{class:"token punctuation"},"{"),t("number"),e("span",{class:"token punctuation"},"}")]),t(),e("span",{class:"token parameter"},"n"),t(`
 * `),e("span",{class:"token keyword"},"@return"),t(),e("span",{class:"token class-name"},[e("span",{class:"token punctuation"},"{"),t("number"),e("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),e("span",{class:"token keyword"},"var"),t(),e("span",{class:"token function-variable function"},"hammingWeight"),t(),e("span",{class:"token operator"},"="),t(),e("span",{class:"token keyword"},"function"),t(),e("span",{class:"token punctuation"},"("),e("span",{class:"token parameter"},"n"),e("span",{class:"token punctuation"},")"),t(),e("span",{class:"token punctuation"},"{"),t(`
	`),e("span",{class:"token keyword"},"let"),t(" res "),e("span",{class:"token operator"},"="),t(),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},";"),t(`
	`),e("span",{class:"token keyword"},"while"),t(),e("span",{class:"token punctuation"},"("),t("n "),e("span",{class:"token operator"},">"),t(),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},")"),t(),e("span",{class:"token punctuation"},"{"),t(`
		`),e("span",{class:"token keyword"},"if"),t(),e("span",{class:"token punctuation"},"("),t("n "),e("span",{class:"token operator"},"&"),t(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},")"),t(),e("span",{class:"token punctuation"},"{"),t(`
			res`),e("span",{class:"token operator"},"++"),e("span",{class:"token punctuation"},";"),t(`
		`),e("span",{class:"token punctuation"},"}"),t(`
		n `),e("span",{class:"token operator"},"="),t(" n "),e("span",{class:"token operator"},">>"),t(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},";"),t(`
	`),e("span",{class:"token punctuation"},"}"),t(`
	`),e("span",{class:"token keyword"},"return"),t(" res"),e("span",{class:"token punctuation"},";"),t(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},";"),t(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),V=e("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[e("pre",{class:"language-javascript"},[e("code",null,[e("span",{class:"token doc-comment comment"},[t(`/**
 * `),e("span",{class:"token keyword"},"@param"),t(),e("span",{class:"token class-name"},[e("span",{class:"token punctuation"},"{"),t("number"),e("span",{class:"token punctuation"},"}")]),t(),e("span",{class:"token parameter"},"n"),t(` - a positive integer
 * `),e("span",{class:"token keyword"},"@return"),t(),e("span",{class:"token class-name"},[e("span",{class:"token punctuation"},"{"),t("number"),e("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),e("span",{class:"token keyword"},"var"),t(),e("span",{class:"token function-variable function"},"hammingWeight"),t(),e("span",{class:"token operator"},"="),t(),e("span",{class:"token keyword"},"function"),t(),e("span",{class:"token punctuation"},"("),e("span",{class:"token parameter"},"n"),e("span",{class:"token punctuation"},")"),t(),e("span",{class:"token punctuation"},"{"),t(`
	`),e("span",{class:"token keyword"},"let"),t(" res "),e("span",{class:"token operator"},"="),t(),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},";"),t(`
	`),e("span",{class:"token keyword"},"while"),t(),e("span",{class:"token punctuation"},"("),t("n"),e("span",{class:"token punctuation"},")"),t(),e("span",{class:"token punctuation"},"{"),t(`
		n `),e("span",{class:"token operator"},"&="),t(" n "),e("span",{class:"token operator"},"-"),t(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},";"),t(`
		res`),e("span",{class:"token operator"},"++"),e("span",{class:"token punctuation"},";"),t(`
	`),e("span",{class:"token punctuation"},"}"),t(`
	`),e("span",{class:"token keyword"},"return"),t(" res"),e("span",{class:"token punctuation"},";"),t(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},";"),t(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),W=e("h2",{id:"相关题目",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),B=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"left"}},"难度")])],-1),H=e("td",{style:{"text-align":"center"}},"190",-1),J={style:{"text-align":"left"}},R={href:"https://leetcode.com/problems/reverse-bits",target:"_blank",rel:"noopener noreferrer"},z={style:{"text-align":"center"}},F={style:{"text-align":"left"}},S=e("code",null,"位运算",-1),D=e("code",null,"分治",-1),G={style:{"text-align":"left"}},K=e("td",{style:{"text-align":"center"}},"231",-1),M={style:{"text-align":"left"}},P={href:"https://leetcode.com/problems/power-of-two",target:"_blank",rel:"noopener noreferrer"},Q=e("td",{style:{"text-align":"center"}},null,-1),U={style:{"text-align":"left"}},X=e("code",null,"位运算",-1),Y=e("code",null,"递归",-1),Z=e("code",null,"数学",-1),$={style:{"text-align":"left"}},ee=e("td",{style:{"text-align":"center"}},"338",-1),te={style:{"text-align":"left"}},ne={href:"https://leetcode.com/problems/counting-bits",target:"_blank",rel:"noopener noreferrer"},se=e("td",{style:{"text-align":"center"}},null,-1),oe={style:{"text-align":"left"}},ae=e("code",null,"位运算",-1),le=e("code",null,"动态规划",-1),ce={style:{"text-align":"left"}},ie=e("td",{style:{"text-align":"center"}},"401",-1),re={style:{"text-align":"left"}},de={href:"https://leetcode.com/problems/binary-watch",target:"_blank",rel:"noopener noreferrer"},ue=e("td",{style:{"text-align":"center"}},null,-1),pe={style:{"text-align":"left"}},he=e("code",null,"位运算",-1),_e=e("code",null,"回溯",-1),me={style:{"text-align":"left"}},ke=e("td",{style:{"text-align":"center"}},"461",-1),ge={style:{"text-align":"left"}},be={href:"https://leetcode.com/problems/hamming-distance",target:"_blank",rel:"noopener noreferrer"},fe=e("td",{style:{"text-align":"center"}},null,-1),ye={style:{"text-align":"left"}},ve=e("code",null,"位运算",-1),xe={style:{"text-align":"left"}},we=e("td",{style:{"text-align":"center"}},"693",-1),Ee={style:{"text-align":"left"}},je={href:"https://leetcode.com/problems/binary-number-with-alternating-bits",target:"_blank",rel:"noopener noreferrer"},Ie=e("td",{style:{"text-align":"center"}},null,-1),Oe={style:{"text-align":"left"}},Te=e("code",null,"位运算",-1),qe={style:{"text-align":"left"}},Ce=e("td",{style:{"text-align":"center"}},"762",-1),Ne={style:{"text-align":"left"}},Ae={href:"https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation",target:"_blank",rel:"noopener noreferrer"},Le=e("td",{style:{"text-align":"center"}},null,-1),Ve={style:{"text-align":"left"}},We=e("code",null,"位运算",-1),Be=e("code",null,"数学",-1),He={style:{"text-align":"left"}},Je=e("td",{style:{"text-align":"center"}},"3280",-1),Re={style:{"text-align":"left"}},ze={href:"https://leetcode.com/problems/convert-date-to-binary",target:"_blank",rel:"noopener noreferrer"},Fe=e("td",{style:{"text-align":"center"}},null,-1),Se={style:{"text-align":"left"}},De=e("code",null,"数学",-1),Ge=e("code",null,"字符串",-1),Ke={style:{"text-align":"left"}};function Me(Pe,Qe){const a=r("ExternalLinkIcon"),l=r("font"),o=r("RouterLink"),d=r("CodeTabs");return p(),h("div",null,[e("h1",g,[b,t(),e("a",f,[t("191. 位1的个数"),n(a)])]),e("p",null,[t("🟢 "),n(l,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),n(o,{to:"/leetcode/outline/tag/bit-manipulation.html"},{default:s(()=>[y]),_:1}),t(),n(o,{to:"/leetcode/outline/tag/divide-and-conquer.html"},{default:s(()=>[v]),_:1}),t("  🔗 "),e("a",x,[w,n(a)])]),E,e("p",null,[t("Write a function that takes the binary representation of an unsigned integer and returns the number of '1' bits it has (also known as the "),e("a",j,[t("Hamming weight"),n(a)]),t(").")]),I,e("ul",null,[O,e("li",null,[t("In Java, the compiler represents the signed integers using "),e("a",T,[t("2's complement notation"),n(a)]),t(". Therefore, in "),q,t(" , the input represents the signed integer. "),C,t(".")])]),N,n(d,{id:"183",data:[{id:"循环"},{id:"位运算"},{id:"位运算"}]},{title0:s(({value:c,isActive:i})=>[t("循环")]),title1:s(({value:c,isActive:i})=>[t("位运算")]),title2:s(({value:c,isActive:i})=>[t("位运算")]),tab0:s(({value:c,isActive:i})=>[A]),tab1:s(({value:c,isActive:i})=>[L]),tab2:s(({value:c,isActive:i})=>[V]),_:1}),W,_(" prettier-ignore "),e("table",null,[B,e("tbody",null,[e("tr",null,[H,e("td",J,[e("a",R,[t("颠倒二进制位"),n(a)])]),e("td",z,[n(o,{to:"/leetcode/problem/0190.html"},{default:s(()=>[t("[✓]")]),_:1})]),e("td",F,[n(o,{to:"/leetcode/outline/tag/bit-manipulation.html"},{default:s(()=>[S]),_:1}),t(),n(o,{to:"/leetcode/outline/tag/divide-and-conquer.html"},{default:s(()=>[D]),_:1})]),e("td",G,[n(l,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1})])]),e("tr",null,[K,e("td",M,[e("a",P,[t("2 的幂"),n(a)])]),Q,e("td",U,[n(o,{to:"/leetcode/outline/tag/bit-manipulation.html"},{default:s(()=>[X]),_:1}),t(),n(o,{to:"/leetcode/outline/tag/recursion.html"},{default:s(()=>[Y]),_:1}),t(),n(o,{to:"/leetcode/outline/tag/math.html"},{default:s(()=>[Z]),_:1})]),e("td",$,[n(l,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1})])]),e("tr",null,[ee,e("td",te,[e("a",ne,[t("比特位计数"),n(a)])]),se,e("td",oe,[n(o,{to:"/leetcode/outline/tag/bit-manipulation.html"},{default:s(()=>[ae]),_:1}),t(),n(o,{to:"/leetcode/outline/tag/dynamic-programming.html"},{default:s(()=>[le]),_:1})]),e("td",ce,[n(l,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1})])]),e("tr",null,[ie,e("td",re,[e("a",de,[t("二进制手表"),n(a)])]),ue,e("td",pe,[n(o,{to:"/leetcode/outline/tag/bit-manipulation.html"},{default:s(()=>[he]),_:1}),t(),n(o,{to:"/leetcode/outline/tag/backtracking.html"},{default:s(()=>[_e]),_:1})]),e("td",me,[n(l,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1})])]),e("tr",null,[ke,e("td",ge,[e("a",be,[t("汉明距离"),n(a)])]),fe,e("td",ye,[n(o,{to:"/leetcode/outline/tag/bit-manipulation.html"},{default:s(()=>[ve]),_:1})]),e("td",xe,[n(l,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1})])]),e("tr",null,[we,e("td",Ee,[e("a",je,[t("交替位二进制数"),n(a)])]),Ie,e("td",Oe,[n(o,{to:"/leetcode/outline/tag/bit-manipulation.html"},{default:s(()=>[Te]),_:1})]),e("td",qe,[n(l,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1})])]),e("tr",null,[Ce,e("td",Ne,[e("a",Ae,[t("二进制表示中质数个计算置位"),n(a)])]),Le,e("td",Ve,[n(o,{to:"/leetcode/outline/tag/bit-manipulation.html"},{default:s(()=>[We]),_:1}),t(),n(o,{to:"/leetcode/outline/tag/math.html"},{default:s(()=>[Be]),_:1})]),e("td",He,[n(l,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1})])]),e("tr",null,[Je,e("td",Re,[e("a",ze,[t("将日期转换为二进制表示"),n(a)])]),Fe,e("td",Se,[n(o,{to:"/leetcode/outline/tag/math.html"},{default:s(()=>[De]),_:1}),t(),n(o,{to:"/leetcode/outline/tag/string.html"},{default:s(()=>[Ge]),_:1})]),e("td",Ke,[n(l,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1})])])])])])}const Xe=u(k,[["render",Me],["__file","0191.html.vue"]]);export{Xe as default};
