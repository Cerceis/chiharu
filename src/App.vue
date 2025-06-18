<template>
	<v-app>
		<v-main class="appCon">
			<router-view />
		</v-main>
	</v-app>
	<creatnewfile />
</template>

<script setup lang="ts">
// TODO:
// BUG:
// WARNING:
// FIXME:
import creatnewfile from '@/creatnewfile.vue';
</script>

<style scoped>
.appCon{
	display: flex;
	flex-direction: column;
}
</style>
