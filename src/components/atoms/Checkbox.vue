<template>
	<label>
		<input type='checkbox' name="task1" value="" :checked="isChecked">
		<span></span>{{name}}

		<DeleteButton />
	</label>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			default: '',
		},
		isChecked: {
			type: Boolean,
			default: false,
		}
	},
}

</script>

<style lang="scss">
@import "./assets/styles/index.scss";

input {
	display: none;
	/* <--скрываем дефолтный чекбокс */
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
	background: $orange url(./assets/img/check.svg) center no-repeat;
}
</style>