import { z } from "zod";
import { PlayerColorSchema } from "@/types";

//board
export const DotSchema = z.object({
    x: z.number(),
    y: z.number(),
    shogiId: z.string().nullable()
});
export type Dot = z.infer<typeof DotSchema>;
export type GameBoard = Dot[][];

export const generateEmptyBoard = (): GameBoard =>
    Array.from({ length: 10 }, (_, y) =>
        Array.from({ length: 9 }, (_, x) => ({
            x,
            y,
            shogiId: null
        }))
    );

//GameController
export const PlayerSchema = z.object({
    id: z.string(),
    name: z.string(),
    color: PlayerColorSchema
}) // player schema
export type Player = z.infer<typeof PlayerSchema>//player type
export type Players = {
    Red: Player;
    Black: Player;
};
export const createPlayers = (): Players => ({
    Red: { id: '', name: '', color: 'Red' },
    Black: { id: '', name: '', color: 'Black' }
});//Players　Factory　Function

export const GameStateSchema = z.enum(["BeforeStart", "Progress", "Over"])
// gamestate schema
export type GameState = z.infer<typeof GameStateSchema>

export const GameControllerSchema = z.object({
    time: z.object({
        RedPlayerTime: z.number(),   // 单位：秒
        BlackPlayerTime: z.number()
    }),//红色和黑色分别有时间的显示且为15分钟的倒计时 操作时才会进行时间流逝，时间结束游戏输
    state: GameStateSchema, //"BeforeStart","Progress","Over"
    playersInControl: z.object({
        Red: z.string(),   // PlayerId 
        Black: z.string()
    }),
    turn: PlayerColorSchema //"red","black"
});//GameController schema

export type GameController = z.infer<typeof GameControllerSchema>;

// GameController function
export const createGameController = (): GameController => ({
    time: {
        RedPlayerTime: 900,//十五分钟的初始时间
        BlackPlayerTime: 900
    },
    state: "BeforeStart",
    playersInControl: { Red: "abcd01", Black: "abcd02" },
    turn: "Red"
});

//生成棋盘和棋盘init
export const initGame = () => {
    createGameController()
    generateEmptyBoard();
    const players: Player[] = [];

}



