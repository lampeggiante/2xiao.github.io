import{_ as i,o as e,c as a,e as t}from"./app-b4s7f53x.js";const p="/assets/interview-http-23-yZN6zQEt.png",r="/assets/interview-http-24-Wni7XTad.png",d="/assets/interview-http-25-3FqOV_SW.png",n="/assets/interview-http-26-tpt2jZdr.png",c="/assets/interview-http-27-jw0fLbAd.png",o="/assets/interview-http-28-8nQNVop1.png",l="/assets/interview-http-29-msDCLKnl.png",h="/assets/interview-http-30-7u89GJgf.png",s={},g=t('<h1 id="为什么说-https-比-http-安全-https-是如何保证安全的" tabindex="-1"><a class="header-anchor" href="#为什么说-https-比-http-安全-https-是如何保证安全的" aria-hidden="true">#</a> 为什么说 HTTPS 比 HTTP 安全? HTTPS 是如何保证安全的？</h1><h2 id="一、安全特性" tabindex="-1"><a class="header-anchor" href="#一、安全特性" aria-hidden="true">#</a> 一、安全特性</h2><p>在上篇文章中，我们了解到<code>HTTP</code>在通信过程中，存在以下问题：</p><ul><li>通信使用明文（不加密），内容可能被窃听</li><li>不验证通信方的身份，因此有可能遭遇伪装</li></ul><p>而<code>HTTPS</code>的出现正是解决这些问题，<code>HTTPS</code>是建立在<code>SSL</code>之上，其安全性由<code>SSL</code>来保证</p><p>在采用<code>SSL</code>后，<code>HTTP</code>就拥有了<code>HTTPS</code>的加密、证书和完整性保护这些功能</p><blockquote><p>SSL(Secure Sockets Layer 安全套接字协议),及其继任者传输层安全（Transport Layer Security，TLS）是为网络通信提供安全及数据完整性的一种安全协议</p></blockquote><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="二、如何做" tabindex="-1"><a class="header-anchor" href="#二、如何做" aria-hidden="true">#</a> 二、如何做</h2><p><code>SSL </code>的实现这些功能主要依赖于三种手段：</p><ul><li>对称加密：采用协商的密钥对数据加密</li><li>非对称加密：实现身份认证和密钥协商</li><li>摘要算法：验证信息的完整性</li><li>数字签名：身份验证</li></ul><h3 id="对称加密" tabindex="-1"><a class="header-anchor" href="#对称加密" aria-hidden="true">#</a> 对称加密</h3><p>对称加密指的是加密和解密使用的秘钥都是同一个，是对称的。只要保证了密钥的安全，那整个通信过程就可以说具有了机密性</p><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="非对称加密" tabindex="-1"><a class="header-anchor" href="#非对称加密" aria-hidden="true">#</a> 非对称加密</h3><p>非对称加密，存在两个秘钥，一个叫公钥，一个叫私钥。两个秘钥是不同的，公钥可以公开给任何人使用，私钥则需要保密</p><p>公钥和私钥都可以用来加密解密，但公钥加密后只能用私钥解 密，反过来，私钥加密后也只能用公钥解密</p><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="混合加密" tabindex="-1"><a class="header-anchor" href="#混合加密" aria-hidden="true">#</a> 混合加密</h3><p>在<code>HTTPS</code>通信过程中，采用的是对称加密+非对称加密，也就是混合加密</p><p>在对称加密中讲到，如果能够保证了密钥的安全，那整个通信过程就可以说具有了机密性</p><p>而<code>HTTPS</code>采用非对称加密解决秘钥交换的问题</p><p>具体做法是发送密文的一方使用对方的公钥进行加密处理“对称的密钥”，然后对方用自己的私钥解密拿到“对称的密钥”</p><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这样可以确保交换的密钥是安全的前提下，使用对称加密方式进行通信</p><h4 id="举个例子" tabindex="-1"><a class="header-anchor" href="#举个例子" aria-hidden="true">#</a> 举个例子：</h4><p>网站秘密保管私钥，在网上任意分发公钥，你想要登录网站只要用公钥加密就行了，密文只能由私钥持有者才能解密。而黑客因为没有私钥，所以就无法破解密文</p><p>上述的方法解决了数据加密，在网络传输过程中，数据有可能被篡改，并且黑客可以伪造身份发布公钥，如果你获取到假的公钥，那么混合加密也并无多大用处，你的数据扔被黑客解决</p><p>因此，在上述加密的基础上仍需加上完整性、身份验证的特性，来实现真正的安全，实现这一功能则是摘要算法</p><h3 id="摘要算法" tabindex="-1"><a class="header-anchor" href="#摘要算法" aria-hidden="true">#</a> 摘要算法</h3><p>实现完整性的手段主要是摘要算法，也就是常说的散列函数、哈希函数</p><p>可以理解成一种特殊的压缩算法，它能够把任意长度的数据“压缩”成固定长度、而且独一无二的“摘要”字符串，就好像是给这段数据生成了一个数字“指纹”</p><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>摘要算法保证了“数字摘要”和原文是完全等价的。所以，我们只要在原文后附上它的摘要，就能够保证数据的完整性</p><p>比如，你发了条消息：“转账 1000 元”，然后再加上一个 SHA-2 的摘要。网站收到后也计算一下消息的摘要，把这两份“指纹”做个对比，如果一致，就说明消息是完整可信的，没有被修改</p><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="数字签名" tabindex="-1"><a class="header-anchor" href="#数字签名" aria-hidden="true">#</a> 数字签名</h3><p>数字签名能确定消息确实是由发送方签名并发出来的，因为别人假冒不了发送方的签名</p><p>原理其实很简单，就是用私钥加密，公钥解密</p><p>签名和公钥一样完全公开，任何人都可以获取。但这个签名只有用私钥对应的公钥才能解开，拿到摘要后，再比对原文验证完整性，就可以像签署文件一样证明消息确实是你发的</p><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>和消息本身一样，因为谁都可以发布公钥，我们还缺少防止黑客伪造公钥的手段，也就是说，怎么判断这个公钥就是你的公钥</p><p>这时候就需要一个第三方，就是证书验证机构</p><h3 id="ca-验证机构" tabindex="-1"><a class="header-anchor" href="#ca-验证机构" aria-hidden="true">#</a> CA 验证机构</h3><p>数字证书认证机构处于客户端与服务器双方都可信赖的第三方机构的立场</p><p>CA 对公钥的签名认证要求包括序列号、用途、颁发者、有效时间等等，把这些打成一个包再签名，完整地证明公钥关联的各种信息，形成“数字证书”</p><p>流程如下图：</p><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>服务器的运营人员向数字证书认证机构提出公开密钥的申请</li><li>数字证书认证机构在判明提出申请者的身份之后，会对已申请的公开密钥做数字签名</li><li>然后分配这个已签名的公开密钥，并将该公开密钥放入公钥证书后绑定在一起</li><li>服务器会将这份由数字证书认证机构颁发的数字证书发送给客户端，以进行非对称加密方式通信</li></ul><p>接到证书的客户端可使用数字证书认证机构的公开密钥，对那张证书上的数字签名进行验证，一旦验证通过，则证明：</p><ul><li>认证服务器的公开密钥的是真实有效的数字证书认证机构</li><li>服务器的公开密钥是值得信赖的</li></ul><h2 id="三、总结" tabindex="-1"><a class="header-anchor" href="#三、总结" aria-hidden="true">#</a> 三、总结</h2><p>可以看到，<code>HTTPS</code>与<code>HTTP</code>虽然只差一个<code>SSL</code>，但是通信安全得到了大大的保障，通信的四大特性都以解决，解决方式如下：</p><ul><li>机密性：混合算法</li><li>完整性：摘要算法</li><li>身份认证：数字签名</li><li>不可否定：数字签名</li></ul><p>同时引入第三方证书机构，确保公开秘钥的安全性</p><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2><ul><li>https://zhuanlan.zhihu.com/p/100657391</li><li>https://juejin.cn/post/6844903830987997197#heading-7</li><li>https://cloud.tencent.com/developer/article/1748862</li></ul>',57),u=[g];function f(_,S){return e(),a("div",null,u)}const m=i(s,[["render",f],["__file","https.html.vue"]]);export{m as default};
