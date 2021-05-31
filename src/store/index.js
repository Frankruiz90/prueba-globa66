import Vue from 'vue';
import Vuex from 'vuex';

import { pokemonsModule } from './pokemons';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    pokemons: pokemonsModule
  }
});
