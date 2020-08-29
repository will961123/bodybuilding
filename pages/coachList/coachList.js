// pages/coachList/coachList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    coachList: new Array(10).fill({
      img: '/img/coachList_img1.png',
      name: '教练教练',
      tag: ['拉伸', '减脂套餐', '入门格斗'],
      num: 5
    }),
    region: []
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
  bindFilterClick:function(){
    wx.navigateTo({
      url: '../coachFilter/coachFilter',
    })
  },
  bindCoachClick:function(e){
    wx.navigateTo({
      url: '../coachDetail/coachDetail?id=',
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