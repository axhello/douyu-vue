<template>
    <sidebar-header :icon="" :title=""></sidebar-header>
    <section class="content" >
      <swipe class="my-swipe">
        <swipe-item class="silde" v-for="billboard in billboards | limitBy 10 6">
          <a v-link="{name: 'room', params: {id: billboard.room_id}}">
            <image-placeholder :src="billboard.room_src"></image-placeholder>
          </a>  
        </swipe-item>
      </swipe>
      <div class="movie">
          <hot-live :rooms="hotLiveRoom"></hot-live>
          <div v-if="limit < 100" class="more-button" @click="getHotLive">更多热门直播</div>
          <!-- <more-button v-else v-link="{path:'/more'}">全部直播</more-button> -->
      </div>
    </section>
</template>
<script>
import Sidebar from '../../components/sidebar'
import SidebarHeader from '../../components/sidebar-header'
import HotLive from './hot-live'
import ImagePlaceholder from '../../components/image-placeholder'
import MoreButton from '../../components/more-button'
import { Swipe, SwipeItem } from 'vue-swipe'
require('vue-swipe/dist/vue-swipe.css')

  export default{
    data () {
      return {
        billboards:[],
        hotLiveRoom:[],
        limit: 0,  
      }
    },
    ready () {
      this.getHotLive();
    },
    methods: {
      getHotLive () {
        const self = this
        self.limit = self.limit + 20
        if (self.limit > 100) {return false}
        let successCallback = (response) => {
          const data = response.data
          const json = data.data
          if (data.error === 0) {
            self.billboards = json
            self.hotLiveRoom = json
          }
        }
        let errorCallback = (json) => {
          console.log(json)
        }
        self.$http.get('/api/live?limit=' + self.limit).then(successCallback, errorCallback)
      },
    },
    components: {
      Sidebar,SidebarHeader,HotLive,MoreButton,ImagePlaceholder,Swipe,SwipeItem,
    }
  }
</script>
<style lang='scss'>
  .my-swipe{
    height: 5.3rem;
    color: #ffffff;
    font-size: 30px;
    text-align: center;
    overflow: hidden;
  }
  .silde img{
    width: 100%;
  }
  .movie ul{
    padding-top: 18px;
  }
</style>
