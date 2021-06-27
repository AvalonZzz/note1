# 标签

## 标题标签

`h`标题标签，搜索引擎非常看重`<h1></h1>`标签，页面上只能有一个h1标签

## 段落标签

`p`段落标签，里面不能嵌套h系列标签和其他p标签

## div标签

`div`分割标签division，用来将相关内容组合到一起，以和其他内容分割，使文档结构更清晰

`div`中可以放任何内容，是一个容器

## meta标签

`meta`元标签，表示网页的基础配置

```html
<meta charset="utf-8">
```

## 列表标签

### 无序列表

`ul、li`无序列表使用ul标签，每个列表项都是li标签

`ul`标签中只能放li标签，li标签中可以放任何东西

ul标签的type属性可以修改小圆点

| 值     | 描述           |
| ------ | -------------- |
| disc   | 默认值，实心圆 |
| circle | 空心圆         |
| square | 实心方块       |

###  有序列表

`ol、li`有序列表使用ol标签，列表项都是li标签

`ol`标签中只能放li标签，li标签中可以放任何东西

ol标签的type属性可以修改数字编号样式

| 属性值 | 描述             |
| ------ | ---------------- |
| a      | 小写英文字母编号 |
| A      | 大写英文字母编号 |
| i      | 小写罗马数字编号 |
| I      | 大写罗马数字编号 |
| 1      | 数字编号，默认   |

start属性可以指定编号的起始值（阿拉伯数字），必须是整数

reversed属性置顶列表是否倒序

### 自定义列表

`dl、dt、dd`dl定义列表，dt数据项，dd数据定义

## 图片标签

`img`插入图片标签

src属性用于引入图片

alt属性是图像的文本替代描述

width属性是宽度

height属性是高度

### 网页上支持的图片格式

| 格式  | 说明                                |
| ----- | ----------------------------------- |
| .bmp  | windows画图软件默认保存的格式，位图 |
| .gif  | 支持动画                            |
| .jpeg | 有损压缩图片，用于照片              |
| .png  | 支持透明和半透明                    |
| .svg  | 矢量图片                            |
| .webp | 最新的压缩算法非常优秀的图片格式    |

## 超链接标签

`a`用于将网页和网页链接到一起的标签

href属性用于指定超链接url

target属性用于指定网页在何处打开

`href="mailto:xxx"`邮件链接

`href="tel:xxx"`电话链接

`href="文件url"`自动下载链接

## audio标签

`audio`标签插入音频，兼容到IE9

```html
<audio controls src="音频地址">
  <!--source子标签是定义媒体资源-->
  <source src=""></source>
	<!--标签中是对不兼容audio标签的浏览器显示的文字-->
	抱歉，您的浏览器不支持audio标签，请升级浏览器
</audio>
```

autoplay属性自动播放，常用浏览器不允许自动播放音乐

loop属性循环播放音频

## video标签

`video`标签插入视频，兼容到IE9

```html
<video controls>
	<!--source子标签是定义媒体资源-->
  <source src=""></source>
	<!--标签中是对不兼容video标签的浏览器显示的文字-->
	抱歉，您的浏览器不支持video标签，请升级浏览器
</video>
```

autoplay属性自动播放

loop属性循环播放

## HTML5大纲标签

| 区块标签 | 说明                                          |
| -------- | --------------------------------------------- |
| section  | 文档区域，语义比div大（多个div放section里面） |
| article  | 文档的核心文章内容，会被搜索引擎抓去          |
| aside    | 文档的非必要内容，如广告                      |
| nav      | 导航条                                        |
| header   | 页头                                          |
| main     | 网页核心部分                                  |
| footer   | 页脚                                          |

## 语义化标签

span标签是文本的区块标签，没有显示效果

b加粗，strong加粗强调

u下划线

i倾斜，em倾斜强调

mark高亮

figure表示一段独立内容，figcaption是一个独立引用单元，这部分内容不会影响到主体

## 表单

所有表单都以form元素创建

```html
<form action="save.php" method="post">
</form>
```

### input元素

type属性为text的input元素创建单行文本框

| 属性        | 描述     |
| ----------- | -------- |
| type        | 类型     |
| placeholder | 提示文本 |
| value       | 文本值   |
| disabled    | 禁用文本 |

**type属性的HTML5新增**

| type属性值 | 控件               |
| ---------- | ------------------ |
| color      | 颜色选择控件       |
| date、time | 日期、时间选择控件 |
| email      | 电子邮件输入控件   |
| file       | 文件选择控件       |
| number     | 数字输入控件       |
| range      | 拖拽条             |
| search     | 搜索框             |
| url        | 网址输入控件       |
| file       | 文件上传           |

### radio元素

type属性为radio的input元素创建单选按钮，互斥的单选按钮的name属性值相同

| 属性    | 描述       |
| ------- | ---------- |
| type    | 类型       |
| name    | 单选按钮组 |
| value   | 选中的值   |
| checked | 默认选中   |

label标签包裹radio元素可以点击文字就选中单选框，html4中需要为radio设置id和label设置for，两者对应才能实现效果

### checkbox元素

type属性为checkbox的input元素创建复选按钮，同组的复选按钮的name属性值相同

| 属性  | 描述       |
| ----- | ---------- |
| type  | 类型       |
| name  | 复选按钮组 |
| value | 选中的值组 |

### 密码框

type属性值为password的input元素为密码框

### 下拉菜单

select标签为下拉菜单，option是内部的选项，option的value属性是提交给服务器的值，option的selected属性是设置默认选中值

### textarea

textarea表示多行文本框

| 属性 | 描述     |
| ---- | -------- |
| rows | 定义行数 |
| cols | 定义列数 |

### 按钮

type值为button的input是普通按钮，type值为submit的input是提交按钮，type值为reset的input是重置按钮

### datalist控件

datalist可为输入框提供一些备选项，当用户输入的内容与备选项文字相同时，将会只能感应

```html
<input type="text" list="province-list">
<datalist id="province-list">
  <option value="江苏">
  <option value="上海">
</datalist>
```

### 表格标签

table表格标签，border属性添加边框

tr表格行

td表格数据单元格

caption表格标题，作为表格第一个子元素

th标题小格（默认居中加粗），可用于代替td

thead定义表头

tbody定义表主体

tfoot定义表尾

colspan定义横跨列数，rowspan定义跨的行数
