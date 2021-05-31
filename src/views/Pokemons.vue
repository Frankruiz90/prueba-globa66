<template>
  <Loading v-if="!hasLoaded" />
  <div v-else class="pokemons__container">
    <div class="pokemons__content">
      <SearchInput class="pokemons__filter"/>
      <PokemonList class="pokemons__list" :list="pokemonList"/>
    </div>
    <PokemonListActions />
    <v-dialog v-model="dialog" width="500">
      <PokemonModalCard />
    </v-dialog>
  </div>
</template>

<script>
import Loading from '../views/Loading';
import SearchInput from '../components/SearchInput';
import PokemonList from '../components/PokemonList';
import PokemonListActions from '../components/PokemonListActions';
import PokemonModalCard from '../components/PokemonModalCard';

export default {
  name: 'Pokemons',
  data() {
    return {
      dialog: false
    }
  },
  components: {
    Loading,
    SearchInput,
    PokemonList,
    PokemonListActions,
    PokemonModalCard
  },
  created() {
    this.$store.dispatch('pokemons/list');
  },
  computed: {
    pokemonList() {
      return this.$store.getters['pokemons/getEntities'];
    },
    hasLoaded() {
      return this.$store.getters['pokemons/getHasLoadedAll'];
    },
    pokemonSelected() {
      return this.$store.getters['pokemons/getPokemonSelected']
    }
  },
  watch: {
    pokemonSelected(newValue) {
      if (newValue !== null) {
        this.dialog = true;
      } else {
        this.dialog = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/scss';
.pokemons {
  &__container {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 15px;
    height: 100vh;
    background-color: $white-bg;
  }

  &__content {
    max-width: 800px;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    max-height: calc(100% - 80px - 60px);
  }

  &__filter {
    margin-bottom: 40px;
  }
  
  &__list {
    display: flex;
    width: 100%;
    flex-grow: 1;
  }
}
</style>
