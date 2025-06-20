<template>
    <div class="chessBoard">
        <!-- 棋盘格子和线条 -->
        <!---div v-for="(row,y) in  board " class="row">
            <div v-for="(cell,x) in row" :class="getCellClass(x, y)">
                <div class="shogi">sh
                    {{ board[y][x].shogiId || '' }}
                </div>
            </div>
        </div--->
        
        
        <!-----見えるボード-->
        <div v-for="(row) in 9" class="chessRow">
            <div v-for="(cell) in 8" class="chessCell chessCellCon">
            </div>
        </div>

        <!---駒ボード---->
        <div class="chessControlCon">
            <div v-for="(row, y) in board" class="chessRow">
                <div v-for="(cell, x) in row" class="chessCell chessControlCell">
                    @
                </div>
            </div>    
        </div>

        <!-- 楚河汉界 -->
        <!---div class="river">
            <span>楚河</span>
            <span>汉界</span>
        </div---->

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { generateEmptyBoard, type GameBoard } from '@/logics/game'

const board = ref<GameBoard>(generateEmptyBoard())

// 返回特定 class 可以定制标记、线条等
const getCellClass = (x: number, y: number) => {
    const classes = ['cell-base']
    if (y === 4 || y === 5) {
        classes.push('has-river') // “楚河汉界”两边
    }
    if (y === 5) {
        classes.push('river-line') // 去掉第6行上边线
    }
    return classes
}
</script>

<style scoped>
/* Chiyori */
.chessBoard{
    position: relative;
    display: grid;   
}
.chessRow{
    display: flex;
}
.chessCell{
    width: 60px;
    height: 60px;    
}
.chessCellCon{
    background-color: #fff1cc;
    border: 1px solid black;   
}
.chessControlCon{
    position: absolute;
    top: -30px;
    left: -30px;
}
.chessControlCell{
    display: grid;
    place-items: center;
}


/* .chess-board {
    position: relative;
    width: 480px;
    height: 540px;
    margin: auto;
    background-color: #fdf6e3;
    border: 2px solid #000;
    display: grid;
    grid-template-rows: repeat(9, 1fr);
    grid-template-columns: repeat(8, 1fr);
    gap: 0;
}

.row {
    display: contents;
}

.cell-base {
    box-sizing: border-box;
    border-right: 1px solid #333;
    border-bottom: 1px solid #333;
}

/* .cell.river-line {
    border-top: none;
} */

/* 楚河汉界横幅 */
/* .river {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: 20px;
    color: #555;
    display: flex;
    justify-content: space-between;
    padding: 0 60px;
    pointer-events: none;
} */ 
</style>
