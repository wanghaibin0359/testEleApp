<template>
<div>
	<div v-if="size===1" :class="classMap[datas]"></div>
	<div v-else :class="classMap2[datas]"></div>
</div>
</template>
<script>
	export default {
		name: 'lable',
		data() {
			return {
				classMap: this.$store.state.classMap,
				classMap2: this.$store.state.classMap2
			}
		},
		props: ['datas', 'size']
	};
</script>
<style lang="less" scoped>
@import '../../minxi/bgcimg.less';
div{
	width:100%;
	height: 100%;
	background-size: 100% 100%;
	.decrease{
		.bgcimg('../components/header/decrease_1@');
	}
	.discount{
		.bgcimg('../components/header/discount_1@');
	}
	.special{
		.bgcimg('../components/header/special_1@');
	}
	.invoice{
		.bgcimg('../components/header/invoice_1@');
	}
	.guarantee{
		.bgcimg('../components/header/guarantee_1@');
	}
	.decrease2{
		.bgcimg('../components/header/decrease_2@');
	}
	.discount2{
		.bgcimg('../components/header/discount_2@');
	}
	.special2{
		.bgcimg('../components/header/special_2@');
	}
	.invoice2{
		.bgcimg('../components/header/invoice_2@');
	}
	.guarantee2{
		.bgcimg('../components/header/guarantee_2@');
	}
}
</style>
