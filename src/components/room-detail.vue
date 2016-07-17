<template>
  <detail-header :icon="'icon-arrow-left'" :title=""></detail-header>
  <section class="content video-view">
    <div class="player">
        <video id="dy-video-player" class="video-js" type="application/x-mpegURL" :src="room.hls_url">
            <p>您的浏览器不支持 video 标签</p>
        </video>
        <div class="poster" v-show="isPlay">
            <img :src="room.room_src" id="video-poster">
            <div class="play-btn" @click="tooglePlay"><i class="icon icon-play2"></i></div>
            <div class="room-info">
                <span class="name">{{room.room_name}}</span>
                <span class="class">{{room.tag_name}}</span>
            </div>
        </div>
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
        isPlay: true,
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
      tooglePlay () {
        this.isPlay = !this.isPlay
      },
      getDetail (roomId) {
        const self = this
        self.$http.get('/html5/live?roomId='+roomId).then(response => {
          let data = response.data
          let json = data.data
          if (data.error === 0) {
            self.room = json
            console.log(json);
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
  .video-view {
  .player {
    position: relative;
    width: 100%;
    height: 5.66666667rem;
    overflow: hidden;
    .video-js {
      width: 100%;
      height: 100%;
    }
    .poster {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background-color: #000;
      img {
        width: 100%;
        pointer-events: none;
      }
      .play-btn {
        display: block;
        position: absolute;
        left: 4.46666667rem;
        top: 2.4rem;
        width: 1.06666667rem;
        height: 1.06666667rem;
        .icon {
          font-size: 38px;
          color: #fff;
        }
      }
    }
    .room-info {
      position: absolute;
      width: 100%;
      height: .8rem;
      line-height: .8rem;
      left: 0;
      bottom: 0;
      font-size: .37333333rem;
      background: linear-gradient(top,rgba(0,0,0,0) 0,rgba(0,0,0,.1) 30%,rgba(0,0,0,.8) 100%);
      background: -webkit-linear-gradient(top,rgba(0,0,0,0) 0,rgba(0,0,0,.1) 30%,rgba(0,0,0,.8) 100%);
      background: -moz-linear-gradient(top,rgba(0,0,0,0) 0,rgba(0,0,0,.1) 30%,rgba(0,0,0,.8) 100%);
      .name {
        display: block;
        float: left;
        margin-left: .26666667rem;
        width: 6.93333333rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        color: #fff;
      }
      .class {
        display: block;
        float: right;
        margin-right: .26666667rem;
        width: 2.26666667rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        color: #f70;
        text-align: right;
      }
    }
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
