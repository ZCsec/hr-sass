<template>
  <div>
    <el-table class="table" :data="list" stripe style="width: 100%">
      <el-table-column prop="date" label="序号" width="180">
        <template slot-scope="data">
          <span>{{ data.$index + 1 }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="processName" label="审批类型" width="180">
      </el-table-column>
      <el-table-column prop="username" label="申请人" width="180">
      </el-table-column>
      <el-table-column
        prop="procCurrNodeUserName"
        label="当前审批人"
        width="180"
      >
      </el-table-column>
      <el-table-column :formatter="formatter" label="审批发起时间" width="180">
      </el-table-column>
      <el-table-column :formatter="timeSet" label="审批状态" width="180">
      </el-table-column>
      <el-table-column prop="address" label="操作">
        <template slot-scope="data">
          <el-button
            class="checkA"
            size="mini"
            @click="getDetail(data.row.processId)"
            >查看</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="block page">
      <el-pagination
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 50]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="Number(total)"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getProcessAPI } from '@/api/index'
import { getDate } from '@/utils/getDate'
import $eventBus from '@/utils/eventBus'
export default {
  data() {
    return {
      currentPage: 1,
      // total: 10,
      tableData: [
        // {
        //   date: '2016-05-02',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // }
      ],
      checkList: [],
      list: [],
      total: '',
      stateList: []
    }
  },
  methods: {
    formatter(row, column) {
      return getDate(row.timeOfEntry)
    },
    timeSet(row) {
      // console.log(row.processState)
      switch (true) {
        case row.processState == 1:
          return '审批中'
        case row.processState == 2:
          return '审批通过'
        case row.processState == 3:
          return '审批不通过'
        case row.processState == 4:
          return '撤销'
        default:
          break
      }
    },
    getDetail(id) {
      // 通过编程式导航跳转审批详情页 要在跳转过程中传去id 在详情页中发起两个请求并渲染页面
      this.$router.push('/layout/Approval/leaveApproval/' + id)
    },
    async getProcess() {
      const res = await getProcessAPI({
        page: 1,
        pageSize: 10
      })
      // console.log(res)
      this.list = res.data.data.rows
      this.total = res.data.data.total
      // console.log(this.list)
      // console.log(this.total)
    }
  },
  created() {
    this.getProcess()
    $eventBus.$on('updateVal', (val) => {
      // console.log(val)
      this.checkList = val
    })
  },
  beforeDestroy() {
    $eventBus.$off('updateVal')
  },
  watch: {
    checkList: {
      // immediate: true,
      handler(newVal, oldVal) {
        // 在函数内对数组进行遍历判断
        // 1.全选或全不选的状态下显示完整的数据

        if (
          this.checkList.every((item) => item === false) ||
          this.checkList.every((item) => item === true)
        ) {
          // console.log('四个复选框全选中，或全不选')
          this.getProcess()
        } else {
          // 2.单选或多选(非全选)按需求过滤数据
          // 通过ForEach对数组进行筛选
          this.stateList = []
          this.checkList.forEach((item, index, arr) => {
            if (item === true) {
              this.stateList.push(index)
            }
          })
          // 表示被选中的复选框列表转换为对应的审批状态
          this.stateList = this.stateList
            .join(',')
            .replace('0', '审批中')
            .replace('1', '审批通过')
            .replace('2', '审批驳回')
            .replace('3', '撤销')
          // 将审批状态改成对应的状态码
          this.stateList = this.stateList
            .replace('审批中', 1)
            .replace('审批通过', 2)
            .replace('审批驳回', 3)
            .replace('撤销', 4)
            .split(',')
          // 对数组内的值进行转型

          // console.log(this.stateList)

          this.getProcess().then(() => {
            // this.list = this.list.slice(0, 1)
            this.list = this.list.filter((item, index) => {
              return this.stateList.indexOf(item.processState) != -1
            })
          })
          // console.log('有个别复选按钮被选中')
          console.log(this.list)
        }
      },
      deep: true
    }
  }
}
</script>

<style lang="less" scoped>
/deep/.el-table th.el-table__cell > .cell {
  text-align: center;
}

/deep/.el-table td.el-table__cell div {
  text-align: center;
}

.block {
  position: relative;
  padding: 10px 0;
  height: 30px;
  // border: 1px solid red;
  .el-pagination {
    position: absolute;
    right: 0;
    margin-right: 10px;
  }
}
</style>
