Vue.component('product-display', {
  props: ['title', 'desc','price', 'stocked', 'image'],
  template: `
    <div class="container" style="padding-top: 30px;">
      <div class="columns">

        <div class="column">
          <div class="card">
            <div class="card-image">
              <img :src="image"/>
            </div>
          </div>
        </div>

        <div class="column">
          <h2 class="title">{{ title }}</h2>
          <p class="subtitle">{{ desc }}</p>
          <p>Price: {{ price }}</p>
          <p v-if="stocked">In Stock</p>
          <p v-else="stocked">Out of Stock</p>
        </div>
      </div>
    </div>
  `
})

Vue.component('tabs', {
  template: `
    <div class="tabs container">
      <ul>
        <li class="is-active"><a>Reviews</a></li>
        <li><a>Details</a></li>
      </ul>
  </div>
  `
})



var app = new Vue({
  el: '#app',
  data: {
    tagline: "The Best Store",
    nombre: 'Adam',
    product: {
      id: 1,
      title: 'Flannel Shirt',
      desc: 'The sexiest shirt you will ever wear',
      price: 25.00,
      image: "https://s3.amazonaws.com/images.gearjunkie.com/uploads/2015/09/stormy-kromer-flannel.png",
      stocked: true,
      details: {
        brand: 'Vuetiful',
        material: 'organic cotton',
        shipping: 3.99
      }
    }
  }
})


