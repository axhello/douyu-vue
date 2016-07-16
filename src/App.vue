<template>
    <div class="main">
      <div class="application-view">
        <router-view></router-view>
      </div>
      <sidebar :show.sync="show"></sidebar>
    </div>
</template>

<script>
import Sidebar from './components/sidebar'

export default {
  data(){
    return {
      show:false
    }
  },
  components: {
    Sidebar
  },
  events: {
    'showNav':function(){
      this.show=true;
    }
  }
}
</script>

<style lnag='scss'>
@import './assets/styles/icon.css';
@import './assets/styles/reset.css';
.application-view{
  padding: 50px 0 0;
}
body{
  background-color: #ebebeb;
}
*{
  box-sizing: border-box;
}
img{
  width: 100%; 
  transition: all 1.2s ease; 
  opacity: 1;
}
</style>
