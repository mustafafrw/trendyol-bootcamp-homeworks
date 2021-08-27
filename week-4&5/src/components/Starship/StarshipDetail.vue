<template>
  <div class="g-p-10">
      <div class="starship-detail-card">
          <p class="starship-detail-title">
            Details of the Starship
          </p>
          <p v-if="starship.name">
            <span>Name</span> 
            {{ starship.name }}
          </p>
          
          <p v-if="starship.model">
            <span>Model</span>
            {{ starship.model }}
          </p>

          <p v-if="starship.passengers">
            <span>Passangers</span>
             {{ starship.passengers }}
          </p>

          <p v-if="starship.hyperdrive_rating">
            <span>HD Rating</span>
             {{ starship.hyperdrive_rating }}
          </p>

          <p v-if="starship.hyperdrive_rating">
            <span>Crew</span>
             {{ starship.crew }}
          </p>

          <p v-if="starship.max_atmosphering_speed">
            <span>Max Speed</span>
             {{ starship.max_atmosphering_speed }}
          </p>

          <p v-if="starship.manufacturer">
            <span>Manufacturer</span>
             {{ starship.manufacturer }}
          </p>

          <p v-if="starship.cargo_capacity">
            <span>Cargo capacity</span>
             {{ starship.cargo_capacity  }}
          </p>
      </div>
  </div>
</template>

<script>
export default {
  props:{
    starship:{
      type: Object,
      default: null
    }
  },
}
</script>

<style scoped>
.starship-detail-card{
    position: relative;
    width: 600px;
    height: 800px;
    margin: 40px;

    background:linear-gradient(135deg, #46464b 0%,#212125 100%);    
    
    color: #fff;
    
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: 3% 20%;
}
.starship-detail-card p{
  text-align: center;
  padding: 10px 30px;
  border-radius: 7px;
  margin: 10px 10px;
}
.starship-detail-card p span{
  color: #e89e10;
  display: block;
  margin-bottom: 10px;
}
.starship-detail-title{
  color: #ee081b;
}

</style>