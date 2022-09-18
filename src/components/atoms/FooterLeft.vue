<template>
	<div :class="$style.footerLeft">1/3left</div>
</template>


<style lang="scss" module>
@import "@/assets/styles/index.scss";

.footerLeft {
	@include text;

	@media (max-width: 480px) {
		margin-bottom: 0.5rem;
	}
}
</style>
