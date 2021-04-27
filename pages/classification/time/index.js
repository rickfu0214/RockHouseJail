// pages/Common/classification/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classification_timeImageList: ["time_01", "time_02", "time_03", "time_04", "time_05", "time_06", "time_07", "time_08", "time_09", "time_10"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
this.setImageUrl("classification_time");
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
        that.data.classification_timeImageList.forEach(item => {
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
          case "time_01":
            that.setData({
              time_01: res.fileList[0].tempFileURL
            });
            break;
          case "time_02":
            that.setData({
              time_02: res.fileList[0].tempFileURL
            });
            break;
          case "time_03":
            that.setData({
              time_03: res.fileList[0].tempFileURL
            });
            break;
          case "time_04":
            that.setData({
              time_04: res.fileList[0].tempFileURL
            });
            break;
          case "time_05":
            that.setData({
              time_05: res.fileList[0].tempFileURL
            });
            break;
          case "time_06":
            that.setData({
              time_06: res.fileList[0].tempFileURL
            });
            break;
          case "time_07":
            that.setData({
              time_07: res.fileList[0].tempFileURL
            });
            break;
          case "time_08":
            that.setData({
              time_08: res.fileList[0].tempFileURL
            });
            break;
          case "time_09":
            that.setData({
              time_09: res.fileList[0].tempFileURL
            });
            break;
          case "time_10":
            that.setData({
              time_10: res.fileList[0].tempFileURL
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