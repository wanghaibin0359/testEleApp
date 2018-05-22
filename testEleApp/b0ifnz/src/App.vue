<template>
  <div id="app">
    <div class="header-wrapper">
       {{message}}
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
import axios from 'src/action/util';
  export default {
    name: 'app',
    data () {
      return {
        message: 'hello world'
      }
    },
    created () {
      axios.get('/goods').then((res) => {
        this.$store.goods = res;
        console.log('成功的');
        console.log(res)
      }).catch((rej) => {
        console.log('befeated');
        console.log(rej)
      })
    },
    mounted () {
      this.$router.push('/goods');
    }
  }
</script>
<style lang="less" scoped>
 @import './minxi/index.less';
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
