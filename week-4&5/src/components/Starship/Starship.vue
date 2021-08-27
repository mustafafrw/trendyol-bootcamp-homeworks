<template>
  <div class="starship-card">
      <p v-if="starship.name">
        <span>Name</span>
        {{ starship.name }}
      </p>
      
      <p v-if="starship.model">
        <span>Model</span>
        {{ starship.model }}
      </p>
      
      <p v-if="starship.hyperdrive_rating">
        <span>HD Rating</span>
        {{ starship.hyperdrive_rating }}
      </p>
     <router-link
       class="navigate-link"
       :to="`/starship/${ starShipId }`"
     >Details</router-link>
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
  computed: {
    starShipId(){
      if(this.starship.url){
        return this.starship.url
              .replace('https://swapi.dev/api/starships/','')
              .replace('/','')
      }
      return null
    }
  }
}
</script>

<style scoped>
.starship-card{
    position: relative;
    width: 300px;
    height: 350px;
    margin: 40px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    color: #fff;
    transition: .5s;
    border-radius: 3% 20%;

    background:linear-gradient(135deg, #46464b 0%,#212125 100%);  
}
.starship-card p{
  text-align: center;
  padding: 7px 10px;
  border-radius: 7px;
  margin: 10px 10px;
}
.starship-card p span{
  color: #e89e10;
  display: block;
  margin-bottom: 10px;
}
.navigate-link{
    text-align: center;
    margin: 30px 20px ;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    color: #e8eef2;
    text-decoration: none;

}
.navigate-link:hover{
    color: #ee081b;
    transition: all .25s ease-in-out;
}

</style>