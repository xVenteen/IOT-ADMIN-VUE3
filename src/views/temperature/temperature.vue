<template>
  <div class="containe">
    <div class="header">
      <div class="title">实时温度数据监测</div>
      <div class="data-boxs">
        <div class="one adata">
          <div class="mesg">
            <p style="margin-right: 10px">13.8℃</p>
            <p>温度</p>
          </div>
          <div class="progress">
            <van-progress
              :percentage="50"
              stroke-width="2"
              :show-pivot="false"
              style="width: 80%"
              track-color="rgba(255,255,255,0.5)"
              color="white"
            />
            <p>70%</p>
          </div>
        </div>
        <div class="two adata2">
          <div class="adata-pic co2">
            <p style="margin-left: 10px">CO</p>
            <p style="font-size: 10px; margin-right: 10px">2</p>
          </div>
          <div class="mesg">
            <p>二氧化碳</p>
            <p>178mg</p>
          </div>
        </div>
        <div class="three adata2">
          <div class="adata-pic">
            <img src="src/assets/Temperature-page_wind-icon.png" alt="" />
          </div>
          <div class="mesg">
            <p>风速</p>
            <p>26km/h</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Progress } from "vant";
export default {
  name: "temperature",
  components: {
    [Progress.name]: Progress,
  },
};
</script>

<style lang="scss" scoped>
.containe {
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    margin-bottom: 30px;
  }
  .data-boxs {
    color: white;
    width: 95vw;
    display: flex;
    justify-content: space-between;
    .one {
      background: url("src/assets/Temperature-page_Temperature.png");
    }
    .two {
      background: url("src/assets/Temperature-page_carbon-dioxide.png");
    }
    .three {
      background: url("src/assets/Temperature-page_wind-speed.png");
    }
    .adata {
      height: 140px;
      width: 32vw;
      //   margin-bottom: 40px;
      border-radius: 20px;
      padding: 20px 15px;
      padding-bottom: 0;
      overflow: hidden;
      background-size: 100% 100%;
      .mesg {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        :nth-child(2) {
          font-size: 40px;
        }
      }
      .progress {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 8px;
      }
    }
    .adata2 {
      display: flex;
      //   text-align: center;
      align-items: center;
      height: 140px;
      width: 32vw;
      border-radius: 20px;
      //   overflow: hidden;
      background-size: 100% 100%;
      .co2 {
        background: url("src/assets/Temperature-page_white-background.png");
      }
      .adata-pic {
        // width: 100%;
        line-height: 140px;
        height: 140px;
        display: flex;
        align-items: baseline;
        background-size: 100px 100px;
        background-repeat: no-repeat;
        background-position: 15px 20px;
        p {
          font-weight: 800;
          font-size: 35px;
          background-image: -webkit-linear-gradient(
            bottom,
            #167ee7,
            #59c0eb,
            #59c0eb
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        img {
          margin: auto 12px;
          width: 100px;
        }
        // background-repeat: repeat-y;
      }

      .mesg {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        :nth-child(1) {
          font-size: 20px;
        }
        :nth-child(2) {
          font-size: 40px;
        }
      }
    }
  }
}
</style>