<template>
	<section class="detail">
		<game :games="GameFilms"></game>
	</section>
</template>
<script>
import Game from './game'
export default {
	  data () {
      return {
        GameFilms: [],
        limit: 100,
        offset: 0,
      }
    },
    ready () {
       this.getGameFilms(this.$route.params.id, this.limit)
    },
    methods: {
    	getGameFilms (name, limit=30, offset=0) {
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
        let apiUrl = '/api/live/'+name+'?limit='+limit+'&offset='+offset+''
        self.$http.get(apiUrl).then(successCallback, errorCallback)
    	},
    },
    components: {
      Game
    }
}
</script>
<style lang='scss'>
  .detail {
    margin-top: 62px;
  }
</style>