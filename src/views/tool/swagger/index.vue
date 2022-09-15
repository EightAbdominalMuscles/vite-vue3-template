<template>
  <i-frame v-model:src="url"></i-frame>
</template>

<script setup name="MyIframe">
import iFrame from '@/components/iFrame'
import { ref } from 'vue'
const url = ref('https://www.baidu.com')
</script>
