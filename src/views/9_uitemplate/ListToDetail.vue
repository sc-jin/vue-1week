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
        checkedKey="id"
        @link="goToDetail"
      />
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
          key: 'company',
          link: true,
          linkKey: 'id',
          eventName: 'link'
        },
        { title: '성별', key: 'gender' },
        { title: '이메일', key: 'email' },
        { title: '연락처', key: 'phone' },
        { title: '주소', key: 'address' }
      ],
      items: []
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
</style>
