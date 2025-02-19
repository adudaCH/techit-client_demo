import { FunctionComponent, useEffect, useState } from "react";
import { Product } from "../interfaces/Product";
import { getProductsFromCart } from "../services/cartService";

interface CartProps {}

const Cart: FunctionComponent<CartProps> = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        getProductsFromCart()
            .then((res: any) => {
                const products = res.map((item: any) => item.data as Product);
                setProducts(products);
            })
            .catch((err: any) => console.error(err));
    }, []); // Dependency array ensures the effect runs only once

    return (
        <>
    
            <h1 className="display-1 ml">cart</h1>
            {products.length > 0 ? (
                <>
                    <table className="table table-striped w-75 center ">
                        <thead>
                            <tr>
                                <th className="col-2">Product Name</th>
                                <th className="col-2">Price</th>
                                <th className="col-2">Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    {/* TODO: calculate the price if theres more then 1 */}
                                    <td>{product.quantity}</td>
                                    {/* TODO: show the amount */}
                                    {/* TODO: check out component */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button className="btn btn-success mt-3 center">Check Out</button>
                </>
            ) : (
                <p>No products in cart</p>
            )}
        </>
    );
};

export default Cart;
