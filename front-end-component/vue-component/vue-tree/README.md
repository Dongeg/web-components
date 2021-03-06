# vue-tree

vue树形组件（elementUI）

## 安装&引入

首先初始化安装完成vue-cli

然后

```
npm install element-ui --save
```

elementUI可以一次性安装所有，也可以按需引入，这里推荐使用按需引

按照官网说明，先安装babel-plugin-component

```
npm install babel-plugin-component -D

```

然后修改 .babelrc 文件。此处官网说明有歧义，并非将整个.babelrc替换为

```js
{
  "presets": [
    ["es2015", { "modules": false }]
  ],
  "plugins":[["component", [
    {
      "libraryName": "element-ui",
      "styleLibraryName": "theme-chalk"
    }
  ]]]
}
```

如果按照上述方法操作会报错，而是在plugins选项中新增

```js
["component", [
    {
      "libraryName": "element-ui",
      "styleLibraryName": "theme-chalk"
    }
  ]]
```

所以在本事例使用的vue-cli版本中，实际修改后的.babelrc文件如下

```js
{
  "presets": [
    ["env", {
      "modules": false
    }],
    "stage-2"
  ],
  "plugins": [
    "transform-runtime",
    ["component", [
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]]
  ],
  "env": {
    "test": {
      "presets": ["env", "stage-2"]    }
  }
}
```
然后在main.js中引入element组件

```js
import {Table,TableColumn,Pagination } from 'element-ui'
// 引入需要的css样式
import {Tree,Button} from 'element-ui'
import 'element-ui/lib/theme-chalk/tree.css'
import 'element-ui/lib/theme-chalk/checkbox.css'
Vue.use(Tree)
Vue.use(Button)
```

到这里静态的element-ui组件就可以使用了，但是这样坑定满足不了需求，一般表格数据都是从后端渲染所以，我们安装引入两个东西

```
//异步请求工具
npm install axios vue-axios --save
//前端数据模拟mock.js
npm install mockjs
```

```js
import axios from 'axios'
import VueAxios from 'vue-axios'
import message from './data/mock'
```

## 自定义树的节点内容

要想自定义节点内容，要用到vue的render函数，所以还要进行一些配置

### 安装依赖

```bash
npm install babel-plugin-transform-vue-jsx
npm install babel-helper-vue-jsx-merge-props
npm install babel-plugin-syntax-jsx
```

### 配置.babelrc文件

```js
{
  "presets": [
    ["env", {
      "modules": false
    }],
    "stage-2"
  ],
  "plugins": [["component", [
    {
      "libraryName": "element-ui",
      "styleLibraryName": "theme-chalk"
    }
    ]],
    "transform-runtime",
    "transform-vue-jsx"    //新增了这个
  ],
  "env": 
  {
    "test": {
      "presets": ["env", "stage-2"]    }
  }
}

```

然后就可以愉快的自定义树节点的内容啦









