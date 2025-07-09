import type { Shogi, GameBoard } from "@/types";
import { selectedShogiEatList } from "./gameMap";
export const shogiEatMap: Record<string, (shogiA: Shogi, board: GameBoard) => { x: number, y: number }[]> = {
    cheEat: (shogiA: Shogi, board: GameBoard) => {
        if (!board) return [];
        const eats: { x: number, y: number }[] = []
        const dirs = [
            { dx: 1, dy: 0 },
            { dx: -1, dy: 0 },
            { dx: 0, dy: 1 },
            { dx: 0, dy: -1 }
        ];

        for (const { dx, dy } of dirs) {
            let x = shogiA.x + dx;
            let y = shogiA.y + dy
            while (
                x >= 0 && x < board[0].length &&
                y >= 0 && y < board.length
            ) {
                const target = board[y][x].shogi;
                if (target) {
                    if (target.color !== shogiA.color) {
                        eats.push({ x, y });
                    }
                    break;
                }
                x += dx;
                y += dy;
            }
        }


        return eats;
    },
    maEat: (shogiA: Shogi, board: GameBoard) => {
        const eats: { x: number, y: number }[] = []
        const jumps = [
            { dx: 1, dy: 2, blockX: 0, blockY: 1 },
            { dx: 2, dy: 1, blockX: 1, blockY: 0 },
            { dx: -1, dy: 2, blockX: 0, blockY: 1 },
            { dx: -2, dy: 1, blockX: -1, blockY: 0 },
            { dx: 1, dy: -2, blockX: 0, blockY: -1 },
            { dx: 2, dy: -1, blockX: 1, blockY: 0 },
            { dx: -1, dy: -2, blockX: 0, blockY: -1 },
            { dx: -2, dy: -1, blockX: -1, blockY: 0 }
        ]

        for (const { dx, dy, blockX, blockY } of jumps) {
            const bx = shogiA.x + blockX
            const by = shogiA.y + blockY
            let x = shogiA.x + dx
            let y = shogiA.y + dy
            if (
                bx < 0 || bx >= board[0].length ||
                by < 0 || by >= board.length ||
                x < 0 || x >= board[0].length ||
                y < 0 || y >= board.length
            ) continue
            if (board[by][bx].shogi) continue  // “蹩马腿”检查
            const target = board[y][x].shogi
            if (target && target.color !== shogiA.color) {

                eats.push({ x, y })
            }
        }
        // console.log("sdsdsds",selectedShogiEatList); test

        return eats
            ;

    },

    xiangEat: (shogiA: Shogi, board: GameBoard) => {
        const eats: { x: number, y: number }[] = []
        const dirs = [
            { dx: 2, dy: 2 },
            { dx: -2, dy: 2 },
            { dx: 2, dy: -2 },
            { dx: -2, dy: -2 }
        ]

        for (const { dx, dy } of dirs) {
            const midX = shogiA.x + dx / 2
            const midY = shogiA.y + dy / 2
            let x = shogiA.x + dx
            let y = shogiA.y + dy
            if (
                x < 0 || x >= board[0].length ||
                y < 0 || y >= board.length ||
                (shogiA.color === 'Red' && y < 5) ||
                (shogiA.color === 'Black' && y > 4)
            ) continue
            if (board[midY][midX].shogi) continue
            const target = board[y][x].shogi
            if (target && target.color !== shogiA.color) {
                eats.push({ x, y })
            }
        }
        console.log("sdsdsds", selectedShogiEatList)
        return eats
    },
    paoEat: (shogiA: Shogi, board: GameBoard) => {
        const eats: { x: number, y: number }[] = []
        const dirs = [
            { dx: 1, dy: 0 }, // right
            { dx: -1, dy: 0 }, // left        
            { dx: 0, dy: 1 }, // down
            { dx: 0, dy: -1 }, // up
        ]
        for (const { dx, dy } of dirs) {
            let x = shogiA.x + dx
            let y = shogiA.y + dy
            let shogiGap = false
            while (x >= 0 && x < board[0].length && y >= 0 && y < board.length) {
                const target = board[y][x].shogi
                if (!shogiGap) {
                    if (target) shogiGap = true
                }
                else {
                    // 已经隔过一个棋子，再遇到非己方棋子就能吃
                    if (target) {
                        if (target.color !== shogiA.color) eats.push({ x, y })
                        break // 吃完就不能再往前了
                    }
                }
                x += dx;
                y += dy;


            }

        }
        return eats
    },
    shiEat: (shogiA: Shogi, board: GameBoard) => {
        const eats: { x: number, y: number }[] = []
        const dirs = [
            { dx: 1, dy: 1 },
            { dx: 1, dy: -1 },
            { dx: -1, dy: 1 },
            { dx: -1, dy: -1 }
        ];

        const validArea = (x: number, y: number): boolean => {
            if (shogiA.color === 'Red') return x >= 3 && x <= 5 && y >= 7 && y <= 9;
            else return x >= 3 && x <= 5 && y >= 0 && y <= 2;
        };
        for (const { dx, dy } of dirs) {
            const x = shogiA.x + dx;
            const y = shogiA.y + dy;
            if (
                x >= 0 && x < 9 && y >= 0 && y < 10 &&
                validArea(x, y)
            ) {
                const target = board[y][x].shogi;
                if (target && target.color !== shogiA.color) {
                    eats.push({ x, y });
                }

            }

        }

        return eats;


    },
    bingEat: (shogiA: Shogi, board: GameBoard) => {
        const eats: { x: number, y: number }[] = []
        const forward = shogiA.color === 'Red' ? -1 : 1
        const y = shogiA.y + forward
        if (y >= 0 && y < board.length) {
            const target = board[y][shogiA.x].shogi
            if (target && target.color !== shogiA.color) {
                eats.push({ x: shogiA.x, y })
            }
        }
        const passedRiver = shogiA.color === 'Red' ? shogiA.y <= 4 : shogiA.y >= 5;
        if (passedRiver) {
            for (const dx of [-1, 1]) {
                const x = shogiA.x + dx
                if (x >= 0 && x < board[0].length) {
                    const target = board[shogiA.y][x].shogi
                    if (target && target.color !== shogiA.color) {
                        eats.push({ x, y: shogiA.y })
                    }
                }
            }
        }

        return eats

    },
    jiangEat: (shogiA: Shogi, board: GameBoard) => {
        const eats: { x: number, y: number }[] = []
        const dirs = [
            { dx: 1, dy: 0 },
            { dx: -1, dy: 0 },
            { dx: 0, dy: 1 },
            { dx: 0, dy: -1 }
        ];
        const isInPalace = (x: number, y: number, color: 'Red' | 'Black') => {
            if (color === 'Red') return x >= 3 && x <= 5 && y >= 7 && y <= 9;
            else return x >= 3 && x <= 5 && y >= 0 && y <= 2;
        };

        for (const { dx, dy } of dirs) {
            const x = shogiA.x + dx;
            const y = shogiA.y + dy;

            if (
                x >= 0 && x < board[0].length &&
                y >= 0 && y < board.length &&
                isInPalace(x, y, shogiA.color)
            ) {
                const target = board[y][x].shogi;
                if (target && target.color !== shogiA.color) {
                    eats.push({ x, y });
                }

            }
        }
        return eats
    }
}


//TODO: 象棋的胜负规则 turn  以及剩下的EatMap