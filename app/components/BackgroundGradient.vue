<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  interactive: { type: Boolean, default: true },
  gradientBackgroundStart: { type: String, default: "rgb(108, 0, 162)" },
  gradientBackgroundEnd: { type: String, default: "rgb(0, 17, 82)" },
  firstColor: { type: String, default: "18, 113, 255" },
  secondColor: { type: String, default: "221, 74, 255" },
  thirdColor: { type: String, default: "100, 220, 255" },
  fourthColor: { type: String, default: "200, 50, 50" },
  fifthColor: { type: String, default: "180, 180, 50" },
  pointerColor: { type: String, default: "140, 100, 255" },
  size: { type: String, default: "80%" },
  blendingValue: { type: String, default: "hard-light" },
})

const curX = ref(0)
const curY = ref(0)
const tgX = ref(0)
const tgY = ref(0)
const interactiveRef = ref<HTMLElement | null>(null)

function handleMouseMove(event: MouseEvent) {
  tgX.value = event.clientX
  tgY.value = event.clientY
}

let animationFrame: number

function animate() {
  if (!interactiveRef.value) return

  curX.value += (tgX.value - curX.value) * 0.08 // Smooth easing factor
  curY.value += (tgY.value - curY.value) * 0.08

  interactiveRef.value.style.transform = `translate(${Math.round(curX.value)}px, ${Math.round(curY.value)}px)`
  animationFrame = requestAnimationFrame(animate)
}

onMounted(() => {
  const body = document.body.style
  body.setProperty("--gradient-background-start", props.gradientBackgroundStart)
  body.setProperty("--gradient-background-end", props.gradientBackgroundEnd)
  body.setProperty("--first-color", props.firstColor)
  body.setProperty("--second-color", props.secondColor)
  body.setProperty("--third-color", props.thirdColor)
  body.setProperty("--fourth-color", props.fourthColor)
  body.setProperty("--fifth-color", props.fifthColor)
  body.setProperty("--pointer-color", props.pointerColor)
  body.setProperty("--size", props.size)
  body.setProperty("--blending-value", props.blendingValue)

  window.addEventListener("mousemove", handleMouseMove)
  animate()
})

onBeforeUnmount(() => {
  window.removeEventListener("mousemove", handleMouseMove)
  cancelAnimationFrame(animationFrame)
})
</script>


<template>
  <div class="relative w-full min-h-screen">
    <!-- Background gradient layer -->
    <div
      class="fixed inset-0 z-[-10] overflow-hidden"
      :style="{ background: `linear-gradient(40deg, var(--gradient-background-start), var(--gradient-background-end))` }"
    >
      <div class="absolute inset-0" :class="[isSafari ? 'blur-2xl' : '[filter:url(#blurMe)_blur(40px)]']">
        <div
          v-if="props.interactive"
          ref="interactiveRef"
          class="absolute w-full h-full -top-1/2 -left-1/2 opacity-70 pointer-events-none"
          :style="{
            background: 'radial-gradient(circle at center, rgba(var(--pointer-color), 0.8) 0, rgba(var(--pointer-color), 0) 50%)',
            mixBlendMode: props.blendingValue
          }"
        ></div>
      </div>
    </div>

    <!-- Slot content above background -->
    <div class="relative z-10">
      <slot />
    </div>
  </div>
</template>
