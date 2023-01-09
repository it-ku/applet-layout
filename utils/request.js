
import { toast } from './util'
import env from '../env'
// 请求
export async function request(url, data, option) {
  let { method,showLoading, onError } = option || {}
  const app = getApp();
  url = env.default.HTTP_URL + url
  if(showLoading) {
    wx.showLoading({
      title: '正在疯狂加载中……',
      mask: true
    });
  }
  method = method ? method : "POST"
  const header = {}
  header.Authorization = "Bearer " + app.globalData.token

  return new Promise((resolve, reject) => {
    wx.request({
      url,
      data,
      method,
      header,
      success: function(res) {
        re = res.data
        console.log(data);

        if(re.code === 200) {
          return resolve(re.data)
        } else if (re.code === 10010){
          app ? app.globalData.token = '' : ''
          wx.redirectTo({
            url: '/pages/index/index',
          })
        }else if(re.code === -200) {
          onError ? onError(res) : toast(res.msg || '请求错误')
        }else{
          onError ? onError(res) : toast(res.msg || '请求错误')
        }
      }
    })
  })
}