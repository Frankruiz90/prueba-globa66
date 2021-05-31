<template>
  <div class="welcome__container">
    <div class="welcome__logo">
      <img alt="Pikachu logo" src="../assets/pikachu-logo.svg" />
    </div>
    <h1 class="welcome__title">Welcome to Pokédex</h1>
    <h2 class="welcome__detail">
      The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the
      Pokémon world.
    </h2>
    <button @click="goToListView()" primary>Get started</button>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  methods: {
    goToListView() {
      this.$router.push('/pokemons');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/scss';
.welcome {
  &__container {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    padding: 15px;
  }

  &__logo {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  &__title {
    font-weight: bold;
    margin-bottom: 30px;
  }

  &__detail {
    font-weight: normal;
    margin-bottom: 60px;
  }
}
</style>
