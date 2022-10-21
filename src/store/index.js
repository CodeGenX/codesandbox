import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    selOptions: [],
    selectedSelOption: [],
    counter: 3,
    customers: {
      customers: [
        { id: 1, name: "Alice", priceListId: 100 },
        { id: 2, name: "Bob", priceListId: 200 },
        { id: 3, name: "Charlie", priceListId: 300 }
      ]
    },
    selectedItem: {
      selectedItem: [
        {
          id: "-L_UU2Ca0hEruJ8Yxwt2",
          idcategoria: "-LWPTMu1m4WYO1wzJFiv",
          nombre: "Mazda 2019 - PP223PRL",
          placa: "P223PRL"
        }
      ]
    },
    vehiculos_usuario: {
      vehiculos_usuario: [
        {
          id: "-L_UU2Ca0hEruJ8Yxwt2",
          idcategoria: "-LWPTMu1m4WYO1wzJFiv",
          nombre: "Mazda 2019 - PP223PRL",
          placa: "P223PRL"
        },
        {
          id: "-L_UYxSRD9_1rb02fp5X",
          idcategoria: "-LWPRsmK3uBYWGeixA8E",
          nombre: "Honda - Moto - CC222RRR",
          placa: "C222RRR"
        }
      ]
    }
  },
  mutations: {
    SET_USERS(state, payload) {
      state.users = payload;
      console.log("In SET_USERS" + state.users);
    }, // SET_USER
    SET_SELOPTIONS(state, payload) {
      state.selOptions = payload;
      console.log("In SET_SELOPTIONS" + state.selOptions);
    }, // SET_SELOPTIONS
    SET_SELECTEDOPTIONS(state, payload) {
      state.selectedSelOption = payload;
      console.log(
        "In SET_SELECTEDOPTIONS" + JSON.stringify(state.selectedSelOption)
      );
    } // SET_SELECTEDOPTIONS
  },
  getters: {
    getUsers: (state) => state.users,
    getSelOptions: (state) => state.selOptions
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const data = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        commit("SET_USERS", data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    }, //

    async fetchSelOptions({ commit }) {
      try {
        const data = await axios.get("http://localhost:3000/myselectoptions");
        commit("SET_SELOPTIONS", data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    }, //

    setSelOption({ commit }, payload) {
      commit("SET_SELECTEDOPTIONS", payload);
    }
  }
});
