<template>
    <div class="board" @click="clearSelection">
        <div class="chessBoard">
            <!-----見えるボード-->
            <div v-for="(i) in 9" class="chessRow">
                <div v-for="(j) in 8" class="chessCell chessCellCon">
                </div>
            </div>

            <!---駒ボード---->
            <div class="chessControlCon">
                <div v-for="(row, y) in board" class="chessRow">
                    <div v-for="(cell, x) in row" class="chessCell chessControlCell">
                        <ShogiCom v-if="cell.shogi" :symbol="cell.shogi.label" :size="50"
                            :color="cell.shogi.color === 'Red' ? 'D32F2F' : '373737'" @click.stop="onShogiSelect(cell.shogi)
                                " />

                        <div class="hightlight" v-if="selectedShogiMoveList.some(pos => pos.x === x && pos.y === y)"
                            @click="onCellClick(x, y)"></div>
                        <div class="eatshogi-hightlight"
                            v-if="selectedShogiEatList.some(pos => pos.x === x && pos.y === y)"
                            @click="onCellClickEat(x, y)"></div>



                    </div>
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
import { board, selectedShogi, selectedShogiMoveList, selectedShogiEatList,controller } from '@/stores/gameMap'
import ShogiCom from "@/components/game/Shogi.vue"
import { onCellClick } from '@/logics/shogiMove';
import { onCellClickEat } from '@/logics/shogiEat';
import type { Shogi } from '@/types';
function onShogiSelect(shogi: Shogi) {
    try {
        if(shogi.color !== controller.value?.turn)return
        selectedShogi.value = shogi;
        // 只计算当前棋子合法走法
        selectedShogiMoveList.value = selectedShogi.value.moveFunc(shogi, board.value!);
        selectedShogiEatList.value = shogi.eatFunc
            ? shogi.eatFunc(shogi, board.value!)
            : [];

    } catch (err) {
        selectedShogi.value = null
        selectedShogiMoveList.value = []
        //TODO: 点击别的棋子的时候也要消除hightlight的同时增加新的
    }
}
// clear the hightlight if click the board
function clearSelection() {
    selectedShogi.value = null;
    selectedShogiMoveList.value = [];
    selectedShogiEatList.value = []
}
</script>

<style scoped>
/* Chiyori */
.chessBoard {
    position: relative;
    display: grid;
}

.chessRow {
    display: flex;
}

.chessCell {
    width: 60px;
    height: 60px;
}

.chessCellCon {
    background-color: #fff1cc;
    border: 1px solid black;
}

.chessControlCon {
    position: absolute;
    top: -30px;
    left: -30px;
}

.chessControlCell {
    display: grid;
    place-items: center;
}

.hightlight {
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: rgb(247, 90, 247);
    position: absolute;
}

.eatshogi-hightlight {
    position: absolute;
    width: 50px;
    height: 50px;
    box-sizing: border-box;
    border: 2px solid rgb(35, 214, 29);
    /* 边框颜色 */
    background-color: transparent;
    border-radius: 100%;
    z-index: 2;
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
