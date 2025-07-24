<template>
  <nav class="font-mono font-bold text-md md:text-xs" >
    <ul class="flex flex-wrap gap-2 mb-4">
      <li class="w-fit bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/10 px-2 py-1 rounded-md transition-colors duration-200">
        <NuxtLink to="/">@Sfabricito</NuxtLink>
      </li>
      <li class="hidden sm:block" v-for="(segment, index) in segments" :key="index">
        <NuxtLink class="flex flex-wrap gap-2 items-center" :to="`/${segments.slice(0, index + 1).join('/')}`">
          <span class="text-white">/</span>
          <div class="w-fit bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 px-2 py-1 rounded-md transition-colors duration-200">
            {{ capitalizeFirstLetter(segment) }}
          </div>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const { segments } = actualRoute(); 


</script>