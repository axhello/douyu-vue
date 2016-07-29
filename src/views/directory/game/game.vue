<template>
	<detail-header :icon="'icon-arrow-left'" :title="title"></detail-header>
	<div class="room-detail">
		<game-item v-for="game in games" :game="game"></game-item>
	</div>
</template>
<script>
import DetailHeader from '../../../components/detail-header'
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
		DetailHeader,GameItem
	}
}
</script>