<template>
  <svg
    viewBox="-40 -40 280 280"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <g fill="none" stroke="white" stroke-width="0.5">
      <!-- Center -->
      <polygon points="100,88 112,100 100,112 88,100" fill="white" fill-opacity="0.15" stroke-width="0.8" />
      <polygon points="100,82 118,100 100,118 82,100" stroke-width="0.8" />
      <polygon points="91.5,91.5 108.5,91.5 108.5,108.5 91.5,108.5" stroke-width="0.8" />
      <circle cx="100" cy="100" r="3" fill="white" fill-opacity="0.3" />

      <!-- Inner arches -->
      <g v-for="r in rotations8" :key="`arch-${r}`" :transform="`rotate(${r} 100 100)`">
        <path d="M92 75 Q92 65 100 58 Q108 65 108 75" stroke-width="0.8" fill="none" />
        <circle cx="100" cy="58" r="1.5" fill="white" fill-opacity="0.4" />
      </g>
      <circle cx="100" cy="100" r="35" stroke-width="0.3" />

      <!-- Small petals -->
      <g v-for="r in rotations16" :key="`petal-${r}`" :transform="`rotate(${r} 100 100)`">
        <path d="M100 65 L102 58 L100 52 L98 58 Z" fill="white" fill-opacity="0.1" stroke-width="0.5" />
      </g>

      <!-- Outer arches -->
      <g v-for="r in rotations8" :key="`outer-arch-${r}`" :transform="`rotate(${r} 100 100)`">
        <path d="M88 48 Q88 32 100 22 Q112 32 112 48" stroke-width="0.6" />
        <path d="M92 46 Q92 35 100 28 Q108 35 108 46" stroke-width="0.3" stroke-opacity="0.6" />
        <path d="M100 22 Q103 18 100 14 Q97 18 100 22" fill="white" fill-opacity="0.2" stroke-width="0.4" />
      </g>
      <g v-for="r in rotations8" :key="`outer-circle-${r}`" :transform="`rotate(${r} 100 100)`">
        <circle cx="100" cy="40" r="4" stroke-width="0.5" />
        <circle cx="100" cy="40" r="2" fill="white" fill-opacity="0.15" />
      </g>
      <circle cx="100" cy="100" r="55" stroke-width="0.3" stroke-dasharray="2 2" />
      <circle cx="100" cy="100" r="60" stroke-width="0.5" />

      <!-- Large petals -->
      <g v-for="r in rotations8" :key="`large-petal-${r}`" :transform="`rotate(${r} 100 100)`">
        <path d="M100 40 L105 28 L100 15 L95 28 Z" stroke-width="0.4" fill="white" fill-opacity="0.05" />
        <path d="M95 28 Q85 25 78 35" stroke-width="0.4" stroke-opacity="0.5" />
        <path d="M105 28 Q115 25 122 35" stroke-width="0.4" stroke-opacity="0.5" />
      </g>
      <circle cx="100" cy="100" r="75" stroke-width="0.3" />
      <circle cx="100" cy="100" r="80" stroke-width="0.8" />

      <!-- Outermost decorations -->
      <g v-for="r in rotations12" :key="`outermost-${r}`" :transform="`rotate(${r} 100 100)`">
        <path d="M100 18 A 4 4 0 1 1 100 10 A 3 3 0 1 0 100 18" fill="white" fill-opacity="0.2" stroke-width="0.3" />
        <polygon points="100,6 100.8,8 103,8 101.2,9.2 101.8,11.5 100,10 98.2,11.5 98.8,9.2 97,8 99.2,8" fill="white" fill-opacity="0.3" stroke-width="0" />
      </g>
      <circle cx="100" cy="100" r="90" stroke-width="0.3" stroke-dasharray="1 3" />
      <circle cx="100" cy="100" r="98" stroke-width="0.2" />

      <!-- Outer ring dots -->
      <circle v-for="(d, i) in outerDots" :key="i" :cx="d.cx" :cy="d.cy" r="1" fill="white" fill-opacity="0.5" />
    </g>
  </svg>
</template>

<script setup lang="ts">
const rotations8 = [0, 45, 90, 135, 180, 225, 270, 315]
const rotations12 = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330]
const rotations16 = [0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5]

const outerDots = Array.from({ length: 24 }, (_, i) => {
  const angle = (i / 24) * 2 * Math.PI
  return { 
    cx: Math.round((100 + 94 * Math.cos(angle)) * 10000) / 10000, 
    cy: Math.round((100 + 94 * Math.sin(angle)) * 10000) / 10000 
  }
})
</script>
