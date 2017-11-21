////////////////////////////////////////////////////PRODUCT-DISPLAY//

Vue.component('product-display', {
  props: ['title', 'desc','price', 'stocked', 'image', 'variants'],
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
          <hr>
          <div>
            <p>Color Options:</p>

            <ul >
              <li v-for="variant in variants">
                <div :style="{ backgroundColor: variant.color }" style="width: 40px; height: 40px; margin: 10px;" v-on:mouseover="updateImage(variant.image)"></div>
              </li>
            </ul>
  
            </div>
        </div>
      </div>
    </div>
  `,
  methods: {
    updateImage(image) {
      this.$emit('update-image', image)
    }
  }
})

////////////////////////////////////////////////////////PRODUCT-TABS//

Vue.component('tabs', {
  template: `
  <div class="container">
    <div class="tabs">
      <ul>
        <li v-for="tab in tabsArray" :class="{ 'is-active' : tab.isActive }">
          <a @click="selectTab(tab)">{{ tab.name }}</a>
        </li>
      </ul>
    </div>

    <div>
      <slot></slot>
    </div>
  </div>
  `,
  data() {
    return {
      tabsArray: []
    }
  },
  mounted() {
    this.tabsArray = this.$children;
  },
  methods: {
    selectTab(clickedTab) {
      this.tabsArray.forEach(tab =>
        tab.isActive = (tab === clickedTab)
      )
    }
  }
})

////////////////////////////////////////////////////////PRODUCT-TAB//

Vue.component('tab', {
  template: `
    <div v-show="isActive">
      <slot></slot>
    </div>
  `,
  props: { 
    name: { required: true },
    selected: { default: false }
    // brand: String,
    // material: String,
    // shipping: Number
  },
  data() {
    return {
      isActive: false
    }
  },
  mounted() {
    this.isActive = this.selected
  }
})


///////////////////////////////////////////////////////////INSTANCE//

var app = new Vue({
  el: '#app',
  data: {
    tagline: "The Best Store",
    nombre: 'Adam',
    product: {
      id: 1,
      title: 'Flannel Shirt',
      desc: 'The finest shirt you will ever wear',
      price: 25.00,
      image: "https://s3.amazonaws.com/images.gearjunkie.com/uploads/2015/09/stormy-kromer-flannel.png",
      stocked: true,
      variants: [
        {
          id: 234,
          color: "Red",
          quantity: 5,
          image: "https://s3.amazonaws.com/images.gearjunkie.com/uploads/2015/09/stormy-kromer-flannel.png"
        },
        {
          id: 235,
          color: "Blue",
          quantity: 3,
          image: "https://i5.walmartimages.com/asr/56135c24-a32d-4765-b528-2f7480e4fb8d_1.b112247c8a6b575c89b9749f7b118462.jpeg"
        }
      ],
      details: {
        brand: 'Vuetiful',
        material: 'organic cotton',
        shipping: 3.99
      }
    }
  },
  methods: {
    updateImage(url) {
      this.product.image = url
    }
  }
})