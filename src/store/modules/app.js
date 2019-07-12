
import Vue from "vue";
import { ninvoke } from "q";

const app = {
    state: {
        // ifCanCheckToken: true, //默认可以刷新token
        refreshCount: 1
    },
    mutations: {
        // 设置文章
        // SET_ARTICLEDATA: (state, articleData) => {
        //     state.articleData = articleData
        // },

    },
    actions: {
        // // 是否能刷新token
        // set_ifCanCheckToken({ commit, state }, ifCanCheckToken) {
        //     return new Promise((resolve, reject) => {
        //         state.ifCanCheckToken = ifCanCheckToken
        //         resolve("set_ifCanCheckToken - SUCCESS")
        //     })
        // },
        // // 能否刷新token-状态判断
        // get_ifCanCheckToken({ commit, state }) {
        //     return new Promise((resolve, reject) => {
        //         resolve(state.ifCanCheckToken)
        //     })
        // },
        set_refreshCount({ commit, state }, refreshCount) {
            return new Promise((resolve, reject) => {
                state.refreshCount = refreshCount
                resolve("set_refreshCount - SUCCESS")
            })
        },

    }
}

export default app
