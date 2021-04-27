// pages/Common/classification/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classification_animalImageList: ["animal_01", "animal_02", "animal_03", "animal_04", "animal_05", "animal_06", "animal_07", "animal_08", "animal_09", "animal_10"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setImageUrl("classification_animal");
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
        that.data.classification_animalImageList.forEach(item => {
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
          case "animal_01":
            that.setData({
              animal_01: res.fileList[0].tempFileURL
            });
            break;
          case "animal_02":
            that.setData({
              animal_02: res.fileList[0].tempFileURL
            });
            break;
          case "animal_03":
            that.setData({
              animal_03: res.fileList[0].tempFileURL
            });
            break;
          case "animal_04":
            that.setData({
              animal_04: res.fileList[0].tempFileURL
            });
            break;
          case "animal_05":
            that.setData({
              animal_05: res.fileList[0].tempFileURL
            });
            break;
          case "animal_06":
            that.setData({
              animal_06: res.fileList[0].tempFileURL
            });
            break;
          case "animal_07":
            that.setData({
              animal_07: res.fileList[0].tempFileURL
            });
            break;
          case "animal_08":
            that.setData({
              animal_08: res.fileList[0].tempFileURL
            });
            break;
          case "animal_09":
            that.setData({
              animal_09: res.fileList[0].tempFileURL
            });
            break;
          case "animal_10":
            that.setData({
              animal_10: res.fileList[0].tempFileURL
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