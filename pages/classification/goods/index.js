// pages/Common/classification/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classification_goodsImageList: ["goods_01", "goods_02", "goods_03", "goods_04", "goods_05", "goods_06", "goods_07", "goods_08", "goods_09", "goods_10"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
this.setImageUrl("classification_goods");
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
        that.data.classification_goodsImageList.forEach(item => {
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
          case "goods_01":
            that.setData({
              goods_01: res.fileList[0].tempFileURL
            });
            break;
          case "goods_02":
            that.setData({
              goods_02: res.fileList[0].tempFileURL
            });
            break;
          case "goods_03":
            that.setData({
              goods_03: res.fileList[0].tempFileURL
            });
            break;
          case "goods_04":
            that.setData({
              goods_04: res.fileList[0].tempFileURL
            });
            break;
          case "goods_05":
            that.setData({
              goods_05: res.fileList[0].tempFileURL
            });
            break;
          case "goods_06":
            that.setData({
              goods_06: res.fileList[0].tempFileURL
            });
            break;
          case "goods_07":
            that.setData({
              goods_07: res.fileList[0].tempFileURL
            });
            break;
          case "goods_08":
            that.setData({
              goods_08: res.fileList[0].tempFileURL
            });
            break;
          case "goods_09":
            that.setData({
              goods_09: res.fileList[0].tempFileURL
            });
            break;
          case "goods_10":
            that.setData({
              goods_10: res.fileList[0].tempFileURL
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