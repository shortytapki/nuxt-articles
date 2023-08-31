<template>
  <ol class="flex gap-2">
    <li
      v-for="(_, idx) in stub"
      class="h-11 w-11 rounded-xl bg-whiteShade hover:bg-gray hover:cursor-pointer flex justify-center items-center transition-all"
      :class="{ active: activePage === idx + 1 }"
      @click="changePage(idx + 1)"
    >
      {{ idx + 1 }}
    </li>
    <li
      @click="changePage(activePage + 1)"
      class="h-11 w-11 rounded-xl bg-whiteShade hover:bg-gray hover:cursor-pointer flex justify-center items-center transition-all"
    >
      <img src="@/assets/icons/right-arrow.svg" />
    </li>
  </ol>
</template>

<script lang="ts">
import { useMainStore } from "~/store/mainStore";
import { storeToRefs } from "pinia";
import { ref } from "vue";
export default {
  setup() {
    const mainStore = useMainStore();
    const { paginationLength, activePage } = storeToRefs(mainStore);
    const stub = ref(new Array(paginationLength.value).fill(0));

    const changePage = (p: number) => {
      if (p - 1 === stub.value.length) {
        mainStore.setPage(1);
        return;
      }
      mainStore.setPage(p);
    };
    return { paginationLength, stub, activePage, changePage };
  },
};
</script>

<style scoped>
.active {
  background-color: #101010;
  color: #fff;
}
</style>
