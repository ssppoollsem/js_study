<template>
  <div>
    <ListItem :items="newsItems"></ListItem>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import { fetchNews } from '../api';

export default {
  components: {
    ListItem,
  },
  data() {
    return {
      newsItems: [],
    };
  },
  methods: {
    async fetchNewsItems() {
      const response = await fetchNews();
      console.log(response.data);
      this.newsItems = response.data;
    },
  },
  created() {
    this.fetchNewsItems();
  },
};
</script>

<style></style>
