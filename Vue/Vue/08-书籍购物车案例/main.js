const app = new Vue({
  el: '#app',
  data: {
    books: [{
      id: 1,
      name: '《算法导论》',
      date: '2006-9',
      price: 85.00,
      count: 1
    },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        date: '2006-2',
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: '《编程珠玑》',
        date: '2008-2',
        price: 39.00,
        count: 1
      }, {
        id: 4,
        name: '《代码大全》',
        date: '2006-3',
        price: 128.00,
        count: 1
      }]
  },
  methods: {
    add(id) {
      this.books.forEach(function (value, index, arr) {
        if (value.id === id) {
          value.count++
        }
      })
    },
    sub(id) {
      this.books.forEach(function (value, index, arr) {
        if (value.id === id && value.count >= 2) {
          value.count--
        }
      })
    },
    removeHandler(id){
      this.books.forEach(function (value,index,arr) {
        if(value.id ===id){
          arr.splice(index,1)
        }
      })
    }
  },
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2)
    }
  },
  computed: {
    totalPrice() {
      let total = 0
      this.books.forEach(function (value, index, arr) {
        total += value.price * value.count
      })
      return total
    }
  }
})
