const e=JSON.parse(`{"key":"v-e8aa2b5e","path":"/vue/17.html","title":"17. 实现 Teleport","lang":"zh-CN","frontmatter":{"prev":"./17","description":"17. 实现 Teleport 1.Teleport组件介绍 render(h(Teleport, { to: '#root' }, [123, 456]), app);","head":[["meta",{"property":"og:url","content":"https://2xiao.github.io/leetcode-js/vue/17.html"}],["meta",{"property":"og:site_name","content":"LeetCode-JS"}],["meta",{"property":"og:title","content":"17. 实现 Teleport"}],["meta",{"property":"og:description","content":"17. 实现 Teleport 1.Teleport组件介绍 render(h(Teleport, { to: '#root' }, [123, 456]), app);"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-04T09:09:13.000Z"}],["meta",{"property":"article:author","content":"2xiao"}],["meta",{"property":"article:modified_time","content":"2024-07-04T09:09:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"17. 实现 Teleport\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-04T09:09:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"2xiao\\",\\"url\\":\\"https://github.com/2xiao\\"}]}"]]},"headers":[{"level":2,"title":"1.Teleport组件介绍","slug":"_1-teleport组件介绍","link":"#_1-teleport组件介绍","children":[]},{"level":2,"title":"2.Teleport 挂载","slug":"_2-teleport-挂载","link":"#_2-teleport-挂载","children":[]},{"level":2,"title":"3.Teleport 卸载","slug":"_3-teleport-卸载","link":"#_3-teleport-卸载","children":[]}],"git":{"createdTime":1720084153000,"updatedTime":1720084153000,"contributors":[{"name":"2xiao","email":"827574297wxxtb@sina.com","commits":1}]},"readingTime":{"minutes":0.98,"words":294},"filePathRelative":"vue/17.md","localizedDate":"2024年7月4日","excerpt":"<h1> 17. 实现 Teleport</h1>\\n<h2> 1.<code>Teleport</code>组件介绍</h2>\\n<div class=\\"language-typescript line-numbers-mode\\" data-ext=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token function\\">render</span><span class=\\"token punctuation\\">(</span><span class=\\"token function\\">h</span><span class=\\"token punctuation\\">(</span>Teleport<span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">{</span> to<span class=\\"token operator\\">:</span> <span class=\\"token string\\">'#root'</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">123</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">456</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> app<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
