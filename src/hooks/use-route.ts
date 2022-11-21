import router from '@/Routes'
import { computed } from 'vue'

export const useRoute = () => {
  return computed(() => router.currentRoute)
}
export const useRouter = () => {
  return router
}
