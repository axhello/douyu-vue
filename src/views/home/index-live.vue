<template>
  <div class="room-list clearfix">
    <index-live-item v-for="room in rooms" :room="room"></index-live-item>
  </div>
</template>
<style lang='scss'>
  @mixin clearfix() {
    &:before,
    &:after {
      content: "";
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
  import IndexLiveItem from './index-live-item'

  export default{
    props:{
      rooms:{
        type:Array,
        required:true
      }
    },
    components:{
        IndexLiveItem
      }
  }
</script>
