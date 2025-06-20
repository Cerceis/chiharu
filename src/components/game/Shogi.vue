<template>
	<div
		class="shogiCon"
		:style="{
			width: `${size}px`,
			height: `${size}px`,
			fontSize: `${size - (size * 40 / 100)}px`,
			backgroundColor: `#${backgroundColor}`,
			color: `#${color}`,
		}"
	>
		<div
			class="shogiControl"
			@click="onClick"
		>
		</div>
		<span style="user-select: none">
			{{symbol}}
		</span>
	</div>
</template>
<script setup lang=ts>

defineProps({
	size: {
		type: Number,
		default: 64,
	},
	color: {
		type: String,
		default: "D32F2F"
	},
	symbol: {
		type: String,
		default: "兵"
	},
	backgroundColor:{
		type: String,
		default: "FFE0B2"
	}
})

const onClick = () => {
	console.log("Clicked");
}

</script>

<style scoped>

.shogiCon{
	position: relative;
	display: grid;
	border: 1px solid black;
	border-radius: 100%;
	place-items: center;
	font-weight: bold;
	cursor: grab;
}
.shogiCon:active{
	filter: brightness(150%);
}
.shogiControl{
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 2;
}
</style>
