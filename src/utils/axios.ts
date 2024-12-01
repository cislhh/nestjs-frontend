import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { ElMessage } from "element-plus"; // 假设使用 Element Plus 作为 UI 库来显示消息

// 定义接口错误码映射
interface ErrorCodeMapping {
  [key: number]: string;
}

const errorCodeMapping: ErrorCodeMapping = {
  400: "请求错误",
  401: "未授权，请登录",
  403: "拒绝访问",
  404: "请求地址出错",
  500: "服务器内部错误",
  // 其他错误码...
};

// 创建 Axios 实例
const service: AxiosInstance = axios.create({
  baseURL: "/api/v1", // 根据环境变量设置基础URL
  //   baseURL: import.meta.env.VITE_APP_BASE_API, // 根据环境变量设置基础URL
  timeout: 60000, // 请求超时时间
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    const token = localStorage.getItem("token"); // 获取存储的token
    if (token && config.headers) {
      config.headers["Authorization"] = `Bearer ${token}`; // 让每个请求携带自定义token
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data;
    const resCode = response.status;
    // 如果返回的状态码不是200，则认为是失败的
    if (resCode !== 200) {
      ElMessage({
        message: errorCodeMapping[resCode] || "未知错误",
        type: "error",
      });
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  (error) => {
    // 对响应错误做点什么
    if (error.response) {
      // 请求已发出，但服务器响应的状态码不在 2xx 范围内
      ElMessage({
        message: errorCodeMapping[error.response.status] || "未知错误",
        type: "error",
      });
    } else {
      // Something happened in setting up the request that triggered an Error
      ElMessage({
        message: error.message,
        type: "error",
      });
    }
    return Promise.reject(error);
  }
);

// 导出一个函数用于发起 GET 请求
export function get<T>(
  url: string,
  params?: any,
  config?: AxiosRequestConfig
): Promise<T> {
  return service.get(url, { params, ...config });
}

// 导出一个函数用于发起 POST 请求
export function post<T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<T> {
  return service.post(url, data, config);
}

// 根据需要导出其他方法...

// 导出默认服务实例，以便外部可以自定义请求
export default service;
