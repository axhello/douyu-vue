<template>
  <nav id="toolbar">
    <h1>
      <a @click="goBack">
        <div class="toolbar-title-icon">
          <i class="icon" :class="icon"></i>
        </div>
      </a>
      <a v-link="{ path: '/' }">
        <div class="toolbar-title">
          {{title}}
        </div>
      </a>
    </h1>
    <div id="nav-right"></div>
  </nav>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'icon-three-bars',
    },
    title: {
      type: String,
      default: '斗鱼TV',
    }
  },
  methods: {
    goBack () {
      window.history.back()
    },
    showNav () {
      this.$dispatch('showNav');
    }
  }
}
</script>