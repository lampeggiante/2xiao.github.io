import{_ as i,r,o as p,c as d,a as n,b as e,d as t,w as a,f as u,e as c}from"./app-5VBZs9Uu.js";const h={},f={id:"_2634-过滤数组中的元素",tabindex:"-1"},_=n("a",{class:"header-anchor",href:"#_2634-过滤数组中的元素","aria-hidden":"true"},"#",-1),k={href:"https://leetcode.com/problems/filter-elements-from-array",target:"_blank",rel:"noopener noreferrer"},m={href:"https://leetcode.com/problems/filter-elements-from-array",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"LeetCode",-1),b=c('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>arr</code> and a filtering function <code>fn</code>, return a filtered array <code>filteredArr</code>.</p><p>The <code>fn</code> function takes one or two arguments:</p><ul><li><code>arr[i]</code> - number from the <code>arr</code></li><li><code>i</code> - index of <code>arr[i]</code></li></ul><p><code>filteredArr</code> should only contain the elements from the <code>arr</code> for which the expression <code>fn(arr[i], i)</code> evaluates to a <strong>truthy</strong> value. A <strong>truthy</strong> value is a value where <code>Boolean(value)</code> returns <code>true</code>.</p><p>Please solve it without the built-in <code>Array.filter</code> method.</p><p><strong>Example 1:</strong></p>',7),v=n("blockquote",null,[n("p",{return:"",n:"","10;":""},"Input: arr = [0,10,20,30], fn = function greaterThan10(n)"),n("p",null,"Output: [20,30]"),n("p",null,"Explanation:"),n("p",null,"const newArray = filter(arr, fn); // [20, 30]"),n("p",null,"The function filters out values that are not greater than 10")],-1),y=n("p",null,[n("strong",null,"Example 2:")],-1),x=n("blockquote",null,[n("p",{return:"",i:""},"Input: arr = [1,2,3], fn = function firstIndex(n, i)"),n("p",null,"Output: [1]"),n("p",null,"Explanation:"),n("p",null,"fn can also accept the index of each element"),n("p",null,"In this case, the function removes elements not at index 0")],-1),w=n("p",null,[n("strong",null,"Example 3:")],-1),E=n("blockquote",null,[n("p",{return:"",n:"","+":"",1:""},"Input: arr = [-2,-1,0,1,2], fn = function plusOne(n)"),n("p",null,"Output: [-2,0,1,2]"),n("p",null,"Explanation:"),n("p",null,"Falsey values such as 0 should be filtered out")],-1),A=c(`<p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= arr.length &lt;= 1000</code></li><li><code>-10^9 &lt;= arr[i] &lt;= 10^9</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个整数数组 <code>arr</code> 和一个过滤函数 <code>fn</code>，并返回一个过滤后的数组 <code>filteredArr</code> 。</p><p><code>fn</code> 函数接受一个或两个参数：</p><ul><li><code>arr[i]</code> - <code>arr</code> 中的数字</li><li><code>i</code> - <code>arr[i]</code> 的索引</li></ul><p><code>filteredArr</code> 应该只包含使表达式 <code>fn(arr[i], i)</code> 的值为 <strong>真值</strong> 的 <code>arr</code> 中的元素。<strong>真值</strong> 是指 <code>Boolean(value)</code> 返回参数为 <code>true</code> 的值。</p><p>请在不使用内置的 <code>Array.filter</code> 方法的情况下解决该问题。</p><p><strong>提示：</strong></p><ul><li><code>0 &lt;= arr.length &lt;= 1000</code></li><li><code>-10^9 &lt;= arr[i] &lt;= 10^9</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题考察的是对数组的过滤操作，类似于 JavaScript 内置的 <code>Array.prototype.filter</code> 函数。</p><ol><li><strong>初始化一个新数组</strong>：用于存储所有通过回调函数 <code>fn</code> 检查的元素。</li><li><strong>遍历数组</strong>：对于数组中的每一个元素，通过回调函数 <code>fn</code> 来检查是否保留该元素。</li><li><strong>保存符合条件的元素</strong>：将符合条件的元素存入新数组。</li><li><strong>返回新数组</strong>：所有元素过滤完成后，返回包含符合条件元素的新数组。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组的长度，需要遍历整个数组，对每个元素调用回调函数 <code>fn</code>。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，因为需要一个新数组来存储过滤后的元素。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">arr</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">fn</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">filter</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,18),I=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),j=n("td",{style:{"text-align":"center"}},"2626",-1),O={style:{"text-align":"left"}},B={href:"https://leetcode.com/problems/array-reduce-transformation",target:"_blank",rel:"noopener noreferrer"},C={style:{"text-align":"center"}},L=n("td",{style:{"text-align":"left"}},null,-1),N={style:{"text-align":"left"}},V=n("td",{style:{"text-align":"center"}},"2631",-1),T={style:{"text-align":"left"}},q={href:"https://leetcode.com/problems/group-by",target:"_blank",rel:"noopener noreferrer"},F={style:{"text-align":"center"}},R=n("td",{style:{"text-align":"left"}},null,-1),S={style:{"text-align":"left"}},G=n("td",{style:{"text-align":"center"}},"2635",-1),J={style:{"text-align":"left"}},M={href:"https://leetcode.com/problems/apply-transform-over-each-element-in-array",target:"_blank",rel:"noopener noreferrer"},P={style:{"text-align":"center"}},z=n("td",{style:{"text-align":"left"}},null,-1),D={style:{"text-align":"left"}};function H(K,Q){const s=r("ExternalLinkIcon"),o=r("font"),l=r("RouterLink");return p(),d("div",null,[n("h1",f,[_,e(),n("a",k,[e("2634. 过滤数组中的元素"),t(s)])]),n("p",null,[e("🟢 "),t(o,{color:"#15bd66"},{default:a(()=>[e("Easy")]),_:1}),e("  🔗 "),n("a",m,[g,t(s)])]),b,v,y,x,w,E,A,u(" prettier-ignore "),n("table",null,[I,n("tbody",null,[n("tr",null,[j,n("td",O,[n("a",B,[e("数组归约运算"),t(s)])]),n("td",C,[t(l,{to:"/leetcode-js/problem/2626.html"},{default:a(()=>[e("[✓]")]),_:1})]),L,n("td",N,[t(o,{color:"#15bd66"},{default:a(()=>[e("Easy")]),_:1})])]),n("tr",null,[V,n("td",T,[n("a",q,[e("分组"),t(s)])]),n("td",F,[t(l,{to:"/leetcode-js/problem/2631.html"},{default:a(()=>[e("[✓]")]),_:1})]),R,n("td",S,[t(o,{color:"#ffb800"},{default:a(()=>[e("Medium")]),_:1})])]),n("tr",null,[G,n("td",J,[n("a",M,[e("转换数组中的每个元素"),t(s)])]),n("td",P,[t(l,{to:"/leetcode-js/problem/2635.html"},{default:a(()=>[e("[✓]")]),_:1})]),z,n("td",D,[t(o,{color:"#15bd66"},{default:a(()=>[e("Easy")]),_:1})])])])])])}const W=i(h,[["render",H],["__file","2634.html.vue"]]);export{W as default};
