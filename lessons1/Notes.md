1. 浏览器端发送http请求到服务器，服务器处理发送的请求在数据库进行操作，返回内容，  http响应，检测status是不是200，返回成功，页面显示渲染。

2. 用户访问操作
    用户操作浏览器访问，浏览器向服务器发出一个 HTTP 请求；服务器接收到 HTTP 请求，Web Server 进行相应的初步处理，使用服务器脚本生成页面；服务器脚本（利用Web Framework）调用本地和客户端传来的数据，生成页面；Web Server 将生成的页面作为 HTTP 响应的 body，根据不同的处理结果生成 HTTP header，发回给客户端；客户端（浏览器）接收到 HTTP 响应，通常第一个请求得到的 HTTP 响应的 body 里是 HTML 代码，于是对 HTML 代码开始解析；解析过程中遇到引用的服务器上的资源（额外的 CSS、JS代码，图片、音视频，附件等），再向 Web Server 发送请求，Web Server 找到对应的文件，发送回来；浏览器解析 HTML 包含的内容，用得到的 CSS 代码进行外观上的进一步渲染，JS 代码也可能会对外观进行一定的处理；用户与页面交互（点击，悬停等等）时，JS 代码对此作出一定的反应，添加特效与动画；交互的过程中可能需要向服务器索取或提交额外的数据（局部的刷新，类似微博的新消息通知），一般不是跳转就是通过 JS 代码（响应某个动作或者定时）向 Web Server 发送请求，Web Server 再用服务器脚本进行处理（生成资源or写入数据之类的），把资源返回给客户端，客户端用得到的资源来实现动态效果或其他改变。
3.  font-style 文字斜体开关
4.  text-decoration 去掉文字装饰 （如 a标签的下滑线）
5.  text-shadow 文字阴影区（xp xp xp color ）
6.  line-height 行高
7.  letter-spacing 字母间距  word-spacing 字间距
8.  1、div：作为布局以及样式化时使用。

    2、section：表示文档中的节，一般是具有标题的。比如：文档大纲、文档章节、博客条目、用户评论部分或者论文中有编号的部分时使用；

    通常会带有标题。如果没有标题，那么就不推荐使用section

    3、article：表示独立的自包含内容，如：一篇文章。文章找那个可以包含标题、内容、脚注
9.  伪元素清除浮动：
    .E:after{
        content:"."; 
        display:block;
        height:0;
        visibility:hidden;
        clear:both;
    }