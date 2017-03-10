<template>
  <sidebar-header :icon="" :title="'全部分类'"></sidebar-header>
	<div class="live">
		<directory :rooms="directoryRoom"></directory>
	</div>
</template>
<script>
import SidebarHeader from '../../components/sidebar-header'
import Directory from './directory'
export default {
	  data() {
      return {
        directoryRoom:[],
      }
    },
    ready(){
       this.getAllDirectory()
    },
    methods: {
    	getAllDirectory () {
    	  const self = this
        let successCallback = (response) => {
          const data = response.data
          const json = data.data
          if (data.error === 0) {
            self.directoryRoom = json
          }
        }
        let errorCallback = (json) => {
          // console.log(json)
        }
        self.$http.get('/api/game').then(successCallback, errorCallback)
    	}
    },
    components: {
      SidebarHeader,
      Directory
    }
}
</script>