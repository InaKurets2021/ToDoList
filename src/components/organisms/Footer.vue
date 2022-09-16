<template>
	<FooterLeft />
	<FooterRadio />
</template>

<script>
import FooterLeft from "../atoms/FooterLeft.vue";
import FooterRadio from "../molecules/FooterRadio.vue";

export default {
	components: {
		FooterLeft,
		FooterRadio,
	},
};
</script>

<style lang="scss">
@import "./assets/styles/index.scss";

.Footer {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem 1.8rem;
	@include color;

	@media (max-width: 480px) {
		flex-direction: column;
		padding: 0.5rem;
	}
}
</style>