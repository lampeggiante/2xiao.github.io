import{_ as c,r as p,o as i,c as u,a as n,b as s,d as e,w as t,f as r,e as d}from"./app-5VBZs9Uu.js";const h={},k={id:"_375-猜数字大小-ii",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#_375-猜数字大小-ii","aria-hidden":"true"},"#",-1),f={href:"https://leetcode.com/problems/guess-number-higher-or-lower-ii",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"数学",-1),g=n("code",null,"动态规划",-1),y=n("code",null,"博弈",-1),b={href:"https://leetcode.com/problems/guess-number-higher-or-lower-ii",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>We are playing the Guessing Game. The game will work as follows:</p><ol><li>I pick a number between <code>1</code> and <code>n</code>.</li><li>You guess a number.</li><li>If you guess the right number, <strong>you win the game</strong>.</li><li>If you guess the wrong number, then I will tell you whether the number I picked is <strong>higher or lower</strong> , and you will continue guessing.</li><li>Every time you guess a wrong number <code>x</code>, you will pay <code>x</code> dollars. If you run out of money, <strong>you lose the game</strong>.</li></ol><p>Given a particular <code>n</code>, return <em>the minimum amount of money you need to <strong>guarantee a win regardless of what number I pick</strong></em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/09/10/graph.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: n = 10</p><p>Output: 16</p><p>Explanation: The winning strategy is as follows:</p><ul><li><p>The range is [1,10]. Guess 7.</p></li><li><p>If this is my number, your total is $0. Otherwise, you pay $7.</p></li><li><p>If my number is higher, the range is [8,10]. Guess 9.</p><ul><li><p>If this is my number, your total is $7. Otherwise, you pay $9.</p></li><li><p>If my number is higher, it must be 10. Guess 10. Your total is $7 + $9 = $16.</p></li><li><p>If my number is lower, it must be 8. Guess 8. Your total is $7 + $9 = $16.</p></li></ul></li><li><p>If my number is lower, the range is [1,6]. Guess 3.</p><ul><li><p>If this is my number, your total is $7. Otherwise, you pay $3.</p></li><li><p>If my number is higher, the range is [4,6]. Guess 5.</p><ul><li><p>If this is my number, your total is $7 + $3 = $10. Otherwise, you pay $5.</p></li><li><p>If my number is higher, it must be 6. Guess 6. Your total is $7 + $3 + $5 = $15.</p></li><li><p>If my number is lower, it must be 4. Guess 4. Your total is $7 + $3 + $5 = $15.</p></li></ul></li><li><p>If my number is lower, the range is [1,2]. Guess 1.</p><ul><li><p>If this is my number, your total is $7 + $3 = $10. Otherwise, you pay $1.</p></li><li><p>If my number is higher, it must be 2. Guess 2. Your total is $7 + $3 + $1 = $11.</p></li></ul></li></ul></li></ul><p>The worst case in all these scenarios is that you pay $16. Hence, you only need $16 to guarantee a win.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 1</p><p>Output: 0</p><p>Explanation: There is only one possible number, so you can guess 1 and not have to pay anything.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: n = 2</p><p>Output: 1</p><p>Explanation: There are two possible numbers, 1 and 2.</p><ul><li><p>Guess 1.</p><ul><li><p>If this is my number, your total is $0. Otherwise, you pay $1.</p></li><li><p>If my number is higher, it must be 2. Guess 2. Your total is $1.</p></li></ul></li></ul><p>The worst case is that you pay $1.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 200</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>我们正在玩一个猜数游戏，游戏规则如下：</p><ol><li>我从 <code>1</code> 到 <code>n</code> 之间选择一个数字。</li><li>你来猜我选了哪个数字。</li><li>如果你猜到正确的数字，就会 <strong>赢得游戏</strong> 。</li><li>如果你猜错了，那么我会告诉你，我选的数字比你的 <strong>更大或者更小</strong> ，并且你需要继续猜数。</li><li>每当你猜了数字 <code>x</code> 并且猜错了的时候，你需要支付金额为 <code>x</code> 的现金。如果你花光了钱，就会 输掉游戏 。</li></ol><p>给你一个特定的数字 <code>n</code> ，返回能够 <strong>确保你获胜</strong> 的最小现金数，<strong>不管我选择那个数字</strong> 。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>用 <code>f(i, j)</code> 表示在范围 <code>[i, j]</code> 内确保胜利的最少金额，目标是计算 <code>f(1, n)</code>。</p><p>假设第一次猜的数字是 <code>x</code> 并且猜错，则需要支付金额 <code>x</code>，当 <code>x</code> 大于所选数字时，为了确保胜利还需要支付的金额是 <code>f(1, x - 1)</code>，当 <code>x</code> 小于所选数字时，为了确保胜利还需要支付的金额是 <code>f(x + 1, n)</code>。为了在任何情况下都能确保胜利，应考虑最坏情况，计算 <code>f(1, n)</code> 时应取上述两者的最大值：<code>f(1, n) = x + max(f(1, x − 1), f(x + 1, n))</code>。</p><p>由于 <code>f(1, x - 1)</code> 和 <code>f(x + 1, n)</code> 都是比原始问题 <code>f(1, n)</code> 规模更小的问题，因此可以使用动态规划的方法求解。</p><p>为了将确保胜利的金额最小化，需要遍历从 <code>1</code> 到 <code>n</code> 的所有可能的 <code>x</code>，使得 <code>f(1, n)</code> 的值最小：</p><p><code>f(1, n) = min{x + max⁡(f(1, x − 1), f(x + 1, n))} (⁡1 ≤ x ≤ n)</code></p><p>创建行数和列数都是 <code>n + 1</code> 的二维数组 <code>f</code>，其中 <code>f[i][j]</code> 即为状态 <code>f(i, j)</code>。</p><p>在根据状态转移方程计算时需要注意下标的边界问题，当 <code>j = n</code> 时，如果 <code>x = j</code> 则 <code>x + 1 &gt; n</code>，此时 <code>f[x][j]</code> 会出现下标越界。为了避免出现下标越界，计算 <code>f[i][j]</code> 的方法是：首先令 <code>f[i][j] = j + f[i][j - 1]</code>，然后遍历 <code>i ≤ x &lt; j</code> 的每个 x，更新 <code>f[i][j]</code> 的值。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">getMoneyAmount</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> f <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> j <span class="token operator">+</span> f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> x <span class="token operator">=</span> i<span class="token punctuation">;</span> x <span class="token operator">&lt;</span> j<span class="token punctuation">;</span> x<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> x <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>x <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> f<span class="token punctuation">[</span>x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> f<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,28),v=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),j=n("td",{style:{"text-align":"center"}},"294",-1),$={style:{"text-align":"left"}},I={href:"https://leetcode.com/problems/flip-game-ii",target:"_blank",rel:"noopener noreferrer"},G=n("td",{style:{"text-align":"center"}},null,-1),E={style:{"text-align":"left"}},O=n("code",null,"记忆化搜索",-1),T=n("code",null,"数学",-1),M=n("code",null,"动态规划",-1),Y=n("code",null,"2+",-1),q={style:{"text-align":"left"}},C=n("td",{style:{"text-align":"center"}},"374",-1),L={style:{"text-align":"left"}},N={href:"https://leetcode.com/problems/guess-number-higher-or-lower",target:"_blank",rel:"noopener noreferrer"},V={style:{"text-align":"center"}},z={style:{"text-align":"left"}},A=n("code",null,"二分查找",-1),B=n("code",null,"交互",-1),R={style:{"text-align":"left"}},H=n("td",{style:{"text-align":"center"}},"464",-1),K={style:{"text-align":"left"}},S={href:"https://leetcode.com/problems/can-i-win",target:"_blank",rel:"noopener noreferrer"},W=n("td",{style:{"text-align":"center"}},null,-1),D={style:{"text-align":"left"}},F=n("code",null,"位运算",-1),J=n("code",null,"记忆化搜索",-1),P=n("code",null,"数学",-1),Q=n("code",null,"3+",-1),U={style:{"text-align":"left"}},X=n("td",{style:{"text-align":"center"}},"658",-1),Z={style:{"text-align":"left"}},nn={href:"https://leetcode.com/problems/find-k-closest-elements",target:"_blank",rel:"noopener noreferrer"},sn=n("td",{style:{"text-align":"center"}},null,-1),en={style:{"text-align":"left"}},tn=n("code",null,"数组",-1),an=n("code",null,"双指针",-1),on=n("code",null,"二分查找",-1),ln=n("code",null,"3+",-1),pn={style:{"text-align":"left"}};function cn(un,rn){const o=p("ExternalLinkIcon"),l=p("font"),a=p("RouterLink");return i(),u("div",null,[n("h1",k,[m,s(),n("a",f,[s("375. 猜数字大小 II"),e(o)])]),n("p",null,[s("🟠 "),e(l,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),e(a,{to:"/leetcode-js/outline/tag/math.html"},{default:t(()=>[_]),_:1}),s(),e(a,{to:"/leetcode-js/outline/tag/dynamic-programming.html"},{default:t(()=>[g]),_:1}),s(),e(a,{to:"/leetcode-js/outline/tag/game-theory.html"},{default:t(()=>[y]),_:1}),s("  🔗 "),n("a",b,[x,e(o)])]),w,r(" prettier-ignore "),n("table",null,[v,n("tbody",null,[n("tr",null,[j,n("td",$,[n("a",I,[s("翻转游戏 II"),e(o)])]),G,n("td",E,[e(a,{to:"/leetcode-js/outline/tag/memoization.html"},{default:t(()=>[O]),_:1}),s(),e(a,{to:"/leetcode-js/outline/tag/math.html"},{default:t(()=>[T]),_:1}),s(),e(a,{to:"/leetcode-js/outline/tag/dynamic-programming.html"},{default:t(()=>[M]),_:1}),s(),Y]),n("td",q,[e(l,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1})])]),n("tr",null,[C,n("td",L,[n("a",N,[s("猜数字大小"),e(o)])]),n("td",V,[e(a,{to:"/leetcode-js/problem/0374.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",z,[e(a,{to:"/leetcode-js/outline/tag/binary-search.html"},{default:t(()=>[A]),_:1}),s(),e(a,{to:"/leetcode-js/outline/tag/interactive.html"},{default:t(()=>[B]),_:1})]),n("td",R,[e(l,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1})])]),n("tr",null,[H,n("td",K,[n("a",S,[s("我能赢吗"),e(o)])]),W,n("td",D,[e(a,{to:"/leetcode-js/outline/tag/bit-manipulation.html"},{default:t(()=>[F]),_:1}),s(),e(a,{to:"/leetcode-js/outline/tag/memoization.html"},{default:t(()=>[J]),_:1}),s(),e(a,{to:"/leetcode-js/outline/tag/math.html"},{default:t(()=>[P]),_:1}),s(),Q]),n("td",U,[e(l,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1})])]),n("tr",null,[X,n("td",Z,[n("a",nn,[s("找到 K 个最接近的元素"),e(o)])]),sn,n("td",en,[e(a,{to:"/leetcode-js/outline/tag/array.html"},{default:t(()=>[tn]),_:1}),s(),e(a,{to:"/leetcode-js/outline/tag/two-pointers.html"},{default:t(()=>[an]),_:1}),s(),e(a,{to:"/leetcode-js/outline/tag/binary-search.html"},{default:t(()=>[on]),_:1}),s(),ln]),n("td",pn,[e(l,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1})])])])])])}const hn=c(h,[["render",cn],["__file","0375.html.vue"]]);export{hn as default};
