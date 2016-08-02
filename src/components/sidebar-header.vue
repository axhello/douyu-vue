<template>
  <nav id="toolbar">
    <h1>
      <a @click.prevent="showNav">
        <div class="toolbar-title-icon">
          <i class="icon" :class="icon"></i>
        </div>
      </a>
      <a v-link="{path:'/'}">
        <div class="toolbar-title">
          {{title}}
        </div>
      </a>
    </h1>
    <div id="nav-right">
      <a v-link="{path:'/login'}" class="user">
        <i class="iconfont icon-user"></i>
      </a>
    </div>
  </nav>
</template>
<script>
    export default{
        props:{
          icon:{
            type: String,
            default: 'icon-three-bars',
            required:true
          },
          title: {
            type: String,
            default: '斗鱼TV',
            required:true
          }
        },
        methods:{
          goBack () {
            window.history.back()
          },
          showNav(){
            this.$dispatch('showNav');
          }
        }
    }
</script>
<style lang='scss'>
  #toolbar {
    background: #282828;
    position: fixed;
    z-index: 500;
    top: 0;
    right: 0;
    left: 0;
    width: auto;
    height: 50px;
    line-height: 50px;
    overflow: hidden;
    h1 {
      color: #fff;
      font-size: 16px;
      line-height: 50px;
      text-align: left;
      text-shadow: 0 -1px 0 rgba(0,0,0,0.8);
      width: auto;
      height: 50px;
      margin: 0 auto;
      float: left;
      a{
        font-size: 16px;
        line-height: 50px;
        text-align: left;
        text-shadow: 0 -1px 0 rgba(0,0,0,0.8);
        .toolbar-title-icon {
          float: left;
          width: 58px;
          text-align: center;
          color: #999;
        }
        .toolbar-title {
          float: left;
          font-size: 14px;
          color: #efefef;
          text-overflow: ellipsis;
          white-space: nowrap;
          displdday: inline-block;
          overflow: hidden;
        }
      }
    }
  }
  #nav-right {
    float: right;
      .city {
        float: left;
        font-size: 14px;
        padding: 0 6px;
      }
      .user {
        float: left;
        font-size: 16px;
        width: 48px;
        text-align: center;
      }
      a {
        color: #999;
      }
  }
</style>
