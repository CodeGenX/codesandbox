<template>
  <v-app>
    <v-app-bar app color="primary">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        Counter: {{ $store.state.counter }}
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>fas fa-external-link-alt</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-flex xs12 sm6 d-flex>
        <v-select
          v-model="selectedSelOption"
          :items="getOptions"
          label="Select an Option"
          item-value="id"
          item-text="text"
          item-key="getOptions"
          return-object
          @change="selectedOption"
        ></v-select>
      </v-flex>

      <v-flex xs12 sm6 d-flex>
        <v-select
          v-model="selectedItem"
          :items="vehiculos_usuario"
          label="Select a vehicle"
          item-value="id"
          item-text="nombre"
          item-key="vehiculos_usuario"
          return-object
          @change="vehiculoSeleccionado"
        ></v-select>
      </v-flex>

      <div>
        <h1>{{ msg }}</h1>
        <h1>Made By Getters</h1>
        <div v-for="gettersUser in getUsers" :key="gettersUser.id">
          {{ gettersUser.id }} {{ gettersUser.name }} {{ gettersUser.address }}
        </div>
        <h1>Made By Actions</h1>
        <div v-for="user in users" :key="user.id">
          {{ user.id }} {{ user.name }} {{ user.address }}
        </div>
      </div>

      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "app",

  components: {
    HelloWorld,
  },

  data: () => ({
    msg: "Welcome to my Vuex Store",
  }), // data

  computed: {
    selectedSelOption() {
      return this.$store.state.selectedSelOption;
    }, //selectedItems()

    getOptions() {
      //return this.$store.state.vehiculos_usuario.vehiculos_usuario;
      return this.$store.getters.getSelOptions;
    },

    getUsers() {
      //return this.$store.state.vehiculos_usuario.vehiculos_usuario;
      return this.$store.getters.getUsers;
      //[{ id: "1", nombre: "xxxxx" }];
    },
    users() {
      return this.$store.state.users;
    },

    vehiculos_usuario() {
      return this.$store.state.vehiculos_usuario.vehiculos_usuario;
      //[{ id: "1", nombre: "xxxxx" }];
    },
    selectedItem() {
      return this.$store.state.selectedItem.selectedItem;
    }, //selectedItems()
  },
  methods: {
    //
    vehiculoSeleccionado(val) {
      console.log("Vehiculo Seleccionado");
      this.$store.state.selectedItem.selectedItem = val;
      console.log(val);
    }, //
    selectedOption(val) {
      console.log("In app.selectedOption" + JSON.stringify(val));
      this.$store.dispatch("setSelOption", val);
    }, //
  }, // methods

  mounted() {
    // dispatch the fetchUsers action which commits a mutation to update the state
    console.log("onMounted !!!");
    this.$store.dispatch("fetchUsers");
    this.$store.dispatch("fetchSelOptions");
  },
}; // default
</script>
