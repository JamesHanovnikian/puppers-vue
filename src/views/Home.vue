<template>
  <div class="home">
    <h1>{{ message }}</h1>

    <div v-for="puppy in puppies"> 
      <ul> 
        <li>   {{ puppy.name }} </li>
        <li>   {{ puppy.breed}} </li>
        <li>   {{ puppy.months }} </li>

      <button> Edit Puppy </button>
      </ul>
    
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to the Puppies App!",
      puppies: [],
    };
  },
  created: function () {
    this.indexPuppies();
  },
  methods: {
    indexPuppies: function () {
      console.log("in index function");
      axios.get("http://localhost:3000/puppies").then((response) => {
        console.log("test");
        console.log(response.data);
        this.puppies = response.data;
      });
    },
  },
};
</script>




