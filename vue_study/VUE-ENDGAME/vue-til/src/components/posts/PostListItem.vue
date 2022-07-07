<template>
  <li>
    <div class="post-title">
      {{ postItem.title }}
    </div>
    <div class="post-contents">
      {{ postItem.contents }}
    </div>
    <div class="post-time">
      {{ postItem.createdAt }}
      <i class="icon ion-md-create" @click="routeEditItem"></i>
      <i class="icon ion-md-trash" @click="deleteItem"></i>
    </div>
  </li>
</template>

<script>
import { deletePost } from '@/api/posts';

export default {
  props: {
    postItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async deleteItem() {
      if (confirm('Yout want to delete it?')) {
        await deletePost(this.postItem._id);
        this.$emit('refresh');
        alert('삭제하였습니다.');
      }
    },
    routeEditItem() {
      this.$router.push(`/post/${this.postItem._id}`);
    },
  },
};
</script>

<style></style>
