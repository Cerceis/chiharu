import { createMemoryHistory, createRouter } from 'vue-router'

import StartView from '@/views/StartView.vue';
import GameView from "@/views/GameView.vue";
import OverView from "@/views/OverView.vue";

const routes = [
	{ path: '/', component: StartView },
	{ path: '/game', component: GameView },
	{ path: '/over', component: OverView },
]

const router = createRouter({
	history: createMemoryHistory(),
	routes,
})

export default router
