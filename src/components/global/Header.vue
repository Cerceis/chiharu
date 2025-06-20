<template>
    <v-container v-if="controller.state === 'Progress'" class="mt-2">
        <v-row justify="space-between" align="center">
            <!-- 红方玩家卡片 -->
            <v-col cols="5">
                <v-card color="red-lighten-5" class="pa-4" elevation="2">
                    <v-row justify="space-between" align="center">
                        <div>
                            <v-chip color="red" text-color="white" class="mb-2">🔴 红方</v-chip>
                            <div class="text-h6">{{ players.Red.name }}</div>
                        </div>
                        <v-progress-circular :size="60" :width="6" color="red" :model-value="getProgress('Red')"
                            rotate="-90">
                            {{ displayTime.Red }}
                        </v-progress-circular>
                    </v-row>
                </v-card>
            </v-col>

            <!-- 当前回合 -->
            <v-col cols="2" class="text-center">
                <div class="text-subtitle-1">当前行动方</div>
                <v-chip :color="controller.turn === 'Red' ? 'red' : 'black'" text-color="white">
                    {{ controller.turn === 'Red' ? '红方' : '黑方' }}
                </v-chip>
            </v-col>

            <!-- 黑方玩家卡片 -->
            <v-col cols="5">
                <v-card color="grey-lighten-4" class="pa-4" elevation="2">
                    <v-row justify="space-between" align="center">
                        <div>
                            <v-chip color="black" text-color="white" class="mb-2">⚫ 黑方</v-chip>
                            <div class="text-h6">{{ players.Black.name }}</div>
                        </div>
                        <v-progress-circular :size="60" :width="6" color="black" :model-value="getProgress('Black')"
                            rotate="-90">
                            {{ displayTime.Black }}
                        </v-progress-circular>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    <button @click="changeTurn">dsdsds</button>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { createGameController, type GameController, createPlayers } from '@/logics/game'
import { displayTime, startGame,onTurnChange } from '@/logics/clock'
import type { PlayerColor } from '@/types'

const controller = ref<GameController>(createGameController())
const players = reactive(createPlayers()) // 用 reactive 更方便模板访问属性

players.Red.name = 'Frank'
players.Black.name = 'Haru'

// 开始游戏
startGame(controller.value)

// 获取剩余时间百分比（用于进度环）
const getProgress = (color:PlayerColor) => {
    const seconds = controller.value.time[`${color}PlayerTime`]
    return (seconds / 900) * 100
}

const changeTurn =()=>{
  controller.value.turn = controller.value.turn === "Red" ? "Black" : "Red"
  onTurnChange(controller.value) 
}
</script>

<style scoped>
.text-h6 {
    font-weight: bold;
}
</style>
