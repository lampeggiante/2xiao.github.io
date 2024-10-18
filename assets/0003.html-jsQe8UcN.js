import{_ as d,r as c,o as p,c as _,a as t,b as e,d as n,w as s,f as h,e as k}from"./app-5VBZs9Uu.js";const g={},m={id:"_3-无重复字符的最长子串",tabindex:"-1"},f=t("a",{class:"header-anchor",href:"#_3-无重复字符的最长子串","aria-hidden":"true"},"#",-1),b={href:"https://leetcode.com/problems/longest-substring-without-repeating-characters",target:"_blank",rel:"noopener noreferrer"},y=t("code",null,"哈希表",-1),x=t("code",null,"字符串",-1),w=t("code",null,"滑动窗口",-1),v={href:"https://leetcode.com/problems/longest-substring-without-repeating-characters",target:"_blank",rel:"noopener noreferrer"},j=t("code",null,"LeetCode",-1),q=k('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>s</code>, find the length of the <strong>longest</strong> <strong>substring</strong> without repeating characters.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;abcabcbb&quot;</p><p>Output: 3</p><p>Explanation: The answer is &quot;abc&quot;, with the length of 3.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;bbbbb&quot;</p><p>Output: 1</p><p>Explanation: The answer is &quot;b&quot;, with the length of 1.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;pwwkew&quot;</p><p>Output: 3</p><p>Explanation: The answer is &quot;wke&quot;, with the length of 3.</p><p>Notice that the answer must be a substring, &quot;pwke&quot; is a subsequence and not a substring.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= s.length &lt;= 5 * 10^4</code></li><li><code>s</code> consists of English letters, digits, symbols and spaces.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个字符串 <code>s</code> ，请你找出其中不含有重复字符的 <strong>最长子串</strong> 的长度。</p><p><strong>子字符串</strong> 是字符串中连续的 <strong>非空</strong> 字符序列。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>',14),M=t("p",null,"滑动窗口的右边界不断的右移，只要没有重复的字符，就持续向右扩大窗口边界。一旦出现了重复字符，就需要缩小左边界，直到重复的字符移出了左边界，然后继续移动滑动窗口的右边界。以此类推，每次移动需要计算当前长度，并判断是否需要更新最大长度，最终最大的值就是题目中的所求。",-1),E=t("h2",{id:"代码",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#代码","aria-hidden":"true"},"#"),e(" 代码")],-1),S=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[e(`/**
 * `),t("span",{class:"token keyword"},"@param"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("string"),t("span",{class:"token punctuation"},"}")]),e(),t("span",{class:"token parameter"},"s"),e(`
 * `),t("span",{class:"token keyword"},"@return"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("number"),t("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),t("span",{class:"token keyword"},"var"),e(),t("span",{class:"token function-variable function"},"lengthOfLongestSubstring"),e(),t("span",{class:"token operator"},"="),e(),t("span",{class:"token keyword"},"function"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"s"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
	`),t("span",{class:"token keyword"},"let"),e(" window "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),e(`
		left `),t("span",{class:"token operator"},"="),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),e(`
		right `),t("span",{class:"token operator"},"="),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),e(`
		res `),t("span",{class:"token operator"},"="),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),e(`

	`),t("span",{class:"token keyword"},"while"),e(),t("span",{class:"token punctuation"},"("),e("right "),t("span",{class:"token operator"},"<"),e(" s"),t("span",{class:"token punctuation"},"."),e("length"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
		`),t("span",{class:"token keyword"},"let"),e(" c "),t("span",{class:"token operator"},"="),e(" s"),t("span",{class:"token punctuation"},"["),e("right"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),e(`
		right`),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},";"),e(`
		window`),t("span",{class:"token punctuation"},"["),e("c"),t("span",{class:"token punctuation"},"]"),e(),t("span",{class:"token operator"},"="),e(),t("span",{class:"token punctuation"},"("),e("window"),t("span",{class:"token punctuation"},"["),e("c"),t("span",{class:"token punctuation"},"]"),e(),t("span",{class:"token operator"},"||"),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token operator"},"+"),e(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},";"),e(`

		`),t("span",{class:"token keyword"},"while"),e(),t("span",{class:"token punctuation"},"("),e("window"),t("span",{class:"token punctuation"},"["),e("c"),t("span",{class:"token punctuation"},"]"),e(),t("span",{class:"token operator"},">"),e(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
			`),t("span",{class:"token keyword"},"let"),e(" d "),t("span",{class:"token operator"},"="),e(" s"),t("span",{class:"token punctuation"},"["),e("left"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),e(`
			left`),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},";"),e(`
			window`),t("span",{class:"token punctuation"},"["),e("d"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token operator"},"--"),t("span",{class:"token punctuation"},";"),e(`
		`),t("span",{class:"token punctuation"},"}"),e(`

		res `),t("span",{class:"token operator"},"="),e(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"max"),t("span",{class:"token punctuation"},"("),e("res"),t("span",{class:"token punctuation"},","),e(" right "),t("span",{class:"token operator"},"-"),e(" left"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token punctuation"},"}"),e(`

	`),t("span",{class:"token keyword"},"return"),e(" res"),t("span",{class:"token punctuation"},";"),e(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),I=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[e(`/**
 * `),t("span",{class:"token keyword"},"@param"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("string"),t("span",{class:"token punctuation"},"}")]),e(),t("span",{class:"token parameter"},"s"),e(`
 * `),t("span",{class:"token keyword"},"@return"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("number"),t("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),t("span",{class:"token keyword"},"var"),e(),t("span",{class:"token function-variable function"},"lengthOfLongestSubstring"),e(),t("span",{class:"token operator"},"="),e(),t("span",{class:"token keyword"},"function"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"s"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
	`),t("span",{class:"token keyword"},"let"),e(" max "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"let"),e(" curStr "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"for"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),e(" i "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),e(" i "),t("span",{class:"token operator"},"<"),e(" s"),t("span",{class:"token punctuation"},"."),e("length"),t("span",{class:"token punctuation"},";"),e(" i"),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
		`),t("span",{class:"token keyword"},"const"),e(" char "),t("span",{class:"token operator"},"="),e(" s"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"charAt"),t("span",{class:"token punctuation"},"("),e("i"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
		`),t("span",{class:"token keyword"},"const"),e(" pos "),t("span",{class:"token operator"},"="),e(" curStr"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"indexOf"),t("span",{class:"token punctuation"},"("),e("char"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
		`),t("span",{class:"token keyword"},"if"),e(),t("span",{class:"token punctuation"},"("),e("pos "),t("span",{class:"token operator"},"!=="),e(),t("span",{class:"token operator"},"-"),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
			curStr `),t("span",{class:"token operator"},"="),e(" curStr"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"slice"),t("span",{class:"token punctuation"},"("),e("pos "),t("span",{class:"token operator"},"+"),e(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),e(" curStr"),t("span",{class:"token punctuation"},"."),e("length"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
		`),t("span",{class:"token punctuation"},"}"),e(`
		curStr `),t("span",{class:"token operator"},"+="),e(" char"),t("span",{class:"token punctuation"},";"),e(`
		max `),t("span",{class:"token operator"},"="),e(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"max"),t("span",{class:"token punctuation"},"("),e("max"),t("span",{class:"token punctuation"},","),e(" curStr"),t("span",{class:"token punctuation"},"."),e("length"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token punctuation"},"}"),e(`
	`),t("span",{class:"token keyword"},"return"),e(" max"),t("span",{class:"token punctuation"},";"),e(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),C=t("h2",{id:"相关题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),e(" 相关题目")],-1),L=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),N=t("td",{style:{"text-align":"center"}},"159",-1),O={style:{"text-align":"left"}},T={href:"https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters",target:"_blank",rel:"noopener noreferrer"},A=t("td",{style:{"text-align":"center"}},null,-1),V={style:{"text-align":"left"}},B=t("code",null,"哈希表",-1),K=t("code",null,"字符串",-1),R=t("code",null,"滑动窗口",-1),G={style:{"text-align":"left"}},H=t("td",{style:{"text-align":"center"}},"340",-1),z={style:{"text-align":"left"}},D={href:"https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters",target:"_blank",rel:"noopener noreferrer"},F=t("td",{style:{"text-align":"center"}},null,-1),J={style:{"text-align":"left"}},P=t("code",null,"哈希表",-1),Q=t("code",null,"字符串",-1),U=t("code",null,"滑动窗口",-1),W={style:{"text-align":"left"}},X=t("td",{style:{"text-align":"center"}},"992",-1),Y={style:{"text-align":"left"}},Z={href:"https://leetcode.com/problems/subarrays-with-k-different-integers",target:"_blank",rel:"noopener noreferrer"},$=t("td",{style:{"text-align":"center"}},null,-1),tt={style:{"text-align":"left"}},et=t("code",null,"数组",-1),nt=t("code",null,"哈希表",-1),st=t("code",null,"计数",-1),ot=t("code",null,"1+",-1),at={style:{"text-align":"left"}},lt=t("td",{style:{"text-align":"center"}},"1695",-1),ct={style:{"text-align":"left"}},it={href:"https://leetcode.com/problems/maximum-erasure-value",target:"_blank",rel:"noopener noreferrer"},ut=t("td",{style:{"text-align":"center"}},null,-1),rt={style:{"text-align":"left"}},dt=t("code",null,"数组",-1),pt=t("code",null,"哈希表",-1),_t=t("code",null,"滑动窗口",-1),ht={style:{"text-align":"left"}},kt=t("td",{style:{"text-align":"center"}},"2067",-1),gt={style:{"text-align":"left"}},mt={href:"https://leetcode.com/problems/number-of-equal-count-substrings",target:"_blank",rel:"noopener noreferrer"},ft=t("td",{style:{"text-align":"center"}},null,-1),bt={style:{"text-align":"left"}},yt=t("code",null,"字符串",-1),xt=t("code",null,"计数",-1),wt=t("code",null,"前缀和",-1),vt={style:{"text-align":"left"}},jt=t("td",{style:{"text-align":"center"}},"2260",-1),qt={style:{"text-align":"left"}},Mt={href:"https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up",target:"_blank",rel:"noopener noreferrer"},Et={style:{"text-align":"center"}},St={style:{"text-align":"left"}},It=t("code",null,"数组",-1),Ct=t("code",null,"哈希表",-1),Lt=t("code",null,"滑动窗口",-1),Nt={style:{"text-align":"left"}},Ot=t("td",{style:{"text-align":"center"}},"2401",-1),Tt={style:{"text-align":"left"}},At={href:"https://leetcode.com/problems/longest-nice-subarray",target:"_blank",rel:"noopener noreferrer"},Vt=t("td",{style:{"text-align":"center"}},null,-1),Bt={style:{"text-align":"left"}},Kt=t("code",null,"位运算",-1),Rt=t("code",null,"数组",-1),Gt=t("code",null,"滑动窗口",-1),Ht={style:{"text-align":"left"}},zt=t("td",{style:{"text-align":"center"}},"2405",-1),Dt={style:{"text-align":"left"}},Ft={href:"https://leetcode.com/problems/optimal-partition-of-string",target:"_blank",rel:"noopener noreferrer"},Jt=t("td",{style:{"text-align":"center"}},null,-1),Pt={style:{"text-align":"left"}},Qt=t("code",null,"贪心",-1),Ut=t("code",null,"哈希表",-1),Wt=t("code",null,"字符串",-1),Xt={style:{"text-align":"left"}},Yt=t("td",{style:{"text-align":"center"}},"2799",-1),Zt={style:{"text-align":"left"}},$t={href:"https://leetcode.com/problems/count-complete-subarrays-in-an-array",target:"_blank",rel:"noopener noreferrer"},te=t("td",{style:{"text-align":"center"}},null,-1),ee={style:{"text-align":"left"}},ne=t("code",null,"数组",-1),se=t("code",null,"哈希表",-1),oe=t("code",null,"滑动窗口",-1),ae={style:{"text-align":"left"}},le=t("td",{style:{"text-align":"center"}},"2981",-1),ce={style:{"text-align":"left"}},ie={href:"https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i",target:"_blank",rel:"noopener noreferrer"},ue=t("td",{style:{"text-align":"center"}},null,-1),re={style:{"text-align":"left"}},de=t("code",null,"哈希表",-1),pe=t("code",null,"字符串",-1),_e=t("code",null,"二分查找",-1),he=t("code",null,"2+",-1),ke={style:{"text-align":"left"}},ge=t("td",{style:{"text-align":"center"}},"2982",-1),me={style:{"text-align":"left"}},fe={href:"https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-ii",target:"_blank",rel:"noopener noreferrer"},be=t("td",{style:{"text-align":"center"}},null,-1),ye={style:{"text-align":"left"}},xe=t("code",null,"哈希表",-1),we=t("code",null,"字符串",-1),ve=t("code",null,"二分查找",-1),je=t("code",null,"2+",-1),qe={style:{"text-align":"left"}};function Me(Ee,Se){const a=c("ExternalLinkIcon"),l=c("font"),o=c("RouterLink"),r=c("CodeTabs");return p(),_("div",null,[t("h1",m,[f,e(),t("a",b,[e("3. 无重复字符的最长子串"),n(a)])]),t("p",null,[e("🟠 "),n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1}),e("  🔖  "),n(o,{to:"/leetcode-js/outline/tag/hash-table.html"},{default:s(()=>[y]),_:1}),e(),n(o,{to:"/leetcode-js/outline/tag/string.html"},{default:s(()=>[x]),_:1}),e(),n(o,{to:"/leetcode-js/outline/tag/sliding-window.html"},{default:s(()=>[w]),_:1}),e("  🔗 "),t("a",v,[j,n(a)])]),q,t("p",null,[e("这一题和 "),n(o,{to:"/leetcode-js/problem/0438.html"},{default:s(()=>[e("第 438 题")]),_:1}),e("，"),n(o,{to:"/leetcode-js/problem/0076.html"},{default:s(()=>[e("第 76 题")]),_:1}),e("，"),n(o,{to:"/leetcode-js/problem/0567.html"},{default:s(()=>[e("第 567 题")]),_:1}),e(' 类似，用的思想都是"滑动窗口"。')]),M,t("p",null,[e("详细的滑动窗口答题框架讲解，可阅读 "),n(o,{to:"/leetcode-js/algorithm/slide_window.html"},{default:s(()=>[e("《3.11 滑动窗口》")]),_:1}),e("。")]),E,n(r,{id:"96",data:[{id:"滑动窗口框架"},{id:"简化版"}]},{title0:s(({value:i,isActive:u})=>[e("滑动窗口框架")]),title1:s(({value:i,isActive:u})=>[e("简化版")]),tab0:s(({value:i,isActive:u})=>[S]),tab1:s(({value:i,isActive:u})=>[I]),_:1}),C,h(" prettier-ignore "),t("table",null,[L,t("tbody",null,[t("tr",null,[N,t("td",O,[t("a",T,[e("至多包含两个不同字符的最长子串"),n(a)])]),A,t("td",V,[n(o,{to:"/leetcode-js/outline/tag/hash-table.html"},{default:s(()=>[B]),_:1}),e(),n(o,{to:"/leetcode-js/outline/tag/string.html"},{default:s(()=>[K]),_:1}),e(),n(o,{to:"/leetcode-js/outline/tag/sliding-window.html"},{default:s(()=>[R]),_:1})]),t("td",G,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[H,t("td",z,[t("a",D,[e("至多包含 K 个不同字符的最长子串"),n(a)])]),F,t("td",J,[n(o,{to:"/leetcode-js/outline/tag/hash-table.html"},{default:s(()=>[P]),_:1}),e(),n(o,{to:"/leetcode-js/outline/tag/string.html"},{default:s(()=>[Q]),_:1}),e(),n(o,{to:"/leetcode-js/outline/tag/sliding-window.html"},{default:s(()=>[U]),_:1})]),t("td",W,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[X,t("td",Y,[t("a",Z,[e("K 个不同整数的子数组"),n(a)])]),$,t("td",tt,[n(o,{to:"/leetcode-js/outline/tag/array.html"},{default:s(()=>[et]),_:1}),e(),n(o,{to:"/leetcode-js/outline/tag/hash-table.html"},{default:s(()=>[nt]),_:1}),e(),n(o,{to:"/leetcode-js/outline/tag/counting.html"},{default:s(()=>[st]),_:1}),e(),ot]),t("td",at,[n(l,{color:"#ff334b"},{default:s(()=>[e("Hard")]),_:1})])]),t("tr",null,[lt,t("td",ct,[t("a",it,[e("删除子数组的最大得分"),n(a)])]),ut,t("td",rt,[n(o,{to:"/leetcode-js/outline/tag/array.html"},{default:s(()=>[dt]),_:1}),e(),n(o,{to:"/leetcode-js/outline/tag/hash-table.html"},{default:s(()=>[pt]),_:1}),e(),n(o,{to:"/leetcode-js/outline/tag/sliding-window.html"},{default:s(()=>[_t]),_:1})]),t("td",ht,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[kt,t("td",gt,[t("a",mt,[e("等计数子串的数量"),n(a)])]),ft,t("td",bt,[n(o,{to:"/leetcode-js/outline/tag/string.html"},{default:s(()=>[yt]),_:1}),e(),n(o,{to:"/leetcode-js/outline/tag/counting.html"},{default:s(()=>[xt]),_:1}),e(),n(o,{to:"/leetcode-js/outline/tag/prefix-sum.html"},{default:s(()=>[wt]),_:1})]),t("td",vt,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[jt,t("td",qt,[t("a",Mt,[e("必须拿起的最小连续卡牌数"),n(a)])]),t("td",Et,[n(o,{to:"/leetcode-js/problem/2260.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",St,[n(o,{to:"/leetcode-js/outline/tag/array.html"},{default:s(()=>[It]),_:1}),e(),n(o,{to:"/leetcode-js/outline/tag/hash-table.html"},{default:s(()=>[Ct]),_:1}),e(),n(o,{to:"/leetcode-js/outline/tag/sliding-window.html"},{default:s(()=>[Lt]),_:1})]),t("td",Nt,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[Ot,t("td",Tt,[t("a",At,[e("最长优雅子数组"),n(a)])]),Vt,t("td",Bt,[n(o,{to:"/leetcode-js/outline/tag/bit-manipulation.html"},{default:s(()=>[Kt]),_:1}),e(),n(o,{to:"/leetcode-js/outline/tag/array.html"},{default:s(()=>[Rt]),_:1}),e(),n(o,{to:"/leetcode-js/outline/tag/sliding-window.html"},{default:s(()=>[Gt]),_:1})]),t("td",Ht,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[zt,t("td",Dt,[t("a",Ft,[e("子字符串的最优划分"),n(a)])]),Jt,t("td",Pt,[n(o,{to:"/leetcode-js/outline/tag/greedy.html"},{default:s(()=>[Qt]),_:1}),e(),n(o,{to:"/leetcode-js/outline/tag/hash-table.html"},{default:s(()=>[Ut]),_:1}),e(),n(o,{to:"/leetcode-js/outline/tag/string.html"},{default:s(()=>[Wt]),_:1})]),t("td",Xt,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[Yt,t("td",Zt,[t("a",$t,[e("统计完全子数组的数目"),n(a)])]),te,t("td",ee,[n(o,{to:"/leetcode-js/outline/tag/array.html"},{default:s(()=>[ne]),_:1}),e(),n(o,{to:"/leetcode-js/outline/tag/hash-table.html"},{default:s(()=>[se]),_:1}),e(),n(o,{to:"/leetcode-js/outline/tag/sliding-window.html"},{default:s(()=>[oe]),_:1})]),t("td",ae,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[le,t("td",ce,[t("a",ie,[e("找出出现至少三次的最长特殊子字符串 I"),n(a)])]),ue,t("td",re,[n(o,{to:"/leetcode-js/outline/tag/hash-table.html"},{default:s(()=>[de]),_:1}),e(),n(o,{to:"/leetcode-js/outline/tag/string.html"},{default:s(()=>[pe]),_:1}),e(),n(o,{to:"/leetcode-js/outline/tag/binary-search.html"},{default:s(()=>[_e]),_:1}),e(),he]),t("td",ke,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[ge,t("td",me,[t("a",fe,[e("找出出现至少三次的最长特殊子字符串 II"),n(a)])]),be,t("td",ye,[n(o,{to:"/leetcode-js/outline/tag/hash-table.html"},{default:s(()=>[xe]),_:1}),e(),n(o,{to:"/leetcode-js/outline/tag/string.html"},{default:s(()=>[we]),_:1}),e(),n(o,{to:"/leetcode-js/outline/tag/binary-search.html"},{default:s(()=>[ve]),_:1}),e(),je]),t("td",qe,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])])])])])}const Ce=d(g,[["render",Me],["__file","0003.html.vue"]]);export{Ce as default};
