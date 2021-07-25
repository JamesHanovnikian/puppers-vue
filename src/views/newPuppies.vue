<template>
  <div class="newPuppies">
    <h1>{{ message }}</h1>
  

  
    <h1> Add your new puppy please </h1>
    <div> 
      <p> Name: <input type="text" v-model="newPuppyParams.name"> </p>
      <p> Breed: <input type="text" v-model="newPuppyParams.breed"> </p>
      <p> Months: <input type="text" v-model="newPuppyParams.months"> </p>
      <button v-on:click="createPuppy();"> Add </button>
    </div>
</div> 
  
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Add a new Puppy!",
      newPuppyParams: {},
    };
  },
  created: function () {},
  methods: {
    createPuppy: function () {
      console.log("adding a new puppy!!!");
      axios
        .post("http://localhost:3000/puppies", this.newPuppyParams)
        .then((response) => {
          console.log("in creating puppy");
          console.log(response.data);
          this.$router.push("/");
        });
    },
  },
};
</script>
