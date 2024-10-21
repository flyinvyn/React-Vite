import { useContext, useEffect, useRef, useState } from "react"
// import Button from "../components/Elements/Button"
import CardProduct from "../components/Fragments/CardProduct"
// import { useLogin } from "../hooks/userLogin"
import { getProducts } from "../services/product.service"
import TableCard from "../components/Fragments/TableCard"
import Navbar from "../components/Layout/Navbar"
import { DarkMode } from "../context/DarkMode"


const ProductPage = () => {
    // const [cart, setCart] = useState([]);
    // const [totalPrice, setTotalPrice] = useState([0]);
    const [products, setProducts] = useState([])
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
    // const username = useLogin()
    // useEffect(() => {
    //     setCart(JSON.parse(localStorage.getItem("cart")) || [])
    // }, [])

    useEffect(() => {
        getProducts((data) => {
            setProducts(data)
        })
    }, []);



    // const handleLogout = () => {
    //     localStorage.removeItem('token')
    //     window.location.href = "/login"
    // }

    // const handleAddToCart = (id) => {
    //     if (cart.find((item) => item.id === id)) {
    //         setCart(
    //             cart.map((item) =>
    //                 item.id === id ? { ...item, qty: item.qty + 1 } : item
    //             )
    //         )
    //     } else {
    //         setCart([
    //             ...cart,
    //             {
    //                 id,
    //                 qty: 1,
    //             },
    //         ])
    //     }
    // }

    // useRef

    // const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || [])

    // const handleAddToCartRef = (id) => {
    //     cartRef.current = [...cartRef.current, { id, qty: 1 }]
    //     localStorage.setItem("cart", JSON.stringify(cartRef.current))
    // }


    return (
        <>
        <Navbar />
            <div className={`flex justify-center py-5 ${isDarkMode && 'bg-slate-900'}`}>
                <div className="w-4/6 flex flex-wrap">
                    {products.length > 0 && products.map((product) => (
                        <CardProduct key={product.id}>
                            <CardProduct.Header image={product.image} id={product.id} />
                            <CardProduct.Body name={product.title}>
                                {product.description}
                            </CardProduct.Body>
                            <CardProduct.Footer
                                price={product.price}
                                id={product.id}
                            />
                        </CardProduct>
                    ))}
                </div>
                <div className="w-2/6">
                    <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
                    <TableCard products={products} />
                </div>
            </div>
            {/* <div className="mt-5 flex justify-center">
                <Counter></Counter>
            </div> */}
        </>
    )
}

export default ProductPage