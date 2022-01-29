<script lang="ts">
  import ItemBar from '$lib/item-bar/ItemBar.svelte'
  import ItemFilter from '$lib/item-filter/ItemFilter.svelte'
  import ItemMarket from '$lib/item-market/ItemMarket.svelte'
</script>

<ItemBar />
<div class="wrap">
  <ItemMarket />
  <ItemFilter />
</div>

<style lang="scss">
  .wrap {
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: space-between;
  }
</style>
