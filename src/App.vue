<template>
  <div class="main">
    <v-navbar @open="openSidebar" />
    <div class="view">
      <router-view />
    </div>
    <v-sidebar
      :categories="categories"
      :nav-status="LeftNavStatus"
      @close="closeSidebar" />
  </div>
</template>

<script>
import VSidebar from '@/components/v-sidebar'
import VNavbar from '@/components/v-navbar'
import { category } from '@/api/mobile'
export default {
  name: 'App',
  components: {
    VSidebar,
    VNavbar
  },
  data() {
    return {
      LeftNavStatus: false,
      categories: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      category({ type: '' }).then(response => {
        console.log(response.data)
        this.categories = response.data.cate1Info
      })
    },
    openSidebar() {
      this.LeftNavStatus = true
    },
    closeSidebar() {
      this.LeftNavStatus = false
    }
  }
}
</script>

<style lang="scss">
body.slide-overflow {
  overflow: hidden;
}
.view {
  margin-top: 1.233rem;
}
html body {
  line-height: 1.5;
  font-family: 'Helvetica Neue', 'Arial', 'PingFang SC', 'Hiragino Sans GB', 'STHeiti',
    'Microsoft YaHei', 'WenQuanYi Micro Hei', sans-serif;
  color: #333;
  background-color: #f4f4f4;
}
* {
  box-sizing: border-box;
}
.clearfix {
  &:before,
  &:after {
    content: ' ';
    display: table;
  }
  &:after {
    clear: both;
  }
}
</style>
