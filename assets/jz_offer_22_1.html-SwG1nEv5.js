import{_ as i,r as o,o as d,c as r,a as n,b as s,d as a,w as e,e as p}from"./app-5VBZs9Uu.js";const u={},k={id:"剑指-offer-22-链表中倒数第k个节点",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#剑指-offer-22-链表中倒数第k个节点","aria-hidden":"true"},"#",-1),_={href:"https://leetcode.cn/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"链表",-1),v=n("code",null,"双指针",-1),f={href:"https://leetcode.cn/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"LeetCode",-1),g=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定一个头节点为 <code>head</code> 的链表用于记录一系列核心肌群训练项目编号，请查找并返回倒数第 <code>cnt</code> 个训练项目编号。</p><p><strong>示例 1：</strong></p><blockquote><p>输入：head = [2,4,7,8], cnt = 1</p><p>输出：8</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= head.length &lt;= 100</code></li><li><code>0 &lt;= head[i] &lt;= 100</code></li><li><code>1 &lt;= cnt &lt;= head.length</code></li></ul>',6),w={class:"hint-container warning"},x=n("p",{class:"hint-container-title"},"注意",-1),y=p(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>使用快慢指针，从 <code>head</code> 开始遍历链表，快指针先出发，两个指针之间相差 <code>cnt</code>，当快指针到达链尾时，满指针正好指向第 <code>cnt</code> 个节点。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">cnt</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">trainingPlan</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> cnt</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> fast <span class="token operator">=</span> head<span class="token punctuation">;</span>
	<span class="token keyword">let</span> slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> cnt<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>fast<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> slow<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function j(L,N){const c=o("ExternalLinkIcon"),l=o("font"),t=o("RouterLink");return d(),r("div",null,[n("h1",k,[h,s(),n("a",_,[s("剑指 Offer 22. 链表中倒数第k个节点"),a(c)])]),n("p",null,[s("🟢 "),a(l,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),a(t,{to:"/leetcode-js/outline/tag/linked-list.html"},{default:e(()=>[m]),_:1}),s(),a(t,{to:"/leetcode-js/outline/tag/two-pointers.html"},{default:e(()=>[v]),_:1}),s("  🔗 "),n("a",f,[b,a(c)])]),g,n("div",w,[x,n("p",null,[s("本题与 LeetCode "),a(t,{to:"/leetcode-js/problem/0019.html"},{default:e(()=>[s("第 19 题")]),_:1}),s(" 相同。")])]),y])}const C=i(u,[["render",j],["__file","jz_offer_22_1.html.vue"]]);export{C as default};
