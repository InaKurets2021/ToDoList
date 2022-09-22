<template>
	<div :class="$style.content">
		<Task 
		v-for="item in $store.state.tasks" :key="item.title" :name="item.name" :isChecked="item.isChecked" />
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
.content {
	padding: 30px;
}
</style>
