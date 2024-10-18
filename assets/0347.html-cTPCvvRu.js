import{_ as c,r as p,o as i,c as u,a as n,b as s,d as t,w as a,f as d,e as r}from"./app-5VBZs9Uu.js";const k={},_={id:"_347-前-k-个高频元素",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#_347-前-k-个高频元素","aria-hidden":"true"},"#",-1),m={href:"https://leetcode.com/problems/top-k-frequent-elements",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"数组",-1),g=n("code",null,"哈希表",-1),b=n("code",null,"分治",-1),v=n("code",null,"桶排序",-1),y=n("code",null,"计数",-1),x=n("code",null,"快速选择",-1),w=n("code",null,"排序",-1),j=n("code",null,"堆（优先队列）",-1),q={href:"https://leetcode.com/problems/top-k-frequent-elements",target:"_blank",rel:"noopener noreferrer"},M=n("code",null,"LeetCode",-1),E=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code> and an integer <code>k</code>, return <em>the</em> <code>k</code> <em>most frequent elements</em>. You may return the answer in <strong>any order</strong>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,1,1,2,2,3], k = 2</p><p>Output: [1,2]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1], k = 1</p><p>Output: [1]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>-10^4 &lt;= nums[i] &lt;= 10^4</code></li><li><code>k</code> is in the range <code>[1, the number of unique elements in the array]</code>.</li><li>It is <strong>guaranteed</strong> that the answer is <strong>unique</strong>.</li></ul><p><strong>Follow up:</strong> Your algorithm&#39;s time complexity must be better than <code>O(n log n)</code>, where n is the array&#39;s size.</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code> 和一个整数 <code>k</code> ，请你返回其中出现频率前 <code>k</code> 高的元素。你可以按 <strong>任意顺序</strong> 返回答案。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用哈希映射和小顶堆来实现：</p><ol><li>使用哈希映射存储数组中每个元素的频率。</li><li>创建一个小顶堆（优先队列），用于跟踪出现频率最高的 <code>k</code> 个元素。</li><li>遍历哈希映射，将元素和其频率添加到小顶堆中，拿它与堆顶的元素对比。 <ul><li>如果比堆顶元素大，就把堆顶元素删除，并且将这个元素插入到堆中；</li><li>如果比堆顶元素小，则不做处理；</li></ul></li><li>处理完所有元素后，小顶堆中将包含 <code>k</code> 个最高频率的元素。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n log k)</code>，其中 <code>n</code> 是数组的大小，<code>k</code> 是唯一元素的数量，相较于传统排序算法的 <code>O(n log n)</code> 更为高效。</li><li><strong>空间复杂度</strong>：<code>O(k)</code>，需要额外的空间来存储堆。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">topKFrequent</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">?</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">let</span> heap <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>val<span class="token punctuation">,</span> freq<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>heap<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			heap<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>val<span class="token punctuation">,</span> freq<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token function">heapifyUp</span><span class="token punctuation">(</span>heap<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> freq<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>val<span class="token punctuation">,</span> freq<span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token function">heapifyDown</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token function-variable function">heapifyUp</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> parent <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token punctuation">[</span>heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">,</span> heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
				i <span class="token operator">=</span> parent<span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				<span class="token keyword">break</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token function-variable function">heapifyDown</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> left <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> right <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> min <span class="token operator">=</span> i<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> heap<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> heap<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			min <span class="token operator">=</span> left<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> heap<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> heap<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			min <span class="token operator">=</span> right<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>min <span class="token operator">!==</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token punctuation">[</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">,</span> heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token function">heapifyDown</span><span class="token punctuation">(</span>min<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span>item <span class="token keyword">of</span> map<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">add</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> heap<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> i<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,19),O=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),C=n("td",{style:{"text-align":"center"}},"192",-1),I={style:{"text-align":"left"}},K={href:"https://leetcode.com/problems/word-frequency",target:"_blank",rel:"noopener noreferrer"},L=n("td",{style:{"text-align":"center"}},null,-1),N={style:{"text-align":"left"}},V=n("code",null,"Shell",-1),B={style:{"text-align":"left"}},D=n("td",{style:{"text-align":"center"}},"215",-1),F={style:{"text-align":"left"}},R={href:"https://leetcode.com/problems/kth-largest-element-in-an-array",target:"_blank",rel:"noopener noreferrer"},S={style:{"text-align":"center"}},U={style:{"text-align":"left"}},Y=n("code",null,"数组",-1),z=n("code",null,"分治",-1),G=n("code",null,"快速选择",-1),T=n("code",null,"2+",-1),A={style:{"text-align":"left"}},H=n("td",{style:{"text-align":"center"}},"451",-1),J={style:{"text-align":"left"}},P={href:"https://leetcode.com/problems/sort-characters-by-frequency",target:"_blank",rel:"noopener noreferrer"},Q={style:{"text-align":"center"}},W={style:{"text-align":"left"}},X=n("code",null,"哈希表",-1),Z=n("code",null,"字符串",-1),$=n("code",null,"桶排序",-1),nn=n("code",null,"3+",-1),tn={style:{"text-align":"left"}},sn=n("td",{style:{"text-align":"center"}},"659",-1),an={style:{"text-align":"left"}},en={href:"https://leetcode.com/problems/split-array-into-consecutive-subsequences",target:"_blank",rel:"noopener noreferrer"},on=n("td",{style:{"text-align":"center"}},null,-1),ln={style:{"text-align":"left"}},pn=n("code",null,"贪心",-1),cn=n("code",null,"数组",-1),un=n("code",null,"哈希表",-1),dn=n("code",null,"1+",-1),rn={style:{"text-align":"left"}},kn=n("td",{style:{"text-align":"center"}},"692",-1),_n={style:{"text-align":"left"}},hn={href:"https://leetcode.com/problems/top-k-frequent-words",target:"_blank",rel:"noopener noreferrer"},mn=n("td",{style:{"text-align":"center"}},null,-1),fn={style:{"text-align":"left"}},gn=n("code",null,"字典树",-1),bn=n("code",null,"哈希表",-1),vn=n("code",null,"字符串",-1),yn=n("code",null,"4+",-1),xn={style:{"text-align":"left"}},wn=n("td",{style:{"text-align":"center"}},"973",-1),jn={style:{"text-align":"left"}},qn={href:"https://leetcode.com/problems/k-closest-points-to-origin",target:"_blank",rel:"noopener noreferrer"},Mn={style:{"text-align":"center"}},En={style:{"text-align":"left"}},On=n("code",null,"几何",-1),Cn=n("code",null,"数组",-1),In=n("code",null,"数学",-1),Kn=n("code",null,"4+",-1),Ln={style:{"text-align":"left"}},Nn=n("td",{style:{"text-align":"center"}},"1772",-1),Vn={style:{"text-align":"left"}},Bn={href:"https://leetcode.com/problems/sort-features-by-popularity",target:"_blank",rel:"noopener noreferrer"},Dn=n("td",{style:{"text-align":"center"}},null,-1),Fn={style:{"text-align":"left"}},Rn=n("code",null,"数组",-1),Sn=n("code",null,"哈希表",-1),Un=n("code",null,"字符串",-1),Yn=n("code",null,"1+",-1),zn={style:{"text-align":"left"}},Gn=n("td",{style:{"text-align":"center"}},"2284",-1),Tn={style:{"text-align":"left"}},An={href:"https://leetcode.com/problems/sender-with-largest-word-count",target:"_blank",rel:"noopener noreferrer"},Hn=n("td",{style:{"text-align":"center"}},null,-1),Jn={style:{"text-align":"left"}},Pn=n("code",null,"数组",-1),Qn=n("code",null,"哈希表",-1),Wn=n("code",null,"字符串",-1),Xn=n("code",null,"1+",-1),Zn={style:{"text-align":"left"}},$n=n("td",{style:{"text-align":"center"}},"2404",-1),nt={style:{"text-align":"left"}},tt={href:"https://leetcode.com/problems/most-frequent-even-element",target:"_blank",rel:"noopener noreferrer"},st=n("td",{style:{"text-align":"center"}},null,-1),at={style:{"text-align":"left"}},et=n("code",null,"数组",-1),ot=n("code",null,"哈希表",-1),lt=n("code",null,"计数",-1),pt={style:{"text-align":"left"}},ct=n("td",{style:{"text-align":"center"}},"3063",-1),it={style:{"text-align":"left"}},ut={href:"https://leetcode.com/problems/linked-list-frequency",target:"_blank",rel:"noopener noreferrer"},dt=n("td",{style:{"text-align":"center"}},null,-1),rt={style:{"text-align":"left"}},kt=n("code",null,"哈希表",-1),_t=n("code",null,"链表",-1),ht=n("code",null,"计数",-1),mt={style:{"text-align":"left"}};function ft(gt,bt){const o=p("ExternalLinkIcon"),l=p("font"),e=p("RouterLink");return i(),u("div",null,[n("h1",_,[h,s(),n("a",m,[s("347. 前 K 个高频元素"),t(o)])]),n("p",null,[s("🟠 "),t(l,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(e,{to:"/leetcode-js/outline/tag/array.html"},{default:a(()=>[f]),_:1}),s(),t(e,{to:"/leetcode-js/outline/tag/hash-table.html"},{default:a(()=>[g]),_:1}),s(),t(e,{to:"/leetcode-js/outline/tag/divide-and-conquer.html"},{default:a(()=>[b]),_:1}),s(),t(e,{to:"/leetcode-js/outline/tag/bucket-sort.html"},{default:a(()=>[v]),_:1}),s(),t(e,{to:"/leetcode-js/outline/tag/counting.html"},{default:a(()=>[y]),_:1}),s(),t(e,{to:"/leetcode-js/outline/tag/quickselect.html"},{default:a(()=>[x]),_:1}),s(),t(e,{to:"/leetcode-js/outline/tag/sorting.html"},{default:a(()=>[w]),_:1}),s(),t(e,{to:"/leetcode-js/outline/tag/heap-priority-queue.html"},{default:a(()=>[j]),_:1}),s("  🔗 "),n("a",q,[M,t(o)])]),E,d(" prettier-ignore "),n("table",null,[O,n("tbody",null,[n("tr",null,[C,n("td",I,[n("a",K,[s("统计词频"),t(o)])]),L,n("td",N,[t(e,{to:"/leetcode-js/outline/tag/shell.html"},{default:a(()=>[V]),_:1})]),n("td",B,[t(l,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1})])]),n("tr",null,[D,n("td",F,[n("a",R,[s("数组中的第K个最大元素"),t(o)])]),n("td",S,[t(e,{to:"/leetcode-js/problem/0215.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",U,[t(e,{to:"/leetcode-js/outline/tag/array.html"},{default:a(()=>[Y]),_:1}),s(),t(e,{to:"/leetcode-js/outline/tag/divide-and-conquer.html"},{default:a(()=>[z]),_:1}),s(),t(e,{to:"/leetcode-js/outline/tag/quickselect.html"},{default:a(()=>[G]),_:1}),s(),T]),n("td",A,[t(l,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1})])]),n("tr",null,[H,n("td",J,[n("a",P,[s("根据字符出现频率排序"),t(o)])]),n("td",Q,[t(e,{to:"/leetcode-js/problem/0451.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",W,[t(e,{to:"/leetcode-js/outline/tag/hash-table.html"},{default:a(()=>[X]),_:1}),s(),t(e,{to:"/leetcode-js/outline/tag/string.html"},{default:a(()=>[Z]),_:1}),s(),t(e,{to:"/leetcode-js/outline/tag/bucket-sort.html"},{default:a(()=>[$]),_:1}),s(),nn]),n("td",tn,[t(l,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1})])]),n("tr",null,[sn,n("td",an,[n("a",en,[s("分割数组为连续子序列"),t(o)])]),on,n("td",ln,[t(e,{to:"/leetcode-js/outline/tag/greedy.html"},{default:a(()=>[pn]),_:1}),s(),t(e,{to:"/leetcode-js/outline/tag/array.html"},{default:a(()=>[cn]),_:1}),s(),t(e,{to:"/leetcode-js/outline/tag/hash-table.html"},{default:a(()=>[un]),_:1}),s(),dn]),n("td",rn,[t(l,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1})])]),n("tr",null,[kn,n("td",_n,[n("a",hn,[s("前K个高频单词"),t(o)])]),mn,n("td",fn,[t(e,{to:"/leetcode-js/outline/tag/trie.html"},{default:a(()=>[gn]),_:1}),s(),t(e,{to:"/leetcode-js/outline/tag/hash-table.html"},{default:a(()=>[bn]),_:1}),s(),t(e,{to:"/leetcode-js/outline/tag/string.html"},{default:a(()=>[vn]),_:1}),s(),yn]),n("td",xn,[t(l,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1})])]),n("tr",null,[wn,n("td",jn,[n("a",qn,[s("最接近原点的 K 个点"),t(o)])]),n("td",Mn,[t(e,{to:"/leetcode-js/problem/0973.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",En,[t(e,{to:"/leetcode-js/outline/tag/geometry.html"},{default:a(()=>[On]),_:1}),s(),t(e,{to:"/leetcode-js/outline/tag/array.html"},{default:a(()=>[Cn]),_:1}),s(),t(e,{to:"/leetcode-js/outline/tag/math.html"},{default:a(()=>[In]),_:1}),s(),Kn]),n("td",Ln,[t(l,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1})])]),n("tr",null,[Nn,n("td",Vn,[n("a",Bn,[s("按受欢迎程度排列功能"),t(o)])]),Dn,n("td",Fn,[t(e,{to:"/leetcode-js/outline/tag/array.html"},{default:a(()=>[Rn]),_:1}),s(),t(e,{to:"/leetcode-js/outline/tag/hash-table.html"},{default:a(()=>[Sn]),_:1}),s(),t(e,{to:"/leetcode-js/outline/tag/string.html"},{default:a(()=>[Un]),_:1}),s(),Yn]),n("td",zn,[t(l,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1})])]),n("tr",null,[Gn,n("td",Tn,[n("a",An,[s("最多单词数的发件人"),t(o)])]),Hn,n("td",Jn,[t(e,{to:"/leetcode-js/outline/tag/array.html"},{default:a(()=>[Pn]),_:1}),s(),t(e,{to:"/leetcode-js/outline/tag/hash-table.html"},{default:a(()=>[Qn]),_:1}),s(),t(e,{to:"/leetcode-js/outline/tag/string.html"},{default:a(()=>[Wn]),_:1}),s(),Xn]),n("td",Zn,[t(l,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1})])]),n("tr",null,[$n,n("td",nt,[n("a",tt,[s("出现最频繁的偶数元素"),t(o)])]),st,n("td",at,[t(e,{to:"/leetcode-js/outline/tag/array.html"},{default:a(()=>[et]),_:1}),s(),t(e,{to:"/leetcode-js/outline/tag/hash-table.html"},{default:a(()=>[ot]),_:1}),s(),t(e,{to:"/leetcode-js/outline/tag/counting.html"},{default:a(()=>[lt]),_:1})]),n("td",pt,[t(l,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1})])]),n("tr",null,[ct,n("td",it,[n("a",ut,[s("链表频率"),t(o)])]),dt,n("td",rt,[t(e,{to:"/leetcode-js/outline/tag/hash-table.html"},{default:a(()=>[kt]),_:1}),s(),t(e,{to:"/leetcode-js/outline/tag/linked-list.html"},{default:a(()=>[_t]),_:1}),s(),t(e,{to:"/leetcode-js/outline/tag/counting.html"},{default:a(()=>[ht]),_:1})]),n("td",mt,[t(l,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1})])])])])])}const yt=c(k,[["render",ft],["__file","0347.html.vue"]]);export{yt as default};
