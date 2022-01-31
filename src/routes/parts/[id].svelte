<script lang="ts">
  import { page } from '$app/stores'
  import { onMount } from 'svelte'
  import ItemDetail from '$lib/item-detail/ItemDetail.svelte'
  const tokenId: string = $page.params.id
</script>

<div class="wrap">
  <ItemDetail tokenId="{tokenId}" />
</div>

<style lang="scss">
  .wrap {
    max-width: 1280px;
    margin: 0px auto;
    box-sizing: border-box;
    padding: 80px 15px 10px 15px;
  }
</style>
