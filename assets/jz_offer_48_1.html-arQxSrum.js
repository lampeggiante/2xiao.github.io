import{_ as u,r as o,o as i,c as r,a as s,b as n,d as a,w as t,e as c}from"./app-GnK0vSxb.js";const d={},k={id:"剑指-offer-48-最长不含重复字符的子字符串",tabindex:"-1"},h=s("a",{class:"header-anchor",href:"#剑指-offer-48-最长不含重复字符的子字符串","aria-hidden":"true"},"#",-1),m={href:"https://leetcode.cn/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof",target:"_blank",rel:"noopener noreferrer"},b=s("code",null,"哈希表",-1),_=s("code",null,"字符串",-1),f=s("code",null,"滑动窗口",-1),v={href:"https://leetcode.cn/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof",target:"_blank",rel:"noopener noreferrer"},g=s("code",null,"LeetCode",-1),w=c('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定一个字符串 <code>s</code> ，请你找出其中不含有重复字符的 <strong>最长子串</strong> 的长度。</p><p><strong>示例 1:</strong></p><blockquote><p>输入: s = &quot;abcabcbb&quot;</p><p>输出: 3</p><p>解释: 因为无重复字符的最长子串是 &quot;abc&quot;，所以其长度为 3。</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p>输入: s = &quot;bbbbb&quot;</p><p>输出: 1</p><p>解释: 因为无重复字符的最长子串是 &quot;b&quot;，所以其长度为 1。</p></blockquote><p><strong>示例 3:</strong></p><blockquote><p>输入: s = &quot;pwwkew&quot;</p><p>输出: 3</p><p>解释: 因为无重复字符的最长子串是 &quot;wke&quot;，所以其长度为 3。请注意，你的答案必须是 子串 的长度，&quot;pwke&quot; 是一个子序列，不是子串。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>0 &lt;= s.length &lt;= 5 * 10^4</code></li><li><code>s</code> 由英文字母、数字、符号和空格组成</li></ul>',10),q={class:"hint-container warning"},x=s("p",{class:"hint-container-title"},"注意",-1),y=s("h2",{id:"解题思路",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#解题思路","aria-hidden":"true"},"#"),n(" 解题思路")],-1),z=c(`<p>滑动窗口的右边界不断的右移，只要没有重复的字符，就持续向右扩大窗口边界。一旦出现了重复字符，就需要缩小左边界，直到重复的字符移出了左边界，然后继续移动滑动窗口的右边界。以此类推，每次移动需要计算当前长度，并判断是否需要更新最大长度，最终最大的值就是题目中的所求。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">lengthOfLongestSubstring</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> max <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> curStr <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> char <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> pos <span class="token operator">=</span> curStr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>pos <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			curStr <span class="token operator">=</span> curStr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>pos <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> curStr<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		curStr <span class="token operator">+=</span> char<span class="token punctuation">;</span>
		max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>max<span class="token punctuation">,</span> curStr<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> max<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function S(L,j){const p=o("ExternalLinkIcon"),l=o("font"),e=o("RouterLink");return i(),r("div",null,[s("h1",k,[h,n(),s("a",m,[n("剑指 Offer 48. 最长不含重复字符的子字符串"),a(p)])]),s("p",null,[n("🟠 "),a(l,{color:"#ffb800"},{default:t(()=>[n("Medium")]),_:1}),n("  🔖  "),a(e,{to:"/leetcode/outline/tag/hash-table.html"},{default:t(()=>[b]),_:1}),n(),a(e,{to:"/leetcode/outline/tag/string.html"},{default:t(()=>[_]),_:1}),n(),a(e,{to:"/leetcode/outline/tag/sliding-window.html"},{default:t(()=>[f]),_:1}),n("  🔗 "),s("a",v,[g,a(p)])]),w,s("div",q,[x,s("p",null,[n("本题与 LeetCode "),a(e,{to:"/leetcode/problem/0003.html"},{default:t(()=>[n("第 3 题")]),_:1}),n(" 相同。")])]),y,s("p",null,[n("这一题和 "),a(e,{to:"/leetcode/problem/0438.html"},{default:t(()=>[n("第 438 题")]),_:1}),n("，"),a(e,{to:"/leetcode/problem/0076.html"},{default:t(()=>[n("第 76 题")]),_:1}),n("，"),a(e,{to:"/leetcode/problem/0567.html"},{default:t(()=>[n("第 567 题")]),_:1}),n(' 类似，用的思想都是"滑动窗口"。')]),z])}const N=u(d,[["render",S],["__file","jz_offer_48_1.html.vue"]]);export{N as default};
