import axios from "axios"
export function productApi() {
    return axios.get("https://dummyjson.com/products")
}