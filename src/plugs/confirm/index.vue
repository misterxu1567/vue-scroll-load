<template>
  <div id="globalConfirmCont" :class="[state && animation]">
    <div class="confirm">
      <div class="tit">{{msg.title || '查看更多信息，请用电脑访问'}}</div>
      <div class="text">{{msg.text || 'wenchuangzhongguo.com'}}</div>
      <button class="cancelBtn" @click="cancel">我知道了</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "globalConfirm",
  data() {
    return {
      msg: {},
      animation: "slideFade", // 默认动画
      state: false
    };
  },
  methods: {
    // 隐藏
    cancel() {
      this.state = false;
    }
  }
};
</script>

<style scoped>
#globalConfirmCont {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: -1;
  opacity: 0;
  transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
}
#globalConfirmCont .confirm {
  position: absolute;
  left: 50%;
  top: 46%;
  transform: translate(-50%, -50%) scale(1);
  -webkit-transform: translate(-50%, -50%) scale(1);
  -ms-transform: translate(-50%, -50%) scale(1);
  -moz-transform: translate(-50%, -50%) scale(1);
  -o-transform: translate(-50%, -50%) scale(1);
  width: 4.78rem;
  height: auto;
  border-radius: 0.08rem;
  overflow: hidden;
  background: #fff;
  transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
}
#globalConfirmCont .tit {
  font-size: 0.24rem;
  text-align: center;
  color: #666;
  line-height: 0.3rem;
  padding: 0.48rem 0.2rem 0.13rem;
}
#globalConfirmCont .text {
  font-size: 0.28rem;
  text-align: center;
  color: #333;
  line-height: 0.34rem;
  padding: 0 0.2rem;
  font-weight: bold;
}
#globalConfirmCont .cancelBtn{
    display: block;
    width: 100%;
    height: 0.96rem;
    border-top: 1px solid #eee;
    font-size: 0.28rem;
    color:#4E84F4;
    margin-top:0.28rem;
}
/*动画1*/
#globalConfirmCont.slideFade {
  z-index: 9999;
  opacity: 1;
}
#globalConfirmCont.slideFade .confirm {
  top: 50%;
}
/*动画2*/
#globalConfirmCont.scaleFade {
  z-index: 9999;
  opacity: 1;
}
#globalConfirmCont.scaleFade .confirm {
  transform: translate(-50%, -50%) scale(1);
  -webkit-transform: translate(-50%, -50%) scale(1);
  -moz-transform: translate(-50%, -50%) scale(1);
  -ms-transform: translate(-50%, -50%) scale(1);
  -o-transform: translate(-50%, -50%) scale(1);
}

</style>