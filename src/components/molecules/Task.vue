<template>
  <label :class="$style.task" @change="changeIsChecked(id)">
    <input type="checkbox" :checked="isChecked" />

    <span></span>
    <p :class="{[$style.through]: isChecked}">
    {{ name }}
    </p>
    <DeleteButton :id="id" />
  </label>
</template>

<script>
import { mapMutations } from 'vuex';
import  DeleteButton  from "../atoms/DeleteButton.vue";

export default {
  components: {
    DeleteButton,
  },

  props: {
    id: {
      type: String,
    },
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
    ...mapMutations(['changeIsChecked'])
  },
}

</script>

<style lang="scss" module>
@import "@/assets/styles/index.scss";

.task {
  padding: 0.75rem 1.25rem;
  margin-bottom: 1.5rem;
  border-radius: 0.6rem;
  @include text;
  @include flex;
  @include color;

  input {
    display: none;
  }

  span {
    /* <-- стилизируем новый */
    @include size;
    border: 0.125px solid $orange;
    display: inline-block;
    position: relative;
    background: $card;
    border-radius: 0.25px;
    cursor: pointer;
    margin-right: 1.5rem;
  }
  .through {
  text-decoration: line-through;
  }

  [type="checkbox"]:checked+span {
    background: $orange url("../../assets/img/check.svg") center no-repeat;
  }
}
</style>
