<template>
  <div>
    <input type="text" @keyup.enter="doSearch" />
    <button @click="doSearch">조회</button>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      sel: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doSearch() {
      console.log('조회 실행')
    },
    myFunction() {
      console.log('클릭 이벤트 발생')
    },
    changeSelect() {
      console.log(this.sel)
    }
  }
}
</script>
