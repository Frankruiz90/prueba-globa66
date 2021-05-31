<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span>{{pokemons}}</span>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  created() {
    this.$store.dispatch('pokemons/list');
  },
  computed: {
    pokemons() {
      return this.$store.getters['pokemons/getEntities'];
    },
    firstPokemonName() {
      return this.pokemons ? this.pokemons[0].name: '';
    },
    firstPokemon() {
      return this.firstPokemonName ? this.$store.getters['pokemons/getEntities', this.firstPokemonName]: null;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
