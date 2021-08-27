<template>
  <div class="search-container">
      <input
        class="search-input"
        placeholder="Search.."
        type="text"
        v-model="query"
        @keydown.enter="search"
      >
  </div>
</template>

<script>
export default {
    data(){
        return {
            query: ""
        }
    },
    methods: {
      async search(){
        await this.$store.dispatch('searchStarships', this.query)
      }
    }
}
</script>

<style scoped>
.search-input{
  padding: 10px;
  font-size: 17px;
  
  margin: 20px 40px;
  color: #fff;
  border-radius: 30px;
  width: 92%;

}
:focus{outline: none;}

</style>