<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="data.swiperList"></home-swiper>
    <home-icons :list="data.iconList"></home-icons>
    <home-recommend :list="data.recommendList"></home-recommend>
    <home-weekend :list="data.weekendList"></home-weekend>
  </div>
</template>

<script>   
// Composition API
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeWeekend from './components/Weekend.vue'
import axios from 'axios'
// import { mapState } from 'vuex'
import { useStore } from 'vuex'
import { reactive, computed, onMounted, onActivated } from 'vue'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  setup() {
    const data = reactive({
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    })
    const store = useStore()
    const city = computed(() => {
      return store.state.city
    })
    async function getHomeInfo() {
      let res = await axios.get('/api/index.json?city=' + city.value)
      res = res.data
      if (res.ret && res.data) {
        const result = res.data
        data.swiperList = result.swiperList
        data.iconList = result.iconList
        data.recommendList = result.recommendList
        data.weekendList = result.weekendList
      }
    }
    onMounted(() => {
      data.lastCity = city
      getHomeInfo()
    })
    onActivated(() => {
      if (data.lastCity !== city) {
        data.lastCity = city
        getHomeInfo()
      }
    })
    return { data };
  }
  // data () {
  //   return {
  //     lastCity: '',
  //     swiperList: [],
  //     iconList: [],
  //     recommendList: [],
  //     weekendList: []
  //   }
  // },
  // computed: {
  //   ...mapState(['city'])
  // },
  // methods: {
  //   getHomeInfo () {
  //     axios.get('/api/index.json?city=' + this.city)
  //       .then(this.getHomeInfoSucc)
  //   },
  //   getHomeInfoSucc (res) { 
  //     res = res.data
  //     if (res.ret && res.data) {
  //       const data = res.data
  //       this.swiperList = data.swiperList
  //       this.iconList = data.iconList
  //       this.recommendList = data.recommendList
  //       this.weekendList = data.weekendList
  //     }
  //   }
  // },
  // mounted () {
  //   this.lastCity = this.city
  //   this.getHomeInfo()
  // },
  // activated () {
  //   if (this.lastCity !== this.city) {
  //     this.lastCity = this.city
  //     this.getHomeInfo()
  //   }
  // }
}
</script>

<style>

</style>