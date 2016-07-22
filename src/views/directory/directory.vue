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

<style lang='scss'>
  .grid {
    width: 100%;
    display: flex;
    flex: 0 1 auto;
    flex-flow: row wrap;
    background-color: #eee;
    a {
      display: flex;
      flex: 1 0 30%; /*flex-grow属性, flex-shrink属性 和 flex-basis属性*/
      flex-direction: column;
      height: 100px;
      align-items: center;
      justify-content: center;
      border-width: 0 1px 1px 0;
      border-style: dashed;
      border-color: #dedede;
      &:nth-of-type(3n+0) {
        border-right: 0;
      }
      img {
        border-radius: 50%;
        max-width: 42px;
        max-height: 42px;
        transition: opacity 1.2s ease;
        opacity: 1;
      }
      .title {
        color: #7E7E7E;
        margin: 0;
        text-align: center;
        font-size: 14px;
        padding: 5px 0 4px 6px;
        overflow: hidden;
        white-space: nowrap;
        word-break: break-all;
      }
    }
  }
</style>
