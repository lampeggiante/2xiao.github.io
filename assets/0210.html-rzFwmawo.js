import{_ as p,r as c,o as i,c as u,a as t,b as e,d as n,w as s,f as d,e as r}from"./app-GnK0vSxb.js";const h={},_={id:"_210-课程表-ii",tabindex:"-1"},k=t("a",{class:"header-anchor",href:"#_210-课程表-ii","aria-hidden":"true"},"#",-1),f={href:"https://leetcode.com/problems/course-schedule-ii",target:"_blank",rel:"noopener noreferrer"},m=t("code",null,"深度优先搜索",-1),g=t("code",null,"广度优先搜索",-1),b=t("code",null,"图",-1),y=t("code",null,"拓扑排序",-1),v={href:"https://leetcode.com/problems/course-schedule-ii",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"LeetCode",-1),w=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>There are a total of <code>numCourses</code> courses you have to take, labeled from <code>0</code> to <code>numCourses - 1</code>. You are given an array <code>prerequisites</code> where <code>prerequisites[i] = [ai, bi]</code> indicates that you <strong>must</strong> take course <code>bi</code> first if you want to take course <code>ai</code>.</p><ul><li>For example, the pair <code>[0, 1]</code>, indicates that to take course <code>0</code> you have to first take course <code>1</code>.</li></ul><p>Return <em>the ordering of courses you should take to finish all courses</em>. If there are many valid answers, return <strong>any</strong> of them. If it is impossible to finish all courses, return <strong>an empty array</strong>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: numCourses = 2, prerequisites = [[1,0]]</p><p>Output: [0,1]</p><p>Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]</p><p>Output: [0,2,1,3]</p><p>Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.</p><p>So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: numCourses = 1, prerequisites = []</p><p>Output: [0]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= numCourses &lt;= 2000</code></li><li><code>0 &lt;= prerequisites.length &lt;= numCourses * (numCourses - 1)</code></li><li><code>prerequisites[i].length == 2</code></li><li><code>0 &lt;= ai, bi &lt; numCourses</code></li><li><code>ai != bi</code></li><li>All the pairs <code>[ai, bi]</code> are <strong>distinct</strong>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>现在你总共有 <code>numCourses</code> 门课需要选，记为 <code>0</code> 到 <code>numCourses - 1</code>。给你一个数组 <code>prerequisites</code> ，其中 <code>prerequisites[i] = [ai, bi]</code> ，表示在选修课程 <code>ai</code> 前 <strong>必须</strong> 先选修 <code>bi</code> 。</p><p>例如，想要学习课程 <code>0</code> ，你需要先完成课程 <code>1</code> ，我们用一个匹配来表示：<code>[0,1]</code> 。</p><p>返回你为了学完所有课程所安排的学习顺序。可能会有多个正确的顺序，你只要返回 <strong>任意一种</strong> 就可以了。如果不可能完成所有课程，返回 <strong>一个空数组</strong> 。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>什么时候无法修完所有课程？当存在循环依赖的时候。</p><p>其实这种场景在现实生活中也十分常见，比如我们写代码 import 包也是一个例子，必须合理设计代码目录结构，否则会出现循环依赖，编译器会报错，所以编译器实际上也使用了类似算法来判断你的代码是否能够成功编译。</p><p>看到依赖问题，首先想到的就是把问题转化成「有向图」这种数据结构，只要图中存在环，那就说明存在循环依赖。</p><ul><li>首先可以把课程看成「有向图」中的节点，节点编号分别是 <code>0, 1, ..., numCourses-1</code>，把课程之间的依赖关系看做节点之间的有向边。 <ul><li>比如说必须修完课程 <code>1</code> 才能去修课程 <code>3</code>，那么就有一条有向边从节点 <code>1</code> 指向 <code>3</code>。</li></ul></li><li>如果发现这幅有向图中存在环，那就说明课程之间存在循环依赖，肯定没办法全部上完；反之，如果没有环，那么肯定能上完全部课程。</li><li>用一个 <code>hasCycle</code> 变量记录是否存在环，<code>onPath</code> 记录一次 dfs 递归经过的节点。</li><li>用一个 <code>path</code> 变量记录最终的学习路径，在 DFS 的后序位置更新 <code>path</code>。</li><li>当重复遍历到 <code>onPath</code> 中的节点时，就说明遇到了环，设置 <code>hasCycle = true</code>。</li><li>用一个 <code>visited</code> 变量记录遍历过的节点，防止走回头路。 <ul><li>假设以节点 <code>2</code> 为起点遍历所有可达的路径，最终发现没有环。</li><li>假设另一个节点 <code>5</code> 有一条指向 <code>2</code> 的边，在以 <code>5</code> 为起点遍历所有可达的路径时，肯定还会走到 <code>2</code>，此时就不需要继续遍历 <code>2</code> 的所有可达路径了，避免了冗余计算</li></ul></li><li>遍历图中的所有节点，通过是否有环即可判断能否修完所有课程。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">numCourses</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">prerequisites</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findOrder</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">numCourses<span class="token punctuation">,</span> prerequisites</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> graph <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>numCourses<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span> <span class="token keyword">of</span> prerequisites<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		graph<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">let</span> visited <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>numCourses<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		onPath <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>numCourses<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		path <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		hasCycle <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">graph<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>onPath<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			hasCycle <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>hasCycle <span class="token operator">||</span> visited<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		visited<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
		onPath<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token keyword">of</span> graph<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token function">dfs</span><span class="token punctuation">(</span>graph<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		path<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
		onPath<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> numCourses<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">dfs</span><span class="token punctuation">(</span>graph<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> hasCycle <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">:</span> path<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,24),C=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),q=t("td",{style:{"text-align":"center"}},"207",-1),I={style:{"text-align":"left"}},E={href:"https://leetcode.com/problems/course-schedule",target:"_blank",rel:"noopener noreferrer"},M={style:{"text-align":"center"}},P={style:{"text-align":"left"}},T=t("code",null,"深度优先搜索",-1),j=t("code",null,"广度优先搜索",-1),A=t("code",null,"图",-1),L=t("code",null,"1+",-1),N={style:{"text-align":"left"}},V=t("td",{style:{"text-align":"center"}},"269",-1),B={style:{"text-align":"left"}},H={href:"https://leetcode.com/problems/alien-dictionary",target:"_blank",rel:"noopener noreferrer"},O=t("td",{style:{"text-align":"center"}},null,-1),S={style:{"text-align":"left"}},R=t("code",null,"深度优先搜索",-1),F=t("code",null,"广度优先搜索",-1),D=t("code",null,"图",-1),Y=t("code",null,"3+",-1),z={style:{"text-align":"left"}},G=t("td",{style:{"text-align":"center"}},"310",-1),J={style:{"text-align":"left"}},K={href:"https://leetcode.com/problems/minimum-height-trees",target:"_blank",rel:"noopener noreferrer"},Q=t("td",{style:{"text-align":"center"}},null,-1),U={style:{"text-align":"left"}},W=t("code",null,"深度优先搜索",-1),X=t("code",null,"广度优先搜索",-1),Z=t("code",null,"图",-1),$=t("code",null,"1+",-1),tt={style:{"text-align":"left"}},nt=t("td",{style:{"text-align":"center"}},"444",-1),et={style:{"text-align":"left"}},st={href:"https://leetcode.com/problems/sequence-reconstruction",target:"_blank",rel:"noopener noreferrer"},at=t("td",{style:{"text-align":"center"}},null,-1),ot={style:{"text-align":"left"}},lt=t("code",null,"图",-1),ct=t("code",null,"拓扑排序",-1),pt=t("code",null,"数组",-1),it={style:{"text-align":"left"}},ut=t("td",{style:{"text-align":"center"}},"630",-1),dt={style:{"text-align":"left"}},rt={href:"https://leetcode.com/problems/course-schedule-iii",target:"_blank",rel:"noopener noreferrer"},ht=t("td",{style:{"text-align":"center"}},null,-1),_t={style:{"text-align":"left"}},kt=t("code",null,"贪心",-1),ft=t("code",null,"数组",-1),mt=t("code",null,"排序",-1),gt=t("code",null,"1+",-1),bt={style:{"text-align":"left"}},yt=t("td",{style:{"text-align":"center"}},"1136",-1),vt={style:{"text-align":"left"}},xt={href:"https://leetcode.com/problems/parallel-courses",target:"_blank",rel:"noopener noreferrer"},wt=t("td",{style:{"text-align":"center"}},null,-1),Ct={style:{"text-align":"left"}},qt=t("code",null,"图",-1),It=t("code",null,"拓扑排序",-1),Et={style:{"text-align":"left"}},Mt=t("td",{style:{"text-align":"center"}},"2115",-1),Pt={style:{"text-align":"left"}},Tt={href:"https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies",target:"_blank",rel:"noopener noreferrer"},jt=t("td",{style:{"text-align":"center"}},null,-1),At={style:{"text-align":"left"}},Lt=t("code",null,"图",-1),Nt=t("code",null,"拓扑排序",-1),Vt=t("code",null,"数组",-1),Bt=t("code",null,"2+",-1),Ht={style:{"text-align":"left"}},Ot=t("td",{style:{"text-align":"center"}},"2392",-1),St={style:{"text-align":"left"}},Rt={href:"https://leetcode.com/problems/build-a-matrix-with-conditions",target:"_blank",rel:"noopener noreferrer"},Ft=t("td",{style:{"text-align":"center"}},null,-1),Dt={style:{"text-align":"left"}},Yt=t("code",null,"图",-1),zt=t("code",null,"拓扑排序",-1),Gt=t("code",null,"数组",-1),Jt=t("code",null,"1+",-1),Kt={style:{"text-align":"left"}},Qt=t("td",{style:{"text-align":"center"}},"2459",-1),Ut={style:{"text-align":"left"}},Wt={href:"https://leetcode.com/problems/sort-array-by-moving-items-to-empty-space",target:"_blank",rel:"noopener noreferrer"},Xt=t("td",{style:{"text-align":"center"}},null,-1),Zt={style:{"text-align":"left"}},$t=t("code",null,"贪心",-1),tn=t("code",null,"数组",-1),nn=t("code",null,"排序",-1),en={style:{"text-align":"left"}};function sn(an,on){const o=c("ExternalLinkIcon"),l=c("font"),a=c("RouterLink");return i(),u("div",null,[t("h1",_,[k,e(),t("a",f,[e("210. 课程表 II"),n(o)])]),t("p",null,[e("🟠 "),n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1}),e("  🔖  "),n(a,{to:"/leetcode/outline/tag/depth-first-search.html"},{default:s(()=>[m]),_:1}),e(),n(a,{to:"/leetcode/outline/tag/breadth-first-search.html"},{default:s(()=>[g]),_:1}),e(),n(a,{to:"/leetcode/outline/tag/graph.html"},{default:s(()=>[b]),_:1}),e(),n(a,{to:"/leetcode/outline/tag/topological-sort.html"},{default:s(()=>[y]),_:1}),e("  🔗 "),t("a",v,[x,n(o)])]),w,d(" prettier-ignore "),t("table",null,[C,t("tbody",null,[t("tr",null,[q,t("td",I,[t("a",E,[e("课程表"),n(o)])]),t("td",M,[n(a,{to:"/leetcode/problem/0207.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",P,[n(a,{to:"/leetcode/outline/tag/depth-first-search.html"},{default:s(()=>[T]),_:1}),e(),n(a,{to:"/leetcode/outline/tag/breadth-first-search.html"},{default:s(()=>[j]),_:1}),e(),n(a,{to:"/leetcode/outline/tag/graph.html"},{default:s(()=>[A]),_:1}),e(),L]),t("td",N,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[V,t("td",B,[t("a",H,[e("火星词典"),n(o)])]),O,t("td",S,[n(a,{to:"/leetcode/outline/tag/depth-first-search.html"},{default:s(()=>[R]),_:1}),e(),n(a,{to:"/leetcode/outline/tag/breadth-first-search.html"},{default:s(()=>[F]),_:1}),e(),n(a,{to:"/leetcode/outline/tag/graph.html"},{default:s(()=>[D]),_:1}),e(),Y]),t("td",z,[n(l,{color:"#ff334b"},{default:s(()=>[e("Hard")]),_:1})])]),t("tr",null,[G,t("td",J,[t("a",K,[e("最小高度树"),n(o)])]),Q,t("td",U,[n(a,{to:"/leetcode/outline/tag/depth-first-search.html"},{default:s(()=>[W]),_:1}),e(),n(a,{to:"/leetcode/outline/tag/breadth-first-search.html"},{default:s(()=>[X]),_:1}),e(),n(a,{to:"/leetcode/outline/tag/graph.html"},{default:s(()=>[Z]),_:1}),e(),$]),t("td",tt,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[nt,t("td",et,[t("a",st,[e("序列重建"),n(o)])]),at,t("td",ot,[n(a,{to:"/leetcode/outline/tag/graph.html"},{default:s(()=>[lt]),_:1}),e(),n(a,{to:"/leetcode/outline/tag/topological-sort.html"},{default:s(()=>[ct]),_:1}),e(),n(a,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[pt]),_:1})]),t("td",it,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[ut,t("td",dt,[t("a",rt,[e("课程表 III"),n(o)])]),ht,t("td",_t,[n(a,{to:"/leetcode/outline/tag/greedy.html"},{default:s(()=>[kt]),_:1}),e(),n(a,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[ft]),_:1}),e(),n(a,{to:"/leetcode/outline/tag/sorting.html"},{default:s(()=>[mt]),_:1}),e(),gt]),t("td",bt,[n(l,{color:"#ff334b"},{default:s(()=>[e("Hard")]),_:1})])]),t("tr",null,[yt,t("td",vt,[t("a",xt,[e("并行课程"),n(o)])]),wt,t("td",Ct,[n(a,{to:"/leetcode/outline/tag/graph.html"},{default:s(()=>[qt]),_:1}),e(),n(a,{to:"/leetcode/outline/tag/topological-sort.html"},{default:s(()=>[It]),_:1})]),t("td",Et,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[Mt,t("td",Pt,[t("a",Tt,[e("从给定原材料中找到所有可以做出的菜"),n(o)])]),jt,t("td",At,[n(a,{to:"/leetcode/outline/tag/graph.html"},{default:s(()=>[Lt]),_:1}),e(),n(a,{to:"/leetcode/outline/tag/topological-sort.html"},{default:s(()=>[Nt]),_:1}),e(),n(a,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[Vt]),_:1}),e(),Bt]),t("td",Ht,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[Ot,t("td",St,[t("a",Rt,[e("给定条件下构造矩阵"),n(o)])]),Ft,t("td",Dt,[n(a,{to:"/leetcode/outline/tag/graph.html"},{default:s(()=>[Yt]),_:1}),e(),n(a,{to:"/leetcode/outline/tag/topological-sort.html"},{default:s(()=>[zt]),_:1}),e(),n(a,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[Gt]),_:1}),e(),Jt]),t("td",Kt,[n(l,{color:"#ff334b"},{default:s(()=>[e("Hard")]),_:1})])]),t("tr",null,[Qt,t("td",Ut,[t("a",Wt,[e("通过移动项目到空白区域来排序数组"),n(o)])]),Xt,t("td",Zt,[n(a,{to:"/leetcode/outline/tag/greedy.html"},{default:s(()=>[$t]),_:1}),e(),n(a,{to:"/leetcode/outline/tag/array.html"},{default:s(()=>[tn]),_:1}),e(),n(a,{to:"/leetcode/outline/tag/sorting.html"},{default:s(()=>[nn]),_:1})]),t("td",en,[n(l,{color:"#ff334b"},{default:s(()=>[e("Hard")]),_:1})])])])])])}const cn=p(h,[["render",sn],["__file","0210.html.vue"]]);export{cn as default};
