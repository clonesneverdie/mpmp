<script lang="ts">
  import Header from '$lib/header/Header.svelte'
  import Footer from '$lib/footer/Footer.svelte'
  import Nav from '$lib/nav/Navigation.svelte'
  import '../globalcss.css'
</script>

<Header />

<Nav />

<main>
  <slot />
</main>

<Footer />

<style lang="scss">
  main {
    background-color: $base-color;
    margin: 0px auto;
  }
</style>
