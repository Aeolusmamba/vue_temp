import { login as loginApi } from '@/api/login'
import router from '@/router'
export default {
  namespaced: true,
  state: () => ({
    token: localStorage.getItem('token') || '',
    siderType: true,
    lang: localStorage.getItem('lang') || 'zh',
    remote: false
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      localStorage.setItem('token', token)
    },
    changeSiderType(state) {
      state.siderType = !state.siderType
    },
    changeLang(state, lang) {
      state.lang = lang
    },
    // 设置远程状态
    remoteSetting(state, status) {
      state.remote = status
    }
  },
  actions: {
    login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        loginApi(userInfo)
          .then((res) => {
            console.log(res)
            commit('setToken', res.token)
            router.replace('/')
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    // 退出
    logout({ commit }) {
      commit('setToken', '')
      localStorage.clear()
      router.replace('/login')
    }
  }
}
