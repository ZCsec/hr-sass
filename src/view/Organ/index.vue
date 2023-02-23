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
            <span>负责人</span>
            <span
              ><el-dropdown>
                <span class="el-dropdown-link">
                  操作<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
               
                  <el-button type="text" @click="dialogFormVisible = true" class="luhbut_zhunt">添加子部门</el-button>
                   
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
              >
                <span class="custom-tree-node" slot-scope="{ node, data }">
                  <span>{{ node.label }}</span>
                  <span>
                    <el-button type="text" size="mini"
                      <el-dropdown>
                        <span class="el-dropdown-link">
                          操作<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <!--  @click="() => remove(node, data)"> -->
                        <el-dropdown-menu slot="dropdown" class="luhbut">
                            <el-button type="text" @click="dialogFormVisible = true" class="luhbut_zhunt">添加子部门</el-button>
                                <el-button type="text" @click="dialogFormVisible = true" class="luhbut_zhunt">查看部门</el-button>
                                  <el-button type="text" @click="open" class="luhbut_zhunt">删除部门</el-button>
                        </el-dropdown-menu>
                      </el-dropdown>
                    </el-button>
                  </span>
                </span>
              </el-tree>
<el-dialog title="编辑部门" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="部门名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
      <el-form-item label="部门编码" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="部门负责人" :label-width="formLabelWidth">
      <el-select v-model="form.region">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
            <el-form-item label="部门介绍" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
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
import { mapGetters } from "vuex";
import organ from "@/utils/organ";
let id = 1000;
export default {
  data() {
    const data = [
      {
        id: 1,
        label: "总裁办",
        children: [
          {
            id: 4,
            label: "二级 1-1",
            children: [
              {
                id: 9,
                label: "三级 1-1-1",
              },
              {
                id: 10,
                label: "三级 1-1-2",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        label: "行政部",
        children: [
          {
            id: 5,
            label: "二级 2-1",
          },
          {
            id: 6,
            label: "二级 2-2",
          },
        ],
      },
      {
        id: 3,
        label: "人事部",
        children: [
          {
            id: 7,
            label: "二级 3-1",
          },
          {
            id: 8,
            label: "二级 3-2",
          },
        ],
      },
      {
        id: 4,
        label: "财务部",
        children: [
          {
            id: 9,
            label: "二级 3-1",
          },
          {
            id: 10,
            label: "二级 3-2",
          },
        ],
      },
      {
        id: 5,
        label: "技术部",
        children: [
          {
            id: 11,
            label: "二级 3-1",
          },
          {
            id: 12,
            label: "二级 3-2",
          },
        ],
      },
      {
        id: 6,
        label: "运营部",
        children: [
          {
            id: 13,
            label: "二级 3-1",
          },
          {
            id: 14,
            label: "二级 3-2",
          },
        ],
      },
      {
        id: 7,
        label: "市场部",
        children: [
          {
            id: 15,
            label: "二级 3-1",
          },
          {
            id: 16,
            label: "二级 3-2",
          },
        ],
      },
    ];
    return {
      deptList: [],
      data: JSON.parse(JSON.stringify(data)),
      data: JSON.parse(JSON.stringify(data)),
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",
    };
  },

  methods: {
    append(data) {
      const newChild = { id: id++, label: "testtest", children: [] };
      if (!data.children) {
        this.$set(data, "children", []);
      }
      data.children.push(newChild);
    },

    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex((d) => d.id === data.id);
      children.splice(index, 1);
    },

    renderContent(h, { node, data, store }) {
      return (
        <span class="custom-tree-node">
          <span>{node.label}</span>
          <span>
            <el-button
              size="mini"
              type="text"
              on-click={() => this.append(data)}
            >
              Append
            </el-button>
            <el-button
              size="mini"
              type="text"
              on-click={() => this.remove(node, data)}
            >
              Delete
            </el-button>
          </span>
        </span>
      );
    },
    open() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true,
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },

  computed: {
    ...mapGetters(["depts"]),
  },
  created() {
    this.getDispatch();
  },
  methods: {
    getDispatch() {
      this.$store.dispatch("organ/getHomePage");
      //  this.deptList = organ.tranListToTreeData(this.$store.getters.depts);
    },
  },
};
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
</style>
