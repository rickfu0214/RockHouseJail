Page({
  data: {
    originalX: 0,
    originalY: 0,
    currentX: 0,
    currentY: 0,
    hidden: true,
    ctx: null,
    query: null,
    imageList: ["character", "phoneticize", "strokeSequence"],
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
    this.setImageUrl("details_sky_1")
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
        that.data.imageList.forEach(item => {
          that.setFileId(item);
        })
      },
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
        }
      },
      fail: console.error
    });
  },
})