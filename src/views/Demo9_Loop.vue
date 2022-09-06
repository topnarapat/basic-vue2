<template>
  <div id="demo9">
    <ul>
      <li v-for="(item, index) in ['Vue', 'React']" :key="index">{{ item }}</li>
    </ul>
    <hr>
    <ul>
      <li v-for="(item, index) in province" :key="index">{{ item }}</li>
    </ul>
    <hr>
    <ul>
      <li v-for="(item, index) in products" :key="index">{{ item.title }} {{ item.price }}</li>
    </ul>
    <hr>
    <ul>
      <li v-for="({title, price}, index) in products" :key="index">
        {{ title }} {{ price }}
        <button @click="deleteProduct(index)">Delete</button>
      </li>
    </ul>
    <hr>
    <input type="text" v-model="product.name">
    <br>
    <input type="number" v-model="product.price">
    <button @click="addProduct">Submit</button>
  </div>
</template>

<script>
export default {
  name: 'demo9_loop',
  data() {
    return {
      province: [
        'Bangkok',
        'Phuket'
      ],
      product: { title: '', price: 0 },
      products: [
        { title: 'iPhone', price: 30000 },
        { title: 'iPad', price: 40000 }
      ]
    }
  },
  methods: {
    addProduct() {
      this.products.push(this.product);
      this.product = { title: '', price: 0}
    },
    deleteProduct(index) {
      this.products.splice(index, 1);
    }
  }
}
</script>

<style>

</style>