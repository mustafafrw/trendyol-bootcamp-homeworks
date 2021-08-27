<template>
  <div class="detail-container">
    <GTooltip class="g-p-10" text="Previous">
      <template #tooltip-trigger>
      <GButton
        size="big"
        variant="secondary"
        icon="arrow-left"
        @click="routePrevious"
      ></GButton>
      </template>
     </GTooltip>

     <Breadcrumb
        :breadCrumbItems="breadCrumbItems"
      />
      
     <div v-if="loading" class="spinner-container">
       <GSpinner />
     </div>

     <StarshipDetail
       v-else-if="starShip"
       :starship="starShip"
     />
  </div>
</template>

<script>
import StarshipDetail from '@/components/Starship/StarshipDetail'
import Breadcrumb from '@/components/Shared/Breadcrumb'
import GButton from '@trendyol-js/grace/core/GButton';
import GTooltip from '@trendyol-js/grace/core/GTooltip';
import GSpinner  from '@trendyol-js/grace/core/GSpinner';

export default {
    components: {
      StarshipDetail,
      GButton,
      GTooltip,
      GSpinner,
      Breadcrumb
    },
    data(){
      return {
        loading: false
      }
    },
    computed: {
      starShipId(){
        return this.$route.params.id
      },
      breadCrumbItems(){
        return [ 
          { 
            text: this.starShipId, 
            href: `/starship/${ this.starShipId }` 
          } 
        ]
      },
      starShip(){
        return this.$store.getters.getDetail
      }
    },
    created(){
      this.fetchDetail()
    },
    methods: {
      routePrevious(){
        this.$router.push('/')
      },
      async fetchDetail(){
        this.loading = true;
        await this.$store.dispatch('fetchDetail', this.starShipId)
        this.loading = false;
      }
    }
}
</script>

<style scoped>
.detail-container{
  margin-top: 20px;
}
.spinner-container{
  text-align: center;
}
</style>