<template>
	<div class="content">
		<Task 
		v-for="item in tasks" :key="item.title" :name="item.name" :isChecked="item.isChecked"/>
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
	data() {
		return {
			tasks: [
				{
					name: "Task1",
					isChecked: true,
				},
				{
					name: "Task2",
					isChecked: false,
				},
				{
					name: "Task3",
					isChecked: false,
				},
			],
		};
	},
}; 
</script>

<style lang="scss">
@import "@/assets/styles/index.scss";
.content {
	padding: 30px;
}
</style>
