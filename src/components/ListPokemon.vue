<template>
  <div class="container">
    <div class="container-card">
      <v-card
        v-for="(pokemon, index) in listPokemon"
        :key="index"
        class="container-card__card"
      >
        <v-card-title class="title-pokemon container-card__card__title">
          {{ pokemon.name }}
          <v-spacer></v-spacer>
          <div class="container-card__card__img" @click="addPokemon(pokemon)">
            <v-img
              class="container-card__card__img__my-img"
              max-height="26"
              max-width="26"
              src="../assets/stargrey.svg"
            ></v-img>
          </div>
        </v-card-title>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    listPokemon: {
      type: Array,
    },
  },
  methods: {
    addPokemon(pokemonSelected) {
      this.$store.state.favoritePokemon = pokemonSelected;
      this.$store.dispatch("addPokemonAction");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/main";
.container {
  padding-bottom: 20px;
  overflow: auto;
  background-color: $background;
  height: 100vh;
  max-width: 100%;
  max-height: 100%;
  &-card {
    margin: 0 30px;
    max-height: 60px;
    border-radius: 5px;
    &__card {
      margin-bottom: 10px;
      &__title {
        padding: 17px 20px;
      }
      &__img {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 100%;
        width: 44px;
        height: 44px;
        &:hover {
          background-color: $background-hover;
        }
        &__my-img {
          // border-radius: 100%;
        }
      }
    }
  }
}
</style>