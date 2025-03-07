<script setup>
import postComponent from '@/components/postComponent.vue';
import wrapperComponent from '@/components/wrapperComponent.vue';
import { usePostsStore } from '@/stores/posts';

const postsStore = usePostsStore();

//const posts = postsStore.posts;
//const posts = postsStore.sorted;

const getId = (id) => {
  console.log(id);
}
</script>

<!--<script>
import postComponent from '@/components/postComponent.vue';
export default {
  components: { postComponent },
  setup() {
    const posts = [
      {
        "id": 1,
        "title": "Introdução ao FastAPI",
        "body": "FastAPI é um framework moderno para a construção de APIs com Python.",
        "author": "Lucas Silva",
        "created_at": "2024-03-06T12:00:00Z",
        "is_saved": true
      },
    ]

    return {
      posts
    }
  }
}
</script>-->

<template>
<div>
  <div v-for="post in postsStore.sorted" :key="post.id">
    <wrapperComponent>
      <template #header>
        <h2>{{ post.title }}</h2>
      </template>
      <postComponent :post="post" @get-id="getId" />
    </wrapperComponent>
  </div>
</div>
</template>

<style lang="scss" scoped>
</style>
