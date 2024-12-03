// 废弃
// src/hooks/useNavigation.js
import { useRouter } from "vue-router";

export function useNavigation() {
  const router = useRouter();

  // 定义一个通用的导航方法，可以接收参数
  const navigate = (to: any, params = {}, query = {}) => {
    if (typeof to === "string") {
      // 如果 to 是字符串，则当作路径处理
      router.push({ path: to, query });
    } else if (to && typeof to === "object" && to.name) {
      // 如果 to 是对象并且包含 name 属性，则当作命名路由处理
      router.push({ ...to, params });
    }
  };

  // 其他特定的导航方法...
  const goHome = () => navigate({ name: "Home" });

  // 导出需要的方法或属性...
  return {
    navigate,
    goHome,
    // 可以添加更多方法...
  };
}
