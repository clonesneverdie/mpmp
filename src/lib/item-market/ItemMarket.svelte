<script lang="ts">
  import ItemBox from '$lib/item/ItemBox.svelte'
</script>

<div class="market-wrap">
  <div class="market">
    <div class="element-wrap">
      <!-- <div class="market-title-wrap">
        <div class="market-title">Clone V3 Parts</div>
      </div> -->
      <div class="market-btn-wrap">
        <div class="select-box">d</div>
        <!-- <div class="btns">d</div> -->
      </div>
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
</div>

<style lang="scss">
  .market-wrap {
    display: flex;
    margin-top: 119px;
    padding: 15px;
    flex: 1;
  }

  .market {
    display: flex;
    flex-direction: column;
    width: 100%;
    /* background-color: aquamarine; */
  }

  /* .market-title {
    font-weight: bold;
    font-size: 1.8rem;
    color: $primary-color;
  } */

  .list {
    display: flex;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
    overflow: hidden;
    overflow-y: scroll;
  }

  .list-item {
    display: flex;
    /* width: 25%; */
    padding: 10px;
    box-sizing: border-box;
    flex: 0 0 200px;
  }

  /* .market-title-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  } */

  .element-wrap {
    display: flex;
    justify-content: flex-end;
    padding-bottom: 15px;
  }

  .market-btn-wrap {
    display: flex;
    width: 50%;
    justify-content: flex-end;
  }

  /* .btns {
    background-color: $secondary-color;
    padding: 10px;
    border-radius: 10px;
    flex: 0 0 80px;
    box-sizing: border-box;
    margin-left: 10px;
  } */

  .select-box {
    padding: 10px;
    border-radius: 10px;
    flex: 0 0 170px;
    box-sizing: border-box;
    border: 2px solid $secondary-color;
  }

  @media screen and (max-width: 768px) {
    .list-item {
      display: flex;
      /* width: 25%; */
      padding: 10px;
      box-sizing: border-box;
      flex: 0 0 170px;
    }
    .element-wrap {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .market-btn-wrap {
      display: flex;
      width: 100%;
      justify-content: flex-end;
    }
  }
</style>
