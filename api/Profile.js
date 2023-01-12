import axios from 'axios'

export const getProfile = (url) => axios.get(url, {withCredentials: true}).then(res => res.data)
export const changePayment = (url, data) => axios.post(url, data, {withCredentials: true}).then(res => res.data)
export const editProfile = (url, data) => axios.post(url, data, { withCredentials: true }).then(res => res.data)
export const changePP = (url, data) => axios.post(url, data, { withCredentials: true }).then(res => res.data)