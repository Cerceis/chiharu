<template>
	<div class="grid ga-3 justify-center align-center">
		<div class="d-flex ga-3">
			<div>
				<Shogi
					v-for="shogi in shogiMap"
					:symbol="shogi?.label"
				/>
			</div>
			<div>
				<Shogi
					v-for="shogi in shogiMap"
					:symbol="shogi?.label"
					color="373737"
				/>
			</div>
		</div>
	</div>
</template>

<script setup lang=ts>
import Shogi from "@/components/game/Shogi.vue";
import { shogiMap } from "@/stores/shogiMap";

</script>
<style scoped>

</style>
