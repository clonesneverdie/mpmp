<script context="module" lang="ts">
  export const prerender = true
  declare global {
    interface Window {
      WalletConnectProvider: any
    }
  }
</script>

<script lang="ts">
  import Banner from '$lib/banner/Banner.svelte'
  import ItemList from '$lib/item/ItemList.svelte'
</script>

<svelte:head>
  <title>MPMP | Mix-Pax Market Place</title>
</svelte:head>

<div class="wrap">
  <Banner />

  <ItemList />
  <ItemList />
  <ItemList />
</div>

<style lang="scss">
  /* @import '../../common.scss'; */
  .wrap {
    max-width: 1280px;
    background-color: $base-color;
    margin: 0px auto;
    padding: 80px 15px 10px 15px;
  }
</style>
