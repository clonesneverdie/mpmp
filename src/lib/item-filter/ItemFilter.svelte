<script lang="ts">
  import { faSortDown } from '@fortawesome/free-solid-svg-icons'
  import Fa from 'svelte-fa'
  import { fly } from 'svelte/transition'
  let isOpen = false
  const primaryColor = '#070707'
  const pointColor = '#D90000'

  let color = primaryColor
  let titleIcon = faSortDown

  function setIsOpen() {
    isOpen = !isOpen
    if (color === primaryColor) {
      color = pointColor
    } else {
      color = primaryColor
    }
  }
</script>

<div class="filter-wrap">
  <div class="filter-content">
    <div class="filter-category">
      <div class="category-title-wrap" on:click="{setIsOpen}" style="--color: {color};">
        <div class="category-title">Property</div>
        <Fa icon="{titleIcon}" color="#ffffff" size="2x" />
      </div>
      {#if isOpen}
        <div class="category-content">
          <div class="category-content-element">Hat</div>
          <div class="category-content-element">Hat</div>
        </div>
      {/if}
    </div>
    <!-- <div class="filter-category">
      <div class="category-title-wrap" on:click="{setIsOpen}">
        <div class="category-title">Property</div>
        <Fa icon="{titleIcon}" color="#ffffff" size="2x" />
      </div>
      {#if true}
        <div transition:fly="{{ y: -5, opacity: 0 }}" class="category-content">
          <div class="category-content-element">Hat</div>
          <div class="category-content-element">Hat</div>
        </div>
      {/if}
    </div> -->
  </div>
</div>

<style lang="scss">
  .filter-wrap {
    background-color: $secondary-color;
    margin-top: 119px;
    flex: 0 0 16rem;
    right: 0;
    /* padding: 10px; */
    z-index: 0;
    border-top: 1px solid black;
    /* box-sizing: border-box; */
  }

  .filter-content {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  /* .filter {
    width: 100%;
    box-sizing: border-box;
  } */

  .filter-category {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .category-title-wrap {
    display: flex;
    width: 100%;
    justify-content: space-between;
    cursor: pointer;
    color: $base-color;
    padding: 0px 10px 18px 10px;
    box-sizing: border-box;
    background-color: var(--color);
  }
  .category-title {
    display: flex;
    align-items: flex-end;
    font-weight: bold;
    font-size: 1rem;
  }

  .category-content {
    display: flex;
    width: 100%;
    background-color: lightgrey;
    padding: 10px;
    box-sizing: border-box;
  }

  .category-content-element {
    display: flex;
  }
  @media screen and (max-width: 768px) {
    .filter-wrap {
      display: none;
    }
  }
</style>
