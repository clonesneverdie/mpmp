<script lang="ts">
  import { page } from '$app/stores'
  import { onMount } from 'svelte'

  const tokenId: string = $page.params.id
</script>

<div class="wrap">
  <div class="test">{tokenId}</div>
</div>

<style lang="scss">
  .wrap {
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: space-between;
  }
  .test {
    width: 100%;
    margin-top: 110px;
  }
</style>
