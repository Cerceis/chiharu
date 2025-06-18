<template>
  <div class="relative w-[540px] h-[600px] border bg-yellow-100">
    <!-- 网格线背景 -->
    <svg class="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <g stroke="black" stroke-width="1">
        <!-- 竖线 -->
        <line v-for="x in 9" :x1="x * spacing" y1="0" :x2="x * spacing" :y2="(rows - 1) * spacing" :key="'v' + x" />
        <!-- 横线 -->
        <line v-for="y in 10" x1="0" :y1="y * spacing" :x2="(cols - 1) * spacing" :y2="y * spacing" :key="'h' + y" />
        <!-- 楚河汉界分界 -->
        <text x="90" y="270" class="text-xl fill-gray-400">楚 河</text>
        <text x="270" y="270" class="text-xl fill-gray-400">漢 界</text>
      </g>
    </svg>

    <!-- 棋子渲染层 -->
    <div
      v-for="(piece, idx) in pieces"
      :key="idx"
      class="absolute w-10 h-10 rounded-full flex items-center justify-center text-white text-xl font-bold"
      :class="piece.owner === 'Red' ? 'bg-red-600' : 'bg-black'"
      :style="{
        left: `${piece.x * spacing - 20}px`,
        top: `${piece.y * spacing - 20}px`
      }"
    >
      {{ piece.label }}
    </div>
  </div>
</template>

<script setup lang="ts">
type Player = 'Red' | 'Black';

interface ShogiPiece {
  type: string;
  label: string;
  x: number;
  y: number;
  owner: Player;
}

const spacing = 60; // 每格间距
const cols = 9;
const rows = 10;

const pieces: ShogiPiece[] = [
  { type: 'ma', label: '馬', x: 1, y: 0, owner: 'Red' },
  { type: 'bing', label: '兵', x: 0, y: 3, owner: 'Red' },
  { type: 'jiang', label: '將', x: 4, y: 9, owner: 'Black' },
];
</script>

<style scoped>
.board {
  position: relative;
  background-color: #f9f0c2;
}
</style>