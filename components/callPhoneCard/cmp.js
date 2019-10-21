// components/callPhoneCard/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickboxFunc: function(e) {
      
      if (e.target.id === "callphone") {
        // 拨打电话
        wx.makePhoneCall({
          phoneNumber: '15822011936' //仅为示例，并非真实的电话号码
        })
      } else if (e.target.id === "ceshi") {
        // 我要测试

      } else {
        // 客服咨询
        wx.makePhoneCall({
          phoneNumber: '10086' //仅为示例，并非真实的电话号码
        })
      }
    }
  }
})
