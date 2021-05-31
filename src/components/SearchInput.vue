<template>
  <div class="search-input__container">
    <div class="search-input__icon">
      <img class="search-input__icon" src="../assets/search-icon.svg" alt="Search input icon" />
    </div>
    <input class="search-input__input" v-model="pokemonNameToSearch" placeholder="Search" />
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  data() {
    return {
      pokemonNameToSearch: ''
    };
  },
  watch: {
    pokemonNameToSearch(newValue) {
      this.$store.dispatch('pokemons/setPokemonNameToSearch', newValue);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/scss';
.search-input {
  &__container {
    width: 100%;
    display: flex;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
    border-radius: 5px;
    background-color: $white;
    padding: 14px;
  }
  &__icon {
    display: flex;
    margin-right: 5px;
  }
  &__input {
    display: flex;
    flex-grow: 1;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;

    &::placeholder {
      color: $gray-input-label;
    }
    &:focus {
      outline: none;
    }
  }
}
</style>
