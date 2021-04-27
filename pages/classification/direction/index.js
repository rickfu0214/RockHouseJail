// pages/Common/classification/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classification_directionImageList: ["direction_01", "direction_02", "direction_03", "direction_04", "direction_05", "direction_06", "direction_07", "direction_08", "direction_09", "direction_10"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
this.setImageUrl("classification_direction");
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
        that.data.classification_directionImageList.forEach(item => {
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
          case "direction_01":
            that.setData({
              direction_01: res.fileList[0].tempFileURL
            });
            break;
          case "direction_02":
            that.setData({
              direction_02: res.fileList[0].tempFileURL
            });
            break;
          case "direction_03":
            that.setData({
              direction_03: res.fileList[0].tempFileURL
            });
            break;
          case "direction_04":
            that.setData({
              direction_04: res.fileList[0].tempFileURL
            });
            break;
          case "direction_05":
            that.setData({
              direction_05: res.fileList[0].tempFileURL
            });
            break;
          case "direction_06":
            that.setData({
              direction_06: res.fileList[0].tempFileURL
            });
            break;
          case "direction_07":
            that.setData({
              direction_07: res.fileList[0].tempFileURL
            });
            break;
          case "direction_08":
            that.setData({
              direction_08: res.fileList[0].tempFileURL
            });
            break;
          case "direction_09":
            that.setData({
              direction_09: res.fileList[0].tempFileURL
            });
            break;
          case "direction_10":
            that.setData({
              direction_10: res.fileList[0].tempFileURL
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