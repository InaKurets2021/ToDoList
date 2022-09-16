<template>
	<div class="FooterLeft">1/3left</div>
</template>


<style lang="scss">
@import "./assets/styles/index.scss";

.FooterLeft {
	@include text;

	@media (max-width: 480px) {
		margin-bottom: 0.5rem;
	}
}
</style>
