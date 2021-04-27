import { get } from '../../common/i18n';
Page({

  data: {
    greeting: {
      homeUserName: get('homeUserName'),
      homeGreeting: get('homeGreeting'),
      homeClickTip: get('homeClickTip')
    },
    homeImageList: ["avatar", "carousel_01", "carousel_02", "carousel_03", "carousel_04", "carousel_05", "carousel_06", "carousel_07", "carousel_08", "carousel_09", "carousel_10", "carousel_11", "carousel_12"],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.setImageUrl("home");
  },

  setImageUrl: function (schedul) {
    const db = wx.cloud.database()
    const that = this;
    db.collection(schedul).get({
      success: res => {
        res.data.forEach(item => {
          const imageList = [{ name: item.name, fileId: item.fileId }];
          that.data.imagePath = imageList.concat(that.data.imagePath);
        });
        that.data.homeImageList.forEach(item => {
          that.setFileId(item);
        })
      },
      fail: console.error,
    })
  },

  setFileId: function (imageName) {
    const that = this;
    const currentImageInfo = that.data.imagePath.find((item) => { return item.name === imageName })
    wx.cloud.getTempFileURL({
      fileList: [currentImageInfo.fileId],
      success: res => {
        switch (imageName) {
          case "avatar":
            that.setData({
              avatar: res.fileList[0].tempFileURL
            });
            break;
          case "carousel_01":
            that.setData({
              carousel_01: res.fileList[0].tempFileURL
            });
            break;
          case "carousel_02":
            that.setData({
              carousel_02: res.fileList[0].tempFileURL
            });
            break;
          case "carousel_03":
            that.setData({
              carousel_03: res.fileList[0].tempFileURL
            });
            break;
          case "carousel_04":
            that.setData({
              carousel_04: res.fileList[0].tempFileURL
            });
            break;
          case "carousel_05":
            that.setData({
              carousel_05: res.fileList[0].tempFileURL
            });
            break;
          case "carousel_06":
            that.setData({
              carousel_06: res.fileList[0].tempFileURL
            });
            break;
          case "carousel_07":
            that.setData({
              carousel_07: res.fileList[0].tempFileURL
            });
            break;
          case "carousel_08":
            that.setData({
              carousel_08: res.fileList[0].tempFileURL
            });
            break;
          case "carousel_09":
            that.setData({
              carousel_09: res.fileList[0].tempFileURL
            });
            break;
          case "carousel_10":
            that.setData({
              carousel_10: res.fileList[0].tempFileURL
            });
            break;
          case "carousel_11":
            that.setData({
              carousel_11: res.fileList[0].tempFileURL
            });
            break;
          case "carousel_12":
            that.setData({
              carousel_12: res.fileList[0].tempFileURL
            });
            break;
        }
      },
      fail: console.error
    });
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