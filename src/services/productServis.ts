import axios from "axios";
import { Product } from "../interfaces/Product";
import { getUserById } from "./userService";
const api: string = `${process.env.REACT_APP_API}/products`;
// get all products
export function getAllProducts() {
return axios.get(api);
}
// get product by id
export function getProductById(id: string) {
return axios.get(`${api}/${id}`);
}
// add new product
export function addProduct(product: Product) {
return axios.post(api, product);
}
// update product
export function updateProduct(product: Product) {
return axios.put(`${api}/${product.id}`, product);
}
// delete product
export function deleteProduct(id: string) {
return axios.patch(`${api}/${id}`, {available:false});
}

// export async function checkIfAdmin() {
//     try {
//     // 1. check if user already logged in
//     if (localStorage.getItem("userId") != null) {
//         let user = await getUserById();
//         console.log(user.data.isAdmin);

//         // 2. check if admin
//         return user.data.isAdmin;
//     }
//     return false;
//     } catch (error) {
//     console.log(error);
//     }
// }

