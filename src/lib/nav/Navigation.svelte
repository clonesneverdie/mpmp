<script lang="ts">
  import { goto } from '$app/navigation'
  import { navMenu, navSet } from '$stores/index'
  import { fly } from 'svelte/transition'
  import { faTimes } from '@fortawesome/free-solid-svg-icons'
  import Connect from '$lib/connect/Connect.svelte'
  import Fa from 'svelte-fa'
</script>

{#if $navMenu}
  <nav transition:fly="{{ x: 300, opacity: 1 }}">
    <div class="close">
      <div></div>
      <div class="close-btn" on:click="{navSet}">
        <Fa icon="{faTimes}" color="#E3DAE7" />
      </div>
    </div>
    <div class="btn-wrap">
      <div class="wallet-btn"><Connect /></div>
    </div>
    <div class="menu">Clone V3</div>
    <div
      class="menu"
      on:click="{() => {
        navSet()
        goto('/parts')
      }}"
    >
      Clone Parts
    </div>
    <div
      class="menu"
      on:click="{() => {
        navSet()
        goto('/token')
      }}"
    >
      MP Token
    </div>
  </nav>
  <div class="back" on:click="{navSet}"></div>
{/if}

<style lang="scss">
  nav {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    padding: 10px;
    /* overflow-y: auto; */
    width: 15rem;
    z-index: 6;
    background-color: $primary-color;
  }
  .back {
    position: fixed;
    top: 0;
    left: 0;
    background-color: #000000;
    opacity: 0.4;
    width: 100vw;
    height: 100vh;
    z-index: 5;
  }
  .menu {
    display: flex;
    justify-content: start;
    margin: 15px;
    padding: 15px;
    font-size: 1.2rem;
    cursor: pointer;
    font-weight: bold;
    color: $base-color;
  }
  .close {
    display: flex;
    justify-content: space-between;
  }
  .close-btn {
    font-size: 1.7rem;
    display: flex;
    padding: 10px;
    cursor: pointer;
  }
  .wallet-btn {
    display: none;
  }
  @media screen and (max-width: 768px) {
    .wallet-btn {
      display: flex;
      background-color: $base-color;
      color: $primary-color;
      /* padding: 5px 20px 5px 20px; */
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      border-radius: 5px;
      box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
      cursor: pointer;
      font-weight: bold;
    }

    .wallet-btn:active {
      background-color: $base-color;
      color: $primary-color;
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
    .btn-wrap {
      display: flex;
      justify-content: center;
    }

    .close {
      display: flex;
      justify-content: space-between;
    }
    .close-btn {
      font-size: 1.7rem;
      display: flex;
      padding: 10px;
      cursor: pointer;
    }
  }
</style>
