<template>
	<label class="Task">

		<Checkbox v-for="item in tasks" :key="item.title" :name="item.name" :isChecked="item.isChecked" />

		<DeleteButton />
	</label>
</template>

<script>
import Checkbox from "../atoms/Checkbox.vue";
import DeleteButton from "../atoms/DeleteButton.vue";

export default {
	components: {
		Checkbox,
		DeleteButton,
	},


	data() {
		return {
			tasks: [
				{
					name: 'Task1',
					isChecked: true
				},
				{
					name: 'Task2',
					isChecked: false
				},
				{
					name: 'Task3',
					isChecked: false
				},
			]
		}
	}
}
</script>

<style lang="scss">
@import "./assets/styles/index.scss";

.Task {
	padding: 0.75rem 1.25rem;
	margin-bottom: 1.5rem;
	border-radius: 0.6rem;
	@include text;
	@include flex;
	@include color;
}
</style>
