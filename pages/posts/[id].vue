<template>
  <article class="pt-[119px] px-[112px] pb-[80px] max-w-[1440px] mx-auto">
    <h1 class="text-justify text-[84px] leading-none mb-[73px]">
      {{ post?.title }}
    </h1>
    <div
      class="w-full h-[700px] mb-[80px]"
      :style="{
        backgroundImage: `url(${post?.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }"
    ></div>
    <section class="w-[695px]">
      <p class="text-base mb-8">About</p>
      <p class="text-[36px] leading-[44px]">{{ post?.description }}</p>
    </section>
  </article>
</template>

<script lang="ts">
import { type Post } from "~/store/mainStore";
export default {
  setup() {
    const { id } = useRoute().params;
    const post = useFetch<Post>(
      `https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${id}`
    ).data;
    return { post };
  },
};
</script>

<style lang="scss" scoped></style>
