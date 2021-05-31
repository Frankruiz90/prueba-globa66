import axios from 'axios';

export const POKEAPI_URL_BASE = 'https://pokeapi.co';
export const POKEMON_COUNT_NUMBER = 1118;
export const POKEMON_URL = `${POKEAPI_URL_BASE}/api/v2/pokemon?limit=${POKEMON_COUNT_NUMBER}`;

export const pokemonsModule = {
  namespaced: true,
  state: () => ({
    isLoading: false,
    entities: [],
    details: {},
    hasLoadedAll: false,
    isShowAll: true,
    pokemonSelected: null,
    favorites: {},
    pokemonNameToSearch: ''
  }),
  mutations: {
    listRequested(state) {
      state.hasLoadedAll = false;
      state.isLoading = true;
    },
    listSuccess(state, entities) {
      state.isLoading = false;
      state.hasLoadedAll = true;
      state.entities = entities;
    },
    listFailed(state) {
      state.isLoading = false;
      state.hasLoadedAll = true;
      console.log('list request failed');
    },
    getByNameRequested(state) {
      state.isLoading = true;
    },
    getByNameSuccess(state, pokemon) {
      state.details = { ...state.details, [pokemon.name]: pokemon };
    },
    getByNameFailed(state) {
      state.isLoading = false;
      console.log('getByName request failed');
    },
    showAll(state, isShowAll) {
      state.isShowAll = isShowAll;
    },
    select(state, pokemon) {
      state.pokemonSelected = pokemon;
    },
    addToFavorites(state, pokemon) {
      state.favorites = { ...state.favorites, [pokemon.name]: pokemon };
    },
    removeFromFavorites(state, name) {
      const favorites = { ...state.favorites};
      delete favorites[name];
      state.favorites = favorites;
    },
    setPokemonNameToSearch(state, name) {
      state.pokemonNameToSearch = name;
    }
  },
  actions: {
    async list({ commit }) {
      commit('listRequested');
      try {
        const {
          data: { results: entities }
        } = await axios.get(`${POKEAPI_URL_BASE}/api/v2/pokemon?limit=${POKEMON_COUNT_NUMBER}`);
        commit('listSuccess', entities);
      } catch (err) {
        commit('listFailed');
      }
    },
    async getByName({ commit }, name) {
      commit('getByNameRequested');
      try {
        const { data: pokemon } = await axios.get(`${POKEAPI_URL_BASE}/api/v2/pokemon/${name}`);
        commit('getByNameSuccess', pokemon);
      } catch (err) {
        commit('getByNameFailed');
      }
    },
    showAll({ commit }, isShowAll) {
      commit('showAll', isShowAll);
    },
    select({ commit, dispatch }, pokemon) {
      dispatch('getByName', pokemon.name);
      commit('select', pokemon);
    },
    addToFavorites({ commit }, pokemon) {
      commit('addToFavorites', pokemon);
    },
    removeFromFavorites({ commit }, name) {
      commit('removeFromFavorites', name);
    },
    setPokemonNameToSearch({ commit }, name) {
      commit('setPokemonNameToSearch', name);
    }
  },
  getters: {
    getIsLoading: state => state.isLoading,
    getEntities: state => state.entities,
    getHasLoadedAll: state => state.hasLoadedAll,
    getDetail: state => (state.pokemonSelected ? state.details[state.pokemonSelected.name] : null),
    getIsShowAll: state => state.isShowAll,
    getPokemonSelected: state => state.pokemonSelected,
    getFavorites: state => state.favorites,
    getFavoriteList: state =>
      Object.keys(state.favorites).sort().map(key => state.favorites[key]),
    getPokemonNameToSearch: state => state.pokemonNameToSearch
  }
};
