<template>
	<label :class="$style.task">
		<input type="checkbox" name="task1" value="" :checked="isChecked" />
		
		<span></span>{{ name }}
		<DeleteButton />
	</label>
</template>

<script>
import DeleteButton from "../atoms/DeleteButton.vue";

export default {
	components: {
		DeleteButton,
	},

	props: {
		name: {
			type: String,
			default: "",
		},
		isChecked: {
			type: Boolean,
			default: false,
		},
	}
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

[type="checkbox"]:checked+span {
	background: $orange url("../../assets/img/check.svg") center no-repeat;
	}
}
</style>
