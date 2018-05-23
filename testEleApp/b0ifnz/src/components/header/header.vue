<template>
	<div class="header">
		<div class="header-base">
			<div class="content-left inline-block">
				<div calss="content-img">
					<img :src="getsellers.avatar" alt="" width="64" height="64">
				</div>
			</div>
			<div class="content-auto inline-block">
				<div class="title">
					<span class="sign">

          </span>
					<span class="sellername">{{getsellers.name}}</span>
				</div>
				<div class="arrivalTime">
					{{getsellers.description}}/{{getsellers.deliveryTime}}分到达
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
<style lang="less" rel="stylesheet/less">
@import '../../minxi/bgcimg.less';
  .header{
    width:100%;
    background-color: pink;
    .header-base{
      padding:24px 0 18px 24px;
      .content-auto{
        .title{
          margin:2px 0 8px 0;
          .sign{
           .bgcimg('../components/header/brand@');
            background-size:30px 18px;
            vertical-align: top;
            margin-right:6px;
            display: inline-block;
            width:30px;
            height:18px;

          }
          .sellername{
            display: inline-block;
            vertical-align: top;
            font-size:16px;
            color:rgb(255,255,255);
            font-weight: bold;
            line-height: 18px;
          }
        }
        .arrivalTime{
          font-size:12px;
          color:rgb(255,255,255);
          font-weight: 200;
          line-height: 12px;
          margin-bottom:10px;
        }
        .spacilOffer{
          font-size:12px;
          color:rgb(255,255,255);
          font-weight: 200;
          line-height: 12px;
        }
      }
      .inline-block{
        margin-right:18px;
        vertical-align: top;
        display:inline-block;

      }

    }
  }
</style>
