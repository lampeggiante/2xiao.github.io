import{_ as p,r as i,o as r,c as u,a as n,b as t,d as e,w as s,f as d,e as c}from"./app-5VBZs9Uu.js";const m={},h={id:"_2637-有时间限制的-promise-对象",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#_2637-有时间限制的-promise-对象","aria-hidden":"true"},"#",-1),f={href:"https://leetcode.com/problems/promise-time-limit",target:"_blank",rel:"noopener noreferrer"},_={href:"https://leetcode.com/problems/promise-time-limit",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"LeetCode",-1),v=c('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an asynchronous function <code>fn</code> and a time <code>t</code> in milliseconds, return a new <strong>time limited</strong> version of the input function. <code>fn</code> takes arguments provided to the **time limited **function.</p><p>The <strong>time limited</strong> function should follow these rules:</p><ul><li>If the <code>fn</code> completes within the time limit of <code>t</code> milliseconds, the <strong>time limited</strong> function should resolve with the result.</li><li>If the execution of the <code>fn</code> exceeds the time limit, the <strong>time limited</strong> function should reject with the string <code>&quot;Time Limit Exceeded&quot;</code>.</li></ul><p><strong>Example 1:</strong></p>',5),b=n("blockquote",null,[n("p",null,"Input:"),n("p",null,"fn = async (n) => {"),n("p",null,"await new Promise(res => setTimeout(res, 100));"),n("p",null,"return n * n;"),n("p",null,"}"),n("p",null,"inputs = [5]"),n("p",null,"t = 50"),n("p",{"rejected:TimeLimitExceeded,time:50":""},"Output:"),n("p",null,"Explanation:"),n("p",null,"const limited = timeLimit(fn, t)"),n("p",null,"const start = performance.now()"),n("p",null,"let result;"),n("p",null,"try {"),n("p",null,"const res = await limited(...inputs)"),n("p",null,'result = {"resolved": res, "time": Math.floor(performance.now() - start)};'),n("p",null,"} catch (err) {"),n("p",null,'result = {"rejected": err, "time": Math.floor(performance.now() - start)};'),n("p",null,"}"),n("p",null,"console.log(result) // Output"),n("p",null,"The provided function is set to resolve after 100ms. However, the time limit is set to 50ms. It rejects at t=50ms because the time limit was reached.")],-1),x=n("p",null,[n("strong",null,"Example 2:")],-1),y=n("blockquote",null,[n("p",null,"Input:"),n("p",null,"fn = async (n) => {"),n("p",null,"await new Promise(res => setTimeout(res, 100));"),n("p",null,"return n * n;"),n("p",null,"}"),n("p",null,"inputs = [5]"),n("p",null,"t = 150"),n("p",{"resolved:25,time:100":""},"Output:"),n("p",null,"Explanation:"),n("p",null,"The function resolved 5 * 5 = 25 at t=100ms. The time limit is never reached.")],-1),w=n("p",null,[n("strong",null,"Example 3:")],-1),T=n("blockquote",null,[n("p",null,"Input:"),n("p",null,"fn = async (a, b) => {"),n("p",null,"await new Promise(res => setTimeout(res, 120));"),n("p",null,"return a + b;"),n("p",null,"}"),n("p",null,"inputs = [5,10]"),n("p",null,"t = 150"),n("p",{"resolved:15,time:120":""},"Output:"),n("p",null,"Explanation:"),n("p",null,"​​​​The function resolved 5 + 10 = 15 at t=120ms. The time limit is never reached.")],-1),E=n("p",null,[n("strong",null,"Example 4:")],-1),j=n("blockquote",null,[n("p",null,"Input:"),n("p",null,"fn = async () => {"),n("p",null,'throw "Error";'),n("p",null,"}"),n("p",null,"inputs = []"),n("p",null,"t = 1000"),n("p",{"rejected:Error,time:0":""},"Output:"),n("p",null,"Explanation:"),n("p",null,"The function immediately throws an error.")],-1),L=c(`<p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= inputs.length &lt;= 10</code></li><li><code>0 &lt;= t &lt;= 1000</code></li><li><code>fn</code> returns a promise</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>请你编写一个函数，它接受一个异步函数 <code>fn</code> 和一个以毫秒为单位的时间 <code>t</code>。它应根据限时函数返回一个有 <strong>限时</strong> 效果的函数。函数 <code>fn</code> 接受提供给 <strong>限时</strong> 函数的参数。</p><p><strong>限时</strong> 函数应遵循以下规则：</p><ul><li>如果 <code>fn</code> 在 <code>t</code> 毫秒的时间限制内完成，<strong>限时</strong> 函数应返回结果。</li><li>如果 <code>fn</code> 的执行超过时间限制，<strong>限时</strong> 函数应拒绝并返回字符串 <code>&quot;Time Limit Exceeded&quot;</code> 。</li></ul><p><strong>提示：</strong></p><ul><li><code>0 &lt;= inputs.length &lt;= 10</code></li><li><code>0 &lt;= t &lt;= 1000</code></li><li><code>fn</code> 返回一个 Promise 对象</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>在 <code>timeLimit</code> 中返回了一个新的异步函数，并通过 <code>Promise</code> 来控制结果的返回。</li><li>设置一个定时器 <code>setTimeout</code> 用来判断 <code>fn</code> 是否超时，当超过给定的时间 <code>t</code> 时，定时器将触发，拒绝 Promise 并返回 <code>&quot;Time Limit Exceeded&quot;</code>。</li><li>执行异步函数 <code>fn</code>，如果 <code>fn</code> 在规定时间内完成，无论是成功还是失败，都清理定时器以确保其不会再次执行。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：取决于传入的 <code>fn</code> 的复杂度，假设为 <code>O(fn)</code>。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅有定时器和 Promise 相关的内存开销。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">fn</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">t</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">timeLimit</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> t</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			<span class="token comment">// 超时后拒绝 Promise</span>
			<span class="token keyword">const</span> timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&#39;Time Limit Exceeded&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token comment">// 执行异步函数 fn</span>
			<span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
					<span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 成功时清除定时器</span>
					<span class="token function">resolve</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
					<span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 失败时清除定时器</span>
					<span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * const limited = timeLimit((t) =&gt; new Promise(res =&gt; setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // &quot;Time Limit Exceeded&quot; at t=100ms
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,15),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),P=n("td",{style:{"text-align":"center"}},"2621",-1),I={style:{"text-align":"left"}},M={href:"https://leetcode.com/problems/sleep",target:"_blank",rel:"noopener noreferrer"},O={style:{"text-align":"center"}},C=n("td",{style:{"text-align":"left"}},null,-1),N={style:{"text-align":"left"}},V=n("td",{style:{"text-align":"center"}},"2622",-1),B={style:{"text-align":"left"}},F={href:"https://leetcode.com/problems/cache-with-time-limit",target:"_blank",rel:"noopener noreferrer"},R={style:{"text-align":"center"}},G=n("td",{style:{"text-align":"left"}},null,-1),H={style:{"text-align":"left"}},S=n("td",{style:{"text-align":"center"}},"2627",-1),z={style:{"text-align":"left"}},A={href:"https://leetcode.com/problems/debounce",target:"_blank",rel:"noopener noreferrer"},D={style:{"text-align":"center"}},J=n("td",{style:{"text-align":"left"}},null,-1),K={style:{"text-align":"left"}},Q=n("td",{style:{"text-align":"center"}},"2636",-1),U={style:{"text-align":"left"}},W={href:"https://leetcode.com/problems/promise-pool",target:"_blank",rel:"noopener noreferrer"},X={style:{"text-align":"center"}},Y=n("td",{style:{"text-align":"left"}},null,-1),Z={style:{"text-align":"left"}},$=n("td",{style:{"text-align":"center"}},"2676",-1),nn={style:{"text-align":"left"}},tn={href:"https://leetcode.com/problems/throttle",target:"_blank",rel:"noopener noreferrer"},en={style:{"text-align":"center"}},sn=n("td",{style:{"text-align":"left"}},null,-1),an={style:{"text-align":"left"}};function on(ln,cn){const a=i("ExternalLinkIcon"),o=i("font"),l=i("RouterLink");return r(),u("div",null,[n("h1",h,[k,t(),n("a",f,[t("2637. 有时间限制的 Promise 对象"),e(a)])]),n("p",null,[t("🟠 "),e(o,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1}),t("  🔗 "),n("a",_,[g,e(a)])]),v,b,x,y,w,T,E,j,L,d(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[P,n("td",I,[n("a",M,[t("睡眠函数"),e(a)])]),n("td",O,[e(l,{to:"/leetcode-js/problem/2621.html"},{default:s(()=>[t("[✓]")]),_:1})]),C,n("td",N,[e(o,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1})])]),n("tr",null,[V,n("td",B,[n("a",F,[t("有时间限制的缓存"),e(a)])]),n("td",R,[e(l,{to:"/leetcode-js/problem/2622.html"},{default:s(()=>[t("[✓]")]),_:1})]),G,n("td",H,[e(o,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1})])]),n("tr",null,[S,n("td",z,[n("a",A,[t("函数防抖"),e(a)])]),n("td",D,[e(l,{to:"/leetcode-js/problem/2627.html"},{default:s(()=>[t("[✓]")]),_:1})]),J,n("td",K,[e(o,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1})])]),n("tr",null,[Q,n("td",U,[n("a",W,[t("Promise 对象池"),e(a)])]),n("td",X,[e(l,{to:"/leetcode-js/problem/2636.html"},{default:s(()=>[t("[✓]")]),_:1})]),Y,n("td",Z,[e(o,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1})])]),n("tr",null,[$,n("td",nn,[n("a",tn,[t("节流"),e(a)])]),n("td",en,[e(l,{to:"/leetcode-js/problem/2676.html"},{default:s(()=>[t("[✓]")]),_:1})]),sn,n("td",an,[e(o,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1})])])])])])}const rn=p(m,[["render",on],["__file","2637.html.vue"]]);export{rn as default};
