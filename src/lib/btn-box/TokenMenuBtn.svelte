<script lang="ts">
  export let title: string
  export let path
  export let icon
  import Fa from 'svelte-fa'
</script>

<div class="btn-wrap">
  <div class="box" on:click="{path}">
    <div class="title">{title}</div>
    <Fa icon="{icon}" color="#848CCF" size="9x" />
  </div>
</div>

<style lang="scss">
  .btn-wrap {
    padding: 30px;
    box-sizing: border-box;
    display: flex;
    flex: 0 0 300px;
    max-width: 300px;
  }

  .box {
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 30px;
    align-items: center;
    flex-direction: column;
    font-weight: bold;
    box-sizing: border-box;
    border: 1px solid lightgrey;
    background-color: $point-color;
    border-radius: 20px;
    height: 300px;
    cursor: pointer;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .box:active {
    box-shadow: inset 2px 2px rgba(0, 0, 0, 0.25);
  }

  .title {
    font-size: 1.6rem;
    display: flex;
    color: $primary-color;
  }

  @media screen and (max-width: 768px) {
    .btn-wrap {
      padding: 10px;
      padding-bottom: 30px;
      box-sizing: border-box;
      display: flex;
      max-width: 270px;
    }
  }
</style>
