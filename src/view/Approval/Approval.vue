<template>
  <div>
    <div class="header">
      <div class="header-tit">
        当前审批中 <span>0</span> 本月审批通过 <span>1</span> 本月审批驳回
        <span>0</span>
      </div>
      <a href="#">流程设置</a>
    </div>
    <div class="main">
      <el-table
        :data="tableData"
        style="width: 100%"
        :default-sort="{ prop: 'date', order: 'descending' }"
      >
        <el-table-column prop="date" label="审批类型" sortable width="180">
        </el-table-column>
        <el-table-column prop="name" label="申请人" sortable width="180">
        </el-table-column>
        <el-table-column prop="address" sortable label="当前审批人">
        </el-table-column>
        <el-table-column prop="address" sortable label="审批发起时间">
        </el-table-column>
        <el-table-column prop="address" sortable label="审批状态">
        </el-table-column>
        <el-table-column prop="address" label="操作" :formatter="formatter">
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
          :total="50"
        >
          {{ currentPage }}
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      currentPage: 1
    }
  },
  methods: {
    formatter(row, column) {
      return row.address
    },
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`)
    }
  },
  created() {
    this.$store.dispatch('approval/getProcessData')
  }
}
</script>

<style lang="scss" scoped>
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
</style>
