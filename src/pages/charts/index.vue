<template>
  <div class="chart-container">
    <el-date-picker
      v-model="selectTime"
      type="datetimerange"
      :picker-options="pickerOptions"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      @change="handleSelect"
      value-format="timestamp">
    </el-date-picker>
    <el-select v-model="selectInterval" placeholder="请选择时间间隔" @change="handleSelectInterval">
      <el-option v-for="item in intervalList"
                 :key="item.value"
                 :label="item.label"
                 :value="item.value"
                 :disabled="item.disabled"/>
    </el-select>
    <chart :selectTime="selectTime" :selectInterval="selectInterval" width="100%" height="100%"/>
  </div>
</template>

<script>
  import Chart from '@/components/Charts/mixChart'

  export default {
    name: 'index',
    components: { Chart },
    data() {
      return {
        intervalList: [
          {
            value: '1m',
            label: '1分钟',
            disabled: true
          },
          {
            value: '30m',
            label: '30分钟',
            disabled: false
          }, {
            value: '1h',
            label: '1小时',
            disabled: false
          }, {
            value: '12h',
            label: '12小时'
          }, {
            value: '1d',
            label: '1天'
          },
          {
            value: '1w',
            label: '1个星期'
          }, {
            value: '1M',
            label: '1个月'
          }, {
            value: '1y',
            label: '1年'
          }
        ],
        pickerOptions: {
          shortcuts: [{
            text: '最近5分钟',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 1000 * 60 * 5);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近30分钟',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 1000 * 60 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近1小时',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 1000 * 60 * 60);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近1个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 1000 * 60 * 60 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近1年',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 1000 * 60 * 60 * 24 * 30 * 12);
              picker.$emit('pick', [start, end]);
            }
          }
          ]
        },
        selectTime: [],
        selectInterval: ''
      }
    },
    methods: {
      handleSelect() {
        // 时间差大于1小时,那么时间间隔1秒就不显示,否则显示
        const time = this.selectTime[1] - this.selectTime[0]
        time > 1000 * 60 * 60 ? this.intervalList[0].disabled = true : this.intervalList[0].disabled = false
      },
      handleSelectInterval() {
        // console.log('selectInterval', this.selectInterval)
      }
    }
  }
</script>
<style scoped lang="stylus">
  .chart-container
    position: relative;
    width: 100%;
    height: calc(100vh - 84px);
</style>
