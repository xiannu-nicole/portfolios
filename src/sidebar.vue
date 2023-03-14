<script>
import { mapState } from "vuex";
import $ from "jquery";
export default {
  props: ["overlay"],
  data() {
    return {
      sidebarOpen: false,
    };
  },
  watch: {
    overlay: function(newVal) {
      if (newVal === true) {
        this.sidebarOpen = true;
        this.showOverlay()
      } else {
        this.sidebarOpen = false;
        this.showOverlay()
      }
    },
  },
  methods: {

    showOverlay() {
      this.$emit("overlay", this.sidebarOpen);
      if (this.sidebarOpen === true) {
        $("body").css({ overflow: "hidden" });
        $(".menu").css({ overflow: "scroll" });
      } else {
        $("body").css({ overflow: "auto" });
      }
    },
  },
  computed: {
    ...mapState(["myPicture"]),
  },
};
</script>


<template>
  <div
    id="sidebar"
    class="d-flex flex-column"
    :class="sidebarOpen === true ? 'show' : ''"
  >
    <div
      id="bar"
      @click="
        sidebarOpen = !sidebarOpen;
        showOverlay();
      "
      :class="sidebarOpen === true ? 'show' : ''"
    >
      <div class="h-100 d-flex align-items-center justify-content-center">
        <i class="fas fa-chevron-right"></i>
      </div>
    </div>
    <div class="menu container">
      <div class="text-center">
        <h2>about me</h2>
        <img :src="myPicture" alt="李孟臻" />
        <h1>李孟臻</h1>
      </div>
      <ul class="contact">
        <li><i class="fas fa-envelope"></i> nicole16312@gmail.com</li>
        <li><i class="fas fa-phone-square"></i> 0963122158</li>
      </ul>
      <br />
      <h3>基本資料</h3>
      <hr />
      <dl>
        <div class="d-flex">
          <dt>生　日｜</dt>
          <dd>1997.09.27</dd>
        </div>
        <div class="d-flex">
          <dt>居住地｜</dt>
          <dd>新北市新莊區</dd>
        </div>
        <div class="d-flex">
          <dt>學　歷｜</dt>
          <dd>輔仁大學日本語文學系</dd>
        </div>
      </dl>
      <br />
      <h3>證書</h3>
      <hr />
      <ul>
        <li>JLPT N1</li>
        <li>Google Ads廣告認證</li>
      </ul>
      <br />
      <h3>工具/軟體</h3>
      <hr />
      <dl>
        <dt class="mb-1">網頁撰寫｜</dt>
        <dd>
          <ul class="row">
            <li class="col-md-12">HTML + CSS</li>
            <li class="col-md-6">SCSS</li>
            <li class="col-md-6">JavaScript</li>
            <li class="col-md-6">JQuery</li>
            <li class="col-md-6">Bootstrap</li>
            <li class="col-md-6">Vue</li>
          </ul>
        </dd>
        <dt class="mb-1">平面設計｜</dt>
        <dd>
          <ul class="row">
            <li class="col-md-6">Photoshop</li>
            <li class="col-md-6">Illustrator</li>
            <li class="col-md-6">Indesign</li>
            <li class="col-md-6">Figma</li>
          </ul>
        </dd>
      </dl>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import "../public/style/style.scss";

#sidebar {
  position: fixed !important;
  z-index: 999999;
  top: 0;
  left: -70vw;
  background: $primary;
  min-height: 100vh;
  width: 70vw;
  font-size: 14px;
  position: relative;
  &.show {
    left: 0;
  }
  #bar {
    position: absolute;
    width: 60px;
    height: 60px;
    right: -50px;
    background: $primary;
    top: 80px;
    border-radius: 0 50vh 50vh 0;
    i {
      color: #fff;
    }
  }
  .menu {
    height: 100vh;
    img {
      width: 180px;
      height: 180px;
      object-fit: cover;
      border-radius: 50%;
    }
    h1 {
      font-size: 24px;
      margin: 20px 0 40px;
    }
    h3 {
      font-size: 16px;
    }
    ul {
      padding: 0;
      list-style-position: inside;
      &.contact {
        padding: 0;
        list-style-type: none;
      }
    }
    dl {
      dt {
        font-weight: 400;
      }
    }
  }
}

@media (min-width: 768px) {
  #sidebar {
    left: -500px;
    width: 500px;
    #bar {
      width: 80px;
      height: 80px;
      right: -70px;
      i {
        font-size: 20px;
      }
      &.show {
        right: -80px;
        i {
          transform: rotate(180deg) translateX(50%);
        }
        &:hover {
          i {
            transform: rotate(180deg) translateX(50%) scale(1.1);
          }
        }
      }
      &:hover {
        right: -80px;
        // background: $secondary;
        cursor: pointer;
        i {
          transform: scale(1.2);
        }
      }
    }
  }
}
</style>
