<template>
	<div id="app">
<!--		<transition name="slide">-->
			<router-view></router-view>
<!--		</transition>-->
		<tab-bar></tab-bar>
	</div>
</template>

<script>
	import TabBar from "./components/tabBar/TabBar";

	export default {
		name: 'app',
		components: {
			TabBar
		}
	}
</script>

<style>
	@import "assets/css/base.css";

	.slide-enter-active,
	.slide-leave-active {

		transition: all 500ms;
		position: absolute;
	}

	.slide-enter {		
		transform: translateX(100%);
	}

	.slide-leave-active {
			transform: translateX(-100%);
			opacity: 0;
	}
</style>
