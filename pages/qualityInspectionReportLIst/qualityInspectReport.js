// pages/qualityInspectionReportLIst/qualityInspectReport.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navTypeArr: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      navTypeArr: [
        "全部报告",
        "季度报告",
        "年度报告"
      ]
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 点击libox预览PDF
   */
  clickliBoxFunc: function (e) {
    console.log(e.currentTarget.dataset.index);
    wx.showLoading({
      title: '加载中'
    })
    wx.downloadFile({
      url: 'http://cn.createpdfonline.org/pdffiles/yulanPDF(20191017114824).pdf',      //要预览的PDF的地址
      success: function (res) {
        console.log(res);
        if (res.statusCode === 200) {                     //成功
          var Path = res.tempFilePath                     //返回的文件临时地址，用于后面打开本地预览所用
          wx.openDocument({
            filePath: Path,                               //要打开的文件路径
            success: function (res) {
              console.log('打开PDF成功');
              wx.hideLoading();
            }
          })
        }
      },
      fail: function (res) {
        console.log(res);                                  //失败
      }
    })
  }
})