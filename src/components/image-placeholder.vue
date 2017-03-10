<template>
  <img class="preview" :src="src" v-on:load="loaded" style="transition: opacity 1.2s ease;" :style="{'opacity':ready ? 1 : 0}">
</template> 
<script>
	export default {
		data () {
      return {
        ready:false
      }
		},
		methods:{
      loaded () {
        const self = this
        setTimeout (function () {
          self.ready = true
        }, 100)
      }
		},
		props:{
      src:{
				type:String,
				required:true
			},
      placeholder:{
        type:String
      }
		}
	}
</script>
