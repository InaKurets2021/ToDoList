<template>
	<input type='CheckBox' name="task1" value="" checked > </input>
</template>
<script></script>

<style lang="scss">
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