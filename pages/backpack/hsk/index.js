// pages/backpack/hsk/index.js
import { get } from '../../../common/i18n';

var time = 0;
var touchDot = 0;//触摸时的原点
var interval = "";
var flag_hd = true;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    key: {
      vocabulary: get("vocabulary"),
      extendKnowledge: get("extend")
    },
    vocabularyRow1Cell1Top: null,
    vocabularyRow1Cell1Middle: null,
    vocabularyRow1Cell1Bottom: null,
    vocabularyRow1Cell2Top: null,
    vocabularyRow1Cell2Middle: null,
    vocabularyRow1Cell2Bottom: null,

    vocabularyRow2Cell1Top: null,
    vocabularyRow2Cell1Middle: null,
    vocabularyRow2Cell1Bottom: null,
    vocabularyRow2Cell2Top: null,
    vocabularyRow2Cell2Middle: null,
    vocabularyRow2Cell2Bottom: null,

    extendRow1Top: null,
    extendRow1Middle: null,
    extendRow1Bottom: null,
    extendRow2Top: null,
    extendRow2Middle: null,
    extendRow2Bottom: null,
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    const vocabularyRow1Cell1Top = get("skyVocabularyRow1Cell1_Phoneticize");
    const vocabularyRow1Cell1Middle = get("skyVocabularyRow1Cell1_Chinese");
    const vocabularyRow1Cell1Bottom = get("skyVocabularyRow1Cell1_English");
    const vocabularyRow1Cell2Top = get("skyVocabularyRow1Cell2_Phoneticize");
    const vocabularyRow1Cell2Middle = get("skyVocabularyRow1Cell2_Chinese");
    const vocabularyRow1Cell2Bottom = get("skyVocabularyRow1Cell2_English");

    const vocabularyRow2Cell1Top = get("skyVocabularyRow2Cell1_Phoneticize");
    const vocabularyRow2Cell1Middle = get("skyVocabularyRow2Cell1_Chinese");
    const vocabularyRow2Cell1Bottom = get("skyVocabularyRow2Cell1_English");
    const vocabularyRow2Cell2Top = get("skyVocabularyRow2Cell2_Phoneticize");
    const vocabularyRow2Cell2Middle = get("skyVocabularyRow2Cell2_Chinese");
    const vocabularyRow2Cell2Bottom = get("skyVocabularyRow2Cell2_English");
    
    const extendRow1Top = get("skyExtendRow1_Phoneticize");
    const extendRow1Middle = get("skyExtendRow1_Chinese");
    const extendRow1Bottom = get("skyExtendRow1_English");
    const extendRow2Top = get("skyExtendRow2_Phoneticize");
    const extendRow2Middle = get("skyExtendRow2_Chinese");
    const extendRow2Bottom = get("skyExtendRow2_English");

    this.setData({
      vocabularyRow1Cell1Top: vocabularyRow1Cell1Top.split(' '),
      vocabularyRow1Cell1Middle: vocabularyRow1Cell1Middle.split(' '),
      vocabularyRow1Cell1Bottom: vocabularyRow1Cell1Bottom.split(' '),
      vocabularyRow1Cell2Top: vocabularyRow1Cell2Top.split(' '),
      vocabularyRow1Cell2Middle: vocabularyRow1Cell2Middle.split(' '),
      vocabularyRow1Cell2Bottom: vocabularyRow1Cell2Bottom.split(' '),

      vocabularyRow2Cell1Top: vocabularyRow2Cell1Top.split(' '),
      vocabularyRow2Cell1Middle: vocabularyRow2Cell1Middle.split(' '),
      vocabularyRow2Cell1Bottom: vocabularyRow2Cell1Bottom.split(' '),
      vocabularyRow2Cell2Top: vocabularyRow2Cell2Top.split(' '),
      vocabularyRow2Cell2Middle: vocabularyRow2Cell2Middle.split(' '),
      vocabularyRow2Cell2Bottom: vocabularyRow2Cell2Bottom.split(' '),

      extendRow1Top: extendRow1Top.split(' '),
      extendRow1Middle: extendRow1Middle.split(' '),
      extendRow1Bottom: extendRow1Bottom.split(' '),
      extendRow2Top: extendRow2Top.split(' '),
      extendRow2Middle: extendRow2Middle.split(' '),
      extendRow2Bottom: extendRow2Bottom.split(' '),
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
    flag_hd = true;    //重新进入页面之后，可以再次执行滑动切换页面代码
    clearInterval(interval); // 清除setInterval
    time = 0;
  },

  //触摸开始
  touchStart: function (e) {
    touchDot = e.touches[0].pageX; // 获取触摸时的原点
    // 使用js计时器记录时间 
    interval = setInterval(function () {
      time++;
    }, 100);
  },
  // 触摸结束事件
  touchEnd: function (e) {
    var touchMove = e.changedTouches[0].pageX;
    
    // 向左滑动 
    if (touchMove - touchDot >= 40 && time < 10 && flag_hd == true) {
      flag_hd = false;
      //执行切换页面的方法
      wx.redirectTo({
        url: '../details/index'
      })
    }
    clearInterval(interval); // 清除setInterval
    time = 0;
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

  },
  /**
   * 触屏开始计时和获取坐标
   */
  touchstart: function (event) {
    startDot.X = event.touches[0].pageX;
    startDot.Y = event.touches[0].pageY;
    number = setInterval(function () { time++; }, 100);
  },
  /**
   * 判断滑动距离和时间是否需要切换页面
   */
  touchmove: function (event) {
    touchDot.X = event.touches[0].pageX;
    touchDot.Y = event.touches[0].pageY;
    //向左滑处理
    if ((startDot.X - touchDot.X) > 200 && (startDot.Y - touchDot.Y) < 150 && time < 5 && time > 0.1) {
      wx.switchTab({
        url: '../hsk/index.wxml'
      });
      clearInterval(number);
      time = 0;
    }
    //向右滑处理
    // if ((touchDot.X - startDot.X) > 200 && (touchDot.Y - startDot.Y) < 150 && time < 5 && time > 0.1) {
    //   wx.switchTab({
    //     url: '../hsk/index.wxml'
    //   });
    //   clearInterval(number);
    //   time = 0;
    // }
  },
  /**
   * 结束触屏重置计时
   */
  touchend: function (event) {
    clearInterval(number);
    time = 0;
  },

  //声明节点查询的方法
  queryMultipleNodes: function () {
    const query = wx.createSelectorQuery()                // 创建节点查询器 query
    query.select('#productServe').boundingClientRect()    // 这段代码的意思是选择Id=productServe的节点，获取节点位置信息的查询请求
    query.select('#enterpriseServe').boundingClientRect() // 这段代码的意思是选择Id=enterpriseServe的节点，获取节点位置信息的查询请求
    query.select('#normalServe').boundingClientRect()     // 这段代码的意思是选择Id=normalServe的节点，获取节点位置信息的查询请求
    query.selectViewport().scrollOffset()                 // 这段代码的意思是获取页面滑动位置的查询请求
    query.exec((res) => {
      res[0].top                                          // #productServe节点的到页面顶部的距离
      res[1].width                                        // #enterpriseServe节点的宽度
      res[2].height                                       // #normalServe节点的高度
    })
  },
})