// pages/homepages/homepages.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 导航栏文本
    nvalist: [],
    //轮播图片地址
    imgURL:[],
    //获取视频
    videosList:[]
  },
  //定义被点击菜单的索引值
  currenentIndexNav: 0,
  // 当用户点击文本后，显示相应的导航栏文本模块
  activeNav(e){
    this.setData({
      currenentIndexNav:e.target.dataset.index
    })
  },


  //获取头部导航栏文字
  getNavlist(){
    let that=this;
    wx.request({
      
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList',
      
      success(res){
        if(res.data.code==0){
          that.setData({
            nvalist:res.data.data.navList
          })
        }
      }
    })
  },
  
  //获取轮播图
  getImg(){
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList',
      success(res) {
        if (res.data.code == 0) {
          that.setData({
            imgURL: res.data.data.swiperList
          })
        }
      }
    })
  },


  //获取视频
  getvideos(){
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList',
      success(res) {
        if (res.data.code == 0) {
          that.setData({
            videosList: res.data.data.videosList
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNavlist();
    this.getImg();
    this.getvideos();
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