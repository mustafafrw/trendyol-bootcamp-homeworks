<template>
  <div>
      <Search />
      <ListStarship />
      <LoadMore />
  </div>
</template>

<script>
import ListStarship from '@/components/Starship/ListStarship'
import Search from '@/components/Search/Search'
import LoadMore from '@/components/Shared/LoadMore'

export default {
  components: {
    Search,
    ListStarship,
    LoadMore
  },
  created(){
      this.$store.dispatch('fetchStarships')
  },
}
</script>

<style>

</style>