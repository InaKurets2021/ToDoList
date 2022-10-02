<template>
  <div :class="$style.header">TO DO LIST</div>
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
