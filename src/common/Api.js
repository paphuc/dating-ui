import axios from 'axios'

import { clearLocalStorage, getToken } from './Utils'
import Config from '../../config'
class axiosService {
  constructor() {
    const instance = axios.create({
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })

    instance.interceptors.response.use(this.handleSuccess, this.handleError)

    instance.interceptors.request.use(
      async (config) => {
        if (!config.headers.Authorization) {
          const user = await getToken('user')
          if (user) {
            const { token } = JSON.parse(user)
            config.headers.Authorization = `Bearer ${token}`
          }
        }
        console.info(config)
        return config
      },
      (error) => {
        Promise.reject(error)
      }
    )
    this.instance = instance
  }

  handleSuccess(response) {
    return response
  }

  handleError(error) {
    return Promise.reject(error)
  }

  get(url) {
    return this.instance.get(`${Config.Host}:${Config.Port}${url}`)
  }

  post(url, payload) {
    return this.instance.post(`${Config.Host}:${Config.Port}${url}`, payload)
  }

  put(url, payload) {
    return this.instance.put(`${Config.Host}:${Config.Port}${url}`, payload)
  }

  delete(url, payload) {
    return this.instance.delete(`${Config.Host}:${Config.Port}${url}`, { data: payload })
  }

  upload(url, formData) {
    return this.instance.post(`${Config.Host}:${Config.Port}${url}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  }

  export(url) {
    return this.instance.get(`${Config.Host}:${Config.Port}${url}`, {
      responseType: 'blob',
    })
  }
}

export default new axiosService()
