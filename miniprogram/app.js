// 执行 extendApi.js 文件，将方法挂载到 wx 全局对象身上
import './utils/extendApi'

App({


  onShow() {
    // console.log('1111111');
    // wx.toast('数据啊数据')
    wx.modal();
  }
})
