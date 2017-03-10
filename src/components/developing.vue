<template>
	<sidebar-header :icon="" :title=""></sidebar-header>
	<section class="developing">
		<h3>该页面正在开发中。。。</h3>
	</section>
</template>
<script>
import SidebarHeader from './sidebar-header.vue'
export default {
	components: {
		SidebarHeader
	}
}
</script>
<style lang='scss'>
	.developing {
		margin: 4em auto;
		text-align: center;
	}
</style>