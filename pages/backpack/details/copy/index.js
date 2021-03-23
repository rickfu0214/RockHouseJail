Page({
  data: {
    originalX: 0,
    originalY: 0,
    currentX: 0,
    currentY: 0,
    hidden: true,
    ctx: null,
    query: null
  },
  start(e) {
    this.setData({
      hidden: false,
      originalX: e.touches[0].x,
      originalY: e.touches[0].y,
      currentX: e.touches[0].x,
      currentY: e.touches[0].y
    })
  },
  move(e) {
    this.setData({
      originalX: this.data.currentX,
      originalY: this.data.currentY,
      currentX: e.touches[0].x,
      currentY: e.touches[0].y
    });
    this.draw();
  },
  end(e) {
    this.setData({
      hidden: true
    })
  },
  draw: function () {
    this.query.select('#myCanvas')
      .fields({ node: true, size: true })
      .exec((res) => {
        const canvas = res[0].node
        const ctx = canvas.getContext('2d')
        const dpr = wx.getSystemInfoSync().pixelRatio
        canvas.width = res[0].width * dpr
        canvas.height = res[0].height * dpr
        ctx.scale(dpr, dpr)
        ctx.beginPath();
        ctx.moveTo(this.data.originalX, this.data.originalY);
        ctx.lineTo(this.data.currentX, this.data.currentY);
        ctx.stroke();
      })
  },
  onLoad: function () {
    this.query = wx.createSelectorQuery()
  }
})