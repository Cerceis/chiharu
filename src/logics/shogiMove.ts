import { board, selectedShogi, selectedShogiEatList, selectedShogiMoveList,controller } from "@/stores/gameMap";


export const onCellClick = (x: number, y: number) => {
    if (!selectedShogi.value) return
    if (!board.value) {
        console.error('board.value is null')
        return
    }
    const canMove = selectedShogiMoveList.value.some(pt => pt.x === x && pt.y === y)
    if (!canMove) {
        console.log('不能走到这个位置')
        return
    }//TODO: 10-14这段代码并没有发挥它的作用
    board.value[selectedShogi.value.y][selectedShogi.value.x].shogi = null
    board.value[y][x].shogi = selectedShogi.value

    selectedShogi.value.x = x
    selectedShogi.value.y = y

    selectedShogi.value = null
    selectedShogiMoveList.value = []//remove move hightlight
    selectedShogiEatList.value = [] // remove eat list
      if (controller && controller.value) {
        controller.value.turn = controller.value.turn === 'Red' ? 'Black' : 'Red';
      }

}

