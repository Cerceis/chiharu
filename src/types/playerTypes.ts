import {z} from "zod";
export const PlayerColorSchema = z.enum(["Red","Black"])
export type PlayerColor = z.infer<typeof PlayerColorSchema>
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

