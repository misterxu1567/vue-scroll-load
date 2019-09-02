<template>
  <div id="scrollContainer">
    <div v-for="(item, index) in dataList" :key="index">
      <slot name="list" :item="item"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "scrollContainer",
  props: {
    dataList: {
      type: Array,
      required: true,
      default: []
    },
    loadingOk: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  data() {
    return {};
  },
  mounted() {
    this.loadMoreFn();
    document.addEventListener("scroll", () => {
      this.scrollLoadFn();
    });
  },
  methods: {
    // 滚动函数
    scrollLoadFn() {
      // 函数节流
      function throttle(method, context) {
        clearTimeout(method.tId);
        method.tId = setTimeout(function() {
          method.call(context);
        }, 500);
      }
      throttle(() => {
        if (this.judegBomFn() && !this.loadingOk) {
          this.loadMoreFn();
        } else {
          return false;
        }
      });
    },
    // 判断滚动高度
    judegBomFn() {
      var documentHeight = document.body.scrollHeight;
      var winHeight = document.documentElement.clientHeight;
      var scrollHeight =
        document.documentElement.scrollTop || document.body.scrollTop;
      return documentHeight - winHeight <= scrollHeight;
    },
    // 加载更多
    loadMoreFn() {
      this.$emit("loadMore");
    }
  }
};
</script>

<style scoped>
#scrollContainer {
  width: 100%;
  height: auto;
  overflow: hidden;
}
.listCont {
  display: inline-block;
  font-size: 0;
}
</style>