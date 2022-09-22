<template>
	<div :class="$style.footerLeft">{{ getActiveTasksCount }}/{{getAllTasksCount}}</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	computed: mapGetters(["getActiveTasksCount", "getAllTasksCount"]),
};
</script>

<style lang="scss" module>
@import "@/assets/styles/index.scss";

.footerLeft {
	@include text;

	@media (max-width: 480px) {
		margin-bottom: 0.5rem;
	}
}
</style>
