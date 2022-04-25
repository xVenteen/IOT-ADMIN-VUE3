<template>
  <div>
    <div id="myChart2" :style="{ width: '100%', height: '300px' }"></div>
  </div>
</template>

<script>
export default {
  name: "category",
};
</script>
<script setup>
import * as echarts from "echarts";
import { onMounted } from "vue";
onMounted(() => {
  // 这里是由于图表渲染快于父元素导致图表比例溢出，做的一个延缓操作
  setTimeout(() => {
    line();
  }, 1000);
});

const line = () => {
  let myChart = echarts.init(document.getElementById("myChart2"));
  myChart.setOption({
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
  });
  window.onresize = function () {
    //自适应大小, 不用的话不会自适应大小。
    myChart.resize();
  };
};
</script>

<style>
</style>