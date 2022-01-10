# demo1

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

## 所有颜色的修改

1. 所有界面的底色

helloworld.vue最下面style标签中的：

.gojspanel_basic当中设置background-color即可

2. 圆形节点

在helloworld.vue中查找$(go.Shape, "Circle"

stroke字段代表圆形节点的边的颜色，fill代表圆形填充的颜色

width和height可以设置长宽，strokewidth表示圆形边的粗细

下面的$(go.TextBlock中，stroke设置字的颜色（注意：仅限于圆形节点

3. 长方形节点

在helloworld.vue中查找$(go.Shape, "RoundedRectangle"

width和height可以设置长宽，fill代表填充的颜色

下面的$(go.TextBlock中，

font属性可设置节点中字体的类型、大小，stroke设置字的颜色（注意：仅限于长方形节点）



## 所有画板长宽的修改

统统在helloworld.vue最下面style标签中

```
example_patterns_gojspanel中修改example_patterns的相关配置
border设置画板的边界
width,height设置长宽
margin为看不见的外边界（理解为空气墙）最多写4个数，分别代表上-右-下-左，如：
margin: 1px  2px  3px  4px;
```



```
其他均同上
query_graph_gojspanel中修改query_graph的相关配置
agm_gojspanel修改左下角agm那一列的画板
lss_gojspanel修改左下角lss那一列的画板
plans_gojspanel修改右下角的板块
```



## 整体框架的修改

在helloworld.vue搜索cols

v-col是v-row的子标签，v-row代表一个大行，v-col代表一个大列

cols=""的值一般为整数，可以精确到0.5

一个v-row下面的所有v-col的cols值加起来规定为12（不是我规定的，api规定的）

所有没有写cols值的v-col标签均分剩下的cols值

第一个v-row标签包含上面的四个板块，里面对应有4个v-col标签

第二个v-row包含下面的两大模块



v-row和v-col可以嵌套，道理相同

调整cols值可以调整各个模块之间的宽度比例
