<template>
  <div class="page-article" v-if="model">
    <div class="d-flex py-3 px-2 border-bottom text-blue">
      <div class="iconfont icon-Back"></div>
        <strong class="flex-1">
          {{model.title}}
        </strong>
        <div class="text-grey fs-xs">2019-06-19</div>
      </div>
    <div v-html="model.description" class="px-3 description fs-lg"></div>
    <div class="py-3 boder-top px-3">
        <div class="d-flex ai-center">
          <i class="iconfont icon-menu1"></i>
          <strong class="fs-lg ml-1 text-blue">相关资讯</strong>
        </div>
        <div class="pt-2">
        <router-link tag="div" :to="`/articles/${item._id}`" v-for="item in model.related" :key="item._id" class="py-1 ">
          {{item.title}}
        </router-link>
      </div>
     </div>
      
    

    <p>aaaa</p>
    <p>aaaa</p>

    <p>aaaa</p>
    <p>aaaa</p>
    <p>aaaa</p>
    <p>aaaa</p>

  </div>
</template>
<script>
export default {
  props:{
    id:{require:true},//所有在path里面的参数都映射为组件参数
  },
  
  data() {
    return {
      model:null
    }
  },
  watch: {
    id:'fetch',
    // id(){
    //   this.fetch()
    // }
  },
  methods: {
    async fetch(){
      const res =await this.$http.get(`/articles/${this.id}`)
      this.model =res.data
   }
  },
  created() {
    this.fetch()
  },
}
</script>
<style lang="scss">
.page-article{
  .description{
      img{
        max-width: 100%;
        height: auto;
      }
      
  }
  .icon-Back{
    font-size: 1.6923076923077rem
  }
}
  
</style>