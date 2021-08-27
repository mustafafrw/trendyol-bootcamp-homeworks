<template>
    <div class="breadcrumb-container">
        <GBreadcrumb
            :items="items"
            @click="onClick"
        ></GBreadcrumb>
    </div>
</template>

<script>
import GBreadcrumb  from '@trendyol-js/grace/core/GBreadcrumb';

export default {
    props: {
        breadCrumbItems: {
            type: Array,
            default: null
        }
    },
    components: {
        GBreadcrumb 
    },
    mounted(){
      if(this.breadCrumbItems && this.breadCrumbItems.length > 0){
          this.breadCrumbItems.forEach(item => {
              this.items.push(item);
          })
      } 
    },
    data() {
      return {
        items: [
          { text: 'Starships', href: '/' },
        ]
      }
    },
    methods: {
        onClick(item) {
            this.$router.push(item.href)
        }
    }
}
</script>

<style scoped>
.breadcrumb-container{
    display: inline-block;
    margin-left: 20px;
}
</style>