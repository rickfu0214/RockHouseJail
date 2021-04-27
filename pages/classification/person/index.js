// pages/Common/classification/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classification_personImageList: ["person_01", "person_02", "person_03", "person_04", "person_05", "person_06", "person_07", "person_08", "person_09", "person_10"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
this.setImageUrl("classification_person");
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
        that.data.classification_personImageList.forEach(item => {
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
          case "person_01":
            that.setData({
              person_01: res.fileList[0].tempFileURL
            });
            break;
          case "person_02":
            that.setData({
              person_02: res.fileList[0].tempFileURL
            });
            break;
          case "person_03":
            that.setData({
              person_03: res.fileList[0].tempFileURL
            });
            break;
          case "person_04":
            that.setData({
              person_04: res.fileList[0].tempFileURL
            });
            break;
          case "person_05":
            that.setData({
              person_05: res.fileList[0].tempFileURL
            });
            break;
          case "person_06":
            that.setData({
              person_06: res.fileList[0].tempFileURL
            });
            break;
          case "person_07":
            that.setData({
              person_07: res.fileList[0].tempFileURL
            });
            break;
          case "person_08":
            that.setData({
              person_08: res.fileList[0].tempFileURL
            });
            break;
          case "person_09":
            that.setData({
              person_09: res.fileList[0].tempFileURL
            });
            break;
          case "person_10":
            that.setData({
              person_10: res.fileList[0].tempFileURL
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