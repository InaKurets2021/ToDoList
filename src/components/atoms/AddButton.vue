<template>
	<div><input class="AddButton" placeholder="Add a new task" type="text" id="username" value=""></div>
</template>


<style lang="scss">
@import "./assets/styles/index.scss";

.AddButton {
	width: 100%;
	height: 3rem;
	@include text;
	background: $gray;
	border: 1.5px dashed $orange;
	border-radius: 0.6rem;
	text-align: center;
	color: $word;
}
</style>

