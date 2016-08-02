<template>
	<room-header :icon="'icon-arrow-left'" :title="title"></room-header>
	<div class="room-detail">
		<game-item v-for="game in games" :game="game"></game-item>
	</div>
</template>
<script>
import RoomHeader from '../../../components/room-header'
import GameItem from './game-item'
export default {
	props:{
      games:{
        type:Array,
        required:true
      }
    },
    data() {
    	return {
    		title: ''
    	}
    },
    events: {
	    'header-title': function (title) {
	      this.title = title
	    }
  	},
	components: {
		RoomHeader,GameItem
	}
}
</script>