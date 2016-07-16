<template>
	<div class="room" v-link="{name: 'room', params: {id: room.room_id}}">
        <a class="preview" href="#" title="">
            <image-placeholder :src="room.room_src"></image-placeholder>
            <div class="x">
                <span class="x1">{{room.nickname}}</span>
                <span class="x2"><i class="icon icon-users"></i> {{room.online | fixed}}</span>
            </div>
        	<p class="rname"><i class="icon icon-ondemand_video"></i> {{room.room_name}}</p>
        </a>
    </div>
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
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  margin-top: .6rem;
    img {
	    width: 10pc;
	    height: 6pc;
	    border-radius: 7px;
	}
  .preview {
	display: block;
	overflow: hidden;
	text-align: center;
	transition: .2s all linear;
	box-sizing: border-box;
	position: relative;
	.rname {
	   color: #7E7E7E;
	   margin: 0;
	   width: 160px;
	   font-size: 12px;
	   padding: 5px 0 4px 6px;
	   overflow: hidden;
	   text-overflow: ellipsis;
	   white-space: nowrap;
	   word-break: break-all;
	}
	.x {
		overflow: hidden;
		position: absolute;
		z-index: 4;
		bottom: 22px;
		right: 0;
		height: 20px;
		width: 160px;
		line-height: 20px;
		transition: .2s;
		border-top-left-radius: 4px;
	}
  }
}
.x {
   .x1 {
	float: left;
	text-align: left;
	width: 80px;
	color: #fff;
	font-size: 12px;
	margin: 0 5px 0 5px;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}
.x2 {
	float: right;
	color: #fff;
	font-size: 12px;
	margin: 0 5px 0 5px;
  }
}
</style>