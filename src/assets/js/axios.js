let axios = window.axios

// axios 配置
axios.defaults.timeout = 100000
axios.defaults.baseURL = "http://94.191.73.241:8077"

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// 对响应数据进行处理
axios.interceptors.response.use(function (response) {
  return response.data
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})
// 设置请求头信息
axios.interceptors.request.use(
  config => {
    // let isUploadActive = sessionStorage.getItem('isUploadActive')
    // if (xstreamId && !isUploadActive) {
    //   config.headers['x-stream-id'] = xstreamId
    // }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
export default axios
