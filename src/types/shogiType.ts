import { z } from "zod";

export const ShogiTypeSchema = z.enum([
	"che", "ma", "xiang", "shi", "jiang", "pao", "bing"
])
export type ShogiType = z.infer<typeof ShogiTypeSchema>;

export const ShogiLocSchema = z.object({
	x: z.number(),
	y: z.number(),
	// TODO: PlayerColor
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


export const ShogiSchema = z.object({
	id: z.string(),
	// TODO: PlayerColor
	type: ShogiTypeSchema,
	// TODO: move f
	// TODO: eat f
})

