<template>
	<a v-link="{name: 'room', params: {id: hot.room_id}}"  class="live" data-fish="1">
    <img :src="hot.room_src" class="live-feature">
    <div class="live-title">{{hot.room_name}}</div>
    <div class="live-info">
      <span class="dy-name">{{hot.nickname}}</span>
      <span class="popularity">{{hot.online | fixed}}</span>
    </div>
  </a>
</template>
<script>
export default {
	props:{
    hot:{
      type:Object,
      required:true
    }
  },
}
</script>