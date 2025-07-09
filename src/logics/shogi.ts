import { type PlayerColor, type Shogi, type ShogiController, type ShogiType } from "@/types";
import { shogiMoveMap } from "@/stores/shogiMoveMap";
import { shogiEatMap } from "@/stores/shogiEatMap";
import { Generate } from "cerceis-lib";

export const shogiController: ShogiController = {
	new: (type: ShogiType, label: string, x: number, y: number,color:PlayerColor,shogiMoveId:string,shogiEatId:string) => {
		const tmpShogi: Shogi = {
			id: Generate.objectId(),
			label,
			type,
			x, y,
			color,
			moveFunc: shogiMoveMap[shogiMoveId],
			eatFunc:shogiEatMap[shogiEatId]

		}
		return tmpShogi;
	},
}


