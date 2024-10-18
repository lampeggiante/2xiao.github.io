const n=JSON.parse(`{"key":"v-6414fcb6","path":"/my-vue/14.html","title":"14. 实现函数式组件","lang":"zh-CN","frontmatter":{"description":"14. 实现函数式组件 const functionalComponent = (props) =&gt; { \\treturn h('div', 'hello' + props.name); }; render(h(functionalComponent, { name: 'erxiao' }), app);","head":[["meta",{"property":"og:url","content":"https://2xiao.github.io/my-vue/14.html"}],["meta",{"property":"og:site_name","content":"LeetCode-JS"}],["meta",{"property":"og:title","content":"14. 实现函数式组件"}],["meta",{"property":"og:description","content":"14. 实现函数式组件 const functionalComponent = (props) =&gt; { \\treturn h('div', 'hello' + props.name); }; render(h(functionalComponent, { name: 'erxiao' }), app);"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-18T09:50:23.000Z"}],["meta",{"property":"article:author","content":"2xiao"}],["meta",{"property":"article:modified_time","content":"2024-10-18T09:50:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"14. 实现函数式组件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-18T09:50:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"2xiao\\",\\"url\\":\\"https://github.com/2xiao\\"}]}"]]},"headers":[],"git":{"createdTime":1729245023000,"updatedTime":1729245023000,"contributors":[{"name":"2xiao","email":"827574297wxxtb@sina.com","commits":1}]},"readingTime":{"minutes":0.68,"words":205},"filePathRelative":"my-vue/14.md","localizedDate":"2024年10月18日","excerpt":"<h1> 14. 实现函数式组件</h1>\\n<div class=\\"language-typescript line-numbers-mode\\" data-ext=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token keyword\\">const</span> <span class=\\"token function-variable function\\">functionalComponent</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span>props<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token keyword\\">return</span> <span class=\\"token function\\">h</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'div'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'hello'</span> <span class=\\"token operator\\">+</span> props<span class=\\"token punctuation\\">.</span>name<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token function\\">render</span><span class=\\"token punctuation\\">(</span><span class=\\"token function\\">h</span><span class=\\"token punctuation\\">(</span>functionalComponent<span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">{</span> name<span class=\\"token operator\\">:</span> <span class=\\"token string\\">'erxiao'</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> app<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
