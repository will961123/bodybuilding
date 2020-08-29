// pages/courseList/courseList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuList:[
      {icon:'/img/courseList_img1.png',name:'减脂',width:'34rpx'},
      {icon:'/img/courseList_img2.png',name:'增肌',width:'38rpx'},
      {icon:'/img/courseList_img3.png',name:'康复',width:'40rpx'},
      {icon:'/img/courseList_img4.png',name:'拉伸',width:'38rpx'},
      {icon:'/img/courseList_img5.png',name:'全部',width:'33rpx'},
    ],
    region: [],
    list:[
      {
        bg:'/img/courseList_img6.png',
        head:'/img/courseList_img7.png',
        cName:'综合训练课', 
        name:'江教练',
        price:'36'
      },
      {
        bg:'/img/courseList_img8.png',
        head:'/img/courseList_img9.png',
        cName:'综合训练课', 
        name:'江教练',
        price:'36'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  bindRegionChange: function (e) { 
    this.setData({
      region: e.detail.value
    })
  },
  handlerItemClick(e){
    wx.navigateTo({
      url: '../courseDetail/courseDetail?id=',
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

  }
})