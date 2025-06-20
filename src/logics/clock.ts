import { type GameController } from "./game";
import { reactive, onUnmounted } from 'vue'

export let timer: ReturnType<typeof setInterval> | null = null;
export const displayTime = reactive({
    Red: '15:00',
    Black: '15:00'
})

export const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0')
    const s = (seconds % 60).toString().padStart(2, '0')
    return `${m}:${s}`
}//second to mintue(xx:xx)
const startCountdown = (controller: GameController) => {
    if (timer) clearInterval(timer);
    timer = setInterval(() => {
        const current = controller.turn;
        const timeKey = current === "Red" ? "RedPlayerTime" : "BlackPlayerTime";
        if (controller.time[timeKey] > 0) {
            controller.time[timeKey]--;
            if (current === "Red") {
                displayTime.Red = formatTime(controller.time[timeKey]);
            } else {
                displayTime.Black = formatTime(controller.time[timeKey]);
            }
        } else {
            clearInterval(timer!);

        }//timeout--gamelose
    }, 1000);

}
// 每次切换回合时调用
export const startGame = (controller: GameController) => {
    controller.state = "Progress";
    onTurnChange(controller);
}//当游戏状开始后更改状态为progress 开始倒计时

export const onTurnChange = (controller: GameController) => {
    startCountdown(controller);
}
// 每次更换顺序时重新调用计时器

onUnmounted(() => {
    if (timer) clearInterval(timer)
})


