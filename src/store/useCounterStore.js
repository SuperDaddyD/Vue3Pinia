import { defineStore } from "pinia";

export const useCounterStore = defineStore("storeBoy", {
  state: () => ({
    counter: 0,
    status:"Shady AS FUCK!!",
    name: "Deinde",
    music:"Busta Rhymes!"
  }),
  getters: {
    doubleCount: (state) => {
      state.couter * 2;
    },
  },
  actions: {
    reset() {
      this.counter = 0;
    },
    addOne() {
      this.counter++;
    },
    addThree(){
      this.counter+ 5;
    },
    janky(){
      this.status ="Cool Hand Look";
    }
  },
});
