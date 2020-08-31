// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    serverList:[
      {icon:'/img/my_img6.png',name:'我的卡包',path:'/pages/cardList/cardList'},
      {icon:'/img/my_img7.png',name:'帮助中心',path:'/pages/helpCenter/helpCenter'},
      {icon:'/img/my_img8.png',name:'意见反馈',path:'/pages/feedBack/feedBack'},
      {icon:'/img/my_img9.png',name:'加盟合作',path:'/pages/joinUs/joinUs'},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  navigator:function(e){
    let url = e.currentTarget.dataset.url
    wx.navigateTo({
      url
    })
  },
  redirect:function(e){ 
    let url = e.currentTarget.dataset.url
    wx.redirectTo({
      url
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