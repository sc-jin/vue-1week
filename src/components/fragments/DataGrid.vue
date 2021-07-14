<template>
  <div>
    <div v-if="enableFilter">
      <input type="search" v-model="searchText" @keyup.enter="doFilter" />
      <button @click="doFilter">조회</button>
    </div>
    <table class="data-grid">
      <thead>
        <tr>
          <th v-if="selectType === 'radio' || selectType === 'checkbox'"></th>
          <th :key="i" v-for="(h, i) in headers" @click="doSort(h.key)">
            {{ h.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(item, i) in showList">
          <td v-if="selectType === 'radio'">
            <input
              type="radio"
              :value="item.code"
              v-model="checkedItem"
              @change="doSelect"
            />
          </td>
          <td v-else-if="selectType === 'checkbox'">
            <input
              type="checkbox"
              :value="item.code"
              v-model="checkedItems"
              @click="doSelect"
            />
          </td>
          <td :key="j" v-for="(h, j) in headers">
            <a
              class="link"
              v-if="h.link"
              @click="goToLink(item[h.linkKey], h.eventName)"
              >{{ item[h['key']] }}</a
            >
            <span v-else>{{ item[h['key']] }}</span>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="pagination" v-if="enablePaging">
      <a @click="prevPage" v-show="pageRange[0] > 1">&laquo;</a>
      <a
        @click="changePage(page)"
        :class="{ active: page == currentPage }"
        :key="page"
        v-for="page in pageRange"
        >{{ page }}</a
      >
      <a @click="nextPage" v-show="pageRange[pageRange.length - 1] < totalPage"
        >&raquo;</a
      >
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  props: {
    selectType: {
      type: String,
      default: ''
    },
    headers: {
      type: Array,
      default: function() {
        return [] // [{title:'컬럼명', key:'items의 오브젝트 키', link:false, linkKey:'', linkEventName:''}]
      }
    },
    items: {
      type: Array,
      default: function() {
        return []
      }
    },
    enableFilter: {
      type: Boolean,
      default: false
    },
    enablePaging: {
      type: Boolean,
      default: true
    },
    pagecnt: {
      type: Number,
      default: 10
    },
    eventName: {
      type: String,
      default: 'change-item'
    },
    checkedKey: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      filterList: [],
      showList: [],
      checkedItem: '',
      checkedItems: [],
      searchText: '',
      sortKey: '',
      sortValue: 1,
      totalPage: 1,
      currentPage: 1,
      pageRange: []
    }
  },
  watch: {
    items() {
      this.filterList = this.items
      this.changePage(1)
      this.paging()
      this.currentPage = 1
    }
  },
  setup() {},
  created() {},
  mounted() {
    this.filterList = this.items
    this.changePage(1)
    this.paging()
    this.currentPage = 1
  },
  unmounted() {},
  changed() {},
  methods: {
    doFilter() {
      const f = this.searchText.toLowerCase()
      if (f === '') {
        this.filterList = this.items
      } else {
        this.filterList = this.items.filter(item => {
          const len = this.headers.length
          let isExist = false
          for (let i = 0; i < len; i++) {
            if (
              item[this.headers[i].key]
                .toString()
                .toLowerCase()
                .indexOf(f) > -1
            ) {
              isExist = true
              break
            }
          }

          return isExist
        })
      }

      this.paging()
      this.changePage(1)
    },
    doSort(key) {
      console.log(key)
      this.sortValue = this.sortKey === key ? this.sortValue * -1 : 1

      const sortValue1 = this.sortValue
      const sortValue2 = this.sortValue * -1

      this.filterList = this.filterList.sort(function(a, b) {
        return a[key] > b[key] ? sortValue1 : b[key] > a[key] ? sortValue2 : 0
      })

      this.sortKey = key
      this.changePage(this.currentPage)
    },
    paging() {
      this.totalPage = Math.ceil(this.filterList.length / this.pagecnt)
      if (this.totalPage > 5) {
        this.pageRange = [1, 2, 3, 4, 5]
      } else {
        var pageRange = []
        for (var i = 1; i <= this.totalPage; i++) {
          pageRange.push(i)
        }

        this.pageRange = pageRange
      }
    },
    changePage(pageNo) {
      this.currentPage = pageNo
      const showList = []
      const startIdx = (pageNo - 1) * this.pagecnt
      let endIdx = pageNo * this.pagecnt - 1
      if (endIdx > this.filterList.length) {
        endIdx = this.filterList.length
      }

      for (let i = startIdx; i < endIdx; i++) {
        showList.push(this.filterList[i])
      }

      this.showList = showList
    },
    prevPage() {
      const pageNo = this.pageRange[0]
      this.currentPage = pageNo
      this.pageRange = [
        pageNo - 5,
        pageNo - 4,
        pageNo - 3,
        pageNo - 2,
        pageNo - 1
      ]
    },
    nextPage() {
      const pageNo = this.pageRange[this.pageRange.length - 1]
      this.currentPage = pageNo
      const startIdx = pageNo + 1
      let endIdx = pageNo + 5
      if (endIdx > this.totalPage) {
        endIdx = this.totalPage
      }

      const pageRange = []
      for (let i = startIdx; i <= endIdx; i++) {
        pageRange.push(i)
      }

      this.pageRange = pageRange
    },
    doSelect() {
      if (this.selectType === 'radio') {
        this.$emit(this.eventName, this.checkedItem)
      } else if (this.selectType === 'checkbox') {
        this.$emit(this.eventName, this.checkedItems)
      }
    },
    goToLink(v, eventName) {
      this.$emit(eventName, v)
    }
  }
}
</script>
<style scoped>
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

.pagination {
  display: inline-block;
}

.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  cursor: pointer;
}

.pagination a.active {
  background-color: deeppink;
  color: white;
}

.link {
  cursor: pointer;
  text-decoration: underline;
}
</style>
