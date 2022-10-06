<template>
  <label :class="$style.tab" @click="changeTabName(name)">
    <input type="radio" name="tab" :checked="isChecked" />
    <span></span> {{ name }}
  </label>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    ...mapMutations(['changeTabName']),
  }
};
</script>

<style lang="scss" module>
@import "@/assets/styles/index.scss";

.tab {
  position: relative;
  display: inline-block;
  padding: 0.35rem 0.6rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
  background-color: transparent;
  cursor: pointer;

  &:not(:last-of-type) {
    // всем элементам кроме последнего
    margin-right: 1.5rem;

    @media (max-width: 480px) {
      margin-right: 0.5rem;
    }
  }

  input {
    display: none;
    appearance: none;
  }

  span {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    border: 0.125rem solid transparent;
    border-radius: 0.625rem;
  }

  [type="radio"]:checked+span {
    border-color: $white;
  }
}
</style>
