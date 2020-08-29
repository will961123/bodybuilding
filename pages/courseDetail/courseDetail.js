// pages/courseDetail/courseDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showMore:false,
    courseDetail:{
      bg:'/img/courseDetail_img1.png',
      name:'课程名',
      time:'60',
      price:'0.00',
      desc:'	通过心肺耐力，柔韧性，协调，平衡训练，帮助受试者 找到身体不足的训练能力，给训练方向，做训练规划。',
      effect:'了解自己当下身体状态，设计及建议运动方向，提高对身体的认识，了解自己。',
      suitablePerson:'适应所有人',
      tip:"为了您更好的参与私人教练课程服务:1.请提前一天 健身健！邀约私教课程 2 .参与课程请着运动装运动裤，参些 斗课程另需带上自己的拳套和手带3。请选择较柔"
    },
    s4List:[
      {icon:'/img/courseDetail_img3.png',name:'购买课程'},
      {icon:'/img/courseDetail_img4.png',name:'线上预约'},
      {icon:'/img/courseDetail_img5.png',name:'门店签到'},
      {icon:'/img/courseDetail_img6.png',name:'评价反馈'},
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  bindShmoreClick:function(){
    this.setData({
      showMore:!this.data.showMore
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