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
    innerAudioContext: null,
    innerAudioContextSrc: '../../../../static/image/evolution/sky/voice-sky.wav'
  },

  onLoad: function (options) {
      this.innerAudioContext = wx.createAudioContext('audio-sky');
  },
  audioPlay: function () {
      this.innerAudioContext.play()
  },

  onReady (e) {
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
        url: '../../hsk/sky/sky_9/index'
      })
    }
    clearInterval(interval); // 清除setInterval
    time = 0;
  },
})