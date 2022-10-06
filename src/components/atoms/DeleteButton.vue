<template>
  <button :class="$style.deleteButton" @click="delTask"></button>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
    },
  },
  methods: {
    delTask() {
      this.$store.commit("deleteTask", this.id);
    },
  },
};
</script>
<style lang="scss" module>
@import "@/assets/styles/index.scss";

.deleteButton {
  @include flex;
  @include size;
  position: relative;
  background: none;
  border: 0.125rem solid $purple;
  border-radius: 0.25rem;
  cursor: pointer;
  margin-left: auto;

  &::after,
  &::before {
    content: "";
    width: 0.75rem;
    height: 0.125rem;
    position: absolute;
    left: 50%;
    top: 50%;
    background-color: $purple;
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
}
</style>
