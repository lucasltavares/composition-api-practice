import { defineStore } from "pinia";

export const usePostsStore = defineStore("posts", {
    // Data
    state: () => ({
        posts : [
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
        ],
    }),
    // Computed
    getters: {
        sorted() {
            return this.posts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        }
       /* sorted: (state) => state.posts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)),  same bullshit*/ 
    },
    // Methods
    actions: {
        deletePost(id) {
            this.posts = this.posts.filter(post => post.id !== id);
            console.log(this.posts);
        },
        addPost(post) {
            this.posts.push({
                id: this.posts.length + 1,
                title: post.title,
                body: post.body,
                author: 'Lucas Lima',
                created_at: new Date().toISOString(),
                is_saved: false
            });
        },
        savePost(id) {
            const post = this.posts.find(post => post.id === id);
            post.is_saved = !post.is_saved;
        }
    }
});