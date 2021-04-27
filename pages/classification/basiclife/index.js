// pages/Common/classification/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classification_basiclifeImageList: ["basiclife_01", "basiclife_02", "basiclife_03", "basiclife_04", "basiclife_05", "basiclife_06", "basiclife_07", "basiclife_08", "basiclife_09", "basiclife_10", "basiclife_11", "basiclife_12", "basiclife_13", "basiclife_14", "basiclife_15"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setImageUrl("classification_basiclife");
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
        that.data.classification_basiclifeImageList.forEach(item => {
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
          case "basiclife_01":
            that.setData({
              basiclife_01: res.fileList[0].tempFileURL
            });
            break;
          case "basiclife_02":
            that.setData({
              basiclife_02: res.fileList[0].tempFileURL
            });
            break;
          case "basiclife_03":
            that.setData({
              basiclife_03: res.fileList[0].tempFileURL
            });
            break;
          case "basiclife_04":
            that.setData({
              basiclife_04: res.fileList[0].tempFileURL
            });
            break;
          case "basiclife_05":
            that.setData({
              basiclife_05: res.fileList[0].tempFileURL
            });
            break;
          case "basiclife_06":
            that.setData({
              basiclife_06: res.fileList[0].tempFileURL
            });
            break;
          case "basiclife_07":
            that.setData({
              basiclife_07: res.fileList[0].tempFileURL
            });
            break;
          case "basiclife_08":
            that.setData({
              basiclife_08: res.fileList[0].tempFileURL
            });
            break;
          case "basiclife_09":
            that.setData({
              basiclife_09: res.fileList[0].tempFileURL
            });
            break;
          case "basiclife_10":
            that.setData({
              basiclife_10: res.fileList[0].tempFileURL
            });
            break;
          case "basiclife_11":
            that.setData({
              basiclife_11: res.fileList[0].tempFileURL
            });
            break;
          case "basiclife_12":
            that.setData({
              basiclife_12: res.fileList[0].tempFileURL
            });
            break;
          case "basiclife_13":
            that.setData({
              basiclife_13: res.fileList[0].tempFileURL
            });
            break;
          case "basiclife_14":
            that.setData({
              basiclife_14: res.fileList[0].tempFileURL
            });
            break;
          case "basiclife_15":
            that.setData({
              basiclife_15: res.fileList[0].tempFileURL
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