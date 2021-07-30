<template>
  <div>
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
      </div>
    </div>
    <div class="table-container">
      <data-grid
        :headers="headers"
        :items="items"
        selectType="radio"
        checkedKey="id"
        :pagecnt="5"
        @change-item="showDetail"
      />
    </div>
    <div class="detail-container" v-show="customer.id">
      <div class="btn-area">
        <button @click="doSave">저장</button>
      </div>
      <table class="detail-table">
        <tr>
          <th>고객아이디</th>
          <td>{{ customer.id }}</td>
        </tr>
        <tr>
          <th>고객명</th>
          <td><input type="text" v-model="customer.name" /></td>
        </tr>
        <tr>
          <th>회사명</th>
          <td><input type="text" v-model="customer.company" /></td>
        </tr>
        <tr>
          <th>이메일</th>
          <td><input type="text" v-model="customer.email" /></td>
        </tr>
        <tr>
          <th>연락처</th>
          <td><input type="text" v-model="customer.phone" /></td>
        </tr>
        <tr>
          <th>주소</th>
          <td><input type="text" v-model="customer.address" /></td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import Region from '@/components/fragments/Region.vue'
import DataGrid from '@/components/fragments/DataGrid.vue'

export default {
  name: '',
  components: { region: Region, 'data-grid': DataGrid },
  data() {
    return {
      searchRegion: '',
      searchCustomerName: '',
      regionList: [],
      headers: [
        { title: '고객명', key: 'name' },
        {
          title: '회사명',
          key: 'company'
        },
        { title: '성별', key: 'gender' },
        { title: '이메일', key: 'email' },
        { title: '연락처', key: 'phone' },
        { title: '주소', key: 'address' }
      ],
      items: [],
      customer: {}
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
    showDetail(customerId) {
      this.customer = this.items.filter(c => c.id === customerId)[0]
    },
    doSave() {
      console.log(this.customer)
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
  clear: both;
}

.search-container > div {
  float: left;
  margin-right: 10px;
}

.search-container .label {
  margin-right: 5px;
  font-weight: bold;
}

.table-container {
  margin-top: 10px;
  padding: 10px;
}

.detail-container {
  margin-top: 10px;
}

.detail-table {
  width: 100%;
}

.detail-table,
.detail-table th,
.detail-table td {
  border-collapse: collapse;
}

.detail-table th,
.detail-table td {
  border: 1px solid #222;
  padding: 10px;
}

.detail-table th {
  text-align: right;
}

.detail-table td {
  text-align: left;
}

.detail-table td input {
  width: 100%;
}

.btn-area {
  text-align: right;
  margin-right: 10px;
  margin-bottom: 10px;
}

.btn-area button {
  padding: 5px;
  margin-right: 5px;
}
</style>
