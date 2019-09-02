<template>
  <div :class="{'toast':status}" v-show="text !== ''" :style="{animation: ani}">
    <i class="iconfont icon-cuowu"></i>
    <p>{{text}}</p>
  </div>
</template>

<script>
export default {
  name: "toast",
  data() {
    return {
      status: false,
      text: "",
      duration: null,
      type: ""
    };
  },
  computed: {
    ani() {
      return this.status ? `${this.type}Frame ${this.duration}ms ease` : "";
    }
  }
};
</script>
<style>
.toast {
  position: fixed;
  left: 50%;
  top: -20%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  box-sizing: border-box;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  z-index: 9999;
  overflow: hidden;
  min-width: 200px;
  max-width: 400px;
  padding: 8px 20px;
  font-size: 0;
}
.iconfont{
  color: rgb(245, 38, 38);
    font-size: 14px;
}
.toast > p {
  display: inline-block;
  margin-left: 10px;
  line-height: 20px;
  font-size: 14px;
  color: #333;
  height: auto;
  word-wrap: break-word;
  white-space: pre-wrap;
}
/*展开动画*/
@keyframes spreadFrame {
  0% {
    max-height: 0px;
  }
  20% {
    max-height: 200px;
  }
  80% {
    max-height: 200px;
  }
  100% {
    max-height: 0px;
  }
}

@-webkit-keyframes spreadFrame {
  0% {
    max-height: 0px;
  }
  20% {
    max-height: 200px;
  }
  80% {
    max-height: 200px;
  }
  100% {
    max-height: 0px;
  }
}
@-ms-keyframes spreadFrame {
  0% {
    max-height: 0px;
  }
  20% {
    max-height: 200px;
  }
  80% {
    max-height: 200px;
  }
  100% {
    max-height: 0px;
  }
}

/*渐隐动画*/
@keyframes fadeFrame {
  0% {
    display: block;
    opacity: 0;
  }
  8% {
    opacity: 1;
  }
  92% {
    opacity: 1;
  }
  100% {
    display: block;
    opacity: 0;
  }
}
@-webkit-keyframes fadeFrame {
  0% {
    display: block;
    opacity: 0;
  }
  8% {
    opacity: 1;
  }
  92% {
    opacity: 1;
  }
  100% {
    display: block;
    opacity: 0;
  }
}
@-ms-keyframes fadeFrame {
  0% {
    display: block;
    opacity: 0;
  }
  8% {
    opacity: 1;
  }
  92% {
    opacity: 1;
  }
  100% {
    display: block;
    opacity: 0;
  }
}

/*从上渐隐*/
@keyframes upFadeFrame {
  0% {
    display: block;
    top: -20%;
    opacity: 0;
  }
  10% {
    top: 10%;
    opacity: 1;
  }
  90% {
    top: 10%;
    opacity: 1;
  }
  100% {
    display: block;
    top: -20%;
    opacity: 0;
  }
}
@-webkit-keyframes upFadeFrame {
  0% {
    display: block;
    top: -20%;
    opacity: 0;
  }
  10% {
    top: 10%;
    opacity: 1;
  }
  90% {
    top: 10%;
    opacity: 1;
  }
  100% {
    display: block;
    top: -20%;
    opacity: 0;
  }
}
@-ms-keyframes upFadeFrame {
  0% {
    display: block;
    top: -20%;
    opacity: 0;
  }
  10% {
    top: 10%;
    opacity: 1;
  }
  90% {
    top: 10%;
    opacity: 1;
  }
  100% {
    display: block;
    top: -20%;
    opacity: 0;
  }
}
</style>