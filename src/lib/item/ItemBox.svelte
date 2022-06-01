<script lang="ts">
</script>

<div class="item-box-wrap">
  <div class="item-box">
    <div class="item-img-wrap">
      <img class="item-img" src="assets/test-item.png" alt="item" />
    </div>
    <div class="item-info-wrap">
      <div class="item-title">Title</div>
      <div class="item-price">
        <div></div>
        <div>100 MP</div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .item-box-wrap {
    width: 100%;
    /* height: 600px; */
  }
  .item-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: $secondary-color;
    color: $base-color;
    border: 1px solid lightgrey;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
  }

  .item-box:hover {
    background-color: $point-color;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .item-img-wrap {
    width: 100%;
  }

  .item-img {
    width: 100%;
    height: 10%;
    border-radius: 10px;
  }

  .item-info-wrap {
    width: 100%;
    font-weight: bold;
    margin-top: 10px;
    .item-title {
      width: 100%;
      display: flex;
      justify-content: start;
      margin-bottom: 10px;
      font-size: 0.9rem;
    }
    .item-price {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }

  @media screen and (max-width: 768px) {
    .item-box:hover {
      background-color: $secondary-color;
      box-shadow: none;
    }
    .item-box:active {
      background-color: $point-color;
      box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
</style>
