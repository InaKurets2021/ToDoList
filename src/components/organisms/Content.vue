<template>
	<Task />
	<AddButton />
</template>

<script>
import Task from "../molecules/Task.vue";
import AddButton from "../atoms/AddButton.vue";

export default {
	components: {
		Task,
		AddButton,
	},
}; 
</script>


<style lang="scss">
@import "./assets/styles/index.scss";

.Content {
	padding: 30px;
}
</style>
