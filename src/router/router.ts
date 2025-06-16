import { createMemoryHistory, createRouter } from 'vue-router'

import TopPageView from '@/views/TopPageView.vue'

const routes = [
	{ path: '/', component: TopPageView },
]

const router = createRouter({
	history: createMemoryHistory(),
	routes,
})

export default router
