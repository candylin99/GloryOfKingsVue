<template>
  <div class="page-hero">
    <!-- 表示主页面的头部 -->
    <div class="topbar bg-black py-2 px-3 d-flex ai-center text-white">
      <img
        src="../assets/logo.png"
        alt=""
        height="30px"
      >
      <div class="px-2 flex-grow-1">
        <span class="text-white">王者荣耀</span>
        <span class="ml-2">攻略站</span>
      </div>
      <router-link
        to="/"
        tag="div"
      >更多英雄 &gt;</router-link>
    </div>
    <div v-if="model">
      <div
        class="top"
        :style="{'background-image':`url(${model.banner})`}"
      >
        <!-- 首先布局为flex，然后高设置为100%，justifly-content设置为底部的 -->
        <div class="info text-white p-3 d-flex h-100 flex-column jc-end">
          <div class="fs-sm">{{model.title}}</div>
          <h2 class="my-2">{{model.name}}</h2>
          <div class="fs-sm">{{model.categories.map(v=>v.name).join('/')}}</div>
          <div class="d-flex jc-between pt-2">
            <div class="scores ai-center">
              <span>难度</span>
              <span class="bg-primary-1 badge">{{model.scores.difficult}}</span>

              <span>技能</span>
              <span class="bg-blue-1 badge">{{model.scores.skills}}</span>

              <span>攻击</span>
              <span class="bg-danger badge">{{model.scores.attack}}</span>

              <span>生存</span>
              <span class="bg-primary badge">{{model.scores.service}}</span>
            </div>
            <div>

              <router-link
                to="/"
                class="text-grey fs-sm"
                tag="span"
              >皮肤：{{model.scores.skin}} &gt;</router-link>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="pt-3 d-flex">
      <div class="nav">
          <div class="nav-item active">
          <!-- @click="$refs.list.swiper.slideTo(i)" -->
            <div class="nav-link">英雄初识</div>
            <div class="nav-link">进阶攻略</div>
          </div>

        </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    id: { require: true }
  },
  data() {
    return {
      model: null
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`/heroes/${this.id}`);
      this.model = res.data;
    }
  },
  created() {
    this.fetch();
  }
};
</script>
<style lang="scss">
.page-hero {
  .top {
    height: 35vh;
    background: #fff no-repeat top center;
    background-size: auto 100%;
  }
  .info {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    .scores {
      .badge {
        margin: 0 0.25rem;
        display: inline-block;
        width: 1rem;
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        border-radius: 50%;
        font-size: 0.75rem;
        border: 1px solid rgba(255, 255, 255, 0.3);
      }
    }
  }
}
</style>