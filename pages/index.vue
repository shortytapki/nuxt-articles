<template>
  <div class="font-main px-28 pt-[120px] pb-[140px] max-w-[1440px] mx-auto">
    <h1 class="text-[84px] mb-10">Articles</h1>
    <section
      class="flex flex-wrap justify-between gap-x-5 gap-y-[52px] mb-[50px] min-h-[836px]"
    >
      <Card
        v-for="post in posts.slice(start, end)"
        :title="post.title"
        :image="post.image"
        :id="post.id"
      />
    </section>
    <Pagination />
  </div>
</template>

<script lang="ts">
import Card from "~/components/Card.vue";
import Pagination from "~/components/Pagination.vue";
import { useMainStore, type Post } from "~/store/mainStore";
import { storeToRefs } from "pinia";

export default {
  setup() {
    const mainStore = useMainStore();

    const { start, end, paginationLength, posts } = storeToRefs(mainStore);

    const response = useFetch<Post[]>(
      "https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/"
    ).data;

    const data = response.value;
    if (data) {
      mainStore.setPosts(data);
      mainStore.setPaginationLength(Math.ceil(data.length / 8));
    }

    return { posts, start, end, paginationLength };
  },
};
</script>

<style lang="scss" scoped></style>
