import { defineStore } from "pinia";

const SHOW_POSTS = 8;

export interface Post {
  id: string;
  createdAt: string;
  title: string;
  preview: string;
  image: string;
  description: string;
}

interface StoreSchema {
  activePage: number;
  paginationLength: number;
  start: number;
  end: number;
  posts: Post[];
}

export const useMainStore = defineStore("main", {
  state: (): StoreSchema => {
    return {
      activePage: 1,
      paginationLength: 0,
      posts: [],
      end: SHOW_POSTS,
      start: 0,
    };
  },
  actions: {
    setPage(p: number) {
      const start = (p - 1) * SHOW_POSTS;
      const end = start + SHOW_POSTS;
      this.activePage = p;
      this.start = start;
      this.end = end;
    },
    setPaginationLength(l: number) {
      this.paginationLength = l;
    },
    setPosts(posts: Post[]) {
      this.posts = posts;
    },
  },
});
