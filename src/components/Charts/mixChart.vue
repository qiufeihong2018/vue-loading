<template>
  <div :class="className" :style="{height:height,width:width}" :ref="id"/>
</template>

<script>
  import echarts from 'echarts'
  import * as apiChart from '@/api/chart'
  import resize from './mixins/resize'

  export default {
    mixins: [resize],
    props: {
      className: {
        type: String,
        default: 'chart'
      },
      id: {
        type: String,
        default: 'chart'
      },
      width: {
        type: String,
        default: '100px'
      },
      height: {
        type: String,
        default: '200px'
      },
      selectTime: {
        type: Array,
        default: () => []
      },
      selectInterval: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        chart: null,
        xKeyData: [],
        request: {
          start: new Date() - 1000 * 60 * 60 * 24 * 365,
          end: new Date().getTime(),
          interval: '1d'
        },
        option: ''
      }
    },
    created() {
      this.getData()
    },
    mounted() {
      // 基于选择的dom,进行初始化echarts
      this.chart = echarts.init(this.$refs[this.id])
    },
    watch: {
      // 时间间隔
      selectInterval() {
        this.request.interval = this.selectInterval
        this.getData()
      },
      // 开始和结束时间
      selectTime() {
        this.request.start = this.selectTime[0]
        this.request.end = this.selectTime[1]
        this.getData()
      },
      xKeyData() {
        // 指定图表的配置向
        this.option = {
          backgroundColor: '#344b58',
          title: {
            text: 'statistics',
            x: '20',
            top: '20',
            textStyle: {
              color: '#fff',
              fontSize: '22'
            },
            subtextStyle: {
              color: '#90979c',
              fontSize: '16'
            }
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              textStyle: {
                color: '#fff'
              }
            }
          },
          grid: {
            left: '5%',
            right: '5%',
            borderWidth: 0,
            top: 150,
            bottom: 95,
            textStyle: {
              color: '#fff'
            }
          },
          legend: {
            x: '5%',
            top: '10%',
            textStyle: {
              color: '#90979c'
            },
            data: ['flow']
          },
          calculable: true,
          xAxis: [{
            type: 'category',
            axisLine: {
              lineStyle: {
                color: '#90979c'
              }
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitArea: {
              show: false
            },
            axisLabel: {
              interval: 0

            },
            data: this.xKeyData
          }],
          yAxis: [{
            type: 'value',
            splitLine: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: '#90979c'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0
            },
            splitArea: {
              show: false
            }
          }],
          dataZoom: [{
            show: true,
            height: 30,
            xAxisIndex: [
              0
            ],
            bottom: 30,
            start: 10,
            end: 80,
            handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
            handleSize: '110%',
            handleStyle: {
              color: '#d3dee5'

            },
            textStyle: {
              color: '#fff'
            },
            borderColor: '#90979c'

          }, {
            type: 'inside',
            show: true,
            height: 15,
            start: 1,
            end: 35
          }
          ],
          series:
            [
              {
                name: 'flow',
                type: 'bar',
                stack: 'total',
                barMaxWidth: 35,
                barGap: '10%',
                itemStyle: {
                  normal: {
                    color: 'rgba(255,144,128,1)',
                    // label: {
                    //   show: true,
                    //   textStyle: {
                    //     color: '#fff'
                    //   },
                    //   position: 'insideTop',
                    //   formatter(p) {
                    //     return p.value > 0 ? p.value : ''
                    //   }
                    // }
                  }
                },
                data: this.yKeyData
              }
            ]
        }
        this.initChart()
      }
    },
    beforeDestroy() {
      if (!this.chart) {
        return
      }
      this.chart.dispose()
      this.chart = null
    },
    methods: {
      getData() {
        apiChart.getTotal(this.request).then((res) => {
          const resList = res.data.data
          this.xKeyData = resList.map(item => new Date(item.key_as_string).toLocaleString('chinese', { hour12: false }))
          this.yKeyData = resList.map(item => item.total_bytes.value)
        })
      },
      initChart() {
        this.chart.setOption(this.option)
      }
    }
  }
</script>
