// pages/Common/classification/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classification_skyImageList: ["sky_01", "sky_02", "sky_03", "sky_04", "sky_05", "sky_06", "sky_07", "sky_08", "sky_09", "sky_10"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setImageUrl("classification_sky");
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
        that.data.classification_skyImageList.forEach(item => {
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
          case "sky_01":
            that.setData({
              sky_01: res.fileList[0].tempFileURL
            });
            break;
          case "sky_02":
            that.setData({
              sky_02: res.fileList[0].tempFileURL
            });
            break;
          case "sky_03":
            that.setData({
              sky_03: res.fileList[0].tempFileURL
            });
            break;
          case "sky_04":
            that.setData({
              sky_04: res.fileList[0].tempFileURL
            });
            break;
          case "sky_05":
            that.setData({
              sky_05: res.fileList[0].tempFileURL
            });
            break;
          case "sky_06":
            that.setData({
              sky_06: res.fileList[0].tempFileURL
            });
            break;
          case "sky_07":
            that.setData({
              sky_07: res.fileList[0].tempFileURL
            });
            break;
          case "sky_08":
            that.setData({
              sky_08: res.fileList[0].tempFileURL
            });
            break;
          case "sky_09":
            that.setData({
              sky_09: res.fileList[0].tempFileURL
            });
            break;
          case "sky_10":
            that.setData({
              sky_10: res.fileList[0].tempFileURL
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