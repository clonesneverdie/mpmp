<script lang="ts">
  import TokenMenuBtn from '$lib/btn-box/TokenMenuBtn.svelte'
  import { pathData } from './path'
</script>

<div class="wrap">
  <div class="title">MP Token</div>
  <div class="box-list">
    {#each pathData as path}
      <div class="box-wrap">
        <TokenMenuBtn title="{path.title}" path="{path.path}" icon="{path.icon}" />
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .wrap {
    max-width: 1280px;
    background-color: $base-color;
    margin: 0px auto;
    padding: 80px 15px 10px 15px;
  }

  .title {
    font-size: 1.8rem;
    font-weight: bold;
    color: $primary-color;
    display: flex;
    margin: 20px 0px;
  }

  .box-list {
    display: flex;
    flex-wrap: wrap;
  }

  .box-wrap {
    width: 33.33%;
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    .wrap {
      max-width: 1280px;
      background-color: $base-color;
      margin: 0px auto;
      padding: 80px 15px 10px 15px;
    }

    .box-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .box-wrap {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
</style>
