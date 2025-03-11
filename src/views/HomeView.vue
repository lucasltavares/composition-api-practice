<script setup>
import { ref } from 'vue';
import postComponent from '@/components/postComponent.vue';
import wrapperComponent from '@/components/wrapperComponent.vue';
import { usePostsStore } from '@/stores/posts';

const postsStore = usePostsStore();
const postFilter = ref('all');

const setPostFilter = () => {
  postFilter.value = postFilter.value === 'all' ? 'saved' : 'all';
}
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
  <div class="header">
    <div>
      <h3>{{ postFilter }} posts</h3>
      <span v-show="postsStore.loading" class="material-icons">cached</span>
    </div>
    <button @click="setPostFilter">Show {{ postFilter === 'all' ? 'saved' : 'all' }} posts</button>
  </div>

  <div v-if="postsStore.err" class="error">{{ postsStore.err }}</div>

<div v-if="postFilter === 'all'">
  <div v-for="post in postsStore.sorted" :key="post.id">
    <wrapperComponent>
      <template #header>
        <h2>{{ post.title }}</h2>
      </template>
      <postComponent :post="post" @get-id="getId" />
    </wrapperComponent>
  </div>
</div>

<div v-else>
  <div v-for="post in postsStore.saved" :key="post.id">
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
.header {
  background: #fff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
    span {
      animation: spin 1s linear infinite;
    }
  }
  button {
    color: #fff;
    background: #1e40af;
    padding: 4px 15px;
    border-radius: 5px;
    &:hover {
      background: #0ea5e9;
    }
  }
}

.error {
  margin: 2rem;
  background: #f87171;
  color: #fff;
  text-align: center;
  padding: 1rem;
  border-radius: 10px;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
