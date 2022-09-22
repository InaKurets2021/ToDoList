<template>
  <div :class="$style.footerRadio">
    <Tab
      v-for="item in $store.state.tabs"
      :key="item.title"
      :name="item.name"
      :isChecked="item.isChecked"
    />
  </div>
</template>


<script>
import Tab from "@/components/atoms/Tab";
export default {
  components: {
    Tab,
  },

  
};
</script>

<style lang="scss" module>
.footerRadio {
  display: flex;
}
</style>