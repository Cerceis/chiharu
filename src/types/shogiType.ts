import { z } from "zod";
import { PlayerColorSchema, type GameBoard, type PlayerColor } from "./gameTypes";
import type { number } from "zod/v4";
export const ShogiTypeSchema = z.enum([
	"che", "ma", "xiang", "shi", "jiang", "pao", "bing", "chi"
])
export type ShogiType = z.infer<typeof ShogiTypeSchema>;

export const ShogiLocSchema = z.object({
	x: z.number(),
	y: z.number(),
	color: PlayerColorSchema
})

export type ShogiLoc = z.infer<typeof ShogiLocSchema>;

export const ShogiTemplateSchema = z.object({
	label: z.string(),
	shogiType: ShogiTypeSchema,
	loc: z.array(ShogiLocSchema),
	shogiMoveId: z.string(),
	shogiEatId: z.string(),
});
export type ShogiTemplate = z.infer<typeof ShogiTemplateSchema>;

export const ShogiMapSchema = z.record(ShogiTypeSchema, ShogiTemplateSchema);
export type ShogiMap = z.infer<typeof ShogiMapSchema>;

export const ShogiWithoutFuncSchema = z.object({
	id: z.string(),
	color:PlayerColorSchema,
	type: ShogiTypeSchema,
	label: z.string(),
	x: z.number(),
	y: z.number(),
})
export type ShogiWithoutFunc = z.infer<typeof ShogiWithoutFuncSchema>;
export type Shogi = ShogiWithoutFunc & {
	moveFunc: (shogi:Shogi, board: GameBoard) => {x: number, y: number}[],
	eatFunc: (shogi:Shogi, board: GameBoard) => {x: number, y: number}[],
}

// Shogiのmain コントローラー
// Shogiのアクションはほとんどここから呼び起こす
export type ShogiController = {
	new: (type: ShogiType, label: string, x: number, y: number,color:PlayerColor,shogiMoveId:string,shogiEatId:string) => Shogi,
}


