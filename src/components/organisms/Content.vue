<template>
  <div :class="$style.content">
    <div :class="$style.wrapper">
      <div :class="$style.noTask" v-if="!$store.getters.getFilterTask.length">
        No tasks!
      </div>
      <Task v-for="item in $store.getters.getFilterTask" :key="item.title" :name="item.name" :isChecked="item.isChecked"
        :id="item.id" />
    </div>
    <AddButton />
  </div>
</template>

<script>
import Task from "@/components/molecules/Task.vue";
import AddButton from "@/components/atoms/AddButton.vue";

export default {
  components: {
    Task,
    AddButton,
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/index.scss";

::-webkit-scrollbar {
  width: 0.6rem;
  background-color: $purple;
  border-radius: 9rem;
}

::-webkit-scrollbar-thumb {
  background-color: $card;
  border-radius: 9rem;
}

.content {
  padding: 30px;

  .wrapper {
    padding-right: 1rem;
    min-height: 100px;
    max-height: 380px;
    overflow-y: auto;
    width: 100%;
  }

  .noTask {
    font-size: 2rem;
    text-align: center;
  }
}
</style>
