import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      {
        name: "Task1",
        isChecked: true,
      },
      {
        name: "Task2",
        isChecked: false,
      },
      {
        name: "Task3",
        isChecked: false,
      },
    ],
    tabs: [
      {
        name: "All",
        isChecked: true,
      },
      {
        name: "Active",
        isChecked: false,
      },
      {
        name: "Completed",
        isChecked: false,
      },
    ],
  },

  mutations: {
    createNewTask(state, task) {
      state.tasks.push({
       name: task,
        isChecked: false,
      })
    },
        deleteTask() {
     
    }
  },
  actions: {},
  getters: {
    getActiveTasksCount(state) {
      return state.tasks.filter(task => task.isChecked === false).length
    },
    getAllTasksCount(state) {
      return state.tasks.filter(task => task.isChecked === false).length + 1
    }
  },
  modules: {},
});
