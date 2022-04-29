<template>
  <div>
    <div id="myChart" :style="{ width: '100%', height: '300px' }"></div>
  </div>
</template>

<script>
export default {
  name: "pie",
};
</script>
<script setup>
import * as echarts from "echarts";
import { onMounted, defineProps } from "vue";
const props = defineProps({
  option: {
    type: Object,
    required: true,
  },
});
onMounted(() => {
  // 这里是由于图表渲染快于父元素导致图表比例溢出，做的一个延缓操作
  setTimeout(() => {
    line();
  }, 500);
});
let option = {
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
const line = () => {
  let myChart = echarts.init(document.getElementById("myChart"));
  myChart.setOption(props.option);
  window.onresize = function () {
    //自适应大小, 不用的话不会自适应大小。
    myChart.resize();
  };
};
</script>

<style>
</style>