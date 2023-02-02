<template>
  <div id="app">
    <div :class="$style.wrapper">
      <div :class="$style.image"></div>
      <div :class="$style.container">
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Header from "./components/organisms/Header.vue";
import Content from "./components/organisms/Content.vue";
import Footer from "./components/organisms/Footer.vue";

export default {
  components: {
    Header,
    Content,
    Footer,
  },
  methods: {
    ...mapActions (["getTasksLocalStorage"]),
  },
  mounted() {
    this.getTasksLocalStorage();
  }
};
</script>

<style lang="scss" module>
@import "@/assets/styles/index.scss";

.wrapper {
  background: linear-gradient(104.11deg, #f8d4ed 14.52%,#e299b0 87.26%);
  position: relative;
  height: 100vh;

  .image {
    max-width: 60rem;
    height: 100vh;
    margin: 0 auto;
    position: relative;
    background: url("./assets/img/Group.svg") center right no-repeat;
  }

  .container {
    position: absolute;
    max-width: 34.2rem;
    width: 100%;
    left: 50%;
    top: 50%;
    background: $white;
    transform: translate(-50%, -50%);
    box-shadow: 0 0.6rem 2rem 0.3rem $purple;
  }
}
</style>
