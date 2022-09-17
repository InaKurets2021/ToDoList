<template>
  <div class="footerRadio">
    <Tab
      v-for="item in tabs"
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

  data() {
    return {
      tabs: [
        {
          name: "All",
          isChecked: true,
        },
        {
          name: "Active",
          isChecked: false,
        },
        {
          name: "Completed",
          isChecked: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.footerRadio {
  display: flex;
}
</style>