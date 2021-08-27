<template>
  <div v-if="loadMoreState" class="load-more-container">
      <GButton
        size="big"
        variant="secondary"
        @click="loadMore"
      >
      Load more
      </GButton>
  </div>
</template>

<script>
import GButton from '@trendyol-js/grace/core/GButton';

export default {
    components: {
        GButton
    },
    computed: {
        loadMoreState() {
            return this.$store.getters.loadMoreState
        }
    },
    methods: {
        async loadMore(){
            await this.$store.dispatch('loadMore');
        }
    }
}
</script>

<style>
.load-more-container{
    text-align: center;
    margin: 20px;
}
</style>