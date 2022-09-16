import { useUserStore } from '@/store'
/**
 * 权限控制（信息）
 * @returns
 */
export default function usePermission() {
  const userStore = useUserStore()
  return {
    /**
     * 路由是否有权可访问
     * requiresAuth 是否需要访问权限
     * roles 是否有 roles
     * roles 是否是有*
     * roles中 有接口里的role 【从后台获取该用户有访问权限】
     */
    accessRouter(route) {
      return (
        !route.meta?.requiresAuth ||
        !route.meta?.roles ||
        route.meta?.roles?.includes('*') ||
        route.meta?.roles?.includes(userStore.role)
      )
    },
    /**
     * 查找第一个权限路径
     */
    findFirstPermissionRoute(_routers, role) {
      const cloneRouters = [..._routers]
      while (cloneRouters) {
        // 拿数组中的第一个路径
        const firstElement = cloneRouters.shift()
        // 在路由权限里存在后台路由 就返回
        if (
          firstElement?.meta?.roles?.find((el) => {
            return el.includes('*') || el.includes(role)
          })
        ) {
          return { name: firstElement.name }
        }
        // 如果当前路由有children 则继续插入循环【数据扁平继续循环】
        if (firstElement?.children) {
          cloneRouters.push(...firstElement.children)
        }
      }
      return null
    }
  }
}
