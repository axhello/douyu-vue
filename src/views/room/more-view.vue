<template>
  <sidebar-header :icon="" :title=""></sidebar-header>
  <div class="movie">
    <more-live-item v-for="morelive in morelives" :room="morelive"></more-live-item>
  </div>
</template>
<script>
  import SidebarHeader from '../../components/sidebar-header'
  import MoreLiveItem from './more-live-item'
  export default{
    data(){
      return {
        loading: false,
        morelives: [],
      }
    },
    ready() {
      this.getLive()
    },
    route: {
      data (transition) {
        const self = this
        if (transition.from.name === 'detail') {
          self.$nextTick(function () {
            window.document.body.scrollTop = window.sessionStorage.scrollTop
          })
        } else {
//          self.getLatest()
          window.document.body.scrollTop = 0
        }
        window.addEventListener('scroll', self.getScrollList, false)
        window.addEventListener('scroll', self.whatsTitle, false)
        transition.next()
      },
      deactivate (transition) {
        const self = this
        window.removeEventListener('scroll', self.getScrollList, false)
        window.removeEventListener('scroll', self.whatsTitle, false)
        window.sessionStorage.scrollTop = window.document.body.scrollTop
        transition.next()
      }
    },
    methods:{
      getLive () {
        const self = this
        self.loading = true
        let successCallback = (response) => {
          const data = response.data
          const json = data.data
          if (data.error === 0) {
            self.morelives = json
            self.loading = false
          }
        }
        let errorCallback = (json) => {
          console.log(json)
        }
        self.$http.get('/api/live').then(successCallback, errorCallback)
      },
      getMoreLive () {
        const self = this
        self.loading = true
        let successCallback = (response) => {
          const data = response.data
          const json = data.data
          if (data.error === 0) {
            self.morelives = json
            console.log(json);
            self.loading = false
          }
        }
        let errorCallback = (json) => {
          // console.log(json)
        }
        self.$http.get('/api/live?limit='+ limit).then(successCallback, errorCallback)
      },
      getScrollList () {
        const self = this
        const BOH = window.document.body.offsetHeight,
        BST = window.document.body.scrollTop,
        BSH = window.document.body.scrollHeight;
        if ((BOH + BST) + 100 > BSH && !self.loading) {
          self.getMoreLive()
        }
      },
    },
    components:{
      SidebarHeader,MoreLiveItem
    }
  }
</script>
<style lang='scss'>
  .film-view{
    .film-list-wrap {
      padding-left: 15px;
      padding-right: 15px;
      background-color: #f9f9f9;
      width: 100%;
      position: absolute;
      min-height: 100%;
    }
    .film-list-nav {
      height: 46px;
      margin: 0 auto;
      border-bottom: solid #fe6e00 1px;
      .now-playing,.coming-soon {
        float: left;
        width: 25%;
        height: 100%;
        text-align: center;
        font-size: 16px;
        line-height: 46px;
        color: #6a6a6a;
        cursor: pointer;
      }
      .choosing {
        color: #fe6e00;
        border-bottom: solid;
      }
    }
  }
</style>
