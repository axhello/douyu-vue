<template>
  <div class="video-view">
    <live-video :room="room"></live-video>
    <div class="favors">
      <div class="title"><span class="icon icon-play"></span>同类直播</div>
      <div class="live-list clearfix">
        <like-live v-for="like in likeness | limitBy 4" :like="like"></like-live>
      </div>
    </div>
    <div class="favors">
      <div class="title"><span class="icon icon-fire"></span>热门直播</div>
      <div class="live-list clearfix">
        <hot-live v-for="hot in hots | limitBy 4" :hot="hot"></hot-live>
      </div>
    </div>
  </div>
</template>

<script>
import DetailHeader from './detail-header'
import LiveVideo from './live-video'
import LikeLive from './like-live'
import HotLive from './hot-live'
export default{
    ready(){
      this.getDetail(this.$route.params.id)
      this.getLikelive()
      this.getHotLive()
    },
    data(){
      return {
        room:{},
        hots:[],
        likeness:[],
      }
    },
    methods:{
      getDetail (roomId) {
        const self = this
        self.$http.get('/html5/live?roomId='+roomId)
        .then(response => {
          let data = response.data
          let json = data.data
          if (data.error === 0) {
            self.room = json
          }
        },(error) => {console.log(error)})
      },
      getLikelive () {
        const self = this
        self.$http.get('/api/live/yxtx')
        .then(response => {
          let data = response.data
          let json = data.data
          if (data.error === 0) {
            self.likeness = json
          }
        },(error) => {
          console.log(error);
        })
      },
      getHotLive () {
        const self = this
        self.$http.get('/api/live')
        .then(response => {
          let data = response.data
          let json = data.data
          if (data.error === 0) {
            self.hots = json
          }
        }, (error) => {
          console.log(error);
        })
      }
    },
    components: {
      DetailHeader,LiveVideo,LikeLive,HotLive
    }
  }
</script>
<style lang='scss'>
  .video-view {
    width: 100%;
    .video-js {
      width: 100%;
      height: 100%;
    }
    .player {
      position: relative;
      width: 100%;
      height: 5.66666667rem;
      overflow: hidden;
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
          background-position: -2.13333333rem 0;
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
  .info-bar {
    width: 100%;
    height: 1.3333333rem;
    border-bottom: .02666667rem solid #ddd;
    background-color: #fff;
    .live-info {
      display: inline-block;
      float: left;
      margin-top: .266666665rem;
      margin-left: .26666667rem;
      text-align: left;
      .nickname {
        max-width: 4.5333322rem;
        font-size: .37333333rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        padding: 2px 0;
      }
      .online {
        font-size: .32rem;
        span {
          margin: 0 .13333333rem;
          color: #f50;
        }
      }
    }
    .live-share {
      display: inline-block;
      float: right;
      margin-right: .26666667rem;
      margin-top: .266666665rem;
      line-height: .9rem;
      font-size: .37333333rem;
      span {
        font-size: 16px;
        color: #696969;
        padding: 5px;
      }
    }
  }
}
.favors {
  position: relative;
  box-sizing: border-box;
  margin-top: .26666667rem;
  padding: 0 .13333333rem .13333333rem;
  width: 100%;
  background-color: #fff;
  .title {
    width: 100%;
    font-size: 16px;
    padding: 10px 0;
    span {
      margin: 5px 5px;
      color: #FF8433;
    }
  }
  .live-list {
    .live {
      float: left;
      position: relative;
      display: block;
      margin: .13333333rem;
      width: 4.6rem;
      height: 3.28rem;
      color: #333;
      .live-feature {
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        width: 100%;
        height: 2.61333333rem;
        background-color: #000;
        border-radius: .2rem;
      }
      .live-title {
        position: absolute;
        bottom: 0;
        left: .2rem;
        width: 4.2rem;
        color: #000;
        font-size: 12px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        line-height: .66666667rem;
        display: block;
      }
      .live-info {
        position: absolute;
        bottom: .66666667rem;
        left: 0;
        width: 100%;
        color: #fff;
        padding: .1rem 0;
        border-bottom-left-radius: .2rem;
        border-bottom-right-radius: .2rem;
        background: linear-gradient(top,rgba(0,0,0,0) 0,rgba(0,0,0,.1) 30%,rgba(0,0,0,.8) 100%);
        background: -webkit-linear-gradient(top,rgba(0,0,0,0) 0,rgba(0,0,0,.1) 30%,rgba(0,0,0,.8) 100%);
        background: -moz-linear-gradient(top,rgba(0,0,0,0) 0,rgba(0,0,0,.1) 30%,rgba(0,0,0,.8) 100%);
        .dy-name {
          font-size: 12px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          padding-left: .2rem;
          float: left;
          max-width: 2.746666666rem;
        }
        .popularity {
          float: right;
          font-size: 12px;
          padding-right: .2rem;
        }
      }
    }
  }
}
</style>
