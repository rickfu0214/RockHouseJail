// pages/Common/classification/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classification_bodyImageList: ["body_01", "body_02", "body_03", "body_04", "body_05", "body_06", "body_07", "body_08", "body_09", "body_10"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
this.setImageUrl("classification_body");
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
        that.data.classification_bodyImageList.forEach(item => {
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
          case "body_01":
            that.setData({
              body_01: res.fileList[0].tempFileURL
            });
            break;
          case "body_02":
            that.setData({
              body_02: res.fileList[0].tempFileURL
            });
            break;
          case "body_03":
            that.setData({
              body_03: res.fileList[0].tempFileURL
            });
            break;
          case "body_04":
            that.setData({
              body_04: res.fileList[0].tempFileURL
            });
            break;
          case "body_05":
            that.setData({
              body_05: res.fileList[0].tempFileURL
            });
            break;
          case "body_06":
            that.setData({
              body_06: res.fileList[0].tempFileURL
            });
            break;
          case "body_07":
            that.setData({
              body_07: res.fileList[0].tempFileURL
            });
            break;
          case "body_08":
            that.setData({
              body_08: res.fileList[0].tempFileURL
            });
            break;
          case "body_09":
            that.setData({
              body_09: res.fileList[0].tempFileURL
            });
            break;
          case "body_10":
            that.setData({
              body_10: res.fileList[0].tempFileURL
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