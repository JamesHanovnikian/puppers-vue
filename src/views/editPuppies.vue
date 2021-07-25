<template>
  <div class="newPuppies">
    <h1>{{ message }}</h1>
  

  
    <h1> Edit your Puppy </h1>
    <div> 
      <p> Name: <input type="text" v-model="editPuppyParams.name"> </p>
      <p> Breed: <input type="text" v-model="editPuppyParams.breed"> </p>
      <p> Months: <input type="text" v-model="editPuppyParams.months"> </p>
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
      message: "Puppy Edit Page",
      editPuppyParams: {},
    };
  },
  created: function () {},
  methods: {
    editPuppy: function () {
      console.log("Editing a puppy's info...");
    },
  },
};
</script>
