<template>
  <detail-header :icon="'icon-arrow-left'" :title=""></detail-header>
  <section class="content film-view">
    <div class="film-img-wrap">
     <embed width="100%" height="100%" allownetworking="all" allowscriptaccess="always" :src="loadingsrc" quality="high" bgcolor="#000" wmode="window" allowfullscreen="true" allowFullScreenInteractive="true" type="application/x-shockwave-flash">
    </div>  
    <div class="film-intro">
        <div class="film-list-nav">
          <a href="javascript:void(0);" @click="changeTab('NOW_PLAYING')">
            <div class="now-playing" :class="{'choosing':curTab=='NOW_PLAYING'}">聊天</div>
          </a>
          <a href="javascript:void(0);" @click="changeTab('COMING_SOON')">
            <div class="coming-soon" :class="{'choosing':curTab=='COMING_SOON'}">主播</div>
          </a>
          <a href="javascript:void(0);" @click="changeTab('ALL_DIRECTORY')">
            <div class="coming-soon" :class="{'choosing':curTab=='ALL_DIRECTORY'}">贡献榜</div>
          </a>
          <a href="javascript:void(0);" @click="changeTab('MOBILE_GAME')">
            <div class="coming-soon" :class="{'choosing':curTab=='MOBILE_GAME'}">已关注</div>
          </a>
        </div>
        <!-- <now-playing v-if="curTab==='NOW_PLAYING'"></now-playing>
        <coming-soon v-if="curTab==='COMING_SOON'"></coming-soon> -->
    </div>
    </div>
    <div class="operation">
      
    </div>
    </section>
</template>

<script>
import DetailHeader from './detail-header'
export default{
    ready(){
      this.getDetail(this.$route.params.id)
    },
    data(){
      return{
        room: [],
        curTab:'NOW_PLAYING'
      }
    },
    computed:{
      loadingsrc() {
        return 'http://staticlive.douyutv.com/common/share/play.swf?room_id=' + this.$route.params.id
      }
    },
    methods:{
      changeTab (name) {
        this.curTab=name
      },
      getDetail (id) {
        const self = this
        self.$http.get('/api/room/'+id).then(response => {
          let data = response.data
          let json = data.data
          if (data.error === 0) {
            self.room = json
          }
        },(response)=>{console.log(response)})
      },
    },
    components: {
      DetailHeader
    }
  }
</script>
<style lang='scss'>
  .film-view {
  .film-img-wrap {
    overflow: hidden;
    width: 100%;
    height: 310px;
  }

  .film-intro {
    line-height: 18px;
    -webkit-user-select: text;
    user-select: text;
    background: #fff;
    .film-list-nav {
      height: 46px;
      margin: 0 auto;
      border-bottom: solid #fe6e00 1px;
      .now-playing,.coming-soon {
        float: left;
        width: 25%;
        height: 100%;
        text-align: center;
        font-size: 16px;
        line-height: 46px;
        color: #6a6a6a;
        cursor: pointer;
      }
      .choosing {
        color: #fe6e00;
        border-bottom: solid;
        border-width: 1.5px;
      }
    }
  }
}
.operation {
   position: absolute;
   bottom: 0;
  .chat {
    width: 100%;
    height: 100%;
    .inputer {
      padding: 10px;
      .icon {
        font-size: 18px;
        margin-r: 5px;
      }
    }
  }
}
</style>
