<template>
    <v-container v-if="controller" class="mt-2 text-center">
        <div class="text-subtitle-1">当前回合</div>
        <v-chip :color="controller.turn === 'Red' ? 'red' : 'white'" text-color="white">
            {{ controller.turn === 'Red' ? '🔴 红方' : '⚫ 黑方' }}
        </v-chip>
    </v-container>
</template>

<script setup lang="ts">
import { controller } from '@/stores/gameMap'
</script>
