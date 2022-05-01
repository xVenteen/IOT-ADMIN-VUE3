import Axios from 'axios'
import { Notify } from 'vant'
const baseURL = 'http://127.0.0.1:8888'

const axios = Axios.create({
    baseURL,
    timeout: 10000,// 请求超时 10s
    // headers: {
    //     post: {
    //         "Access-Control-Allow-Origin": true
    //     }
    // }
})

// 前置拦截器（发起请求之前的拦截）
axios.interceptors.request.use(
    (config) => {
        /**
         * 根据你的项目实际情况来对 config 做处理
         * 这里对 config 不做任何处理，直接返回
         */
        console.log(config.method);
        config.data = JSON.stringify(config.data)
        config.headers = {
            // 'X-Token': 'aaabbbccc',
            'Content-Type': 'application/json',
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// 后置拦截器（获取到响应时的拦截）
axios.interceptors.response.use(
    (response) => {
        /**
         * 根据你的项目实际情况来对 response 和 error 做处理
         * 这里对 response 和 error 不做任何处理，直接返回
         */
        return response
    },
    (error) => {
        if (error.response && error.response.data) {
            const code = error.response.status
            const msg = error.response.data.message
            Notify({ type: 'danger', message: `Code:${code}\nMessage:${msg}` })
            console.error(`[Axios Error]`, error.response)
        } else {
            Notify({ type: 'danger', message: error })
        }
        return Promise.reject(error)
    }
)

export default axios
