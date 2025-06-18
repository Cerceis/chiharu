/// <reference types="vite/client" />
import { ComponentCustomProperties } from "vue";
import { RouteLocationNormalizedLoaded } from "vue-router";

declare module "*.vue" {
	import type { DefineComponent } from "vue";
	const component: DefineComponent<{}, {}, any>;
	export default component;
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $router: Router
    $route: RouteLocationNormalizedLoaded
  }
}
