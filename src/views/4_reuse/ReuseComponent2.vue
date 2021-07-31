<template>
  <div>
    <SimpleGrid
      :headers="headers"
      :items="items"
      selectType="checkbox"
      checkedKey="id"
      @change-item="showDetail"
    />
  </div>
</template>
<script>
import SimpleGrid from '@/components/fragments/SimpleGrid.vue'

export default {
  name: '',
  components: { SimpleGrid },
  data() {
    return {
      headers: [
        { title: '이름', key: 'name' },
        { title: '연락처', key: 'tel' },
        { title: '이메일', key: 'email' }
      ],
      items: [
        {
          id: 1,
          name: '유재석',
          tel: '010-2333-0000',
          email: 'ryu@gmail.com',
          addr: '서울시'
        },
        {
          id: 2,
          name: '김종국',
          tel: '010-0000-0000',
          email: 'kim@gmail.com',
          addr: '서울시'
        },
        {
          id: 3,
          name: '지석진',
          tel: '010-0000-0000',
          email: 'ji@gmail.com',
          addr: '서울시'
        }
      ]
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    showDetail(data) {
      console.log(data)
    }
  }
}
</script>
