<div class="item-bar">
  <div class="menu-btn-wrap">
    <div class="menu-btn-active">Parts</div>
    <div class="menu-btn">Fairy</div>
    <div class="menu-btn">Fairy</div>
  </div>
  <div class="filter-btn-wrap">
    <div class="filter-btn">Filter</div>
  </div>
</div>

<style lang="scss">
  .item-bar {
    display: flex;
    justify-content: space-between;
    background-color: $secondary-color;
    padding: 15px 20px 15px 20px;
    box-sizing: border-box;
    position: fixed;
    top: 63px;
    left: 0;
    right: 0;
    z-index: 2;
    color: $base-color;
    font-weight: bold;
    font-size: 1rem;
  }

  .menu-btn-wrap {
    display: flex;
    overflow-x: scroll;
    .menu-btn {
      display: flex;
      align-items: center;
      padding: 0px 20px;
      margin-right: 20px;
      border-radius: 10px;
      cursor: pointer;
      background-color: $primary-color;
    }
    .menu-btn-active {
      display: flex;
      align-items: center;
      padding: 0px 20px;
      margin-right: 20px;
      background-color: $point-color;
      border-radius: 10px;
      cursor: pointer;
    }
  }

  .filter-btn-wrap {
    display: flex;
    .filter-btn {
      display: flex;
      align-items: center;
      padding: 5px 20px;
      background-color: $primary-color;
      border-radius: 10px;
      cursor: pointer;
    }
  }
</style>
