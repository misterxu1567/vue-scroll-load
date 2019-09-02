<template>
  <div id="app">
    <ScrollLoad :loadingOk="loadingOk" :dataList="dataList" @loadMore="getIndexListFn">
      <template v-slot:list="{item}">
        <div class="list">
          <div class="img" :style="{backgroundImage:`url(${item.cover})`}"></div>
          <p class="tit">{{item.title}}</p>
        </div>
      </template>
    </ScrollLoad>
  </div>
</template>

<script>
import ScrollLoad from "@/plugs/scroll";
import Api from "@/api";

export default {
  name: "page",
  components: {
    ScrollLoad
  },
  data() {
    return {
      loadingOk: true,
      //数据列表
      dataList: [],
      //分页
      totalPage: 1,
      //请求数据
      submitForm: {
        pageNum: 0,
        pageSize: 10,
        type: 3,
        cId: "",
        keyword: ""
      }
    };
  },
  computed: {},
  mounted() {},
  methods: {
    // 获取数据
    getIndexListFn() {
      this.loadingOk = true; // 此处，配合 ScrollLoad 组件使用
      if (this.submitForm.pageNum >= this.totalPage) {
        // 没有更多数据
        return false;
      }
      this.$loadingX.show();
      this.submitForm.pageNum += 1;
      Api.getNewsList(this.submitForm)
        .then(res => {
          let resBody = res.data;
          if (resBody.code === 1) {
            let data = res.data.data;
            //success
            this.dataList = [...this.dataList, ...data.contents];
            this.totalPage = data.totalPage;
            this.loadingOk = false;
            if (this.submitForm.pageNum >= this.totalPage) {
              alert('没有更多数据了');
            }
          }
        })
        .finally(() => {
          this.$loadingX.hide();
        });
    }
  }
};
</script>

<style scoped lang="less">
@import "./assets/css/main.css";
.list{
  display: block;
  width: 100%;
  height: auto;
  .img{
    display: block;
    width: 100%;
    height: 2rem;
  }
  .tit{
    font-size: 0.4rem;
  }
}
</style>
