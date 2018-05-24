<template>
	<div class="header">
		<div class="header-base">
			<div class="content-left inline-block">
        <img  :src="getsellers.avatar" alt="" width="64" height="64">
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
					<span v-show='description' class="sign inline-block">
					</span>
					<span class="info inline-block">{{description?description[0].description:''}}</span>
				</div>
			</div>
			<div class="clickbtn">
				<span>5个</span>
				<span @click="clickPopShow" class="icon-keyboard_arrow_right"></span>
			</div>
		</div>
		<div class="bulletin" @click="clickPopShow">
			<div class="bulletin_wrapper">
				<span class="bulletin_img"></span>
				<span class="bulletin_content">{{getsellers.bulletin}}</span>
				<span class="bulletin_arrow icon-keyboard_arrow_right"></span>
			</div>
		</div>
		<div class="bgcImg">
			<img  :src="getsellers.avatar" alt="" >
		</div>
    <transition name="fade">
      <div class="popPage" v-show="popUp" transition="popPage">
        <div class="closebtn icon-close"  @click="clickClosePage"></div>
      </div>
    </transition>
	</div>

</template>
<script>
import lable from '../label/lable.vue';
	export default {
		components: {lable},
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
				descriptions: '',
        popUp: false
			}
		},
		computed: {
			description () {
				return this.getsellers.supports
			}
		},
    methods: {
      clickPopShow () {
        this.popUp = true;
      },
      clickClosePage () {
        this.popUp = false;
      }
    }
	};
</script>
<style lang="less" rel="stylesheet/less">
@import '../../minxi/bgcimg.less';
@import '../../common/fonts/style.css';
  .header{
  	position: relative;
    width:100%;
    background-color: rgba(7,17,27,.5);
    overflow: hidden;
    .popPage{
      &.fade-enter-active{
        transition: all .5s;
      }
      &.fade-enter,&.fade-leave-active{
        opacity: 0;
        transition: all .5s;
      }
      position:fixed;
      top:0;
      left:0;
      z-index: 100;
      width:100%;
      height: 100%;
      background-color:rgba(7,17,27,.8);
      .closebtn{
        position:absolute;
        left:50%;
        bottom:32px;
        transform: translateX(-50%);
        font-size: 32px;
        width:32px;
        height: 32px;
        color:rgba(255,255,255,.5);
      }
    }
	  .bgcImg{
		position: absolute;
		z-index: -1;
		width:100%;
		height: 100%;
		top:0;
		left: 0;
		filter: blur(10px);
		img{
			width:100%;
			height: 100%;
		}
	}
    .header-base{
      padding:24px 0 18px 24px;
      position: relative;
      .clickbtn{
      		font-size: 0;
      		position: absolute;
      		bottom:16px;
      		right: 12px;
      		padding:7px 8px;
      		background-color: rgba(0,0,0,.2);
      		border-radius:18px;
			span{
				line-height:12px;
				font-size:10px;
				color:white;
				font-weight: 200;
				display: inline-block;
				&:first-child{
					margin-right: 2px;
				}
			}
      	}
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
          font-size:0px;
          color:rgb(255,255,255);
          font-weight: 200;
          line-height: 12px;

          .sign{
          	 margin-right:4px;
			      .bgcimg('../components/header/decrease_1@');
			 background-size:12px 12px;
          	width:12px;
          	height:12px;
          }
          .info{
          	 font-size:12px;
          }
        }
      }
      .inline-block{
        margin-right:18px;
        vertical-align: top;
        display:inline-block;
      }
      .content-left{
          img{
            border-radius: 2px;
          }
      }

    }
    .bulletin{
    	width:100%;
    	height: 28px;
    	padding: 8px 12px;
    	background-color:rgba(7,17,27,.2);
    	box-sizing: border-box;
    	.bulletin_wrapper{
    		font-size: 0;
    		max-width:100%;
    		display: flex;
    		span{
    			display: inline-block;
    			vertical-align: top;
    			margin-right:4px;
    			&:last-child{
    				margin:0;
    			}
    		}
    		.bulletin_img{
    			flex: 0 0 22px;
    			.bgcimg('../components/header/bulletin@');
    			background-size: 22px 11px;
    		}
    		.bulletin_content{
    			flex: 1 1 auto;
    			text-overflow: ellipsis;
    			overflow: hidden;
    			white-space: nowrap;
    			font-size: 10px;
    			color:rgb(255,255,255);
    			font-weight: 200;
    		}
    		.bulletin_arrow{
    			flex: 0 0 auto;
    			font-size: 10px;
    			color:white;

    		}
    	}

    }
  }
</style>
