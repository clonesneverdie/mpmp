<script lang="ts">
  import { userInfoMenu } from '$stores/index'
  import { disconnect } from '$lib/chain/Wallet.svelte'
</script>

{#if $userInfoMenu}
  <div class="modal-wrap">
    <div class="modal">
      <div class="item">
        <div class="name">Nickname</div>
      </div>
      <div class="item">
        <div class="name">My Info</div>
      </div>
      <div class="item">
        <div class="name" on:click="{disconnect}">Sign Out</div>
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  .modal-wrap {
    position: absolute;
    top: 80px;
    right: 62px;
    width: 250px;
  }
  .modal {
    display: flex;
    padding: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 1px solid lightgrey;
    border-radius: 20px;

    .item {
      background-color: lightpink;
      padding: 6px;
      margin: 4px;
    }
  }
</style>
