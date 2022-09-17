<template>
	<div class="footerLeft">1/3left</div>
</template>


<style lang="scss">
@import "@/assets/styles/index.scss";

.footerLeft {
	@include text;

	@media (max-width: 480px) {
		margin-bottom: 0.5rem;
	}
}
</style>
