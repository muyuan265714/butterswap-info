import { Message, Loading } from 'element-ui'
import axios from 'axios'
import { get, isEmpty } from 'lodash'
import qs from 'qs'
import util from '@/libs/util'

let _load
/**
 * @description 记录和显示错误
 * @param {Error} error 错误对象
 */
function handleError(error) {
  // 添加到日志
  store.dispatch('d2admin/log/push', {
    message: '数据请求异常',
    type: 'danger',
    meta: {
      error
    }
  })
  // 打印到控制台
  if (process.env.NODE_ENV === 'development') {
    util.log.danger('>>>>>> Error >>>>>>')
    console.log(error)
  }
  // 显示提示
  Message({
    message: error.message,
    type: 'error',
    duration: 5 * 1000
  })
}

/**
 * @description 创建请求实例
 */
function createService(loading) {
  // 创建一个 axios 实例
  const service = axios.create({ baseURL: process.env.VUE_APP_API })
  // 请求拦截
  service.interceptors.request.use(
    config => {
      // 是否加载loding
      const load = Loading.service({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(255, 255, 255, 0.7)'
      })
      window._$loading = load
      setTimeout(() => {
        load.close()
      }, 5000)
      // setTimeout(() => {
      //   _load.close()
      // }, 3000)
      return config
    },
    error => {
      // 发送失败
      return Promise.reject(error)
    }
  )
  // 响应拦截
  service.interceptors.response.use(
    response => {
      window._$loading && window._$loading.close()
      if (response.data.code == 403) {
        util.cookies.remove('token')
        location.href = 'http://50.2.34.166/#/authenticate'
      }
      // 没有 status 视为非项目接口不作处理
      if (response.data.code === undefined) {
        return response.data
      }
      // 有 status 判断为项目接口请求
      switch (response.data.code) {
        // 返回响应内容
        case 0:
          return response.data.data
        case 200:
          return response.data.data
        // 例如在 status 401 情况下退回到登录页面
        case 401:
          throw new Error('请重新登录')
        // 根据需要添加其它判断
        default:
          Message({
            message: response.data.msg,
            type: 'error',
            duration: 5 * 1000
          })
          throw new Error(`${response.data.msg}: ${response.config.url}`)
      }
    },
    error => {
      const status = get(error, 'response.status')
      switch (status) {
        case 400:
          error.message = '请求错误'
          break
        case 401:
          error.message = '未授权，请登录'
          break
        case 403:
          error.message = '拒绝访问'
          break
        case 404:
          error.message = `请求地址出错: ${error.response.config.url}`
          break
        case 408:
          error.message = '请求超时'
          break
        case 500:
          error.message = '服务器内部错误'
          break
        case 501:
          error.message = '服务未实现'
          break
        case 502:
          error.message = '网关错误'
          break
        case 503:
          error.message = '服务不可用'
          break
        case 504:
          error.message = '网关超时'
          break
        case 505:
          error.message = 'HTTP版本不受支持'
          break
        default:
          break
      }
      handleError(error)
      throw error
    }
  )
  return service
}

function stringify(data) {
  return qs.stringify(data, { allowDots: true, encode: false })
}

/**
 * @description 创建请求方法
 * @param {Object} service axios 实例
 */
function createRequest(service) {
  return function(config) {
    const token = util.cookies.get('token')
    const configDefault = {
      headers: {
        token,
        'Content-Type': get(config, 'headers.Content-Type', 'application/json')
      },
      timeout: 10000,
      baseURL: process.env.VUE_APP_API,
      data: {}
    }
    const option = Object.assign(configDefault, config)
    // 处理 get 请求的参数
    // 请根据实际需要修改
    if (!isEmpty(option.params)) {
      option.url = option.url + '?' + stringify(option.params)
      option.params = {}
    }
    // 当需要以 form 形式发送时 处理发送的数据
    // 请根据实际需要修改
    if (!isEmpty(option.data) && option.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
      option.data = stringify(option.data)
    }
    return service(option)
  }
}

// 用于真实网络请求的实例和请求方法，加载时会默认在container中添加loading加载图标
export const service = createService(true)
export const request = createRequest(service)

// 用于真实网络请求的实例和请求方法
export const serviceNoload = createService(false)
export const requestNoload = createRequest(serviceNoload)
export const baseURL = process.env.VUE_APP_API
export const openUrl = function(api, params) {
  let url = baseURL + api + '?token=' + util.cookies.get('token')
  if (!isEmpty(params)) {
    url = url + '&' + stringify(params)
  }
  window.open(url)
}
