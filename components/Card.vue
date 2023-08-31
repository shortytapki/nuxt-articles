<template>
  <NuxtLink
    :to="`/posts/${id}`"
    class="w-[280px] flex flex-col justify-between group hover:cursor-pointer max-h-[378px]"
  >
    <img
      :src="image"
      width="280"
      height="280"
      class="mb-5 group-hover:-translate-y-5 transition-all ease-in-out"
      alt="The image is not found..."
    />
    <div>
      <p class="text-[20px] leading-6 text-ellipsis text-left mb-[12px]">
        {{ title }}
      </p>
      <p class="text-pink invisible group-hover:visible transition-all ease-in">
        Read more
      </p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps(["title", "image", "id"]);
</script>

<style scoped></style>
