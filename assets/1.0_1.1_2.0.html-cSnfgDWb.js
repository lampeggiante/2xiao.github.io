import{_ as e,o as i,c as a,e as c}from"./app-aDvcZtpj.js";const d={},o=c('<h1 id="说说-http1-0-1-1-2-0-的区别" tabindex="-1"><a class="header-anchor" href="#说说-http1-0-1-1-2-0-的区别" aria-hidden="true">#</a> 说说 HTTP1.0/1.1/2.0 的区别?</h1><h2 id="一、http1-0" tabindex="-1"><a class="header-anchor" href="#一、http1-0" aria-hidden="true">#</a> 一、HTTP1.0</h2><p><code>HTTP</code>协议的第二个版本，第一个在通讯中指定版本号的 HTTP 协议版本</p><p><code>HTTP 1.0</code> 浏览器与服务器只保持短暂的连接，每次请求都需要与服务器建立一个<code>TCP</code>连接</p><p>服务器完成请求处理后立即断开<code>TCP</code>连接，服务器不跟踪每个客户也不记录过去的请求</p><p>简单来讲，每次与服务器交互，都需要新开一个连接</p><figure><img src="https://static.vue-js.com/efff4da0-b93a-11eb-85f6-6fac77c0c9b3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>例如，解析<code>html</code>文件，当发现文件中存在资源文件的时候，这时候又创建单独的链接</p><p>最终导致，一个<code>html</code>文件的访问包含了多次的请求和响应，每次请求都需要创建连接、关系连接</p><p>这种形式明显造成了性能上的缺陷</p><p>如果需要建立长连接，需要设置一个非标准的 Connection 字段 <code>Connection: keep-alive</code></p><h2 id="二、http1-1" tabindex="-1"><a class="header-anchor" href="#二、http1-1" aria-hidden="true">#</a> 二、HTTP1.1</h2><p>在<code>HTTP1.1</code>中，默认支持长连接（<code>Connection: keep-alive</code>），即在一个 TCP 连接上可以传送多个<code>HTTP</code>请求和响应，减少了建立和关闭连接的消耗和延迟</p><p>建立一次连接，多次请求均由这个连接完成</p><figure><img src="https://static.vue-js.com/22db2b90-b93b-11eb-ab90-d9ae814b240d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这样，在加载<code>html</code>文件的时候，文件中多个请求和响应就可以在一个连接中传输</p><p>同时，<code>HTTP 1.1</code>还允许客户端不用等待上一次请求结果返回，就可以发出下一次请求，但服务器端必须按照接收到客户端请求的先后顺序依次回送响应结果，以保证客户端能够区分出每次请求的响应内容，这样也显著地减少了整个下载过程所需要的时间</p><p>同时，<code>HTTP1.1</code>在<code>HTTP1.0</code>的基础上，增加更多的请求头和响应头来完善的功能，如下：</p><ul><li>引入了更多的缓存控制策略，如 If-Unmodified-Since, If-Match, If-None-Match 等缓存头来控制缓存策略</li><li>引入 range，允许值请求资源某个部分</li><li>引入 host，实现了在一台 WEB 服务器上可以在同一个 IP 地址和端口号上使用不同的主机名来创建多个虚拟 WEB 站点</li></ul><p>并且还添加了其他的请求方法：<code>put</code>、<code>delete</code>、<code>options</code>...</p><h2 id="三、http2-0" tabindex="-1"><a class="header-anchor" href="#三、http2-0" aria-hidden="true">#</a> 三、HTTP2.0</h2><p>而<code>HTTP2.0</code>在相比之前版本，性能上有很大的提升，如添加了一个特性：</p><ul><li>多路复用</li><li>二进制分帧</li><li>首部压缩</li><li>服务器推送</li></ul><h3 id="多路复用" tabindex="-1"><a class="header-anchor" href="#多路复用" aria-hidden="true">#</a> 多路复用</h3><p><code>HTTP/2</code> 复用<code>TCP</code>连接，在一个连接里，客户端和浏览器都可以<strong>同时</strong>发送多个请求或回应，而且不用按照顺序一一对应，这样就避免了”队头堵塞”</p><figure><img src="https://static.vue-js.com/313f1980-b93b-11eb-85f6-6fac77c0c9b3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>上图中，可以看到第四步中<code>css</code>、<code>js</code>资源是同时发送到服务端</p><h3 id="二进制分帧" tabindex="-1"><a class="header-anchor" href="#二进制分帧" aria-hidden="true">#</a> 二进制分帧</h3><p>帧是<code>HTTP2</code>通信中最小单位信息</p><p><code>HTTP/2</code> 采用二进制格式传输数据，而非 <code>HTTP 1.x </code>的文本格式，解析起来更高效</p><p>将请求和响应数据分割为更小的帧，并且它们采用二进制编码</p><p><code>HTTP2 </code>中，同域名下所有通信都在单个连接上完成，该连接可以承载任意数量的双向数据流</p><p>每个数据流都以消息的形式发送，而消息又由一个或多个帧组成。多个帧之间可以乱序发送，根据帧首部的流标识可以重新组装，这也是多路复用同时发送数据的实现条件</p><h3 id="首部压缩" tabindex="-1"><a class="header-anchor" href="#首部压缩" aria-hidden="true">#</a> 首部压缩</h3><p><code>HTTP/2</code>在客户端和服务器端使用“首部表”来跟踪和存储之前发送的键值对，对于相同的数据，不再通过每次请求和响应发送</p><p>首部表在<code>HTTP/2</code>的连接存续期内始终存在，由客户端和服务器共同渐进地更新</p><p>例如：下图中的两个请求， 请求一发送了所有的头部字段，第二个请求则只需要发送差异数据，这样可以减少冗余数据，降低开销</p><figure><img src="https://static.vue-js.com/3c536740-b93b-11eb-ab90-d9ae814b240d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="服务器推送" tabindex="-1"><a class="header-anchor" href="#服务器推送" aria-hidden="true">#</a> 服务器推送</h3><p><code>HTTP2</code>引入服务器推送，允许服务端推送资源给客户端</p><p>服务器会顺便把一些客户端需要的资源一起推送到客户端，如在响应一个页面请求中，就可以随同页面的其它资源</p><p>免得客户端再次创建连接发送请求到服务器端获取</p><p>这种方式非常合适加载静态资源</p><figure><img src="https://static.vue-js.com/47130550-b93b-11eb-85f6-6fac77c0c9b3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="四、总结" tabindex="-1"><a class="header-anchor" href="#四、总结" aria-hidden="true">#</a> 四、总结</h2><p>HTTP1.0：</p><ul><li>浏览器与服务器只保持短暂的连接，浏览器的每次请求都需要与服务器建立一个 TCP 连接</li></ul><p>HTTP1.1：</p><ul><li>引入了持久连接，即 TCP 连接默认不关闭，可以被多个请求复用</li><li>在同一个 TCP 连接里面，客户端可以同时发送多个请求</li><li>虽然允许复用 TCP 连接，但是同一个 TCP 连接里面，所有的数据通信是按次序进行的，服务器只有处理完一个请求，才会接着处理下一个请求。如果前面的处理特别慢，后面就会有许多请求排队等着</li><li>新增了一些请求方法</li><li>新增了一些请求头和响应头</li></ul><p>HTTP2.0：</p><ul><li>采用二进制格式而非文本格式</li><li>完全多路复用，而非有序并阻塞的、只需一个连接即可实现并行</li><li>使用报头压缩，降低开销</li><li>服务器推送</li></ul><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2><ul><li>https://zh.wikipedia.org/wiki/%E8%B6%85%E6%96%87%E6%9C%AC%E4%BC%A0%E8%BE%93%E5%8D%8F%E8%AE%AE#HTTP/1.0</li><li>https://www.jianshu.com/p/52d86558ca57</li><li>https://segmentfault.com/a/1190000016496448</li><li>https://zhuanlan.zhihu.com/p/26559480</li></ul>',53),t=[o];function p(l,h){return i(),a("div",null,t)}const r=e(d,[["render",p],["__file","1.0_1.1_2.0.html.vue"]]);export{r as default};
