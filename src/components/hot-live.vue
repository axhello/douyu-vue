<template>
	<a :href="'#!/room/'+hot.room_id"  class="live" @click="refresh">
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
  methods: {
  	refresh () {
    	window.location.reload()
    }
  }
}
</script>