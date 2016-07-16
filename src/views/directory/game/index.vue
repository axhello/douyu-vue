<template>
	<section class="content">
		<game :games="GameFilms"></game>
	</section>
</template>
<script>
import Game from './game'
export default {
	data() {
      return {
        GameFilms:[],
      }
    },
    ready(){
       this.getGameFilms(this.$route.params.id)
    },
    methods: {
    	getGameFilms(id) {
    	const self = this
        let successCallback = (response) => {
        const data = response.data
        const json = data.data
        if (data.error === 0) {
            self.GameFilms = json
          }
        }
        let errorCallback = (json) => {
          //console.log(json)
        }
        self.$http.get('/api/live/'+id).then(successCallback, errorCallback)
    	}
    },
    components: {
       Game
    }
}
</script>