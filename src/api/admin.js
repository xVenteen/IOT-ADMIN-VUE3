import axios from '@/utils/axios'

export const getLight = () => {
    return axios({
        url: '/api/getlight',
        method: 'get',
    })
}