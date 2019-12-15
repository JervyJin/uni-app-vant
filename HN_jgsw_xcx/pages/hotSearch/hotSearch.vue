<template>
	<view class="banner">
		<HMsearch></HMsearch>
	</view>
</template>

<script>
	import HMsearch from '../../components/HMsearch.vue'
	export default {
		components: {
			HMsearch
		},
		data() {
			return {

			}
		},
		methods: {

		},
		// onLoad相当于created生命周期
		onLoad() {
			
		}

	}
</script>

<style lang="scss">
	.banner {
		width: 90%;
		margin: auto;
	}
	.uni-input-wrapper{
		padding-top: 8px;
	}
		
</style>