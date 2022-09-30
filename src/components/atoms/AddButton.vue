<template>
  <form @submit.prevent="addTask">
    <input
      :class="$style.addButton"
      placeholder="Add a new task"
      type="text"
      v-model="value"
    />
  </form>
</template>


<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    addTask() {
      if (this.value) {
        this.$store.commit("createNewTask", this.value);
        this.value = "";
      }
    },
  },
};
</script>

<style lang="scss" module>
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
