<template>
	<div>
		<div>
			<div class="header">
				<Header />
			</div>
			<div class="boardCon">
				<div class="board"><Gameboard /></div>
				<div class="Graveyard">
					<div class="graveyard-red">上方吃子处(被吃的红子)</div>
					<div class="graveyard-black">下方吃子处(被吃的黑子)</div>
					<div>
						<button>悔棋</button>
						<button>求和</button>
						<button>投降</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import Gameboard from '@/components/game/Gameboard.vue';
import Header from '@/components/global/Header.vue';

</script>

<style scoped>
.boardCon{
	display: grid;
	place-items: center;
}
</style>
