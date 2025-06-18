import { z } from "zod";

export const ShogiLocSchema = z.object({
	x: z.number(),
	y: z.number(),
})
export type ShogiLoc = z.infer<typeof ShogiLocSchema>;

