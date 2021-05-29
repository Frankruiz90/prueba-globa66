<template>
  <list-pokemon />
</template>

<script>
import ListPokemon from "../components/ListPokemon";
import axios from 'axios';

export default {
  name: "Home",
  data() {
    return {
      url: 'https://pokeapi.co/api/v2/pokemon',
      paginationConfig: {
        offset: 0,
        limit: 20
      },
    }
  },
  components: {
    ListPokemon,
  },
  created () {
    this.getListPokemon();
  },
  methods: {
    async getListPokemon() {
      const response = await axios.get(`${this.url}?offset=${this.paginationConfig.offset}&limit=${this.paginationConfig.limit}`);
      console.log(response);
    },
  },
};
</script>
