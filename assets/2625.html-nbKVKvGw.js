import{_ as r,r as l,o as p,c,a as n,b as t,d as s,w as o,f as i,e as d}from"./app-mvY9N9Pc.js";const u={},h={id:"_2625-扁平化嵌套数组",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#_2625-扁平化嵌套数组","aria-hidden":"true"},"#",-1),m={href:"https://leetcode.com/problems/flatten-deeply-nested-array",target:"_blank",rel:"noopener noreferrer"},f={href:"https://leetcode.com/problems/flatten-deeply-nested-array",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"LeetCode",-1),_=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a <strong>multi-dimensional</strong> array <code>arr</code> and a depth <code>n</code>, return a <strong>flattened</strong> version of that array.</p><p>A <strong>multi-dimensional</strong> array is a recursive data structure that contains integers or other <strong>multi-dimensional</strong> arrays.</p><p>A <strong>flattened</strong> array is a version of that array with some or all of the sub- arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than <code>n</code>. The depth of the elements in the first array are considered to be <code>0</code>.</p><p>Please solve it without the built-in <code>Array.flat</code> method.</p><p><strong>Example 1:</strong></p><blockquote><p><strong>Input</strong></p><p>arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]</p><p>n = 0</p><p><strong>Output</strong></p><p>[1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]</p><p><strong>Explanation</strong></p><p>Passing a depth of n=0 will always result in the original array. This is because the smallest possible depth of a subarray (0) is not less than n=0. Thus, no subarray should be flattened.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p><strong>Input</strong></p><p>arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]</p><p>n = 1</p><p><strong>Output</strong></p><p>[1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]</p><p><strong>Explanation</strong></p><p>The subarrays starting with 4, 7, and 13 are all flattened. This is because their depth of 0 is less than 1. However [9, 10, 11] remains unflattened because its depth is 1.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p><strong>Input</strong></p><p>arr = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]</p><p>n = 2</p><p><strong>Output</strong></p><p>[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]</p><p><strong>Explanation</strong></p><p>The maximum depth of any subarray is 1. Thus, all of them are flattened.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= count of numbers in arr &lt;= 10^5</code></li><li><code>0 &lt;= count of subarrays in arr &lt;= 10^5</code></li><li><code>maxDepth &lt;= 1000</code></li><li><code>-1000 &lt;= each number &lt;= 1000</code></li><li><code>0 &lt;= n &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>请你编写一个函数，它接收一个 <strong>多维数组</strong> <code>arr</code> 和它的深度 <code>n</code> ，并返回该数组的 <strong>扁平化</strong> 后的结果。</p><p><strong>多维数组</strong> 是一种包含整数或其他多维数组的递归数据结构。</p><p>数组 <strong>扁平化</strong> 是对数组的一种操作，定义是将原数组部分或全部子数组删除，并替换为该子数组中的实际元素。只有当嵌套的数组深度大于 <code>n</code> 时，才应该执行扁平化操作。第一层数组中元素的深度被认为是 0。</p><p>请在没有使用内置方法 <code>Array.flat</code> 的前提下解决这个问题。</p><p><strong>提示：</strong></p><ul><li><code>0 &lt;= arr 的元素个数 &lt;= 10^5</code></li><li><code>0 &lt;= arr 的子数组个数 &lt;= 10^5</code></li><li><code>maxDepth &lt;= 1000</code></li><li><code>-1000 &lt;= each number &lt;= 1000</code></li><li><code>0 &lt;= n &lt;= 1000</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>定义一个空数组 <code>result</code> 用于存储结果。</li><li>定义内部递归函数 <code>flattenArray</code>，使用 <code>forEach</code> 遍历输入的嵌套数组。</li><li>对于数组中的每个元素，： <ul><li>如果是其类型是数组且扁平化深度大于 0，递归调用 <code>flattenArray</code> 函数处理该数组。</li><li>否则，直接将其添加到结果数组中。</li></ul></li><li>最后返回展平后的结果数组。</li></ol><h3 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h3><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组中所有元素的总数，每个元素都需要被访问一次。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，用于存储结果数组。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">arr</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">depth</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">flat</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token function-variable function">flattenArray</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> n <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 递归调用</span>
				<span class="token function">flattenArray</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				<span class="token comment">// 添加非数组元素</span>
				res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token function">flattenArray</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,27),b=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),y=n("td",{style:{"text-align":"center"}},"2628",-1),v={style:{"text-align":"left"}},x={href:"https://leetcode.com/problems/json-deep-equal",target:"_blank",rel:"noopener noreferrer"},w=n("td",{style:{"text-align":"center"}},null,-1),A=n("td",{style:{"text-align":"left"}},null,-1),E={style:{"text-align":"left"}},T=n("td",{style:{"text-align":"center"}},"2633",-1),q={style:{"text-align":"left"}},N={href:"https://leetcode.com/problems/convert-object-to-json-string",target:"_blank",rel:"noopener noreferrer"},O=n("td",{style:{"text-align":"center"}},null,-1),j=n("td",{style:{"text-align":"left"}},null,-1),C={style:{"text-align":"left"}},I=n("td",{style:{"text-align":"center"}},"2649",-1),V={style:{"text-align":"left"}},M={href:"https://leetcode.com/problems/nested-array-generator",target:"_blank",rel:"noopener noreferrer"},B=n("td",{style:{"text-align":"center"}},null,-1),L=n("td",{style:{"text-align":"left"}},null,-1),S={style:{"text-align":"left"}};function D(J,P){const a=l("ExternalLinkIcon"),e=l("font");return p(),c("div",null,[n("h1",h,[k,t(),n("a",m,[t("2625. 扁平化嵌套数组"),s(a)])]),n("p",null,[t("🟠 "),s(e,{color:"#ffb800"},{default:o(()=>[t("Medium")]),_:1}),t("  🔗 "),n("a",f,[g,s(a)])]),_,i(" prettier-ignore "),n("table",null,[b,n("tbody",null,[n("tr",null,[y,n("td",v,[n("a",x,[t("完全相等的 JSON 字符串"),s(a)])]),w,A,n("td",E,[s(e,{color:"#ffb800"},{default:o(()=>[t("Medium")]),_:1})])]),n("tr",null,[T,n("td",q,[n("a",N,[t("将对象转换为 JSON 字符串"),s(a)])]),O,j,n("td",C,[s(e,{color:"#ffb800"},{default:o(()=>[t("Medium")]),_:1})])]),n("tr",null,[I,n("td",V,[n("a",M,[t("嵌套数组生成器"),s(a)])]),B,L,n("td",S,[s(e,{color:"#ffb800"},{default:o(()=>[t("Medium")]),_:1})])])])])])}const H=r(u,[["render",D],["__file","2625.html.vue"]]);export{H as default};
