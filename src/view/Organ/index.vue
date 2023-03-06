<template>
  <div>
    <!-- <p v-for="obj in codes">{{obj}}</p> -->
    <div class="cunt">
      <div class="cunt_uns">
        <p>组织结构</p>
        <span></span><span></span>
      </div>
      <div class="btuns">
        <div class="btunshtn">
          <p>江苏传智播客教育科技股份有限公司</p>
          <div class="btunshtn_right">
            <span class="fzPerson">负责人</span>
            <span
              ><el-dropdown>
                <span class="el-dropdown-link">
                  操作<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-button
                    type="text"
                    @click="dialogFormVisible = true"
                    class="luhbut_zhunt"
                    >添加子部门</el-button
                  >
                </el-dropdown-menu>
              </el-dropdown></span
            >
          </div>
        </div>
        <div class="fgex"></div>
        <div>
          <div class="custom-tree-container">
            <div class="block">
              <el-tree
                :data="deptList"
                show-checkbox
                node-key="id"
                default-expand-all
                :expand-on-click-node="false"
                :props="props"
              >
                <span class="custom-tree-node" slot-scope="{ node, data }">
                  <span>{{ node.label }}</span>
                  <span>{{ data.manager }}</span>
                  <span>
                    <el-button type="text" size="mini">
                      <el-dropdown>
                        <span class="el-dropdown-link">
                          操作<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <!--  @click="() => remove(node, data)"> -->
                        <el-dropdown-menu slot="dropdown" class="luhbut">
                          <el-button
                            type="text"
                            @click="changeState(data.pid, data.id, '添加')"
                            class="luhbut_zhunt"
                            >添加子部门</el-button
                          >
                          <el-button
                            type="text"
                            @click="changeState(data.pid, data.id, '编辑')"
                            class="luhbut_zhunt"
                            >编辑部门</el-button
                          >
                          <el-button
                            type="text"
                            @click="open(data.id)"
                            class="luhbut_zhunt"
                            >删除部门</el-button
                          >
                        </el-dropdown-menu>
                      </el-dropdown>
                    </el-button>
                  </span>
                </span>
              </el-tree>
              <el-dialog title="编辑部门" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                  <el-form-item label="部门名称" :label-width="formLabelWidth">
                    <el-input
                      v-model="form.dName"
                      autocomplete="off"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="部门编码" :label-width="formLabelWidth">
                    <el-input
                      v-model="form.dCode"
                      autocomplete="off"
                    ></el-input>
                  </el-form-item>
                  <el-form-item
                    label="部门负责人"
                    :label-width="formLabelWidth"
                  >
                    <el-select v-model="form.dManager">
                      <el-option
                        v-for="item in deptList"
                        :key="item.id"
                        :label="item.manager"
                        :value="item.manager"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="部门介绍" :label-width="formLabelWidth">
                    <el-input
                      v-model="form.dIntro"
                      autocomplete="off"
                    ></el-input>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="dialogFormVisible = false"
                    >取 消</el-button
                  >
                  <el-button type="primary" @click="addChildren()"
                    >确 定</el-button
                  >
                </div>
              </el-dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { tranListToTreeData } from '@/utils/organ'
export default {
  data() {
    return {
      deptList: [],
      dialogTableVisible: false,
      dialogFormVisible: false,

      props: {
        label: 'name'
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    changeState(pid, id, type) {
      this.dialogFormVisible = true
      // console.log(pid)
      this.form.nowPid = pid
      this.form.id = id
      this.form.type = type
      this.checkDepartment(id)
    },
    addChildren() {
      this.dialogFormVisible = false
      // console.log(this.form.type)
      // console.log(this.form.id)
      // 根据 type 类型的不同 选择调用不同的接口
      // console.log(pid)
      if (this.form.type === '添加') {
        // return
        this.$store.dispatch('organ/addDepartment', this.form).then(() => {
          if (this.$store.state.organ.status === 10000) {
            this.$message({
              message: this.$store.state.organ.message,
              type: 'success'
            })
          } else if (this.$store.state.organ.status === 99999) {
            this.$message({
              message: this.$store.state.organ.message,
              type: 'error'
            })
          }
          this.$store.state.organ.status = ''
          this.$store.state.organ.message = ''
          // window.location.reload()
          this.getDispatch()
        })
      } else if (this.form.type === '编辑') {
        // console.log('调用查看接口')
        this.$store.dispatch('organ/updateDepartment', this.form).then(() => {
          if (this.$store.state.organ.status === 10000) {
            this.$message({
              message: this.$store.state.organ.message,
              type: 'success'
            })
            this.getDispatch()
          } else if (this.$store.state.organ.status === 99999) {
            this.$message({
              message: this.$store.state.organ.message,
              type: 'error'
            })
            this.$store.state.organ.status = ''
            this.$store.state.organ.message = ''
          }
        })
      }
    },
    open(id) {
      // console.log(id)
      let that = this
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      })
        .then(() => {
          console.log(id)
          this.$store.dispatch('organ/deleteDepartment', id).then(() => {
            // console.log(this.$store.state.organ.status)
            if (this.$store.state.organ.status === 10000) {
              that.$message({
                type: 'success',
                message: this.$store.state.organ.message
              })
            } else {
              that.$message({
                type: 'error',
                message: this.$store.state.organ.message
              })
            }
            this.$store.state.organ.status = ''
            this.$store.state.organ.message = ''
            this.getDispatch()
          })
        })
        .catch(() => {
          that.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    async getDispatch() {
      await this.$store.dispatch('organ/getHomePage').then(() => {
        this.deptList = tranListToTreeData(this.$store.state.organ.depts, '')
        // console.log(this.deptList)
      })
    },
    checkDepartment(id) {
      this.$store.dispatch('organ/checkDepartment', id)
      // console.log(id)
    }
  },
  computed: {
    ...mapGetters(['depts']),
    form: {
      get() {
        return this.$store.state.organ.form
      },
      set(val) {
        this.$store.state.organ.form = val
      }
    },
    form2: {
      get() {
        return this.$store.state.organ.form
      },
      set(val) {
        this.$store.state.organ.form = val
      }
    }
  },
  mounted() {
    this.getDispatch()
  }
}
</script>

<style scoped lang="less">
.luhbut {
  .luhbut_zhunt {
    width: auto;
    display: block;
    text-align: center;
    color: rgb(75, 124, 251);
  }
}
.el-dropdown-link {
  cursor: pointer;
  color: #000;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-button {
  font-size: 16px;
  color: #000;
  margin-right: 15px;
}
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
.cunt {
  width: 100%;

  background-color: rgb(240, 242, 245);
  border: 1px solid white;
  .cunt_uns {
    width: 1200px;
    margin: auto;
    position: relative;
    p {
      position: absolute;
      top: 34px;
      color: rgb(64, 184, 255);
    }
    span {
      margin-top: 85px;

      display: inline-block;
      width: 10%;
      height: 3px;
      background-color: rgb(82, 130, 252);
      &:last-of-type {
        width: 90%;
        height: 4px;
        background-color: white;
      }
    }
  }
  .btuns {
    padding: 30px 120px 0;
    width: 900px;
    margin: auto;
    .btunshtn {
      display: flex;
      justify-content: space-around;
      p {
        font-size: 14px;
        color: #000;
        font-weight: 700;
        margin-right: 440px;
      }
      .btunshtn_right {
        span {
          display: inline-block;
          padding-left: 30px;
          line-height: 45px;
        }
      }
    }
    .fgex {
      width: 100%;
      height: 0.8px;
      background-color: rgb(207, 207, 207);
    }
  }
}
.fzPerson {
  position: relative;
  left: -300px;
}
</style>
