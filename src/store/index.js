import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fovitePokemons: [],
    favoritePokemon: null,
  },
  mutations: {
    addPokemon(state) {
      state.fovitePokemons = [state.favoritePokemon, ...state.fovitePokemons];
    },
  },
  actions: {
    addPokemonAction(context) {
      context.commit("addPokemon");
    },
  },
  modules: {},
});
