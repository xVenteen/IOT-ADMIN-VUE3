<template>
  <div>
    <div :id="id" :style="{ width: '100%', height: '300px' }"></div>
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
  }, 1000);
});
let option = {
  series: [
    {
      name: "业务指标",
      type: "gauge",
      //   detail: { formatter: "{value}%" },
      data: [{ value: 50, name: "完成率" }],
      axisLine: {
        show: true,
        lineStyle: {
          color: [
            [
              1,
              new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0.1,
                  color: "#FFC600",
                },
                {
                  offset: 0.6,
                  color: "#30D27C",
                },
                {
                  offset: 1,
                  color: "#0B95FF",
                },
              ]),
            ],
          ],
        },
      },
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