// pages/Common/classification/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classification_folkloreImageList: ["folklore_01", "folklore_02", "folklore_03", "folklore_04", "folklore_05", "folklore_06", "folklore_07", "folklore_08", "folklore_09", "folklore_10"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
this.setImageUrl("classification_folklore");
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
        that.data.classification_folkloreImageList.forEach(item => {
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
          case "folklore_01":
            that.setData({
              folklore_01: res.fileList[0].tempFileURL
            });
            break;
          case "folklore_02":
            that.setData({
              folklore_02: res.fileList[0].tempFileURL
            });
            break;
          case "folklore_03":
            that.setData({
              folklore_03: res.fileList[0].tempFileURL
            });
            break;
          case "folklore_04":
            that.setData({
              folklore_04: res.fileList[0].tempFileURL
            });
            break;
          case "folklore_05":
            that.setData({
              folklore_05: res.fileList[0].tempFileURL
            });
            break;
          case "folklore_06":
            that.setData({
              folklore_06: res.fileList[0].tempFileURL
            });
            break;
          case "folklore_07":
            that.setData({
              folklore_07: res.fileList[0].tempFileURL
            });
            break;
          case "folklore_08":
            that.setData({
              folklore_08: res.fileList[0].tempFileURL
            });
            break;
          case "folklore_09":
            that.setData({
              folklore_09: res.fileList[0].tempFileURL
            });
            break;
          case "folklore_10":
            that.setData({
              folklore_10: res.fileList[0].tempFileURL
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