<template>
	<label class="Task">
		<input type='checkbox' name="task1" value="" checked>
		<span></span>Task 1
		<button class="DeleteButton"></button>
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
}
</script>
<style lang="scss">
.Task {
	padding: 0.75rem 1.25rem;
	margin-bottom: 1.5rem;
	border-radius: 0.6rem;
	@include text;
	@include flex;
	@include color;
}
</style>
