import { getPermissionListAPI,delPermissionAPI } from '@/api/index';

export default {
    namespaced: true,
    state: {
        powerLists: []
    },
    mutations: {
        updatcodes(state, val) {
            state.powerLists = val;
        }
    },
    actions: {
        async getPermissionList(context) {
            const res = await getPermissionListAPI();
            // console.log(res);
            context.commit("updatcodes", res.data.data)
            console.log(res.data.data);
        },
        // async delPermission(id) {
        //     try {
        //         await this.$confirm("确定要删除该数据吗？", "提示", {
        //             confirmButtonText: "确定",
        //             cancelButtonText: "取消",
        //             type: "warning",
        //         });
        //         await delPermissionAPI(id);
        //         this.getPermissionList();
        //         this.$message.success("删除成功！");
        //     } catch (error) {
        //         console.log(error);
        //     }
        // },
    }
}