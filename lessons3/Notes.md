布局：
1. flex
   flex-direction: row;   排布方向
   flex-wrap: wrap;       可以换行
   flex： 比列 最小尺寸 

2. 盒元素有内边距 边框 所有看起来会大一些 
   解决方法： box-sizing: border-box;   此时元素的内边距和边框都不会影响他的宽度
3. 当浮动元素大于容器框时候，可采用清除浮动的方式
   ｛ 
     overflow  ：auto；
     zoom：1
    ｝
4. 媒体查询
   @media screen and (min-width:600px){
       样式
   }
5. inline-block行内块网格铺满浏览器
6. 子元素是块元素，高度未定｛
    可以给父元素
    display:table-cell;vertical-align:middle：
    ｝

    vertical-align:middle(元素的中垂点与父元素的基线加1/2父元素中字母X的高度对齐)
7. justify-content: flex-start | flex-end | center | space-between |       space-around;

   对齐方式  头  尾 中 两端  space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
8.  align-items: flex-start | flex-end | center | baseline | stretch;
    交叉轴（垂直）对其