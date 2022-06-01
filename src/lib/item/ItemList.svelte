<script lang="ts">
  import ItemBox from './ItemBox.svelte'
</script>

<div class="list-wrap">
  <div class="list-title-wrap">
    <div class="list-title">Clone V3 Parts</div>
    <div class="more-list-btn">See All</div>
  </div>
  <div class="list">
    <div class="list-item">
      <ItemBox />
    </div>
    <div class="list-item">
      <ItemBox />
    </div>
    <div class="list-item">
      <ItemBox />
    </div>
    <div class="list-item">
      <ItemBox />
    </div>
    <div class="list-item">
      <ItemBox />
    </div>
    <div class="list-item">
      <ItemBox />
    </div>
    <div class="list-item">
      <ItemBox />
    </div>
    <div class="list-item">
      <ItemBox />
    </div>
    <div class="list-item">
      <ItemBox />
    </div>
    <div class="list-item">
      <ItemBox />
    </div>
  </div>
</div>

<style lang="scss">
  .list-wrap {
    padding: 20px 0px;
    display: flex;
    flex-direction: column;
  }
  .list-title {
    font-weight: bold;
    font-size: 1.8rem;
    /* margin-bottom: 10px; */
    color: $point-color;
  }
  .list {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }

  .list-title-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .list-item {
    display: flex;
    width: 20%;
    padding: 10px;
    box-sizing: border-box;
  }

  .more-list-btn {
    padding: 5px;
    font-weight: bold;
    color: $point-color;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    .list-item {
      display: flex;
      width: 50%;
      padding: 10px;
      box-sizing: border-box;
    }
  }
</style>
