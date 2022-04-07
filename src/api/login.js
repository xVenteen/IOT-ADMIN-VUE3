import axios from '@/utils/axios'

export const get = () => {
    return axios({
        url: '/users',
        method: 'get'
    })
}