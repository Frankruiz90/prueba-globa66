<template>
  <div class="pokemon-list-actions__container">
    <div class="pokemon-list-actions__btns">
      <button class="pokemon-list-actions__btn" :primary="isShowAll" @click="showPokemons(true)">
        <img src="../assets/all-icon.svg" alt="All icon">
        All
      </button>
      <button class="pokemon-list-actions__btn" :primary="!isShowAll" @click="showPokemons(false)">
        <img src="../assets/favorite-icon.svg" alt="Favorite icon">
        Favorites
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PokemonListActions',
    methods: {
      showPokemons(showAll) {
        this.$store.dispatch('pokemons/showAll', showAll);
      }
    },
    computed: {
      isShowAll() {
        return this.$store.getters['pokemons/getIsShowAll'];
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '../assets/styles/scss';
  .pokemon-list-actions {
    &__container {
      box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.05);
      position: absolute;
      width: 100vw;
      height: 80px;
      margin: auto 0;
      bottom: 0px;
      background-color: $white;
    }
    &__btns {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
    }
    &__btn {
      width: 275px;
      max-width: 275px;
      margin: 0 15px;
    }
  }
</style>