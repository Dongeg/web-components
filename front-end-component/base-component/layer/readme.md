# layer

## 使用场景

layer有两种使用场景，可以独立使用，也可以通过Layui模块化使用，区别在于引用文件和初始化方式不同


作为独立组件使用 layer

```html
<script src="layer.js"></script>
<script>
	layer.open ({
		type: 0,
		title:'弹窗标题',
  		content: '弹窗内容',
	}); 
</script>
```

在 layui 中使用 layer

```html
<script>
layui.use('layer', function(){
  var layer = layui.layer;
  
  layer.msg('hello');
});   
</script>
```

layer有多种调用方式为了统一代码风格，规定只有在使用页面层和iframe层等没有内置方法时才使用layer.open方法

因为其余内置方法，均可以通过传入options来具体配置，且更加易于阅读

```js
layer.open({
  /**
  弹窗类型
  0: 信息框==layer.alert
  1: 页面层
  2: iframe层）
  3: 加载层）等同于layer.load(0);
  4: tips层）
  */
  type: 0,
})

/** 询问框 */

layer.confirm('is not?', {icon: 3, title:'提示'}, function(index){
  //do something
  
  layer.close(index);
});

/** 提示框 */

layer.msg('有表情地提示', {icon: 6});

/** 输入层 */

layer.prompt({
  formType: 2,
  value: '初始值',
  title: '请输入值',
  area: ['800px', '350px'] //自定义文本域宽高
}, function(value, index, elem){
  alert(value); //得到value
  layer.close(index);
});


/**  tab层 */

layer.tab({
  area: ['600px', '300px'],
  tab: [{
    title: 'TAB1', 
    content: '内容1'
  }, {
    title: 'TAB2', 
    content: '内容2'
  }, {
    title: 'TAB3', 
    content: '内容3'
  }]
});  


/** 关闭层 */

//当你想关闭当前页的某个层时
var index = layer.open();
var index = layer.alert();
var index = layer.load();
var index = layer.tips();
//正如你看到的，每一种弹层调用方式，都会返回一个index
layer.close(index); //此时你只需要把获得的index，轻轻地赋予layer.close即可
 
//如果你想关闭最新弹出的层，直接获取layer.index即可
layer.close(layer.index); //它获取的始终是最新弹出的某个层，值是由layer内部动态递增计算的
 
//当你在iframe页面关闭自身时
var index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
parent.layer.close(index); //再执行关闭   
```

## 详细配置

以layer.open为例

```js

layer.open({
  /**
  弹窗类型
  0:（信息框，默认）等同于layer.alert('酷毙了', {icon: 1});
  1:（页面层）等同于layer.tips(content, follow, options)
  2:（iframe层）
  3:（加载层）等同于layer.load(0);
  4:（tips层）
  */
  type: 0,
  title:'弹窗标题',
  content: '弹窗内容，content可传入的值是灵活多变的,随着type的不同而不同,详见官方文档',
  skin:'', //弹窗皮肤，默认为空，layer内置有两种layui-layer-lan  layui-layer-molv,还可以写自定义class名
  area:'',//弹窗宽高，默认auto，但当你只想定义宽度时，你可以area: '500px'，高度仍然是自适应的。当你宽高都要定义时，你可以area: ['500px', '300px']
  offset:'',//弹窗坐标默认垂直居中offset: ['100px', '50px']，
  icon:0,   //默认：-1（信息框）/0（加载层）,信息框默认不显示图标。当你想显示图标时，默认皮肤可以传入0-6如果是加载层，可以传入0-2
  btn: ['按钮一', '按钮二', '按钮三'],//默认值为'确认'
  btnAlign:'r',//按钮对齐方式，默认值为'r'居右，值可以是l r c
  closeBtn:'1',//关闭按钮样式 1/2
  shade:''//遮罩样式，默认是0.3透明度的黑色背景（'#000'）。如果你想定义别的颜色，可以shade: [0.8, '#393D49']；如果你不想显示遮罩，可以shade: 0
  shadeClose:'false'//是否点击遮罩关闭
  moveEnd: function(layero){//拖动完成后触发
  console.log("拖动完成");
  }
  tips:'',//tips方向和颜色
  success: function(layero, index){
   console.log(layero, index);
  },
});

```

## icon

layer内置7种iocn

```
 layer.msg('的确很重要', {icon: 1});  

```

icon不同值对应图标如下

1 ：绿色对勾
2 ：红色叉
3 ：黄色问号
4 ：灰色锁
5 ：红色不开心脸:(
6 ：绿色笑脸:)
7 ：黄色感叹号！


<img src="http://img.blog.csdn.net/20170309144342039?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvQmVhdVhpZQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" alt="">



参考链接 http://www.layui.com/doc/modules/layer.html

