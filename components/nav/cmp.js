// components/nav/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    navTypeArr: {
      type: Array,
      value: [
        "轻轻芒芒",
        "兴趣兴趣",
        "物质",
        "世界",
        "新事兴趣",
        "灵魂"
      ]
    },
    liwidth: {
      type: String,
      value: "111rpx"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    magazineIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(e) {
      const index = e.currentTarget.dataset.index;
      this.setData({
        magazineIndex: index,
        // activeId: `magazine${index === 0 ? 0 : index - 1}`
      })
    }
  }
})
