<template>
  <div>
    <div :id="id" :style="{ width: '100%', height: '150px' }"></div>
  </div>
</template>

<script>
export default {
  name: "pie",
};
</script>
<script setup>
import * as echarts from "echarts";
import { onMounted } from "vue";
import { defineProps } from "vue";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});
onMounted(() => {
  // 这里是由于图表渲染快于父元素导致图表比例溢出，做的一个延缓操作
  setTimeout(() => {
    line();
  }, 100);
});
let option = {
  series: [
    {
      type: "gauge",
      center: ["50%", "60%"],
      startAngle: 180,
      endAngle: 0,
      min: 40,
      max: 150,
      splitNumber: 5,
      itemStyle: {
        color: "#FFAB91",
      },
      progress: {
        show: true,
        width: 30,
      },
      pointer: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          width: 30,
        },
      },
      axisTick: false,
      splitLine: {
        distance: -35,
        length: 4,
        lineStyle: {
          width: 3,
          color: "#999",
        },
      },
      axisLabel: {
        distance: 10,
        color: "#999",
        fontSize: 10,
      },
      anchor: {
        show: false,
      },
      title: {
        show: false,
      },
      detail: {
        valueAnimation: true,
        width: "40%",
        lineHeight: 40,
        borderRadius: 8,
        offsetCenter: [0, "-15%"],
        fontSize: 10,
        fontWeight: "bolder",
        formatter: "{value} lux",
        color: "auto",
      },
      data: [
        {
          value: 80,
        },
      ],
    },
    {
      type: "gauge",
      center: ["50%", "60%"],
      startAngle: 180,
      endAngle: 0,
      min: 40,
      max: 150,
      itemStyle: {
        color: "#FD7347",
      },
      progress: {
        show: true,
        width: 8,
      },
      pointer: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      detail: {
        show: false,
      },
      data: [
        {
          value: 80,
        },
      ],
    },
  ],
};
const line = function () {
  let myChart = echarts.init(document.getElementById(props.id));
  myChart.setOption(option);
  window.onresize = function () {
    //自适应大小, 不用的话不会自适应大小。
    myChart.resize();
  };
};
</script>

<style>
</style>