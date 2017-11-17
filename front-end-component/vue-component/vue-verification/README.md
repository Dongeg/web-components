# vue表单验证插件

适用于vue2.2版本以上

## 安装

```
npm install vue-form --save
```

## 引入方法

在main.js中引入

```js
import VueForm from 'vue-form';

Vue.use(VueForm);
```

## 基本用法

基本用法可以参考本实例给出的demo

## 内置验证器

```
type="email"
type="url"
type="number"
required
minlength
maxlength
pattern
min (for type="number")
max (for type="number")
```
## 自定义验证规则

你可以注册全局或局部自定义验证规则

### 全局自定义验证规则

可以写一个validators.js

```js
//validators.js
const idCardRegExp=/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
var options = {
  validators: {
    'idcard': function (value, attrValue, vnode) {
      console.log("你自定义的验证规则生效啦！")
      return idCardRegExp.test(value);
    }
  }
}

export default options
```

然后在main.js中引入options

```js
//main.js

import VueForm from 'vue-form';
import options from './assets/js/validators'


Vue.use(VueForm, options);
```

然后就可以在组件中使用了（参见helloWorld.vue文件）

### 局部自定义验证规则

```
// ...
methods: {
  customValidator: function (value) {
    // return true to set input as $valid, false to set as $invalid
    return value === 'custom';
  }
},
// local custom validator can also be a data or computed property
computed: {
  isEmailAvailable function () {
    // return true to set input as $valid, false to set as $invalid
  }
}
// ...
```

参考链接

https://github.com/fergaldoyle/vue-form#usage




