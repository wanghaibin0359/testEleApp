<template>
	<div class="header">
		<div class="header-base">
			<div class="content-left">
				<div calss="content-img">
					<img :src="getsellers.avatar" alt="">
				</div>
			</div>
			<div class="content-auto">
				<div class="title">
					<span class="sign"><img src="" alt=""></span>
					<span class="title">{{getsellers.name}}</span>
				</div>
				<div class="arrivalTime">
					<span class="express">{{getsellers.description}}/{{getsellers.deliveryTime}}分到达</span>
				</div>
				<div class="spacilOffer">
					<span class="sign"></span>
					<span class="info">{{description?description[0].description:''}}</span>
				</div>
			</div>
		</div>
		
	</div>
</template>
<script>
	export default {
		props: {
			getsellers: {
				type: Object,
				default: function () {
					return {}
				}
			}
		},
		data () {
			return {
				descriptions: ''
			}
		},
		computed: {
			description () {
				return this.getsellers.supports
			}
		}
	};
</script>
<style lang="css" scoped>
</style>
