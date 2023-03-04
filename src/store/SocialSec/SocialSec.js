import { getSocialListAPI } from '@/api/index';

export default {
    namespaced: true,
    state: {
        SocialLists: []
    },
    mutations: {
        updatcodes(state, val) {
            state.SocialLists = val;
        }
    },
    actions: {
        async getSocialList(context) {
            const res = await getSocialListAPI();
            console.log(res);
            context.commit("updatcodes", res.data)
            // console.log(res);
        },
        
    }
}