<template>
  <div id="LoopBanner" :style="{width: options.width, height: options.height}">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item, index) in  bannerData" :key="index">
        <div class="bannerImg">
          <div class="banner" :style="{backgroundImage: `url(${item})`}"></div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "LoopBanner", // 轮播图
  props: {
    options: {
      type: Object,
      required: true,
      default: {
        width: '100%',
        height: '100px'
      }
    },
    bannerData: {
      type: Array,
      required: false,
      default: []
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        direction: "horizontal",
        effect: "slide",
        speed: 2000,
        autoplay: true,
        autoplay: {
          delay: 4000
        },
        loop: true,
        roundLengths: true,
        // 分页器
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true
        }
      }
    };
  }
};
</script>

<style >
#LoopBanner .swiper-container {
  width: 100%;
  height: 100%;
}

#LoopBanner .swiper-container .bannerImg {
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
}

#LoopBanner .swiper-container .bannerImg > .banner {
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #121212;
}

/* 轮播点 */
#LoopBanner .swiper-container .swiper-pagination {
  display: block;
  position: absolute;
  bottom: 0.24rem;
  width: 100%;
  font-size: 0;
}

#LoopBanner .swiper-pagination .swiper-pagination-bullet {
  width: 0.12rem;
  height: 0.12rem;
  background: #fff;
  opacity: 1;
  margin: 0 5px;
  border-radius: 0.06rem;
}

#LoopBanner .swiper-pagination .swiper-pagination-bullet-active {
  background: #d3434d;
}
</style>
