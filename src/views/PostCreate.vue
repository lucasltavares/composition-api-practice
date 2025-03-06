<script setup>
import { reactive, computed } from 'vue';
import wrapperComponent from '@/components/wrapperComponent.vue';

const post = reactive({
    title: '',
    body: '',
})

const isFormInvalid = computed(() => {
    return post.title === '' || post.body === ''
})

const submit = () => {
    console.log(post);
}
</script>

<template>
<wrapperComponent>
    <form @submit.prevent="submit">
        <h3>Create Post</h3>
        <div>
            <label for="">Post Title</label>
            <input v-model="post.title" type="text" />
        </div>
        <div>
            <label for="">Post Body</label>
            <textarea v-model="post.body" name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div>
            <button :disabled="isFormInvalid">Create post</button>
        </div>
    </form>
</wrapperComponent>
</template>

<style lang="scss" scoped>
form {
  padding: 2rem;
}
h3 {
  margin-bottom: 2rem;
}
div {
  margin-bottom: 1rem;
  label {
    font-weight: 300;
  }
  input,
  textarea {
    max-width: 100%;
    min-width: 100%;
    width: 100%;
    border: 1px solid #333;
    padding: 5px;
    border-radius: 5px;
    &:focus {
      outline: 2px solid #3b82f6;
      border: none;
    }
  }
  button {
    background: #3b82f6;
    color: #fff;
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    &:hover {
      background: #2563eb;
    }
    &:disabled {
      background: #eee;
      cursor: not-allowed;
    }
  }
}
</style>