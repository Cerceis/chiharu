import { z } from "zod";

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

export const ShogiSchema = z.object({
	id: z.string(),
	// TODO: PlayerColor
	type: ShogiTypeSchema,
	x: z.number(),
	y: z.number(),
	// TODO: move
	// TODO: eat
})
export type Shogi = z.infer<typeof ShogiSchema>;

// Shogiのmain コントローラー
// Shogiのアクションはほとんどここから呼び起こす
export type ShogiController = {
	new: (type: ShogiType, x: number, y: number) => Shogi,
	move: (shogi: Shogi) => void, //TODO: Add GameBoard to param; WARN: Might not need, move to GameController
	eat: (shogi: Shogi) => void, // TODO: Add GameBoard to param; WARN: Might not need, move to GameController
}


