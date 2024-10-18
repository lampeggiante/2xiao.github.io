import{_ as l,r as o,o as d,c as i,a as n,b as s,d as a,w as e,e as r}from"./app-mvY9N9Pc.js";const u={},k={id:"剑指-offer-53-ii-0-n-1中缺失的数字",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#剑指-offer-53-ii-0-n-1中缺失的数字","aria-hidden":"true"},"#",-1),m={href:"https://leetcode.cn/problems/que-shi-de-shu-zi-lcof",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"位运算",-1),f=n("code",null,"数组",-1),b=n("code",null,"哈希表",-1),v=n("code",null,"数学",-1),g=n("code",null,"二分查找",-1),x={href:"https://leetcode.cn/problems/que-shi-de-shu-zi-lcof",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),y=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>某班级 <code>n</code> 位同学的学号为 <code>0 ~ n-1</code>。点名结果记录于升序数组 <code>records</code>。假定仅有一位同学缺席，请返回他的学号。</p><p><strong>示例 1:</strong></p><blockquote><p>输入: records = [0,1,2,3,5]</p><p>输出: 4</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p>输入: records = [0, 1, 2, 3, 4, 5, 6, 8]</p><p>输出: 7</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= records.length &lt;= 10000</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h1 id="缺席同学的学号" tabindex="-1"><a class="header-anchor" href="#缺席同学的学号" aria-hidden="true">#</a> 缺席同学的学号</h1><p>给定一个升序数组 <code>records</code>，表示某班级 <code>n</code> 位同学的学号，假定仅有一位同学缺席，请返回他的学号。</p><h2 id="解题思路-1" tabindex="-1"><a class="header-anchor" href="#解题思路-1" aria-hidden="true">#</a> 解题思路</h2><p>由于学号是升序排列的，我们可以通过对学号进行二分查找来确定缺席的同学。如果缺席同学的学号为 <code>x</code>，那么在学号数组中，缺席同学之前的学号应该是连续的，缺席同学之后的学号也应该是连续的。因此，我们可以通过比较学号与下标的关系，来确定缺席同学的学号。</p><ol><li>初始化左右指针 <code>left</code> 和 <code>right</code> 分别指向数组的起始和末尾。</li><li>在每一步迭代中，计算中间位置 <code>mid</code>，并比较 <code>records[mid]</code> 和 <code>mid</code> 的值。 <ul><li>如果 <code>records[mid] == mid</code>，说明缺席同学的学号在 <code>mid</code> 的右侧，将左指针 <code>left</code> 更新为 <code>mid + 1</code>。</li><li>如果 <code>records[mid] &gt; mid</code>，说明缺席同学的学号在 <code>mid</code> 的左侧，将右指针 <code>right</code> 更新为 <code>mid - 1</code>。</li></ul></li><li>最终，<code>left</code> 指针所指的位置即为缺席同学的学号。</li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">records</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">takeAttendance</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">records</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> right <span class="token operator">=</span> records<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>right <span class="token operator">+</span> left<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>mid <span class="token operator">==</span> records<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function q(j,L){const c=o("ExternalLinkIcon"),p=o("font"),t=o("RouterLink");return d(),i("div",null,[n("h1",k,[h,s(),n("a",m,[s("剑指 Offer 53 - II. 0～n-1中缺失的数字"),a(c)])]),n("p",null,[s("🟢 "),a(p,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),a(t,{to:"/leetcode/outline/tag/bit-manipulation.html"},{default:e(()=>[_]),_:1}),s(),a(t,{to:"/leetcode/outline/tag/array.html"},{default:e(()=>[f]),_:1}),s(),a(t,{to:"/leetcode/outline/tag/hash-table.html"},{default:e(()=>[b]),_:1}),s(),a(t,{to:"/leetcode/outline/tag/math.html"},{default:e(()=>[v]),_:1}),s(),a(t,{to:"/leetcode/outline/tag/binary-search.html"},{default:e(()=>[g]),_:1}),s("  🔗 "),n("a",x,[w,a(c)])]),y])}const E=l(u,[["render",q],["__file","jz_offer_53_2.html.vue"]]);export{E as default};
