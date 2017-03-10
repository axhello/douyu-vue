<template>
    <sidebar-header :icon="" :title=""></sidebar-header>
    <section class="content">
      <swipe class="my-swipe">
        <swipe-item class="silde" v-for="billboard in billboards | limitBy 10 6">
          <a v-link="{name: 'room', params: {id: billboard.room_id}}">
            <image-placeholder :src="billboard.room_src"></image-placeholder>
          </a>  
        </swipe-item>
      </swipe>
      <div class="m-row">
          <index-live :rooms="hotLiveRoom"></index-live>
          <more-button v-if="limit < 100" @click="getIndexLive">更多热门直播</more-button>
      </div>
    </section>
</template>
<script>
import Sidebar from '../../components/sidebar'
import SidebarHeader from '../../components/sidebar-header'
import IndexLive from './index-live'
import ImagePlaceholder from '../../components/image-placeholder'
import MoreButton from '../../components/more-button'
import { Swipe, SwipeItem } from 'vue-swipe'

  export default {
    data () {
      return {
        billboards: [],
        hotLiveRoom: [],
        limit: 0,  
      }
    },
    ready () {
      this.getIndexLive();
    },
    methods: {
      getIndexLive () {
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
      Sidebar,
      SidebarHeader,
      IndexLive,
      MoreButton,
      ImagePlaceholder,
      Swipe,
      SwipeItem
    }
  }
</script>
<style lang='scss'>
  .content, .live {
    margin-top: 45px;
  }
  .my-swipe{
    height: 5rem;
    overflow: hidden;
  }
  .silde img{
    width: 100%;
  }
  .m-row {
    position: relative;
    box-sizing: border-box;
    margin-top: .26666667rem;
    padding: 0 .13333333rem .13333333rem;
    width: 100%;
    font-size: 12px;
  }
</style>
