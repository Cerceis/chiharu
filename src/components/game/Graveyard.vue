<template>
  <div class="graveyard">
    <h3>Red Graveyard</h3>
    <div class="pieces">
      <ShogiCom
        v-for="(shogi, index) in graveyardRed"
        :key="shogi.id + index"
        :symbol="shogi.label"
        :size="30"
        color="D32F2F"
      />
    </div>

    <h3>Black Graveyard</h3>
    <div class="pieces">
      <ShogiCom
        v-for="(shogi, index) in graveyardBlack"
        :key="shogi.id + index"
        :symbol="shogi.label"
        :size="30"
        color="373737"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ShogiCom from "@/components/game/Shogi.vue"
import { graveyardBlack,graveyardRed } from "@/stores/gameMap";

</script>