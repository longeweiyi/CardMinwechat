// pages/businessProductList/busiProduList.js
let col1H = 0;
let col2H = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listW: 344,
    scrollH: 0,
    images: [],
    col1: [],
    col2: [],
    imageArr: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (res) => {
        let ww = res.windowWidth;
        let wh = res.windowHeight;
        let scrollH = wh;

        this.setData({
          scrollH: scrollH,
          listW: 344 * ww / 750
        });

        this.loadImages();
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  loadImages: function () {
    //这里加载图片
    this.setData({
      imageArr: [
        {
          id: 1,
          name: "他呢是别人的",
          url: "https://i1.fuimg.com/701571/b3733b405fe63c5d.png"
        },
        {
          id: 2,
          name: "他呢是别人的2",
          url: "https://i2.tiimg.com/701571/289152967d069050.png"
        },
        {
          id: 3,
          name: "他呢是别人的3",
          url: "https://i2.tiimg.com/701571/cad9ddc72379be19.png"
        },
        {
          id: 4,
          name: "他呢是别人的4",
          url: "https://i2.tiimg.com/701571/682f66396662e646.png"
        },
        {
          id: 5,
          name: "他呢是别人的5",
          url: "https://i2.tiimg.com/701571/4fc49138afe4d6f8.png"
        },
        {
          id: 6,
          name: "他呢是别人的6",
          url: "https://i1.fuimg.com/701571/9488dfba950c9480.png"
        },
        {
          id: 7,
          name: "他呢是别人的7",
          url: "https://i1.fuimg.com/701571/5e781729a5ec69d7.png"
        },
        {
          id: 8,
          name: "他呢是别人的",
          url: "https://i1.fuimg.com/701571/aa731799dde38cea.png"
        }
      ]
    })
  },

  onImageLoad: function (e) {
    // let oImgW = ;        //图片原始宽度
    let imgh = e.detail.height;
    let imgw = e.detail.width;
    let oImgH = this.data.listW * imgh / imgw;        //图片原始高度
    let images = this.data.images;
    let item = e.currentTarget.dataset.item;
    let col1 = this.data.col1;
    let col2 = this.data.col2;
    let tempArr = this.data.imageArr;
    

    if (col1H <= col2H) {
      col1H += oImgH;
      col1.push(item);
    } else {
      col2H += oImgH;
      col2.push(item);
    }

    let data = {
      col1: col1,
      col2: col2
    };

    this.setData(data);
  }
})