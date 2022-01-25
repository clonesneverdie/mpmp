<script lang="ts">
  // import { nav } from '$app/stores'
  import { navMenu, navSet } from '$stores/index'
  import { faBars } from '@fortawesome/free-solid-svg-icons'
  import Fa from 'svelte-fa'
  import Connect from '$lib/connect/Connect.svelte'
</script>

<header>
  <div class="logo-wrap">
    <div>MPMP</div>
  </div>
  <div class="menu-wrap">
    <div class="wallet-btn" on:click="{navSet}"><Connect /></div>
    <div
      class="nav-icon"
      on:click="{() => {
        $navMenu = !$navMenu
      }}"
    >
      <Fa icon="{faBars}" color="#E3DAE7" />
    </div>
  </div>
</header>

<style lang="scss">
  header {
    display: flex;
    justify-content: space-between;
    background-color: $primary-color;
    padding: 20px;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }

  .logo-wrap {
    font-size: 1.7rem;
    font-weight: bold;
    color: $base-color;
  }

  .menu-wrap {
    display: flex;
    width: 200px;
    justify-content: space-between;
  }

  .nav-icon {
    cursor: pointer;
    height: 100%;
    font-size: 1.7rem;
  }

  .wallet-btn {
    background-color: $base-color;
    color: $primary-color;
    padding: 5px 20px 5px 20px;
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
    background-color: $base-color;
    color: $primary-color;
    padding: 5px 20px 5px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border-radius: 5px;
    box-shadow: inset 2px 2px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    font-weight: bold;
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
