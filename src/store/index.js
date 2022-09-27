import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        name: "Task1",
        isChecked: true,
      },
      {
        id: 2,
        name: "Task2",
        isChecked: false,
      },
      {
        id: 3,
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
      });
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
  },
  actions: {},
  getters: {
    getActiveTasksCount(state) {
      return state.tasks.filter((task) => task.isChecked === false).length;
    },
    getAllTasksCount(state) {
      return state.tasks.length;
    },
  },
  modules: {},
});
