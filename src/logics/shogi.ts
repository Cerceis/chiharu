import { type Shogi, type ShogiController, type ShogiType } from "@/types";


export const shogi: ShogiController = {
	new: (type: ShogiType, x: number, y: number) => {
		const tmpShogi: Shogi = {
			id: "1123",
			type,
			x, y
		}
		return tmpShogi;
	},
	move: (shogi: Shogi) => {}, // WARN: ShogiController
	eat: (shogi: Shogi) => {}, // WARN: ShogiController
}
