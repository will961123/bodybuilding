// pages/myAppointment/myAppointment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nowType: 0,
    typeList: [
      '已预约',
      '待评价',
      '已完成',
      '已取消',
      '已过期'
    ],
    list: [{
        bg: '/img/myAppointment_img1.png',
        cName: '综合训练课',
        head: '/img/coachDetail_img11.png',
        name: '姜教练',
        type:'已预约'
      },
      {
        bg: '/img/myAppointment_img2.png',
        cName: '综合训练课',
        head: '/img/coachDetail_img12.png',
        name: '姜教练',
        type:'已预约'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  bindTypeChange: function (e) {
    let nowType = e.currentTarget.dataset.idx
    if (nowType === this.data.nowType) return false;
    let list = this.data.list
    // 请求新数据
    list = list.length > 3 ? list.splice(0, 2) : list.concat(list)
    this.setData({
      nowType,
      list
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