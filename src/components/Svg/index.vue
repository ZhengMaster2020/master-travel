<script lang="ts" setup>
defineProps({
	color: {
		type: String,
		default: 'inherit'
	},
	iconName: {
		type: String,
		default: ''
	},

	svgClassName: {
		type: String,
		defalut: ''
	}
})
</script>

<template>
    <svg :class="['svg-icon', svgClassName]" aria-hidden="true">
			<use :xlink:herf="iconName"></use>
    </svg>
</template>

<style lang="scss" scoped>
.svg-icon {
	width: 1em;
  height: 1em;
  position: relative;
  vertical-align: middle;
	overflow: hidden;
	fill: currentColor;
	stroke: currentColor;
	color: v-bind('color');
}
</style>