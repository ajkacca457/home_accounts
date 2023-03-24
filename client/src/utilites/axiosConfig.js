import axios from "axios";

export const apiFetch=(token=null)=> {
    
    const api= axios.create({
        baseURL:"http://localhost:5000/api/v1"
    })

    api.interceptors.request.use((config)=>{
        config.headers["Authorization"]= `Bearer ${token}`;
        return config;
    },(error)=>{
        return Promise.reject(error);
    })

    api.interceptors.response.use((response)=>{
        return response;
    },(error)=>{
        return Promise.reject(error);
    })

 return api;
}