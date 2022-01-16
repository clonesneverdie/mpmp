<script lang="ts">
  import Header from '$lib/header/Header.svelte'
  import Footer from '$lib/footer/Footer.svelte'
  import Nav from '$lib/nav/Navigation.svelte'
  import '../global.css'
</script>

<Header />

<Nav />

<main>
  <div class="wrap">
    <slot />
  </div>
</main>

<Footer />

<style lang="scss">
  main {
    .wrap {
      max-width: 1280px;
      background-color: $base-color;
      max-width: 1280px;
      margin: 0px auto;
      padding: 80px 20px 10px 20px;
    }
    background-color: $base-color;
    margin: 0px auto;
    height: 80vh;
  }
</style>
