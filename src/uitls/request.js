import axios from "axios";

// 创建实例
const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',//基础路由
    timeout:5000,//超时
})

// 请求拦截器
instance.interceptors.request.use(
    (config) => {
        // 配置，在请求之前要做的处理
        // 例如添加token
        // const token = localStorage.getItem('token');
        //  if(token){
        //  config.headers['Authorization'] = `Bearer ${token}`;
        // }
        return config;
    },
    (error) => {
        // 对错误做处理
        return Promise.reject(error);
    }
);

// 响应拦截器

instance.interceptors.response.use(
    (response) => {
        // 对数据做处理
        
        return response.data;//只返回数据部分
    },

    (error) =>{
        // 响应错误处理
        console.error("错误",error);
        return Promise.reject(error);
    }
);

export default instance;