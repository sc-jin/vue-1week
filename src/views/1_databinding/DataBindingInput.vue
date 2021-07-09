<template>
  <div>
    <input type="text" v-model="valueModel" />
    <input type="number" v-model.number="numberModel" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      valueModel: 'South Korea',
      numberModel: 3
    }
  }
}
</script>
