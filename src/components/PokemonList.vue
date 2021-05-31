<template>
  <div class="pokemon-list__container">
    <v-virtual-scroll :bench="10" :items="filteredList" item-height="80">
      <template v-slot:default="{ item }">
        <PokemonCard class="pokemon-list__item" :pokemon="item" />
      </template>
    </v-virtual-scroll>
  </div>
</template>

<script>
import PokemonCard from './PokemonCard';

export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  components: {
    PokemonCard
  },
  computed: {
    currentList() {
      return this.$store.getters['pokemons/getIsShowAll']
        ? this.list
        : this.$store.getters['pokemons/getFavoriteList'];
    },
    currentPokemonNameToSearch() {
      return this.$store.getters['pokemons/getPokemonNameToSearch'];
    },
    filteredList() {
      if (this.currentPokemonNameToSearch === '') {
        return this.currentList;
      }
      return this.currentList && this.currentPokemonNameToSearch
      ? this.currentList.filter(data => data.name.includes(this.currentPokemonNameToSearch))
      : [];
    }
  }
};
</script>

<style lang="scss" scoped>
.pokemon-list {
  &__container {
    display: flex;
    flex-direction: column;
    height: 100%;
    max-height: 100%;
    position: relative;
  }
}
</style>
