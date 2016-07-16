<template>
	<div class="list-block" v-link="{name: 'room', params: {id: room.room_id}}">
      <image-placeholder :src="room.room_src"></image-placeholder>
      <div class="column">
        <p class="rtitle">{{room.room_name}}</p>
        <p class="up"><i class="icon icon-user"></i> {{room.nickname}}</p>
        <p class="prev"><i class="icon icon-users"></i> {{room.online | fixed}}</p>
      </div>
    </div>
</template>
<script>
import ImagePlaceholder from '../../components/image-placeholder'
export default {
  props:{
    room:{
      type:Object,
      required:true
    }
  },
  components: {
  	ImagePlaceholder
  }
}
</script>