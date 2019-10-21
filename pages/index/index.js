//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // motto: 'Hello World',
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo')
    bannerTopArr: [
      "../../image/1.png",
      "../../image/2.png",
      "../../image/2.png",
      "../../image/2.png"
    ],
    inforList: [],
    productList: ["1", "2", "3", "4", "5", "6", "7", "8"],
    toView: "p_0",
    currentIndex: 0, // banner轮播图当前索引
    num:0,
    screenWidth:750,
    ratio:1,
    scrollLeftFirst: undefined,
    curIndex:1,
    startScrollLeft: 120,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (options) {
    console.log(options);
    wx.login({
      success(res) {
        console.log(res);
      }
    })
    //获取用户设备信息，屏幕宽度
    wx.getSystemInfo({
      success: res => {
        this.setData({
          screenWidth: res.screenWidth,
          screenHeight: res.screenHeight,
          ratio: res.screenWidth / 750,
          startScrollLeft: res.screenWidth / 2
        })
      }
    })
    if (options.tabbar === "false") {
      console.log("&&&&&&");
      console.log(wx.hideTabBar);
      wx.hideTabBar({
        animation: false,
        success: function(res) {
          console.log(res);
        }
      })
    }
    this.setData({
      num: this.data.productList.length,
      inforList: [
        { url: "url", title: "公告：国家关于增值税调整的通知" },
        { url: "url", title: "公告：清得快二线城市通知" },
        { url: "url", title: "公告：纳尼，要回去毕业答辩了？" }]
    });
  },
  previewScrollFunc: function(e) {
    // console.log(e.detail.scrollLeft, e);
    if (this.data.scrollLeftFirst) {
      let temp = 1 + Math.floor((e.detail.scrollLeft - this.data.scrollLeftFirst) / (this.data.ratio * 205));
      if(temp <= 0) temp = 0;
      this.setData({
        curIndex: temp
      })

      // console.log(temp);
    }
    if (this.data.scrollLeftFirst === undefined) {
      this.setData({
        scrollLeftFirst: e.detail.scrollLeft
      })
    }
  },
  /**
   * 跳转企业详情
   * @param path 企业详情页面路径
   */
  toBusinessDetailFunc: function() {
    wx.navigateTo({
      url: "/pages/businessIntroduct/businessIntroduct"
    })
  },

  /**
   * 跳转产品详情页
   */
  toProductDetailFunc: function() {
    wx.navigateTo({
      url: "/pages/businessProductsDetail/busiProduDetail"
    })
  },

  /**
   * 跳转产品列表页
   */
  toProductListFunc: function() {
    wx.navigateTo({
      url: "/pages/businessProductList/busiProduList"
    })
  },

  /**
   * banner项index改变时触发，用于改变自己轮播图自定义指示点
   */
  bannerChange: function (current, source) {
    this.setData({
      currentIndex: current.detail.current
    })
  }
})
