<template>
  <div>
    <div id="reader">
    </div>
    <div @click="onClickEvent">
      <Control ref="Control"
               :readingProgress="readingProgress"
               @jumpCfi="jumpCfi"
               @nextChapter="nextChapter"
               @prevChapter="prevChapter"
               @showCatalog="showCatalog"></Control>
      <Catalog ref="Catalog" @jump="jump"></Catalog>
    </div>
  </div>
</template>

<script>
import {bookInfo} from '@/services/book'
import {getAppearance, setAppearance, getProgress, setProgress} from '@/services/reader'
import Control from '@/components/reader/control'
import Catalog from '@/components/reader/catalog'

export default {
  components: {
    Control,
    Catalog
  },
  data() {
    return {
      book_id: null,
      loading: false,
      clickListen: null,
      loadingEpub: false,
      bookInfo: null,
      appearanceInfo: {
        'font-size': '22px',
        'color': '#ffffff',
        'background-color': 'rgb(30, 30, 30)'
      },
      rendition: null,
      readDoc: null,
      toc: [],
      readingProgress: {
        percentage: 0,
        cfi: '',
        href: ''
      }
    }
  },
  mounted() {
    this.book_id = this.$route.query.book_id || 1
    this.getData()
    this.getAppearance()
    this.getProgress()
  },
  methods: {
    onClickEvent(e) {
      const docWidth = document.body.clientWidth
      const docHeight = document.body.clientHeight
      const clientX = Math.min(e.screenX, e.clientX)
      const clientY = Math.min(e.screenY, e.clientY)
      if (clientY > docHeight - 60 || clientY < 60) {
        return
      }
      if (clientX > docWidth * 0.35 && clientX < docWidth * 0.65) {
        this.$refs.Control.toggle()
        return
      }
      if (clientX > document.body.clientWidth * 0.5) {
        this.nextPage();
        this.$refs.Control.close()
      } else {
        this.prevPage();
        this.$refs.Control.close()
      }
    },
    showCatalog() {
      this.$refs.Catalog.open(this.toc)
    },
    jump(v) {
      this.rendition.display(v.href);
    },
    jumpCfi(v) {
      if (v) {
        this.rendition.display(v);
      }
    },
    nextChapter() {
      console.log(this.rendition)
      const i = this.toc.findIndex((v) => v.href === this.readingProgress.href)
      const n = this.toc[i + 1]
      if (n) this.rendition.display(n.ref);
    },
    prevChapter() {
      const i = this.toc.findIndex((v) => v.href === this.readingProgress.href)
      const n = this.toc[i - 1]
      if (n) this.rendition.display(n.ref);
    },
    nextPage() {
      this.rendition.next();
    },
    prevPage() {
      this.rendition.prev();
    },
    setTheme() {
      // 设置样式
      this.rendition.themes.default({
        body: {
          'font-size': this.appearanceInfo.font_size,
          'color': this.appearanceInfo.color,
          'background': this.appearanceInfo.background
        },
      });
      if (this.readDoc) {
        this.readDoc.document.documentElement.style.fontSize = this.appearanceInfo.font_size
      }
    },
    renderBook() {
      const that = this
      this.loadingEpub = true
      const book = window.ePub(this.bookInfo.file_path);
      this.loadingEpub = false
      const rendition = this.rendition = book.renderTo("reader", {
        width: '100%',
        height: document.documentElement.clientHeight,
        flow: "paginated"
      });

      this.jumpCfi(this.readingProgress.cfi)
      console.log(rendition)

      this.setTheme()

      rendition.on("rendered", (e, i) => {
        that.readDoc = i
        that.setTheme()
        let mousedownE = null
        let mousedownT = null
        i.document.documentElement.addEventListener('mousedown', function (e) {
          mousedownE = e
          mousedownT = Date.now()
        })
        i.document.documentElement.addEventListener('mouseup', function (e) {
          if (Math.abs(mousedownE.clientX - e.clientX) < 5 && Date.now() - mousedownT < 600) {
            that.onClickEvent(e)
          }
        })
        i.document.documentElement.addEventListener('touchend', function (e) {
          // that.onClickEvent(e)
        })
        console.log(i)
      });

      //  时时保存阅读进度
      rendition.on('relocated', function (location) {
        that.readingProgress.percentage = location.start.percentage
        that.readingProgress.cfi = location.start.cfi
        that.readingProgress.href = location.start.href
        console.log(location)
        that.setProgress(location.start)
      });

      book.ready.then(function () {
        const locations = book.locations.generate(1600); // 很慢，后面可以考虑存起来
        return locations;
      });

      // 加载目录
      book.loaded.navigation.then(navigation => {
        that.toc = navigation.toc
        console.log(navigation.toc)
      });
    },
    async getData() {
      try {
        this.loading = true
        const {code, data, message} = await bookInfo({book_id: this.book_id})
        if (code === 0) {
          this.bookInfo = data
          this.renderBook()
        } else {
          this.$notify({type: 'warning', message})
        }
      } catch (e) {
        console.log(e)
        this.$notify({type: 'danger', message: e.message})
      } finally {
        this.loading = false
      }
    },
    async getAppearance() {
      try {
        const {code, data, message} = await getAppearance({book_id: this.book_id})
        if (code === 0) {
          if (data) {
            this.appearanceInfo = data
            this.setTheme()
          }
        } else {
          this.$notify({type: 'warning', message})
        }
      } catch (e) {
        console.log(e)
        this.$notify({type: 'danger', message: e.message})
      }
    },
    async setAppearance(v) {
      try {
        const {code, message} = await setAppearance(v)
        if (code !== 0) {
          this.$notify({type: 'warning', message})
        }
      } catch (e) {
        console.log(e)
        this.$notify({type: 'danger', message: e.message})
      }
    },
    async getProgress() {
      try {
        const {code, data, message} = await getProgress({book_id: this.book_id})
        if (code === 0) {
          if (data) {
            this.readingProgress = data
            this.jumpCfi(this.readingProgress.cfi)
          }
        } else {
          this.$notify({type: 'warning', message})
        }
      } catch (e) {
        console.log(e)
        this.$notify({type: 'danger', message: e.message})
      }
    },
    async setProgress(v) {
      try {
        if (v.percentage < 0.0001) {
          return
        }
        const {code, message} = await setProgress(Object.assign({book_id: this.book_id}, v))
        if (code !== 0) {
          this.$notify({type: 'warning', message})
        }
      } catch (e) {
        console.log(e)
        this.$notify({type: 'danger', message: e.message})
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.full {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
