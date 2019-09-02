# vue-scroll-load

> 滚动加载,slot版本

## Api
### 参数
| Name             | Type      | Default      | Description                                                        |
|------------------|-----------|--------------|--------------------------------------------------------------------|
| dataList         | `Array`   | `[]`          | 数据        |
| loadMore         | `Function`|               | 滚动到底部的回调函数   |
| loadingOk        | `Boolean` |               | 当前的接口状态，true=>正在请求 , false=>请求结束 |

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

基于vue 2.6+ 版本，使用slot插槽外部定义dom结构，注意依赖版本的如 vue-template-compiler vue-loader
