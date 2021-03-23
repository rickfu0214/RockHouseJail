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
      extend: get("extend")
    },
    vocabulary: {
      row1: {
        cell1: {
          phoneticize: get("skyVocabularyRow1Cell1_phoneticize"),
        }
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
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