import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
      state: ()=>{
        return {
          loading:true,
          customer:null,
          cart: [],
          isPreview:false,
          whishlist: [],
          seo: {
            title: '',
            description: '',
            keywords: [],
            url: '',
            image: '',
            metaTags: [],
            scripts: [],
          },
          settings: null,
          domain: 'www.storeino.com',
          apps: [],
          token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYyYjQ3MjJmMDA4ZmNmMDI4MGI4Y2I4ZiIsImZpcnN0bmFtZSI6ImxlbHVlbG9yZiIsImxhc3RuYW1lIjoibGVsdWVsb3JmIiwicG9zaXRpb24iOiJDTElFTlQiLCJlbWFpbCI6ImxlbHVlbG9yZkBnbWFpbC5jb20iLCJhZGRyZXNzIjpudWxsfSwiY29tcGFueSI6eyJfaWQiOiI2MDQwYWNlODRlODcyNDA5NTBhN2Q4YzkiLCJuYW1lIjoic3RvcmVpbm8iLCJzdGF0dXMiOiJVTkNPTVBMRVRFRCJ9LCJzdG9yZSI6eyJfaWQiOiI2MmI0NzFlNTAwOGZjZjAyODBiOGNiNjMiLCJuYW1lIjoibGVsdWVsb3JmIiwic3ViZG9tYWluIjoibGVsdWVsb3JmLnN0b3JlaW5vLndvcmxkIn0sImlhdCI6MTY1ODY3OTk0NywiZXhwIjoxNjU5NTQzOTQ3fQ.R9lEEiHRAfQJ8yxEi-BE_ZhwCQaMFNcNbYgIr8cEXdw",
          primary: {
            rgb: { r:0, g:0, b:0 },
            color: '#000000'
          },
          search: '',
          defaults: {
              image: "https://storeno.b-cdn.net/themes/palest/default-shop.jpg",
              sliderImage: "https://storeno.b-cdn.net/themes/palest/slider.jpeg",
              sideBanner: "https://storeno.b-cdn.net/themes/palest/side-banner.jpeg",
              logo: "https://storeno.b-cdn.net/themes/palest/logo.png",
              icon: "https://storeno.b-cdn.net/themes/palest/icon.png"
          },
          baseURL: 'https://api-stores.storeino.world/api',
          currency: {
            symbol: "DH",
            code: undefined
          },
          language: {
            name: "Unknown",
            code: undefined
          },
          //
          fullImage: null,
          showHeaderMenu: false
        }
      },
      actions: ()=>{},
      mutations: ()=>{},
      getters: ()=>{}
    })
  }
export default createStore
