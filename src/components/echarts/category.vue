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
import { onMounted, defineProps, onBeforeUnmount } from "vue";
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
  }, 100);
});
onBeforeUnmount(() => {
  if (!myChart) {
    return;
  }
  myChart.dispose();
});
let myChart;
// let option = {
//   xAxis: {
//     type: "category",
//     data: ["2AM", "6AM", "10AM", "14AM", "18PM", "22PM"],
//   },
//   yAxis: {
//     type: "value",
//     axisLabel: {
//       formatter: "{value} °C",
//     },
//   },
//   series: [
//     {
//       data: [14.1, 9.6, 17.8, 18.2, 16.4, 20.1],
//       type: "line",
//       smooth: true,
//       lineStyle: {
//         normal: {
//           width: 5,
//           color: {
//             type: "linear",
//             x: 0,
//             y: 0,
//             colorStops: [
//               {
//                 offset: 0,
//                 color: "#4267ff",
//               },
//               { offset: 1, color: "#18b4fe" },
//             ],
//           },
//           shadowColor: "#4267ff",
//           shadowOffsetY: 6,
//           shadowBlur: 6,
//           opacity: 1,
//         },
//       },
//     },
//   ],
// };
// let option2 = (option = {
//   color: ["#FFBF00"],
//   title: {
//     text: "Gradient Stacked Area Chart",
//   },
//   tooltip: {
//     trigger: "axis",
//     axisPointer: {
//       type: "cross",
//     },
//   },
//   grid: {
//     left: "3%",
//     right: "4%",
//     bottom: "3%",
//     containLabel: true,
//   },
//   xAxis: [
//     {
//       type: "category",
//       boundaryGap: false,
//       data: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "00:00"],
//     },
//   ],
//   yAxis: {
//     type: "value",
//     splitNumber: 3,
//   },
//   series: [
//     {
//       name: "Line 1",
//       type: "line",
//       stack: "Total",
//       smooth: true,
//       lineStyle: {
//         width: 0,
//       },
//       showSymbol: false,
//       areaStyle: {
//         opacity: 0.8,
//         color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
//           {
//             offset: 0,
//             color: "#ed7281",
//           },
//           {
//             offset: 0.8,
//             color: "#f59386",
//           },
//           {
//             offset: 1,
//             color: "#fcb58c",
//           },
//         ]),
//       },
//       emphasis: {
//         focus: "series",
//       },
//       data: [140, 232, 101, 264, 90, 340, 250],
//     },
//   ],
// });
const line = () => {
  myChart = echarts.init(document.getElementById("myChart2"));
  myChart.setOption(props.option);
  window.onresize = function () {
    //自适应大小, 不用的话不会自适应大小。
    myChart.resize();
  };
};
</script>

<style>
</style>