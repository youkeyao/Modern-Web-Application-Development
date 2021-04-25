# 第七讲 课后练习

1. 实现一个非阻塞 fibonacci 函数，在运行时，页面可以正常响应用户操作。

    `fibonacci/index.html`

2. Node.js 实现一个 static server，支持 cache=max-age | no-cache | no-store，来控制返回的文件的 cache-control。
   
    | 后缀 | cache |
    | :--: | :---: |
    | ?max-age | max-age=999 |
    | ?no-cache | no-cache |
    | ?no-store | no-store |

    运行：`node server.js`

    访问：`localhost:3000`