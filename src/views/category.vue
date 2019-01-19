<template>
  <div class="n-list clearfix">
    <a
      v-for="(catelist, index) in catelists"
      :key="index"
      class="n-list-item"
      @click="rooms(catelist)">
      <img class="live-feature" :src="catelist.icon">
      <p class="title">
        {{ catelist.cate2Name }}
      </p>
    </a>
  </div>
</template>

<script>
import { category } from '@/api/mobile'
export default {
  name: 'Category',
  data() {
    return {
      catelists: []
    }
  },
  watch: {
    '$route.params.id'() {
      this.fetchData()
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      category({ type: '' }).then(response => {
        console.log(response.data)
        const cate1Id = this.$route.params.id
        const cate2Info = response.data.cate2Info
        const result = cate2Info.filter(cate2 => cate2.cate1Id === cate1Id)
        this.catelists = result
      })
    },
    rooms(catelist) {
      this.$cookie.set('gameName', catelist.cate2Name)
      this.$router.push({
        name: 'rooms',
        params: { name: catelist.shortName }
      })
    }
  }
}
</script>

<style lang="scss">
.n-list {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: #f4f4f4;
  z-index: 4;
  .n-list-item {
    margin: 0;
    padding: 0;
    float: left;
    width: 3.3rem;
    height: 3.3rem;
    border-right: 1px dashed #ddd;
    border-bottom: 1px dashed #ddd;
    text-align: center;
    font-size: 0.32rem;
    color: #000;
    margin-left: 1px;
    &:nth-child(3n) {
      border-right: none;
    }
    img {
      margin-top: 0.66666666rem;
      margin-bottom: 0.133333333rem;
      width: 1.62666666rem;
      height: 1.62666666rem;
      border-radius: 0.8133333rem;
    }
  }
}
</style>
