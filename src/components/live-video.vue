<template>
	  <div class="player">
        <video id="video-player" class="video-js" controls>
        		<source :src="room.hls_url" type="application/x-mpegURL">
            <p>您的浏览器不支持 video 标签</p>
        </video>
        <div class="poster" v-show="isPlay">
            <img :src="room.room_src" id="video-poster">
            <div class="play-btn" @click="playVideo"><i class="icon icon-play2"></i></div>
            <div class="room-info">
                <span class="name">{{room.room_name}}</span>
                <span class="class">{{room.tag_name}}</span>
            </div>
        </div>
    </div>  
    <div class="info-bar">
      <div class="live-info">
        <div class="nickname">主播: <span>{{room.nickname}}</span></div>
        <div class="online">共<span>{{room.online | fixed}}</span>人正在观看</div>
      </div>
      <div class="live-share">分享<span class="icon icon-share"></span></div>
    </div>
</template>
<script>
import videojs from 'video.js'
require('imports?this=>window!videojs-contrib-hls')
export default {
	props:{
    room:{
      type:Object,
      required:true
    }
  },
  data() {
  	return {
  		isPlay: true,
  	}
  },
  methods: {
  	playVideo () {
      this.isPlay = !this.isPlay
      const player = videojs('video-player');
      player.play();
    }
  }
}
</script>