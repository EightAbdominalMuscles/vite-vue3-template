import { ref } from 'vue'
import useLoading from './loading'
/**
 * 请求封装
 * 作用 统一loading 和 请求结果 【相当于await 和 loading】
 * @param {*} api
 * @param {*} defaultValue
 * @param {*} isLoading
 * @returns
 */
export default function useRequest(api, defaultValue = [], isLoading = true) {
  const { loading, setLoading } = useLoading(isLoading)
  const response = ref(defaultValue)
  api()
    .then((res) => {
      response.value = res.data
    })
    .finally(() => {
      setLoading(false)
    })
  return { loading, response }
}
