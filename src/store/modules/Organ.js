import {
  departmentListAPI,
  addDepartmentAPI,
  updateDepartmentAPI,
  deleteDepartmentAPI,
  checkDepartmentAPI
} from '@/api/index'
import $store from '@/store/index'

export default {
  namespaced: true,
  state: {
    companyId: '',
    companyName: '',
    companyManage: '',
    depts: [],
    status: '',
    message: '',
    form: {
      nowPid: '',
      dName: '',
      dCode: '',
      dManager: '',
      dIntro: '',
      id: '',
      type: ''
    }
    // form2:{
    //     id: '',
    //     type: ''
    // }
  },
  mutations: {
    updatcodes(state, val) {
      state.companyId = val.companyId
      state.companyName = val.companyName
      state.companyManage = val.companyManage
      state.depts = val.depts
    },
    getStatus(state, val) {
      console.log(val)
      state.status = val.code
      state.message = val.message
    },
    getForm(state, val) {
      state.form.dName = val.data.name
      state.form.dCode = val.data.code
      state.form.dManager = val.data.manager
      state.form.dIntro = val.data.introduce
      state.status = val.code
      state.message = val.message
    }
  },
  actions: {
    // 查询公司的基本部门
    async getHomePage(context) {
      const res = await departmentListAPI()
      context.commit('updatcodes', res.data.data)
      // console.log(res.data.data.depts)
    },
    // 添加新部门
    async addDepartment(context, obj) {
      console.log(obj)
      const res = await addDepartmentAPI({
        code: obj.dCode,
        introduce: obj.dIntro,
        manager: obj.dManager,
        name: obj.dName,
        pid: obj.id
      })
      //   console.log(pid)
      //   console.log(res.data)
      context.commit('getStatus', res.data)
    },
    // 根据ID查询部门信息
    async checkDepartment(context, id) {
      const res = await checkDepartmentAPI({
        id: id
      })
      // console.log(res)
      context.commit('getForm', res.data)
    },
    // 根据ID修改部门信息
    async updateDepartment(context, obj) {
      // console.log(obj)
      const res = await updateDepartmentAPI({
        code: obj.dCode,
        introduce: obj.dIntro,
        manager: obj.dManager,
        name: obj.dName,
        pid: obj.pid,
        id: obj.id
      })
      // console.log(res)
      context.commit('getStatus', res.data)
    },
    // 根据ID删除部门
    async deleteDepartment(context, id) {
      const res = await deleteDepartmentAPI({
        id: id
      })
      // console.log(res)
      context.commit('getStatus', res.data)
    }
  }
}
