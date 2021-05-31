<template>
  <div class="pokemon-card__container" @click="selectPokemon()">
    <div class="pokemon-card__name">
      <span>{{ pokemon.name }}</span>
    </div>
    <div class="pokemon-card__fav">
      <img src="../assets/fav-enabled.svg" alt="Favorite enabled icon" v-if="isFavorite" @click="removeFromFavorites($event)">
      <img src="../assets/fav-disabled.svg" alt="Favorite disabled icon" v-else @click="addToFavorites($event)"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PokemonCard',
  props: {
    pokemon: {
      type: Object,
      required: true
    }
  },
  methods: {
    selectPokemon() {
      this.$store.dispatch('pokemons/select', this.pokemon);
    },
    addToFavorites(event) {
      event.stopPropagation();
      this.$store.dispatch('pokemons/addToFavorites', this.pokemon);
    },
    removeFromFavorites(event) {
      event.stopPropagation();
      this.$store.dispatch('pokemons/removeFromFavorites', this.pokemon.name);
    }
  },
  computed: {
    favoritePokemons() {
      return this.$store.getters['pokemons/getFavorites'];
    },
    isFavorite() {
      return this.favoritePokemons
        ? this.favoritePokemons[this.pokemon.name] !== undefined
        : null;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/scss';
.pokemon-card {
  &__container {
    display: flex;
    background-color: $white;
    width: 100%;
    min-height: 60px;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    font-weight: bold;
    font-size: 22px;
    color: $dark-gray-text;
    text-transform: capitalize;

    &:hover {
      cursor: pointer;
    }
  }

  &__name {
  }

  &__fav {
    user-select: none;
    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
