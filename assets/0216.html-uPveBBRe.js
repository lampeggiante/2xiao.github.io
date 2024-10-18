import{_ as l,r as p,o as i,c as u,a as n,b as s,d as a,w as t,f as r,e as d}from"./app-5VBZs9Uu.js";const k={},m={id:"_216-组合总和-iii",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#_216-组合总和-iii","aria-hidden":"true"},"#",-1),b={href:"https://leetcode.com/problems/combination-sum-iii",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"数组",-1),_=n("code",null,"回溯",-1),f={href:"https://leetcode.com/problems/combination-sum-iii",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"LeetCode",-1),y=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Find all valid combinations of <code>k</code> numbers that sum up to <code>n</code> such that the following conditions are true:</p><ul><li>Only numbers <code>1</code> through <code>9</code> are used.</li><li>Each number is used <strong>at most once</strong>.</li></ul><p>Return <em>a list of all possible valid combinations</em>. The list must not contain the same combination twice, and the combinations may be returned in any order.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: k = 3, n = 7</p><p>Output: [[1,2,4]]</p><p>Explanation:</p><p>1 + 2 + 4 = 7</p><p>There are no other valid combinations.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: k = 3, n = 9</p><p>Output: [[1,2,6],[1,3,5],[2,3,4]]</p><p>Explanation:</p><p>1 + 2 + 6 = 9</p><p>1 + 3 + 5 = 9</p><p>2 + 3 + 4 = 9</p><p>There are no other valid combinations.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: k = 4, n = 1</p><p>Output: []</p><p>Explanation: There are no valid combinations.</p><p>Using 4 different numbers in the range [1,9], the smallest sum we can get is 1+2+3+4 = 10 and since 10 &gt; 1, there are no valid combination.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= k &lt;= 9</code></li><li><code>1 &lt;= n &lt;= 60</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>找出所有相加之和为 <code>n</code> 的 <code>k</code> 个数的组合，且满足下列条件：</p><ul><li>只使用数字 <code>1</code> 到 <code>9</code></li><li>每个数字 <strong>最多使用一次</strong></li></ul><p>返回 <strong>所有可能的有效组合的列表</strong> 。该列表不能包含相同的组合两次，组合可以以任何顺序返回。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以通过回溯算法和递归找到所有满足给定条件的组合：</p><ol><li>定义结果数组 <code>res</code> 用于存储符合条件的组合，以及路径数组 <code>track</code> 用于暂时存储当前组合的数字。</li><li>使用 <code>backtrack</code> 函数进行递归搜索，其中 <code>start</code> 参数表示搜索的起始数字，保证每个数字最多使用一次。</li><li>在递归的过程中，判断当前组合的长度是否等于 <code>k</code> 且组合的和是否等于目标值 <code>n</code>，如果满足条件，则将当前组合加入结果数组。</li><li>在递归的过程中，进行剪枝： <ul><li>如果当前组合的和超过目标值 <code>n</code>，则直接返回，因为后续的数字只会更大，无法满足条件。</li><li>如果当前组合的长度超过 <code>k</code>，则直接返回，因为组合中的数字过多。</li></ul></li><li>循环遍历数字 <code>i</code>，将其加入当前组合，并更新组合的和。然后递归调用 <code>backtrack</code> 函数，并在递归完成后将数字 <code>i</code> 弹出组合，同时更新组合的和，以便回溯到上一层。</li><li>最终返回结果数组 <code>res</code>。</li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">combinationSum3</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">k<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> track <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">backtrack</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">start</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token comment">// 找到一个满足条件的组合</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>track<span class="token punctuation">.</span>length <span class="token operator">==</span> k <span class="token operator">&amp;&amp;</span> sum <span class="token operator">==</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>track<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 当前组合的和超过 n ，剪枝</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&gt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 当前组合的长度超过 k ，剪枝</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>track<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">9</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			track<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
			sum <span class="token operator">+=</span> i<span class="token punctuation">;</span>
			<span class="token function">backtrack</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			track<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			sum <span class="token operator">-=</span> i<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token function">backtrack</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,22),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),w=n("td",{style:{"text-align":"center"}},"39",-1),E={style:{"text-align":"left"}},j={href:"https://leetcode.com/problems/combination-sum",target:"_blank",rel:"noopener noreferrer"},I={style:{"text-align":"center"}},q={style:{"text-align":"left"}},C=n("code",null,"数组",-1),L=n("code",null,"回溯",-1),N={style:{"text-align":"left"}};function T(V,O){const o=p("ExternalLinkIcon"),c=p("font"),e=p("RouterLink");return i(),u("div",null,[n("h1",m,[h,s(),n("a",b,[s("216. 组合总和 III"),a(o)])]),n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/leetcode-js/outline/tag/array.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/leetcode-js/outline/tag/backtracking.html"},{default:t(()=>[_]),_:1}),s("  🔗 "),n("a",f,[g,a(o)])]),y,r(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[w,n("td",E,[n("a",j,[s("组合总和"),a(o)])]),n("td",I,[a(e,{to:"/leetcode-js/problem/0039.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",q,[a(e,{to:"/leetcode-js/outline/tag/array.html"},{default:t(()=>[C]),_:1}),s(),a(e,{to:"/leetcode-js/outline/tag/backtracking.html"},{default:t(()=>[L]),_:1})]),n("td",N,[a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1})])])])])])}const R=l(k,[["render",T],["__file","0216.html.vue"]]);export{R as default};
