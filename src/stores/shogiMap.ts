import { type ShogiMap } from "@/types";

export const shogiMap: ShogiMap = {
	"ma": {
		label: "馬",
		shogiType: "ma",
		loc: [
			{ x: 1, y: 0, color: "Black" },
			{ x: 7, y: 0, color: "Black" },
			{ x: 1, y: 9, color: "Red" },
			{ x: 7, y: 9, color: "Red" },
		],
		shogiMoveId: "ma",
		shogiEatId: "maEat",
	},
	"che": {
		label: "車",
		shogiType: "che",
		loc: [
			{ x: 0, y: 0, color: "Black" },
			{ x: 8, y: 0, color: "Black" },
			{ x: 0, y: 9, color: "Red" },
			{ x: 8, y: 9, color: "Red" },
		],
		shogiMoveId: "cheAndPao",
		shogiEatId: "cheEat",
	},
	"xiang": {
		label: "象",
		shogiType: "xiang",
		loc: [
			{ x: 2, y: 0, color: "Black" },
			{ x: 6, y: 0, color: "Black" },
			{ x: 2, y: 9, color: "Red" },
			{ x: 6, y: 9, color: "Red" },
		],
		shogiMoveId: "xiang",
		shogiEatId: "xiangEat",
	},
	"shi": {
		label: "士",
		shogiType: "shi",
		loc: [
			{ x: 3, y: 0, color: "Black" },
			{ x: 5, y: 0, color: "Black" },
			{ x: 3, y: 9, color: "Red" },
			{ x: 5, y: 9, color: "Red" },

		],
		shogiMoveId: "shi",
		shogiEatId: "shiEat",
	},
	"jiang": {
		label: "将",
		shogiType: "jiang",
		loc: [
			{ x: 4, y: 0, color: "Black" },
			{ x: 4, y: 9, color: "Red" },
		],
		shogiMoveId: "jiang",
		shogiEatId: "jiangEat",
	},
	"pao": {
		label: "砲",
		shogiType: "pao",
		loc: [
			{ x: 1, y: 2, color: "Black" },
			{ x: 7, y: 2, color: "Black" },
			{ x: 1, y: 7, color: "Red" },
			{ x: 7, y: 7, color: "Red" },
		],
		shogiMoveId: "cheAndPao",
		shogiEatId: "paoEat",
	},
	"bing": {
		label: "兵",
		shogiType: "bing",
		loc: [
			{ x: 0, y: 3, color: "Black" },
			{ x: 2, y: 3, color: "Black" },
			{ x: 4, y: 3, color: "Black" },
			{ x: 6, y: 3, color: "Black" },
			{ x: 8, y: 3, color: "Black" },

			{ x: 0, y: 6, color: "Red" },
			{ x: 2, y: 6, color: "Red" },
			{ x: 4, y: 6, color: "Red" },
			{ x: 6, y: 6, color: "Red" },
			{ x: 8, y: 6, color: "Red" }
		],
		shogiMoveId: "bing",
		shogiEatId: "bingEat",
	},
} as const

