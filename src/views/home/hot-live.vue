<template>
  <div class="room-list clearfix">
    <index-item v-for="room in rooms" :room="room"></index-item>
  </div>
</template>
<style lang='scss'>
  @mixin clearfix() {
    &:before,
    &:after {
      content: " ";
      display: table;
    }
    &:after {
      clear: both;
    }
  }
  .clearfix {
    @include clearfix()
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
