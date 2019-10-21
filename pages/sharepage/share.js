// pages/sharepage/share.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    screenWidth: 375,
    screenHeight:1130,
    unit: 0.5,
    canvasImagePath: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取用户设备信息，屏幕宽度
    wx.getSystemInfo({
      success: res => {
        this.setData({
          screenWidth: res.screenWidth,
          screenHeight: res.screenHeight,
          unit: res.screenWidth / 750
        })
      }
    })
    this.createCanvas()
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
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    if (res.from === 'button' && res.target.id !== "shareall") {
      // 来自页面内转发  按钮
      return {
        title: '自定义转发标题',
        path: '/pages/index/index?tabbar=false'
      }
    }
  },

  promisify: api => {
    return (options, ...params) => {
      return new Promise((resolve, reject) => {
        const extras = {
          success: resolve,
          fail: reject
        }
        api({ ...options, ...extras }, ...params)
      })
    }
  },

  createCanvas: function() {
    let that = this;
    const wxGetImageInfo = this.promisify(wx.getImageInfo)
    Promise.all([
      wxGetImageInfo({
        src: 'https://i2.tiimg.com/701571/bd44242a2cc36399.png'
      }),
      wxGetImageInfo({
        src: 'https://i1.fuimg.com/701571/2e8bee225c09bf5a.png'
      })
    ]).then(res => {
      const ctx = wx.createCanvasContext('shareCanvas');
      ctx.drawImage(res[1].path,
        0,
        0,
        1500,
        2300,
        0,
        0,
        that.data.screenWidth,
        that.data.screenHeight * 0.75
      )
      // 底图
      ctx.drawImage(res[0].path, 
        0, 
        0, 
        488, 
        488, 
        (that.data.screenWidth - 244 * this.data.unit) * 0.5,
        287 * this.data.unit, 
        244 * this.data.unit, 
        (244 - 40) * this.data.unit
      )
      // 作者名称
      ctx.setTextAlign('center')    // 文字居中
      ctx.setFillStyle('#000000')  // 文字颜色：黑色
      ctx.setFontSize(36 * this.data.unit)         // 文字字号：22px
      ctx.fillText("张杰", that.data.screenWidth * 0.5, 173 * this.data.unit)
      ctx.font = "normal 400 18px PingFang SC";
      ctx.setTextAlign('center')    // 文字居中
      ctx.setFillStyle('#222222')  // 文字颜色：黑色
      ctx.setFontSize(34 * this.data.unit)         // 文字字号：22px
      ctx.fillText("西安趣链科技有限公司", that.data.screenWidth * 0.5, 237 * this.data.unit)
      ctx.fillStyle="#FFF"
      ctx.fillRect((that.data.screenWidth - this.data.unit * 343) * 0.5, that.data.screenHeight * 0.5, this.data.unit * 343, this.data.unit * 60);
      ctx.setFillStyle('#222222')  // 文字颜色：黑色
      ctx.setFontSize(30 * this.data.unit)         // 文字字号：22px
      ctx.fillText("分享码：123e4u", that.data.screenWidth - this.data.unit * 343*1.1, that.data.screenHeight * 0.5 + this.data.unit * 40)
      ctx.stroke()
      ctx.draw(false, function(res) {
        wx.canvasToTempFilePath({
          x: 0,
          y: 0,
          width: that.data.screenWidth,
          height: that.data.screenHeight,
          destWidth: that.data.screenWidth,
          destHeight: that.data.screenHeight,
          fileType:"png",
          canvasId: 'shareCanvas',
          success: function(res) {
            that.setData({
              canvasImagePath: res.tempFilePath
            })
          },
          fail: function() {
            console.log("图片导出失败")
          },
          complete: function() {
            console.log("图片导出成功")
          }
        })
      })
    })
  },

  downCardFunc: function() {
    wx.showLoading({
      title: '图片生成中',
    })
    wx.saveImageToPhotosAlbum({
      filePath: this.data.canvasImagePath,
      success(res) {
        wx.hideLoading({
          success: function() {
            wx.showToast({
              title: '保存相册成功',
              icon: 'success',
              duration: 2000
            })
          },
          fail: function() {
            wx.showToast({
              title: '保存相册失败',
              icon: 'fail',
              duration: 2000
            })
          }
        })
      }
    })
  },

  copCodeNumFunc: function(e) {
    wx.setClipboardData({
      data: e.currentTarget.dataset.text,
      success(res) {
        wx.getClipboardData()
      }
    })
  }
})