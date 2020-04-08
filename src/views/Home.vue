<template>
  <div class="home">
    <swiper :options="swiperOption">
      <swiper-slide>
        <img
          class="w-100"
          src="../assets/images/210794580bb9303653804bb7b482f2a4.jpeg"
          alt=""
        >
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-100"
          src="../assets/images/210794580bb9303653804bb7b482f2a4.jpeg"
          alt=""
        >
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-100"
          src="../assets/images/210794580bb9303653804bb7b482f2a4.jpeg"
          alt=""
        >
      </swiper-slide>

      <!-- Optional controls -->
      <div
        class="swiper-pagination pagination-home text-right px-3 pb-2"
        slot="pagination"
      ></div>

    </swiper>
    <!-- end of swiper -->

    <div class="nav-icons bg-white mt-3 d-flex flex-wrap text-center pt-3 text-dark-1 ">
      <div class="d-flex flex-wrap">
        <div
          class="nav-items mb-3"
          v-for="n in 5"
          :key="n"
        >
          <i class="sprite sprite-news">
          </i>
          <div class="py-2">爆料站</div>
        </div>
        <div
          class="nav-items mb-3"
          v-for="n in 5"
          :key="n"
        >
          <i class="sprite sprite-story">
          </i>
          <div>故事站</div>
        </div>
      </div>

      <div class="bg-light py-2 fs-sm w-100">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- end of nav icons -->

<m-list-card icon="menu1" title="新闻资讯" :categories='newscards' noicon="menu"> 
  <template #items="{category}">
    <router-link  :to="`/articles/${news._id}`" tag= "div" class="py-2 fs-lg d-flex" v-for="(news,n) in category.newsList" :key="n">
      <span class="text-info">[{{news.categoryName}}]</span>
      <span class="px-2">|</span>
      <!-- flex为1，就是它自适应 -->
      <span class="flex-1 text-dark-1 text-ellipsis">{{news.title}}</span>
      <span class="text-grey-1 fs-sm pr-2" >{{news.createdAt | date}}</span>    
    </router-link>
  </template>
</m-list-card>

<m-list-card icon="card-hero" title="英雄列表" :categories='heroCats' noicon="menu">
  <template #items="{category}">
    <!-- 给父盒子加上宽度，让tag栏和内容对齐 -->
      <div class="d-flex flex-wrap" style="margin:0 -0.5rem;">
        <router-link tag="div" :to="`/heroes/${hero._id}`" class="p-2 text-center" style="width:20%;"
        v-for="(hero,n) in category.heroList" :key="n">
        <img :src='hero.avatar' alt="" class="w-100">
        <div class="fs-sm">{{hero.name}}</div>
        </router-link>
      </div>
  </template>
</m-list-card>
    

    <p>aaaa</p>
    <p>aaaa</p>
    <p>aaaa</p>
    <p>aaaa</p>

    <p>aaaa</p>
    <p>aaaa</p>
    <p>aaaa</p>
    <p>aaaa</p>

    <p>aaaa</p>
    <p>aaaa</p>
    <p>aaaa</p>
    <p>aaaa</p>

  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: "home",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      },
      newscards:[
        {
        name:"热门",
        newsList:new Array(5).fill({}).map(v => ({
          categoryName:'公告',
          title:'6月2日全服不停机更新公告',
          date:'06/01'
        }))      
        },

        ],
        heroCats:[],
    };
  },
  filters:{
    //过滤器的名称
    date(val){
      return dayjs(val).format('MM/DD')
    }
  },
  methods: {
    async fetchNewsCats(){
      const res = await this.$http.get('news/list')
      this.newscards =res.data
    },
    async fetchheroCats(){
      const res = await this.$http.get('heroes/list')
      this.heroCats = res.data
    }
  },
  created() {
    this.fetchNewsCats(),
    this.fetchheroCats()
  },
};
</script>
<style lang="scss">
@import "../assets/scss/variables.scss";
.pagination-home {
  .swiper-pagination-bullet {
    //默认有一点灰色，可能是加了透明，把透明度改成1 即不透明
    opacity: 1;
    //圆角
    border-radius: 0.1538rem;
    background: map-get($colors, "white");
  }
  .swiper-pagination-bullet-active {
    background: map-get($colors, "info");
  }
}
.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-items {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border-right: none;
    }
  }
}
</style>
