# 第四讲 课后练习-轮播容器组件

## 样式
- 与父容器宽度一致
- 高度根据已加载内容自适应

## 特性
- 支持视频
- 支持无限循环播放
- 支持左右拖动
- 支持上一页下一页
- 懒加载
- 自适应

## 属性
- duration : 过渡时间
- waitTime : 停留时间

## 使用
```html
    <Carousel duration={'0.5s'} waitTime={'2.5s'}>
        <!-- add your resource here -->
        <img src={require('./assets/img1.jfif').default} alt="img1" />
        <video src={require('./assets/video1.mp4').default } alt="content2" controls></video>
    </Carousel>
```