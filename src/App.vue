<script setup>
//https://www.youtube.com/watch?v=Ok6vO98RV_Q
//DOPE TUTORIAL!!!
import { useCounterStore } from "./store/useCounterStore";
import { storeToRefs, mapActions } from "pinia";

//First TECHNIQE TO ACCESS AND USE STORE IN PINIA
//Part 1. Grab  Reference TO STORE
const store = useCounterStore();
const { janky, reset } = store;

//Part 2. PUT STORE REFERENCE IN "storeToRefs "
//storeToRefs DOES NOT REFER TO METHODS!!!
const { counter, name, status, music } = storeToRefs(store);

//SECOND WAY TO USE STORE
//PART 1
//PART TWO IS ADD THIS IN TEMPLATE
//<button @click="addOne">Add with mapActions</button>

const { addOne } = mapActions(useCounterStore, ["addOne"]);

//THIRD TECHNIQE IS PATCH TECHNIQUE
//PATCH STYLE
//Part 1. Grab  Reference TO STORE
//THEN MAKE A FUNCTIONO AND USE store.$patch({
//counter:counter.value
//})
//THEN ADD TO TEMPLATE
//    <button @click="add(15)">Add with patch</button>

//SEE BELOW
function add(val) {
  store.$patch({
    counter: counter.value + val,
  });
}

//FOURTH TECHINQUE SECOND WAY TO DO PATCH IS
function adder(val) {
  store.$patch((state) => {
    console.log(state.counter);
    return (state.counter = state.counter + val);
  });
}
//This is built in NOT THE ONE FROM STORE!!!
// const reset =()=>{
//   store.$reset()
// }

//SUBSCRIBE TO LISTEN TO MUTATION OR STATE
store.$subscribe((mutation, state) => {
  console.log("mutations", mutation);
  console.log("state", state);
});

//PLUGIN TO STATE ANOTHER WAY
const clear = () => {
  store.$state = { counter: 500, name: "Bob Jones" };
};
</script>

<template>
  <div>
    <h1>Hello World My Name is {{ name }}</h1>
    <h3>{{ status }}</h3>
    <h2>{{ music }}</h2>
    <h4>{{ counter }}</h4>

    <button @click="store.addOne">Add with useCounterStore</button>
    <button @click="addOne">Add with mapActions</button>
    <button @click="add(15)">Add with patch</button>
    <button @click="add(43)">Add with patch second way</button>
    <div>
      <button @click="reset()">Reset!</button>
      <button @click="adder(4)">Reset Status</button>
      <button @click="janky()">janky</button>
      <button @click="clear()">Tap Into State Another Way</button>
    </div>
  </div>
</template>

<style scoped></style>
