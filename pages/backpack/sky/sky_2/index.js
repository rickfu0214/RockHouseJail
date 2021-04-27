// pages/backpack/details/index.js
import { get } from '../../../../common/i18n';

var time = 0;
var touchDot = 0; //触摸时的原点
var interval = "";
var flag_hd = true;

Page({
  data: {
    row: {
      evolutionProcess: get('evolutionProcess'),
      strokeSequence: get('strokeSequence'),
    },
    child: {
      hsk: get('hsk'),
      evolutionSky01: get('evolutionSky01'),
      evolutionSky02: get('evolutionSky02'),
      evolutionSky03: get('evolutionSky03'),
      evolutionSky04: get('evolutionSky04'),
      evolutionSky05: get('evolutionSky05')
    },
    // innerAudioContext: null,
    // innerAudioContextSrc: '../../../../static/image/evolution/sky/voice-sky.wav',
    commonImageList: ["arrow", "brush", "voice", "whitebrush"],
    imageList: ["character", "phoneticize", "strokeSequence", "evolution_01", "evolution_02", "evolution_03", "evolution_04", "evolution_05"],
  },

  onLoad: function (options) {
    const that = this;
    // that.innerAudioContext = wx.createAudioContext('audio-sky');
    that.setImageUrl("common", "details_sky_2")
  },

  setImageUrl: function (schedul_1, schedul_2) {
    const db = wx.cloud.database()
    const that = this;
    db.collection(schedul_1).get({
      success: res => {
        res.data.forEach(item => {
          const commonImageList = [{ name: item.name, fileId: item.fileId }];
          that.data.commonImagePath = commonImageList.concat(that.data.commonImagePath);
        });
        that.data.commonImageList.forEach(item => {
          that.setCommonFileId(item);
        })
        db.collection(schedul_2).get({
          success: res => {
            res.data.forEach(item => {
              const imageList = [{ name: item.name, fileId: item.fileId }];
              that.data.imagePath = imageList.concat(that.data.imagePath);
            });
            that.data.imageList.forEach(item => {
              that.setFileId(item);
            })
          },
          fail: console.error,
        })
      },
      fail: console.error,
    })
  },

  setCommonFileId: function (imageName) {
    const that = this;
    const currentImageInfo = that.data.commonImagePath.find((item) => { return item.name === imageName })
    wx.cloud.getTempFileURL({
      fileList: [currentImageInfo.fileId],
      success: res => {
        switch (imageName) {
          case "arrow":
            that.setData({
              arrow: res.fileList[0].tempFileURL
            });
            break;
          case "brush":
            that.setData({
              brush: res.fileList[0].tempFileURL
            });
            break;
          case "voice":
            that.setData({
              voice: res.fileList[0].tempFileURL
            });
            break;
          case "whitebrush":
            that.setData({
              whitebrush: res.fileList[0].tempFileURL
            });
            break;
        }
      },
      fail: console.error
    })
  },

  setFileId: function (imageName) {
    const that = this;
    const currentImageInfo = that.data.imagePath.find((item) => { return item.name === imageName })
    wx.cloud.getTempFileURL({
      fileList: [currentImageInfo.fileId],
      success: res => {
        switch (imageName) {
          case "character":
            that.setData({
              character: res.fileList[0].tempFileURL
            });
            break;
          case "phoneticize":
            that.setData({
              phoneticize: res.fileList[0].tempFileURL
            });
            break;
          case "strokeSequence":
            that.setData({
              strokeSequence: res.fileList[0].tempFileURL
            });
            break;
          // case "sky_2_bg":
          //   that.setData({
          //     sky_1_bg: res.fileList[0].tempFileURL
          //   });
          //   break;
          case "evolution_01":
            that.setData({
              evolution_01: res.fileList[0].tempFileURL
            });
            break;
          case "evolution_02":
            that.setData({
              evolution_02: res.fileList[0].tempFileURL
            });
            break;
          case "evolution_03":
            that.setData({
              evolution_03: res.fileList[0].tempFileURL
            });
            break;
          case "evolution_04":
            that.setData({
              evolution_04: res.fileList[0].tempFileURL
            });
            break;
          case "evolution_05":
            that.setData({
              evolution_05: res.fileList[0].tempFileURL
            });
            break;
        }
      },
      fail: console.error
    });
  },

  // audioPlay: function () {
  //   this.innerAudioContext.play()
  // },

  onReady(e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    // this.audioCtx = wx.createAudioContext('myAudio')
    // this.audioCtx.setSrc('..')
    // this.audioCtx.play()
  },

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
    // 向右滑动 
    if (touchMove - touchDot <= -40 && time < 10 && flag_hd == true) {
      flag_hd = false;
      //执行切换页面的方法
      wx.redirectTo({
        url: '../../hsk/sky/sky_2/index'
      })
    }
    clearInterval(interval); // 清除setInterval
    time = 0;
  },
})