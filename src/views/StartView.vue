<template>
	<div class="text-h3 font-weight-bold grid justify-center align-center flex-grow-1">
		中国将棋
		<v-btn @click="$router.replace('/game')" >click</v-btn>
	</div>
</template>

<script setup lang=ts>
import { type ShogiLoc, ShogiLocSchema } from '@/types';

/*
const shogiLoc: ShogiLoc = {}
const myFunc = () => {
	ShogiLocSchema.safeParse().success
}
*/
</script>

