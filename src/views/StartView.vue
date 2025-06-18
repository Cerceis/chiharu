<template>
	<video autoplay muted loop playsinline class="videoBg">
		<source :src="bgVideo"></source>
	</video>
	<div class="container">
		<div class="pa-3 rounded text-h3 font-weight-bold grid justify-center align-center ga-6">
			<div>
				中国将棋
			</div>
			<v-btn color="primary" @click="$router.replace('/')" >スタート</v-btn>
		</div>
	</div>
</template>

<script setup lang=ts>
import bgVideo from "@/assets/video/bg-video.mp4";
</script>

<style scoped>
.container{
	display: grid;
	width: 100%;
	height: 100%;
	z-index: 1;
	place-items: center;
	background-color: rgba(0,0,0,.6);
}
.videoBg{
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 0;
}
</style>
