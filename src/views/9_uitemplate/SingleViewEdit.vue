<template>
  <div class="container">
    <div></div>
    <table class="customer-table">
      <tr>
        <th>고객 선택</th>
        <td>
          <select
            v-model="customerId"
            @change="changeCustomer"
            style="width:100%;"
          >
            <option value="">==고객을 선택하세요==</option>
            <option :value="item.id" :key="item.id" v-for="item in items">{{
              item.name
            }}</option>
          </select>
        </td>
      </tr>
      <template v-if="customer">
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
      </template>
    </table>

    <div class="btn-area">
      <button @click="doSave">저장</button>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      items: [],
      customer: {},
      customerId: ''
    }
  },
  setup() {},
  created() {
    this.getCustomer()
  },
  mounted() {},
  unmounted() {},
  methods: {
    async doSave() {
      console.log('customerId', this.customerId)
      const { name, company, email, phone, address } = this.customer
      const r = await this.$put(`/users/${this.customerId}`, {
        name,
        company,
        email,
        phone,
        address
      })
      console.log('result', r)
    },
    async changeCustomer() {
      if (this.customerId === '') {
        return
      }
      this.customer = await this.$api(`/users/${this.customerId}`)
    },
    async getCustomer() {
      this.items = await this.$api('/users')
    }
  }
}
</script>
<style scoped>
.customer-table {
  width: 100%;
}

.customer-table,
.customer-table th,
.customer-table td {
  border-collapse: collapse;
}

.customer-table th,
.customer-table td {
  border: 1px solid #222;
  padding: 10px;
}

.customer-table th {
  text-align: right;
}

.customer-table td input {
  width: 100%;
}

.btn-area {
  text-align: center;
  margin-top: 10px;
}

.btn-area button {
  padding: 5px;
  margin-right: 5px;
}
</style>
