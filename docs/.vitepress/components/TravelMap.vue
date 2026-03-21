<template>
  <div class="travel-map-container">
    <div class="map-header">
      <h2>我的足迹</h2>
      <p>记录我去过的每一个地方</p>
    </div>
    <div class="map-content">
      <div id="map" class="map"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

// 足迹数据 - 可以根据你的实际情况修改
const footprints = ref([
  { name: '北京', lat: 39.9042, lng: 116.4074, date: '2020-05-01', description: '参观了故宫和长城' },
  { name: '上海', lat: 31.2304, lng: 121.4737, date: '2021-03-15', description: '游览了外滩和东方明珠' },
  { name: '广州', lat: 23.1291, lng: 113.2644, date: '2021-07-20', description: '品尝了正宗粤菜' },
  { name: '深圳', lat: 22.5431, lng: 114.0579, date: '2022-01-10', description: '参观了深圳湾公园' },
  { name: '杭州', lat: 30.2741, lng: 120.1551, date: '2022-04-05', description: '游览了西湖' },
  { name: '成都', lat: 30.5728, lng: 104.0668, date: '2022-08-12', description: '品尝了火锅，看了大熊猫' },
  { name: '西安', lat: 34.3416, lng: 108.9398, date: '2023-02-18', description: '参观了兵马俑和古城墙' },
  { name: '重庆', lat: 29.4316, lng: 106.9123, date: '2023-06-25', description: '体验了山城特色' },
  { name: '厦门', lat: 24.4798, lng: 118.0894, date: '2023-10-01', description: '游览了鼓浪屿' },
  { name: '昆明', lat: 25.0389, lng: 102.7183, date: '2024-01-15', description: '感受了春城之美' },
])

let map = null
let markers = []

onMounted(() => {
  // 检查百度地图API是否加载完成
  const checkBMap = setInterval(() => {
    if (typeof BMap !== 'undefined') {
      clearInterval(checkBMap)
      // 创建地图实例
      map = new BMap.Map('map')
      map.centerAndZoom(new BMap.Point(104.1954, 35.8617), 4) // 中国中心点
      map.enableScrollWheelZoom(true)

      // 添加标记点
      footprints.value.forEach((footprint, index) => {
        const point = new BMap.Point(footprint.lng, footprint.lat)
        const marker = new BMap.Marker(point)
    
        // 创建信息窗体
        const infoWindow = new BMap.InfoWindow(
          `<div class="info-window">
            <h3>${footprint.name}</h3>
            <p class="date">日期: ${footprint.date}</p>
            <p class="description">${footprint.description}</p>
          </div>`,
          {
            width: 250,
            height: 100
          }
        )

        marker.addEventListener('click', () => {
          map.openInfoWindow(infoWindow, point)
        })

        markers.push(marker)
        map.addOverlay(marker)
      })

      // 自动调整地图视野以包含所有标记点
      const points = footprints.value.map(fp => new BMap.Point(fp.lng, fp.lat))
      map.setViewport(points)
    }
  }, 100)
})
</script>

<style scoped>
.travel-map-container {
  width: 100%;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.map-header {
  text-align: center;
  margin-bottom: 20px;
}

.map-header h2 {
  color: #333;
  margin: 0 0 10px 0;
}

.map-header p {
  color: #666;
  margin: 0;
}

.map-content {
  width: 100%;
  height: 600px;
  position: relative;
}

.map {
  width: 100%;
  height: 100%;
  border-radius: 4px;
}

.info-window {
  padding: 10px;
  max-width: 250px;
}

.info-window h3 {
  margin: 0 0 8px 0;
  color: #333;
}

.info-window .date {
  color: #666;
  font-size: 14px;
  margin: 0 0 8px 0;
}

.info-window .description {
  color: #555;
  font-size: 14px;
  margin: 0;
}
</style>
