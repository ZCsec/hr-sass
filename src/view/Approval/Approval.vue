<template>
  <div>
    <div class="header">
      <div class="header-tit">
        当前审批中 <span>{{ getStateTotal(1) }}</span> 本月审批通过
        <span>{{ getStateTotal(2) }}</span> 本月审批驳回
        <span>{{ getStateTotal(4) }}</span>
      </div>
      <!-- <a href="#">流程设置</a> -->
      <router-link to="/layout/Approval/securitySetting">流程设置</router-link>
    </div>
    <div class="main">
      <el-table
        :data="list"
        style="width: 100%"
        :default-sort="{ prop: 'username', order: 'descending' }"
      >
        <el-table-column class="num" label="序号">
          <template slot-scope="data">
            <span>{{ data.$index + 1 }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="processName"
          label="审批类型"
          sortable
          width="180"
        >
        </el-table-column>
        <el-table-column prop="username" label="申请人" sortable width="180">
        </el-table-column>
        <el-table-column
          prop="procCurrNodeUserName"
          sortable
          label="当前审批人"
          width="180"
        >
        </el-table-column>
        <el-table-column :formatter="formatter" sortable label="审批发起时间">
        </el-table-column>
        <el-table-column :formatter="timeSet" sortable label="审批状态">
        </el-table-column>
        <el-table-column label="操作" prop="processId">
          <template slot-scope="data">
            <el-button
              class="checkA"
              size="mini"
              @click="getDetail(data.row.processId)"
              >查看</el-button
            >
          </template>
          <!-- <button class="checkA">查看</button> -->
          <!-- <a class="checkA" href="#">查看</a> -->
        </el-table-column>
      </el-table>
      <div class="block page">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 50]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="Number(total)"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getDate } from '@/utils/getDate'

export default {
  data() {
    return {
      currentPage: 1,
      checked: false
    }
  },
  methods: {
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`)
    },
    getDetail(id) {
      // 通过编程式导航跳转审批详情页 要在跳转过程中传去id 在详情页中发起两个请求并渲染页面
      // console.log(id)
      this.$router.push('/layout/Approval/leaveApproval/' + id)
      // this.$router.push({
      //   path: '/layout/Approval/leaveApproval/',
      //   query: {
      //     id: id
      //   }
      // })
    },
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
      // if (row.processState == 1) {
      //   return '审批中'
      // } else if (row.processState == 2) {
      //   return '审批通过'
      // } else if (row.processState == 3) {
      //   return '审批不通过'
      // } else if (row.processState == 4) {
      //   return '撤销'
      // }
    },
    getStateTotal(index) {
      return this.list.reduce((sum, item) => {
        // console.log(sum)
        return (sum += item.processState == index)
      }, 0)
    }
  },
  created() {
    this.$store.dispatch('approval/getProcessData').then(() => {
      // console.log(this.list)
    })
  },
  computed: {
    ...mapState('approval', ['list', 'total'])
    // getStateTotal() {
    //   return this.list.reduce((sum, item) => {
    //     // console.log(sum)
    //     return (sum += item.processState == 2)
    //   }, 0)
    // }
  },
  filters: {
    getState(value) {
      // console.log(value)
      switch (true) {
        case value == 1:
          return '审批中'
        case value == 2:
          return '审批通过'
        case value == 3:
          return '审批不通过'
        case value == 4:
          return '撤销'
        default:
          break
      }
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  height: 30px;
  padding: 20px;
  background-color: #fff;
  // border: 1px solid red;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  .header-tit {
    display: inline-block;
    border: 1px solid red;
    line-height: 30px;
    padding: 0 10px;
    border-radius: 3px;
    border: 1px solid #91d5ff;
    background: #e6f7ff;
    font-size: 14px;
    color: #555;
    span {
      font-weight: bold;
    }
  }
  a {
    padding: 7px 15px;
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    font-size: 12px;
    border-radius: 3px;
    text-decoration: none;
  }
}

.main {
  margin-top: 20px;
  background-color: #fff;
  border-radius: 5px;
  .block {
    padding: 20px 0;
    text-align: right;
    margin-right: 20px;
  }
}

/deep/.el-table th.el-table__cell > .cell {
  text-align: center;
}

/deep/.el-table td.el-table__cell div {
  text-align: center;
}

.checkA {
  text-decoration: none;
  color: #409eff;
  font-size: 12px;
  border: none;
}
</style>
