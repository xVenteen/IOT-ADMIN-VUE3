<template>
  <div class="containe">
    <div class="header">
      <van-nav-bar
        title="实时温度数据监测"
        left-text="返回"
        left-arrow
        @click-left="$router.push('home')"
        style="margin: 20px 0"
      />

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
            <img src="/src/assets/Temperature-page_wind-icon.png" alt="" />
          </div>
          <div class="mesg">
            <p>风速</p>
            <p>26km/h</p>
          </div>
        </div>
      </div>
      <div class="main">
        <div class="pie">
          <pie :option="optionPie"></pie>
        </div>
        <div class="category">
          <category :option="option"></category>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Progress, NavBar } from "vant";
import pie from "@/components/echarts/pie.vue";
import category from "@/components/echarts/category.vue";
import * as echarts from "echarts";
export default {
  name: "temperature",
  components: {
    [Progress.name]: Progress,
    [NavBar.name]: NavBar,
    pie,
    category,
  },
  setup() {
    let option = {
      grid: {
        left: "20",
        containLabel: true,
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
        },
      },
      xAxis: {
        type: "category",
        data: ["2AM", "6AM", "10AM", "14AM", "18PM", "22PM"],
      },
      yAxis: {
        type: "value",
        axisLabel: {
          formatter: "{value} °C",
        },
      },
      series: [
        {
          data: [14.1, 9.6, 17.8, 18.2, 16.4, 20.1],
          type: "line",
          smooth: true,
          showSymbol: false,
          lineStyle: {
            normal: {
              width: 5,
              color: {
                type: "linear",
                x: 0,
                y: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: "#4267ff",
                  },
                  { offset: 1, color: "#18b4fe" },
                ],
              },
              shadowColor: "#4267ff",
              shadowOffsetY: 6,
              shadowBlur: 6,
              opacity: 1,
            },
          },
        },
      ],
    };
    let optionPie = {
      title: {
        text: "温度占比",
        left: "center",
        top: "center",
      },
      legend: {
        bottom: "1%",
        left: "center",
      },
      series: [
        {
          type: "pie",
          data: [
            {
              value: 19,
              name: "风速",
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(1, 1, 1, 0, [
                    { offset: 0, color: "#4461f4" },
                    { offset: 0.5, color: "#8481ff" },
                    // { offset: 0, color: "#8481ff" },
                  ]),
                },
              },
            },
            {
              value: 57.6,
              name: "二氧化碳",
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 1, 1, 1, [
                    { offset: 0, color: "#0659ff" },
                    { offset: 0.5, color: "#19b3fe" },
                    // { offset: 0, color: "#8481ff" },
                  ]),
                },
              },
            },
            {
              value: 23.4,
              name: "温度",
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(1, 1, 1, 0, [
                    { offset: 0, color: "#fa8d29" },
                    { offset: 0.5, color: "#fdc922" },
                    // { offset: 0, color: "#8481ff" },
                  ]),
                },
              },
            },
          ],
          radius: ["30%", "60%"],
          emphasis: {
            label: {
              show: true,
              fontSize: "15",
              fontWeight: "bold",
            },
          },
          itemStyle: {
            normal: {
              label: {
                show: true,
                formatter: "{b}\n{d}%",
              },
              labelLine: { show: true },
            },
          },
        },
      ],
    };
    return { option, optionPie };
  },
};
</script>

<style lang="scss" scoped>
.containe {
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    // display: flex;
    // margin-bottom: 30px;
    // justify-content: center;
  }
  .data-boxs {
    color: white;
    width: 95vw;
    display: flex;
    justify-content: space-between;
    .one {
      background: url("/src/assets/Temperature-page_Temperature.png");
    }
    .two {
      background: url("/src/assets/Temperature-page_carbon-dioxide.png");
    }
    .three {
      background: url("/src/assets/Temperature-page_wind-speed.png");
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
        background: url("/src/assets/Temperature-page_white-background.png");
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

::v-deep .van-nav-bar__content {
  height: 100px;
  .van-nav-bar__left {
    font-size: 40px;
  }
  .van-nav-bar__title {
    font-size: 40px;
  }
  .van-ellipsis {
    overflow: visible;
  }
}
:root {
  // --van-nav-bar-title-font-size: 40px;
  --van-font-size-md: 40px;
  --van-font-size-lg: 40px;
  --van-nav-bar-height: 100px;
  --van-font-weight-bold: 800;
}
</style>