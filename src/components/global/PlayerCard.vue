<!-- src/components/global/PlayerCard.vue -->
<template>
    <v-card 
        v-if="name"
        :color="color === 'Red' ? 'red-lighten-5' : 'grey-lighten-4'" class="pa-4" elevation="2">
        <v-row justify="space-between" align="center">
            <div>
                <v-chip :color="color.toLowerCase()" text-color="white" class="mb-2">
                    {{ color === 'Red' ? '🔴 红方' : '⚫ 黑方' }}
                </v-chip>
                <div class="text-h6">{{ name }}</div>
            </div>
            <v-progress-circular :size="60" :width="6" :color="color.toLowerCase()" :model-value="progress"
                rotate="-90">
                {{ time }}
            </v-progress-circular>
        </v-row>
    </v-card>
</template>

<script setup lang="ts">
import type { PlayerColor } from '@/types';
import type { PropType } from 'vue';


defineProps({
    color: {
        type: String as PropType<PlayerColor>,
        default: "Red"
    },
    name: {
        type: String,
        required: true
    },
    time: { type: String },
    progress: { type: Number }
})
</script>

<style scoped>
.text-h6 {
    font-weight: bold;
}
</style>
