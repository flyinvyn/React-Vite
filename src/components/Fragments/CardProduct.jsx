import { Link } from "react-router-dom"
import Button from "../Elements/Button"
import { useDispatch } from "react-redux"
import { addToCart } from "../../redux/slices/cartSlice"

//Nested Component
const CardProduct = (props) => {
    const { children } = props
    return (
        <div className="w-full max-w-xs bg-gray-800 border
        border-gray-700 rounded-lg shadow mx-3 my-2 flex flex-col"
        >
            {children}
        </div>
    )
}

const Header = (props) => {
    const { image, id } = props
    return (
        <Link to={`/product/${id}`}>
            <img
                src={image}
                alt="product"
                className="p-8 rounded-t-lg h-60 w-full object-cover" />
        </Link>
    )
}

const Body = (props) => {
    const { name, children } = props
    return (
        <div className="px-5 pb-5 h-full">
            <Link to="">
                <h5 className="text-xl font-semibold tracking-tight text-white mb-2">
                    {name.substring(0, 20)} ...
                </h5>
                <p className="text-m text-white">
                    {children.substring(0, 100)} ...
                </p>
            </Link>
        </div>
    )
}

const Footer = (props) => {
    const { price, id } = props
    const dispatch = useDispatch()
    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-xl font-bold text-white">
                $ {price.toLocaleString('id-ID', { styles: 'currency', currency: 'USD' })}
            </span>
            <Button
                classname="bg-blue-600"
                onClick={() => dispatch(addToCart({ id, qty: 1 }))}
            >Add to cart</Button>
        </div>
    )
}

CardProduct.Header = Header
CardProduct.Body = Body
CardProduct.Footer = Footer

export default CardProduct