<template>
  <a class="room" v-link="{name: 'room', params: {id: room.room_id}}">
    <image-placeholder :src="room.room_src"></image-placeholder>
    <div class="room-info">
      <span class="room-name">{{room.nickname}}</span>
      <span class="room-online"><i class="icon icon-users"></i> {{room.online | fixed}}</span>
    </div>
    <div class="room-title"><i class="icon icon-ondemand_video"></i> {{room.room_name}}</div>
  </a>
</template>
<script>
    import ImagePlaceholder from '../../components/image-placeholder'
    export default{
        props:{
          room:{
            type:Object,
            required:true
          }
        },
        data(){
        	return{
            }
        },
        components:{
          ImagePlaceholder
        }
    }
</script>
<style lang='scss'>
.room {
  float: left;
  position: relative;
  display: block;
  margin: .13333333rem;
  width: 4.6rem;
  height: 3.28rem;
  color: #333;
    img {
	    position: absolute;
	    display: block;
	    top: 0;
	    left: 0;
	    width: 100%;
	    height: 2.61333333rem;
	    background-color: #000;
	    border-radius: .2rem;
		}
	.room-title {
		position: absolute;
    bottom: 0;
    left: .2rem;
    width: 4rem;
    color: #3a3a3a;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: .66666667rem;
	}
	.room-info {
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
    .room-name {
    	white-space: nowrap;
	    text-overflow: ellipsis;
	    overflow: hidden;
	    max-width: 2.746666666rem;
	    display: inline-block;
	    padding-left: .2rem;
    }
    .room-online {
    	float: right;
    	padding-right: .2rem;
    }
	}
}
  
</style>