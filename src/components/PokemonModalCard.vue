<template>
  <div class="pokemon-modal-card__container" v-if="pokemonDetail">
    <div class="pokemon-modal-card__header">
      <img :src="pokemonDetail.sprites.front_default" alt="Pokemon avatar">
    </div>
    <div class="pokemon-modal-card__details" >
      <div class="pokemon-modal-card__detail">
        <span class="pokemon-modal-card__detail--bold">Name: </span>
        {{ pokemonDetail.name }}
      </div>
      <img src="../assets/divider.svg" alt="Divider" class="pokemon-modal-card__divider">
      <div class="pokemon-modal-card__detail">
        <span class="pokemon-modal-card__detail--bold">Weight: </span>
        {{pokemonDetail.weight}}
      </div>
      <img src="../assets/divider.svg" alt="Divider" class="pokemon-modal-card__divider">
      <div class="pokemon-modal-card__detail">
        <span class="pokemon-modal-card__detail--bold">Height: </span>
        {{pokemonDetail.height}}
      </div>
      <img src="../assets/divider.svg" alt="Divider" class="pokemon-modal-card__divider">
      <div class="pokemon-modal-card__detail">
        <span class="pokemon-modal-card__detail--bold">Types: </span>
        {{pokemonTypes}}
      </div>
      <img src="../assets/divider.svg" alt="Divider" class="pokemon-modal-card__divider">
    </div>
  </div>
</template>

<script>
export default {
  name: 'PokemonModalCard',
  computed: {
    pokemonDetail() {
      return this.$store.getters['pokemons/getDetail'];
    },
    pokemonTypes() {
      return this.pokemonDetail &&  this.pokemonDetail.types
        ? this.pokemonDetail.types
            .map(val => val.type.name[0].toUpperCase() + val.type.name.slice(1))
            .join(', ')
        : null;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/scss';
.pokemon-modal-card {
  &__container {
    background-color: $white;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 570px;
  }
  &__header {
    max-height: 220px;
    height: 220px;
    background-image: url(../assets/pokemon-background.svg);
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    img {
      height: 280px;
      width: 280px;
      // object-fit: contain;
    }
  }

  &__details {
    max-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 30px;
  }

  &__detail {
    height: 40px;

    &--bold {
      font-weight: bold;
    }
  }

  &__divider {
    width: 100%;
    transform: matrix(1, 0, 0, -1, 0, 0);
    margin-bottom: 10px;
  }
}
</style>
