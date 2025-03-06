<script setup>
import postComponent from '@/components/postComponent.vue';
import wrapperComponent from '@/components/wrapperComponent.vue';

const posts = [
  {
    "id": 1,
    "title": "Introdução ao FastAPI",
    "body": "FastAPI é um framework moderno para a construção de APIs com Python.",
    "author": "Lucas Silva",
    "created_at": "2024-03-06T12:00:00Z",
    "is_saved": true
  },
  {
    "id": 2,
    "title": "Automação com Python",
    "body": "Automatize tarefas do dia a dia usando scripts Python e bibliotecas especializadas.",
    "author": "Ana Costa",
    "created_at": "2024-03-05T15:30:00Z",
    "is_saved": false
  },
  {
    "id": 3,
    "title": "Vue.js e Componentização",
    "body": "Aprenda como criar componentes reutilizáveis no Vue.js e melhorar a estrutura do seu código.",
    "author": "Marcos Ribeiro",
    "created_at": "2024-03-04T18:45:00Z",
    "is_saved": true
  },
  {
    "id": 4,
    "title": "PostgreSQL para Iniciantes",
    "body": "Conheça os principais comandos e estratégias para otimizar consultas no PostgreSQL.",
    "author": "Juliana Mendes",
    "created_at": "2024-03-03T09:20:00Z",
    "is_saved": false
  },
  {
    "id": 5,
    "title": "Boas Práticas no Laravel",
    "body": "Dicas essenciais para manter seu código Laravel limpo, seguro e eficiente.",
    "author": "Carlos Ferreira",
    "created_at": "2024-03-02T22:10:00Z",
    "is_saved": true
  }
];
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
  <div v-for="post in posts" :key="post.id">
    <wrapperComponent>
      <template #header>
        <h2>{{ post.title }}</h2>
      </template>
      <postComponent :post="post" />
    </wrapperComponent>
  </div>
</div>
</template>

<style lang="scss" scoped>
</style>
