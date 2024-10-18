import{_ as c,r as p,o as i,c as r,a as n,b as t,d as s,w as a,f as u,e as d}from"./app-5VBZs9Uu.js";const k={},h={id:"_763-划分字母区间",tabindex:"-1"},b=n("a",{class:"header-anchor",href:"#_763-划分字母区间","aria-hidden":"true"},"#",-1),m={href:"https://leetcode.com/problems/partition-labels",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"贪心",-1),g=n("code",null,"哈希表",-1),f=n("code",null,"双指针",-1),v=n("code",null,"字符串",-1),q={href:"https://leetcode.com/problems/partition-labels",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),y=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a string <code>s</code>. We want to partition the string into as many parts as possible so that each letter appears in at most one part.</p><p>Note that the partition is done so that after concatenating all the parts in order, the resultant string should be <code>s</code>.</p><p>Return <em>a list of integers representing the size of these parts</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;ababcbacadefegdehijhklij&quot;</p><p>Output: [9,7,8]</p><p>Explanation:</p><p>The partition is &quot;ababcbaca&quot;, &quot;defegde&quot;, &quot;hijhklij&quot;.</p><p>This is a partition so that each letter appears in at most one part.</p><p>A partition like &quot;ababcbacadefegde&quot;, &quot;hijhklij&quot; is incorrect, because it splits s into less parts.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;eccbbbbdec&quot;</p><p>Output: [10]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 500</code></li><li><code>s</code> consists of lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串 <code>s</code> 。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。</p><p>注意，划分结果需要满足：将所有划分结果按顺序连接，得到的字符串仍然是 <code>s</code> 。</p><p>返回一个表示每个字符串片段的长度的列表。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;ababcbacadefegdehijhklij&quot;</p><p><strong>输出：</strong>[9,7,8]</p><p><strong>解释：</strong></p><p>划分结果为 &quot;ababcbaca&quot;、&quot;defegde&quot;、&quot;hijhklij&quot; 。</p><p>每个字母最多出现在一个片段中。</p><p>像 &quot;ababcbacadefegde&quot;, &quot;hijhklij&quot; 这样的划分是错误的，因为划分的片段数较少。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;eccbbbbdec&quot;</p><p><strong>输出：</strong>[10]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 500</code></li><li><code>s</code> 仅由小写英文字母组成</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题的关键在于确保每个字母只出现在一个分区中。为了达到这一点，需要确定每个字母的最远出现位置，并根据这个信息进行分割。</p><ol><li><p><strong>记录每个字母的最远出现位置</strong>：</p><ul><li>首先遍历字符串 <code>s</code>，记录每个字符在字符串中的最后一次出现的索引。这样在进行分区时，知道每个字母应该在多远的地方结束。</li></ul></li><li><p><strong>遍历字符串并进行分区</strong>：</p><ul><li>使用两个指针 <code>start</code> 和 <code>end</code> 来定义当前分区的起始位置和结束位置。</li><li>对每个字符，更新 <code>end</code> 为该字符的最远出现位置。继续遍历直到当前索引等于 <code>end</code>，此时说明当前分区完成。</li><li>记录分区的长度，并将 <code>start</code> 更新为下一个分区的开始位置。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串 <code>s</code> 的长度。需要遍历字符串两次，分别记录字符的最远出现位置和确定分区。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，虽然使用了一个对象来存储每个字母的最后出现位置，但其大小是常数级的（最多 26 个字母），所以空间复杂度为 <code>O(1)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">partitionLabels</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token comment">// 遍历字符串，记录每个字符的最后出现位置</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		map<span class="token punctuation">[</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">let</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		end <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token comment">// 遍历字符串，根据最远的出现位置来分割</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		end <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>end<span class="token punctuation">,</span> map<span class="token punctuation">[</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>end <span class="token operator">==</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 记录分区长度</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>end <span class="token operator">-</span> start <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">// 更新下一个分区的起始位置</span>
			start <span class="token operator">=</span> end <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,28),j=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),w=n("td",{style:{"text-align":"center"}},"56",-1),E={style:{"text-align":"left"}},L={href:"https://leetcode.com/problems/merge-intervals",target:"_blank",rel:"noopener noreferrer"},N={style:{"text-align":"center"}},C={style:{"text-align":"left"}},O=n("code",null,"数组",-1),V=n("code",null,"排序",-1),I={style:{"text-align":"left"}},M=n("td",{style:{"text-align":"center"}},"2405",-1),B={style:{"text-align":"left"}},R={href:"https://leetcode.com/problems/optimal-partition-of-string",target:"_blank",rel:"noopener noreferrer"},T=n("td",{style:{"text-align":"center"}},null,-1),z={style:{"text-align":"left"}},A=n("code",null,"贪心",-1),S=n("code",null,"哈希表",-1),W=n("code",null,"字符串",-1),Y={style:{"text-align":"left"}};function D(F,G){const o=p("ExternalLinkIcon"),l=p("font"),e=p("RouterLink");return i(),r("div",null,[n("h1",h,[b,t(),n("a",m,[t("763. 划分字母区间"),s(o)])]),n("p",null,[t("🟠 "),s(l,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1}),t("  🔖  "),s(e,{to:"/leetcode-js/outline/tag/greedy.html"},{default:a(()=>[_]),_:1}),t(),s(e,{to:"/leetcode-js/outline/tag/hash-table.html"},{default:a(()=>[g]),_:1}),t(),s(e,{to:"/leetcode-js/outline/tag/two-pointers.html"},{default:a(()=>[f]),_:1}),t(),s(e,{to:"/leetcode-js/outline/tag/string.html"},{default:a(()=>[v]),_:1}),t("  🔗 "),n("a",q,[x,s(o)])]),y,u(" prettier-ignore "),n("table",null,[j,n("tbody",null,[n("tr",null,[w,n("td",E,[n("a",L,[t("合并区间"),s(o)])]),n("td",N,[s(e,{to:"/leetcode-js/problem/0056.html"},{default:a(()=>[t("[✓]")]),_:1})]),n("td",C,[s(e,{to:"/leetcode-js/outline/tag/array.html"},{default:a(()=>[O]),_:1}),t(),s(e,{to:"/leetcode-js/outline/tag/sorting.html"},{default:a(()=>[V]),_:1})]),n("td",I,[s(l,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1})])]),n("tr",null,[M,n("td",B,[n("a",R,[t("子字符串的最优划分"),s(o)])]),T,n("td",z,[s(e,{to:"/leetcode-js/outline/tag/greedy.html"},{default:a(()=>[A]),_:1}),t(),s(e,{to:"/leetcode-js/outline/tag/hash-table.html"},{default:a(()=>[S]),_:1}),t(),s(e,{to:"/leetcode-js/outline/tag/string.html"},{default:a(()=>[W]),_:1})]),n("td",Y,[s(l,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1})])])])])])}const J=c(k,[["render",D],["__file","0763.html.vue"]]);export{J as default};
