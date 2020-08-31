// pages/shopDetail/shopDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopDetail: {
      name: '华康路店',
      address: '成华区华康路8号11栋1层',
      km: '11.2km',
      joinData: {
        tot: 5,
        list: [
          '/img/shopDetail_img3.png',
          '/img/shopDetail_img4.png',
          '/img/shopDetail_img5.png',
          '/img/shopDetail_img6.png',
          '/img/shopDetail_img7.png',
        ]
      },
      detailText: '详细信息',
      priceText: ['单次体验价格：19元/小时', '单次体验价格：19元/小时'],
      desc: '是非得失怪怪的是非得失怪怪的是非得失怪怪的是非得失怪怪的是非得失怪怪的是非得失怪怪的是非得失怪怪的是非得失怪怪的是非得失怪怪的',
      list:[
        {head:'/img/shopDetail_img8.png',className:'瑜伽课',name:'王教练'},
        {head:'/img/shopDetail_img8.png',className:'瑜伽课',name:'王教练'},
        {head:'/img/shopDetail_img8.png',className:'瑜伽课',name:'王教练'}
      ]
    },
    calendar: [{
        week: '今天',
        day: 31
      },
      {
        week: '二',
        day: 1
      },
      {
        week: '三',
        day: 2
      },
      {
        week: '四',
        day: 3
      },
      {
        week: '五',
        day: 4
      },
      {
        week: '六',
        day: 5
      },
      {
        week: '七',
        day: 6
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initCalendar()
  },
  initCalendar: function () {
    let weekList = ['日', '一', '二', '三', '四', '五', '六']
    let now = new Date();
    let nowDay = now.getDate()
    let nowWeek = now.getDay()
    let nowMonth = now.getMonth();
    let nowYear = now.getFullYear();
    let monthEndDate = new Date(nowYear, nowMonth + 1, 0);
    let monthEndDay = new Date(monthEndDate).getDate()
    let calendarList = [] 
    for (let index = 0; index < 7; index++) {
      calendarList.push({
        week: weekList[nowWeek],
        day: nowDay
      })
      nowWeek++
      nowDay++
      if (nowWeek > 6) {
        nowWeek = 0
      }
      if (nowDay > monthEndDay) {
        nowDay = 1
      }
    }
    this.setData({
      calendar:calendarList
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