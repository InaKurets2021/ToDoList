<template>
	<div class="Header">to do list</div>
	<Header />

</template>

<script>

//?????


export default {
	components: {
		Header,
	},
};
</script>

<style lang="scss">
.Header {
	height: 3rem;
	@include text;
	@include flex;
	@include color;
}
</style>