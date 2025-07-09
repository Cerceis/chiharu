
import type { Shogi, GameBoard } from "@/types";
export const shogiMoveMap: Record<string, (shogiA: Shogi, board: GameBoard) => { x: number, y: number }[]> = {
    cheAndPao: (shogiA: Shogi, board: GameBoard) => {
        if (!board) return [];

        const moves: { x: number, y: number }[] = [];
        const dirs = [
            { dx: 1, dy: 0 }, // right
            { dx: -1, dy: 0 }, // left        
            { dx: 0, dy: 1 }, // down
            { dx: 0, dy: -1 }, // up
        ]
        for (const { dx, dy } of dirs) {
            let x = shogiA.x + dx;
            let y = shogiA.y + dy;
            while (x >= 0 && x < board[0].length && y >= 0 && y < board.length) {
                const target = board[y][x].shogi;
                if (target === null) {
                    moves.push({ x, y });
                    // cannot move further in this direction
                }
                if (target !== null)
                    break;
                x += dx;
                y += dy;
            }
        }
        return moves;
    },

    ma: (shogiA: Shogi, board: GameBoard) => {
        const moves: { x: number, y: number }[] = [];
        const legs = [
            { x: 0, y: 1, blockX: 0, blockY: 1 },
            { x: 0, y: -1, blockX: 0, blockY: -1 },
            { x: 1, y: 0, blockX: 1, blockY: 0 },
            { x: -1, y: 0, blockX: -1, blockY: 0 }
        ];
        const jumps = [
            { dx: 1, dy: 2, blockX: 0, blockY: 1 },
            { dx: -1, dy: 2, blockX: 0, blockY: 1 },
            { dx: 1, dy: -2, blockX: 0, blockY: -1 },
            { dx: -1, dy: -2, blockX: 0, blockY: -1 },
            { dx: 2, dy: 1, blockX: 1, blockY: 0 },
            { dx: 2, dy: -1, blockX: 1, blockY: 0 },
            { dx: -2, dy: 1, blockX: -1, blockY: 0 },
            { dx: -2, dy: -1, blockX: -1, blockY: 0 }
        ];
        for (const { dx, dy, blockX, blockY } of jumps) {
            const bx = shogiA.x + blockX;
            const by = shogiA.y + blockY;
            let x = shogiA.x + dx
            let y = shogiA.y + dy

            if (
                x >= 0 && x < board[0].length &&
                y >= 0 && y < board.length &&
                board[by]?.[bx]?.shogi === null // 没有蹩马脚
            ) {
                const target = board[y][x].shogi;
                if (!target) {
                    moves.push({ x, y });
                }
            }
        }
        return moves;
    },
    xiang: (shogiA: Shogi, board: GameBoard) => {
        const moves: { x: number, y: number }[] = [];
        const dirs = [
            { dx: 2, dy: 2 },
            { dx: -2, dy: 2 },
            { dx: 2, dy: -2 },
            { dx: -2, dy: -2 }
        ];


        for (const { dx, dy } of dirs) {
            const midX = shogiA.x + dx / 2;
            const midY = shogiA.y + dy / 2;
            const x = shogiA.x + dx;
            const y = shogiA.y + dy;
            const allowed = shogiA.color === 'Red'
                ? (y >= 5)    
                : (y <= 4);   
            if (!allowed) continue;
            if (
                x >= 0 && x < board[0].length &&
                y >= 0 && y < board.length &&
                board[midY]?.[midX]?.shogi === null
            ) {
                const target = board[y][x].shogi;
                if (!target) {
                    moves.push({ x, y });
                }
            }
        }
        return moves;
    },
    shi: (shogiA: Shogi, board: GameBoard) => {
        const moves: { x: number, y: number }[] = [];
        const dirs = [
            { dx: 1, dy: 1 },
            { dx: -1, dy: 1 },
            { dx: 1, dy: -1 },
            { dx: -1, dy: -1 }
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
                if (!target) {
                    moves.push({ x, y });
                }
            }
        }
        return moves;
    },
    jiang: (shogiA: Shogi, board: GameBoard) => {
        const moves: { x: number, y: number }[] = [];
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
                if (!target) {
                    moves.push({ x, y });
                }
            }
        }
        return moves;
    },

    bing: (shogiA: Shogi, board: GameBoard) => {
        const moves: { x: number, y: number }[] = [];
        const forward = shogiA.color === 'Red' ? -1 : 1;
        const y = shogiA.y + forward;

        if (y >= 0 && y < board.length) {
            const target = board[y][shogiA.x].shogi;
            if (!target) {
                moves.push({ x: shogiA.x, y });
            }
        }

        const passedRiver = shogiA.color === 'Red' ? shogiA.y <= 4 : shogiA.y >= 5;
        if (passedRiver) {
            for (const dx of [-1, 1]) {
                const x = shogiA.x + dx;
                if (x >= 0 && x < board[0].length) {
                    const target = board[shogiA.y][x].shogi;
                    if (!target) {
                        moves.push({ x, y: shogiA.y });
                    }
                }
            }
        }

        return moves;
    }
};

