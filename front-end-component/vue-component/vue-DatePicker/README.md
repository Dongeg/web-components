# calendar

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 使用方法

本插件需要babel和less的支持需要npm安装less 和less-loader

```
npm install less less-loader --save-dev

```
## webpack+vue工程化项目中(参见vue&&bwebpack目录)

```js
//App.vue
<template>
  <datepicker v-model="date"></datepicker>
</template>
<script>
    import datepicker from './components/vue-date/Datepicker'
    export default {
        components: { datepicker},
        data () {
          return {
            date: '',
          }
        },
    }
</script>
```


## 直接以js文件的形式引入(参见vue-datepicker-js目录)

将Datepacker用webpack打包成库文件可直接引入页面

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
    <div id="app">
    	<datepicker v-model="date"></datepicker>
    </div>
	<script src="vue2.5/vue.js"></script>
	<script src="./dist/index.js"></script>
	<script>
	    new Vue({
	        el: '#app',
	        components: { datepicker },
			data: function () {
			  return {
			    date: ""
			  }
			}
	    })
	</script>
</body>
</html>
```
