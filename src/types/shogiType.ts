import { z } from "zod";

export const PlayerColorSchema = z.enum(["Red", "Black"]);//shogi color zod
export type PlayerColor = z.infer<typeof PlayerColorSchema>;
//shogi color
export const ShogiLocSchema = z.object({
	x: z.number(),
	y: z.number(),
	color: PlayerColorSchema,
}) //shogi location
export type ShogiLoc = z.infer<typeof ShogiLocSchema>;

/*
export type ShogiLoc = {
	x: number,
	y: numer
}

const shogi: ShogiLoc = {
	x: 2,
	y: 6,
}
ShogiLocSchema.safeParse(shogi).success

if(!ShogiLocSchema.safeParse(shogi).success) return

if(isNaN(shogi.x) || isNaN(shogi.y) || shogi.x || shogi.y)



apple "2"
<input v-model="test" />

const TestSchema = z.string();
type Test = infer<typeof TestSchema>
const test: Ref<Test> = ref("")

const myFunc = (a: string) => {
	if(!TestSchema.safeParse.success) return

	logic.....
}

myFunc(test.value);
*/



