<template>
  <div>
    <div class="card p-3 bg-white m-3">
      <div class="card-header d-flex ai-center pb-3">
        <i
          class="iconfont"
          :class="`icon-${icon}`"
        ></i>
        <div class="flex-1 fs-xl px-2">{{title}}</div>
        <i
          class="iconfont"
          :class="`icon-${noicon}`"
        ></i>
      </div>
      <div class="card-body pt-3">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, require: true },
    icon: { type: String, require: true },
    noicon: { type: String }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
.card {
  .card-header {
    border-bottom: 1px solid $border-color;
  }
  border-bottom: 1px solid $border-color;
}
</style>
