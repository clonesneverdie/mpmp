<script lang="ts">
  import { goto } from '$app/navigation'
  import { navMenu, navSet } from '$stores/index'
  import { faBars } from '@fortawesome/free-solid-svg-icons'
  import Fa from 'svelte-fa'
  import Connect from '$lib/connect/Connect.svelte'
  import { chainId } from '$stores/chain'
  import WalletModal from '$lib/connect/WalletModal.svelte'

  function goHome() {
    goto('/')
  }
</script>

<header>
  <div class="logo-wrap">
    <img class="logo" on:click="{goHome}" src="/assets/logo.png" alt="logo" />
  </div>
  <div class="menu-wrap">
    <div class="wallet-btn" on:click="{navSet}"><Connect /></div>
    <div
      class="nav-icon"
      on:click="{() => {
        $navMenu = !$navMenu
      }}"
    >
      <Fa icon="{faBars}" color="#D90000" />
    </div>
  </div>
</header>
<WalletModal />

{#if $chainId !== 137}
  <div class="modal">please chainge {$chainId}</div>
{/if}

<style lang="scss">
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $primary-color;
    padding: 10px 20px 10px 20px;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    filter: drop-shadow(0px 6px 4px rgba(0, 0, 0, 0.2));
    z-index: 2;
  }

  .logo-wrap {
    font-size: 1.7rem;
    font-weight: bold;
    width: 110px;
    color: $base-color;
    cursor: pointer;
  }

  .menu-wrap {
    display: flex;
    width: 220px;
    justify-content: flex-end;
  }

  .nav-icon {
    cursor: pointer;
    height: 100%;
    font-size: 1.7rem;
    margin-left: 20px;
  }

  .wallet-btn {
    background-color: $point-color;
    color: $base-color;
    /* padding: 5px 20px 5px 20px; */
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border-radius: 5px;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    font-weight: bold;
  }

  .wallet-btn:active {
    background-color: $point-color;
    color: $base-color;
    /* padding: 5px 20px 5px 20px; */
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border-radius: 5px;
    box-shadow: inset 2px 2px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    font-weight: bold;
  }

  .modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    background-color: antiquewhite;
  }

  .logo {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    .menu-wrap {
      display: flex;
      width: auto;
      justify-content: space-between;
    }
    .wallet-btn {
      display: none;
    }
  }
</style>
