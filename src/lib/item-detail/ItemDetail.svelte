<script lang="ts">
  export let tokenId: string
</script>

<div class="detail-wrap">
  <div class="detail-bundle">
    <div class="left-side">
      <div class="detail-title-wrap">
        <div class="detail-title">Title: {tokenId}</div>
      </div>
      <div class="detail-img-wrap">
        <img class="detail-img" src="/assets/test-item.png" alt="item" />
      </div>
      <div class="detail-info">
        <div class="detail-info-total">Total: 100</div>
        <div class="detail-info-link">Go to Opensea</div>
      </div>
    </div>
    <div class="right-side">
      <div class="detail-state">
        <div class="sale-state">Sale</div>
        <div class="limited-state">Limited</div>
      </div>
      <div class="detail-buy-wrap">
        <div class="wrap-title">Price</div>
        <div class="box">
          <div class="price">100 MP</div>
          <div class="buy-btn">
            <div class="btn-text">Buy</div>
          </div>
        </div>
      </div>
      <div class="detail-property-wrap">
        <div class="wrap-title">Property</div>
        <div class="box">
          <div class="property-wrap">
            <div class="property-box">
              <div class="property-type">Effect</div>
              <div class="property-content">TENMEN-Seris</div>
            </div>
          </div>
        </div>
      </div>
      <div class="detail-stats-wrap">
        <div class="wrap-title">Stats</div>
        <div class="box">
          <div class="stats-wrap">
            <div class="stats-box">
              <div class="stats-type">Attack</div>
              <div class="stats-content">900</div>
            </div>
          </div>
          <div class="stats-wrap">
            <div class="stats-box">
              <div class="stats-type">Attack</div>
              <div class="stats-content">900</div>
            </div>
          </div>
          <div class="stats-wrap">
            <div class="stats-box">
              <div class="stats-type">Defense</div>
              <div class="stats-content">800</div>
            </div>
          </div>
          <div class="stats-wrap">
            <div class="stats-box">
              <div class="stats-type">Defense</div>
              <div class="stats-content">800</div>
            </div>
          </div>
          <div class="stats-wrap">
            <div class="stats-box">
              <div class="stats-type">Defense</div>
              <div class="stats-content">800</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .detail-wrap {
    width: 100%;
  }

  .detail-bundle {
    display: flex;
  }

  .left-side {
    padding: 50px;
    width: 40%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }

  .right-side {
    padding: 50px;
    width: 60%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }

  .box {
    width: 100%;
    display: flex;
    flex-direction: column;
    font-weight: bold;
    box-sizing: border-box;
    border: 1px solid lightgrey;
    background-color: $point-color;
    border-radius: 20px;
  }

  .detail-title-wrap {
    display: flex;
    margin-bottom: 30px;
    width: 100%;
    .detail-title {
      font-size: 1.8rem;
      font-weight: bold;
      color: $primary-color;
    }
  }

  .detail-img-wrap {
    width: 100%;
    margin-bottom: 30px;

    .detail-img {
      width: 100%;
      border: 1px solid lightgrey;
      border-radius: 20px;
      box-sizing: border-box;
    }
  }

  .detail-info {
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
    font-weight: bold;
    color: black;
    box-sizing: border-box;
    border: 1px solid lightgrey;
    background-color: $point-color;
    border-radius: 10px;
    margin-bottom: 30px;

    .detail-info-total {
      padding: 10px;
    }
    .detail-info-link {
      padding: 10px;
    }
  }

  .detail-state {
    width: 100;
    display: flex;
    margin-bottom: 30px;
    color: white;
    .sale-state {
      padding: 5px 10px;
      box-sizing: border-box;
      background-color: lightpink;
      margin-right: 10px;
      border-radius: 5px;
    }
    .limited-state {
      padding: 5px 10px;
      box-sizing: border-box;
      background-color: lightpink;
      margin-right: 10px;
      border-radius: 5px;
    }
  }

  .detail-buy-wrap {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    .price {
      padding: 30px 30px 0px 30px;
      font-size: 2rem;
      color: $primary-color;
    }
    .buy-btn {
      margin: 30px;
      background-color: $primary-color;
      display: flex;
      justify-content: center;
      border-radius: 10px;
      .btn-text {
        font-size: 1.5rem;
        padding: 10px;
        color: $base-color;
      }
    }
  }

  .detail-property-wrap {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    box-sizing: border-box;

    .box {
      flex-direction: row;
      box-sizing: border-box;
      padding: 20px;
      flex-wrap: wrap;
      justify-content: flex-start;
    }
    .property-wrap {
      width: 50%;
      padding: 10px;
      display: flex;
      box-sizing: border-box;
      font-size: 0.9rem;
      .property-box {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: $primary-color;
        border-radius: 10px;
        color: $base-color;
        border: 1px solid $primary-color;
        box-sizing: border-box;
        .property-type {
          padding: 10px;
        }
        .property-content {
          padding: 10px;
        }
      }
    }
  }

  .detail-stats-wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    .box {
      flex-direction: row;
      box-sizing: border-box;
      padding: 20px;
      flex-wrap: wrap;
      justify-content: flex-start;
    }
    .stats-wrap {
      width: 33.3%;
      padding: 10px;
      display: flex;
      box-sizing: border-box;
      font-size: 0.9rem;
      .stats-box {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: $primary-color;
        border-radius: 10px;
        color: $base-color;
        border: 1px solid $primary-color;
        box-sizing: border-box;
        .stats-type {
          padding: 10px;
        }
        .stats-content {
          padding: 10px;
        }
      }
    }
  }

  .wrap-title {
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 10px;
    color: $primary-color;
  }

  @media screen and (max-width: 768px) {
    .detail-bundle {
      display: flex;
      flex-direction: column;
    }
    .left-side {
      padding: 0px;
      width: 100%;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
    }

    .right-side {
      padding: 0px;
      width: 100%;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
    }
  }
</style>
