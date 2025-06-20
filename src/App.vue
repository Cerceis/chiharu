<template>
	<v-app>
		<v-main class="appCon">
			<router-view />
		</v-main>
	</v-app>
</template>

<script setup lang="ts">
// TODO:
// BUG:
// WARNING:
// FIXME:
import Header from './components/global/Header.vue';
</script>

<style scoped>
.appCon{
	display: flex;
	flex-direction: column;
}
</style>
