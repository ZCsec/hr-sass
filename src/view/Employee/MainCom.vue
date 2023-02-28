<template>
  <div>
    <div class="top">
      <div>
        <el-button type="primary" @click="imp">导入</el-button>
        <el-button type="text" @click="dialogFormVisible = true" class="btn3">+ 新增员工</el-button>
      </div>
      <el-dialog title="编辑员工" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="姓名：" :label-width="formLabelWidth">
            <el-input v-model="form.data1" autocomplete="off" :style="{width:'70%'}"></el-input>
          </el-form-item>
          <el-form-item label="手机：" :label-width="formLabelWidth">
            <el-input v-model="form.data2" autocomplete="off" :style="{width:'70%'}"></el-input>
          </el-form-item>
          <el-form-item label="入职时间：" :label-width="formLabelWidth">
            <el-input v-model="form.data2" autocomplete="off" :style="{width:'70%'}"></el-input>
          </el-form-item>
          <el-form-item label="聘用形式：" :label-width="formLabelWidth">
            <el-input v-model="form.data2" autocomplete="off" :style="{width:'70%'}"></el-input>
          </el-form-item>
          <el-form-item label="工号：" :label-width="formLabelWidth">
            <el-input v-model="form.data2" autocomplete="off" :style="{width:'70%'}"></el-input>
          </el-form-item>
          <el-form-item label="部门：" :label-width="formLabelWidth">
            <el-input v-model="form.data2" autocomplete="off" :style="{width:'70%'}"></el-input>
          </el-form-item>

          <el-form-item label="入职时间：" :label-width="formLabelWidth">
            <div class="block">
              <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
            </div>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "HrSassMainCom",

  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: 120,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      // 时间
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      value1: ""
    };
  },

  mounted() {},

  methods: {
    imp() {
      this.$router.push({
        path: "/layout/imp"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.top {
  background-color: #fff;
  height: 57px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.btn3 {
  padding: 12px 20px;
  background-color: #409eff;
  color: #fff;
  margin-right: 20px;
}
</style>