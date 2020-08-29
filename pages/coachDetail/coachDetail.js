// pages/coachDetail/coachDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    coachDetail: {
      head: '/img/coachDetail_img1.png',
      name: '教练教练',
      startNum: 4,
      scores: 4.9,
      authentication: 5,
      tag: ['拉伸', '减脂套餐', '入门格斗'],
      presence: ['/img/coachDetail_img5.png', '/img/coachDetail_img6.png', '/img/coachDetail_img7.png', '/img/coachDetail_img8.png'],
      qualifications: ['/img/coachDetail_img9.png', '/img/coachDetail_img9.png', '/img/coachDetail_img9.png', '/img/coachDetail_img9.png'],
      locationList: [
        '成华区华康路8号11栋1层',
        '锦江区椿树街876号附207',
        '成华区华康路9号3栋2层'
      ],
      evaluateList: [{
        head: '/img/coachDetail_img11.png',
        name: '小黄的鸡',
        date: '2020年5月12日',
        type: '包月私教',
        startNum: 0,
        scores: 4.9,
        text: '系统默认好评'
      }, {
        head: '/img/coachDetail_img12.png',
        name: '小黄的鸡',
        date: '2020年5月12日',
        type: '包月私教',
        startNum: 1,
        scores: 4.9,
        text: '系统默认好评'
      }, {
        head: '/img/coachDetail_img11.png',
        name: '小黄的鸡',
        date: '2020年5月12日',
        type: '包月私教',
        startNum: 5,
        scores: 4.9,
        text: '系统默认好评'
      }]
    }
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

  }
})