<template>
	<div class="feed_back">
		<tab-bar title='反馈' 	:back-show="true"></tab-bar>
		<container>
			<feed-back-form></feed-back-form>
		</container>
	</div>
</template>

<script>
	import TabBar from '../components/TopBar.vue'
	import Container from "../components/Container";
	import FeedBackForm from "../components/FeedBackForm";
	export default {
		name: "FeedBack",
		components: {
			FeedBackForm,
			Container,
			TabBar
		}
	}
</script>

<style scoped>
	.feed_back {
		z-index: 999;
		width: 100vw;
		height: 100vh;
		position: relative;
		background-color: white;
	}
</style>
