import { board, selectedShogi, selectedShogiEatList, graveyardRed, graveyardBlack, controller } from "@/stores/gameMap"


export const onCellClickEat = (x: number, y: number) => {
  if (!selectedShogi.value || !board.value) return;

  const canEat = selectedShogiEatList.value.some(pt => pt.x === x && pt.y === y);
  if (!canEat) return;

  const targetShogi = board.value[y][x].shogi;

  if (controller.value && targetShogi?.label === '将') {
    controller.value.winner = selectedShogi.value.color
  } else {
    if (targetShogi) {
      if (targetShogi.color === 'Red') {
        graveyardRed.value.push(targetShogi);
      } else {
        graveyardBlack.value.push(targetShogi);
      }
    }// graveyard

  }

  board.value[selectedShogi.value.y][selectedShogi.value.x].shogi = null;

  board.value[y][x].shogi = selectedShogi.value;

  selectedShogi.value.x = x;
  selectedShogi.value.y = y;

  selectedShogi.value = null;
  selectedShogiEatList.value = [];
  if (controller && controller.value) {
    if (!controller.value.winner)
      controller.value.turn = controller.value.turn === 'Red' ? 'Black' : 'Red';
  }// change turn 
};