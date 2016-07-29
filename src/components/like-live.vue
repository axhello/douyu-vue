<template>
	<a v-link="{name: 'room', params: {id: like.room_id}}" class="live" data-fish="1">
    <img :src="like.room_src" class="live-feature">
    <div class="live-title">{{like.room_name}}</div>
    <div class="live-info">
      <span class="dy-name">{{like.nickname}}</span>
      <span class="popularity">{{like.online | fixed}}</span>
  	</div>
  </a>
</template>
<script>
export default {
	props:{
    like:{
      type:Object,
      required:true
    }
  },
  data(){
    return{}
  },
}
</script>