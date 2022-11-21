<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useRouter } from '@/hooks'

export default defineComponent({
  name: 'App',
  setup() {
    const router = useRouter()
    onMounted(() => {})
    return {}
  },
})
</script>

<style src="./styles/app.scss" lang="scss" />
