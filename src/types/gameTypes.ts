import {z} from "zod";

// player schema and type
export const PlayerColorSchema = z.enum(["Red","Black"])
export type PlayerColor = z.infer<typeof PlayerColorSchema>
export const PlayerSchema = z.object({
    id: z.string(),
    name: z.string(),
    color: PlayerColorSchema
}) 

export type Player = z.infer<typeof PlayerSchema>//player type
export type Players = {
    Red: Player;
    Black: Player;
};

//board schema and type 

export const DotSchema = z.object({
    x: z.number(),
    y: z.number(),
    shogi: z.any().or(z.null())
});
export type Dot = z.infer<typeof DotSchema>;
export type GameBoard = Dot[][];

//game controller type

// gamestate schema
export const GameStateSchema = z.enum(["BeforeStart", "Progress", "Over"])
export type GameState = z.infer<typeof GameStateSchema>
//GameControllerSchema
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
    turn: PlayerColorSchema,//"red","black"
    winner: z.union([PlayerColorSchema, z.null()]),
});
export type GameController = z.infer<typeof GameControllerSchema>;

