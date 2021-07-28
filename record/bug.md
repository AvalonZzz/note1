## `js`

1. **微信分享至朋友圈，安卓上`png`格式的透明图会添加黑色背景。**解决：图片上传`jpg`或者canvas转成有背景的`png`然后上传至七牛云，用七牛云的`url`去分享
2. `h5`上`ios`的`beforeunload`事件失效，改用`pagehide`事件
3. 微信浏览器上无法下载文件，需要通过a标签跳转链接，安卓11以上需要做跳转浏览器提示
4. canvas生成图片时创建`img`标签要在设置`src`前面设置`setAttribute('crossOrigin', 'anonymous')`

## `css`

1. `h5`上`ios`的`overflow：hidden;`需要同时设置`position:relative;`和`z-index:1;`
2. `safari`上超出一屏会自动隐藏工具栏和地址栏，但是最外层盒子不能设置`position: absolute`和`overflow: scroll`