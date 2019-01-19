<template>
  <div class="m-row">
    <div class="title">
      <svg-icon icon-class="tv" />
      <span>{{ cateName }}</span>
      <strong>{{ gameName }}</strong>
    </div>
    <div class="live-list clearfix">
      <router-link
        v-for="(roomlist, index) in roomlists"
        :key="index"
        :to="{name: 'detail', params: {id: roomlist.rid}}"
        class="live">
        <img class="live-feature" :src="roomlist.roomSrc">
        <div class="live-title">
          {{ roomlist.roomName }}
        </div>
        <div class="live-info">
          <span class="dy-name">
            {{ roomlist.nickname }}
          </span>
          <span class="popularity">
            {{ roomlist.hn }}
          </span>
        </div>
      </router-link>
    </div>
    <v-more-button>
      <div v-if="!hidden" class="more-button">
        <div v-show="!loading" @click="loadMore">
          加载更多
        </div>
        <div v-show="loading" class="ball-pulse">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </v-more-button>
  </div>
</template>
<script>
import VMoreButton from '@/components/v-more-button'
import { rooms } from '@/api/mobile'
export default {
  name: 'Rooms',
  components: {
    VMoreButton
  },
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    roomlists: [],
    params: {
      name: '',
      page: 1
    },
    hidden: false,
    loading: false,
    cateName: '',
    gameName: ''
  }),
  created() {
    this.fetchData()
  },
  mounted() {
    this.cateName = this.$cookie.get('cateName')
    this.gameName = this.$cookie.get('gameName')
  },
  methods: {
    fetchData() {
      rooms({ page: this.params.page, type: this.name }).then(response => {
        this.loading = false
        this.roomlists = response.data.list
      })
    },
    loadMore() {
      this.loading = true
      this.params.page = ++this.params.page
      this.fetchData()
    }
  }
}
</script>
<style lang="scss" scoped>
.m-row {
  .play-icon {
    width: 0.3999999rem;
    height: 0.3999999rem;
    vertical-align: sub;
  }
  .title {
    font-size: 12px;
    margin-left: 10px;
    line-height: 0.8333333rem;
    strong {
      margin-left: 4px;
      color: #fa7122;
    }
  }
}
.live-list {
  .live {
    float: left;
    position: relative;
    display: block;
    margin: 0.13333333rem;
    width: 4.6rem;
    height: 3.28rem;
    color: #333;
    font-size: 12px;
    .live-feature {
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      width: 100%;
      height: 2.61333333rem;
      background-color: #000;
      border-radius: 0.2rem;
    }
    .live-title {
      position: absolute;
      bottom: 0;
      left: 0.2rem;
      width: 4rem;
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      line-height: 0.66666667rem;
    }
    .live-info {
      position: absolute;
      bottom: 0.66666667rem;
      left: 0;
      width: 100%;
      color: #fff;
      /*padding: .1rem 0;*/
      border-bottom-left-radius: 0.2rem;
      border-bottom-right-radius: 0.2rem;
      background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 30%, rgba(0, 0, 0, 0.8) 100%);
      .dy-name {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        max-width: 2.746666666rem;
        display: inline-block;
        padding-left: 0.2rem;
      }
      .popularity {
        float: right;
        padding-right: 0.2rem;
      }
    }
  }
}
</style>
