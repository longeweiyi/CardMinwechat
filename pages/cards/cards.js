// pages/cards/cards.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabArr: [
      {
        desc: "我的会员",
      },
      {
        desc: "我的收藏",
      }
    ],
    tabSelecIndex: 0,
    cardList: [
      {
        order: "A",
        list: [
           {
             logo: "",
             type: "3",
             type_name: "未注册",
             perple_name: "阿张",
             site: "CEO",
             businame: "西安趣链科技股份有限公司"
           },
          {
            logo: "",
            type: "2",
            type_name: "经销商",
            perple_name: "阿花",
            site: "CEO",
            businame: "西安趣链科技股份有限公司"
          },
          {
            logo: "",
            type: "1",
            type_name: "受理中心",
            perple_name: "阿荣",
            site: "总经理",
            businame: "西安趣链科技股份有限公司"
          }
        ] 
      },
      {
        order: "B",
        list: [
          {
            logo: "",
            type: "1",
            type_name: "受理中心",
            perple_name: "阿张",
            site: "CEO",
            businame: "西安趣链科技股份有限公司"
          },
          {
            logo: "",
            type: "3",
            type_name: "未注册",
            perple_name: "阿张",
            site: "CEO",
            businame: "西安趣链科技股份有限公司"
          },
          {
            logo: "",
            type: "1",
            type_name: "受理中心",
            perple_name: "阿洛",
            site: "CEO",
            businame: "西安趣链科技股份有限公司"
          },
          {
            logo: "",
            type: "2",
            type_name: "经销商",
            perple_name: "大灰",
            site: "CEO",
            businame: "西安趣链科技股份有限公司"
          }
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  onShareAppMessage: function () {

  },
  /**
   * 切换tab
   */
  switchTabFunc: function (e) {
    this.setData({
      tabSelecIndex: e.target.dataset.type
    })
  }
})