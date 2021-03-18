## `js`

1. **微信分享至朋友圈，安卓上`png`格式的透明图会添加黑色背景。**解决：图片上传`jpg`或者canvas转成有背景的`png`然后上传至七牛云，用七牛云的`url`去分享
2. `h5`上`ios`的`beforeunload`事件失效，改用`pagehide`事件

## `css`

1. `h5`上`ios`的`overflow：hidden;`需要同时设置`position:relative;`和`z-index:1;`