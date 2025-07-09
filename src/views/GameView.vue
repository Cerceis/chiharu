<template>
	<div class="page">

		<div class="main">
			<div class="left-panel">
				<button @click="handleDrawRequest">求和</button>
				<button @click="onSurrender">投降</button>
			</div>

			<div class="board">
				<Gameboard />
			</div>

			<div class="right-panel">
				<Header />
				<PlayerCard v-if="players" color="Black" :name="players?.Black.name" :time="displayTime.Black"
					:progress="getProgress('Black')" />
				<div style="margin: 12px 0;">
					<Graveyard />
				</div>
				<PlayerCard v-if="players" color="Red" :name="players?.Red.name" :time="displayTime.Red"
					:progress="getProgress('Red')" />
			</div>
		</div>
		<div v-if="controller && controller.winner" class="victory-banner">
			🎉 {{ controller.winner === 'Red' ? 'Red' : 'Black' }} Winner！
		</div>
	</div>
</template>

<script setup lang="ts">
import Header from '@/components/global/Header.vue';
import Gameboard from '@/components/game/Gameboard.vue';
import PlayerCard from '@/components/global/PlayerCard.vue';
import Graveyard from '@/components/game/Graveyard.vue';

import { onMounted } from 'vue';
import { initGame } from '@/logics/game';
import { displayTime, getProgress } from '@/logics/clock';
import { players, controller } from '@/stores/gameMap';
import { useRouter } from 'vue-router'
const onSurrender = () => {
	if (controller.value)
		controller.value.winner = controller.value.turn === 'Red' ? 'Black' : 'Red';
}
const router = useRouter()

const handleDrawRequest = () => {
  const confirmed = confirm('!!!!!agree?????')
  if (confirmed) {
    router.push('/beforegame') 
  }
}

onMounted(() => {
	initGame()
})
</script>

<style scoped>
.page {
	display: flex;
	flex-direction: column;
	height: 100vh;
	background-color: #0a0000;
}

.header {
	padding: 16px;
	background-color: #ffffff;
	border-bottom: 1px solid #ddd;
}

.main {
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
	gap: 40px;
	padding: 24px;
}

.left-panel,
.right-panel {
	display: flex;
	flex-direction: column;
	gap: 16px;
}

.left-panel button {
	padding: 10px 20px;
	font-size: 16px;
	background-color: #1976d2;
	color: white;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	transition: background-color 0.2s ease;
}

.left-panel button:hover {
	background-color: #1565c0;
}

.board {
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #ffffff;
	padding: 16px;
	border: 2px solid #ccc;
	border-radius: 12px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.victory-banner {
	position: fixed;
	top: 20%;
	left: 50%;
	transform: translateX(-50%);
	background-color: gold;
	color: black;
	font-size: 32px;
	font-weight: bold;
	padding: 20px 40px;
	border-radius: 12px;
	box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
	z-index: 10;
}
</style>
