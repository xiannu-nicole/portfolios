import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
    state:{
        myPicture:"../public/image/img.jpg",
        items:[
            {
                title:"綠豆蒜製研所",
                img:"https://element.com.tw/ludousuan/image/banner/img-01.jpg",
                href:"https://element.com.tw/ludousuan/",
            },
            {
                title:"光域文旅",
                img:"https://hemusih.com/guangyu-inn/img/rooms/1f/%E6%B5%AE%E5%85%89/1.jpg",
                href:"https://hemusih.com/guangyu-inn/",
            },
            {
                title:"帕帕拉夏音樂學苑",
                img:"https://element.com.tw/peggie-music-house/public/image/banner/img-01.jpg",
                href:"https://element.com.tw/peggie-music-house/",
            },
            {
                title:"英國皇家愛樂",
                img:"https://element.com.tw/sun-kids/public/image/banner/img-01.jpg",
                href:"https://element.com.tw/sun-kids/",
            },
            {
                title:"韓燒",
                img:"https://element.com.tw/hanshao-korea/public/image/environment/img-01.jpg",
                href:"https://element.com.tw/hanshao-korea/",
            },
            {
                title:"Rose 顏究所",
                img:"https://element.com.tw/rose-beauty/public/image/banner/img-01.jpg",
                href:"https://element.com.tw/rose-beauty/",
            },
            {
                title:"氣息音樂工作室",
                img:"https://element.com.tw/respirer-studio-de-musique/public/image/banner/img-01.jpg",
                href:"https://element.com.tw/respirer-studio-de-musique/",
            },
            {
                title:"阿順搬家工程行",
                img:"https://yihsuanwebdesign.com/a-shun-moving/public/image/banner/img-03.jpg",
                href:"https://yihsuanwebdesign.com/a-shun-moving/",
            },
            {
                title:"大荷設計",
                img:"https://hemusih.com.tw/lotus-design/public/image/banner/img-01.jpg",
                href:"https://hemusih.com.tw/lotus-design/",
            },
            {
                title:"那羅香草",
                img:"https://element.com.tw/naroherbs/image/banner/img-01.jpg",
                href:"https://element.com.tw/naroherbs/",
            },
        ],
        stars:[
            {
                title:"太空旅星",
                img:"../public/image/stars/img-01.jpg",
                href:"https://xiannu-nicole.github.io/stars/",
            },
            {
                title:"相關小測驗",
                img:"../public/image/stars/img-02.jpg",
                href:"https://xiannu-nicole.github.io/stars/#/test/",
            },
        ],
    },
})

export default store
