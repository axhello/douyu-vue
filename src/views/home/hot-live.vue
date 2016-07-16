<template>
  <div class="grid">
    <index-item v-for="room in rooms" :room="room"></index-item>
  </div>
</template>
<style lang='scss'>
  .grid {
    width: 100%;
    display: flex;
    flex: 0 1 auto;
    flex-flow: row wrap;
    background-color: #eee;
  }
</style>

<script>
  import IndexItem from './index-item'

  export default{
    props:{
      rooms:{
        type:Array,
        required:true
      }
    },
    components:{
        IndexItem
      }
  }
</script>
