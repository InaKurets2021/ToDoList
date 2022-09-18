<template>
	<footer :class="$style.footer">
    <FooterLeft />
    <FooterRadio />
  </footer>
</template>

<script>
import FooterLeft from "@/components/atoms/FooterLeft.vue";
import FooterRadio from "@/components/molecules/FooterRadio.vue";

export default {
	components: {
		FooterLeft,
		FooterRadio,
	},
};
</script>

<style lang="scss" module>
@import "@/assets/styles/index.scss";

.footer {
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