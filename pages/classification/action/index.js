// pages/Common/classification/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classification_actionImageList: ["action_01", "action_02", "action_03", "action_04", "action_05", "action_06", "action_07", "action_08", "action_09", "action_10", "action_11", "action_12", "action_13", "action_14", "action_15", "action_16", "action_17", "action_18", "action_19", "action_20"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setImageUrl("classification_action")
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
        that.data.classification_actionImageList.forEach(item => {
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
          case "action_01":
            that.setData({
              action_01: res.fileList[0].tempFileURL
            });
            break;
          case "action_02":
            that.setData({
              action_02: res.fileList[0].tempFileURL
            });
            break;
          case "action_03":
            that.setData({
              action_03: res.fileList[0].tempFileURL
            });
            break;
          case "action_04":
            that.setData({
              action_04: res.fileList[0].tempFileURL
            });
            break;
          case "action_05":
            that.setData({
              action_05: res.fileList[0].tempFileURL
            });
            break;
          case "action_06":
            that.setData({
              action_06: res.fileList[0].tempFileURL
            });
            break;
          case "action_07":
            that.setData({
              action_07: res.fileList[0].tempFileURL
            });
            break;
          case "action_08":
            that.setData({
              action_08: res.fileList[0].tempFileURL
            });
            break;
          case "action_09":
            that.setData({
              action_09: res.fileList[0].tempFileURL
            });
            break;
          case "action_10":
            that.setData({
              action_10: res.fileList[0].tempFileURL
            });
            break;
          case "action_11":
            that.setData({
              action_11: res.fileList[0].tempFileURL
            });
            break;
          case "action_12":
            that.setData({
              action_12: res.fileList[0].tempFileURL
            });
            break;
          case "action_13":
            that.setData({
              action_13: res.fileList[0].tempFileURL
            });
            break;
          case "action_14":
            that.setData({
              action_14: res.fileList[0].tempFileURL
            });
            break;
          case "action_15":
            that.setData({
              action_15: res.fileList[0].tempFileURL
            });
            break;
          case "action_16":
            that.setData({
              action_16: res.fileList[0].tempFileURL
            });
            break;
          case "action_17":
            that.setData({
              action_17: res.fileList[0].tempFileURL
            });
            break;
          case "action_18":
            that.setData({
              action_18: res.fileList[0].tempFileURL
            });
            break;
          case "action_19":
            that.setData({
              action_19: res.fileList[0].tempFileURL
            });
            break;
          case "action_20":
            that.setData({
              action_20: res.fileList[0].tempFileURL
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