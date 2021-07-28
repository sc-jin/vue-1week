<template>
  <div class="container">
    <div class="search-container">
      <div>
        <label class="label">지역</label>
        <region @change-region="changeRegion" />
      </div>
      <div>
        <label class="label">고객명</label>
        <input type="text" v-model="searchCustomerName" />
      </div>
      <div>
        <button @click="doSearch">조회</button>
        <button @click="doSave">저장</button>
        <button @click="doDelete">삭제</button>
      </div>
    </div>
    <div class="table-container">
      <table class="data-grid">
        <thead>
          <tr>
            <th></th>
            <th>고객명</th>
            <th>회사명</th>
            <th>성별</th>
            <th>이메일</th>
            <th>연락처</th>
            <th>주소</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="item._id" v-for="item in items">
            <td>
              <input type="checkbox" :value="item._id" v-model="checked" />
            </td>
            <td>
              <input type="text" v-model="item.name" />
            </td>
            <td>
              <input type="text" v-model="item.company" />
            </td>
            <td>
              {{ item.gender }}
            </td>
            <td>
              <input type="email" v-model="item.email" />
            </td>
            <td>
              <input type="tel" v-model="item.phone" />
            </td>
            <td>
              <input type="text" v-model="item.address" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import Region from '@/components/fragments/Region.vue'

export default {
  name: '',
  components: { region: Region },
  data() {
    return {
      searchRegion: '',
      searchCustomerName: '',
      regionList: [],
      items: [],
      checked: []
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    changeRegion(data) {
      this.searchRegion = data
    },
    goToDetail(customerId) {
      this.$router.push({ path: '/template/detail', query: { id: customerId } })
    },
    doSave() {
      const checkedList = []
      if (this.checked.length === 0) {
        return alert('저장할 아이템을 선택하세요.')
      }

      for (const id of this.checked) {
        checkedList.push(this.items.filter(item => item._id === id)[0])
      }

      console.log(checkedList)
    },
    doDelete() {
      if (this.checked.length === 0) {
        return alert('저장할 아이템을 선택하세요.')
      }

      console.log(this.checked)
    },
    async doSearch() {
      const param = {
        region: this.searchRegion,
        customerName: this.searchCustomerName
      }

      console.log(param)

      this.items = await this.$api('/users')
    }
  }
}
</script>
<style scoped>
.search-container {
  padding: 10px;
}

.search-container:after {
  clear: none;
}

.search-container > div {
  float: left;
  margin-right: 10px;
}

.search-container .label {
  margin-right: 5px;
  font-weight: bold;
}

.search-container button {
  margin-right: 5px;
}

.data-grid {
  width: 100%;
}

.data-grid,
.data-grid th,
.data-grid td {
  border-collapse: collapse;
}

.data-grid th,
.data-grid td {
  border: 1px solid #222;
  padding: 5px;
}

.data-grid th {
  cursor: pointer;
}

.data-grid td input {
  width: 100%;
}

.link {
  cursor: pointer;
  text-decoration: underline;
}

.table-container {
  margin-top: 10px;
  padding: 10px;
}
</style>
