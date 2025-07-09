import { type Ref, ref } from "vue"
import type { GameBoard, GameController, Players, Shogi } from "@/types"
//Gameboard,Header.vue  global
export const board: Ref<GameBoard | null> = ref(null)
export const controller: Ref<GameController | null> = ref(null)
export const players: Ref<Players | null> = ref(null)
export const selectedShogi: Ref<Shogi | null> = ref(null);
export const selectedShogiMoveList: Ref<{ x: number, y: number }[]> = ref([]);
export const selectedShogiEatList: Ref<{ x: number, y: number }[]> = ref([]);
export const graveyardRed: Ref<Shogi[]> = ref([])
export const graveyardBlack: Ref<Shogi[]> = ref([])