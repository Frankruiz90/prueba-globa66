<template>
  <list-pokemon v-if="listOfPokemon.length > 0" :listPokemon="listOfPokemon" />
</template>

<script>
import ListPokemon from "../components/ListPokemon";
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      listOfPokemon: [],
      url: "https://pokeapi.co/api/v2/pokemon",
      paginationConfig: {
        offset: 0,
        limit: 20,
      },
      nextpage: null,
      peviusPage: null,
    };
  },
  components: {
    ListPokemon,
  },
  created() {
    this.getListPokemon();
  },
  methods: {
    async getListPokemon() {
      const response = await axios.get(
        `${this.url}?offset=${this.paginationConfig.offset}&limit=${this.paginationConfig.limit}`
      );
      this.listOfPokemon = response.data.results;
    },
  },
};
</script>
