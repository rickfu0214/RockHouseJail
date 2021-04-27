// pages/Common/classification/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classification_plantImageList: ["plant_01", "plant_02", "plant_03", "plant_04", "plant_05", "plant_06", "plant_07", "plant_08", "plant_09", "plant_10"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
this.setImageUrl("classification_plant");
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
        that.data.classification_plantImageList.forEach(item => {
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
          case "plant_01":
            that.setData({
              plant_01: res.fileList[0].tempFileURL
            });
            break;
          case "plant_02":
            that.setData({
              plant_02: res.fileList[0].tempFileURL
            });
            break;
          case "plant_03":
            that.setData({
              plant_03: res.fileList[0].tempFileURL
            });
            break;
          case "plant_04":
            that.setData({
              plant_04: res.fileList[0].tempFileURL
            });
            break;
          case "plant_05":
            that.setData({
              plant_05: res.fileList[0].tempFileURL
            });
            break;
          case "plant_06":
            that.setData({
              plant_06: res.fileList[0].tempFileURL
            });
            break;
          case "plant_07":
            that.setData({
              plant_07: res.fileList[0].tempFileURL
            });
            break;
          case "plant_08":
            that.setData({
              plant_08: res.fileList[0].tempFileURL
            });
            break;
          case "plant_09":
            that.setData({
              plant_09: res.fileList[0].tempFileURL
            });
            break;
          case "plant_10":
            that.setData({
              plant_10: res.fileList[0].tempFileURL
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