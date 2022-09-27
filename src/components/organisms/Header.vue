<template>
  <div :class="$style.header">to do list</div>
</template>

<style lang="scss" module>
@import "@/assets/styles/index.scss";

.header {
  height: 3rem;
  @include text;
  @include flex;
  @include color;
}
</style>
