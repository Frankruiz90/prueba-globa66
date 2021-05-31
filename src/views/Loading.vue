<template>
  <div class="loading__container">
    <div class="loading__loader">
      <img alt="Pokemons loader" src="../assets/loader.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading'
};
</script>

<style lang="scss">
@import '../assets/styles/scss';
.loading {
  &__container {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    padding: 15px;
  }

  &__loader {
    img {
      animation: rotateContinuously 1.5s infinite linear;
    }
  }

  @keyframes rotateContinuously {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
