> 基于vue的全局瀑布流布局

### NPM

``` bash
npm install vue-waterfall-x
```
### Example

```
import Toast form 'vue-waterfall-x'
vue.use(Toast)

new Vue({
    methods: {
        showFn () {
            this.$toast('我是提示语！', 5000, 'fade');
        }
    }
})

```
## Api
### 参数
| Name                 | Type      | Default      | Description                                                        |
|----------------------|-----------|--------------|--------------------------------------------------------------------|
| msg                  | `String`  | `"vertical"` | 字符串         |
| duration             | `Number`  | `3000`       | 单位毫秒（ms）  |
| type                 | `String`  | `"spread"`   | 所有动画类型：spread(张开)；fade(渐隐)；upFade(从上向下渐隐)             |


