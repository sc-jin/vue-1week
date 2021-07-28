<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="btn-area">
          <button @click="addItem">추가</button>
        </div>
        <div class="table-container">
          <data-grid
            :headers="headers"
            :items="items"
            selectType="checkbox"
            checkedKey="_id"
            @change-item="checkedItem"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="btn-area">
          <button @click="removeItem">삭제</button>
        </div>
        <div class="table-container">
          <data-grid
            :headers="headers"
            :items="items2"
            selectType="checkbox"
            checkedKey="_id"
            @change-item="checkedItem2"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DataGrid from '@/components/fragments/DataGrid.vue'
export default {
  name: '',
  components: { 'data-grid': DataGrid },
  data() {
    return {
      headers: [
        { title: '고객명', key: 'name' },
        {
          title: '회사명',
          key: 'company'
        },
        { title: '이메일', key: 'email' }
      ],
      items: [],
      items2: [],
      addItems: [],
      removeItems: []
    }
  },
  setup() {},
  created() {},
  mounted() {
    this.doSearch()
  },
  unmounted() {},
  methods: {
    checkedItem(data) {
      this.addItems = data
    },
    checkedItem2(data) {
      this.removeItems = data
    },
    addItem() {
      if (this.addItems.length === 0) {
        return alert('추가할 아이템을 선택하세요.')
      }
      const items = JSON.parse(JSON.stringify(this.items2))
      this.items.forEach(item => {
        let isExist = false
        this.addItems.forEach(item2 => {
          if (item._id === item2) {
            isExist = true
          }
        })

        if (isExist) {
          console.log(item)
          items.push(item)
        }
      })

      this.items2 = items

      console.log(this.addItems)
      console.log(this.items2)
    },
    removeItem() {
      if (this.removeItems.length === 0) {
        return alert('삭제할 아이템을 선택하세요.')
      }

      const items = []
      this.items2.forEach(item => {
        let isExist = false
        this.removeItems.forEach(item2 => {
          if (item._id === item2) {
            isExist = true
          }
        })

        if (!isExist) {
          items.push(item)
        }
      })

      this.items2 = items
    },
    async doSearch() {
      this.items = await this.$api('/users')
    }
  }
}
</script>
<style scoped>
.btn-area {
  text-align: right;
  margin-bottom: 5px;
}

.btn-area button {
  padding: 5px;
}
</style>
