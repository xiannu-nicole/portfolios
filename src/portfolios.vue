<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["items", "stars"]),
  },
};
</script>


<template>
  <div class="container">
    <h2 class="text-center">portfolios</h2>
    <div class="row gx-lg-5 gy-5">
      <div class="col-lg-5">
        <div id="introduction" class="sticky-lg-top" style="top: 40px">
          <div class="year">
            <h4>2021 年</h4>
            <p>
              9 月～11
              月時參加了中興大學與勞動部開辦的網頁設計課程，學習UIUX相關知識以及前端技術。
            </p>
          </div>
          <br />
          <div class="year">
            <h4>2022 年</h4>
            <p>
              年初開始任職於一家行銷公司，工作內容為製作公司官網，及依據客戶的需求單，獨立完成一頁式網站的設計及切版，製作流程既要符合響應式的規範，也要掌握SEO的優化。
            </p>
            <h5>主要技術：</h5>
            <ul>
              <li>HTML+CSS 設計與切版</li>
              <li>SCSS 減少重複程式碼，便於管理與維護</li>
              <li>JQuery 撰寫功能</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-lg-7">
        <div id="works">
          <div
            v-for="item in items"
            :key="item.title"
            class="d-flex flex-column"
          >
            <a
              class="item-wrapper"
              :style="{ 'background-image': `url(${item.img})` }"
              :href="item.href"
              target="_blank"
            >
              <h6>{{ item.title }}</h6>
            </a>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="row gx-lg-5 gy-5">
      <div class="col-lg-5">
        <div id="introduction" class="sticky-lg-top" style="top: 40px">
          <div class="year">
            <h4>其他</h4>
            <p>空閑時間使用了 Vue 為主要工具，製作了關於星體的網站，是以中小學生及對星星有興趣的初心者為目標客群，介紹各種知名星球的特色。</p>
            <h5>主要技術：</h5>
            <ul>
<li>VueRouter：製作分頁效果。</li>
<li>Vuex：讀取 json 檔，並透過state存取製作了小測驗。</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-lg-7">
        <div id="works">
          <a
            class="others d-block mb-3"
            v-for="item in stars"
            :key="item.title"
            :href="`${item.href}`"
            target="_blank"
          >
            <i class="fas fa-arrow-right"></i>
            <img :src="item.img" alt="item.title" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import "../public/style/style.scss";
h2 {
  margin-bottom: 100px;
}
hr {
  margin: 4rem 0;
}
ul{
  li:not(:last-child){
    margin-bottom: 8px;
  }
}
#introduction {
  h4,
  h5 {
    font-size: 16px;
  }
  h4 {
    padding-left: 12px;
    margin-bottom: 16px;
    border-left: 6px solid $primary;
    color: $primary;
  }
}
#works {
  a.item-wrapper {
    padding: 40px;
    margin: 10px 0;
    position: relative;
    z-index: 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    overflow: hidden;
    &:after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: #000000a5;
      // background: linear-gradient(to right, #000000b8 0%, #00000000 100%);
      z-index: -1;
      transition: all 0.3s;
    }
    h6 {
      position: relative;
      margin-bottom: 0;
      color: #ffffff50;
      font-weight: 400;
      letter-spacing: 4px;
      font-size: 24px;
      transform: translate(-50px, 100%);
    }
    &:hover {
      &:after {
        background: #00000000;
      }
      h6 {
        transform: translate(0);
        color: #ffffff;
        text-shadow: 4px 4px 8px #00000080;
      }
    }
  }
  a.others {
    position: relative;
    i {
      font-size: 40px;
      position: absolute;
      left: 0;
      top: 50%;
      transform: scale(0);
      color: #fff;
      opacity: 0;
    }
    &:hover {
      img {
        filter: brightness(0.3);
        z-index: 0;
      }
      i {
      left: 50%;
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
        z-index: 1;
      }
    }
  }
}
@media (min-width: 992px) {
  #works {
  a.item-wrapper {
    h6 {
      font-size: 44px;
    }
  }
  }}
</style>
