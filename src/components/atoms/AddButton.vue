<template>
  <div>
    <input
      class="addButton"
      placeholder="Add a new task"
      type="text"
      id="username"
      value=""
    />
  </div>
</template>


<style lang="scss">
@import "@/assets/styles/index.scss"; 

.addButton {
  width: 100%;
  height: 3rem;
  @include text;
  background: $gray;
  border: 1.5px dashed $orange;
  border-radius: 0.6rem;
  text-align: center;
  color: $word;
}
</style>

