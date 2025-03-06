<script setup>
defineProps({
    post: {
        type: Object,
        required: true
    }
})
</script>
<template>
    <div class="header">
      <span>Written by {{ post.author }} on {{ post.created_at }}</span>
      <div>
        <button @click="deletePost(post.id)" class="del material-icons">delete</button>
        <button class="save material-icons">bookmark_border</button>
      </div>
    </div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
</template>

<style scoped lang="scss">
  .header {
    font-size: 12px;
    background: slateblue;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    font-weight: 300;
    button {
      border-radius: 30px;
    }
    div .del {
      font-size: 20px;
      padding: 3px;
      color: red;
      background: white;
      margin: 0 1rem;
    }
    div .save {
      font-size: 20px;
      padding: 3px;
      color: green;
      background: white;
    }
  }
  h1 {
    padding: 1rem;
    font-size: 24px;
  }
  p {
    padding: 1rem;
    font-size: 16px;
  }
</style>