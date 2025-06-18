<template>
	<v-app>
		<v-main class="appCon">
			<router-view />
		</v-main>
	</v-app>
	<creatnewfile />
</template>

<script setup lang="ts">
</script>

<style scoped>
.appCon{
	display: flex;
	flex-direction: column;
}
</style>
