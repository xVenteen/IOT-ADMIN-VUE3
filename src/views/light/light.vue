<template>
  <div class="containe">
    <div class="header">
      <div class="title">实时光强数据监测</div>
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
      </div>
    </div>
    <div class="main">
      <div class="left echarts"><gauge :id="1"></gauge></div>
      <div class="right echarts"><gauge :id="2"></gauge></div>
      <!-- <div class="right echarts"><gauge></gauge></div> -->
    </div>
  </div>
</template>

<script>
import gauge from "@/components/echarts/gauge.vue";
export default {
  name: "light",
  components: { gauge },
};
</script>

<style lang="scss" scoped>
.containe {
  display: flex;
  flex-direction: column;
  align-items: center;
  .header {
    .title {
      display: flex;
      justify-content: center;
    }
    .data-boxs {
      display: flex;
      color: white;
      width: 95vw;
      justify-content: space-between;
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
    }
    .one {
      background: url("src/assets/Light-intensity-page_Light-intensity-black.png");
    }
  }

  .main {
    display: flex;
    width: 100%;
    justify-content: space-between;
    .echarts {
      width: 50%;
    }
  }
}
</style>