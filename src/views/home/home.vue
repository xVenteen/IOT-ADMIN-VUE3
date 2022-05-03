<template>
  <div class="containe">
    <div class="atitle">首 页</div>
    <div class="banner">
      <Swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <SwipeItem v-for="image in images" :key="image">
          <img :src="image" alt="" style="width: 100vw" />
        </SwipeItem>
      </Swipe>
    </div>
    <body>
      <div class="title">
        <p>数据中心</p>
      </div>
      <div class="data-show">
        <Row justify="space-between">
          <Col span="11" class="one adata">
            <div class="mesg" @click="$router.push('temperature')">
              <p>{{ data.temperature }}℃</p>
              <p>温度监测</p>
            </div>
            <div class="progress">
              <Progress
                :percentage="33"
                stroke-width="2"
                :show-pivot="false"
                style="width: 80%"
                track-color="rgba(255,255,255,0.5)"
                color="white"
              />
              <p>33%</p>
            </div>
          </Col>
          <Col span="11" class="two adata">
            <div class="mesg" @click="$router.push('humidity')">
              <p>42%</p>
              <p>湿度监测</p>
            </div>
            <div class="progress">
              <Progress
                :percentage="70"
                stroke-width="2"
                :show-pivot="false"
                style="width: 80%"
                color="white"
                track-color="rgba(255,255,255,0.5)"
              />
              <p>70%</p>
            </div>
          </Col>
          <Col span="11" class="three adata">
            <div class="mesg" @click="$router.push('light')">
              <p>80 lux</p>
              <p>光强监测</p>
            </div>
            <div class="progress">
              <Progress
                :percentage="50"
                stroke-width="2"
                :show-pivot="false"
                track-color="rgba(255,255,255,0.5)"
                style="width: 80%"
                color="white"
              />
              <p>50%</p>
            </div>
          </Col>
        </Row>
      </div>
    </body>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { Swipe, SwipeItem, Progress, Col, Row } from 'vant'
import Home_banner_1 from '../../assets/Home_banner_1.png'
import Home_banner_2 from '../../assets/Home_banner_2.png'
import Home_banner_3 from '../../assets/Home_banner_3.png'

const images = [Home_banner_1, Home_banner_2, Home_banner_3]
const data = reactive({ temperature: '13.8', humidity: '42', light: '80' })
</script>

<style lang="scss" scoped>
.containe {
  width: 100vw;
  height: 100vh;
  overflow: auto;
  overflow: hidden;
  background-color: white;
  .atitle {
    display: flex;
    width: 100%;
    justify-content: center;
    font-weight: 700;
  }
  .banner {
    margin: 15px;
    border-radius: 25px;
    overflow: hidden;
    .my-swipe .van-swipe-item {
      width: 100%;
      height: 50vw;
      line-height: 0px;
      text-align: center;
    }
  }
  .title {
    display: flex;
    text-align: left;
    margin: 50px 20px;
    font-size: 40px;
    font-weight: 600;
  }
  .data-show {
    color: white;
    margin: 30px;
    .adata {
      height: 160px;
      margin-bottom: 40px;
      border-radius: 20px;
      padding: 40px 30px;
      overflow: hidden;
    }
    .one {
      background-image: linear-gradient(to right, #5a72fc, #7f7fff);
    }
    .two {
      background-image: linear-gradient(to right, #3194f9, #59c0eb);
    }
    .three {
      background-image: linear-gradient(to right, #ea596b, #fca878);
    }
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
      font-size: 10px;
    }
  }
}
</style>
