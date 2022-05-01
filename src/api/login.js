import axios from '@/utils/axios'

export const login = (data) => {
    return axios({
        url: '/api/login',
        method: 'post',
        data
    })
}