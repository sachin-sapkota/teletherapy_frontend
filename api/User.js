import axios from 'axios'

export const loginUser = (url, data) => axios.post(url, data, { withCredentials: true }).then(res => res.data)
export const logoutUser = (url, data) => axios.post(url, {}, { withCredentials: true }).then(res => res.data)
export const createUser = (url, data) => axios.post(url, data).then(res => res.data)
export const authUser = (url) => axios.get(url, { withCredentials: true }).then(res => res.data)
export const verifyEmail = (url, data) => axios.post(url, data).then(res => res.data)
export const sendEmailVerification = (url) => axios.get(url, { withCredentials: true }).then(res => res.data)
export const forgotPassword = (url, data) => axios.post(url, data).then(res => res.data)
export const resetPassword = (url, data) => axios.post(url, data).then(res => res.data)
export const refreshUser = (url) => axios.get(url, { withCredentials: true }).then(res => res.data)