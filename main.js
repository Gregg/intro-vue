////////////////////////////////////////////////////PRODUCT-DISPLAY//

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
          <div style="border: 1px solid black; width: 30%;">
            <p>Color Options:</p>
            <div style="background-color: red; width: 40px; height: 30px; margin: 5px;"></div>
            <div style="background-color: blue; width: 40px; height: 30px; margin: 5px;"></div>
          
          </div>
        </div>
      </div>
    </div>
  `
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
          image: ""
        },
        {
          id: 235,
          color: "Blue"
        }
      ],
      details: {
        brand: 'Vuetiful',
        material: 'organic cotton',
        shipping: 3.99
      }
    }
  }
})