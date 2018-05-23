<template>
  <div id="app">
    <div class="header-wrapper">
     <headers  :getsellers="getsellers"></headers>
    </div>
     <div class="tab border-1px">
       <div class="tab-item">
        <router-link to='goods' tag="a">商品</router-link>
       </div>
      <div class="tab-item">
        <router-link to='ratings' tag="a">评价</router-link>
       </div>
       <div class="tab-item">
        <router-link to='seller' tag="a">商家</router-link>
       </div>
    </div>
    <router-view ></router-view>
  </div>
</template>
<script>
import headers from 'src/components/header/header';
import allAction from 'src/common/allAction/allAction';
 // const ERRORS = 0;
  export default {
    name: 'app',
    components: { headers },
    data () {
      return {
        getgoods: {},
        getsellers: {},
        getratings: {}
      }
    },
    created () {
      let self = this;
      allAction(this, this.goods, this.sellers, this.ratings).then((res) => {
        self.getgoods = self.$store.state.goods = res[0].data;
        self.getsellers = self.$store.state.seller = res[1].data;
        self.getratings = self.$store.state.ratings = res[2].data;
      }).catch((rej) => {
        this.$openBox('商品请求报错！');
      })
      /* this.$ajax.all([this.goods(), this.sellers(), this.ratings()])
      .then(this.$ajax.spread(function (acct, perms) {
          console.log(acct)
          console.log(perms)
      })) */
      /* this.$ajax.get('/goods').then((res) => {
        if (res.errno === ERRORS) {
          this.$store.state.goods = res.data;
        } else {
          this.$openBox('商品请求报错！');
        }
      }).catch((rej) => {
        this.$openBox('商品请求报错！');
      }) */
    },
    mounted () {
      console.log(window.devicePixelRatio)
      this.$router.push('/goods');
    },
    watch: {
      getgoods (news) {

      },
      getsellers (news) {

      },
      getratings (news) {

      }
    },
    methods: {
      goods () {
        return this.$ajax.get('/goods')
      },
      sellers () {
         return this.$ajax.get('/seller')
      },
       ratings () {
         return this.$ajax.get('/ratings')
      }
    }
  }
</script>
<style lang="less" scoped>
 @import './minxi/minix.less';
  @click:rgb(77,85,93);
  @no-click:rgb(240,20,20);
  #app{
   .tab{
      display:flex;
      width:100%;
      flex-wrap:wrap;
      .border-1px(1px,solid,rgba(7,17,27,0.1));
     .tab-item{
        flex:1 0 auto;
       a{
        text-align: center;
        box-sizing: border-box;
        height: 40px;
        padding:10px 0;
        width:100%;
        display:inline-block;
        line-height: 28px;
        font-size: 14px;
        color:@click;
        &.router-link-active{
          color:@no-click;
          }
       }
     }

    }
  }
</style>
