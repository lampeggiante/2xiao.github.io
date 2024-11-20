import{_ as e,o as a,c as s,e as n}from"./app-aDvcZtpj.js";const c={},t=n(`<h1 id="说说对-websocket-的理解-应用场景" tabindex="-1"><a class="header-anchor" href="#说说对-websocket-的理解-应用场景" aria-hidden="true">#</a> 说说对 WebSocket 的理解？应用场景？</h1><figure><img src="https://static.vue-js.com/a358a8c0-c0f1-11eb-ab90-d9ae814b240d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="一、是什么" tabindex="-1"><a class="header-anchor" href="#一、是什么" aria-hidden="true">#</a> 一、是什么</h2><p>WebSocket，是一种网络传输协议，位于<code>OSI</code>模型的应用层。可在单个<code>TCP</code>连接上进行全双工通信，能更好的节省服务器资源和带宽并达到实时通迅</p><p>客户端和服务器只需要完成一次握手，两者之间就可以创建持久性的连接，并进行双向数据传输</p><figure><img src="https://static.vue-js.com/ad386e20-c0f1-11eb-85f6-6fac77c0c9b3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>从上图可见，<code>websocket</code>服务器与客户端通过握手连接，连接成功后，两者都能主动的向对方发送或接受数据</p><p>而在<code>websocket</code>出现之前，开发实时<code>web</code>应用的方式为轮询</p><p>不停地向服务器发送 HTTP 请求，问有没有数据，有数据的话服务器就用响应报文回应。如果轮询的频率比较高，那么就可以近似地实现“实时通信”的效果</p><p>轮询的缺点也很明显，反复发送无效查询请求耗费了大量的带宽和 <code>CPU </code>资源</p><h2 id="二、特点" tabindex="-1"><a class="header-anchor" href="#二、特点" aria-hidden="true">#</a> 二、特点</h2><h3 id="全双工" tabindex="-1"><a class="header-anchor" href="#全双工" aria-hidden="true">#</a> 全双工</h3><p>通信允许数据在两个方向上同时传输，它在能力上相当于两个单工通信方式的结合</p><p>例如指 A→B 的同时 B→A ，是瞬时同步的</p><h3 id="二进制帧" tabindex="-1"><a class="header-anchor" href="#二进制帧" aria-hidden="true">#</a> 二进制帧</h3><p>采用了二进制帧结构，语法、语义与 HTTP 完全不兼容，相比<code>http/2</code>，<code>WebSocket </code>更侧重于“实时通信”，而<code>HTTP/2</code> 更侧重于提高传输效率，所以两者的帧结构也有很大的区别</p><p>不像 <code>HTTP/2</code> 那样定义流，也就不存在多路复用、优先级等特性</p><p>自身就是全双工，也不需要服务器推送</p><h3 id="协议名" tabindex="-1"><a class="header-anchor" href="#协议名" aria-hidden="true">#</a> 协议名</h3><p>引入<code>ws</code>和<code>wss</code>分别代表明文和密文的<code>websocket</code>协议，且默认端口使用 80 或 443，几乎与<code>http</code>一致</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">ws</span><span class="token punctuation">:</span><span class="token header-value">//www.chrono.com</span></span>
<span class="token header"><span class="token header-name keyword">ws</span><span class="token punctuation">:</span><span class="token header-value">//www.chrono.com:8080/srv</span></span>
<span class="token header"><span class="token header-name keyword">wss</span><span class="token punctuation">:</span><span class="token header-value">//www.chrono.com:445/im?user_id=xxx</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="握手" tabindex="-1"><a class="header-anchor" href="#握手" aria-hidden="true">#</a> 握手</h3><p><code>WebSocket </code>也要有一个握手过程，然后才能正式收发数据</p><p>客户端发送数据格式如下：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/chat</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Host</span><span class="token punctuation">:</span> <span class="token header-value">server.example.com</span></span>
<span class="token header"><span class="token header-name keyword">Upgrade</span><span class="token punctuation">:</span> <span class="token header-value">websocket</span></span>
<span class="token header"><span class="token header-name keyword">Connection</span><span class="token punctuation">:</span> <span class="token header-value">Upgrade</span></span>
<span class="token header"><span class="token header-name keyword">Sec-WebSocket-Key</span><span class="token punctuation">:</span> <span class="token header-value">dGhlIHNhbXBsZSBub25jZQ==</span></span>
<span class="token header"><span class="token header-name keyword">Origin</span><span class="token punctuation">:</span> <span class="token header-value">http://example.com</span></span>
<span class="token header"><span class="token header-name keyword">Sec-WebSocket-Protocol</span><span class="token punctuation">:</span> <span class="token header-value">chat, superchat</span></span>
<span class="token header"><span class="token header-name keyword">Sec-WebSocket-Version</span><span class="token punctuation">:</span> <span class="token header-value">13</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Connection：必须设置 Upgrade，表示客户端希望连接升级</li><li>Upgrade：必须设置 Websocket，表示希望升级到 Websocket 协议</li><li>Sec-WebSocket-Key：客户端发送的一个 base64 编码的密文，用于简单的认证秘钥。要求服务端必须返回一个对应加密的“Sec-WebSocket-Accept 应答，否则客户端会抛出错误，并关闭连接</li><li>Sec-WebSocket-Version ：表示支持的 Websocket 版本</li></ul><p>服务端返回的数据格式：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token response-status"><span class="token http-version property">HTTP/1.1</span> <span class="token status-code number">101</span> <span class="token reason-phrase string">Switching Protocols</span></span>
<span class="token header"><span class="token header-name keyword">Upgrade</span><span class="token punctuation">:</span> <span class="token header-value">websocket</span></span>
<span class="token header"><span class="token header-name keyword">Connection</span><span class="token punctuation">:</span> <span class="token header-value">Upgrade</span></span>
<span class="token header"><span class="token header-name keyword">Sec-WebSocket-Accept</span><span class="token punctuation">:</span> <span class="token header-value">s3pPLMBiTxaQ9kYGzzhZRbK+xOo=Sec-WebSocket-Protocol: chat</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>HTTP/1.1 101 Switching Protocols：表示服务端接受 WebSocket 协议的客户端连接</li><li>Sec-WebSocket-Accep：验证客户端请求报文，同样也是为了防止误连接。具体做法是把请求头里“Sec-WebSocket-Key”的值，加上一个专用的 UUID，再计算摘要</li></ul><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h3><ul><li>较少的控制开销：数据包头部协议较小，不同于 http 每次请求需要携带完整的头部</li><li>更强的实时性：相对于 HTTP 请求需要等待客户端发起请求服务端才能响应，延迟明显更少</li><li>保持创连接状态：创建通信后，可省略状态信息，不同于 HTTP 每次请求需要携带身份验证</li><li>更好的二进制支持：定义了二进制帧，更好处理二进制内容</li><li>支持扩展：用户可以扩展 websocket 协议、实现部分自定义的子协议</li><li>更好的压缩效果：Websocket 在适当的扩展支持下，可以沿用之前内容的上下文，在传递类似的数据时，可以显著地提高压缩率</li></ul><h2 id="二、应用场景" tabindex="-1"><a class="header-anchor" href="#二、应用场景" aria-hidden="true">#</a> 二、应用场景</h2><p>基于<code>websocket</code>的事实通信的特点，其存在的应用场景大概有：</p><ul><li>弹幕</li><li>媒体聊天</li><li>协同编辑</li><li>基于位置的应用</li><li>体育实况更新</li><li>股票基金报价实时更新</li></ul><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2><ul><li>https://zh.wikipedia.org/wiki/WebSocket</li><li>https://www.oschina.net/translate/9-killer-uses-for-websockets</li><li>https://vue3js.cn/interview</li></ul>`,36),o=[t];function p(d,i){return a(),s("div",null,o)}const r=e(c,[["render",p],["__file","websocket.html.vue"]]);export{r as default};
