# 第三讲 课后练习

1. 写一篇文章来说明一下，为什么在 JavaScript 里面 0.1 + 0.2 ≠ 0.3 ，并给出解决方案。字数不限。

    [JS-FloatProblem](JS-FloatProblem/FloatProblem.pdf)
2. 完成 TODO 应用部分的 JavaScript 部分，让页面可以进行交互。
   
    [app.js](TODO%20Web/app.js)
3. 在之前模仿的基础上，增加主动获取网络请求部分
   1. 去抓取页面中的数据，保存起来
   2. 本地启动一个小 server 来发送数据
   3. 支持页面滑动到底部之后，可以自动请求数据并进行追加展示
   4. 时间数据可以做到展示相对实现，以小时、分钟、天为维度
   5. 对于大数据可以做到聚合，万以上的数量进行聚合

    server: node server.js
    
    访问: localhost:4000