<template>
  <div class="containe">
    <div class="header">
      <div class="title">实时光强数据监测</div>
      <div class="data-boxs">
        <div class="one adata">
          <div class="mesg">
            <p>80 lux</p>
            <p>光强监测</p>
          </div>
          <div class="progress">
            <van-progress
              :percentage="85"
              stroke-width="4"
              :show-pivot="false"
              track-color="rgba(255,255,255,0.5)"
              style="width: 80%"
              color="white"
            />
            <p>85%</p>
          </div>
        </div>
      </div>
    </div>
    <div class="main-gauge">
      <div class="echarts">
        <div class="title">光强检查</div>
        <gauge :id="1" style="height: 108px"></gauge>
      </div>
      <div class="echarts">
        <div class="title">光强平均值</div>
        <gauge :id="2" style="height: 108px"></gauge>
      </div>
      <!-- <div class="right echarts"><gauge></gauge></div> -->
    </div>
    <div class="main-bar">
      <ul>
        <li>
          <span>技术</span>
          <div class="progress">
            <van-progress
              :percentage="85"
              stroke-width="6"
              :show-pivot="false"
              track-color="#dde8ed"
              color="#f49186"
              style="width: 70%; margin-right: 20px"
            />
            <p>80%</p>
          </div>
        </li>
        <li>
          <span>无障碍</span>
          <div class="progress">
            <van-progress
              :percentage="85"
              stroke-width="6"
              :show-pivot="false"
              track-color="#dde8ed"
              color="#f49186"
              style="width: 70%; margin-right: 20px"
            />
            <p>80%</p>
          </div>
        </li>
        <li>
          <span>安全</span>
          <div class="progress">
            <van-progress
              :percentage="85"
              stroke-width="6"
              :show-pivot="false"
              track-color="#dde8ed"
              color="#f49186"
              style="width: 70%; margin-right: 20px"
            />
            <p>80%</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="main-category">
      <div class="title">光强增减数据统计</div>
      <div class="category">
        <category :option="option"></category>
      </div>
    </div>
  </div>
</template>

<script>
import gauge from "@/components/echarts/gauge.vue";
import category from "@/components/echarts/category.vue";
import { Progress } from "vant";
import * as echarts from "echarts";
export default {
  name: "light",
  components: { gauge, category, [Progress.name]: Progress },
  setup() {
    let option = {
      color: ["#FFBF00"],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          data: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "00:00"],
        },
      ],
      yAxis: {
        type: "value",
        splitNumber: 3,
      },
      series: [
        {
          name: "Line 1",
          type: "line",
          stack: "Total",
          smooth: true,
          lineStyle: {
            width: 0,
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              {
                offset: 0,
                color: "#ed7281",
              },
              {
                offset: 0.8,
                color: "#f59386",
              },
              {
                offset: 1,
                color: "#fcb58c",
              },
            ]),
          },
          emphasis: {
            focus: "series",
          },
          data: [140, 232, 101, 264, 90, 340, 250],
        },
      ],
    };
    return { option };
  },
};
</script>

<style lang="scss" scoped>
.containe {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  .header {
    margin-bottom: 30px;
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
        overflow: hidden;
        background-size: 100% 100%;
        .mesg {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 15px;
          :nth-child(1) {
            font-size: 40px;
          }
          :nth-child(2) {
            font-size: 30px;
          }
        }
        .progress {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-size: 5px;
          // width: 100%;
        }
      }
    }
    .one {
      background: url("src/assets/Light-intensity-page_Light-intensity-black.png");
    }
  }

  .main-gauge {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 50px;
    .echarts {
      // display: flex;
      // justify-content: center;
      width: 47%;
      border: 1px solid #d5d5d5;
      border-radius: 10px;

      .title {
        display: flex;
        justify-content: center;
        width: 100%;
        font-size: 20px;
        font-weight: 700;
        background-color: #fafafa;
        height: 80px;
        line-height: 80px;
        margin: 0;
        margin-bottom: 20px;
      }
    }
  }
  .main-bar {
    border: 1px solid #d5d5d5;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 700;
    width: 100%;
    ul {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 100%;
      li {
        display: flex;
        text-align: left;
        margin: 50px;
        width: 100%;
        span {
          display: inline-block;
          width: 200px;
          // margin-right: 50px;
        }
        .progress {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-size: 5px;
          width: 80%;
        }
      }
    }
  }
  .main-category {
    width: 100%;
    border: 1px solid #d5d5d5;
    border-radius: 10px;

    .title {
      display: flex;
      justify-content: space-between;
      width: 100%;
      font-size: 20px;
      font-weight: 700;
      background-color: #fafafa;
      height: 80px;
      line-height: 80px;
      padding-left: 40px;
      margin: 0;
    }
    .category {
      height: 100%;
    }
  }
}
</style>