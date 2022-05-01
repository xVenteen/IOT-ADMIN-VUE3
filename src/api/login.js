import axios from '@/utils/axios'

export const init = (data) => {
    return axios({
        url: '/api',
        method: 'post',
        data
    })
}

export const login = (data) => {
    return axios({
        url: '/api/login',
        method: 'post',
        data
    })
}