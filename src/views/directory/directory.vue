<template>
	<div class="grid">
    <directory-item v-for="room in rooms" :room="room"></directory-item>
  </div>
</template>

<script>
  import DirectoryItem from './directory-item'
  export default{
    props:{
      rooms:{
        type:Array,
        required:true
      }
    },
    data(){
      return {
      }
    },
    components: {
      DirectoryItem
    }
  }
</script>
