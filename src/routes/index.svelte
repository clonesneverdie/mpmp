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
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@digitalocean" />
  <meta name="twitter:title" content="Sammy the Shark" />
  <meta name="twitter:description" content="Senior Selachimorpha at DigitalOcean" />
  <meta name="twitter:image" content="https://html.sammy-codes.com/images/large-profile.jpg" />
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
