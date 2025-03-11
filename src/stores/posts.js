import { defineStore } from "pinia";

export const usePostsStore = defineStore("posts", {
    // Data
    state: () => ({
      posts: [],
      loading: true,
      err: '',
    }),
    // Computed
    getters: {
        sorted() {
            return this.posts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        },
       /* sorted: (state) => state.posts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)),  same bullshit*/ 
       saved() {
            return this.posts
              .filter(post => post.is_saved)
              .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        }
    },
    // Methods
    actions: {
        getPosts() {
            fetch('http://localhost:3000/posts')
                .then(res => res.json())
                .then((data) => {
                  this.posts = data
                  this.loading = false
                  console.log(this.posts);
                }).catch(err => {
                  this.err = err.message
                  this.loading = false
                })
        },
        deletePost(id) {
            this.posts = this.posts.filter(post => post.id !== id);
            
            fetch('http://localhost:3000/posts/' + id, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json'
              },
            }).catch(err => console.log(err))
        },
        addPost(post) {
          const newPost = {
                id: JSON.stringify(this.posts.length + 1),
                title: post.title,
                body: post.body,
                author: 'Lucas Lima',
                created_at: new Date().toISOString(),
                is_saved: false
          }

          this.posts.push(newPost);

          fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
          }).catch(err => console.log(err))
        },
        savePost(id) {
            const post = this.posts.find(post => post.id === id);
            post.is_saved = !post.is_saved;

            fetch(`http://localhost:3000/posts/${id}`, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                is_saved: post.is_saved
              })
            }).catch(err => console.log(err))
        }
    }
});