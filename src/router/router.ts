import { createMemoryHistory, createRouter } from 'vue-router'

import StartView from '@/views/StartView.vue';
import GameView from "@/views/GameView.vue";
import OverView from "@/views/OverView.vue";
import TestView from "@/views/TestView.vue";
import BeforeStartGameView from '@/views/BeforeStartGameView.vue';

const routes = [
	{ path: '/', component: StartView },
	{ path: '/beforeGame', component: BeforeStartGameView },
	{ path: '/game', component: GameView },
	{ path: '/over', component: OverView },
	{ path: '/test', component: TestView },
]

const router = createRouter({
	history: createMemoryHistory(),
	routes,
})

export default router
