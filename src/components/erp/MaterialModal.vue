<template>
  <div>
    <data-grid
      selectType="radio"
      :headers="headers"
      :items="items"
      checkedKey="code"
      eventName="change-item"
      @link="goToDetail"
      @change-item="selectMaterial"
    />
  </div>
</template>
<script>
import DataGrid from '../fragments/DataGrid.vue'

export default {
  name: '',
  components: { 'data-grid': DataGrid },
  data() {
    return {
      headers: [
        {
          title: '제품코드',
          key: 'code',
          link: true,
          linkKey: 'code',
          eventName: 'link'
        },
        { title: '제품명', key: 'desc' },
        { title: '제품가격', key: 'price' }
      ],
      items: [],
      checked: ''
    }
  },
  setup() {},
  created() {
    this.getList()
  },
  mounted() {},
  unmounted() {},
  methods: {
    getList() {
      this.items = [
        { code: 'P0001', desc: '제품명 A', price: 3500000 },
        { code: 'P0002', desc: '제품명 B', price: 2700000 },
        { code: 'P0003', desc: '제품명 C', price: 5000000 },
        { code: 'P0004', desc: '제품명 D', price: 4000000 },
        { code: 'P0005', desc: '제품명 E', price: 2900000 },
        { code: 'P0006', desc: '제품명 F', price: 15000000 },
        { code: 'P0007', desc: '제품명 G', price: 3300000 },
        { code: 'P0008', desc: '제품명 H', price: 8900000 },
        { code: 'P0009', desc: '제품명 I', price: 21000000 },
        { code: 'P0010', desc: '제품명 J', price: 5000000 },
        { code: 'P0011', desc: '제품명 K', price: 3000000 },
        { code: 'P0012', desc: '제품명 L', price: 2000000 },
        { code: 'P0013', desc: '제품명 M', price: 4000000 },
        { code: 'P0014', desc: '제품명 N', price: 5000000 }
      ]
    },
    selectMaterial(code) {
      console.log(code)
      this.checked = code
    },
    goToDetail(v) {
      console.log(v)
    }
  }
}
</script>
<style scoped>
.material-table {
  width: 100%;
}

.material-table,
.material-table > th,
.material-table > td {
  border-collapse: collapse;
}

.material-table > th,
.material-table > td {
  border: 1px solid #222;
}
</style>
