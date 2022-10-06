import Vue from "vue";
import Vuex from "vuex";
import { v4 as uuidv4 } from "uuid";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    tabActive: 'All',
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
        id: uuidv4(),
        name: task,
        isChecked: false,
      });
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    changeIsChecked(state, id) {
      state.tasks.map(task => {
        if (task.id == id) {
          task.isChecked = !task.isChecked;
          localStorage.setItem("tasks", JSON.stringify(state.tasks));
        }
      });

    },
    changeTabName(state, name) {
      state.tabActive = name;
    },
    addedTasks(state, tasksLocalStorage) {
      state.tasks = tasksLocalStorage;
    },
  },
  actions: {
    getTasksLocalStorage({ commit }) {
      const tasksLocalStorage = JSON.parse(localStorage.getItem("tasks")) || [];
      commit('addedTasks', tasksLocalStorage)
    }
  },
  getters: {
    getActiveTasksCount(state) {
      return state.tasks.filter((task) => task.isChecked === true).length;
    },
    getAllTasksCount(state) {
      return state.tasks.length;
    },
    getFilterTask(state) {
      if (state.tabActive == 'Active') {
        return state.tasks.filter(task => task.isChecked === false);
      } else if (state.tabActive == 'Completed') {
        return state.tasks.filter(task => task.isChecked === true);
      } else {
        return state.tasks;
      }
    },
  },
},
);
