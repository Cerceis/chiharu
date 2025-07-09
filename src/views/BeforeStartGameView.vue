<template>
  <v-container v-if="players" class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="6">
        <v-card class="pa-6">
          <v-card-title class="text-h5">玩家设定</v-card-title>

          <v-card-text>
            <v-text-field
              label="红方玩家名"
              v-model="players.Red.name"
              color="red"
              outlined
            />
            <v-text-field
              label="黑方玩家名"
              v-model="players.Black.name"
              color="black"
              outlined
            />
          </v-card-text>

          <v-card-actions>
            <v-btn color="primary"  @click="$router.replace('/game')">
              开始游戏
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { createPlayers } from '@/logics/game';
import { players } from '@/stores/gameMap'
import { onMounted } from 'vue';
onMounted(() => {
	  players.value = createPlayers()
})
</script>