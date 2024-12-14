---
tag:
  - 可视化
---

# echarts

## 饼状图自动算百分比

```javascript
const legend = {
  right: '5%',
  orient: 'vertical',
  formatter: function (name) {
    let data = [
      { value: 1048, name: 'aa' },
      { value: 735, name: 'bb' },
      { value: 580, name: 'cc' },
      { value: 484, name: 'dd' }
    ] // console.log(data, 'data')
    let total = 0
    let tarValue
    for (let i = 0; i < data.length; i++) {
      total += data[i].value
      if (data[i].name == name) {
        tarValue = data[i].value
      }
    }
    let v = tarValue + '人' //计算出百分比
    let p = Math.round((tarValue / total) * 100) + '%'
    return `${name}  ${v}  ${p}` //name是名称，v是数值
  }
}
```

## 步骤条实现图片插入

```vue
<template> 
  <div class="overall"> 
    <!-- 步骤条盒子 --> 
    <div class="steps-box"> 
      <!-- 步骤条 --> 
      <div 
        class="Article-steps" 
        :class="stepList.length <= activeIndex ? 'step-over' : ''" 
      > 
        <!-- 步骤条背景进度条 --> 
        <div class="line"> 
          <span 
            class="plan" 
            :style=" 
              `width:${activeIndex * (100 / (stepList.length - 1)) - 
                100 / (stepList.length - 1) / 2}%` 
            " 
          ></span> 
        </div> 
        <!-- 每步部分 --> 
        <span 
          class="step" 
          v-for="(i, index) in stepList" 
          :key="index" 
          :class=" 
            activeIndex == i.stepIndex || i.stepIndex <= activeIndex 
              ? 'step-active' 
              : '' 
          " 
        > 
          <span class="step-num"> 
            <span class="num">{{ i.stepIndex }}</span> 
          </span> 
          <div class="part"> 
            <p class="title">{{ i.title }}</p> 
            <p class="time">{{ i.time }}</p> 
            <img 
              :src="getUrl(index)" 
              alt="" 
              class="img" 
              v-if="stepList[index].imgurl != ''" 
            /> 
            <div class="img1" v-else>暂未上报</div> 
          </div> 
        </span> 
      </div> 
      <!-- 步骤条对应内容 --> 
      <!-- <div class="Article-content"> 
        <div 
          class="content" 
          v-for="(i,index) in stepList" 
          :key="index" 
          v-show="activeIndex == index+1" 
        >步骤{{index+1}}内容</div> 
        <span class="btn" v-if="activeIndex != stepList.length" @click="nextStep()">下一步</span> 
        <span class="btn" v-if="activeIndex != 1" @click="lastStep()">上一步</span> 
      </div> --> 
    </div> 
  </div> 
</template> 
<script> 
export default { 
  name: "breedplanorg", 
  props: { 
    pieOption: {}, 
    option: Object, 
    component: Object, 
  }, 
  created() { 
    //console.log(location.search); 
    //let name = this.getUrlKey('name'); 
    //console.log(name); 
  }, 
  computed: { 
    width() { 
      console.log("width"); 
      return (this.option.width || 560) + "px"; 
    }, 
    height() { 
      console.log("height"); 
      return (this.option.height || 300) + "px"; 
    }, 
  }, 
  data() { 
    return { 
      //当前位置 
      activeIndex: 3, 
      //步骤条步数 
      stepList: [ 
        { 
          stepIndex: 1, 
          title: "亲体进场及暂养促熟", 
          time: "2020-05-12", 
          imgurl: 
            "http://10.99.200.11:9000/guangwei/upload/20210716/96a0f7469a78bf99a3832a9ec6a0c182.png", 
        }, 
        { 
          stepIndex: 2, 
          title: "亲体产卵", 
          time: "2020-08-14", 
          imgurl: 
            "http://10.99.200.11:9000/guangwei/upload/20210716/ff7f8043cc90f6be643d3fc0eea0c921.png", 
        }, 
        { 
          stepIndex: 3, 
          title: "溞状幼体培育", 
          time: "2020-08-16", 
          imgurl: 
            "http://10.99.200.11:9000/guangwei/upload/20210716/35f36a45e877212d17bc73f311c39b0f.png", 
        }, 
        { 
          stepIndex: 4, 
          title: "大眼幼体培育", 
          time: "", 
          imgurl: "", 
        }, 
        { 
          stepIndex: 5, 
          time: "", 
          title: "稚蟹培育", 
          imgurl: "", 
        }, 
        { 
          stepIndex: 6, 
          time: "", 
          title: "稚蟹培育", 
          imgurl: "", 
        }, 
      ], 
    }; 
  }, 
  mounted() {}, 
  methods: { 
    getUrl(index) { 
      return this.stepList[index].imgurl; 
    }, 
    closeW() { 
      window.close(); 
    }, 
    getUrlKey(name) { 
      let reg = `(^|&)${name}=([^&]*)(&|$)`; 
      let r = window.location.search.substr(1).match(reg); 
      if (r != null) return unescape(r[2]); 
      return null; 
    }, 
  }, 
}; 
</script> 
<style lang="scss" scoped> 
.steps-box { 
  user-select: none; 
  width: 1400px; 
  height: 400px; 
  margin-left: 50px; 
  position: relative; 
  // <!-- 步骤条背景进度条 --> 
  .line { 
    display: block; 
    margin: 0 auto; 
    position: absolute; 
    top: 24px; 
    left: 2%; 
    background: #ccc; 
    width: 93%; 
    height: 2px; 
    overflow: hidden; 
    .plan { 
      position: absolute; 
      top: 0; 
      left: 0; 
      height: 2px; 
      transition: 0.5s; 
      background: #8ab4f3; 
    } 
  } 
  .Article-steps { 
    display: flex; 
    justify-content: space-between; 
    .step { 
      .part { 
        background-color: rgba(0, 0, 0, 0.5); 
        margin-left: -50px; 
        width: 150px; 
      } 
      .title { 
        font-size: 14px; 
        font-weight: bold; 
        color: #808080; 
        text-align: center; 
        margin-bottom: 0px; 
        height: 100%; 
        line-height: 20px; 
      } 
      .img { 
        width: 100%; 
        height: 100px; 
      } 
      .img1 { 
        line-height: 100px; 
        width: 100%; 
        height: 100px; 
        text-align: center; 
        color: honeydew; 
        background-color: rgba(119, 136, 153, 0.5); 
      } 
      .time { 
        font-size: 12px; 
        text-align: center; 
        color: #fff; 
      } 
      .step-num { 
        width: 50px; 
        height: 50px; 
        display: inline-block; 
        line-height: 50px; 
        background: #c0c0c0; 
        clip-path: circle(40%); 
        color: white; 
        font-weight: bold; 
        .num { 
          display: inline-block; 
          margin-left: 20px; 
        } 
      } 
    } 
  } 
  //当前所在位置样式 
  .step-active { 
    .step-num { 
      background: #2d7df5 !important; 
    } 
    .title { 
      color: #2d7df5 !important; 
    } 
  } 
  //全部完成样式 
  .step-over { 
    .plan { 
      background: #91f062 !important; 
    } 
    .step-num { 
      background: #67c23a !important; 
    } 
    .title { 
      color: #67c23a !important; 
    } 
  } 
  //对应内容 
  .Article-content { 
    padding: 20px; 
    .btn { 
      width: 150px; 
      display: block; 
      margin: 0 auto; 
      margin-bottom: 10px; 
      background: #2d7df5; 
      color: white; 
      padding: 10px; 
      border-radius: 5px; 
      cursor: pointer; 
    } 
    .content { 
      padding: 20px; 
    } 
  } 
} 
</style> 

```

## 轮播纵向表格

```vue
<template> 
  <div> 
  <div class="hasdata" v-if="hasdata === false"> 
      <img src="./noDataImg.png" alt=""> 
    </div> 
    <el-carousel indicator-position="outside" height="500px"> 
      <el-carousel-item v-for="item in tabledatas" :key="item"> 
        <el-table 
          :data="item" 
          stripe 
          prop="name" 
          :show-header="false" 
          style="height: 95%" 
          :cell-style="{ border: '1px #129BFF solid', fontSize: '18px' }" 
          :row-style="{ height: '58px' }" 
        > 
          <el-table-column prop="name" label="参数名"> </el-table-column> 
          <el-table-column prop="data" label="参数"> </el-table-column> 
        </el-table> 
      </el-carousel-item> 
    </el-carousel> 
  </div> 
</template> 
<script> 
import { getList } from "./data"; 
export default { 
  name: "breedtable", 
  data() { 
    return { 
      hasdata: true, 
      tabledatas: [], 
      names: { 
        releaseYear: "增殖放流年度", 
        chDistrict: "行政区划", 
        fishName: "放流物种", 
        specification: "规格", 
        fishNumber: "计划放流数量(万单位)", 
        fishValue: "计划放流金额(万元)", 
        fundsSourceName: "资金来源", 
        areaName: "增殖放流海域", 
      }, 
      res: [], 
      hasdata: true, 
    }; 
  }, 
  created() { 
    let name = this.getUrlKey("name"); 
    var breedId = ""; 
    breedId = location.search.split("=", 2)[1]; 
    if (breedId) { 
      this.getData(breedId); 
    } 
  }, 
  computed: { 
    width() { 
      console.log("width"); 
      return (this.option.width || 560) + "px"; 
    }, 
    height() { 
      console.log("height"); 
      return (this.option.height || 300) + "px"; 
    }, 
  }, 
  mounted() { 
    // this.initData(); 
  }, 
  methods: { 
    getData(breedId) { 
      getList(breedId).then((res) => { 
        if (res.data.length > 0) { 
          this.res = []; 
          for (var i = 0; i < res.data.length; i++) { 
            var dataobj = {}; 
            dataobj["releaseYear"] = res.data[i].releaseYear; 
            dataobj["chDistrict"] = res.data[i].chDistrict; 
            dataobj["fishName"] = res.data[i].fishName; 
            dataobj["specification"] = res.data[i].specification; 
            dataobj["fishNumber"] = res.data[i].fishNumber; 
            dataobj["fishValue"] = res.data[i].fishValue; 
            dataobj["fundsSourceName"] = res.data[i].fundsSourceName; 
            dataobj["areaName"] = res.data[i].areaName; 
            this.res.push(dataobj); 
          } 
          this.$nextTick(() => { 
            this.initData(); 
          }); 
        } else { 
          this.hasdata = false; 
        } 
      }); 
    }, 
    initData() { 
      for (var i = 0; i < this.res.length; i++) { 
        const nameKey = Object.keys(this.res[i]); 
        const value = Object.values(this.res[i]); 
        const newData = nameKey.map((item, index) => ({ 
          name: this.names[item], 
          data: value[index], 
        })); 
        this.tabledata = newData; 
        this.tabledatas.push(this.tabledata); 
        this.$forceUpdate(); 
      } 
    }, 
    closeW() { 
      window.close(); 
    }, 
    getUrlKey(name) { 
      let reg = `(^|&)${name}=([^&]*)(&|$)`; 
      let r = window.location.search.substr(1).match(reg); 
      if (r != null) return unescape(r[2]); 
      return null; 
    }, 
  }, 
}; 
</script> 
<style scoped> 
>>> .el-table--striped .el-table__body tr.el-table__row--striped td { 
  background-color: rgba(6, 122, 229, 0.1); 
} 
>>> .cell { 
  color: #fff; 
} 
.hasdata { 
  position: absolute; 
  margin-left: 225px; 
  width: 500px; 
  height: 50px; 
  margin-top: 200px; 
  font-size: 50px; 
  color: #5cdaf5; 
} 
</style> 

```

## 堆叠柱状图

```vue
 
<template> 
  <div> 
    <div id="fishTypePie" :style="{ width: width, height: height }"></div> 
  </div> 
</template> 
<script> 
// import tools from "../util/echarts-auto-tooltip"; 
export default { 
  name: "fishTypePie", 
  data() { 
    return { 
      data: [ 
        [120, 132, 101, 134, 90], 
        [220, 182, 191, 234, 290], 
        [150, 232, 201, 154, 190], 
        [60, 72, 71, 74, 190], 
      ], 
      transdata: [], 
      percentArrays: [], 
      percentArray: [], 
      sums: [], 
      arr2:[] 
    }; 
  }, 
  props: { 
    pieOption: {}, 
    option: Object, 
    component: Object, 
  }, 
  created() { 
    //console.log(location.search); 
    //let name = this.getUrlKey('name'); 
    //console.log(name); 
  }, 
  computed: { 
    width() { 
      console.log("width"); 
      return (this.option.width || 540) + "px"; 
    }, 
    height() { 
      console.log("height"); 
      return (this.option.height || 280) + "px"; 
    }, 
  }, 
  mounted() { 
    this.getData(); 
    this.init(); 
  }, 
  methods: { 
    getData() { 
      let sum = 0; 
      let s = []; 
      let bai = []; 
      for (let i = 0; i <= this.data.length; i++) { 
        for (let j = 0; j < 4; j++) { 
          s.push(this.data[j][sum]); 
        } 
        sum++; 
      } 
      let sp = (arr, num) => { 
        let newArr = []; 
        for (let i = 0; i < arr.length; ) { 
          newArr.push(arr.slice(i, (i += num))); 
        } 
        return newArr; 
      }; 
      let shuzu = sp(s, 4); 
      let result = 0; 
      for (let i = 0; i < shuzu.length; i++) { 
        bai[i] = []; 
        for (let j = 0; j < shuzu[i].length; j++) { 
          result += shuzu[i][j]; 
        } 
        for (let j = 0; j < sp(s, 4)[i].length; j++) { 
          bai[i].push((sp(s, 4)[i][j] / result) * 100); 
        } 
        result = 0; 
      } 
      // var arr2 = []; 
      for (var i = 0; i < bai[0].length; i++) { 
        this.arr2[i] = []; 
      } 
      for (var i = 0; i < bai.length; i++) { 
        for (var j = 0; j < bai[i].length; j++) { 
          this.arr2[j][i] = bai[i][j].toFixed(2); 
        } 
      } 
    }, 
    init() { 
      this.pieOption = { 
        tooltip: { 
          trigger: "axis", 
          axisPointer: { 
            // 坐标轴指示器，坐标轴触发有效 
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow' 
          }, 
        }, 
        // title: { 
        //   text: "口虾蛄资源专项", 
        //   textStyle: { 
        //     color: "#ffffff", 
        //   }, 
        // }, 
        legend: { 
          data: ["Ⅰ期", "Ⅱ期", "Ⅲ期", "Ⅳ期"], 
          top: "9%", 
          textStyle: { 
            color: "#ffffff", 
            fontSize: 16 
          }, 
        }, 
        grid: { 
          left: "5%", 
          right: "4%", 
          bottom: "3%", 
          containLabel: true, 
        }, 
        xAxis: [ 
          { 
            type: "category", 
            data: ["4月", "9月", "10月", "11月", "12月"], 
            axisLabel: { 
              color: "#ffffff", //刻度线标签颜色 
              fontSize: 16 
            }, 
          }, 
        ], 
        yAxis: [ 
          { 
            name: "百分比(%)", 
            nameTextStyle: { 
              color: "#fff", 
              // verticalAlign:"bottom", 
              lineHeight: 50, 
              fontSize: 16 
            }, 
            nameLocation: "middle", 
            type: "value", 
            type: "value", 
            max: 100, 
            min: 0, 
            axisLabel: { 
              color: "#ffffff", //刻度线标签颜色 
              fontSize: 16 
            }, 
          }, 
        ], 
        series: [ 
          { 
            name: "Ⅰ期", 
            type: "bar", 
            stack: "口虾蛄", 
            emphasis: { 
              focus: "series", 
            }, 
            data: this.arr2[0], 
            barWidth: "30px", 
          }, 
          { 
            name: "Ⅱ期", 
            type: "bar", 
            stack: "口虾蛄", 
            emphasis: { 
              focus: "series", 
            }, 
            data: this.arr2[1], 
          }, 
          { 
            name: "Ⅲ期", 
            type: "bar", 
            stack: "口虾蛄", 
            emphasis: { 
              focus: "series", 
            }, 
            data: this.arr2[2], 
          }, 
          { 
            name: "Ⅳ期", 
            type: "bar", 
            stack: "口虾蛄", 
            emphasis: { 
              focus: "series", 
            }, 
            data: this.arr2[3], 
          }, 
        ], 
      }; 
      let dom = document.getElementById("fishTypePie"); 
      let myChart = echarts.init(dom); 
      myChart.setOption(this.pieOption); 
      //使用轮播插件,填入相关参数 
      // tools.autoHover(myChart, this.pieOption, 7, 2000); 
    }, 
    closeW() { 
      window.close(); 
    }, 
    getUrlKey(name) { 
      let reg = `(^|&)${name}=([^&]*)(&|$)`; 
      let r = window.location.search.substr(1).match(reg); 
      if (r != null) return unescape(r[2]); 
      return null; 
    }, 
  }, 
}; 
</script> 

```

## 柱状折线图

```vue
<template> 
  <div class="bodyall"> 
    <div id="mybar4" :style="{ width: '600px', height: '300px' }"></div> 
  </div> 
</template> 
<script> 
import * as echarts from 'echarts'; 
export default { 
  name: "mybar4", 
  props: { 
    pieOption: {}, 
    option: Object, 
    component: Object, 
  }, 
  created() { 
    //console.log(location.search); 
    //let name = this.getUrlKey('name'); 
    //console.log(name); 
  }, 
  computed: { 
    width() { 
      console.log("width"); 
      return (this.option.width || 560) + "px"; 
    }, 
    height() { 
      console.log("height"); 
      return (this.option.height || 300) + "px"; 
    }, 
  }, 
  mounted() { 
    this.init(); 
  }, 
  methods: { 
    init() { 
      this.pieOption = { 
        title: { 
          text: "2021-04出海率统计（各地市）", 
          textStyle: { 
            color: "#fff", 
          }, 
        }, 
        tooltip: { 
          trigger: "axis", 
          backgroundColor: "rgba(255,255,255,0.1)", 
          axisPointer: { 
            type: "shadow", 
            label: { 
              show: true, 
              backgroundColor: "#7B7DDC", 
            }, 
          }, 
        }, 
        legend: { 
          data: ["出海量", "总量", "出海率"], 
          textStyle: { 
            color: "#B4B4B4", 
          }, 
          top: "0%", 
        }, 
        grid: { 
          top:'10%', 
          x: "8%", 
          width: "88%", 
          y: "4%", 
        }, 
        xAxis: { 
          data: ["青岛", "烟台", "威海", "日照", "潍坊", "东营", "滨州"], 
          axisLine: { 
            lineStyle: { 
              color: "#B4B4B4", 
            }, 
          }, 
          axisTick: { 
            show: false, 
          }, 
        }, 
        yAxis: [ 
          { 
            splitLine: { show: false }, 
            axisLine: { 
              lineStyle: { 
                color: "#B4B4B4", 
              }, 
            }, 
            axisLabel: { 
              formatter: "{value} ", 
            }, 
          }, 
          { 
            splitLine: { show: false }, 
            axisLine: { 
              lineStyle: { 
                color: "#B4B4B4", 
              }, 
            }, 
            axisLabel: { 
              formatter: "{value} ", 
            }, 
          }, 
        ], 
        series: [ 
          { 
            name: "出海率", 
            type: "line", 
            smooth: true, 
            showAllSymbol: true, 
            symbol: "emptyCircle", 
            symbolSize: 8, 
            yAxisIndex: 1, 
            itemStyle: { 
              normal: { 
                color: "#F02FC2", 
              }, 
            }, 
            data: ["0.45", "0.94", "0.23", "0.33", "0.55", "0.14", "0.75"], 
          }, 
          { 
            name: "总量", 
            type: "bar", 
            barWidth: 10, 
            itemStyle: { 
              normal: { 
                barBorderRadius: 5, 
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [ 
                  { offset: 0, color: "#956FD4" }, 
                  { offset: 1, color: "#3EACE5" }, 
                ]),   //渐变色 
              }, 
            }, 
            data: [452, 324, 254, 99, 512, 120, 400], 
          }, 
          { 
            name: "出海量", 
            type: "bar", 
            barGap: "-100%", 
            barWidth: 10, 
            itemStyle: { 
              normal: { 
                barBorderRadius: 5, 
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [ 
                  { offset: 0, color: "rgba(156,107,211,0.8)" }, 
                  { offset: 0.2, color: "rgba(156,107,211,0.5)" }, 
                  { offset: 1, color: "rgba(156,107,211,0.2)" }, 
                ]), 
              }, 
            }, 
            z: -12, 
            data: [560, 652, 482, 145, 563, 145, 567], 
          }, 
        ], 
      }; 
      let dom = document.getElementById("mybar4"); 
      let myChart = echarts.init(dom); 
      myChart.setOption(this.pieOption); 
    }, 
    closeW() { 
      window.close(); 
    }, 
    getUrlKey(name) { 
      let reg = `(^|&)${name}=([^&]*)(&|$)`; 
      let r = window.location.search.substr(1).match(reg); 
      if (r != null) return unescape(r[2]); 
      return null; 
    }, 
  }, 
}; 
</script> 
<style scoped> 
#mybar4{ 
  margin: 50px; 
} 
.bodyall{ 
background-color: rgb(30, 30, 30,0.8); 
} 
</style> 

```

#### 常用

```

yAixs y 轴

xAixs x 轴

legend{
  right:20,
  top:10,
  height:100,
  width:300
  orient:'vertical'
} 数据项名称布局

emphasis 高亮状态下

label
labelLine
itemStyle
```

#### 拖拽手柄

```
visualMap:{
  min:0,
  max:100,
  inRange:[
    color:['red','blue','green']
  ],
  calculable:true,
  type:'continuous',

}
```

## 实例

### 落日

:::<iframe src="https://gtols.netlify.app/#/sunset" frameborder="0" height="300" width="100%"/>

### 控制中心

:::<iframe src="https://gtols.netlify.app/#/ctrl-ctr" frameborder="0" height="300" width="100%"/>

### 物流

:::<iframe src="https://gtols.netlify.app/#/flow" frameborder="0" height="300" width="100%"/>

### 气温

:::<iframe src="https://gtols.netlify.app/#/temperature" frameborder="0" height="300" width="100%"/>

### 平台

:::<iframe src="https://gtols.netlify.app/#/platform" frameborder="0" height="300" width="100%"/>
