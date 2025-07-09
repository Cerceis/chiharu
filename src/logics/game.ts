import {ref} from "vue"
import { type GameBoard, type Players, type GameController, type ShogiTemplate, GameControllerSchema } from "@/types";
import { shogiController } from "@/logics/shogi";
import { shogiMap } from "@/stores/shogiMap";
import { board, controller, players } from "@/stores/gameMap";
import { changeTurn, startGame } from "./clock";

//board 
export const generateEmptyBoard = (): GameBoard =>
    Array.from({ length: 10 }, (_, y) =>
        Array.from({ length: 9 }, (_, x) => ({
            x,
            y,
            shogi: null
        }))
    );

//Players　Factory　Function
export const createPlayers = (): Players => ({
    Red: { id: '001', name: '', color: 'Red' },
    Black: { id: '002', name: '', color: 'Black' }
});

// GameController function
export const createGameController = (): GameController => ({
    time: {
        RedPlayerTime: 900,//十五分钟的初始时间
        BlackPlayerTime: 900
    },
    state: "BeforeStart",
    playersInControl: { Red: "abcd01", Black: "abcd02" },
    turn: "Red",
    winner:null
});


export const placeShogiOnBoard = (template: ShogiTemplate) => {
    if(!board.value) return;
    const type = template.shogiType
    for (let i = 0; i < template.loc.length; i++) {
        const shogi = shogiController.new(type, template.label, template.loc[i].x, template.loc[i].y,template.loc[i].color,
            template.shogiMoveId,template.shogiEatId
        )
        for (let y = 0; y < board.value.length; y++){
            const row = board.value[y];
            for (let x = 0; x < row.length; x++){
                const cell = row[x];
                if(
                    cell.x === shogi.x &&
                    cell.y === shogi.y &&
                    cell.shogi === null
                ){
                    // 置く
                    board.value[y][x].shogi = shogi;
                }
                
            }
        }
        
    }
}


//initGame function

export const initGame = () => {
    board.value = generateEmptyBoard();
    controller.value = createGameController()
    //players.value = createPlayers()
    startGame(controller.value)
    
    //const fruits =["apple", "banana"];
    ///fruits.forEach()
    //for(let i = 0; i < fruits.length; i++){}

    for (const prop in shogiMap) {
        const property = prop as keyof typeof shogiMap;
        const shogiTemplate = shogiMap[property];
        if (!shogiTemplate) continue;
        placeShogiOnBoard(shogiTemplate);
    }

}

//TODO: 自己回合只能点自己颜色的棋子 否则不许点击
// 2.完成移动或吃子后换对方顺序
// 3.将如果被吃掉游戏中支
// 4.设置投降和和棋以及悔棋按钮来确保游戏的可玩性
//5.一方时间到了的话 判定到时间的输




