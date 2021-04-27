// pages/Common/classification/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classification_landImageList: ["land_01", "land_02", "land_03", "land_04", "land_05", "land_06", "land_07", "land_08", "land_09", "land_10"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
this.setImageUrl("classification_land");
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
        that.data.classification_landImageList.forEach(item => {
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
          case "land_01":
            that.setData({
              land_01: res.fileList[0].tempFileURL
            });
            break;
          case "land_02":
            that.setData({
              land_02: res.fileList[0].tempFileURL
            });
            break;
          case "land_03":
            that.setData({
              land_03: res.fileList[0].tempFileURL
            });
            break;
          case "land_04":
            that.setData({
              land_04: res.fileList[0].tempFileURL
            });
            break;
          case "land_05":
            that.setData({
              land_05: res.fileList[0].tempFileURL
            });
            break;
          case "land_06":
            that.setData({
              land_06: res.fileList[0].tempFileURL
            });
            break;
          case "land_07":
            that.setData({
              land_07: res.fileList[0].tempFileURL
            });
            break;
          case "land_08":
            that.setData({
              land_08: res.fileList[0].tempFileURL
            });
            break;
          case "land_09":
            that.setData({
              land_09: res.fileList[0].tempFileURL
            });
            break;
          case "land_10":
            that.setData({
              land_10: res.fileList[0].tempFileURL
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