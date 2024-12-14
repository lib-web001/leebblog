---
tag:
  - css
---

# 布局

## flex

居中

```css
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

设置三列

```css
.flex {
  display: flex;
}
.item {
  flex: 1; // grow shrink basis
}
```

根据内容选择大小

```css
.flex {
  display: flex;
}
.item {
  flex: auto;
}
```

### align-items 和 align-content

flex 容器不设置高度并且子项只有一行时，align-content 属性是不起作用的。

## grid

设置三列

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

自动填充子容器宽度 最小宽度 80px (最后一列居左)

```css
.grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(80px, 1fr)
  ); /* fit 铺满整行 fill 计算空轨道*/
  /* grid-template-columns: repeat(auto-fill, minmax(80px, 1fr)); */
}
```

子容器出现在固定位置

```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%; /* grid-template-columns: repeat(5,20%) */
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#box {
  grid-column-start: 3;
  grid-row-start: 3;
  grid-column-end: 4;
  grid-row-end: 7;
}
```

间隙

```css
.grid{
  grid-column-gap、grid-row-gap、grid-gap（前俩的简写）
}
```

### 容器属性

grid-template-areas:'lt ct rt' 'lm cm rm' 'lb cb rb' 和 grid-area

grid: 行、列、以及行列宽高、间距属性的简写

grid-auto-columns:50px 设置默认列的宽度，好像没啥用？因为我们通常用 grid-template-columns 来定义列的一些配置信息（已经指定了列的宽度，这时候用 grid-auto-columns 是不生效的）

grid-auto-rows:50px 设置默认行的高度

grid-auto-flow:[row|column|dense|row dense|column dense] 控制网格元素排列方式

row: 也是默认值，增加行的方式继续往下排列 (纵向)

column: 网格元素排列方式是列 (横向)

dense； 简单理解就是 宽度是 auto 的

grid-column-gap
列的间距（也可以写作 column-gap ）
grid-row-gap
行的间距（也可以写作 row-gap ）
gap (grid-gap)
列、行的间距简写（同样，个人不太提倡使用简写方式）

### 子容器属性

grid-area: 合并行、列那几个属性的简写 grid-row-start、grid-column-start、grid-row-end、grid-column-end

grid-column
列合并两个属性的简写（grid-column-start、grid-column-end），中间使用 / 分割开

grid-column: 1 / 3;

grid-row
行合并两个属性的简写（grid-row-start、grid-row-end）用法同上

![](/img/gridline.png)

## 媒体查询

```css
@media screen and (min-width: 300px) {
  // 超出300像素屏幕
}

@media screen and (max-width: 300px) {
  // 300像素屏幕以内
}
```

## 文字溢出隐藏

```css
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

## 无影响触发 bfc

display 为 inline-block, table-cell, table-caption, flex,inline-flex
overflow:overflow

## CSS3 四个自适应关键字——fill-available、max-content、min-content、fit-content

### fill-available

width:fill-available 表示撑满可用空间

<iframe width='100%' height='auto' frameborder="0" srcdoc='
<style>
div{
  background-color: pink;
  display:inline-block;
  width:-webkit-fill-available;
}
</style>
<div>小火柴的蓝色理想</div>
'>
</iframe>

```html
<style>
  div {
    background-color: pink;
    display: inline-block;
    width: -webkit-fill-available;
  }
</style>
<div>小火柴的蓝色理想</div>
```

### fit-content

width:fit-content 表示将元素宽度收缩为内容宽度

<iframe width='100%' height='auto' frameborder="0" srcdoc='
<style>
div{
  background-color: pink;
  width:-webkit-fit-content;
  margin:auto;
}
</style>
<div>小火柴的蓝色理想</div>
'>
</iframe>

### min-content

width:min-content 表示采用内部元素最小宽度值最大的那个元素的宽度作为最终容器的宽度

首先，要明白这里的“最小宽度值”是什么意思。替换元素，例如图片的最小宽度值就是图片呈现的宽度，对于文本元素，如果全部是中文，则最小宽度值就是一个中文的宽度值；如果包含英文，因为默认英文单词不换行，所以，最小宽度可能就是里面最长的英文单词的宽度

<iframe width='100%' height='auto' frameborder="0" srcdoc='
<style>
.outer{
  width:-webkit-min-content;
}
</style>
<div class="outer">
  <div style="height:10px;width:100px;background:lightgreen"></div>
  <div style="background-color: pink;">小火柴的蓝色理想</div>
</div>
'>
</iframe>

### max-content

width:max-content 表示采用内部元素宽度值最大的那个元素的宽度作为最终容器的宽度。如果出现文本，则相当于文本不换行

<iframe width='100%' height='auto' frameborder="0" srcdoc='
<style>
.outer{
  width:-webkit-max-content;
  border:1px solid black;
}
</style>
<div class="outer">
  <div style="height:10px;width:100px;background:lightgreen"></div>
  <div style="background-color: pink;">小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想</div>
</div>
'>
</iframe>

## css 元素混合

元素混合 mix-blend-mode 应用于两个元素之间的混合

mix-blend-mode

初始值: normal

应用于: 所有元素

继承性: 无

值: normal(正常) | multiply(正片叠底) | screen(滤色) | overlay(叠加) | darken(变暗) | lighten(变亮) | color-dodge(颜色减淡) | color-burn(颜色加深) | hard-light(强光) | soft-light(柔光) | difference(差值) | exclusion(排除) | hue(色相) | saturation(饱和度) | color(颜色) | luminosity (亮度) | initial(初始) | inherit(继承) | unset(复原)

<iframe width='100%' height='auto' frameborder="0" srcdoc='
<html lang="en"><head>
<meta charset="UTF-8">
<title>Document</title>
<style>
.box1,.box2{
  display:inline-block;
  height: 150px;
  width: 200px;
  text-align: center;
}
.box2{
  background:#224E71;
}
h1{
  line-height: 2;
  margin: 0;
  mix-blend-mode:normal;
}
h1:first-line{
  color:white;
}
@media (max-width:700px) {
.box1,.box2{
    height: 75px;
    width: 100px;
  }
h1{line-height:1}
    }  
</style>
</head>
<body>
<div class="box1">
  <h1 style="mix-blend-mode: unset;">春分<br>白露</h1>
</div>
<div class="box2">
  <h1 style="mix-blend-mode: unset;">春分<br>白露</h1>
</div>  
<br>
<select id="test">
  <option value="normal">normal-正常</option>
  <option value="multiply">multiply-正片叠底</option>
  <option value="screen">screen-滤色</option>
  <option value="overlay">overlay-叠加</option>
  <option value="darken">darken-变暗</option>
  <option value="lighten">lighten-变亮</option>
  <option value="color-dodge">color-dodge-颜色减淡</option>
  <option value="color-burn">color-burn-颜色加深</option>
  <option value="hard-light">hard-light-强光</option>
  <option value="soft-light">soft-light-柔光</option>
  <option value="difference">difference-差值</option>
  <option value="exclusion">exclusion-排除</option>
  <option value="hue">hue-色相</option>
  <option value="saturation">saturation-饱和度</option>
  <option value="color">color-颜色</option>
  <option value="luminosity">luminosity-亮度</option>
  <option value="initial">initial-初始</option>
  <option value="inherit">inherit-继承</option>
  <option value="unset">unset-复原</option>
</select>
<script>
test.onchange = function(){
  var oH = document.getElementsByTagName("h1");
  for(var i = 0; i < oH.length; i++){
    oH[i].style.mixBlendMode = this.value;
  }
};
</script>

</body></html>
'>
</iframe>
