<template>
  <div>
    <m-card
      :icon="icon"
      :title="title"
      :noicon="noicon"
    >
      <div class="card-body pt-3">
        <div class="nav jc-between">
          <div
            class="nav-item"
            :class="{active:active===i}"
            v-for="(category,i) in categories"
            :key="i"
            @click="$refs.list.swiper.slideTo(i)"
          >
            <div class="nav-link">{{category.name}}</div>
          </div>

        </div>

        <!-- 表示把索引值赋值给active -->
        <swiper class="mt-3" ref="list"  :options="{autoHeight:true}"
        @slide-change="() => active = $refs.list.swiper.realIndex">
          <swiper-slide
            v-for="(category,i) in categories"
            :key="i"
          >
           <slot name="items" :category="category"></slot>
          </swiper-slide>
        </swiper>
      </div>


    </m-card>
  </div>
</template>

<script>
export default {
  props: {
    icon: { type: String, required: true },
    title: { type: String, required: true },
    noicon: { type: String },
    categories: { type: Array, required: true }
  },
  data() {
    return {
      active:0,
    }
  },
};
</script>

<style>
</style>
