import { createStore } from 'vuex'

export default createStore({
  state: {
    CountProductsInBasket: 0,
    AllPricePoductsInBasket: 0,
    Products:
      [{
        id: 1,
        url: require('@/components/icons/1.png'),
        name: 'Устрицы по рокфеллеровски',
        description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
        price: '2700'
      },
      {
        id: 2,
        url: require('@/components/icons/2.png'),
        name: 'Свиные ребрышки на гриле с зеленью',
        description: 'Не следует, однако забывать, что реализация намеченных плановых',
        price: '1600'
      },
      {
        id: 3,
        url: require('@/components/icons/3.png'),
        name: 'Креветки по-королевски в лимонном соке',
        description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу',
        price: '1820'
      },
      {
        id: 4,
        url: require('@/components/icons/1.png'),
        name: 'Устрицы по рокфеллеровски',
        description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
        price: '2700'
      },
      {
        id: 5,
        url: require('@/components/icons/1.png'),
        name: 'Устрицы по рокфеллеровски',
        description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры ',
        price: '2700'
      },
      {
        id: 6,
        url: require('@/components/icons/2.png'),
        name: 'Свиные ребрышки на гриле с зеленью',
        description: 'Не следует, однако забывать, что реализация намеченных плановых',
        price: '1600'
      },
      {
        id: 7,
        url: require('@/components/icons/3.png'),
        name: 'Креветки по-королевски в лимонном соке',
        description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу',
        price: '1820'
      },
      {
        id: 8,
        url: require('@/components/icons/1.png'),
        name: 'Устрицы по рокфеллеровски',
        description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
        price: '2700'
      }],
    BasketProducts: [],
    CurrentProduct: {}
  },
  getters: {
    getCountProductsInBasket: state => state.CountProductsInBasket,
    getAllPricePoductsInBasket: state => state.AllPricePoductsInBasket,
    getProducts: state => state.Products,
    getBasketProducts: state => state.BasketProducts,
    getCurrentProduct: state => state.CurrentProduct
  },
  mutations: {
    add (state, product) {
      state.BasketProducts.push(product)
    },
    minus (state, id) {
      const index = state.BasketProducts.findIndex(val => val.id === id)
      if (index !== -1) {
        state.BasketProducts.splice(index, 1)
      }
    },
    clearBasket (state) {
      state.BasketProducts = []
    },
    updateCountProductsInBasket (state) {
      state.CountProductsInBasket = state.BasketProducts.length
    },
    updateAllPricePoductsInBasket (state) {
      state.AllPricePoductsInBasket = state.BasketProducts.reduce((s, el) => s + +el.price, 0)
    },
    setCurrentProduct (state, id) {
      state.CurrentProduct = state.Products.find(val => val.id === +id)
    }
  },
  actions: {
  },
  modules: {
  }
})
